class AdminUsersController {

  constructor(AdminUsersService) {
    this.AdminUsersService = AdminUsersService;
  }

  createUser({user}) {
    this.AdminUsersService.createUser(user)
       .then(auth => {
          console.log(auth);
       })
       .catch(error => error);
  }
}

AdminUsersController.$inject = ['AdminUsersService'];

export default AdminUsersController;
