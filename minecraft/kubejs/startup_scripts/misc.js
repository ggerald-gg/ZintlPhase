Platform.mods.kubejs.name = 'Zintl Phase'

const stones = ['phyllite', 'slate', 'marble', 'quartzite', 'schist', 'dolomite', 'gabbro', 'granodiorite', 'rhyolite', 'white_granite', 'kimberlite', 'pumice', 'weathered_rhyolite', 'dolerite', 'pillow_basalt', 'dacite', 'limestone', 'beige_limestone', 'grey_limestone', 'siltstone', 'mudstone', 'conglomorate', 'lignite']

ItemEvents.toolTierRegistry(e => {
    e.add('primitive', tier => {
        tier.uses = 32
        tier.speed = 3
        tier.attackDamageBonus = 2
        tier.level = 1
        tier.enchantmentValue = 14
        tier.repairIngredient = '#minecraft:stone_tool_materials'
    })
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    stones.forEach(stone =>{
        e.create(`${stone}`, 'ore')
            .stateSupplier(() => Block.getBlock(`unearthed:${stone}`)
            .defaultBlockState()).baseModelLocation(`unearthed:block/${stone}`)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    })
})

BlockEvents.modification(e => {
    e.modify(`#minecraft:logs`, block => {block.destroySpeed = 50.0, block.requiresTool = true})
})