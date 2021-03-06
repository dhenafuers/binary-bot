'use strict';
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pmhydb
import Translator from 'translator';
var translator = new Translator();

Blockly.Blocks.notify = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck(null)
        .appendField(translator.translateText("Notify type:"))
        .appendField(new Blockly.FieldDropdown([[translator.translateText("success"), "success"], [translator.translateText("information"), "info"], [translator.translateText("warning"), "warn"], [translator.translateText("error"), "error"]]), "NOTIFICATION_TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#dedede");
    this.setTooltip(translator.translateText('Creates notification'));
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  }
};
