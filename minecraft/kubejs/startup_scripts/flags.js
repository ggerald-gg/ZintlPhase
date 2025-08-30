//ignored: true
const $MaterialFlag = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag')

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    global.generate_double_ingot = new $MaterialFlag.Builder('generate_double_ingot')
            .requireProps(PropertyKey.INGOT)
            .build();

    event.create('double_ingot')
        .idPattern('double_%s_ingot')
        .defaultTagPath('double_ingots/%s')
        .unformattedTagPath('double_ingots')
        .langValue('Double %s Ingot')
        .materialAmount(GTValues.M * 2)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.ingotDouble)
        .unificationEnabled(true)
        .enableRecycling()
        .generateItem(true)
        .generationCondition(ItemGenerationCondition.hasIngotProperty.and(mat => mat.hasFlag(global.generate_double_ingot)))
})