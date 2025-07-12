// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  giftshopApiUrl: 'https://localhost:8443/api',
  stripePublishableKey: 'pk_test_51RfwNMDHqNuUO8lE5y83go1nFq0LLWBD0batsXnrqAVj0mFFhVb9PNqtnswWjPggV0XI0jAmZpEgtqsfdAB1Rurk00y6ZVNKWH',
  auth0: {
    domain: 'dev-dmzr4zwxs6r5zfxc.us.auth0.com',
    clientId: 'Qw3BttxtZt6MSKcQ983JbuJNwoz8Sxt2',
    redirectUri: 'https://localhost:4200/login/callback',
    audience: 'http://localhost:8080',
    allowedList: [
      'http://localhost:8080/api/orders/**',
      'http://localhost:8080/api/checkout/purchase',
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
