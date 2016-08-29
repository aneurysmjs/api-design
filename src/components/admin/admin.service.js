class AdminService {

  constructor($q, $state, AuthService, BaseService) {
    this.$q = $q;
    this.$state = $state;
    this.AuthService = AuthService;
    this.BaseService = BaseService;
  }

  login({email, password}) {
    return this.$q((resolve, reject) => {
      this.AuthService.$signInWithEmailAndPassword(email, password).then(authData => {
        this.$state.go('admin.admin-dashboard');
      }).catch(({message}) => reject(message));
    });
  }

}

AdminService.$inject = ['$q', '$state', 'AuthService', 'BaseService'];

export default AdminService;