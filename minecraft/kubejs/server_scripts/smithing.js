const smithMat = ['copper', 'bronze', 'black_bronze', 'bismuth_bronze', 'wrought_iron', 'steel', 'black_steel', 'red_steel', 'blue_steel']
ServerEvents.recipes(e => {
    smithMat.forEach(mat => {
    })
})
BlockEvents.rightClicked((e) => {
    const {
        server,
        player: { offHandItem, mainHandItem },
        block,
        facing,
    } = e; // gets the stuff from the event

    // check for axe, wood, stone
    if (!mainHandItem.hasTag("minecraft:axes")) return; // main hand axe
    if (!offHandItem.hasTag("minecraft:logs")) return; // off hand log
    if (!block.hasTag("forge:stone")) return; // clicking on stone

    // passed the checks, now to do stuff

    const axe = mainHandItem,
        logs = offHandItem;

    logs.count--; // reduce log by 1
    axe.damageValue++; // damage axe by 1

    block.popItemFromFace(Item.of("8x stick"), facing); // drop sticks

    server.runCommandSilent(
        // play sound
        `playsound minecraft:item.axe.strip block @a ${block.x} ${block.y} ${block.z} 1 1`
    );
});