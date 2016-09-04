class AdminFaqsTreeController {

  constructor(AdminFaqsTreeService, EventEmitter) {
    this.AdminFaqsTreeService = AdminFaqsTreeService;
    this.EventEmitter = EventEmitter;
  }

  $onInit() {
    this.tree = [{name: 'Node', nodes: []}];
    this.deepLimit = 3;
  }

  addNode({item}) {
    this.AdminFaqsTreeService.addNode(item);
  }

  deleteNode({item}) {
    this.AdminFaqsTreeService.deleteNode(item);
  }

  deleteCurrentNode(data) {

  }

  editNode(question) {
    this.onEdit(this.EventEmitter({question}));
  }

}

AdminFaqsTreeController.$inject = ['AdminFaqsTreeService', 'EventEmitter'];

export default AdminFaqsTreeController;