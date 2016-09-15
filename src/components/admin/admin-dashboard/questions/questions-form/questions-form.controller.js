class QuestionsFormController {

  constructor(EventEmitter, QuestionsFormService, $window, $timeout) {
    this.EventEmitter = EventEmitter;
    this.QuestionsFormService = QuestionsFormService;
    this.$window = $window;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.isError = false;
    this.tinymceOptions = this.QuestionsFormService.tinyMceOptions();

    this.buttonText = 'Guardar';

  }

  $onChanges(changes) {
    if (changes.question) {
      //this.question = Object.assign({}, changes.question.currentValue);
      this.buttonText = 'Actualizar';
    }
  }

  saveFaq() {
    this.QuestionsFormService.saveOrUpdate(this.question).then(action => {
      // action if a text for 'onUpdate' or 'onSave' so it'll be this.onUpdate or this.onSave
      this[action](this.EventEmitter({question: this.question}));

    });
  }

  deleteQuestionFile({file}) {
    this.QuestionsFormService.deleteQuestionFile(this.question.files, file)
       .then(files => this.question.files = files)
       .catch(({message}) => this.displayError(message));

  }

  downloadQuestionFile({file}) {
    this.QuestionsFormService.downloadFile(file).then(url => {
      this.$window.location.href = url;
    });
  }

  addTags({tags}) {
    this.question.tags = tags;
  }

  deleteTag({tag}) {
    let index = this.question.tags.indexOf(tag);
    this.question.tags = [
       ...this.question.tags.slice(0, index),
       ...this.question.tags.slice(index + 1)
    ];
  }

  displayError(message) {
    this.error = message;
  }

}

QuestionsFormController.$inject = ['EventEmitter', 'QuestionsFormService', '$window', '$timeout'];

export default QuestionsFormController;