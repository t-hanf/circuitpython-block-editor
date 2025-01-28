import * as Blockly from 'blockly';

export function createWorkspace(containerId) {
    return Blockly.inject(containerId, {
        toolbox: {
            kind: 'categoryToolbox',
            contents: [
                {
                    kind: 'category',
                    name: 'Logic',
                    categorystyle: 'logic_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'controls_if',
                        },
                        {
                            kind: 'block',
                            type: 'controls_ifelse',
                        },
                        {
                            kind: 'block',
                            type: 'logic_compare',
                        },
                        {
                            kind: 'block',
                            type: 'logic_operation',
                        },
                        {
                            kind: 'block',
                            type: 'logic_negate',
                        },
                        {
                            kind: 'block',
                            type: 'logic_boolean',
                        },
                        {
                            kind: 'block',
                            type: 'logic_null',
                        },
                        {
                            kind: 'block',
                            type: 'logic_ternary',
                        },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Loops',
                    categorystyle: 'loop_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'controls_repeat_ext',
                        },
                        {
                            kind: 'block',
                            type: 'controls_whileUntil',
                        },
                        {
                            kind: 'block',
                            type: 'controls_for',
                        },
                        {
                            kind: 'block',
                            type: 'controls_forEach',
                        },
                        {
                            kind: 'block',
                            type: 'controls_flow_statements',
                        },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Math',
                    categorystyle: 'math_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'math_number',
                        },
                        {
                            kind: 'block',
                            type: 'math_arithmetic',
                        },
                        {
                            kind: 'block',
                            type: 'math_single',
                        },
                        {
                            kind: 'block',
                            type: 'math_trig',
                        },
                        {
                            kind: 'block',
                            type: 'math_constant',
                        },
                        {
                            kind: 'block',
                            type: 'math_number_property',
                        },
                        {
                            kind: 'block',
                            type: 'math_round',
                        },
                        {
                            kind: 'block',
                            type: 'math_on_list',
                        },
                        {
                            kind: 'block',
                            type: 'math_modulo',
                        },
                        {
                            kind: 'block',
                            type: 'math_constrain',
                        },
                        {
                            kind: 'block',
                            type: 'math_random_int',
                        },
                        {
                            kind: 'block',
                            type: 'math_random_float',
                        },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Text',
                    categorystyle: 'text_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'text',
                        },
                        {
                            kind: 'block',
                            type: 'text_join',
                        },
                        {
                            kind: 'block',
                            type: 'text_append',
                        },
                        {
                            kind: 'block',
                            type: 'text_length',
                        },
                        {
                            kind: 'block',
                            type: 'text_isEmpty',
                        },
                        {
                            kind: 'block',
                            type: 'text_indexOf',
                        },
                        {
                            kind: 'block',
                            type: 'text_charAt',
                        },
                        {
                            kind: 'block',
                            type: 'text_getSubstring',
                        },
                        {
                            kind: 'block',
                            type: 'text_changeCase',
                        },
                        {
                            kind: 'block',
                            type: 'text_trim',
                        },
                        {
                            kind: 'block',
                            type: 'text_print',
                        },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Lists',
                    categorystyle: 'list_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'lists_create_empty',
                        },
                        {
                            kind: 'block',
                            type: 'lists_create_with',
                        },
                        {
                            kind: 'block',
                            type: 'lists_repeat',
                        },
                        {
                            kind: 'block',
                            type: 'lists_length',
                        },
                        {
                            kind: 'block',
                            type: 'lists_isEmpty',
                        },
                        {
                            kind: 'block',
                            type: 'lists_indexOf',
                        },
                        {
                            kind: 'block',
                            type: 'lists_getIndex',
                        },
                        {
                            kind: 'block',
                            type: 'lists_setIndex',
                        },
                        {
                            kind: 'block',
                            type: 'lists_getSublist',
                        },
                        {
                            kind: 'block',
                            type: 'lists_split',
                        },
                        {
                            kind: 'block',
                            type: 'lists_sort',
                        },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Colour',
                    categorystyle: 'colour_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'colour_picker',
                        },
                        {
                            kind: 'block',
                            type: 'colour_random',
                        },
                        {
                            kind: 'block',
                            type: 'colour_rgb',
                        },
                        {
                            kind: 'block',
                            type: 'colour_blend',
                        },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Variables',
                    categorystyle: 'variable_category',
                    custom: 'VARIABLE',
                },
                {
                    kind: 'category',
                    name: 'Functions',
                    categorystyle: 'procedure_category',
                    custom: 'PROCEDURE',
                },
                {
                    kind: 'category',
                    name: 'Digital I/O',
                    categorystyle: 'io_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'sleep_mcu',
                        },
                        {
                            kind: 'block',
                            type: 'start',
                        }
                    ],
                },
                {
                    kind: 'category',
                    name: 'I2C',
                    categorystyle: 'io_category',
                    contents: [
                        {
                            kind: 'block',
                            type: 'init_i2c',
                        },
                        {
                            kind: 'block',
                            type: 'init_board_i2c',
                        }
                    ],
                },
                {
                    kind: 'category',
                    name: 'Sensors',
                    categorystyle: 'sensor_category',
                    contents: [
                        {
                            kind: 'category',
                            name: 'Light',
                            categorystyle: 'sensor_category',
                            contents: [
                                {
                                    kind: 'block',
                                    type: 'init_veml7700',
                                },
                                {
                                    kind: 'block',
                                    type: 'read_veml7700',
                                }
                            ],
                        },
                        {
                            kind: 'category',
                            name: 'Magnetic Field',
                            categorystyle: 'sensor_category',
                            contents: [
                                {
                                    kind: 'block',
                                    type: 'init_lis3mdl',
                                },
                                {
                                    kind: 'block',
                                    type: 'read_lis3mdl',
                                }
                            ],
                        }
                    ],
                }

            ],
        },
        renderer: 'zelos',
        theme: 'zelos',
    });
}