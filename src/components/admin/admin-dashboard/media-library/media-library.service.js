class MediaLibraryService {

  constructor(BaseService, $q, $firebaseRef, $firebaseArray) {
    this.BaseService = BaseService;
    this.$q = $q;
    this.$firebaseRef = $firebaseRef;
    this.uploads =$firebaseArray($firebaseRef.uploads);
  }

  createFiles($files) {

    //let files = Array.from()
  }

  retrieveFiles() {
    return this.$q((resolve, reject) => {
      this.uploads.$loaded()
         .then(files => resolve(files))
         .catch(error => reject(error));
    });
  }

  uploadFiles(files) {

    let storageRef = this.BaseService.storage(),
        filePromises = files.map(file => storageRef.ref(`uploads/${file.name}`).put(file));

    return this.$q((resolve, reject) => {
      this.$q.all(filePromises)
         .then(promises => promises.map(({downloadURL, metadata}) => {

           let uploadObject = {
             downloadURL,
             name: metadata.name,
             type: metadata.type,
             timeCreated: metadata.timeCreated,
             size: metadata.size
           };

           this.uploads.$add(uploadObject);

           return uploadObject;

         }))
         .then(filesObjects => resolve(filesObjects))
         .catch(reason => reject(reason))
         .finally(() => console.log('upload finally'));
    });

  }

}

MediaLibraryService.$inject = ['BaseService', '$q', '$firebaseRef', '$firebaseArray'];

export default MediaLibraryService;