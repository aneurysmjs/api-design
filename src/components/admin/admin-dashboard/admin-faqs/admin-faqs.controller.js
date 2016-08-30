class AdminFaqsController {

  constructor(AdminFaqsService) {
    console.log(AdminFaqsService);
    this.AdminFaqsService = AdminFaqsService;
  }

  createFaq({faq}) {
    this.AdminFaqsService.$add(faq).then(response => {
      console.log(response);
    })
  }

}

AdminFaqsController.$inject = ['AdminFaqsService'];

export default AdminFaqsController;
