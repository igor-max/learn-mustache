var Mustache = require('mustache');

var data = {
  data: [
    {
      name: 'Jack',
      age: 11
    },
    {
      name: 'Tom',
      age: 22
    }
  ]
};

const template = document.getElementById('template').innerHTML;

var output = Mustache.render(template, data);

const container = document.getElementById('app');
container.innerHTML = output;