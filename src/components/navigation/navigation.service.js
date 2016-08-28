class NavigationService {

   constructor(BaseService) {
      this.BaseService = BaseService;
   }

   states() {
      return [
         'dashboard',
         'students'
      ];
   }
   
}

NavigationService.$inject = ['BaseService'];

export default NavigationService;
