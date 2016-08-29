class AdminService {

  constructor(AuthService, BaseService, $q) {
    this.$q = $q;
    this.AuthService = AuthService;
    this.BaseService = BaseService;
  }

  login({email, password}) {
    return this.$q((resolve, reject) => {
      this.AuthService.$signInWithEmailAndPassword(email, password)
         .then(authData => resolve(authData))
         .catch(({message}) => reject(message));
    });
  }

}

AdminService.$inject = ['AuthService', 'BaseService', '$q'];

export default AdminService;