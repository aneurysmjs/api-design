class AdminUsersFormController {

  constructor(EventEmitter) {
    this.EventEmitter = EventEmitter;
  }

  $onInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  createUser() {
    this.onCreate(this.EventEmitter({user: this.user}));
  }

}

AdminUsersFormController.$inject = ['EventEmitter'];

export default AdminUsersFormController;
