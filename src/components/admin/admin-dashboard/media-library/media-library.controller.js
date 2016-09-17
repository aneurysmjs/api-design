class MediaLibraryController {

  constructor(MediaLibraryService) {
    this.MediaLibraryService = MediaLibraryService;
  }

  $onInit() {
    this.fileList = [];

    this.retrieveFiles();
  }

  $onChanges(changes) {

  }

  retrieveFiles() {
    this.MediaLibraryService.retrieveFiles().then(files => {
      this.fileList = files;
    })
    .catch(error => {

    });
  }

  uploadFiles($files) {
    this.MediaLibraryService.uploadFiles($files).then(files => {
      this.fileList = files;
    })
    .catch(error => {

    });
  }

}

MediaLibraryController.$inject = ['MediaLibraryService'];

export default MediaLibraryController;