// priority: 0

const registerCreateConnectedRecipes = (event) => {

	global.CREATE_CONNECTED_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	// Remove Fluid Vessel Crafting
	event.remove({ id: 'create_connected:crafting/kinetics/fluid_vessel' })

	// Centrifugal Clutch
	event.shapeless('create_connected:centrifugal_clutch', [
		'create:andesite_casing',
		'#forge:plates/wrought_iron',
		'create:speedometer',
		'#tfg:shafts',
	]).id('create_connected:crafting/kinetics/centrifugal_clutch')

	// Freewheel Clutch'
	event.shapeless('create_connected:freewheel_clutch', [
		'create:andesite_casing',
		'#forge:plates/wrought_iron',
		'#tfg:shafts',
		'#tfg:small_cogwheels',
	]).id('create_connected:crafting/kinetics/freewheel_clutch')

	// Overstress Clutch
	event.shapeless('create_connected:overstress_clutch', [
		'create:andesite_casing',
		'#forge:plates/wrought_iron',
		'#tfg:shafts',
		'create:electron_tube',
	]).id('create_connected:crafting/kinetics/overstress_clutch')

	// Item Silo
	event.shaped('create_connected:item_silo', [
		' C ',
		'BAD',
		' C '
	], {
		A: '#forge:chests/wooden',
		B: '#forge:sheets/wrought_iron',
		C: '#forge:screws/wrought_iron',
		D: '#forge:tools/screwdrivers'
	}).id('create_connected:crafting/kinetics/item_silo')

	event.recipes.gtceu.assembler('tfg:create_connected/item_silo')
		.itemInputs('3x #forge:chests/wooden', '#forge:sheets/wrought_iron', '2x #forge:screws/steel')
		.circuit(10)
		.itemOutputs('create_connected:item_silo')
		.duration(200)
		.EUt(20)

	// Sequenced Pulse Generator
	event.shaped('create_connected:sequenced_pulse_generator', [
		'DA ',
		'DCD',
		'EEE'
	], {
		A: 'create:electron_tube',
		C: '#forge:plates/bronze',
		D: 'minecraft:redstone_torch',
		E: '#forge:stone'
	}).id('create_connected:crafting/kinetics/sequenced_pulse_generator')

	event.shaped('create_connected:cherry_window_pane', [
		'ABA',
		' A '
	], {
		A: 'afc:wood/planks/fig',
		B: 'minecraft:glass'
	}).id('create_connected:shaped/cherry_window_pane')

	event.shaped('create_connected:bamboo_window_pane', [
		' A ',
		'ABA'
	], {
		A: 'minecraft:bamboo_planks',
		B: 'minecraft:glass'
	}).id('create_connected:shaped/bamboo_window_pane')
}