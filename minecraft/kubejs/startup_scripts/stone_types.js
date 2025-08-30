const stoneTypes = ['beige_limestone', 'conglomerate', 'dacite', 'dolerite', 'gabbro', 'granodiorite', 'grey_limestone', 'limestone', 'mudstone', 'phyllite', 'pillow_basalt', 'quartzite', 'rhyolite', 'schist', 
    'siltstone', 'slate', 'weathered_rhyolite', 'white_granite']
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    stoneTypes.forEach(stone => {
    event.create(`${stone}`, 'ore')
        .stateSupplier(() => Block.getBlock(`unearthed:${stone}`).defaultBlockState()) 
        .baseModelLocation(`unearthed:block/${stone}`)
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
    })
})