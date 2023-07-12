const mainMenuItems = [
  {
    title: 'Home',
    path: '/',
  },
  // {
  //   title: 'Protected',
  //   path: '/protected',
  // },
  // {
  //   title: 'Me',
  //   path: '/me',
  // },
];

const AUTH_SERVER_URL = process.env.NEXT_PUBLIC_AUTH_SERVER_URL || 'http://localhost:4269';

export {
  mainMenuItems,
  AUTH_SERVER_URL,
}