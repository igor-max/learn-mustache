
module.exports = class Scanner {
  constructor(template) {
    this.pos = 0;
    this.template = template;
    this.tail = template;
  }

  scan(tag) {
    if(!this.tail.indexOf(tag)) {
      this.pos += tag.length;
      this.tail = this.tail.slice(tag.length);
    }
  }

  // name: {{name}}, age: {{age}}
  scanUtil(tag) {
    const pos = this.pos;
    while(this.eos() && this.tail.indexOf(tag) !== 0) {
      this.pos++;
      this.tail = this.tail.slice(1);
    }
    return this.template.slice(pos, this.pos);
  }

  // end of string
  eos() {
    return !!this.tail;
  }
}