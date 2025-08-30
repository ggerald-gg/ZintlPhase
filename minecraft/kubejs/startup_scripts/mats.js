GTCEuStartupEvents.registry('gtceu:material', e => {
    e.create('mortar')
        .dust()
        .color(0xc59b77).secondaryColor(0x6b8e6f).iconSet('fine')

    e.create('cast_iron')
        .ingot()
        .components('50x iron', 'carbon')
        .color(0xc9caba).secondaryColor(0x4a5451).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_SMALL_GEAR)
})