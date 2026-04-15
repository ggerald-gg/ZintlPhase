const strawGrass = ['fern', 'grass', 'large_fern', 'tall_grass', 'farmersdelight:sandy_shrub', 'immersive_weathering:dune_grass', 'immersive_weathering:frosty_grass']
LootJS.modifiers((e) => {
    strawGrass.forEach(straw => {
        e.addBlockLootModifier(`${straw}`)
            .matchMainHand('#forge:tools/knives')
            .addLoot('farmersdelight:straw')
    })
})