const strawGrass = ['fern', 'grass', 'large_fern', 'tall_grass', 'farmersdelight:sandy_shrub', 'immersive_weathering:dune_grass', 'immersive_weathering:frosty_grass']
const stoneLoot = [['minecraft:andesite', 'andesite'], ['create:asurine', 'asurine'], ['minecraft:calcite', 'calcite'], ['create:crimsite', 'crimsite'], ['minecraft:diorite', 'diorite'], 
    ['minercraft:dripstone_block', 'dripstone'], ['minecraft:granite', 'granite'], ['create:limestone', 'limestone'], ['create:ochrum', 'ochrum'], ['twigs:rhyolite', 'rhyolite'], ['twigs:schist', 'schist'], 
    ['minecraft:tuff', 'tuff'], ['create:veridium', 'veridium']]
const cobbleLoot = [['andesite', 'kubejs:cobbled_ansesite'], ['calcite', 'kubejs:cobbled_calcite'], ['deepslate', 'cobbled_deepslate'], ['diorite', 'kubejs:cobbled_diorite'], 
    ['granite', 'kubejs:cobbled_granite'], ['dripstone', 'kubejs:cobbled_dripstone',], ['marble', 'gtceu:cobbled_marble'], ['red_granite', 'gtceu:cobbled_red_granite'], ['rhyolite', 'kubejs:cobbled_rhyolite'], 
    ['stone', 'cobblestone'], ['tuff', 'kubejs:cobbled_tuff']]
LootJS.modifiers(e => {
    e.addBlockLootModifier('gravel')
        .replaceLoot(Ingredient.of('gravel'), 
        LootEntry.of('kubejs:stone_pebble')
        .limitCount([1, 3]))

     e.addBlockLootModifier('stone')
        .matchMainHand('#minecraft:pickaxes')
        .replaceLoot(Ingredient.of('cobblestone'), 
        LootEntry.of('kubejs:stone_pebble')
        .limitCount([3, 4]))

     e.addBlockLootModifier('deepslate')
        .matchMainHand('#minecraft:pickaxes')
        .replaceLoot(Ingredient.of('cobbled_deepslate'), 
        LootEntry.of('kubejs:deepslate_pebble')
        .limitCount([3, 4]))

     e.addBlockLootModifier('gtceu:red_granite')
        .matchMainHand('#minecraft:pickaxes')
        .replaceLoot(Ingredient.of('gtceu:red_granite_cobblestone'), 
        LootEntry.of('kubejs:red_granite_pebble')
        .limitCount([3, 4]))

     e.addBlockLootModifier('gtceu:marble')
        .matchMainHand('#minecraft:pickaxes')
        .replaceLoot(Ingredient.of('gtceu:marble_cobblestone'), 
        LootEntry.of('kubejs:marble_pebble')
        .limitCount([3, 4]))

    strawGrass.forEach(straw => {
        e.addBlockLootModifier(`${straw}`)
            .matchMainHand('#forge:tools/knives')
            .addLoot('farmersdelight:straw');

        e.addBlockLootModifier(`${straw}`)
            .matchMainHand('kubejs:sharp_rock')
            .addLoot('farmersdelight:straw');
    })
    
    stoneLoot.forEach(([stone, pebble]) => {
        e.addBlockLootModifier(`${stone}`)
            .matchMainHand('#minecraft:pickaxes')
            .replaceLoot(Ingredient.of(`${stone}`), 
            LootEntry.of(`kubejs:${pebble}_pebble`)
            .limitCount([3, 4]))
    })
})
cobbleLoot.forEach(([stone, cobble]) => {
    BlockEvents.rightClicked(Array.from(Block.getTaggedIds(`kubejs:${stone}`).toArray()), event => {
        const {player:{mainHandItem}, item, hand, block, facing} = event
        if(!item.hasTag('kubejs:break_rock')) return;
        if([mainHandItem].every(item_ => item_.hasTag('kubejs:break_rock')) && hand == 'main_hand') return;
        block.popItemFromFace(Item.of(`kubejs:${stone}_pebble`), facing)
        player.play
        block.set(`${cobble}`)
    })
})