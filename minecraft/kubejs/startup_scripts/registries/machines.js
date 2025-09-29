GTCEuStartupEvents.registry('gtceu:recipe_type', e => {
    e.create('kiln_smelting')
        .category('kiln_smelting')
        .setEUIO('in')
        .setMaxIOSize(5, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', e => {
    e.create('metallurgy_kiln', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
        builder
            .recipeTypes('kiln_smelting')
            .workableCasingRenderer('kubejs:block/kiln/adobe_bricks', 'gtceu:block/machines/metallurgy_kiln', false))
})