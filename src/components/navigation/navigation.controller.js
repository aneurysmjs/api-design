class NavigationController {
   
   constructor($state, $mdSidenav, NavigationService) {
      this.$state = $state;
      this.$mdSidenav = $mdSidenav;
      this.NavigationService = NavigationService;
   }

   $onInit() {
      this.states = this.NavigationService.states();
   }

   goTo(state) {
      this.$state.go(`app.${state}`);
   }

   openRightMenu() {
      this.$mdSidenav('right').toggle();
   };
   
}

NavigationController.$inject = ['$state', '$mdSidenav', 'NavigationService'];

export default NavigationController;
