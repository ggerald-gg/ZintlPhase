BlockEvents.rightClicked(event => {
    const {player, item, block:{entity}, server} = event
    if(!player.crouching) return;
    if(!entity) return;
    if(item.empty) return;
    const $Container = Java.loadClass('net.minecraft.world.Container')
    const $InvWrapper = Java.loadClass('net.minecraftforge.items.wrapper.InvWrapper')
    const $AbstractFurnace = Java.loadClass('net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity')
    if(!entity instanceof $Container) return;
    const /**@type {Internal.CombinedInvWrapper} */ inventory = $InvWrapper(entity)
    server.scheduleInTicks(0, _ => {
        if(entity instanceof $AbstractFurnace){player.setMainHandItem(inventory.insertItem(0, inventory.insertItem(1, item, false), false))}
        else {player.setMainHandItem(inventory.insertItem(item, false))}
    })
})