class AdminFaqsController {
   
   constructor(AdminFaqsService) {
      this.AdminFaqsService = AdminFaqsService;
   }
   
}

AdminFaqsController.$inject = ['AdminFaqsService'];

export default AdminFaqsController;
