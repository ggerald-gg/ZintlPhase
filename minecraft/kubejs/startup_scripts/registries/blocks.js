const pebbleRegBlock = ['beige_limestone', 'conglomerate', 'dacite', 'deepslate', 'dolerite', 'gabbro', 'granodiorite', 'grey_limestone', 'limestone', 'marble', 'mudstone', 'phyllite', 'pillow_basalt', 'quartzite',
    'red_granite', 'rhyolite','schist', 'siltstone', 'slate', 'stone', 'weathered_rhyolite', 'white_granite']
const cobbleReg = ['conglomerate', 'dacite', 'dolerite', 'gabbro', 'granodiorite', 'mudstone', 'pillow_basalt', 'quartzite', 'rhyolite', 'schist', 'siltstone', 'weathered_rhyolite', 'white_granite']

StartupEvents.registry('block', e => {
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
        
    pebbleRegBlock.forEach(gravel => {
        e.create(`${gravel}_gravel`)
            .soundType('gravel').hardness(0.6).resistance(0.6)
            .tagBlock('minecraft:mineable/shovel')
            .tagBoth('kubejs:anvils/tier_0')
            .textureAll(`kubejs:block/gravel/${gravel}`)
    })

    cobbleReg.forEach(cobble => {
        e.create(`cobbled_${cobble}`)
            .soundType('stone').hardness(6).resistance(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .textureAll(`kubejs:block/cobble/${cobble}`)
    })
})