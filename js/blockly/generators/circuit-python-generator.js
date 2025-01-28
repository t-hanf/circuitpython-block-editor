import {Order, pythonGenerator} from 'blockly/python';


export const circuitPythonGenerator = pythonGenerator;

circuitPythonGenerator.forBlock['toggle_led'] = function (block) {
    console.log("Test")
    const pin = block.getFieldValue('PIN');
    return `import digitalio\nimport board\n` +
        `led = digitalio.DigitalInOut(board.${pin})\n` +
        `led.direction = digitalio.Direction.OUTPUT\n` +
        `led.value = not led.value\n`;
};

circuitPythonGenerator.forBlock['init_i2c'] = function (block) {
    const sda = block.getFieldValue('SDA');
    const scl = block.getFieldValue('SCL');

    circuitPythonGenerator.definitions_['import_busio'] = 'import busio';
    circuitPythonGenerator.definitions_['import_board'] = 'import board';

    return `i2c = busio.I2C(board.${sda}, board.${scl})\n`;
}

circuitPythonGenerator.forBlock['init_board_i2c'] = function (block) {
    const i2c = circuitPythonGenerator.getVariableName(block.getFieldValue('i2c'));
    circuitPythonGenerator.definitions_['import_board'] = 'import board';
    return `${i2c} = board.I2C()\n`;
}


circuitPythonGenerator.forBlock['init_veml7700'] = function (block) {
    const i2c = circuitPythonGenerator.getVariableName(block.getFieldValue('i2c'));
    circuitPythonGenerator.definitions_['import_veml7700'] = 'import adafruit_veml7700';
    return `veml7700 = adafruit_veml7700.VEML7700(${i2c})\n`;
}

circuitPythonGenerator.forBlock['read_veml7700'] = function (block) {
    const sensor = circuitPythonGenerator.getVariableName(block.getFieldValue('veml7700'));
    return [`${sensor}.light`, Order.MEMBER];
}

circuitPythonGenerator.forBlock['init_lis3mdl'] = function (block) {
    const i2c = circuitPythonGenerator.getVariableName(block.getFieldValue('i2c'));
    circuitPythonGenerator.definitions_['import_lis3mdl'] = 'import adafruit_lis3mdl';
    return `lis3mdl = adafruit_lis3mdl.LIS3MDL(${i2c})\n`;
}

circuitPythonGenerator.forBlock['read_lis3mdl'] = function (block) {
    const sensor = circuitPythonGenerator.getVariableName(block.getFieldValue('lis3mdl'));
    return [`${sensor}.magnetic`, Order.MEMBER];
}

circuitPythonGenerator.forBlock['sleep_mcu'] = function (block) {
    const duration = block.getFieldValue('DURATION');
    circuitPythonGenerator.definitions_[`import_time`] = 'import time';
    return `time.sleep(${duration})\n`;
}

circuitPythonGenerator.forBlock['start'] = function () {
    return '';
}

console.log(circuitPythonGenerator);
