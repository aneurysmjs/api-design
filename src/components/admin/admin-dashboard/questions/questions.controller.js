import questionModel from './questions.model';

class AdminQuestionsController {

  constructor(AdminQuestionsService) {
    this.AdminQuestionsService = AdminQuestionsService;
  }

  $onInit() {
    this.question = new questionModel();
  }

  createQuestion({question}) {

    this.AdminQuestionsService.processQuestion(question)
       .then(questionProcessed => {
         this.questions.$add(questionProcessed).then(response => console.log(response));
       })
       .catch(reason => {

       });

  }
  
  editQuestion({question}) {
    this.question = question;
  }

  updateQuestion({question}) {
    this.questions.$save(question)
       .then(response => console.log(response))
       .catch(reason => console.log(reason));
  }

}

AdminQuestionsController.$inject = ['AdminQuestionsService'];

export default AdminQuestionsController;