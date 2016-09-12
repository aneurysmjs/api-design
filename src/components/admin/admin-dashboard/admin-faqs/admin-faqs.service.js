class AdminFaqsService {

  constructor($q, BaseService) {
    this.$q = $q;
    this.BaseService = BaseService;
  }

  uploadFiles(files) {
    let storageRef, task;

    files.forEach(file => {
      console.log('file');
      console.log(file);
      // create storage reference
      storageRef = this.BaseService.storage().ref(`jeroFiles/${file.name}`);
      // upload the file
      //task = storageRef.put(file);
      storageRef.put(file).then(snapShot => {
        console.log('snapShot');
        console.log(snapShot);
      });
    });
  }

}

AdminFaqsService.$inject = ['$q', 'BaseService'];

export default AdminFaqsService;