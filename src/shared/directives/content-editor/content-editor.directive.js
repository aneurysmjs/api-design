class ContentEditor {

  constructor($timeout) {
    this.restrict = 'A';
  }

  link($scope, $element, $attrs) {
    $element.on('dblclick', e => {
      //$element.attr('contentEditable', true);
    })
  }

}

export default ContentEditor;