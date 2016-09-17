class MediaLibraryService {

  constructor(BaseService, $q) {
    this.BaseService = BaseService;
    this.$q = $q;
  }

  retrieveFiles() {

  }

  uploadFiles(files) {

    let storageRef = this.BaseService.storage(),
       allPromises = files.map(file => storageRef.ref(`uploads/${file.name}`).put(file));

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

}

MediaLibraryService.$inject = ['BaseService', '$q'];

export default MediaLibraryService;