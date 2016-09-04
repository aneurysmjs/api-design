class AdminFaqsTreeController {

  constructor(AdminFaqsTreeService) {
    this.AdminFaqsTreeService = AdminFaqsTreeService;
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

}

AdminFaqsTreeController.$inject = ['AdminFaqsTreeService'];

export default AdminFaqsTreeController;