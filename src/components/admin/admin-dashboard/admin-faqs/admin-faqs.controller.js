import questionModel from './admin-faqs.model';

class AdminFaqsController {

  constructor(AdminFaqsService) {
    this.AdminFaqsService = AdminFaqsService;
  }

  $onInit() {
    this.question = new questionModel();
  }

  createFaq({question}) {

    this.AdminFaqsService.processQuestion(question)
       .then(questionProcessed => {
         this.questions.$add(questionProcessed).then(response => console.log(response));
       })
       .catch(reason => {

       });

  }
  
  editFaq({question}) {
    this.question = question;
  }

  updateFaq({question}) {
    this.questions.$save(question)
       .then(response => console.log(response))
       .catch(reason => console.log(reason));
  }

}

AdminFaqsController.$inject = ['AdminFaqsService'];

export default AdminFaqsController;