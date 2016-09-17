class MediaLibraryController {
   
   constructor(MediaLibraryService) {
      this.MediaLibraryService = MediaLibraryService;
   }
   
}

MediaLibraryController.$inject = ['MediaLibraryService'];

export default MediaLibraryController;