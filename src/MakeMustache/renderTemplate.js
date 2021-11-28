function parseArray(token, data) {
  const key = token[1];
  data = data[key]; // array
  let res = '';
  data.forEach((item) => {
    res += renderTemplate(token[2], {
      ...item,
      '.': item,
    });
  });
  return res;
}

export default function renderTemplate(tokens, data) {
  let resultStr = '';
  tokens.forEach((token) => {
    switch (token[0]) {
      case 'text':
        resultStr += token[1];
        break;
      case 'name':
        if (token[1] === '.') {
          resultStr += data['.'];
        } else {
          resultStr += token[1].split('.').reduce((prev, cur) => {
            return prev[cur];
          }, data);
        }
        break;
      case '#':
        // token: ['#', key, childTokens]
        // resultStr += renderTemplate(token[2], data[token[1]]);
        resultStr += parseArray(token, data);
    }
  });
  return resultStr;
}
