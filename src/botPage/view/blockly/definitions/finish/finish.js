'use strict';
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#i7qkfj

import Translator from 'translator';
var translator = new Translator();

Blockly.Blocks.on_finish = {
  init: function() {
    this.appendDummyInput()
        .appendField(translator.translateText("Step 3: Result"));
    this.appendStatementInput("FINISH_STACK")
        .setCheck("TradeAgain");
    this.setColour('#2a3052');
    this.setTooltip(translator.translateText('This block decides what to do when a purchased contract is finished'));
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  }
};
