class AdminFaqsFormController {

  constructor(EventEmitter, AdminFaqsFormService, $window) {
    this.EventEmitter = EventEmitter;
    this.AdminFaqsFormService = AdminFaqsFormService;
    this.$window = $window;
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

    });
  }

  deleteQuestionFile({file}) {
    let index = this.question.files.indexOf(file);

    this.question.files = [
      ...this.question.files.slice(0, index),
      ...this.question.files.slice(index + 1)
    ];

  }

  downloadQuestionFile({file}) {
    this.AdminFaqsFormService.downloadFile(file).then(url => {
      this.$window.location.href = url;
    });
  }

}

AdminFaqsFormController.$inject = ['EventEmitter', 'AdminFaqsFormService', '$window'];

export default AdminFaqsFormController;