class QuestionTagsController {

  constructor(EventEmitter) {
    this.EventEmitter = EventEmitter;
  }

  $onInit() {
    console.log('this');
    console.log(this);
  }

  $onChanges(changes) {

  }

  checkEnter($event) {

    if ($event.keyCode === 13) {

      $event.preventDefault();

      let tags = this.tagsModel.split(',').map(tag => tag.trim());

      this.onAdd(this.EventEmitter({tags}));

      this.tagsModel = '';

    }

  }


  deleteTag(tag) {
    this.onDelete(this.EventEmitter({tag}));
  }

}

QuestionTagsController.$inject = ['EventEmitter'];

export default QuestionTagsController;