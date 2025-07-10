// export default {
//   oidc: {
//     clientId: '0oaowl5n40f0VbDi95d7',
//     issuer: 'https://dev-26468971.okta.com/oauth2/default',
//     redirectUri: 'https://localhost:4200/login/callback',
//     scopes: ['openid', 'profile', 'email']
//   }
// }

export default {
  oidc: {
    clientId: '0oaowl5n40f0VbDi95d7',
    issuer: 'https://dev-26468971.okta.com/oauth2/default',
    redirectUri: 'https://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,                          // ✅ required for SPA
    useInteractionCodeFlow: false       // ✅ disables IDX-only feature
  }
}
