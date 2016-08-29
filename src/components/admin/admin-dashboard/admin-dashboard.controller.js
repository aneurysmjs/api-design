class AdminDashboardController {
   
   constructor(AdminDashboardService) {
      this.AdminDashboardService = AdminDashboardService;
   }
   
}

AdminDashboardController.$inject = ['AdminDashboardService'];

export default AdminDashboardController;
