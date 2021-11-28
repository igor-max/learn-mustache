// var Mustache = require('mustache');

// var data = {
//   data: [
//     {
//       name: 'Jack',
//       age: 11
//     },
//     {
//       name: 'Tom',
//       age: 22
//     }
//   ]
// };

// const template = document.getElementById('template').innerHTML;

// var output = Mustache.render(template, data);

// const container = document.getElementById('app');
// container.innerHTML = output;



import MakeMustache from './MakeMustache';
// const template = '我的名字叫: {{name}}, 我今年: {{age}} 岁了';
MakeMustache.render(template.innerText, {
  name: 'Jack',
  age: 11,
  data: ['music', 'movie', 'basketball']
})