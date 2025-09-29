const castingMolds = [['axe', '6', '2', '4'], ['hammer', '9', '3', '6'], ['hoe', '3', '1', '2'], ['knife', '3', '1', '2'], ['pickaxe', '6', '2', '4'], ['saw', '6', '2', '4'], ['scythe', '6', '2', '4'], 
    ['shovel', '3', '1', '2'], ['sword', '6', '2', '4']]
const firing = [['gtceu:compressed_clay', 'brick'], ['kubejs:unfired_adobe_brick', 'kubejs:adobe_brick']]

ServerEvents.recipes(e => {
    e.campfireCooking('torch', 'stick', 0, 100)
    e.campfireCooking('kubejs:adobe_brick', 'kubejs:unfired_adobe_brick', 0, 9000)
    firing.forEach(([unfired, fired]) => {e.blasting(`${fired}`, `${unfired}`).cookingTime(6000)})

    //e.shaped('gtceu:metallurgy_kiln', ['bb', 'BB'], {b: 'kubejs:adobe_brick', B: 'kubejs:adobe_brick_slab'})
    e.shaped('kubejs:adobe_brick_chimney', ['B', 'B'], {B: 'kubejs:adobe_brick_slab'})
    e.shaped('kubejs:adobe_brick_slab', ['CB', 'BC'], {C: 'clay_ball', B: 'kubejs:adobe_brick'})
    e.shaped('kubejs:adobe_bricks', ['CB', 'BC'], {C: 'clay_ball', B: 'kubejs:adobe_bricks_slab'})
    e.shaped('kubejs:adobe_bricks', ['MBM', 'BMB', 'MBM'], {M: 'kubejs:mortar', B: 'kubejs:adobe_brick'})

    e.shapeless('kubejs:unfired_clay_ingot_mold', ['#forge:ingots', 'clay_ball']).keepIngredient('#forge:ingots')
    e.shapeless('kubejs:unfired_clay_axe_head_mold', ['kubejs:stone_axe_head', '2x clay_ball']).keepIngredient('kubejs:stone_axe_head')
    e.shapeless('kubejs:unfired_clay_hammer_head_mold', ['kubejs:stone_hammer_head', '3x clay_ball']).keepIngredient('kubejs:stone_hammer_head')
    e.shapeless('kubejs:unfired_clay_hoe_head_mold', ['kubejs:stone_hoe_head', 'clay_ball']).keepIngredient('kubejs:stone_hoe_head')
    e.shapeless('kubejs:unfired_clay_knife_head_mold', ['kubejs:stone_knife_head', 'clay_ball']).keepIngredient('kubejs:stone_knife_head')
    e.shapeless('kubejs:unfired_clay_pickaxe_head_mold', ['kubejs:unfired_clay_hoe_head_mold', 'kubejs:stone_hoe_head', 'clay_ball']).keepIngredient('kubejs:stone_hoe_head')
    e.shapeless('kubejs:unfired_clay_pickaxe_head_mold', ['2x kubejs:stone_hoe_head', '2x clay_ball']).keepIngredient('kubejs:stone_hoe_head')
    e.shapeless('kubejs:unfired_clay_saw_head_mold', ['kubejs:unfired_clay_knife_head_mold', 'kubejs:stone_knife_head', 'clay_Ball']).keepIngredient('kubejs:stone_knife_head')
    e.shapeless('kubejs:unfired_clay_saw_head_mold', ['2x kubejs:stone_knife_head', '2x clay_ball']).keepIngredient('kubejs:stone_knife_head')
    e.shapeless('kubejs:unfired_clay_scythe_head_mold', ['kubejs:unfired_clay_knife_head_mold', 'kubejs:stone_hoe_head', 'clay_ball']).keepIngredient('kubejs:stone_hoe_head')
    e.shapeless('kubejs:unfired_clay_scythe_head_mold', ['kubejs:stone_knife_head', 'kubejs:stone_hoe_head', '2x clay_ball']).keepIngredient(['kubejs:stone_knife_head', 'kubejs:stone_hoe_head'])
    e.shapeless('kubejs:unfired_clay_shovel_head_mold', ['kubejs:stone_shovel_head', 'clay_ball']).keepIngredient('kubejs:stone_shovel_head')
    e.shapeless('kubejs:unfired_clay_sword_head_mold', ['kubejs:unfired_clay_knife_head_mold', 'kubejs:stone_knife_head', 'clay_ball']).keepIngredient(['kubejs:stone_knife_head'])
    e.shapeless('kubejs:unfired_clay_sword_head_mold', ['2x kubejs:stone_knife_head', '2x clay_ball']).keepIngredient('kubejs:stone_knife_head')

    castingMolds.forEach(([mold, copper, other, auag]) => {
        e.recipes.gtceu.kiln_smelting(`kiln_bronze_${mold}_head`)
        .chancedInput(`kubejs:clay_${mold}_mold`, 7000, 1)
        .itemInputs(`${copper}x #kubejs:gtceu/ore_dusts/copper`, `${other}x #kubejs:gtceu/ore_dusts/tin`, '3x #kubejs:coal')
        .itemOutputs(`kubejs:bronze_${mold}_head`)
        .duration(3000)
                
        e.recipes.gtceu.kiln_smelting(`kiln_bismuth_bronze_${mold}_head`)
        .chancedInput(`kubejs:clay_${mold}_mold`, 7000, 1)
        .itemInputs(`${other}x #kubejs:gtceu/ore_dusts/bismuth`, `${other}x #kubejs:gtceu/ore_dusts/zinc`, `${copper}x #kubejs:gtceu/ore_dusts/copper`, '3x #kubejs:coal')
        .itemOutputs(`kubejs:bismuth_bronze_${mold}_head`)
        .duration(3000)

        e.recipes.gtceu.kiln_smelting(`kiln_black_bronze_${mold}_head`)
        .chancedInput(`kubejs:clay_${mold}_mold`, 7000, 1)
        .itemInputs(`${other}x #kubejs:gtceu/ore_dusts/gold`, `${other}x #kubejs:gtceu/ore_dusts/silver`, `${copper}x #kubejs:gtceu/ore_dusts/copper`, '3x #kubejs:coal')
        .itemOutputs(`kubejs:black_bronze_${mold}_head`)
        .duration(3000)

        e.recipes.gtceu.kiln_smelting(`kiln_black_bronze_${mold}_head_auag`)
        .chancedInput(`kubejs:clay_${mold}_mold`, 7000, 1)
        .itemInputs(`${auag}x #kubejs:gtceu/ore_dusts/gold-silver`, `${copper}x #kubejs:gtceu/ore_dusts/copper`, '3x #kubejs:coal')
        .itemOutputs(`kubejs:black_bronze_${mold}_head`)
        .duration(3000)
    })
})