import { defineConfig } from 'vitepress'

export default defineConfig({
    description: 'Building Software That Does Good',
    title: 'Datagrove',
    base: '/',
    themeConfig: {
        // Type is `DefaultTheme.Config`
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
        sidebar: [
        ],
        footer: false
    },
    // build: {
    //     rollupOptions: {
    //         external: []
    //     }
    // }

})