class MediaLibraryController {

  constructor(MediaLibraryService) {
    this.MediaLibraryService = MediaLibraryService;
    this.uploads = MediaLibraryService.uploads;
  }

  $onInit() {
    this.fileList = [];

    this.uploads.$loaded()
      .then(files => this.fileList = files)
      .catch(error => console.warn('An error ocurred retrieving the files'));
  }

  $onChanges(changes) {

  }

  uploadFiles($files) {
    this.MediaLibraryService.uploadFiles($files)
      .then(files => files)
      .catch(error => console.warn('An error ocurred uploading the files'));
  }

  deleteFile({file}) {
    console.log(file);
    this.MediaLibraryService.deleteFile(file)
      .then(() => this.uploads.$remove(file).then(message => console.log(message)))
      .catch(error => console.warn('An error ocurred deleting the file'));
  }

}

MediaLibraryController.$inject = ['MediaLibraryService'];

export default MediaLibraryController;