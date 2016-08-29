class AdminController {

  constructor(AdminService, $state) {
    this.AdminService = AdminService;
    this.$state = $state;
  }

  $onInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  login() {
    this.AdminService.login(this.user)
       .then(authData => this.$state.go('admin.dashboard'))
       .catch(message => this.errorMessage = message);
  }

}

AdminController.$inject = ['AdminService', '$state'];

export default AdminController;
