class AdminFaqsTreeService {

  constructor(BaseService) {
    this.BaseService = BaseService;
  }

  addNode(item) {
    let post = item.nodes.length + 1,
       newName = `${item.name}-${post}`;

    item.nodes = [...item.nodes, {name: newName, nodes: []}];
  }

  deleteNode(item) {
    item.nodes = [];
  }

}

AdminFaqsTreeService.$inject = ['BaseService'];

export default AdminFaqsTreeService;