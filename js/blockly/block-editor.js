import {defineCircuitPythonBlocks} from './blocks/circuit-python-blocks.js';
import {circuitPythonGenerator} from './generators/circuit-python-generator.js';
import {createWorkspace} from './workspace';
import {defineI2CBlocks} from "./blocks/i2c.js";
import {defineVEML7700Blocks} from "./blocks/veml7700.js";
import {defineLIS3MDLBlocks} from "./blocks/lis3mdl.js";

// Handle code generation


export function loadBlockly() {
    console.log("Loading Blockly");

    defineCircuitPythonBlocks();
    defineI2CBlocks();
    defineVEML7700Blocks();
    defineLIS3MDLBlocks();

    const workspace = createWorkspace('blockly-workspace');

    const startBlock = workspace.newBlock('start');
    startBlock.initSvg();
    startBlock.render();

    startBlock.setDeletable(false);
// Set position of start block
    startBlock.moveBy(20, 20);

    return workspace;
}

export function generateCode(workspace) {
    return circuitPythonGenerator.workspaceToCode(workspace);
}