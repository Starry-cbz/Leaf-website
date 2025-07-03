// import {DefaultTheme} from "vitepress";
// import Sidebar = DefaultTheme.Sidebar;

export default {

    '/docs/survivex/': [
        {
            text: "Server Introduction",
            items: [
                { text: "Server Introduction", link: "/docs/survivex/guide/v1" }
            ]
        },
        {
            text: "Server Setup Guide",
            items: [
                { text: 'Windows Server Setup Guide', link: '/docs/survivex/deploy/v1' },
                { text: 'Linux Server Setup Guide', link: '/docs/survivex/deploy/v2' }
            ]
        },
        {
            text: "Plugin Introduction",
            items: [
                { text: 'Plugin Overview', link: '/docs/survivex/basic/v1' },
                { text: 'Basic Commands', link: '/docs/survivex/basic/v2' }
            ]
        },
        {
            text: "FAQ",
            items: [
                { text: 'Common Issues', link: '/docs/survivex/question/v1' }
            ]
        }
    ],
    '/zh/docs/survivex/': [
        {
            text: "服务端介绍",
            items: [
                { text: "服务端介绍", link: "/zh/docs/survivex/guide/v1" }
            ]
        },
        {
            text: "开服教程",
            items: [
                { text: 'Windows 开服教程', link: '/zh/docs/survivex/deploy/v1' },
                { text: 'Linux 开服教程', link: '/zh/docs/survivex/deploy/v2' }
            ]
        },
        {
            text: "插件介绍",
            items: [
                { text: '插件概述', link: '/zh/docs/survivex/basic/v1' },
                { text: '基础指令', link: '/zh/docs/survivex/basic/v2' }
            ]
        },
        {
            text: "常见问题",
            items: [
                { text: '通用问题', link: '/zh/docs/survivex/question/v1' }
            ]
        }
    ]
}