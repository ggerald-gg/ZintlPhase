const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
	GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty());
	GTMaterials.Rubidium.setProperty(PropertyKey.DUST, new $DustProperty());
	GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty());

    const tools = [GTToolType.AXE, GTToolType.PICKAXE, GTToolType.HARD_HAMMER, GTToolType.BUTCHERY_KNIFE, GTToolType.SWORD, GTToolType.FILE, GTToolType.SAW, GTToolType.SHOVEL, GTToolType.SHOVEL, GTToolType.SPADE, 
		GTToolType.MINING_HAMMER, GTToolType.HOE, GTToolType.KNIFE, GTToolType.BUZZSAW, GTToolType.SCYTHE,GTToolType.WIRE_CUTTER, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV,
		GTToolType.DRILL_IV, GTToolType.SCREWDRIVER,GTToolType.SCREWDRIVER_LV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.CROWBAR]
//ore
	GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $OreProperty());
	GTMaterials.Trinium.setProperty(PropertyKey.ORE, new $OreProperty());

//tools
	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2, 1.5, 96, 2, tools).build());
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 2, 188, 2, tools).build());
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 2, 199, 2, tools).build());
	GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(20, 4, 768, 3, tools).build());
	GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2, 1, 131, 2, GTToolType.AXE, GTToolType.HARD_HAMMER, GTToolType.SHOVEL, 
		GTToolType.HOE, GTToolType.KNIFE).build());

	GTMaterials.Flint.getProperty(PropertyKey.TOOL).removeTypes(tools);
	GTMaterials.Iron.getProperty(PropertyKey.TOOL).removeTypes(tools);
	GTMaterials.Netherite.getProperty(PropertyKey.TOOL).removeTypes(tools);
	
	GTMaterials.Bauxite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Bastnasite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Cassiterite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Chalcocite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Chalcopyrite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Chromite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Cinnabar.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Cobaltite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Lapis.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Lepidolite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Malachite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Olivine.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Pentlandite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Powellite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Pyrope.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Realgar.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Sphalerite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.Spodumene.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
	GTMaterials.VanadiumMagnetite.addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION);
});
GTCEuStartupEvents.materialModification(e => {
    GTMaterials.BismuthBronze.setMaterialARGB(0x84c1a4)
    GTMaterials.Invar.setMaterialARGB(0x86a88f)
    GTMaterials.Nickel.setMaterialARGB(0xdecfa9)
    GTMaterials.Platinum.setMaterialARGB(0xcfccc0)
    GTMaterials.Rhodium.setMaterialARGB(0xd8bdC9)
    GTMaterials.Sodium.setMaterialARGB(0xffffaa)
    GTMaterials.Steel.setMaterialARGB(0x838b9c)
    GTMaterials.SteelMagnetic.setMaterialARGB(0x838b9c)
	
    GTMaterials.BismuthBronze.setMaterialSecondaryARGB(0x2e3533)
    GTMaterials.Naquadria.setMaterialSecondaryARGB(0x26323b)
    GTMaterials.Rhodium.setMaterialSecondaryARGB(0xb58a9d)
    GTMaterials.Sodium.setMaterialSecondaryARGB(0xaaaa55)

	GTMaterials.Bauxite
	.setComponents('1x aluminium', '2x oxygen', '1x hydrogen')
	GTMaterials.Bastnasite.setComponents('1x rare_earth', '1x carbon', '1x fluorine', '3x oxygen')
	GTMaterials.Lapis.setComponents('7x sodium', '1x calcium', '6x aluminium', '6x silicon', '28x oxygen', '4x sulfur', '1x water')
	GTMaterials.Lepidolite.setComponents('1x potassium', '1x lithium', '3x aluminium', '4x silicon', '1x rubidium', '12x oxygen', '2x fluorine', '2x hydrogen')
	GTMaterials.Realgar.setComponents('1x arsenic', '1x sulfur')

	GTMaterials.Bastnasite.setFormula('?CFO3')
	GTMaterials.Lapis.setFormula('Na7Ca(Al6Si6O24)(SO4)(H2O)')
	GTMaterials.Lepidolite.setFormula('K(Li,Al)3(Al,Si,Rb)4O10(F,OH)2')
	GTMaterials.Scheelite.setFormula('CaWO4')
	GTMaterials.Tungstate.setFormula('Li2WO4')
	GTMaterials.VanadiumMagnetite.setFormula('Fe3O4V')
})