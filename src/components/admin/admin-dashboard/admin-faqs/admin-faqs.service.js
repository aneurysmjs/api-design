class AdminFaqsService {
   
   constructor($firebaseArray, $firebaseRef) {
      return $firebaseArray($firebaseRef.faqs);
   }
   
}

AdminFaqsService.$inject = ['$firebaseArray', '$firebaseRef'];

export default AdminFaqsService;