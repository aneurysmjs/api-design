class AdminFaqsTreeNodeController {

  constructor(EventEmitter) {
    this.EventEmitter = EventEmitter;
  }

  addItem(data) {
    let item = data.hasOwnProperty('item') ? data.item : data;
    this.onAdd(this.EventEmitter({item}));
  }

  deleteItem(data) {
    let item = data.hasOwnProperty('item') ? data.item : data;
    this.onDelete(this.EventEmitter({item}));
  }

}

AdminFaqsTreeNodeController.$inject = ['EventEmitter'];

export default AdminFaqsTreeNodeController;