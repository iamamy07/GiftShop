export const environment = {
  production: true,
  giftshopApiUrl: 'https://giftshop-backend-dx8s.onrender.com/api',
  stripePublishableKey: 'pk_test_51RfwNMDHqNuUO8lE5y83go1nFq0LLWBD0batsXnrqAVj0mFFhVb9PNqtnswWjPggV0XI0jAmZpEgtqsfdAB1Rurk00y6ZVNKWH',
  auth0: {
    domain: 'dev-dmzr4zwxs6r5zfxc.us.auth0.com',
    clientId: 'Qw3BttxtZt6MSKcQ983JbuJNwoz8Sxt2',
    redirectUri: 'https://exquisite-empanada-17d62b.netlify.app/login/callback',
    audience: 'https://giftshop-backend-dx8s.onrender.com',
    allowedList: [
      'https://giftshop-backend-dx8s.onrender.com/api/orders/**',
      'https://giftshop-backend-dx8s.onrender.com/api/checkout/purchase',
    ]
  }
};
