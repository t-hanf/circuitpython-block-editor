import * as Blockly from 'blockly';

export function defineCircuitPythonBlocks() {
    Blockly.Blocks['sleep_mcu'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Sleep for')
                .appendField(new Blockly.FieldNumber("1.0", 0, null, 0.01), 'DURATION')
                .appendField('seconds');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip('Pauses the program for the specified duration.');
            this.setHelpUrl('');
        }
    }

    // Create a block for the start of the program
    Blockly.Blocks['start'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Start');
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip('This block is the start of the program.');
            this.setHelpUrl('');
        }
    }
}