import UserModel from './user-model';

class LoginController {
   
   constructor(AuthService, $state) {
      this.AuthService = AuthService;
      this.$state = $state;
   }

   $onInit() {
      this.user = new UserModel();
   }

   login() {
      this.authData = null;
      this.errorMessage = null;

      this.AuthService.$signInWithEmailAndPassword(
         this.user.email,
         this.user.password
      ).then(authData =>  {
         this.authData = authData;
         this.$state.go('app.dashboard');
      }).catch(({message}) => {
         this.errorMessage = message;
      });
   }
   
}

LoginController.$inject = ['AuthService', '$state'];

export default LoginController;
