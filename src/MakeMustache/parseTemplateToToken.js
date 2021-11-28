import Scanner from './Scanner';

// function nextTokens(tokens) {
//   const result = [];
//   const stack = [];
//   tokens.forEach((token) => {
//     switch (token[0]) {
//       case '#':
//         token[2] = []; // 当前项第三项存放子数据
//         stack.push(token);
//         break;
//       case '/':
//         const child = stack.pop();
//         result.push(child);
//         break;
//       default:
//         // stack nothing 表示不是 #
//         if (!stack.length) {
//           result.push(token);
//         } else {
//           stack[stack.length - 1][2].push(token);
//         }
//         break;
//     }
//   });
//   console.log(result);
//   return result;
// }

function nextTokens(tokens) {
  const result = [];
  let collect = result;
  const stack = [];
  tokens.forEach((token) => {
    switch (token[0]) {
      case '#':
        collect.push(token);
        stack.push(token); // push stack
        collect = token[2] = [];
        break;
      case '/':
        stack.pop();
        collect = !!stack.length ? stack[stack.length - 1][2] : result;
        break;
      default:
        collect.push(token);
        break;
    }
  });
  return result;
}

export default function parseTemplateToToken(template) {
  const scanner = new Scanner(template);
  let word;
  const tokens = [];
  while (scanner.eos()) {
    word = scanner.scanUtil('{{');
    if (!!word) {
      tokens.push(['text', word]);
    }
    scanner.scan('{{');
    word = scanner.scanUtil('}}');
    if (!!word) {
      if (word[0] === '#') {
        tokens.push([word[0], word.slice(1)]);
      } else if (word[0] === '/') {
        tokens.push([word[0], word.slice(1)]);
      } else {
        tokens.push(['name', word]);
      }
    }
    scanner.scan('}}');
  }
  // console.log(nextTokens(tokens));
  return nextTokens(tokens);
}
