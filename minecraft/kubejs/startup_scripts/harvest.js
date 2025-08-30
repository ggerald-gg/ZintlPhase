const vanillaWood = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']
const netherWood = ['warped', 'crimson']
BlockEvents.modification(e => {
    vanillaWood.forEach((wood) => {
        e.modify(`minecraft:${wood}_log`, block => {block.destroySpeed = 50.0, block.requiresTool = true})
        e.modify(`dynamictrees:${wood}_branch`, block => {block.destroySpeed = 50.0, block.requiresTool = true})
    })
    netherWood.forEach((wood) => {
        e.modify(`minecraft:${wood}_stem`, block => {block.destroySpeed = 50.0, block.requiresTool = true})
        e.modify(`dynamictrees:${wood}_branch`, block => {block.destroySpeed = 50.0, block.requiresTool = true})
    })
})