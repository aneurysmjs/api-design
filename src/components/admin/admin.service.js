class AdminService {
   
   constructor(BaseService) {
      this.BaseService = BaseService;
   }
   
}

AdminService.$inject = ['BaseService'];

export default AdminService;
