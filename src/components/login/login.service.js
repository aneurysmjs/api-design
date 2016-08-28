class LoginService {
   
   constructor(BaseService) {
      this.BaseService = BaseService;
   }
   
}

LoginService.$inject = ['BaseService'];

export default LoginService;
