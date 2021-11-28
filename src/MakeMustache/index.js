
import parseTemplateToToken from "./parseTemplateToToken";
import renderTemplate from './renderTemplate';
const MakeMustache = {
  render(template, data) {
    const tokens = parseTemplateToToken(template);
    const parseString = renderTemplate(tokens, data);
    return parseString;
  }
};

export default MakeMustache;