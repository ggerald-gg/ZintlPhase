const id = ['overgeared:fired_tool_cast_blasting']
const output = ['brick', 'flower_pot', 'thirst:clay_bowl', 'campfire']
const type = ['overgeared:alloy_smelting']
const mod = ['itemfilters', 'ftbquests']

const toolMatRm= ['stone', 'copper', 'bronze', 'bismuth_bronze', 'black_bronze', 'wrought_iron', 'cobalt_brass', 'steel', 'blue_steel', 'red_steel', 'aluminium', 'vanadium_steel', 'stainless_steel', 'titanium', 'ultimet', 'naquadah_alloy', 'duranium', 'neutronium']
const toolTypeRm = ['axe', 'butchery_knife', 'file', 'knife', 'hoe', 'hammer', 'mining_hammer', 'pickaxe', 'saw', 'scythe', 'shovel', 'spade', 'sword']

ServerEvents.recipes(e => {
    id.forEach(bye => {e.remove({id:`${bye}`})})
    output.forEach(bye => {e.remove({output:`${bye}`})})
    type.forEach(bye => {e.remove({type:`${bye}`})})
    mod.forEach(bye => {e.remove({mod:`${bye}`})})
    
    toolMatRm.forEach(mat => {toolTypeRm.forEach(tool => {e.remove({output: `gtceu:${mat}_${tool}`})})})
})