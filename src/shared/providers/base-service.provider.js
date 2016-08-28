class BaseServiceProvider {

   constructor() {
      this.admin = false;
   }

   configure(settings) {
      this.admin = settings.isAdmin;
   }

}

BaseServiceProvider.prototype.$get = $get;

$get.$inject = ['$q', '$http', '$firebaseArray', '$firebaseObject', 'FIRE_REF'];

function $get($q, $http, $firebaseArray, $firebaseObject, FIRE_REF) {

   let ref = FIRE_REF.database().ref();

   return {
      retrieve(childName = 'users') {
         return $q((resolve, reject) => {
            let messagesRef = ref.child(childName),
                query = messagesRef.orderByChild("timestamp");
            $firebaseArray(query).$loaded((items) => resolve(items));
         });
      },
      multipleRequests(urls) {

         let promises = urls.map(url => $http({method: 'GET', url: `${url}`, cache: true}));

         return $q((resolve, reject) => {
            $q.all(promises).then(promises => {
               let items = promises.map(({data}) => data);
               resolve(items);
            }).catch(reason => {
               reject(reason);
            });

         });

      }

   };
}


export default BaseServiceProvider;