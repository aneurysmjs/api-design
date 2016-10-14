(function () {
  'use strict';

  retrieveItems();

  function retrieveItems() {

    fetch('/frameworks')
       .then((promise) => {
         return promise.json();
       })
       .then((response) => {
         createList(response);
       })
       .catch((reason) => {
         console.log(reason)
       });

  }

  function createList(array) {

    let list = document.querySelector('#list');

    let ul = `<ul class="list-group">`;

    array.forEach(item => ul += `<li class="list-group-item">${item.name}</li>`);

    ul += `</ul>`;

    list.innerHTML = ul;
  }

}());