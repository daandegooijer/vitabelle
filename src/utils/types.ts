type Link = { title: string; url: string; target: string }
type Image = { url: string; title: string; alt: string }
type Hero = {
	image: Image
	first_title: string
	link: Link
}

type Blocks = { title: string; content: string; image: Image }

type SEO = { pageTitle: string; metaDescription: string }

interface Page {
	acf: {
		hero: Hero
		blocks: Blocks[]
	}
	yoast_head_json: {
		title: string
		description: string
	}
}

interface DestructedPage {
	seo: SEO
	hero: Hero
	blocks: Blocks[]
}

export type { Page, DestructedPage, SEO, Hero, Blocks, Image, Link }
