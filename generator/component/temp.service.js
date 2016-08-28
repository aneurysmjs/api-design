class <%= upCaseName %>Service {
   
   constructor(BaseService) {
      this.BaseService = BaseService;
   }
   
}

<%= upCaseName %>Service.$inject = ['BaseService'];

export default <%= upCaseName %>Service;
