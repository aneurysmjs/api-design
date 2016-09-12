class AdminFaqsService {

  constructor($q, BaseService) {
    this.$q = $q;
    this.BaseService = BaseService;
  }

  uploadFiles(files) {
    let storageRef, task;

    let snapShots = files.map(file => {
      // create storage reference
      storageRef = this.BaseService.storage().ref(`jeroFiles/${file.name}`);
      // upload the file
      return storageRef.put(file).then(snapShot => snapShot);

    });

    return this.$q((resolve, reject) => {
      resolve(snapShots);
    });

  }

  processQuestion(question) {

    // cached File objects array
    let files = question.files.map(({name, type, size}) => ({name, type, size}));

    return this.$q((resolve, reject) => {
      if (question.files.length) {
        this.uploadFiles(question.files).then(snaps => {
          question.files = files; // replace FileList wit the cache File array
          resolve(question);
        });
      } else {
        resolve(question);
      }

    });

  }

}

AdminFaqsService.$inject = ['$q', 'BaseService'];

export default AdminFaqsService;