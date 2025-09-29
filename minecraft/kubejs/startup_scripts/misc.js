Platform.mods.kubejs.name = 'Zintl Phase'
const thirtytwoStack = [/(.*?)/]
const sixtyfourStack = [/(.*?):(.*?)_nugget/, /gtceu:(.*?)_round/, /gtceu:(.*?)_foil/, /gtceu:(.*?)_bolt/, /gtceu:(.*?)_screw/, /gtceu:fine_(.*?)_wire/]
const sixteenStack = [/(.*?):(.*?)_ingot/, /gtceu:(.*?)_plate/, /gtceu:long_(.*?)_rod/, /gtceu:small_(.*?)_gear/]
const eightStack = [/gtceu:double_(.*?)_plate/, /gtceu:(.*?)_gear/, /gtceu:dense_(.*?)_plate/, /gtceu:(.*?)_rotor/]

const stoneTypes = ['beige_limestone', 'conglomerate', 'dacite', 'dolerite', 'gabbro', 'granodiorite', 'grey_limestone', 'limestone', 'mudstone', 'phyllite', 'pillow_basalt', 'quartzite', 'rhyolite', 'schist', 'siltstone', 
    'slate', 'weathered_rhyolite', 'white_granite']

ItemEvents.modification(e => {
    thirtytwoStack.forEach(stack => {e.modify(`${stack}`, item => {item.maxStackSize = 32})})
    sixtyfourStack.forEach(stack => {e.modify(`${stack}`, item => {item.maxStackSize = 64})})
    sixteenStack.forEach( stack => {e.modify(`${stack}`, item => {item.maxStackSize = 16})})
    eightStack.forEach(stack => {e.modify(`${stack}`, item => {item.maxStackSize = 8})})
})
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    stoneTypes.forEach(stone => {
    event.create(`${stone}`, 'ore')
        .stateSupplier(() => Block.getBlock(`unearthed:${stone}`).defaultBlockState()) 
        .baseModelLocation(`unearthed:block/${stone}`)
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
    })
})