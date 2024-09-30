// create a new file called config.ts in the src folder and add the following code:
export const config = {
	site: {
		title: 'Astro',
		description: 'The best way to build modern websites',
		wp_url: 'https://vitabelle.daandegooijer.nl/wp-json'
	},
	endpoints: {
		pages: '/wp/v2/pages',
		posts: '/wp/v2/posts',
		menus: '/custom/menu'
	}
}
