class MediaLibraryService {
   
   constructor(BaseService) {
      this.BaseService = BaseService;
   }
   
}

MediaLibraryService.$inject = ['BaseService'];

export default MediaLibraryService;