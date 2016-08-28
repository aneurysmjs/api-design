class authInterceptor {

   constructor(AuthTokenService) {
      this.AuthTokenService = AuthTokenService;
   }

   addToken(config) {

      let token = AuthTokenService.getToken();
      //  Now if there is a token, so if the user is authenticated.
      if (token) {
         // then we're going to add this to a header on this config object,
         config.headers = config.headers || {};
         //console.log('----authInterceptor----');
         //console.log(config);
         config.headers.Authorization = 'Bearer ' + token;
      }

      return config;

   }

}

authInterceptor.$inject = ['AuthTokenService'];


export default authInterceptor;