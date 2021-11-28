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
const r = MakeMustache.render(template.innerText, {
  data: [
    {
      a: 1,
      hobby: ['music', 'movie', 'basketball'],
    },
    {
      a: 2,
      hobby: ['aa', 'bbb', 'cc'],
    },
    // 1, 2, 3, 4
  ],
})

app.innerHTML = r;