class <%= upCaseName %>Controller {
   
   constructor(<%= upCaseName %>Service) {
      this.<%= upCaseName %>Service = <%= upCaseName %>Service;
   }
   
}

<%= upCaseName %>Controller.$inject = ['<%= upCaseName %>Service'];

export default <%= upCaseName %>Controller;
