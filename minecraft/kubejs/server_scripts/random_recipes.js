//priority: 256
const gravelRecipe = ['beige_limestone', 'conglomerate', 'dacite', 'deepslate', 'dolerite', 'gabbro', 'granodiorite', 'grey_limestone', 'limestone', 'mudstone', 'phyllite', 'pillow_basalt', 'quartzite', 'rhyolite', 
    'schist', 'siltstone', 'slate', 'weathered_rhyolite', 'white_granite']
const cobbleRecipe = ['conglomerate', 'dacite', 'dolerite', 'gabbro', 'granodiorite', 'mudstone', 'pillow_basalt', 'quartzite', 'rhyolite', 'schist', 'siltstone', 'weathered_rhyolite', 'white_granite']
ServerEvents.recipes(e => {
    const vanilla = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'cherry', 'mangrove']
    const adastra = ['aeronos', 'glacian', 'strophar']
    
    e.shapeless('kubejs:unfired_adobe_brick', ['clay_ball', 'farmersdelight:straw'])
    e.shapeless('3x kubejs:plant_string', ['#forge:tools/knives', '2x farmersdelight:straw'])
    
    vanilla.forEach(wood => {
        e.shapeless(`8x kubejs:${wood}_lumber`, ['#forge:tools/saws', `${wood}_log`])
        e.shaped(`${wood}_planks`, ['LL', 'LL'], {L: `kubejs:${wood}_lumber`})
    })
    adastra.forEach(wood => {
        e.shapeless(`8x kubejs:${wood}_lumber`, ['#forge:tools/saws', `ad_astra:${wood}_log`])
        e.shaped(`ad_astra:${wood}_planks`, ['LL', 'LL'], {L: `kubejs:${wood}_lumber`})
    })

    gravelRecipe.forEach(stone => {e.shaped(`kubejs:${stone}_gravel`, ['PP', 'PP'], {P: `kubejs:${stone}_pebble`})})
    cobbleRecipe.forEach(stone => {e.shaped(`kubejs:cobbled_${stone}`, ['PMP', 'MPM', 'PMP'], {P: `kubejs:${stone}_pebble`, M: 'kubejs:mortar'})})

    e.shapeless('kubejs:sharp_rock', '2x #kubejs:pebbles')
    
    e.shaped('gravel', ['PP', 'PP'], {P: 'kubejs:stone_pebble'})
    e.shaped('cobblestone', ['PMP', 'MPM', 'PMP'], {P: 'kubejs:stone_pebble', M: 'kubejs:mortar'})
    e.shaped('cobbled_deepslate', ['PMP', 'MPM', 'PMP'], {P: 'kubejs:deepslate_pebble', M: 'kubejs:mortar'})
    e.shaped('gtceu:marble_cobblestone', ['PMP', 'MPM', 'PMP'], {P: 'kubejs:marble_pebble', M: 'kubejs:mortar'})
    e.shaped('gtceu:red_granite_cobblestone', ['PMP', 'MPM', 'PMP'], {P: 'kubejs:red_granite_pebble', M: 'kubejs:mortar'})
})