module.exports = {
    title: '你好 uncle',
    description: '第一个博客',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://www.baidu.com' },
            { text: '关于', link: '/about' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' },
                    { text: 'english', link: '/language/english'}
                ]
            },
            {
                text: 'Uncle',
                items: [
                    { text: 'xian', link: '/uncle/xian' },
                    { text: 'fun', link: '/uncle/fun' }
                ]
            },
        ],
        sidebar: {
            '/language/': [
                '',
                'chinese',  /* /foo/one.html */
                'japanese',   /* /foo/two.html */
                'english',
                {
                    title: 'english侧边栏',
                    children: [
                        '/language/english/english2',
                        '/language/english/english3'
                    ]
                }

            ],
            '/uncle/': [
                '',      /* /bar/ */
                'xian', /* /bar/three.html */
                'fun',   /* /bar/four.html */
                'love/xu',
                'love/li',
                'love/he',
                'love/ruan',
            ],
        },
        // sidebar: 'auto', // 仅仅生成当前点击的导航栏页面
        sidebarDepth: 2, // 侧边栏的深度为<h2><h3>
        lastUpdated: 'Last Updated', // 显示更新时间
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined. 一旦服务器端内容更新，那么前端页面就会出现刷新按钮
            // 如果设置为 true, 默认的文本配置将是:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        }
    }
}