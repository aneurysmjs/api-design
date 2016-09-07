import faqModel from './admin-faqs.model';

class AdminFaqsController {

  constructor(AdminFaqsService) {
    this.AdminFaqsService = AdminFaqsService;
  }

  $onInit() {
    this.faq = new faqModel();
    this.faqs = this.AdminFaqsService;
  }

  createFaq({faq}) {
    this.faqs.$add(faq).then(response => {
      console.log(response);
    });
  }
  
  editFaq({question}) {
    this.faq = question;
  }

  updateFaq({question}) {
    this.faqs.$save(question)
       .then(response => console.log(response))
       .catch(reason => console.log(reason));
  }

}

AdminFaqsController.$inject = ['AdminFaqsService'];

export default AdminFaqsController;