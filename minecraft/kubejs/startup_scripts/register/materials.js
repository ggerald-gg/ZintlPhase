GTCEuStartupEvents.registry('gtceu:material', e => {
    e.create('cast_iron')
        .ingot()
        .components('iron')
        .color(0x616161).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LONG_ROD)

    e.create('slag')
        .ingot()
        .color(0x839689).iconSet(GTMaterialIconSet.ROUGH)

//ores
    e.create('bismuthinite')
        .dust().ore()
        .components('2x bismuth', '3x sulfur')
        .color(0xaddec1).iconSet(GTMaterialIconSet.METALLIC)

    e.create('bismite')
        .dust().ore()
        .components('2x bismuth', '3x oxygen')
        .color(0x324037).iconSet(GTMaterialIconSet.DULL)
})