const idRemove = ['farmersdelight:cutting/bricks']
const typeRemove =['minecraft:blasting', 'minecraft:smoking', 'minecraft:anvil_repairing', 'emi:anvil_repairing', 'createdieselgenerators:wire_cutting', 'createdieselgenerators:hammering']
const modRemove = ['hot_iron']
const inputRemove = [/create:crushed_raw_(.*?)/, /(.*?)_blackstone_(.*?)/]
const outputRemove = [/create:crushed_raw_(.*?)/, /(.*?)_blackstone_(.*?)/, 'anvil', 'bricks', 'blast_furnace', 'furnace', 'smoker', 'campfire', 'soul_campfire', 'smooth_stone', 'smooth_stone_slab', 
    'twigs:smooth_stone_bricks', 'twigs:smooth_stone_brick_slab', 'twigs:stone_column', 'twigs:smooth_stone_brick_stairs', 'twigs:smooth_stone_brick_wall', 'twigs:blackstone_column']

const vanillaToolMatRemove = ['wooden', 'stone', 'iron', 'gold']
const vanillaToolTypeRemove = ['axe', 'hoe', 'pickaxe', 'shovel', 'sword']
const gtToolMatRemove = ['aluminium', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'bronze', 'cobalt_brass', 'copper', 'damascus_steel',  'diamond', 'duranium', 'hsse', 'invar', 'naquadah_alloy', 
    'neutronium', 'red_steel', 'rose_gold', 'stainless_steel', 'steel', 'stone', 'sterling_silver', 'titanium', 'tungsten_carbide', 'tungsten_steel', 'ultimet', 'vanadium_steel', 'wrought_iron']
const gtToolTypeRemove = ['axe', 'butchery_knife', 'file', 'hammer', 'hoe', 'knife', 'mining_hammer', 'pickaxe', 'saw', 'screwdriver', 'scythe', 'shovel', 'spade', 'sword']
ServerEvents.recipes(e => {
    idRemove.forEach(id => {e.remove({ id: `${id}`})})
    typeRemove.forEach(type => {e.remove({type:`${type}`})})
    modRemove.forEach(mod => {e.remove({mod: `${mod}`})})
    inputRemove.forEach(input => {e.remove({input: `${input}`})})
    outputRemove.forEach(output => {e.remove({output: `${output}`})})
    
    vanillaToolMatRemove.forEach(mat => {vanillaToolTypeRemove.forEach(tool => {e.remove({output: `${mat}_${tool}`})})})
    gtToolMatRemove.forEach(mat => {gtToolTypeRemove.forEach(tool => {e.remove({id: `gtceu:shaped/${tool}_${mat}`})})})
})