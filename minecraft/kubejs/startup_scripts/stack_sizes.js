const eightStack = []
const sixteenStack = [/(.*?)_ingot/, /ad_astra:(.*?)_ingot/, /gtceu:(.*?)_ingot/]
const thirtytwoStack = ['#ad_astra:destroyed_in_space', '#create:stone_types/andesite', '#create:stone_types/calcite', '#create:stone_types/deepslate', '#create:stone_types/diorite', '#create:stone_types/dripstone', 
    '#create:stone_types/granite', '#create:stone_types/tuff', '#forge:stone', '#minecraft:dirt', '#minecraft:planks', '#minecraft:sand', '#minecraft:stone_tool_materials', 'crimson_nylium', 'warped_nylium']
ItemEvents.modification(e => {
    eightStack.forEach(stack => {e.modify(`${stack}`, item => {item.maxStackSize = 8})})
    sixteenStack.forEach( stack => {e.modify(`${stack}`, item => {item.maxStackSize = 16})})
    thirtytwoStack.forEach(stack => {e.modify(`${stack}`, item => {item.maxStackSize = 32})})
})