class CopyToClipBoardDirective {

  constructor() {
    this.restrict = 'A';
  }

  link($scope, $element, $attrs) {

    $element.on('click', copy);

    function copy(e) {

      // find target element
      let t = e.target,
         c = t.dataset.copytarget,
         inp = (c ? document.querySelector(c) : null);

      // is element selectable?
      if (inp && inp.select) {

        // select text
        inp.select();

        try {
          // copy text
          document.execCommand('copy');
          inp.blur();
        } catch (err) {
          alert('please press Ctrl/Cmd+C to copy');
        }

      }

    }

  }

}

export default  CopyToClipBoardDirective;