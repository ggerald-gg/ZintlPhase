const mats = ['brass', 'steel', 'vanadium', 'zinc', 'copper', 'bronze', 'cobalt', 'gold', 'invar', 'lead', 'iron', 'nickel', 'obsidian', 'osmium', 'palladium', 'platinum', 'rhodium', 'rose_gold', 'tin', 'uranium']
const unify = [['#forge:sulfur_dioxide', 'gtceu:sulfur_dioxide'], ['#forge:sulfur_trioxide', 'gtceu:sulfur_trioxide'], ['#forge:sulfuric_acid', 'gtceu:sulfuric_acid'], ['#forge:hydrogen', 'gtceu:hydrogen'], ['#forge:oil', 'gtceu:oil'], ['#forge:oxygen', 'gtceu:oxygen'], ['#forge:salt', 'gtceu:salt_dust'], ['#ad_astra:iron_rods', 'gtceu:iron_rod'], ['#ad_astra:steel_rods', 'gtceu:steel_rod'], ['#forge:dough/wheat', 'farmersdelight:wheat_dough'], ['#forge:dusts/obsidian', 'gtceu:obsidian_dust']]
ServerEvents.recipes(e => {
    unify.forEach(([base, replace]) => {
        e.replaceInput({input: `${base}`}, `${base}`, `${replace}`)
        e.replaceOutput({output: `${base}`}, `${base}`, `${replace}`)
    })

    mats.forEach(mat => {
        e.replaceInput({input: `#forge:plates/${mat}`}, `#forge:plates/${mat}`, `gtceu:${mat}_plate`)
        e.replaceOutput({output: `#forge:plates/${mat}`}, `#forge:plates/${mat}`, `gtceu:${mat}_plate`)

        e.replaceInput({input: `#forge:rods/${mat}`}, `#forge:rods/${mat}`, `gtceu:${mat}_rod`)
        e.replaceOutput({output: `#forge:rods/${mat}`}, `#forge:rods/${mat}`, `gtceu:${mat}_rod`)

        e.replaceInput({input: `#forge:storage_blocks/${mat}`}, `#forge:storage_blocks/${mat}`, `gtceu:${mat}_block`)
        e.replaceOutput({output: `#forge:storage_blocks/${mat}`}, `#forge:storage_blocks/${mat}`, `gtceu:${mat}_block`)
    })
})