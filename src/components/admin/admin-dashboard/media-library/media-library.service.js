class MediaLibraryService {

  constructor(BaseService, $q, $firebaseRef, $firebaseArray) {
    this.BaseService = BaseService;
    this.$q = $q;
    this.$firebaseRef = $firebaseRef;
    this.uploads = $firebaseArray($firebaseRef.uploads);
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
           console.log(metadata);
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
         //.then(() => this.retrieveFiles().then(files => resolve(files)))
         .then(files => resolve(files))
         .catch(reason => reject(reason))
         .finally(() => console.log('upload finally'));
    });

  }

  deleteFile(file) {
    return this.$q((resolve, reject) => {

      let storageRef = this.BaseService.storage().ref();

      let fileRef = storageRef.child(`uploads/${file.name}`);

      fileRef.delete().then(() => {
        console.log("file deleted");
        resolve("file deleted");
      }).catch(error => {
        console.log('error');
        console.log(error);
        reject(error);
      });

    });
  }

}

MediaLibraryService.$inject = ['BaseService', '$q', '$firebaseRef', '$firebaseArray'];

export default MediaLibraryService;