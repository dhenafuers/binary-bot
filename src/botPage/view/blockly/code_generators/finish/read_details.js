'use strict';

Blockly.JavaScript.read_details = function(block) {
  var detail_index = block.getFieldValue('DETAIL_INDEX');
  // TODO: Assemble JavaScript into code variable.
  var code = 'details[' + ( parseInt(detail_index.trim()) - 1 ) + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
