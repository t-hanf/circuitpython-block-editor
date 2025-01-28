import * as Blockly from 'blockly';

export function defineI2CBlocks() {

    Blockly.Blocks['init_i2c'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Initialize I2C with SDA')
                // TODO: Add a dropdown with all available pins
                .appendField(new Blockly.FieldTextInput('SDA'), 'SDA')
                .appendField('SCL')
                .appendField(new Blockly.FieldTextInput('SCL'), 'SCL')
                .appendField('and save it to')
                .appendField(new Blockly.FieldVariable('i2c'), 'i2c');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip('Initializes I2C with the specified pins.');
            this.setHelpUrl('');
        },
    };

    Blockly.Blocks['init_board_i2c'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Initialize board I2C and save it to')
                .appendField(new Blockly.FieldVariable('i2c'), 'i2c');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip('Initialisiert das Board I2C und speichert es in der Variable.');
            this.setHelpUrl('');
        },
    }
}