import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Datagrove',
    description: 'Building Software That Does Good',
    base: '/',

    themeConfig: {
        logo: '/bright_green_circle.png',

        sidebar: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About Us', link: '/about/' },
            { 
                text: 'Solutions', 
                items:[
                    {text: "Homeschool", link: '/pawpaw/' },
                    //{text: "Transparency in Coverage", link: '/ironshop/'}
                ]
            },
            // { text: 'Blog', link: '/blog/' },
            // { text: 'Join Us', link: '/jobs/' },
            { text: 'Contact', link: '/contact/' },
        ],

        footer: {
            message: 'Released under the MIT license.',
            copyright: "Copyright © 2022-present Datagrove"
        }
    }
})

// export interface Footer {
//     message?: string
//     copyright?: string
// }