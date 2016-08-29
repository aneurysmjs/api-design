class AdminController {

  constructor(AdminService) {
    this.AdminService = AdminService;
  }

  $onInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  login() {
    this.AdminService.login(this.user).then(() => {

    }).catch(message => this.errorMessage = message);
  }

}

AdminController.$inject = ['AdminService'];

export default AdminController;
