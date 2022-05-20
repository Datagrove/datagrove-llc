import { defineConfig } from 'vitepress'

export default defineConfig({
    description: 'Software That Does Good',
    title: 'Datagrove',
    base: '/',
    themeConfig: {
        // Type is `DefaultTheme.Config`
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About Us', link: '/about/' },
            // { text: 'Products/Services', link: '/products/' },
            // { text: 'Blog', link: '/blog/' },
            // { text: 'Join Us', link: '/jobs/' },
            { text: 'Contact', link: '/contact/' },
        ],
        sidebar: [
        ]
    },
    // build: {
    //     rollupOptions: {
    //         external: []
    //     }
    // }

})