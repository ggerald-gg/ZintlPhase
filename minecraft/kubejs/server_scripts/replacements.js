const ad_astraReplace = ['iron_rod', 'steel_block', 'steel_ingot', 'steel_nugget', 'steel_plate', 'steel_rod']
const dustReplace = ['certus_quartz', 'diamond', 'ender_pearl', 'obsidian', 'salt']
const ingotReplace = ['brass', 'electrum', 'vanadium', 'zinc']
const onlyReplace = ['diesel', 'ethanol', 'gasoline', 'hydrogen', 'oil', 'oxygen', 'sulfuric_acid']
const nuggetReplace = ['brass', 'copper', 'electrum', 'vanadium', 'zinc']
const plateReplace = ['brass', 'bronze', 'cobalt', 'copper', 'electrum', 'gold', 'invar', 'iron', 'lead', 'nickel', 'obsidian', 'osmium', 'palladium', 'platinum', 'rhodium', 'rose_gold', 'silver', 'uranium', 'zinc']
const rodReplace = ['brass', 'bronze', 'cobalt', 'copper', 'electrum', 'gold', 'invar', 'lead', 'osmium', 'palladium', 'platinum', 'rhodium', 'rose_gold', 'silver', 'tin', 'uranium', 'vanadium', 'zinc']
const blockReplace = ['brass', 'charcoal', 'vanadium', 'zinc']
const crateReplace = ['beetroot', 'carrot', 'potato']
ServerEvents.recipes(e => {
    ad_astraReplace.forEach(ad_astra => {
        e.replaceInput({ input: `#ad_astra:${ad_astra}s` }, `#ad_astra:${ad_astra}s`, `gtceu:${ad_astra}`)
        e.replaceOutput({ output: `#ad_astra:${ad_astra}s` }, `#ad_astra:${ad_astra}s`, `gtceu:${ad_astra}`)})
    dustReplace.forEach(dust => {
        e.replaceInput({ input: `#forge:dusts/${dust}` }, `#forge:dusts/${dust}`, `gtceu:${dust}_dust`)
        e.replaceOutput({ output: `#forge:dusts/${dust}` }, `#forge:dusts/${dust}`, `gtceu:${dust}_dust`)})
    ingotReplace.forEach(ingot => {
        e.replaceInput({ input: `#forge:ingots/${ingot}` }, `#forge:ingots/${ingot}`, `gtceu:${ingot}_ingot`)
        e.replaceOutput({ output: `#forge:ingots/${ingot}` }, `#forge:ingots/${ingot}`, `gtceu:${ingot}_ingot`)})
    onlyReplace.forEach(just => {
        e.replaceInput({ input: `#forge:${just}` }, `#forge:${just}`, `gtceu:${just}`)
        e.replaceOutput({ output: `#forge:${just}` }, `#forge:${just}`, `gtceu:${just}`)})
    nuggetReplace.forEach(nugget => {
        e.replaceInput({ input: `#forge:nuggets/${nugget}` }, `#forge:nuggets/${nugget}`, `gtceu:${nugget}_nugget`)
        e.replaceOutput({ output: `#forge:nuggets/${nugget}` }, `#forge:nuggets/${nugget}`, `gtceu:${nugget}_nugget`)})
    plateReplace.forEach(plate => {
        e.replaceInput({ input: `#forge:plates/${plate}` }, `#forge:plates/${plate}`, `gtceu:${plate}_plate`)
        e.replaceOutput({ output: `#forge:plates/${plate}` }, `#forge:plates/${plate}`, `gtceu:${plate}_plate`)})
    blockReplace.forEach(block => {
        e.replaceInput({ input: `#forge:storage_blocks/${block}` }, `#forge:storage_blocks/${block}`, `gtceu:${block}_block`)
        e.replaceOutput({ output: `#forge:storage_blocks/${block}` }, `#forge:storage_blocks/${block}`, `gtceu:${block}_block`)})
    crateReplace.forEach(crate => {
        e.replaceInput({ input: `#forge:storage_blocks/${crate}` }, `#forge:storage_blocks/${crate}`, `farmersdelight:${crate}_crate`)
        e.replaceOutput({ output: `#forge:storage_blocks/${crate}` }, `#forge:storage_blocks/${crate}`, `farmersdelight:${crate}_crate`)})

    e.replaceInput({ input: '#ad_astra:oil' }, '#ad_astra:oil', 'gtceu:oil')
    e.replaceOutput({ output: '#ad_astra:oil' }, '#ad_astra:oil', 'gtceu:oil')
    
    e.replaceInput({ input: '#ad_astra:oxygen' }, '#ad_astra:oxygen', 'gtceu:oxygen')
    e.replaceOutput({ output: '#ad_astra:oxygen' }, '#ad_astra:oxygen', 'gtceu:oxygen')
    
    e.replaceInput({ input: '#forge:dough' }, '#forge:dough', 'create:dough')
    e.replaceOutput({ output: '#forge:dough' }, '#forge:dough', 'create:dough')

    e.replaceInput({ input: '#forge:dough/wheat' }, '#forge:dough/wheat', 'create:dough')
    e.replaceOutput({ output: '#forge:dough/wheat' }, '#forge:dough/wheat', 'create:dough')

    e.replaceInput({ input: '#forge:rope' }, '#forge:rope', 'farmersdelight:rope')
    e.replaceOutput({ output: '#forge:rope' }, '#forge:rope', 'farmersdelight:rope')

    e.replaceInput({ input: '#forge:water' }, '#forge:water', 'water')
    e.replaceOutput({ output: '#forge:water' }, '#forge:water', 'water')
})