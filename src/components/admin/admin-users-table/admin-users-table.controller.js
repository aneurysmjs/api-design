class AdminUsersTableController {
   
   constructor(AdminUsersTableService) {
      this.AdminUsersTableService = AdminUsersTableService;
   }
   
}

AdminUsersTableController.$inject = ['AdminUsersTableService'];

export default AdminUsersTableController;
