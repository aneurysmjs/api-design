class AdminFaqsController {

  constructor(AdminFaqsService) {
    console.log(AdminFaqsService);
    this.AdminFaqsService = AdminFaqsService;
  }

  $onInit() {
    this.faqs = this.AdminFaqsService;
    this.tinymceModel = 'Initial content';
    this.tinymceOptions = {
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };
  }

  createFaq({faq}) {
    this.AdminFaqsService.$add(faq).then(response => {
      console.log(response);
    })
  }

  getContent() {
    console.log('Editor content:', this.tinymceModel);
  }

  setContent() {
    this.tinymceModel = 'Time: ' + (new Date());
  }

}

AdminFaqsController.$inject = ['AdminFaqsService'];

export default AdminFaqsController;
