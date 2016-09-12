class AdminFaqsFormController {

  constructor(EventEmitter, AdminFaqsFormService) {
    this.EventEmitter = EventEmitter;
    this.AdminFaqsFormService = AdminFaqsFormService;
  }

  $onInit() {

    this.tinymceOptions = this.AdminFaqsFormService.tinyMceOptions();

    this.buttonText = 'Guardar';

  }

  $onChanges(changes) {
    if (changes.question) {
      //this.question = Object.assign({}, changes.question.currentValue);
      this.buttonText = 'Actualizar';
    }
  }

  saveFaq() {
    this.AdminFaqsFormService.saveOrUpdate(this.question).then(action => {
      // action if a text for 'onUpdate' or 'onSave' so it'll be this.onUpdate or this.onSave
      this[action](this.EventEmitter({question: this.question}));
      this.question = {};
    });
  }

  deleteQuestionFile({file}) {
    let index = this.question.files.indexOf(file);

    this.question.files = [
      ...this.question.files.slice(0, index),
      ...this.question.files.slice(index + 1)
    ];

  }

}

AdminFaqsFormController.$inject = ['EventEmitter', 'AdminFaqsFormService'];

export default AdminFaqsFormController;