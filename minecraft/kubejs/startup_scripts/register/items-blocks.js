const toolMatReg = ['copper', 'bronze', 'bismuth_bronze', 'black_bronze', 'wrought_iron', 'cobalt_brass', 'steel', 'blue_steel', 'red_steel', 'aluminium', 'vanadium_steel', 'stainless_steel', 'titanium', 'ultimet', 'naquadah_alloy', 'duranium', 'neutronium']
const headReg = [['axe', 'Axe'], ['hoe', 'Hoe'], ['shovel', 'Shovel'], ['hammer', 'Hammer'], ['pickaxe', 'Pickaxe'], ['file', 'File'], ['mining_hammer', 'Mining Hammer'], ['spade', 'Spade']]
const bladeReg = [['knife', 'Knife'], ['butchery_knife', 'Butchery Knife'], ['sword', 'Sword'], ['saw', 'Saw'], ['scythe', 'Scythe']]
const moldReg = ['ingot', 'axe', 'hammer', 'hoe', 'knife', 'pickaxe', 'saw', 'shovel', 'sword']

StartupEvents.registry('item', e => {
    e.create('sharp_rock', 'sword').tier('primitive').attackDamageBaseline(1).tag('forge:tools/knives')
    e.create('adobe_clay')
    e.create('unfired_flower_pot')
    e.create('iron_bloom')
    e.create('refractory_clay')
    e.create('unfired_refractory_brick')
    e.create('refractory_brick')
    
    e.create('stone_axe_head').texture('kubejs:item/tool_heads/axe/stone').tag('ziph:tool_heads/axe').tag('overgeared:tool_parts')
    e.create('stone_hoe_head').texture('kubejs:item/tool_heads/hoe/stone').tag('ziph:tool_heads/hoe').tag('overgeared:tool_parts')
    e.create('stone_hammer_head').texture('kubejs:item/tool_heads/hammer/stone').tag('ziph:tool_heads/hammer').tag('overgeared:tool_parts')
    e.create('stone_knife_head').texture('kubejs:item/tool_heads/knife/stone').tag('ziph:tool_heads/knife').tag('overgeared:tool_parts')
    e.create('stone_shovel_head').texture('kubejs:item/tool_heads/shovel/stone').tag('ziph:tool_heads/shovel').tag('overgeared:tool_parts')

    moldReg.forEach(tool => {
        e.create(`unfired_${tool}_mold`).tag('ziph:tool_molds/unfired').texture(`kubejs:item/molds/unfired/${tool}`)
        e.create(`${tool}_mold`).tag('ziph:tool_molds/fired').texture(`kubejs:item/molds/fired/${tool}`)
    })
    headReg.forEach(([head, Head]) => {
        toolMatReg.forEach(mat => {e.create(`${mat}_${head}_head`).texture(`kubejs:item/tool_heads/${head}/${mat}`).tag(`ziph:tool_heads/${head}`).tag('overgeared:tool_parts')})
            e.create(`hsse_${head}_head`).displayName(`HSS-E ${Head} Head`).texture(`kubejs:item/tool_heads/${head}/hsse`).tag(`ziph:tool_heads/${head}`).tag('overgeared:tool_parts')
            e.create(`tungsten_steel_${head}_head`).displayName(`Tungstensteel ${Head} Head`).texture(`kubejs:item/tool_heads/${head}/tungsten_steel`).tag(`ziph:tool_heads/${head}`).tag('overgeared:tool_parts')
    })

    bladeReg.forEach(([blade, Blade]) => {
        toolMatReg.forEach(mat => {e.create(`${mat}_${blade}_blade`).texture(`kubejs:item/tool_heads/${blade}/${mat}`).tag(`ziph:tool_heads/${blade}`).tag('overgeared:tool_parts')})
        e.create(`hsse_${blade}_blade`).displayName(`HSS-E ${Blade} Blade`).texture(`kubejs:item/tool_heads/${blade}/hsse`).tag(`ziph:tool_heads/${blade}`).tag('overgeared:tool_parts')
        e.create(`tungsten_steel_${blade}_blade`).displayName(`Tungstensteel ${Blade} Blade`).texture(`kubejs:item/tool_heads/${blade}/tungsten_steel`).tag(`ziph:tool_heads/${blade}`).tag('overgeared:tool_parts')
    })
})

StartupEvents.registry('block', e => {
    e.create('refractory_bricks')
        .soundType('stone')
        .hardness(2).resistance(6)
        .requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
        .tagItem('forge:bricks')

    e.create('refractory_brick_slab', 'slab')
        .soundType('stone')
        .hardness(2).resistance(6)
        .requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
        .tagItem('forge:bricks')
        .textureAll('kubejs:block/refractory_bricks')

    e.create('crucible')
        .soundType('netherite_block')
        .hardness(5).resistance(6)
        .requiresTool(true).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
        .fullBlock(false).notSolid().waterlogged().transparent(true)
})