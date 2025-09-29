const moldRegistry = ['axe', 'hammer', 'hoe', 'knife', 'pickaxe', 'saw', 'scythe', 'shovel', 'sword']
const machineMoldsRegistry = [['axe', 'Axe'], ['butchery_knife', 'Butchery Knife'], ['file', 'File'], ['hammer', 'Hammer'], ['hoe', 'Hoe'], ['knife', 'Knife'], ['mining_hammer', 'Mining Hammer'], 
    ['pickaxe', 'Pickaxe'], ['saw', 'Saw'], ['screwdriver', 'Screwdriver'], ['scythe', 'Scythe'], ['shovel', 'Shovel'], ['spade', 'Spade'], ['sword', 'Sword']]
StartupEvents.registry('item', e => {
    e.create('unfired_clay_ingot_mold')
    .maxStackSize(16)
    .texture('kubejs:item/molds/unfired/ingot')

    e.create('clay_ingot_mold')
    .maxStackSize(16)
    .texture('kubejs:item/molds/fired/ingot')

    moldRegistry.forEach(mold => {
        e.create(`unfired_clay_${mold}_head_mold`)
        .maxStackSize(16)
        .texture(`kubejs:item/molds/unfired/${mold}`)

        e.create(`clay_${mold}_head_mold`)
        .maxStackSize(16)
        .texture(`kubejs:item/molds/fired/${mold}`)
    })
    
    machineMoldsRegistry.forEach(([mold, caps]) => {
        e.create(`${mold}_head_casting_mold`)
        .displayName(`Casting Mold (${caps} Head)`)
        .maxStackSize(16)
        .texture(`kubejs:item/molds/machine/casting/${mold}`)

        e.create(`${mold}_head_extruder_mold`)
        .displayName(`Extruder Mold (${caps} Head)`)
        .maxStackSize(16)
        .texture(`kubejs:item/molds/machine/extruder/${mold}`)
    })
})