class AdminSidebarController {
   
   constructor(AdminSidebarService) {
      this.AdminSidebarService = AdminSidebarService;
   }
   
}

AdminSidebarController.$inject = ['AdminSidebarService'];

export default AdminSidebarController;
