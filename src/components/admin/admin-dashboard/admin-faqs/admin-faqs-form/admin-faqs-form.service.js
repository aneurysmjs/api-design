class AdminFaqsFormController {

  constructor($q) {
    this.$q = $q;
  }

  saveOrUpdate(question) {

    let action = question.hasOwnProperty('$id') ? 'onUpdate' : 'onSave';

    return this.$q.when(action);

  }

  tinyMceOptions() {

    let tinyMceOptions = {
      theme: "modern",
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
      file_browser_callback: (field_name, url, type, win) => {
        win.document.getElementById(field_name).value = 'my browser value';
      },
      file_picker_types: 'file image media'
    };

    return this.$q.when(tinyMceOptions);

  }



}

AdminFaqsFormController.$inject = ['$q'];

export default AdminFaqsFormController;