export const HeaderButtons = [
  {
    type: 'route',
    title: 'Về chúng tôi',
    link: '/about'
  },
  {
    title: 'Bài viết',
    routes: [
      {
        type: 'route',
        title: 'Blog',
        link: '/blogs'
      },
      {
        type: 'route',
        title: 'Thông tin',
        link: '/info'
      },
      {
        type: 'route',
        title: 'Hướng dẫn',
        link: '/guide/home'
      }
    ]
  },
  {
    type: 'route',
    title: 'Tài liệu API',
    link: 'https://docs.xedu.com.vn/'
  },
  {
    type: 'route',
    title: 'Liên hệ',
    link: '/contact'
  },
  {
    type: 'route',
    title: 'Tuyển dụng',
    link: '/career'
  }
];
