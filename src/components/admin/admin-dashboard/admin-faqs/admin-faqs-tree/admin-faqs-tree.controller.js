class AdminFaqsTreeController {

  constructor(AdminFaqsTreeService) {
    this.AdminFaqsTreeService = AdminFaqsTreeService;
  }

  $onInit() {
    this.tree = [{name: 'Node', nodes: []}];
  }

  addNode({item}) {
    let post = item.nodes.length + 1,
       newName = `${item.name}-${post}`;

    item.nodes = [...item.nodes, {name: newName, nodes: []}];

  }

  deleteNode({item}) {
    item.nodes = [];
  }

  deleteCurrentNode(data) {
    console.log('data');
    console.dir(data);
  }

}

AdminFaqsTreeController.$inject = ['AdminFaqsTreeService'];

export default AdminFaqsTreeController;