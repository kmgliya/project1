
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
{path: '/main',
  component: () => import('../components/Main')},
  {
    path: '/aboutus',
    component: ()=> import('../components/AboutUs')
  }
  ];

export default routes
