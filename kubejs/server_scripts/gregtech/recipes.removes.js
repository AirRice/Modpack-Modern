// priority: 0

function removeGTCEURecipes(event) {

	event.replaceInput({ input: 'gtceu:wood_drum' }, 'gtceu:wood_drum', 'minecraft:glass')
	event.replaceInput({ input: 'minecraft:chest' }, 'minecraft:chest', '#forge:chests/wooden')

	global.GTCEU_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	//#region Выход: Крошечная кучка камня

	event.remove({ id: 'gtceu:macerator/macerate_stone_button' })

	//#endregion

	//#region Выход: Маленькая кучка камня

	event.remove({ id: 'gtceu:macerator/macerate_stone_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_brick_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_brick_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_sandstone_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_sandstone_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_red_sandstone_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_red_sandstone_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_granite' })
	event.remove({ id: 'gtceu:macerator/macerate_diorite' })
	event.remove({ id: 'gtceu:macerator/macerate_cobblestone_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_andesite' })

	//#endregion

	//#region Выход: Кучка камня

	event.remove({ id: 'gtceu:macerator/macerate_stone_sword' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_shovel' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_pressure_plate' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_pickaxe' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_hoe' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_bricks' })
	event.remove({ id: 'gtceu:macerator/macerate_stone_axe' })
	event.remove({ id: 'gtceu:macerator/macerate_mossy_cobblestone' })
	event.remove({ id: 'gtceu:macerator/macerate_cobblestone_wall' })
	event.remove({ id: 'gtceu:macerator/macerate_cobblestone' })
	event.remove({ id: 'gtceu:macerator/gravel_to_flint' })
	event.remove({ id: 'gtceu:macerator/macerate_furnace' })

	//#endregion

	//#region Deepslate

	event.remove({ id: 'gtceu:shaped/deepslate_hammer' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_stair_saw' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_slab_saw' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_wall_saw' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_cobbled_deepslate_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_cobbled_deepslate_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_cobbled_deepslate_into_wall' })
	event.remove({ id: 'gtceu:cutter/cut_cobbled_deepslate_into_slab' })
	event.remove({ id: 'gtceu:cutter/cut_cobbled_deepslate_into_slab_water' })
	event.remove({ id: 'gtceu:cutter/cut_cobbled_deepslate_into_slab_distilled_water' })

	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_polished_hammer' })
	event.remove({ id: 'gtceu:forming_press/form_cobbled_deepslate_slab_into_pillar' })

	event.remove({ id: 'gtceu:shaped/polished_deepslate_stair_saw' })
	event.remove({ id: 'gtceu:shaped/polished_deepslate_slab_saw' })
	event.remove({ id: 'gtceu:shaped/polished_deepslate_wall_saw' })
	event.remove({ id: 'gtceu:shaped/polished_deepslate_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_deepslate_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_deepslate_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_deepslate_into_wall' })
	event.remove({ id: 'gtceu:cutter/cut_polished_deepslate_into_slab' })
	event.remove({ id: 'gtceu:cutter/cut_polished_deepslate_into_slab_water' })
	event.remove({ id: 'gtceu:cutter/cut_polished_deepslate_into_slab_distilled_water' })

	event.remove({ id: 'gtceu:shaped/deepslate_bricks_hammer' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_stair_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_slab_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_wall_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_bricks_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_bricks_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_bricks_into_wall' })
	event.remove({ id: 'gtceu:cutter/cut_deepslate_bricks_into_slab' })
	event.remove({ id: 'gtceu:cutter/cut_deepslate_bricks_into_slab_water' })
	event.remove({ id: 'gtceu:cutter/cut_deepslate_bricks_into_slab_distilled_water' })

	event.remove({ id: 'gtceu:shaped/deepslate_tile_hammer' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_stair_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_slab_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_wall_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_tile_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_tile_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_tile_into_wall' })
	event.remove({ id: 'gtceu:cutter/cut_deepslate_tile_into_slab' })
	event.remove({ id: 'gtceu:cutter/cut_deepslate_tile_into_slab_water' })
	event.remove({ id: 'gtceu:cutter/cut_deepslate_tile_into_slab_distilled_water' })

	event.remove({ id: 'gtceu:macerator/macerate_deepslate' })
	event.remove({ id: 'gtceu:rock_breaker/deepslate' })

	// #endregion

	// #region Blackstone

	event.remove({ id: 'gtceu:shaped/blackstone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/blackstone_slab_saw' })
	event.remove({ id: 'gtceu:shaped/blackstone_wall_saw' })
	event.remove({ id: 'gtceu:shaped/blackstone_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_blackstone_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_blackstone_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_blackstone_into_wall' })
	event.remove({ id: 'gtceu:cutter/cut_blackstone_into_slab' })
	event.remove({ id: 'gtceu:cutter/cut_blackstone_into_slab_water' })
	event.remove({ id: 'gtceu:cutter/cut_blackstone_into_slab_distilled_water' })

	event.remove({ id: 'gtceu:shaped/polished_blackstone_hammer' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_slab_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_wall_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_into_wall' })
	event.remove({ id: 'gtceu:cutter/cut_polished_blackstone_into_slab' })
	event.remove({ id: 'gtceu:cutter/cut_polished_blackstone_into_slab_water' })
	event.remove({ id: 'gtceu:cutter/cut_polished_blackstone_into_slab_distilled_water' })

	event.remove({ id: 'gtceu:shaped/polished_blackstone_polished_hammer' })
	event.remove({ id: 'gtceu:forming_press/form_polished_blackstone_slab_into_pillar' })

	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_hammer' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_stair_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_slab_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_wall_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_brick_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_brick_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_brick_into_wall' })
	event.remove({ id: 'gtceu:cutter/cut_polished_blackstone_brick_into_slab' })
	event.remove({ id: 'gtceu:cutter/cut_polished_blackstone_brick_into_slab_water' })
	event.remove({ id: 'gtceu:cutter/cut_polished_blackstone_brick_into_slab_distilled_water' })

	event.remove({ id: 'gtceu:rock_breaker/blackstone' })

	// #endregion

	// #region basalt

	event.remove({ id: 'gtceu:shaped/basalt_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_basalt_into_polished' })

	// #endregion

	// #region Nether Quartz
	
	event.remove({ id: 'gtceu:shaped/quartz_stair_saw' })
	event.remove({ id: 'gtceu:assembler/assemble_quartz_into_stair' })
	event.remove({ id: 'gtceu:shaped/quartz_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_quartz_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_block_of_quartz_into_quartz_pillar' })
	event.remove({ id: 'gtceu:shaped/smooth_quartz_stair_saw' })
	event.remove({ id: 'gtceu:assembler/assemble_smooth_quartz_into_stair' })
	event.remove({ id: 'gtceu:shaped/smooth_quartz_slab_saw' })

	// #endregion

	// #region Plant Ball

	event.remove({ id: 'gtceu:compressor/plant_ball_from_wheat' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_warped_stem' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_crimson_stem' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_tube_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_sugar_cane' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_potato' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_nether_wart' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_horn_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_fire_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_carrot' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_cactus' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_bubble_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_brain_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_beetroot' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_moss' })

	// #endregion

	// #region Biomass

	event.remove({ id: 'gtceu:brewery/biomass_from_sugar_cane' })
	event.remove({ id: 'gtceu:brewery/biomass_from_potato' })
	event.remove({ id: 'gtceu:brewery/biomass_from_carrot' })
	event.remove({ id: 'gtceu:brewery/biomass_from_cactus' })
	event.remove({ id: 'gtceu:brewery/biomass_from_beetroot' })

	// #endregion

	// #region Fish Oil

	event.remove({ id: 'gtceu:extractor/fish_oil_from_tropical_fish' })
	event.remove({ id: 'gtceu:extractor/fish_oil_from_salmon' })
	event.remove({ id: 'gtceu:extractor/fish_oil_from_pufferfish' })
	event.remove({ id: 'gtceu:extractor/fish_oil_from_cod' })

	// #endregion

	// #region Wrought Iron Nugget

	event.remove({ output: 'gtceu:wrought_iron_nugget', type: 'minecraft:smelting' })

	// #endregion

	// #region Seed Oil

	event.remove({ id: 'gtceu:extractor/seed_oil_from_tag_seeds' })
	event.remove({ id: 'gtceu:extractor/seed_oil_from_pumpkin' })
	event.remove({ id: 'gtceu:extractor/seed_oil_from_melon' })
	event.remove({ id: 'gtceu:extractor/seed_oil_from_beetroot' })

	// #endregion

		//#region Выход: Крошечная кучка дерева

	event.remove({ id: 'gtceu:macerator/macerate_warped_button' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_button' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_button' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_button' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_button' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_button' })
	event.remove({ id: 'gtceu:macerator/macerate_crimson_button' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_button' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_button' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_button' })

	//#endregion

	//#region Выход: Маленькая кучка дерева

	event.remove({ id: 'gtceu:macerator/macerate_wooden_sword' })
	event.remove({ id: 'gtceu:macerator/macerate_wooden_shovel' })
	event.remove({ id: 'gtceu:macerator/macerate_wooden_pickaxe' })
	event.remove({ id: 'gtceu:macerator/macerate_wooden_hoe' })
	event.remove({ id: 'gtceu:macerator/macerate_wooden_axe' })
	event.remove({ id: 'gtceu:macerator/macerate_warped_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_warped_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_iron_sword' })
	event.remove({ id: 'gtceu:macerator/macerate_iron_shovel' })
	event.remove({ id: 'gtceu:macerator/macerate_iron_pickaxe' })
	event.remove({ id: 'gtceu:macerator/macerate_iron_hoe' })
	event.remove({ id: 'gtceu:macerator/macerate_iron_axe' })
	event.remove({ id: 'gtceu:macerator/macerate_golden_sword' })
	event.remove({ id: 'gtceu:macerator/macerate_golden_shovel' })
	event.remove({ id: 'gtceu:macerator/macerate_golden_pickaxe' })
	event.remove({ id: 'gtceu:macerator/macerate_golden_hoe' })
	event.remove({ id: 'gtceu:macerator/macerate_golden_axe' })
	event.remove({ id: 'gtceu:macerator/macerate_diamond_sword' })
	event.remove({ id: 'gtceu:macerator/macerate_diamond_shovel' })
	event.remove({ id: 'gtceu:macerator/macerate_diamond_pickaxe' })
	event.remove({ id: 'gtceu:macerator/macerate_diamond_hoe' })
	event.remove({ id: 'gtceu:macerator/macerate_diamond_axe' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_crimson_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_crimson_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_slab' })

	//#endregion

	//#region Выход: Деревянная пыль

	event.remove({ id: 'gtceu:macerator/macerate_trapped_chest' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_door' })
	event.remove({ id: 'gtceu:macerator/macerate_spruce_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_door' })
	event.remove({ id: 'gtceu:macerator/macerate_oak_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_door' })
	event.remove({ id: 'gtceu:macerator/macerate_mangrove_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_door' })
	event.remove({ id: 'gtceu:macerator/macerate_jungle_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_door' })
	event.remove({ id: 'gtceu:macerator/macerate_dark_oak_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_crafting_table' })
	event.remove({ id: 'gtceu:macerator/macerate_chest' })
	event.remove({ id: 'gtceu:macerator/macerate_chest_minecart' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_door' })
	event.remove({ id: 'gtceu:macerator/macerate_cherry_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_bookshelf' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_door' })
	event.remove({ id: 'gtceu:macerator/macerate_birch_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_door' })
	event.remove({ id: 'gtceu:macerator/macerate_acacia_boat' })
	event.remove({ id: 'gtceu:macerator/macerate_bamboo_raft' })
	event.remove({ id: 'gtceu:macerator/macerate_crimson_door' })
	event.remove({ id: 'gtceu:macerator/macerate_crimson_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_crimson_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_crimson_planks' })
	event.remove({ id: 'gtceu:macerator/macerate_warped_door' })
	event.remove({ id: 'gtceu:macerator/macerate_warped_fence' })
	event.remove({ id: 'gtceu:macerator/macerate_warped_fence_gate' })
	event.remove({ id: 'gtceu:macerator/macerate_warped_planks' })

	//#endregion

	//#region Выход: Бумажная пыль

	event.remove({ id: 'gtceu:shaped/paper_dust' })

	//#endregion


	//#region Выход: Маленькая кучка мяса

	event.remove({ id: 'gtceu:macerator/macerate_steak' })
	event.remove({ id: 'gtceu:macerator/macerate_rabbit' })
	event.remove({ id: 'gtceu:macerator/macerate_pork_chop' })

	//#endregion

	// #region Meat
	
	event.remove({ id: 'gtceu:macerator/macerate_mutton' })
	event.remove({ id: 'gtceu:macerator/macerate_chicken' })

	// #endregion

	//#region Выход: Пшеничная пыль

	event.remove({ id: 'gtceu:shapeless/wheat_to_dust' })
	event.remove({ id: 'gtceu:macerator/macerate_wheat' })
	event.remove({ id: 'gtceu:macerator/macerate_hay_block' })

	//#endregion

		//#region Выход: Слиток кованного железа

	event.remove({ id: 'gtceu:arc_furnace/arc_chest_minecart' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_trapdoor' })
	event.remove({ id: 'gtceu:arc_furnace/arc_damaged_anvil' })
	event.remove({ id: 'gtceu:arc_furnace/arc_chipped_anvil' })
	event.remove({ id: 'gtceu:arc_furnace/arc_anvil' })
	event.remove({ id: 'gtceu:arc_furnace/arc_furnace_minecart' })
	event.remove({ id: 'gtceu:arc_furnace/arc_compass' })

	//#endregion

	//#region Выход: Кованные самородки

	event.remove({ id: 'gtceu:arc_furnace/arc_iron_bars' })

	//#endregion

	//#region Выход: Железная пыль

	event.remove({ id: 'gtceu:macerator/macerate_iron_trapdoor' })
	event.remove({ id: 'gtceu:macerator/macerate_damaged_anvil' })
	event.remove({ id: 'gtceu:macerator/macerate_chipped_anvil' })
	event.remove({ id: 'gtceu:macerator/macerate_anvil' })
	event.remove({ id: 'gtceu:macerator/macerate_furnace_minecart' })
	event.remove({ id: 'gtceu:macerator/macerate_bucket' })
	event.remove({ id: 'gtceu:macerator/macerate_compass' })

	//#endregion

	//#region Выход: Крошечная железная пыль

	event.remove({ id: 'gtceu:macerator/macerate_iron_bars' })

	//#endregion

	//#region Выход: Крошечная пыль золы

	event.remove({ id: 'gtceu:arc_furnace/arc_bookshelf' })

	//#endregion

	//#region Выход: Пыль незерака

	event.remove({ id: 'gtceu:macerator/macerate_nether_brick_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_nether_brick_slab' })

	//#endregion

	//#region Выход: Пыль базальта

	event.remove({ id: 'gtceu:macerator/macerate_basalt' })

	//#endregion

		//#region Выход: Слиток камня

	event.remove({ id: 'gtceu:alloy_smelter/alloy_smelt_stone_to_ingot' })

	//#endregion

	//#region Выход: Бронзовые машины (Плюс их декрафты)

	event.remove({ id: 'gtceu:shaped/bronze_hull' })
	event.remove({ id: 'gtceu:arc_furnace/arc_bronze_machine_casing' })
	event.remove({ id: 'gtceu:macerator/macerate_bronze_machine_casing' })

	event.remove({ id: 'gtceu:shaped/steam_extractor_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_extractor' })
	event.remove({ id: 'gtceu:macerator/macerate_lp_steam_extractor' })

	event.remove({ id: 'gtceu:shaped/steam_macerator_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_macerator' })
	event.remove({ id: 'gtceu:macerator/macerate_lp_steam_macerator' })

	event.remove({ id: 'gtceu:shaped/steam_compressor_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_compressor' })
	event.remove({ id: 'gtceu:macerator/macerate_lp_steam_compressor' })

	event.remove({ id: 'gtceu:shaped/steam_hammer_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_forge_hammer' })
	event.remove({ id: 'gtceu:macerator/macerate_lp_steam_forge_hammer' })

	event.remove({ id: 'gtceu:shaped/steam_furnace_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_furnace' })
	event.remove({ id: 'gtceu:macerator/macerate_lp_steam_furnace' })

	event.remove({ id: 'gtceu:shaped/steam_alloy_smelter_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_alloy_smelter' })
	event.remove({ id: 'gtceu:macerator/macerate_lp_steam_alloy_smelter' })

	event.remove({ id: 'gtceu:shaped/steam_rock_breaker_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_rock_crusher' })
	event.remove({ id: 'gtceu:macerator/macerate_lp_steam_rock_crusher' })

	event.remove({ id: 'gtceu:shaped/steam_miner_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_steam_miner_bronze' })
	event.remove({ id: 'gtceu:macerator/macerate_steam_miner_bronze' })
	
	event.remove({ id: 'gtceu:shaped/steam_miner_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_steam_miner_bronze' })
	event.remove({ id: 'gtceu:macerator/macerate_steam_miner_bronze' })

	
	event.remove({ id: 'gtceu:shaped/steam_miner_steel' })
	event.remove({ id: 'gtceu:arc_furnace/arc_steam_miner_steel' })
	event.remove({ id: 'gtceu:macerator/macerate_steam_miner_steel' })

	// #endregion

	
	//#region Выход: некоторые рецепты пылей

	event.remove({ id: 'gtceu:shapeless/dust_brass' })
	event.remove({ id: 'gtceu:shapeless/glass_dust_flint' })
	event.remove({ id: 'gtceu:shapeless/dust_bronze' })
	event.remove({ id: 'gtceu:shapeless/potin_dust' })

	//#endregion

	// Удаление рецептов связанных с Primitive Blast Furnace
	event.remove({ id: 'gtceu:arc_furnace/arc_primitive_blast_furnace' })
	event.remove({ id: 'gtceu:macerator/macerate_primitive_blast_furnace' })

	// Удаление рецепта беск. воды кавера
	event.remove('gtceu:assembler/cover_infinite_water')

	// Удаление рецептов помпы
	event.remove('gtceu:shaped/pump_deck')
	event.remove('gtceu:shaped/pump_hatch')
	event.remove('gtceu:shaped/primitive_pump')

	// Удаление рецептов связанных с Barrel
	event.remove({ id: 'gtceu:shaped/wooden_barrel' })
	event.remove({ id: 'gtceu:assembler/wood_barrel' })
	event.remove({ id: 'gtceu:arc_furnace/arc_wood_drum' })
	event.remove({ id: 'gtceu:macerator/macerate_wood_drum' })

	// Удаление рецептов связанных с FireBricks
	event.remove({ id: 'gtceu:shaped/casing_primitive_bricks' })
	event.remove({ id: 'gtceu:macerator/macerate_firebricks' })
	event.remove({ id: 'gtceu:extractor/extract_primitive_bricks' })

	// Удаление рецептов связанных с FireBrick
	event.remove({ id: 'gtceu:smelting/fireclay_brick' })
	event.remove({ id: 'gtceu:macerator/macerate_firebrick' })

	// Clay from mud
	event.remove({ id: 'gtceu:compressor/mud_to_clay' })

	// Rubber extraction
	event.remove({ id: 'gtceu:extractor/extract_raw_rubber_dust' })
	event.remove({ id: 'gtceu:extractor/raw_rubber_from_resin' })
	event.remove({ id: 'gtceu:extractor/raw_rubber_from_slime' })

	// Mortar
	event.remove({ id: 'gtceu:shaped/gem_to_dust_coal_chipped_gem' })
	event.remove({ id: 'gtceu:shaped/gem_to_dust_coke_chipped_gem' })
	event.remove({ id: 'gtceu:shaped/sandstone_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/stone_brick_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/purpur_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/red_sandstone_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/nether_bricks_polished_hammer' })
  
	event.remove({ id: 'gtceu:shaped_fluid_container/brick_from_water' })

	// Gears
	event.remove({ id: 'gtceu:extruder/extrude_wood_ingot_to_small_gear' })
	event.remove({ id: 'gtceu:alloy_smelter/alloy_smelt_wood_ingot_to_small_gear' })

	// Misc vanilla stuff
	event.remove({ id: 'gtceu:shaped/observer' })
	event.remove({ id: 'gtceu:shaped/observer_certus' })
	event.remove({ id: 'gtceu:shaped/observer_quartzite' })
	event.remove({ id: 'gtceu:shaped/piston_iron' })
	event.remove({ id: 'gtceu:shaped/comparator' })
	event.remove({ id: 'gtceu:shaped/repeater' })
	event.remove({ id: 'gtceu:shaped/crossbow' })
	event.remove({ id: 'gtceu:shaped/spyglass' })
	event.remove({ id: 'gtceu:shaped/lead' })
	event.remove({ id: 'gtceu:shaped/target' })
	event.remove({ id: 'gtceu:shaped/lectern' })
	event.remove({ id: 'gtceu:shaped/item_frame' })
	event.remove({ id: 'gtceu:shaped/clock' })
	event.remove({ id: 'gtceu:shaped/loom' })
	event.remove({ id: 'gtceu:shaped/scaffolding' })
	event.remove({ id: 'gtceu:shaped/bow' })
	event.remove({ id: 'gtceu:shaped/leather_horse_armor' })
	event.remove({ id: 'gtceu:shaped/bowl' })
	event.remove({ id: 'gtceu:shaped/flower_pot' })
	event.remove({ id: 'gtceu:shaped/jack_o_lantern' })
	event.remove({ id: 'gtceu:shaped/armor_stand' })
	event.remove({ id: 'gtceu:shaped/white_bed' })
	event.remove({ id: 'gtceu:shaped/light_gray_bed' })
	event.remove({ id: 'gtceu:shaped/gray_bed' })
	event.remove({ id: 'gtceu:shaped/black_bed' })
	event.remove({ id: 'gtceu:shaped/brown_bed' })
	event.remove({ id: 'gtceu:shaped/red_bed' })
	event.remove({ id: 'gtceu:shaped/orange_bed' })
	event.remove({ id: 'gtceu:shaped/yellow_bed' })
	event.remove({ id: 'gtceu:shaped/lime_bed' })
	event.remove({ id: 'gtceu:shaped/green_bed' })
	event.remove({ id: 'gtceu:shaped/cyan_bed' })
	event.remove({ id: 'gtceu:shaped/light_blue_bed' })
	event.remove({ id: 'gtceu:shaped/blue_bed' })
	event.remove({ id: 'gtceu:shaped/purple_bed' })
	event.remove({ id: 'gtceu:shaped/magenta_bed' })
	event.remove({ id: 'gtceu:shaped/pink_bed' })
	event.remove({ id: 'gtceu:shaped/flour_to_dough' })
	event.remove({ id: 'gtceu:shaped/grindstone' })
	event.remove({ id: 'gtceu:shaped/treated_trapdoor_iron' })
	event.remove({ id: 'gtceu:shaped/treated_trapdoor_steel' })
	event.remove({ id: 'gtceu:shaped/treated_door' })
	event.remove({ id: 'gtceu:shaped/barrel' })
	event.remove({ id: 'gtceu:shaped/book' })
	event.remove({ id: 'gtceu:shaped/bucket_of_concrete' })
	event.remove({ id: 'gtceu:shaped/smithing_table' })
	event.remove({ id: 'gtceu:shaped/brick_slab_saw' })
	event.remove({ id: 'gtceu:shaped/brick_stair_saw' })
	event.remove({ id: 'gtceu:shaped/brick_wall_saw' })
	event.remove({ id: 'gtceu:shaped/lightning_rod' })
	event.remove({ id: 'gtceu:shaped/painting' })
	event.remove({ id: 'gtceu:shaped/rail' })
	event.remove({ id: 'gtceu:shaped/powered_rail' })
	event.remove({ id: 'gtceu:shaped/detector_rail' })
	event.remove({ id: 'gtceu:shaped/activator_rail' })
	event.remove({ id: 'gtceu:shaped/shield' })
	event.remove({ id: 'gtceu:shaped/pickaxe_iron' })
	event.remove({ id: 'gtceu:shaped/gear_diamond' })
	event.remove({ id: 'gtceu:shaped/buzzsaw_blade_diamond' })

	event.remove({ id: 'gtceu:shapeless/glass_full_dust_flint' })

	event.remove({ id: 'gtceu:shaped_fluid_container/treated_wood_planks' })

	event.remove({ id: 'gtceu:assembler/bell' })
	event.remove({ id: 'gtceu:assembler/armor_stand' })
	event.remove({ id: 'gtceu:assembler/piston_stainless_steel' })
	event.remove({ id: 'gtceu:assembler/treated_trapdoor_iron' })
	event.remove({ id: 'gtceu:assembler/treated_trapdoor_steel' })
	event.remove({ id: 'gtceu:assembler/treated_door' })
	event.remove({ id: 'gtceu:assembler/barrel' })
	event.remove({ id: 'gtceu:assembler/book_from_leather' })
	event.remove({ id: 'gtceu:assembler/name_tag' })
	event.remove({ id: 'gtceu:assembler/smithing_table' })
	event.remove({ id: 'gtceu:assembler/loom' })
	event.remove({ id: 'gtceu:assembler/flower_pot' })
	event.remove({ id: 'gtceu:assembler/piston' })
	event.remove({ id: 'gtceu:assembler/clock' })
	event.remove({ id: 'gtceu:assembler/spyglass' })
	event.remove({ id: 'gtceu:assembler/map' })
	event.remove({ id: 'gtceu:assembler/spyglass' })

	event.remove({ id: 'gtceu:chemical_reactor/ghast_tear_separation' })
	
	event.remove({ id: 'gtceu:assembler/assemble_brick_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_brick_into_wall' })
	event.remove({ id: 'gtceu:compressor/bricks' })
	event.remove({ id: 'gtceu:extractor/bricks_extraction' })
	event.remove({ id: 'gtceu:macerator/macerate_bricks' })
	event.remove({ id: 'gtceu:macerator/macerate_brick_stairs' })
	event.remove({ id: 'gtceu:macerator/macerate_brick_slab' })
	event.remove({ id: 'gtceu:macerator/macerate_brick_wall' })
	event.remove({ id: 'gtceu:macerator/macerate_flower_pot' })

	event.remove({ id: 'gtceu:centrifuge/decomposition_centrifuging__fireclay' })

	event.remove({ id: 'gtceu:smelting/sticky_resin_from_slime' })

	event.remove({ id: 'gtceu:wiremill/string_from_polycaprolactam' })

	event.remove({ id: 'gtceu:chemical_bath/black_steel_cool_down' })
	event.remove({ id: 'gtceu:chemical_bath/black_steel_cool_down_distilled_water' })
	event.remove({ id: 'gtceu:chemical_bath/red_steel_cool_down' })
	event.remove({ id: 'gtceu:chemical_bath/red_steel_cool_down_distilled_water' })
	event.remove({ id: 'gtceu:chemical_bath/blue_steel_cool_down' })
	event.remove({ id: 'gtceu:chemical_bath/blue_steel_cool_down_distilled_water' })
}
