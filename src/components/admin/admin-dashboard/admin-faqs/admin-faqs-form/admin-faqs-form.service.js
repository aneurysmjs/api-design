class AdminFaqsFormController {

  constructor($q, BaseService) {
    this.$q = $q;
    this.BaseService = BaseService;
  }

  saveOrUpdate(question) {

    let action = question.hasOwnProperty('$id') ? 'onUpdate' : 'onSave';

    return this.$q.when(action);

  }

  tinyMceOptions() {

    return {
      theme: "modern",
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
      file_browser_callback: (field_name, url, type, win) => {
        win.document.getElementById(field_name).value = 'my browser value';
      },
      file_picker_types: 'file image media'
    };

  }

  downloadFile(file) {
    // Content-Disposition: attachment;
    // filename="mypdf.pdf";
    let storageRef = this.BaseService.storage().ref();

    return this.$q((resolve, reject) => {
      storageRef.child(`jeroFiles/${file.name}`).getDownloadURL().then((url) => {
        console.log('url');
        console.log(url);
        // This can also be downloaded directly
        resolve(url);
      }).catch((error) => {
        // Handle any errors
      });
    });

  }

}

AdminFaqsFormController.$inject = ['$q', 'BaseService'];

export default AdminFaqsFormController;