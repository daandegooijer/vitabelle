/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		container: {
			padding: '1rem',
			center: true
		},
		colors: {
			primary: {
				DEFAULT: 'rgb(var(--color-primary-500) / <alpha-value>)',
				50: 'rgb(var(--color-primary-50) / <alpha-value>)',
				100: 'rgb(var(--color-primary-100) / <alpha-value>)',
				200: 'rgb(var(--color-primary-200) / <alpha-value>)',
				300: 'rgb(var(--color-primary-300) / <alpha-value>)',
				400: 'rgb(var(--color-primary-400) / <alpha-value>)',
				500: 'rgb(var(--color-primary-500) / <alpha-value>)',
				600: 'rgb(var(--color-primary-600) / <alpha-value>)',
				700: 'rgb(var(--color-primary-700) / <alpha-value>)',
				800: 'rgb(var(--color-primary-800) / <alpha-value>)',
				900: 'rgb(var(--color-primary-900) / <alpha-value>)'
			},
			secondary: {
				DEFAULT: 'rgb(var(--color-secondary-500) / <alpha-value>)',
				50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
				100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
				200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
				300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
				400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
				500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
				600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
				700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
				800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
				900: 'rgb(var(--color-secondary-900) / <alpha-value>)'
			},
			text: 'rgb(var(--color-text) / <alpha-value>)'
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
}
