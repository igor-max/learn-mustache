
import parseTemplateToToken from "./parseTemplateToToken";
const MakeMustache = {
  render(template, data) {
    parseTemplateToToken(template);
  }
};

export default MakeMustache;