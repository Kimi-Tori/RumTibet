export default [
    {
        path: '/',
        component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                name: 'home',
                path: '/RumTibet',
                component: () => import('@/views/home-template.vue')
            },
        ]
    },
];