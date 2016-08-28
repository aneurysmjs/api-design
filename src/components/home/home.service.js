class HomeService {
   
   constructor(BaseService) {
      this.BaseService = BaseService;
   }
   
}

HomeService.$inject = ['BaseService'];

export default HomeService;
