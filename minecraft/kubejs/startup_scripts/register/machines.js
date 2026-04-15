GTCEuStartupEvents.registry('gtceu:recipe_type', e => {
    e.create('alloy_kiln')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(4, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE)

    e.create('soaking')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    e.create('blast_furnace')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(3, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE)

    e.create('crucible_smelting')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(4, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE)

})

GTCEuStartupEvents.registry('gtceu:machine', e => {
//singles  
    e.create('alloy_kiln', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
            .langValue('Alloy Kiln')
            .recipeType('alloy_kiln')
            .workableTieredHullModel('gtceu:block/machine/alloy_kiln'))

    e.create('casting_basin', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
            .langValue('Casting Basin')
            .recipeType('fluid_solidifier')
            .workableTieredHullModel('gtceu:block/machine/casting_basin'))

    e.create('barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
            .langValue('Barrel')
            .recipeType('soaking')
            .workableTieredHullModel('gtceu:block/machine/barrel'))

//mulis
    e.create('blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:refractory_bricks'))
        .recipeTypes('blast_furnace')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'BBB', 'BBB', 'BBB', 'BBB', 'BBB')
            .aisle('BBB', 'BCB', 'B B', 'B B', 'B B', 'B B')
            .aisle('BBB', 'B B', 'BBB', 'BBB', 'BIB', 'BBB')
            .aisle('BOB', 'B#B', '   ', '   ', '   ', '   ')
            .where('#', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('kubejs:refractory_bricks'))
            .where('C', Predicates.blocks('kubejs:crucible'))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel('kubejs:block/refractory_bricks', 'gtceu:block/multiblock/primitive_blast_furnace')

    e.create('crucible_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:refractory_bricks'))
        .recipeTypes('crucible_smelting')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'SBS')
            .aisle('BSB', 'BCB')
            .aisle('BBB', 'S#S')
            .where('#', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('kubejs:refractory_bricks')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('S', Predicates.blocks('kubejs:refractory_brick_slab'))
            .where('C', Predicates.blocks('kubejs:crucible'))
            .build())
        .workableCasingModel('kubejs:block/refractory_bricks', 'gtceu:block/machines/alloy_smelter')
    
})