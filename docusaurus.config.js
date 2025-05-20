// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const foot = require('./static/footer_col_3');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'TGDeX Documentation',
	tagline: 'Learn about exploring, building , deploying your apps with TGDeX',
	url: 'https://docs.tgdex.iudx.io/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/adex-short.png',
	organizationName: 'TGDeX', // Usually your GitHub org/user name.
	projectName: 'TGDeX', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo docs
					editUrl:
						'https://github.com/datakaveri/tgdex-developer-docs/blob/main/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo blog
					editUrl:
						'https://github.com/datakaveri/tgdex-developer-docs/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	],
	themes: ['docusaurus-theme-search-typesense'],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */

		({
			hideOnScroll: true,
			navbar: {
				title: '',
				logo: {
					alt: 'My Site Logo',
					src: 'img/adex-logo.png'
				},
				items: [
					{
						type: 'dropdown',
						label: 'Who Are You',
						position: 'left',
						items: [
							{
								label: 'New User',
								href: '/docs/registration'
							},
							{
								label: 'AIU',
								href: '/docs/Consumer/consumer'
							},
							{
								label: 'AIP',
								href: '/docs/Provider/provider'
							},
							{
								label: 'Delegate',
								href: '/docs/Delegate/delegate'
							}
						]
					},
					// {
					//   type: 'doc',
					//   docId: 'intro',
					//   position: 'left',
					//   label: 'Getting Started',
					// },
					{
						href: 'https://github.com/datakaveri/adex-developer-docs',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			typesense: {
				typesenseCollectionName: 'iudx', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

				typesenseServerConfig: {
					nodes: [
						{
							host: 'typsense-test.iudx.io',
							port: 443,
							protocol: 'https'
						}
						// {
						//   host: 'xxx-2.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
						// {
						//   host: 'xxx-3.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
					],
					apiKey: 'xyz',
					connectionTimeoutSeconds: 120
				},

				// Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.html#arguments
				typesenseSearchParameters: {}

				// Optional
				// contextualSearch: true,
			},
			footer: {
				style: 'light',
				links: [
					{
						items: [
							{
								html: `
                      <div class="logo-address-col">
                        <div class="place">
                          <a href="https://goo.gl/maps/sHqNUTRGFDmD2kbX8" target="_blank">
                            <img src="img/location.svg" />
                            <span>
                              Ground Floor, Indian Institute of Science,<br>
			      Entrepreneurship Centre Road, Entrepreneurship Centre,<br>
			      Bengaluru - 560012, Karnataka
                            </span>
                          </a>
                        </div>
                      </div>`
							}
						]
					},
					{
						title: 'Important Links',
						items: [
							{
								label: 'ADeX Home',
								to: 'https://adex.org.in/'
							},
							{
								label: 'Datasets Catalogue',
								to: 'https://dataexplorer.ts.adex.org.in/'
							},
							{
								label: 'Provider Dashboard',
								to: 'https://dataexplorer.ts.adex.org.in/aip'
							},
							{
								label: 'Consumer Dashboard',
								to: 'https://dataexplorer.ts.adex.org.in/aiu'
							},
							{
								label: 'Community Forum',
								to: 'https://forum.adex.org.in//'
							}
						]
					},
					{
						title: 'For Developers',
						items: [
							{
								label: 'Sandbox',
								to: 'https://sandbox.adex.org.in/'
							},
							{
								label: 'Documentation',
								to: 'https://docs.adex.org.in/'
							},
							{
								label: 'Catalogue Server API Docs',
								to: 'https://ts.adex.org.in/cat/apis'
							},
							{
								label: 'Resource Server API Docs',
								to: 'https://rs.ts.adex.org.in/apis'
							},
							{
								label: 'Authorization Server API Docs',
								to: 'https://ts.adex.org.in/auth/apis'
							}
						]
					},
					{
						items: [
							{
								html: `
                ${foot}
                `
							}
						]
					}
				],
				copyright: `© ${new Date().getFullYear()} ADeX.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
			//   plugins: [
			//     [
			//         '@docusaurus/plugin-sitemap',
			//         {
			//             cacheTime: 600 * 1000, // 600 sec - cache purge period
			//             changefreq: 'weekly',
			//             priority: 0.5,
			//         },
			//     ],
			// ],
		})
};

module.exports = config;
