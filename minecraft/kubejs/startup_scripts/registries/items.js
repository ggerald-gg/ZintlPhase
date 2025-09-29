const woodRegistry = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'cherry', 'mangrove', 'aeronos', 'strophar', 'glacian']
const pebbleRegItem= ['beige_limestone', 'conglomerate', 'dacite', 'deepslate', 'dolerite', 'gabbro', 'granodiorite', 'grey_limestone', 'limestone', 'marble', 'mudstone', 'phyllite', 'pillow_basalt', 'quartzite',
    'red_granite', 'rhyolite','schist', 'siltstone', 'slate', 'stone', 'weathered_rhyolite', 'white_granite']

StartupEvents.registry('item', e => {
    e.create('sharp_rock').maxStackSize(1)
    e.create('plant_string').maxStackSize(32).tag('forge:string')
    e.create('plastic_string').maxStackSize(32).tag('forge:string')
    e.create('unfired_adobe_brick').maxStackSize(16)
    e.create('adobe_brick').maxStackSize(16).tag('forge:ingots/bricks').tag('forge:ingots')
    e.create('mortar').maxStackSize(16)

    woodRegistry.forEach(wood => {
        e.create(`${wood}_lumber`)
        .maxStackSize(32)
        .burnTime(8)
        .texture(`kubejs:item/lumber/${wood}`)
        .tag('kubejs:lumber')
    })

    pebbleRegItem.forEach(pebble => {
        e.create(`${pebble}_pebble`)
        .texture(`kubejs:item/pebble/${pebble}`)
        .tag('kubejs:pebbles')
    })
})