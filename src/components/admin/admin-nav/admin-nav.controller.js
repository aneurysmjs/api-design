class AdminNavController {
   
   constructor(AdminNavService) {
      this.AdminNavService = AdminNavService;
   }
   
}

AdminNavController.$inject = ['AdminNavService'];

export default AdminNavController;
