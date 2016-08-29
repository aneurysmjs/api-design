class AdminController {

  constructor(AuthService, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
  }

  $onInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  login() {
    this.AuthService.$signInWithEmailAndPassword(
       this.user.email,
       this.user.password
    ).then(authData => {
      this.authData = authData;
      this.$state.go('admin.admin-dashboard');
    }).catch(({message}) => {
      this.errorMessage = message;
    });
  }

}

AdminController.$inject = ['AuthService', '$state'];

export default AdminController;
