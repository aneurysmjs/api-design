class AdminFaqsTreeController {

  constructor(AdminFaqsTreeService) {
    this.AdminFaqsTreeService = AdminFaqsTreeService;
  }

  $onInit() {
    this.tree = [{name: 'Node', nodes: []}];
  }

  addNode(data) {

    let post = data.nodes.length + 1,
       newName = `${data.name}-${post}`;

    data.nodes = [...data.nodes, {name: newName, nodes: []}];

  }

  deleteNode(data) {
    data.nodes = [];
  }

  deleteCurrentNode(data) {
    console.log('data');
    console.dir(data);
  }

}

AdminFaqsTreeController.$inject = ['AdminFaqsTreeService'];

export default AdminFaqsTreeController;