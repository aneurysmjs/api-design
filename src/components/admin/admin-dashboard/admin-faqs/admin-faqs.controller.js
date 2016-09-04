class AdminFaqsController {

  constructor(AdminFaqsService) {
    console.log(AdminFaqsService);
    this.AdminFaqsService = AdminFaqsService;
  }

  $onInit() {
    this.faqs = this.AdminFaqsService;
  }

  createFaq({faq}) {
    this.AdminFaqsService.$add(faq).then(response => {
      console.log(response);
    });
  }
  
  editQuestion({question}) {
    console.log('question');
    console.log(question);
  }

}

AdminFaqsController.$inject = ['AdminFaqsService'];

export default AdminFaqsController;
