class AdminController {
   
   constructor(AdminService) {
      this.AdminService = AdminService;
   }
   
}

AdminController.$inject = ['AdminService'];

export default AdminController;
