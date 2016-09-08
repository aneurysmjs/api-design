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

  uploadFiles(files) {

    files.forEach(file => {
      // create storage reference
      let storageRef = this.BaseService.storage().ref(`jeroFiles/${file.name}`);
      // upload the file
      let task = storageRef.put(file);
    });

    /*// update progress bar

    task.on('state_changed',
       (snapshot) => {
         let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       },
       (error) => {

       },
       () => {

       }
    );*/


    return this.BaseService.storage();
  }

}

AdminFaqsFormController.$inject = ['$q', 'BaseService'];

export default AdminFaqsFormController;