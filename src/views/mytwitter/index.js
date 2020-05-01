export default [
    {
        path: '/mytwitter/home-page/index',
        name: "mytwitter-home-page-index",
        component: () => 
            import(/* webpackChunkName: "business-a-page-a" */ './home-page/Index.vue'),
    },  {
        path: '/mytwitter/home-page/about',
        name: "mytwitter-home-page-about",
        component: () => 
            import(/* webpackChunkName: "business-a-page-a" */ './home-page/About.vue'),
    }
]