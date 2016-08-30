import AdminFaqsModel from './admin-faqs.model';

class AdminFaqsFormController {

  constructor(EventEmitter) {
    this.EventEmitter = EventEmitter;
    this.faq = new AdminFaqsModel();
  }

  createFaq() {
    this.onSave(this.EventEmitter({faq: this.faq}));
  }

}

AdminFaqsFormController.$inject = ['EventEmitter'];

export default AdminFaqsFormController;