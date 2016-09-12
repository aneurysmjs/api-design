class FileListController {

  constructor(EventEmitter) {
      this.EventEmitter = EventEmitter;
  }

  deleteFile(file) {
    this.onDelete(this.EventEmitter({file}));
  }

}

FileListController.$inject = ['EventEmitter'];

export default FileListController;