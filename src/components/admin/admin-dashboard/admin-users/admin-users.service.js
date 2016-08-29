class AdminUsersService {
   
   constructor(BaseService) {
      this.BaseService = BaseService;
   }
   
}

AdminUsersService.$inject = ['BaseService'];

export default AdminUsersService;
