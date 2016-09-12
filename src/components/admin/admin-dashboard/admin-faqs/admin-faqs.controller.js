import faqModel from './admin-faqs.model';

class AdminFaqsController {

  constructor(AdminFaqsService) {
    this.AdminFaqsService = AdminFaqsService;
  }

  $onInit() {
    this.faq = new faqModel();
  }

  createFaq({question}) {

    this.AdminFaqsService.processQuestion(question)
       .then(questionProcessed => {
         this.faqs.$add(questionProcessed).then(response => console.log(response));
       })
       .catch(reason => {

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