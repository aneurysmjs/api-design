class AdminFaqsFormController {

  constructor(EventEmitter, AdminFaqsFormService) {
    this.EventEmitter = EventEmitter;
    this.AdminFaqsFormService = AdminFaqsFormService;
  }

  $onInit() {
    this.tinymceOptions = {
      theme: "modern",
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
      file_browser_callback: (field_name, url, type, win) => {
        win.document.getElementById(field_name).value = 'my browser value';
      },
      file_picker_types: 'file image media'
    };

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

  getContent() {
    console.log('Editor content:', this.question.answer);
  }

  setContent() {
    this.question.answer = 'Time: ' + (new Date());
  }

}

AdminFaqsFormController.$inject = ['EventEmitter', 'AdminFaqsFormService'];

export default AdminFaqsFormController;