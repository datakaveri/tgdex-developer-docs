// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// remove the old footer_col_3 import since we'll inline everything
// const foot = require('./static/footer_col_3');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TGDeX Documentation',
  tagline: 'Learn about exploring, building , deploying your apps with TGDeX',
  url: 'https://docs.tgdex.iudx.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tgdex_logo.svg',
  organizationName: 'TGDeX', // Usually your GitHub org/user name.
  projectName: 'TGDeX', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/datakaveri/tgdex-developer-docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/datakaveri/tgdex-developer-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideOnScroll: true,

      // Announcement bar as the “Connect / CTA” banner
      announcementBar: {
        id: 'department_header',
        content: 'DEPARTMENT OF INFORMATION TECHNOLOGY, ELECTRONICS AND COMMUNICATIONS',
        backgroundColor: '#1f2937',
        textColor: '#FFFFFF',
        isCloseable: false,
      },

      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/TGDeX.svg',
        },
        items: [
          {
            href: 'https://github.com/datakaveri/tgdex-developer-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      typesense: {
        typesenseCollectionName: 'iudx',
        typesenseServerConfig: {
          nodes: [
            {
              host: 'typsense-test.iudx.io',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'xyz',
          connectionTimeoutSeconds: 120,
        },
        typesenseSearchParameters: {},
      },

      footer: {
                     style: 'light',
                     links: [
                       // 1st column: logo + description + social icons
                       {
                         items: [
                           {
                             html: `
                               <div class="footer__brand">
                                 <img src="/img/tgdex-green.svg" alt="TGDeX Logo" style="height:40px; margin-bottom:16px;" />
                                 <p class="footer__text">
The Telangana Data Exchange platform offers access to curated data banks, pre-trained AI models, and use cases — all in one place to empower secure data exchange and support development of AI-driven solutions.
                                 </p>
                                 <h5 class="footer__social-heading">Social Media</h5>
                                 <div class="footer__social-icons">
                                   <a href="https://www.facebook.com/etgots/" target="_blank" rel="noopener">
                                     <img src="/img/meta.svg" alt="Meta" />
                                   </a>
                                   <a href="https://x.com/emergingtechts" target="_blank" rel="noopener">
                                     <img src="/img/x.svg" alt="X" />
                                   </a>
                                   <a href="https://www.linkedin.com/company/et-itec-gots/?originalSubdomain=in" target="_blank" rel="noopener">
                                     <img src="/img/linkedin.svg" alt="LinkedIn" />
                                   </a>
                                   <a href="https://www.instagram.com/emerging.technology.ts.gov.in" target="_blank" rel="noopener">
                                     <img src="/img/instagram.svg" alt="Instagram" />
                                   </a>



                             `,
                           },
                         ],
                       },

                       // 2nd column: “TGDeX”
                       {
                         items: [],
                       },

                       {
                         title: 'TGDeX',
                         items: [
                           { label: 'Home', to: 'https://tgdex.telangana.gov.in/' },
                           { label: 'About TGDeX', to: 'https://tgdex.telangana.gov.in/about-us' },
                           { label: 'Contact Us', to: 'https://helpdesk.tgdex.telangana.gov.in/' },
                         ],
                       },

                       // 3rd column: “Platform Features”
                       {
                         title: 'Platform Features',
                         items: [
                           { label: 'Data Banks', to: 'https://tgdex.telangana.gov.in/data-bank' },
                           { label: 'AI Models', to: 'https://tgdex.telangana.gov.in/ai-model' },
                           { label: 'Use Cases', to: 'https://tgdex.telangana.gov.in/potential-application' },
                           { label: 'Sandbox IDE', to: 'https://tgdex.telangana.gov.in/sandbox' },
                           { label: 'Toolsets', to: 'https://tgdex.telangana.gov.in/toolsets' },
                           { label: 'Library', to: 'https://tgdex.telangana.gov.in/library' },
                         ],
                       },

                       // 4th column: “Help & Support”
                       {
                         title: 'Help & Support',
                         items: [
                           { label: 'Help & Support', to: 'https://tgdex.telangana.gov.in/help-support' },
                           { label: 'FAQs', to: 'https://tgdex.telangana.gov.in/faq' },
                           { label: 'User Manual', to: '/' },
                           { label: 'Sitemap', to: 'https://tgdex.telangana.gov.in/sitemap' },
                         ],
                       },
                         // remove any separate `logo:` block so the bottom row only has legal

                              // remove any separate `logo:` block so the bottom row only has legal

                     ],
                                              copyright: `
                                                             <hr class="footer__bottom-divider" />

                                 </div>
                                                                 <div class="footer__emerging-tech">
                                                                 <span class="footer__emerging-tech__text">Powered By:  </span>
                                                                   <img src="/img/emerging-tech.svg"
                                                                        alt="Emerging Technologies Logo"
                                                                        style="width:180px;" />
                                                                 </div>
                                                               </div>
                                                 </div>
                                                     <div class="footer__legal">
                                                       &copy; Government of Telangana
                                                     </div>
                                                   `
                   },


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      stylesheets: [
        // ensure your custom footer CSS is loaded
        '/css/footer.css',
      ],
    }),
};

module.exports = config;
