class AdminFaqsFormController {

  constructor($q) {
    this.$q = $q;
  }

  saveOrUpdate(question) {

    let action = question.hasOwnProperty('$id') ? 'onUpdate' : 'onSave';

    return this.$q.when(action);

  }

}

AdminFaqsFormController.$inject = ['$q'];

export default AdminFaqsFormController;