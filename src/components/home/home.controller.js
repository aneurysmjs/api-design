class HomeController {
   
   constructor(HomeService) {
      this.HomeService = HomeService;
   }
   
}

HomeController.$inject = ['HomeService'];

export default HomeController;
