const toolMatRx = ['copper', 'bronze', 'bismuth_bronze', 'black_bronze', 'wrought_iron', 'cobalt_brass', 'steel', 'blue_steel', 'red_steel', 'aluminium', 'vanadium_steel', 'stainless_steel', 'titanium', 'ultimet', 'naquadah_alloy', 'duranium', 'neutronium']
const headRx = ['axe', 'file', 'hoe', 'hammer', 'mining_hammer', 'pickaxe', 'shovel', 'spade']
const bladeRx = ['butchery_knife', 'knife', 'saw', 'scythe', 'sword']
const moldRx = ['ingot', 'axe', 'hammer', 'hoe', 'knife', 'pickaxe', 'saw', 'shovel', 'sword']

ServerEvents.recipes(e => {
    e.shapeless('gtceu:salt_dust', 'vintagedelight:salt_dust')
    e.shapeless('gtceu:stone_axe', ['kubejs:stone_axe_head', 'farmersdelight:straw', 'stick'])
    e.shapeless('gtceu:stone_hoe', ['kubejs:stone_hoe_head', 'farmersdelight:straw', 'stick'])
    e.shapeless('gtceu:stone_hammer', ['kubejs:stone_hammer_head', 'farmersdelight:straw', 'stick'])
    e.shapeless('gtceu:stone_knife', ['kubejs:stone_knife_head', 'farmersdelight:straw', 'stick'])
    e.shapeless('gtceu:stone_shovel', ['kubejs:stone_shovel_head', 'farmersdelight:straw', 'stick'])
    e.shapeless('kubejs:adobe_clay', ['clay_ball', 'farmersdelight:straw'])

    e.campfireCooking('torch', 'stick', 0, 100)
    e.campfireCooking('brick', 'gtceu:compressed_clay', 0, 1200)
    e.campfireCooking('flower_pot', 'kubejs:unfired_flower_pot', 0, 2400)
    e.campfireCooking('thirst:terracotta_bowl', 'thirst:clay_bowl', 0, 2400)
    moldRx.forEach(tool => {e.campfireCooking(`kubejs:${tool}_mold`, `kubejs:unfired_${tool}_mold`, 0, 2400)})

    toolMatRx.forEach(mat => {
        headRx.forEach(tool => {e.shapeless(`gtceu:${mat}_${tool}`, [`kubejs:${mat}_${tool}_head`, 'stick'])})
        bladeRx.forEach(tool => {e.shapeless(`gtceu:${mat}_${tool}`, [`kubejs:${mat}_${tool}_blade`, 'stick'])})
    })

    e.custom({type: 'overgeared:rock_knapping',
        pattern: [
            'xx ',
            'xx ',
            '  x'],
        ingredient: {item: 'overgeared:knappable_rock'},
        results: {item: 'kubejs:stone_axe_head'},
        show_notification: false})

    e.custom({type: 'overgeared:rock_knapping',
        pattern: [
            'xx ',
            '  x'],
        ingredient: {item: 'overgeared:knappable_rock'},
        results: {item: 'kubejs:stone_hoe_head'},
        show_notification: false})

    e.custom({type: 'overgeared:rock_knapping',
        pattern: [
            'xxx',
            'xxx'],
        ingredient: {item: 'overgeared:knappable_rock'},
        results: {item: 'kubejs:stone_hammer_head'},
        show_notification: false})

    e.custom({type: 'overgeared:rock_knapping',
        pattern: [
            '  x',
            'xx ',
            'x  '],
        ingredient: {item: 'overgeared:knappable_rock'},
        results: {item: 'kubejs:stone_knife_blade'},
        show_notification: false})

    e.custom({type: 'overgeared:rock_knapping',
        pattern: [
            'xx',
            'xx'],
        ingredient: {tag: 'overgeared:knappable_rock'},
        results: {item: 'kubejs:stone_shovel_head'},
        show_notification: false})
})