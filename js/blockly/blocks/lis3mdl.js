import * as Blockly from 'blockly';

export function defineLIS3MDLBlocks() {
    Blockly.Blocks['init_lis3mdl'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Initialize LIS3MDL with I2C')
                .appendField(new Blockly.FieldVariable('i2c'), 'i2c')
                .appendField('and save it to')
                .appendField(new Blockly.FieldVariable('lis3mdl'), 'lis3mdl');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip('Initializes the LIS3MDL sensor with the specified I2C bus.');
            this.setHelpUrl('');
        }
    }

    // Create a block read_lis3mdl which is a value block
    Blockly.Blocks['read_lis3mdl'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('Read from LIS3MDL')
                .appendField(new Blockly.FieldVariable('lis3mdl'), 'lis3mdl');
            this.setOutput(true, 'Array');
            this.setColour(230);
            this.setTooltip('Reads the magnetic field from the LIS3MDL sensor.');
            this.setHelpUrl('');
        }
    }
}