import * as Blockly from 'blockly';

export function defineVEML7700Blocks() {
    Blockly.Blocks['init_veml7700'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Initialize VEML7700 with I2C')
                .appendField(new Blockly.FieldVariable('i2c'), 'i2c')
                .appendField('and save it to')
                .appendField(new Blockly.FieldVariable('veml7700'), 'veml7700');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip('Initializes the VEML7700 sensor with the specified I2C bus.');
            this.setHelpUrl('');
        }
    }

    // Create a block read_veml7700 which is a value block
    Blockly.Blocks['read_veml7700'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Read from VEML7700')
                .appendField(new Blockly.FieldVariable('veml7700'), 'veml7700');
            this.setOutput(true, 'Number');
            this.setColour(230);
            this.setTooltip('Reads the light intensity from the VEML7700 sensor.');
            this.setHelpUrl('');
        }
    }
}