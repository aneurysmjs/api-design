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
    console.log('this.question');
    console.log(this.question);

    /*this.AdminFaqsFormService.saveOrUpdate(this.question).then(action => {
      // action if a text for 'onUpdate' or 'onSave' so it'll be this.onUpdate or this.onSave
      this[action](this.EventEmitter({question: this.question}));
      this.question = {};
    });*/

  }

  getContent() {
    console.log('Editor content:', this.question.answer);
  }

  setContent() {
    this.question.answer = 'Time: ' + (new Date());
  }

  setFiles($files) {
    let files = $files.map(file => file.name);
    this.question.files = $files;
    //this.AdminFaqsFormService.uploadFiles($files);
  }

}

AdminFaqsFormController.$inject = ['EventEmitter', 'AdminFaqsFormService'];

export default AdminFaqsFormController;