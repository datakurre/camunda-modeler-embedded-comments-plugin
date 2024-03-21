import { registerBpmnJSPlugin } from 'camunda-modeler-plugin-helpers';
import { registerBpmnJSModdleExtension } from 'camunda-modeler-plugin-helpers';

import plugin from 'bpmn-js-embedded-comments';

registerBpmnJSPlugin(plugin);

const documentation = {
  name: 'documentation',
  uri: 'http://example.com/myextension',
  prefix: 'doc',
  xml: {
    tagAlias: 'lowerCase'
  },
  associations: [],
  types: [
    {
      name: 'Documentation',
      properties: [
        {
          name: 'documentation',
          isAttr: true,
          type: 'String'
        }
      ]
    }
  ]
};

registerBpmnJSModdleExtension(documentation);
