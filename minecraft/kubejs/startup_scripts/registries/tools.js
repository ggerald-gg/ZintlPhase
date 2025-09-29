//i had to do this because i dont know how to make addons
const gtToolHeadMat = ['aluminium', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'bronze', 'cobalt_brass', 'copper', 'damascus_steel',  'diamond', 'duranium', 'invar', 'naquadah_alloy', 'neutronium', 
    'red_steel', 'rose_gold', 'stainless_steel', 'steel', 'sterling_silver', 'titanium', 'tungsten_carbide', 'ultimet', 'vanadium_steel', 'wrought_iron']
const gtToolHeadType = ['axe', 'butchery_knife', 'file', 'hammer', 'hoe', 'knife', 'mining_hammer', 'pickaxe', 'saw', 'screwdriver', 'scythe', 'shovel', 'spade', 'sword']
    
ItemEvents.toolTierRegistry(e => {
    e.add('pebble', tier => {
        tier.uses = 64
        tier.speed = 2.0
        tier.attackDamageBonus = 2.0
        tier.level = 0
        tier.enchantmentValue = 0
        tier.repairIngredient = '#kubejs:pebbles'
    })
})
StartupEvents.registry('item', e => {
    gtToolHeadMat.forEach(mat => {
        gtToolHeadType.forEach(tool => {
            e.create(`${mat}_${tool}_head`)
            .maxStackSize(16)
            .texture(`kubejs:item/tool_heads/${tool}/${mat}`)
        })})
//stone
//cuz it only has these
    e.create('stone_axe_head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/axe/stone')

    e.create('stone_hammer_head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/hammer/stone')

    e.create('stone_hoe_head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/hoe/stone')

    e.create('stone_knife_head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/knife/stone')

    e.create('stone_shovel_head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/shovel/stone')

//hsse
//cuz it has a wierd name
    e.create('hsse_axe_head')
    .displayName('HSS-E Axe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/axe/hsse')

    e.create('hsse_butchery_knife_head')
    .displayName('HSS-E Butchery Knife Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/butchery_knife/hsse')
    
    e.create('hsse_file_head')
    .displayName('HSS-E File Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/file/hsse')
    
    e.create('hsse_hammer_head')
    .displayName('HSS-E Hammer Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/hammer/hsse')

    e.create('hsse_hoe_head')
    .displayName('HSS-E Hoe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/hoe/hsse')

    e.create('hsse_knife_head')
    .displayName('HSS-E Knife Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/knife/hsse')

    e.create('hsse_mining_hammer_head')
    .displayName('HSS-E Mining Hammer Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/mining_hammer/hsse')

    e.create('hsse_pickaxe_head')
    .displayName('HSS-E Pickaxe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/pickaxe/hsse')

    e.create('hsse_saw_head')
    .displayName('HSS-E Saw Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/saw/hsse')

    e.create('hsse_screwdriver_head')
    .displayName('HSS-E Screwdriver Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/screwdriver/hsse')

    e.create('hsse_scythe_head')
    .displayName('HSS-E Scythe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/scythe/hsse')

    e.create('hsse_shovel_head')
    .displayName('HSS-E Shovel Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/shovel/hsse')

    e.create('hsse_spade_head')
    .displayName('HSS-E Spade Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/spade/hsse')

    e.create('hsse_sword_head')
    .displayName('HSS-E Sword Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/sword/hsse')

//tungstensteel
    e.create('tungsten_steel_axe_head')
    .displayName('Tungstensteel Axe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/axe/tungsten_steel')

    e.create('tungsten_steel_butchery_knife_head')
    .displayName('Tungstensteel Butchery Knife Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/butchery_knife/tungsten_steel')
    
    e.create('tungsten_steel_file_head')
    .displayName('Tungstensteel File Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/file/tungsten_steel')
    
    e.create('tungsten_steel_hammer_head')
    .displayName('Tungstensteel Hammer Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/hammer/tungsten_steel')

    e.create('tungsten_steel_hoe_head')
    .displayName('Tungstensteel Hoe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/hoe/tungsten_steel')

    e.create('tungsten_steel_knife_head')
    .displayName('Tungstensteel Knife Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/knife/tungsten_steel')

    e.create('tungsten_steel_mining_hammer_head')
    .displayName('Tungstensteel Mining Hammer Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/mining_hammer/tungsten_steel')

    e.create('tungsten_steel_pickaxe_head')
    .displayName('Tungstensteel Pickaxe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/pickaxe/tungsten_steel')

    e.create('tungsten_steel_saw_head')
    .displayName('Tungstensteel Saw Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/saw/tungsten_steel')

    e.create('tungsten_steel_screwdriver_head')
    .displayName('Tungstensteel Screwdriver Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/screwdriver/tungsten_steel')

    e.create('tungsten_steel_scythe_head')
    .displayName('Tungstensteel Scythe Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/scythe/tungsten_steel')

    e.create('tungsten_steel_shovel_head')
    .displayName('Tungstensteel Shovel Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/shovel/tungsten_steel')

    e.create('tungsten_steel_spade_head')
    .displayName('Tungstensteel Spade Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/spade/tungsten_steel')

    e.create('tungsten_steel_sword_head')
    .displayName('Tungstensteel Sword Head')
    .maxStackSize(16)
    .texture('kubejs:item/tool_heads/sword/tungsten_steel')
})