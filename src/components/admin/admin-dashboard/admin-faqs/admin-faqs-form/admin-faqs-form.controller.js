import AdminFaqsModel from './admin-faqs.model';

class AdminFaqsFormController {

  constructor(EventEmitter) {
    this.EventEmitter = EventEmitter;
    this.faq = new AdminFaqsModel();
  }

  $onInit() {
    this.tinymceModel = 'Initial content';
    this.tinymceOptions = {
      theme: "modern",
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
      file_browser_callback: (field_name, url, type, win) => {
        win.document.getElementById(field_name).value = 'my browser value';
      },
      file_picker_types: 'file image media'
    };
  }

  createFaq() {
    this.onSave(this.EventEmitter({faq: this.faq}));
  }

  getContent() {
    console.log('Editor content:', this.faq.answer);
  }

  setContent() {
    this.faq.answer = 'Time: ' + (new Date());
  }

}

AdminFaqsFormController.$inject = ['EventEmitter'];

export default AdminFaqsFormController;