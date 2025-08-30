const woodRegistry = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'cherry', 'mangrove', 'aeronos', 'strophar', 'glacian']
const pebbleRegistry = ['beige_limestone', 'conglomerate', 'dacite', 'deepslate', 'dolerite', 'gabbro', 'granodiorite', 'grey_limestone', 'limestone', 'marble', 'mudstone', 'phyllite', 'pillow_basalt', 'quartzite',
    'red_granite', 'rhyolite','schist', 'siltstone', 'slate', 'stone', 'weathered_rhyolite', 'white_granite']
const cobbleRegistry = ['conglomerate', 'dacite', 'dolerite', 'gabbro', 'granodiorite', 'mudstone', 'pillow_basalt', 'quartzite', 'rhyolite', 'schist', 'siltstone', 'weathered_rhyolite', 'white_granite']
const anvilRegistry = [['copper', '1'], ['bronze', '2'], ['black_bronze', '2'], ['bismuth_bronze', '2'], ['wrought_iron', '3'], ['steel', '4']]
StartupEvents.registry('item', e => {
    woodRegistry.forEach(wood => {
        e.create(`${wood}_lumber`)
        .maxStackSize(32)
        .burnTime(8)
        .texture(`kubejs:item/lumber/${wood}`)
        .tag('kubejs:lumber')
    })

    pebbleRegistry.forEach(pebble => {
        e.create(`${pebble}_pebble`)
        .texture(`kubejs:item/pebble/${pebble}`)
        .tag('kubejs:pebbles')
    })

    e.create('sharp_rock').maxStackSize(1)
    e.create('plant_string').maxStackSize(32).tag('forge:string')
    e.create('plastic_string').maxStackSize(32).tag('forge:string')
    e.create('unfired_adobe_brick').maxStackSize(16)
    e.create('adobe_brick').maxStackSize(16).tag('forge:ingots/bricks').tag('forge:ingots')
    e.create('mortar').maxStackSize(16)
})
StartupEvents.registry('block', e => {
    anvilRegistry.forEach(([mat, tier]) => {
        e.create(`${mat}_anvil`, 'cardinal')
            .soundType('metal').hardness(5).resistance(7)
            .requiresTool(true)
            .waterlogged().fullBlock(false)
            .opaque(false).transparent(true)
            .noValidSpawns(true)
            .box(0, 0, 2, 15, 13, 13, true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBoth(`kubejs:anvils/tier_${tier}`)
            .model(`kubejs:block/anvil/${mat}`)
    })

    pebbleRegistry.forEach(gravel => {
        e.create(`${gravel}_gravel`)
            .soundType('gravel').hardness(0.6).resistance(0.6)
            .tagBlock('minecraft:mineable/shovel')
            .tagBoth('kubejs:anvils/tier_0')
            .textureAll(`kubejs:block/gravel/${gravel}`)
    })

    cobbleRegistry.forEach(cobble => {
        e.create(`cobbled_${cobble}`)
            .soundType('stone').hardness(6).resistance(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .textureAll(`kubejs:block/cobble/${cobble}`)
    })
    e.create('adobe_brick_wall', 'wall')
        .soundType('stone').hardness(2).resistance(3)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .textureAll('kubejs:block/kiln/adobe_bricks')

    e.create('adobe_brick_stairs', 'stairs')
        .soundType('stone').hardness(2).resistance(3)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .textureAll('kubejs:block/kiln/adobe_bricks')

    e.create('adobe_brick_slab', 'slab')
        .soundType('stone').hardness(2).resistance(3)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .textureAll('kubejs:block/kiln/adobe_bricks')
        
    e.create('adobe_bricks')
        .soundType('stone').hardness(2).resistance(3)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .textureAll('kubejs:block/kiln/adobe_bricks')
        
    e.create('adobe_brick_chimney')
        .soundType('stone').hardness(2).resistance(3)
        .fullBlock(false).notSolid().waterlogged().noValidSpawns(true).transparent(true).box(2, 0, 2, 14, 16, 14, true)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .model('kubejs:block/adobe_brick_chimney')
})