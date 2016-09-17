class QuestionsFormController {

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

  deleteQuestionFile(files, file) {

    let index = files.indexOf(file);

    let deleteFiles = (files) => {
      files = [
        ...files.slice(0, index),
        ...files.slice(index + 1)
      ];
      return files;
    };



    return this.$q((resolve, reject) => {

      if (file.downloadURL) {

        let storageRef = this.BaseService.storage().ref();

        let fileRef = storageRef.child(`jeroFiles/${file.name}`);

        fileRef.delete().then(() => {
          console.log("file deleted");
          resolve(deleteFiles(files));
        }).catch(error => {
          console.log('error');
          console.log(error);
          reject(error);
        });

      } else {
        resolve(deleteFiles(files));
      }

    });

  }

}

QuestionsFormController.$inject = ['$q', 'BaseService'];

export default QuestionsFormController;