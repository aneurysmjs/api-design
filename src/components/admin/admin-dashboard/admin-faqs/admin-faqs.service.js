class AdminFaqsService {
   
   constructor($firebaseArray, $firebaseRef) {
      this.faqs = $firebaseArray($firebaseRef.faqs);
   }
   
}

AdminFaqsService.$inject = ['$firebaseArray', '$firebaseRef'];

export default AdminFaqsService;