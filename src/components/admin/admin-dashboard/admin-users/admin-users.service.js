class AdminUsersService {

  constructor(AuthService, $q) {
    this.AuthService = AuthService;
    this.$q = $q;
  }

  createUser({email, password}) {
    return this.$q((resolve, reject) => {
      this.AuthService.$createUserWithEmailAndPassword(email, password)
         .then(firebaseUser => {
           console.log("User " + firebaseUser.uid + " created successfully!");
           resolve(firebaseUser);
         })
         .catch((error) => {
           console.error("Error: ", error);
           reject(error);
         });
    });
  }

}

AdminUsersService.$inject = ['AuthService', '$q'];

export default AdminUsersService;
