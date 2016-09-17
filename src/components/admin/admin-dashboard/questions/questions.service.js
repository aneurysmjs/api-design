class AdminQuestionsService {

  constructor($q, BaseService) {
    this.$q = $q;
    this.BaseService = BaseService;
  }

  uploadFiles(files) {

    let storageRef = this.BaseService.storage(),
        allPromises = files.map(file => storageRef.ref(`jeroFiles/${file.name}`).put(file));

    return this.$q((resolve, reject) => {
      this.$q.all(allPromises)
         .then(promises => promises.map(({downloadURL, metadata}) => {
           return {
             downloadURL,
             name: metadata.name,
             type: metadata.type,
             timeCreated: metadata.timeCreated,
             size: metadata.size
           };
         }))
         .then(urls => resolve(urls))
         .catch(reason => reject(reason));
    });

  }

  processQuestion(question) {

    // cached File objects array
    let cachedFiles = question.files.map(({name, type, size}) => ({name, type, size}));

    return this.$q((resolve, reject) => {

      if (question.files.length) {
        this.uploadFiles(question.files).then(files => {
          console.log('files');
          console.log(files);
          question.files = files; // replace FileList wit the cache File array
          resolve(question);
        });
      } else {
        resolve(question);
      }

    });

   }

}

AdminQuestionsService.$inject = ['$q', 'BaseService'];

export default AdminQuestionsService;