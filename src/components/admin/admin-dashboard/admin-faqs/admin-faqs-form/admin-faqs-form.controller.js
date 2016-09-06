class AdminFaqsFormController {

  constructor(EventEmitter) {
    this.EventEmitter = EventEmitter;
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
    if (this.question.hasOwnProperty('$id')) {
      this.onUpdate(this.EventEmitter({question: this.question}));
    } else {
      this.onSave(this.EventEmitter({faq: this.question}));
      this.question = {};
    }
  }

  getContent() {
    console.log('Editor content:', this.question.answer);
  }

  setContent() {
    this.question.answer = 'Time: ' + (new Date());
  }

}

AdminFaqsFormController.$inject = ['EventEmitter'];

export default AdminFaqsFormController;