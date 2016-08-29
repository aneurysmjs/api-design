class NavigationController {
   
   constructor($state, NavigationService) {
      this.$state = $state;
      this.NavigationService = NavigationService;
   }

   $onInit() {
      this.states = this.NavigationService.states();
   }

   goTo(state) {
      this.$state.go(`app.${state}`);
   }

}

NavigationController.$inject = ['$state', 'NavigationService'];

export default NavigationController;
