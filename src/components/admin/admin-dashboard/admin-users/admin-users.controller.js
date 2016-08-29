class AdminUsersController {
   
   constructor(AdminUsersService) {
      this.AdminUsersService = AdminUsersService;
   }
   
}

AdminUsersController.$inject = ['AdminUsersService'];

export default AdminUsersController;
