import type { DestructedPage, Page } from './types'
import { config } from '../../config'
import { getImage } from 'astro:assets'
import * as cheerio from 'cheerio'

enum Menus {
	TOP = 'top'
}

const getMenus = async (id?: string) => {
	const res = await fetch(`${config.site.wp_url}${config.endpoints.menus}${id ? `/${id}` : ''}`)

	return await res.json()
}

const getMenu = async (id: Menus) => {
	const menus = await getMenus()

	return await getMenus(menus[id])
}

const getPage = async () => {}

const getPost = async () => {}

const destructPage = (page: Page): DestructedPage => {
	const { acf, yoast_head_json } = page
	const { title, description } = yoast_head_json
	const { hero, blocks } = acf

	return {
		seo: {
			pageTitle: title,
			metaDescription: description
		},
		hero,
		blocks
	}
}

const parseContent = async (content: string) => {
	const $ = cheerio.load(content, {
		xmlMode: true
	})

	const images = $('img')
		.map(async (i, el) => {
			const $el = $(el)
			const src = $el.attr('src')
			if (!src) return

			try {
				const optimizedImage = await getImage({
					src,
					width: parseInt($el.attr('width') || '100'),
					height: parseInt($el.attr('height') || '100')
				})

				if (optimizedImage) {
					$el.attr('src', optimizedImage.src)
				}
			} catch (error) {
				console.error(`Failed to optimize image: ${src}`, error)
			}
		})
		.get()

	await Promise.all(images)

	return $.html()
}

export { destructPage, getMenu, getPage, getPost, parseContent, Menus }
