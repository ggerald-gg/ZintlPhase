const gtToolMatRecipe = ['aluminium', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'bronze', 'cobalt_brass', 'copper', 'damascus_steel', 'duranium', 'hsse', 'invar', 'naquadah_alloy', 
    'neutronium', 'red_steel', 'rose_gold', 'stainless_steel', 'steel', 'sterling_silver', 'titanium', 'tungsten_carbide', 'tungsten_steel', 'ultimet', 'vanadium_steel', 'wrought_iron']
const gtToolTypeRecipe = [['axe', 2], ['butchery_knife', 2], ['file', 1], ['hammer', 3], ['hoe', 1], ['knife', 1], ['mining_hammer', 4], ['pickaxe', 2], ['saw', 2], ['screwdriver', 1], ['scythe', 2], 
    ['shovel', 1], ['spade', 3], ['sword', 3]]
const gtToolMatExtruder = [['aluminium', 26, 56], ['bismuth_bronze', 92, 56], ['black_bronze', 98, 56], ['black_steel', 64, 56], ['blue_steel', 69, 56], ['bronze', 76, 56], ['cobalt_brass', 58, 56], 
    ['copper', 63, 56], ['damascus_steel', 56, 56], ['duranium', 64, 56], ['hsse', 81, 240], ['invar', 56, 56], ['naquadah_alloy', 391, 240], ['neutronium', 1000, 56], ['red_steel', 75, 56], 
    ['rose_gold', 169, 56], ['stainless_steel', 55, 56], ['steel', 56, 56], ['sterling_silver', 98, 56], ['titanium', 48, 56], ['tungsten_carbide', 97, 240], ['tungsten_steel', 119, 240], ['ultimet', 61, 56], 
    ['vanadium_steel', 55, 56], ['wrought_iron', 56, 56]]
const stoneTools = ['axe', 'hammer', 'hoe', 'knife', 'shovel']
ServerEvents.recipes(e => {
    gtToolTypeRecipe.forEach(([tool, count]) => {
        gtToolMatRecipe.forEach(mat => {
            let fluid = 144 * count;

            e.shaped(`gtceu:${mat}_${tool}`, ['H', 'S'], {
            H: `kubejs:${mat}_${tool}_head`,
            S: 'stick'})

            /*e.recipes.gtceu.solidifier(`kubejs/solidify/${mat}_to_${tool}_head`)
            .inputFluids(`gtceu:${mat} ${fluid}`)
            .itemOutputs(`kubejs:${mat}_${tool}_head`)
            .notConsumable(`kubejs:${tool}_head_casting_mold`)
            .duration(120)
            .EUt(20)*/
        })

        gtToolMatExtruder.forEach(([mat, time, volt]) => {
            e.recipes.gtceu.extruder(`kubejs/extrude_${mat}_to_${tool}_head`)
            .itemInputs(`${count}x gtceu:${mat}_ingot`)
            .notConsumable(`kubejs:${tool}_head_extruder_mold`)
            .itemOutputs(`kubejs:${mat}_${tool}_head`)
            .duration(time * count)
            .EUt(volt)
        })
    })

    stoneTools.forEach(tool => {
        e.shaped(`gtceu:stone_${tool}`, ['HS', 'T'],{
        H: `kubejs:stone_${tool}_head`,
        T: 'stick',
        S: '#forge:string'})
    })

    e.shaped('kubejs:stone_axe_head', ['PS', 'P '],{
        P: '#kubejs:pebbles',
        S: 'kubejs:sharp_rock'})
    
    e.shaped('kubejs:stone_hammer_head', ['PP', 'SP'],{
        P: '#kubejs:pebbles',
        S: 'kubejs:sharp_rock'})
    
    e.shaped('kubejs:stone_hoe_head', ['PP', 'S '],{
        P: '#kubejs:pebbles',
        S: 'kubejs:sharp_rock'})
    
    e.shaped('kubejs:stone_knife_head', ['S ', ' P'],{
        P: '#kubejs:pebbles',
        S: 'kubejs:sharp_rock'})
    
    e.shaped('kubejs:stone_shovel_head', [' P', 'S '],{
        P: '#kubejs:pebbles',
        S: 'kubejs:sharp_rock'})
})