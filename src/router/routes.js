
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
{path: '/',
  component: () => import('../components/Main')
},
  {
    path: '/aboutus',
    component: ()=> import('../components/AboutUs')
  },
  {
    path: '/ourdoctors',
    component: ()=> import('../components/OurDoctors')
  },
  {
    path: '/contacts',
    components: ()=> import('../components/Contacts')
  }

  ];

export default routes
