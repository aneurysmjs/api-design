class AdminDashboardController {

  constructor(AdminDashboardService) {
    this.AdminDashboardService = AdminDashboardService;
    console.log('this.currentAuth');
    console.log(this.currentAuth);
  }

}

AdminDashboardController.$inject = ['AdminDashboardService'];

export default AdminDashboardController;
