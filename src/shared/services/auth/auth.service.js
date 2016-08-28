import Firebase from 'firebase';

class AuthService {

   constructor($firebaseAuth, FIRE_REF) {
      return $firebaseAuth(FIRE_REF.auth());
   }

}

AuthService.$inject = ['$firebaseAuth', 'FIRE_REF'];

export default AuthService;