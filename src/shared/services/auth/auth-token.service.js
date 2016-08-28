class AuthToken {

   constructor($window, $q) {

      this.storage = $window.getitem();

      this.key = `auth-token: `;

   }


   getToken() {
      return this.store.getItem(this.key);
   }

   setToken(token) {
      return $q((resolve, reject) => {

         if (token) {
            this.store.setItem(this.key, token);
            resolve('Token Generated');
         } else {
            this.store.removeItem(this.key);
            resolve('Token Removed');
         }

      });

   }

}

AuthToken.$inject = ['$window', '$q'];


export default AuthToken;