import { defineConfig } from 'rspress/config';

export default defineConfig({
    title: 'AIIFY :: spoonfedweb.com',
    logo: {
        dark: '/spoonfedweb-dark.svg',
        light: '/spoonfedweb-light.svg',
    },
    logoText: 'spoonfedweb',
    root: 'docs',
    themeConfig: {
        searchPlaceholderText: 'search',
        nav: [
            {
                text: 'home',
                link: '/',
                activeMatch: 'index.html',
            },
            {
                text: 'about',
                link: '/about',
                activeMatch: 'about.html'
            },
            {
                text: 'music',
                link: '/music',
                activeMatch: 'music.html'
            },
        ],
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/kopickik/kopickik.github.io',
            },
            {
                icon: 'X',
                mode: 'link',
                content: 'https://twitter.com/spoonfedweb'
            },
            {
                icon: 'youtube',
                mode: 'link',
                content: 'https://youtube.com/@flagburningdetroit'
            }
        ],
        enableAppearanceAnimation: true,
        enableContentAnimation: true,
    }
});