class MediaLibraryService {

  constructor(BaseService, $q, $firebaseRef) {
    this.BaseService = BaseService;
    this.$q = $q;
    this.$firebaseRef = $firebaseRef;
  }

  createFiles($files) {

    //let files = Array.from()
  }

  retrieveFiles() {

  }

  uploadFiles(files) {

    let storageRef = this.BaseService.storage(),
        filePromises = files.map(file => storageRef.ref(`uploads/${file.name}`).put(file));

    return this.$q((resolve, reject) => {
      this.$q.all(filePromises)
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
         .catch(reason => reject(reason))
         .finally(() => console.log('upload finally'));
    });

  }

}

MediaLibraryService.$inject = ['BaseService', '$q', '$firebaseRef'];

export default MediaLibraryService;