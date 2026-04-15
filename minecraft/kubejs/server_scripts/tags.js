const color = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'pink', 'magenta', 'purple', 'brown', 'white', 'light_gray', 'gray', 'black']
ServerEvents.tags('item', e => {
    color.forEach(color => {
        e.add('ziph:minecraft/glazed_terracotta', `${color}_glazed_terracota`)
        e.add('ziph:ad_astra/industrial_lamp', `ad_astra:${color}_industrial_lamp`)
        e.add('ziph:ad_astra/small_industrial_lamp', `ad_astra:small_${color}_industrial_lamp`)
    })
    e.add('overgeared:smithing_hammers', '#forge:tools/hammers')
    e.add('overgeared:knappables', 'twigs:pebble')

    e.add('ziph:gtceu/wire_cutter_heads', /gtceu:.*_wire_cutter_head/)
    e.add('ziph:gtceu/drill_heads', /gtceu:.*_drill_head/)
    e.add('ziph:gtceu/chainsaw_heads', /gtceu:.*_chainsaw_head/)
    e.add('ziph:gtceu/drill_heads', /gtceu:.*_screwdriver_tip/)
    e.add('ziph:gtceu/drill_heads', /gtceu:.*_wrench_tip/)
    e.add('ziph:gtceu/single_wire', /gtceu:.*_single_wire/)
    e.add('ziph:gtceu/double_wire', /gtceu:.*_double_wire/)
    e.add('ziph:gtceu/quadruple_wire', /gtceu:.*_quadruple_wire/)
    e.add('ziph:gtceu/octal_wire', /gtceu:.*_octal_wire/)
    e.add('ziph:gtceu/hex_wire', /gtceu:.*_hex_wire/)
    e.add('ziph:gtceu/wire', /gtceu:.*_wire/)


})