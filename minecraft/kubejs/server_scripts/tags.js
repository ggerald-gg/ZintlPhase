const coalTag = ['coal', 'charcoal', 'gtceu:coke_gem', 'gtceu:coal_dust', 'gtceu:charcoal_dust', 'gtceu:coke_dust']
ServerEvents.tags('item', e => {
    coalTag.forEach(a => {e.add('forge:coal', `${a}`)})

    e.add('forge:tools/knives', 'kubejs:sharp_stone')

    e.add('forge:string', 'kubejs:plant_string')
    e.add('forge:string', 'kubejs:plastic_string')

    e.add('kubejs:break_rock', 'kubejs:sharp_rock')

    e.add('kubejs:andesite', 'andesite')
    e.add('kubejs:asurine', 'create:asurine')
    e.add('kubejs:calcite', 'calcite')
    e.add('kubejs:crimsite', 'create:crimsite')
    e.add('kubejs:deepslate', 'deepslate')
    e.add('kubejs:diorite', 'diorite')
    e.add('kubejs:dripstone', 'dripstone')
    e.add('kubejs:granite', 'granite')
    e.add('kubejs:limestone', 'create:limestone')
    e.add('kubejs:marble', 'gtceu:marble')
    e.add('kubejs:ochrum', 'create:ochrum')
    e.add('kubejs:red_granite', 'gtceu:red_granite')
    e.add('kubejs:rhyolite', 'twigs:rhyolite')
    e.add('kubejs:schist', 'twigs:schist')
    e.add('kubejs:stone', 'stone')
    e.add('kubejs:tuff', 'tuff')
    e.add('kubejs:veridium', 'create:veridium')

    e.add('forge:ingots/bricks', 'immersive_weathering:deepslate_tiles')
    e.add('forge:ingots/bricks', 'immersive_weathering:prismarine_brick')
    e.add('forge:ingots/bricks', 'nether_brick')
    
    e.add('forge:ingots', 'immersive_weathering:deepslate_tiles')
    e.add('forge:ingots', 'immersive_weathering:prismarine_tiles')

    e.add('kubejs:gtceu/ore_dusts/copper', 'gtceu:copper_dust')
    e.add('kubejs:gtceu/ore_dusts/copper', 'gtceu:chalcopyrite_dust')
    e.add('kubejs:gtceu/ore_dusts/copper', 'gtceu:tetrahedrite_dust')
    e.add('kubejs:gtceu/ore_dusts/copper', 'gtceu:bornite_dust')
    e.add('kubejs:gtceu/ore_dusts/copper', 'gtceu:chalcocite_dust')
    e.add('kubejs:gtceu/ore_dusts/copper', 'gtceu:malachite_dust')
    e.add('kubejs:gtceu/ore_dusts/copper', 'gtceu:azurite_dust')

    e.add('kubejs:gtceu/ore_dusts/tin', 'gtceu:tin_dust')
    e.add('kubejs:gtceu/ore_dusts/tin', 'gtceu:cassiterite_dust')
    e.add('kubejs:gtceu/ore_dusts/tin', 'gtceu:cassiterite_sand_dust')
    e.add('kubejs:gtceu/ore_dusts/tin', 'gtceu:stannite_dust')

    e.add('kubejs:gtceu/ore_dusts/bismuth', 'gtceu:bismuth_dust')
    e.add('kubejs:gtceu/ore_dusts/bismuth', 'gtceu:bismuthinite_dust')
    
    e.add('kubejs:gtceu/ore_dusts/zinc', 'gtceu:sphalerite_dust')
    e.add('kubejs:gtceu/ore_dusts/zinc', 'gtceu:smithsonite_dust')

    e.add('kubejs:gtceu/ore_dusts/gold', 'gtceu:gold_dust')
    
    e.add('kubejs:gtceu/ore_dusts/silver', 'gtceu:silver_dust')
    e.add('kubejs:gtceu/ore_dusts/silver', 'gtceu:calaverite_dust')

    e.add('kubejs:gtceu/ore_dusts/gold-silver', 'gtceu:raw_electrum_dust')
    e.add('kubejs:gtceu/ore_dusts/gold-silver', 'gtceu:sylvanite_dust')
})