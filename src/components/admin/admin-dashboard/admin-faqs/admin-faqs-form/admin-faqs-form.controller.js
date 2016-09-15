class AdminFaqsFormController {

  constructor(EventEmitter, AdminFaqsFormService, $window, $timeout) {
    this.EventEmitter = EventEmitter;
    this.AdminFaqsFormService = AdminFaqsFormService;
    this.$window = $window;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.isError = false;
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
    this.AdminFaqsFormService.deleteQuestionFile(this.question.files, file)
       .then(files => this.question.files = files)
       .catch(({message}) => this.displayError(message));

  }

  downloadQuestionFile({file}) {
    this.AdminFaqsFormService.downloadFile(file).then(url => {
      this.$window.location.href = url;
    });
  }

  displayError(message) {
    this.error = message;
  }

}

AdminFaqsFormController.$inject = ['EventEmitter', 'AdminFaqsFormService', '$window', '$timeout'];

export default AdminFaqsFormController;