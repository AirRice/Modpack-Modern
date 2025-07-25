// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerMinecraftRecipes = (event) => {

	removeMinecraftRecipes(event)
	registerMinecraftDyeRecipes(event)

	//#region Выход: Земля

	event.recipes.gtceu.macerator('dirt_from_bio_chaff')
		.itemInputs('gtceu:bio_chaff')
		.itemOutputs('tfc:dirt/loam')
		.duration(300)
		.EUt(4)

	//#endregion

	//#region Выход: Стекло

	event.recipes.gtceu.arc_furnace('glass_from_sand')
		.itemInputs('#forge:sand')
		.itemOutputs('2x minecraft:glass')
		.duration(20)
		.EUt(30)

	//#endregion

	//#region Добавление

	for (let i = 0; i < global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length; i++) {
		let element = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i];

		// Создание ржавчины
		if (i < global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2 - 1) {

			let element2 = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i + 1]

			event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_block_${element.name}`)
				.itemInputs(element.block)
				.inputFluids(Fluid.of('minecraft:water', 150))
				.circuit(1)
				.itemOutputs(element2.block)
				.duration(1000)
				.EUt(4)

			event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_cutted_${element.name}`)
				.itemInputs(element.cutted)
				.inputFluids(Fluid.of('minecraft:water', 150))
				.circuit(1)
				.itemOutputs(element2.cutted)
				.duration(1000)
				.EUt(4)

			event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_stairs_${element.name}`)
				.itemInputs(element.stairs)
				.inputFluids(Fluid.of('minecraft:water', 150))
				.circuit(1)
				.itemOutputs(element2.stairs)
				.duration(1000)
				.EUt(4)

			event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_slabs_${element.name}`)
				.itemInputs(element.slabs)
				.inputFluids(Fluid.of('minecraft:water', 150))
				.circuit(1)
				.itemOutputs(element2.slabs)
				.duration(1000)
				.EUt(4)
		} else if (i > global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2 - 1) {
			let element2 = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i - global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2]

			event.recipes.gtceu.assembler(`tfg:minecraft/waxing_block_${element.name}`)
				.itemInputs(element2.block, '#forge:wax')
				.circuit(1)
				.itemOutputs(element.block)
				.duration(50)
				.EUt(4)

			event.recipes.gtceu.assembler(`tfg:minecraft/waxing_cutted_${element.name}`)
				.itemInputs(element2.cutted, '#forge:wax')
				.circuit(1)
				.itemOutputs(element.cutted)
				.duration(50)
				.EUt(4)

			event.recipes.gtceu.assembler(`tfg:minecraft/waxing_stairs_${element.name}`)
				.itemInputs(element2.stairs, '#forge:wax')
				.circuit(1)
				.itemOutputs(element.stairs)
				.duration(50)
				.EUt(4)

			event.recipes.gtceu.assembler(`tfg:minecraft/waxing_slabs_${element.name}`)
				.itemInputs(element2.slabs, '#forge:wax')
				.circuit(1)
				.itemOutputs(element.slabs)
				.duration(50)
				.EUt(4)
		}

		// Обрезанный блок
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless('4x ' + element.cutted, [element.block, '#tfc:chisels'])
		).id(`tfg:shapeless/cutted_${element.name}`)
	}

	//#endregion

	//#endregion

	//#region Выход: Кремний

	event.shapeless('minecraft:flint', [
		'#tfc:rock/gravel',
		'#forge:tools/mortars'
	]).id('gtceu:shapeless/gravel_to_flint')

	event.recipes.gtceu.sifter('gravel_sifting')
		.itemInputs('#tfc:rock/gravel')
		.itemOutputs('minecraft:flint')
		.chancedOutput('minecraft:flint', 9000, 0)
		.chancedOutput('minecraft:flint', 8000, 0)
		.chancedOutput('minecraft:flint', 6000, 0)
		.chancedOutput('minecraft:flint', 3300, 0)
		.chancedOutput('minecraft:flint', 2500, 0)
		.duration(100)
		.EUt(16)

	//#endregion

	//#region Выход: Шаблон баннера

	event.shapeless('minecraft:flower_banner_pattern', [
		'minecraft:paper',
		'#forge:dyes/white'
	]).id('minecraft:flower_banner_pattern')

	//#endregion

	//#region Выход: Бумага

	event.recipes.gtceu.chemical_bath('paper_from_papyrus_distilled')
		.itemInputs('tfc:papyrus')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('minecraft:paper')
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.chemical_bath('paper_from_papyrus')
		.itemInputs('tfc:papyrus')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('minecraft:paper')
		.duration(100)
		.EUt(7)

	//#endregion

	//#region Выход: Сахар

	event.recipes.gtceu.centrifuge('sugar_from_sugarcane')
		.itemInputs('tfc:food/sugarcane')
		.inputFluids(Fluid.of('minecraft:water', 600))
		.itemOutputs('minecraft:sugar', 'gtceu:plant_ball')
		.duration(800)
		.EUt(6)

	event.recipes.gtceu.centrifuge('sugar_from_honey')
		.itemInputs('firmalife:raw_honey')
		.itemOutputs('minecraft:sugar')
		.duration(400)
		.EUt(6)

	//#endregion

	//#region Выход: Блок сена

	event.recipes.gtceu.packer('hay_block')
		.itemInputs('9x tfc:straw')
		.itemOutputs('minecraft:hay_block')
		.duration(200)
		.EUt(2)

	//#endregion

	//#region Выход: Светильник Джека

	event.recipes.gtceu.canner('jack_o_lantern')
		.itemInputs('tfc:pumpkin')
		.itemOutputs('tfc:jack_o_lantern')
		.duration(100)
		.EUt(4)

	//#endregion

	//#region Выход: Светящийся арбуз

	event.shaped('minecraft:glistering_melon_slice', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: '#forge:nuggets/gold',
		B: 'tfc:food/melon_slice'
	}).id('minecraft:glistering_melon_slice')

	event.recipes.gtceu.chemical_reactor('glistening_melon_slice')
		.itemInputs('tfc:food/melon_slice', '6x #forge:nuggets/gold')
		.itemOutputs('minecraft:glistering_melon_slice')
		.duration(50)
		.EUt(30)

	event.recipes.gtceu.large_chemical_reactor('glistening_melon_slice')
		.itemInputs('tfc:food/melon_slice', '6x #forge:nuggets/gold')
		.itemOutputs('minecraft:glistering_melon_slice')
		.duration(50)
		.EUt(30)

	//#endregion

	//#region Выход: Сухая губка

	event.recipes.tfc.heating('minecraft:wet_sponge', 790)
		.resultItem('minecraft:sponge')
		.id('tfg:minecraft/heating/sponge')

	event.recipes.gtceu.chemical_reactor('minecraft:gtceu/chemical_reactor/sponge')
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.SodiumBisulfate, 1))
		.inputFluids(Fluid.of('gtceu:polyethylene', 144), Fluid.of('minecraft:water', 250))
		.itemOutputs('2x minecraft:sponge')
		.outputFluids(Fluid.of('gtceu:sodium_persulfate', 35))
		.duration(80)
		.EUt(GTValues.VA[GTValues.LV])


	//#endregion

	//#region Выход: Тонированное стекло

	event.recipes.gtceu.alloy_smelter('tfg:minecraft/tinted_glass')
		.itemInputs('minecraft:glass', 'tfc:powder/amethyst')
		.itemOutputs('minecraft:tinted_glass')
		.duration(260)
		.EUt(16)

	//#endregion

	//#region Выход: Пустая карта

	event.recipes.gtceu.assembler('map')
		.itemInputs('8x minecraft:paper', 'firmaciv:firmaciv_compass')
		.itemOutputs('minecraft:map')
		.duration(100)
		.EUt(4)

	//#endregion

	//#region Выход: Книга

	event.shapeless('minecraft:book', [
		'#forge:paper', '#forge:paper', '#forge:paper', '#forge:leather', 'tfc:glue'
	]).id('minecraft:book_from_glue')

	event.shapeless('minecraft:book', [
		'#forge:paper', '#forge:paper', '#forge:paper', '#forge:leather', 'gtceu:sticky_resin'
	]).id('minecraft:book_from_sticky_resin')

	event.recipes.gtceu.assembler('tfg:assembler/book_from_leather')
		.itemInputs('3x #forge:paper', '#forge:leather')
		.itemOutputs('minecraft:book')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.EUt(7).duration(30)

	event.replaceInput({ id: 'minecraft:writable_book' }, 'minecraft:inc_sac', '#forge:dyes/black')

	//#endregion

	//#region

	event.recipes.gtceu.assembler('tfg:assembler/name_tag')
		.itemInputs('5x #forge:string', '#forge:paper')
		.itemOutputs('minecraft:name_tag')
		.EUt(7).duration(100)

	//#endregion

	//#region Выход: Золотое яблоко

	event.recipes.gtceu.chemical_reactor('golden_apple')
		.itemInputs('tfc:food/green_apple', '8x #forge:ingots/gold')
		.itemOutputs('minecraft:golden_apple')
		.duration(50)
		.EUt(30)

	event.recipes.gtceu.large_chemical_reactor('golden_apple')
		.itemInputs('tfc:food/green_apple', '8x #forge:ingots/gold')
		.itemOutputs('minecraft:golden_apple')
		.duration(50)
		.EUt(30)

	event.recipes.gtceu.chemical_reactor('golden_apple_1')
		.itemInputs('tfc:food/red_apple', '8x #forge:ingots/gold')
		.itemOutputs('minecraft:golden_apple')
		.duration(50)
		.EUt(30)

	event.recipes.gtceu.large_chemical_reactor('golden_apple_1')
		.itemInputs('tfc:food/red_apple', '8x #forge:ingots/gold')
		.itemOutputs('minecraft:golden_apple')
		.duration(50)
		.EUt(30)

	//#endregion

	//#region Выход: Компаратор

	// Компаратор
	event.shaped('minecraft:comparator', [
		' A ',
		'ABA',
		'CCC'
	], {
		A: 'minecraft:redstone_torch',
		B: '#forge:gems/certus_quartz',
		C: '#tfc:rock/smooth'
	}).id('tfg:shaped/comparator_certus');

	event.shaped('minecraft:comparator', [
		' A ',
		'ABA',
		'CCC'
	], {
		A: 'minecraft:redstone_torch',
		B: '#forge:gems/quartzite',
		C: '#tfc:rock/smooth'
	}).id('tfg:shaped/comparator_quartzite');

	event.shaped('minecraft:comparator', [
		' A ',
		'ABA',
		'CCC'
	], {
		A: 'minecraft:redstone_torch',
		B: '#forge:gems/nether_quartz',
		C: '#tfc:rock/smooth'
	}).id('tfg:shaped/comparator_nether_quartz');

	event.replaceInput({ id: 'gtceu:shaped/redstone_lamp' }, 'minecraft:glass_pane', '#forge:glass_panes')
	event.recipes.gtceu.assembler('redstone_lamp')
		.itemInputs('1x #forge:glass', '1x minecraft:glowstone', '1x #forge:rods/red_alloy')
		.itemOutputs('minecraft:redstone_lamp')
		.duration(50)
		.EUt(7)

	//#endregion

	//#region Выход: Рамка

	event.recipes.gtceu.assembler('item_frame')
		.itemInputs('8x #tfc:lumber', '#forge:leather')
		.itemOutputs('8x minecraft:item_frame')
		.duration(100)
		.EUt(4)

	//#endregion

	//#region Выход: Свето-рамка

	event.shapeless('minecraft:glow_item_frame', [
		'minecraft:item_frame',
		'#forge:dusts/glowstone'
	]).id('minecraft:glow_item_frame')

	event.recipes.gtceu.assembler('tfg/glow_item_frame')
		.itemInputs('2x minecraft:item_frame', '#forge:dusts/glowstone')
		.itemOutputs('2x minecraft:glow_item_frame')
		.duration(100)
		.EUt(4)

	//#endregion

	//#region Выход: Картина

	event.recipes.gtceu.assembler('painting')
		.itemInputs('#tfc:high_quality_cloth', '8x #forge:rods/wood')
		.itemOutputs('2x minecraft:painting')
		.circuit(1)
		.duration(100)
		.EUt(4)

	//#endregion

	//#region Выход: Факел

	//#region В Верстаке

	// Из серы
	event.shaped('2x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'gtceu:sulfur_dust',
		B: '#tfc:can_be_lit_on_torch'
	}).id('gtceu:shaped/torch_sulfur')

	// Из фосфора
	event.shaped('6x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'gtceu:phosphorus_dust',
		B: '#tfc:can_be_lit_on_torch'
	}).id('gtceu:shaped/torch_phosphorus')

	// Из пыли кокса
	event.shaped('8x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'gtceu:coke_dust',
		B: '#tfc:can_be_lit_on_torch'
	}).id('gtceu:shaped/torch_coke_dust')

	// Из гема кокса
	event.shaped('8x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'gtceu:coke_gem',
		B: '#tfc:can_be_lit_on_torch'
	}).id('gtceu:shaped/torch_coke')

	// Из пыли угля
	event.shaped('4x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'gtceu:coal_dust',
		B: '#tfc:can_be_lit_on_torch'
	}).id('gtceu:shaped/torch_coal_dust')

	// Из гема угля
	event.shaped('4x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'minecraft:coal',
		B: '#tfc:can_be_lit_on_torch'
	}).id('tfg:crafting/torch_coal')

	// Из пыли древесного угля
	event.shaped('4x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'gtceu:charcoal_dust',
		B: '#tfc:can_be_lit_on_torch'
	}).id('gtceu:shaped/torch_charcoal_dust')

	// Из гема древесного угля
	event.shaped('4x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'minecraft:charcoal',
		B: '#tfc:can_be_lit_on_torch'
	}).id('tfg:crafting/torch_charcoal')

	// Из резины
	event.shaped('3x tfc:dead_torch', [
		'A',
		'B'
	], {
		A: 'gtceu:sticky_resin',
		B: '#tfc:can_be_lit_on_torch'
	}).id('gtceu:shaped/sticky_resin_torch')

	//#endregion

	//#region В сборщике

	// Из серы
	event.recipes.gtceu.assembler('torch_sulfur')
		.itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:sulfur_dust')
		.itemOutputs('2x tfc:dead_torch')
		.duration(100)
		.EUt(1)

	// Из фосфора
	event.recipes.gtceu.assembler('torch_phosphorus')
		.itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:phosphorus_dust')
		.itemOutputs('6x tfc:dead_torch')
		.duration(100)
		.EUt(1)

	// Из гема кокса
	event.recipes.gtceu.assembler('torch_coke_gem')
		.itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:coke_gem')
		.itemOutputs('8x tfc:dead_torch')
		.duration(100)
		.EUt(1)

	// Из пыли кокса
	event.recipes.gtceu.assembler('torch_coke_dust')
		.itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:coke_dust')
		.itemOutputs('8x tfc:dead_torch')
		.duration(100)
		.EUt(1)

	// Из гема ванильного угля
	event.recipes.gtceu.assembler('torch_coal')
		.itemInputs('#tfc:can_be_lit_on_torch', 'minecraft:coal')
		.itemOutputs('4x tfc:dead_torch')
		.duration(100)
		.EUt(1)

	// Из пыли ванильного угля
	event.recipes.gtceu.assembler('torch_coal_dust')
		.itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:coal_dust')
		.itemOutputs('4x tfc:dead_torch')
		.duration(100)
		.EUt(1)

	// Из пыли древесного угля
	event.recipes.gtceu.assembler('torch_charcoal_dust')
		.itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:charcoal_dust')
		.itemOutputs('4x tfc:dead_torch')
		.duration(100)
		.EUt(1)


	//#endregion

	// Мертвый факел в обычный
	event.smelting('tfc:torch', 'tfc:dead_torch')
		.id('tfg:smelting/dead_torch_to_torch')

	//#endregion

	//#region Выход: Ведро

	event.recipes.tfc.welding('minecraft:bucket', 'tfc:metal/bucket/red_steel', 'tfc:metal/bucket/blue_steel', 6)
		.id('tfg:anvil/vanilla_bucket')

	event.recipes.gtceu.assembler('tfg:vanilla/bucket')
		.itemInputs('#forge:plates/red_steel', '#forge:plates/blue_steel')
		.circuit(6)
		.itemOutputs('minecraft:bucket')
		.duration(100)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:vanilla/bucket2')
		.itemInputs('2x #forge:plates/stainless_steel')
		.circuit(7)
		.itemOutputs('minecraft:bucket')
		.duration(100)
		.EUt(16)

	//#endregion

	//#region Выход: Тигель

	event.shaped('minecraft:cauldron', [
		'A A',
		'ABA',
		'AAA'
	], {
		A: '#forge:plates/cast_iron',
		B: '#tfc:hammers'
	}).id('gtceu:shaped/cauldron')

	event.recipes.gtceu.assembler('cauldron')
		.itemInputs('7x #forge:plates/cast_iron')
		.circuit(10)
		.itemOutputs('minecraft:cauldron')
		.duration(700)
		.EUt(4)

	//#endregion

	//#region Выход: Воронка

	event.shaped('minecraft:hopper', [
		'A A',
		'ABA',
		'DAE'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:chests/wooden',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers',
	}).id('gtceu:shaped/hopper')

	event.recipes.gtceu.assembler('hopper_wrought_iron')
		.itemInputs('#forge:chests', '5x #forge:plates/wrought_iron')
		.itemOutputs('minecraft:hopper')
		.circuit(8)
		.duration(700)
		.EUt(2)

	//#endregion

	//#region Выход: Поршень (Piston)

	event.recipes.gtceu.assembler('piston')
		.itemInputs(ChemicalHelper.get(TagPrefix.rod, GTMaterials.WroughtIron, 1),ChemicalHelper.get(TagPrefix.gearSmall, GTMaterials.Brass, 1) , '3x #tfc:lumber', '4x #forge:cobblestone')
		.itemOutputs('2x minecraft:piston')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion


	//#region Выход: Шерсть

	event.recipes.gtceu.assembler('wool_from_string')
		.itemInputs('8x #forge:string')
		.circuit(4)
		.itemOutputs('minecraft:white_wool')
		.duration(100)
		.EUt(4)


	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.remove({ id: `minecraft:dye_${dye}_wool` })
	})

	//#endregion

	//#region Выход: Лук

	event.recipes.gtceu.assembler('bow')
		.itemInputs('3x #forge:string', '3x #forge:rods/wooden')
		.itemOutputs('minecraft:bow')
		.duration(100)
		.EUt(4)

	//#endregion

	//#region Выход: Наблюдатель

	event.recipes.gtceu.assembler('observer_certus_quartz')
		.itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/certus_quartz')
		.itemOutputs('minecraft:observer')
		.duration(100)
		.EUt(30)

	event.recipes.gtceu.assembler('observer_nether_quartz')
		.itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/nether_quartz')
		.itemOutputs('minecraft:observer')
		.duration(100)
		.EUt(30)

	event.recipes.gtceu.assembler('observer_quartzite')
		.itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/quartzite')
		.itemOutputs('minecraft:observer')
		.duration(100)
		.EUt(30)

	//#endregion

	//#region Выход: Раздатчик

	event.recipes.gtceu.assembler('dispenser')
		.itemInputs('7x #forge:cobblestone', 'minecraft:redstone', 'minecraft:bow')
		.circuit(1)
		.itemOutputs('minecraft:dispenser')
		.duration(100)
		.EUt(30)

	event.shaped('minecraft:dispenser', [
		'ADA',
		'ABA',
		'ACA'
	], {
		A: '#forge:stone',
		B: 'minecraft:bow',
		C: 'minecraft:redstone',
		D: '#forge:small_gears/brass'
	}).id('gtceu:shaped/dispenser')

	//#endregion

	//#region Выход: Выбрасыватель

	event.recipes.gtceu.assembler('dropper')
		.itemInputs('7x #forge:cobblestone', '2x minecraft:redstone')
		.circuit(2)
		.itemOutputs('minecraft:dropper')
		.duration(100)
		.EUt(30)

	event.shaped('minecraft:dropper', [
		'AAA',
		'ADA',
		'ACA'
	], {
		A: '#forge:stone',
		C: 'minecraft:redstone',
		D: '#forge:small_gears/brass'
	}).id('gtceu:shaped/dropper')

	//#endregion

	//#region Выход: Рельсы

	event.recipes.gtceu.assembler('rail')
		.itemInputs('6x #forge:rods/wrought_iron', '#forge:rods/wooden')
		.circuit(1)
		.itemOutputs('32x minecraft:rail')
		.duration(100)
		.EUt(30)

	//#endregion

	//#region Выход: Заряженные рельсы

	event.recipes.gtceu.assembler('powered_rail')
		.itemInputs('6x #forge:rods/gold', '2x #forge:rods/wooden', '#forge:dusts/redstone')
		.circuit(1)
		.itemOutputs('16x minecraft:powered_rail')
		.duration(100)
		.EUt(30)

	//#endregion

	//#region Выход: Активаторные рельсы

	event.recipes.gtceu.assembler('activator_rail')
		.itemInputs('6x #forge:rods/wrought_iron', '#forge:rods/wooden', 'minecraft:redstone_torch')
		.circuit(1)
		.itemOutputs('4x minecraft:activator_rail')
		.duration(100)
		.EUt(30)

	//#endregion

	//#region Выход: Нажимные рельсы

	event.recipes.gtceu.assembler('detector_rail')
		.itemInputs('6x #forge:rods/wrought_iron', '#forge:rods/wooden', '#minecraft:stone_pressure_plates')
		.circuit(1)
		.itemOutputs('4x minecraft:detector_rail')
		.duration(100)
		.EUt(30)

	//#endregion

	//#region Выход: Веревка

	event.shaped('minecraft:lead', [
		' AA',
		' BA',
		'A  '
	], {
		A: '#forge:string',
		B: '#forge:rings'
	}).id('minecraft:lead')

	event.shaped('minecraft:lead', [
		' AA',
		' BA',
		'A  '
	], {
		A: 'tfc:jute_fiber',
		B: '#forge:rings'
	}).id('tfc:crafting/lead')

	//#endregion

	//#region Выход: Кирпич

	event.shaped('4x minecraft:bricks', [
		'BAB',
		'ABA',
		'BAB'
	], {
		A: 'tfc:mortar',
		B: 'minecraft:brick'
	}).id('tfc:crafting/bricks')

	event.recipes.gtceu.assembler('minecraft:bricks')
		.itemInputs('5x minecraft:brick')
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.itemOutputs(`4x minecraft:bricks`)
		.duration(50)
		.EUt(7)

	//#endregion

	//#region Выход: Элитра

	// Ну и херь я придумал
	event.recipes.gtceu.assembler('tfg:minecraft/elytra')
		.itemInputs('16x tfg:polycaprolactam_fabric', '16x #forge:foils/aluminium', '8x tfg:phantom_silk', '4x #forge:rings/aluminium', '2x #forge:rods/long/vanadium_steel', '2x #forge:small_springs/aluminium', '1x #forge:small_gears/aluminium')
		.circuit(4)
		.itemOutputs(Item.of('minecraft:elytra', "{Damage:0}"))
		.duration(1600)
		.EUt(420)

	event.recipes.gtceu.assembler('tfg:minecraft/elytra2')
		.itemInputs('16x tfg:polycaprolactam_fabric', '16x #forge:foils/aluminium', '8x #forge:plates/ender_eye', '4x #forge:rings/aluminium', '2x #forge:rods/long/vanadium_steel', '2x #forge:small_springs/aluminium', '1x #forge:small_gears/aluminium')
		.circuit(4)
		.itemOutputs(Item.of('minecraft:elytra', "{Damage:0}"))
		.duration(1600)
		.EUt(420)

	event.recipes.gtceu.assembler('tfg:minecraft/elytra_repairing')
		.itemInputs('6x tfg:polycaprolactam_fabric', Item.of('minecraft:elytra', '{Damage:2045}').strongNBT())
		.circuit(4)
		.itemOutputs(Item.of('minecraft:elytra', "{Damage:0}"))
		.duration(1600)
		.EUt(120)

	event.recipes.gtceu.arc_furnace('tfg:minecraft/arc_furnace/recycling/elytra')
		.itemInputs(Item.of('minecraft:elytra', '{Damage:0}').strongNBT())
		.itemOutputs('4x gtceu:aluminium_ingot', '4x gtceu:tiny_ash_dust')
		.duration(224)
		.EUt(GTValues.VA[GTValues.LV])
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.recipes.gtceu.macerator('tfg:minecraft/macerator/recycling/elytra')
		.itemInputs(Item.of('minecraft:elytra', '{Damage:0}').strongNBT())
		.itemOutputs('4x gtceu:aluminium_dust', '4x gtceu:polycaprolactam_dust')
		.duration(224)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	//#endregion

	//#region Glowstone

	event.recipes.gtceu.mixer('gtceu:lv_glowstone')
		.itemInputs('gtceu:gold_dust', 'minecraft:redstone', 'gtceu:sulfur_dust')
		.itemOutputs('2x minecraft:glowstone_dust')
		.circuit(32)
		.duration(1200)
		.EUt(30)

	//#endregion

	//#region Nether Brick

	event.smelting('minecraft:nether_brick', 'minecraft:netherrack')

	//#endregion

	//#region Netherite leggings (for the lavaproof diving set)

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('minecraft:netherite_leggings').copyForgingBonus(), [
			'ABA',
			'CDC'
		], {
			A: '#forge:screws/blue_steel',
			B: 'tfc:metal/greaves/blue_steel',
			C: '#forge:plates/blue_steel',
			D: 'beneath:cursed_hide'
		}, 0, 1).id('tfg:minecraft/shaped/netherite_leggings')

	//#endregion

	//#region Scaffoldings
	event.remove({ output: 'minecraft:scaffolding' })

	event.shaped('32x minecraft:scaffolding', [
		'ABA',
		'A A',
		'A A'
	], {
		A: 'gtceu:long_wood_rod',
		B: 'tfg:scaffolding_frame'
	}).id('tfg:minecraft/shaped/scaffolding')

	event.recipes.gtceu.assembler('tfg:minecraft/assembler/scaffolding')
		.itemInputs('6x gtceu:long_wood_rod', 'tfg:scaffolding_frame')
		.itemOutputs('32x minecraft:scaffolding')
		.duration(100)
		.EUt(4)
	//#endregion

	// #region HUH???

	event.shapeless('minecraft:redstone_torch', ['#forge:rods/wooden', 'minecraft:redstone'])
		.id('tfg:shapeless/redstone_torch')

	event.shapeless('minecraft:lever', ['#forge:rods/wooden', 'minecraft:redstone', '#forge:cobblestone'])
		.id('tfg:shapeless/lever')

	generateCutterRecipe(event, '#forge:double_plates/wrought_iron', 'minecraft:iron_door', 400, GTValues.VA[GTValues.LV], 'iron_door')

	event.shaped('4x minecraft:ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/wooden'
	}).id('gtceu:shaped/ladder')

	// #endregion

	// #region Calcite

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('1x minecraft:calcite', ['#forge:poor_raw_materials/calcite', '#tfc:chisels'])
	).id('tfg:shapeless/calcite_from_poor_raw')

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('2x minecraft:calcite', ['#forge:raw_materials/calcite', '#tfc:chisels'])
	).id('tfg:shapeless/calcite_from_raw')

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x minecraft:calcite', ['#forge:rich_raw_materials/calcite', '#tfc:chisels'])
	).id('tfg:shapeless/calcite_from_rich_raw')

	// #endregion

	//#region Кожа из кожаных предметов
	event.recipes.gtceu.macerator('tfg:leather_from_saddle')
		.itemInputs('minecraft:saddle')
		.itemOutputs('minecraft:leather')
		.EUt(7).duration(80)

	event.recipes.gtceu.macerator('tfg:leather_from_horse_armor')
		.itemInputs('minecraft:leather_horse_armor')
		.itemOutputs('minecraft:leather')
		.EUt(7).duration(80)
	//#endregion

	//#region Campfire
	event.shaped('minecraft:campfire', [
		' A ',
		'ABA',
		'CDC'
	], {
		A: 'minecraft:blaze_rod',
		B: 'minecraft:blaze_powder',
		C: '#forge:ingots/blue_steel',
		D: '#forge:storage_blocks/charcoal',
	}).id('tfg:campfire_charcoal')

	event.shaped('minecraft:campfire', [
		' A ',
		'ABA',
		'CDC'
	], {
		A: 'minecraft:blaze_rod',
		B: 'minecraft:blaze_powder',
		C: '#forge:ingots/blue_steel',
		D: '#forge:storage_blocks/coal',
	}).id('tfg:campfire_coal')
	//#endregion

	//#region Smithing Table
	event.shaped('minecraft:smithing_table', [
		'C  ',
		'BB ',
		'AA '
	], {
		A: '#minecraft:planks',
		B: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Lead, 1),
		C: '#forge:tools/hammers'
	}).id('minecraft:shapeless/smithing_table')

	event.recipes.gtceu.assembler('minecraft:assembler/smithing_table')
		.itemInputs('2x #minecraft:planks', ChemicalHelper.get(TagPrefix.plate, GTMaterials.Lead, 2))
		.circuit(4)
		.itemOutputs('minecraft:smithing_table')
		.duration(60)
		.EUt(GTValues.VA[GTValues.ULV])
	//#endregion

	// Slime
	event.smelting('tfc:glue', 'minecraft:slime_ball')
		.id('tfg:smelting/slime_to_glue')

	// Clay
	event.shaped('minecraft:clay', [
		'AA',
		'AA'
	], {
		A: 'minecraft:clay_ball'
	})
	.id('tfg:shaped/clay_balls_to_block')

	event.shapeless('4x minecraft:clay_ball', ['minecraft:clay'])
		.id('tfg:shapeless/clay_block_to_balls')

	// Mushrooms

	event.shapeless('4x minecraft:red_mushroom', ['minecraft:red_mushroom_block', '#forge:tools/knives'])
		.id('tfg:shapeless/cut_red_mushroom_block')

	event.shapeless('4x minecraft:brown_mushroom', ['minecraft:brown_mushroom_block', '#forge:tools/knives'])
		.id('tfg:shapeless/cut_brown_mushroom_block')

	event.recipes.gtceu.chemical_bath('tfg:red_mushroom_to_shroomlight')
		.itemInputs('minecraft:red_mushroom_block')
		.inputFluids(Fluid.of('gtceu:glowstone', 144))
		.itemOutputs('minecraft:shroomlight')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('tfg:brown_mushroom_to_shroomlight')
		.itemInputs('minecraft:brown_mushroom_block')
		.inputFluids(Fluid.of('gtceu:glowstone', 144))
		.itemOutputs('minecraft:shroomlight')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	// Stonecutter

	event.shaped('minecraft:stonecutter',
		[
			' E ',
			'CAC',
			'BDB'
		],
		{
			A: '#forge:plates/wrought_iron',
			B: '#tfc:lumber',
			C: '#forge:plates/brass',
			D: '#forge:small_gears',
			E: '#forge:buzz_saw_heads'
		}).id('tfg:shaped/stonecutter');

	event.stonecutting('minecraft:smooth_quartz', 'minecraft:quartz_block')
}
