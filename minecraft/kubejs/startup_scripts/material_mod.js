GTCEuStartupEvents.registry('gtceu:material', e => {
    let tools = [GTToolType.SCYTHE, GTToolType.HARD_HAMMER, GTToolType.MORTAR, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.HOE, GTToolType.CHAINSAW_LV, GTToolType.CHAINSAW_HV, GTToolType.CHAINSAW_IV, GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.SCREWDRIVER, GTToolType.SCREWDRIVER_LV, GTToolType.SCREWDRIVER_HV, GTToolType.SCREWDRIVER_IV, GTToolType.BUZZSAW, GTToolType.SAW, GTToolType.FILE, GTToolType.WIRE_CUTTER, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV, GTToolType.WIRE_CUTTER_IV, GTToolType.WRENCH, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SWORD, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.CROWBAR]

    GTMaterials.Flint.removeProperty(PropertyKey.TOOL)
    GTMaterials.Iron.removeProperty(PropertyKey.TOOL)
    GTMaterials.SterlingSilver.removeProperty(PropertyKey.TOOL)
    GTMaterials.RoseGold.removeProperty(PropertyKey.TOOL)
    GTMaterials.BlueSteel.removeProperty(PropertyKey.TOOL)
    GTMaterials.RedSteel.removeProperty(PropertyKey.TOOL)
    GTMaterials.Invar.removeProperty(PropertyKey.TOOL)
    GTMaterials.Diamond.removeProperty(PropertyKey.TOOL)
    GTMaterials.TungstenCarbide.removeProperty(PropertyKey.TOOL)
    GTMaterials.DamascusSteel.removeProperty(PropertyKey.TOOL)

	GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.2, 1.0, 32, 1, [GTToolType.AXE, GTToolType.HARD_HAMMER, GTToolType.HOE, GTToolType.KNIFE, GTToolType.SHOVEL]).build())
	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(5.0, 2.5, 144, 2, tools).build())
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(8.5, 6.0, 128, 2, tools).build())
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 5.0, 256, 2, tools).build())
	GTMaterials.BlueSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(12.5, 9.5, 892, 3, tools).build())
	GTMaterials.RedSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(9.5, 7.5, 1152, 3, tools).build())
})
GTCEuStartupEvents.materialModification(e => {
    GTMaterials.BismuthBronze.setMaterialARGB(0x7aad4c)
    GTMaterials.BlackSteel.setMaterialARGB(0x4d4d4d)
    GTMaterials.Steel.setMaterialARGB(0x8b9bb0)
    GTMaterials.BlueSteel.setMaterialARGB(0x66b3ff)
    GTMaterials.RedSteel.setMaterialARGB(0xff6666)
    GTMaterials.Aluminium.setMaterialARGB(0xbbe0f2)
    GTMaterials.Titanium.setMaterialARGB(0xf7c3f6)

    GTMaterials.Titanium.setMaterialSecondaryARGB(0xfa9bd1)
})