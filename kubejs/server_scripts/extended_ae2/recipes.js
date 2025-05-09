const registerExtendedAE2Recipes = (event) => {

    event.remove({not:[
        { id: 'expatternprovider:epp_part' },
        { id: 'expatternprovider:ei_part' },
        { id: 'expatternprovider:epp_alt' },
        { id: 'expatternprovider:ei_alt' },
        { id: 'expatternprovider:oversize_interface_alt' },
        { id: 'expatternprovider:oversize_interface_part' },
    ], mod: 'expatternprovider' });
    

    //#region Ext interface

    // IV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_iv')
        .itemInputs(
            '2x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:iv_conveyor_module',
            'gtceu:fusion_glass',
            '2x #forge:dense_plates/tungsten_steel',
            '#gtceu:circuits/iv',
            '2x #gtceu:circuits/ev',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('expatternprovider:ex_interface')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_luv')
        .itemInputs(
            '4x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:luv_conveyor_module',
            '2x gtceu:fusion_glass',
            '2x #forge:dense_plates/rhodium_plated_palladium',
            '#gtceu:circuits/luv',
            '2x #gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('2x expatternprovider:ex_interface')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_zpm')
        .itemInputs(
            '8x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:zpm_conveyor_module',
            '4x gtceu:fusion_glass',
            '2x #forge:dense_plates/naquadah_alloy',
            '#gtceu:circuits/zpm',
            '2x #gtceu:circuits/luv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('4x expatternprovider:ex_interface')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)

    // UV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_ev')
        .itemInputs(
            '16x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:uv_conveyor_module',
            '8x gtceu:fusion_glass',
            '4x #forge:dense_plates/darmstadtium',
            '#gtceu:circuits/uv',
            '2x #gtceu:circuits/zpm',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('8x expatternprovider:ex_interface')
        .duration(300)
        .EUt(491520)
        .cleanroom(CleanroomType.CLEANROOM)
    //#endregion

    //#region Oversized Interface

    //Luv

    event.recipes.gtceu.assembly_line('expatternprovider:oversize_interface_luv')
    .itemInputs(
        '2x #expatternprovider:extended_interface',
        '8x megacells:accumulation_processor',
        '4x gtceu:luv_robot_arm',
        '8x gtceu:fusion_glass',
        '4x #forge:dense_plates/rhodium_plated_palladium',
        '#gtceu:circuits/luv',
        '2x #gtceu:circuits/iv',)
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
    .itemOutputs("expatternprovider:oversize_interface")
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
    .stationResearch(b => b.researchStack(Item.of("expatternprovider:ex_interface")).EUt(GTValues.VA[GTValues.LuV]).CWUt(8))
    .cleanroom(CleanroomType.CLEANROOM)

    //ZPM

    event.recipes.gtceu.assembly_line('expatternprovider:oversize_interface_zpm')
    .itemInputs(
        '8x #expatternprovider:extended_interface',
        '8x megacells:accumulation_processor',
        '4x gtceu:zpm_robot_arm',
        '8x gtceu:fusion_glass',
        '4x #forge:dense_plates/naquadah_alloy',
        '#gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',)
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
    .itemOutputs("4x expatternprovider:oversize_interface")
    .duration(300)
    .EUt(GTValues.VA[GTValues.ZPM])
    .stationResearch(b => b.researchStack(Item.of("expatternprovider:ex_interface")).EUt(GTValues.VA[GTValues.LuV]).CWUt(8))
    .cleanroom(CleanroomType.CLEANROOM)

    //UV

    event.recipes.gtceu.assembly_line('expatternprovider:oversize_interface_uv')
    .itemInputs(
        '16x #expatternprovider:extended_interface',
        '8x megacells:accumulation_processor',
        '4x gtceu:uv_robot_arm',
        '8x gtceu:fusion_glass',
        '4x #forge:dense_plates/darmstadtium',
        '#gtceu:circuits/uv',
        '2x #gtceu:circuits/zpm',)
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
    .itemOutputs("8x expatternprovider:oversize_interface")
    .duration(300)
    .EUt(GTValues.VA[GTValues.UV])
    .stationResearch(b => b.researchStack(Item.of("expatternprovider:ex_interface")).EUt(GTValues.VA[GTValues.LuV]).CWUt(8))
    .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //#region ex pattern provider 
    // IV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_iv')
        .itemInputs(
            '2x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '4x gtceu:iv_conveyor_module',
            '2x #forge:dense_plates/tungsten_steel',
            '#gtceu:circuits/iv',
            '2x #gtceu:circuits/ev',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_luv')
        .itemInputs(
            '4x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '4x gtceu:luv_conveyor_module',
            '2x #forge:dense_plates/rhodium_plated_palladium',
            '#gtceu:circuits/luv',
            '2x #gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('2x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_zpm')
        .itemInputs(
        '8x #megacells:mega_pattern_provider',
        '4x megacells:accumulation_processor',
        '4x gtceu:zpm_conveyor_module',
        '2x #forge:dense_plates/naquadah_alloy',
        '#gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('4x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)
        
    //UV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_uv')
        .itemInputs(
            '16x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '4x gtceu:uv_conveyor_module',
            '2x #forge:dense_plates/darmstadtium',
            '#gtceu:circuits/uv',
            '2x #gtceu:circuits/zpm',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('8x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(491520)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //#region bus

    //ex import bus part
    event.recipes.gtceu.assembler('expatternprovider:ex_import_bus_part')
        .itemInputs(
            '1x #forge:plates/stainless_steel',
            '2x ae2:annihilation_core',
            '2x gtceu:hv_robot_arm',
            '1x megacells:accumulation_processor')
        .inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 144))
        .itemOutputs('expatternprovider:ex_import_bus_part')
        .circuit(2)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    //ex export bus part
    event.recipes.gtceu.assembler('expatternprovider:ex_export_bus_part')
        .itemInputs(
            '1x #forge:plates/stainless_steel',
            '2x ae2:formation_core',
            '2x gtceu:hv_robot_arm',
            '1x megacells:accumulation_processor')
        .inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 144))
        .itemOutputs('expatternprovider:ex_export_bus_part')
        .circuit(3)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    //tag export bus
    event.recipes.gtceu.assembler('expatternprovider:tag_export_bus')
        .itemInputs(
            'ae2:export_bus',
            '2x ae2:logic_processor',
            '#gtceu:circuits/ulv')
        .itemOutputs('expatternprovider:tag_export_bus')
        .duration(100)
        .EUt(480)

    //tag storage bus
    event.recipes.gtceu.assembler('expatternprovider:tag_storage_bus')
        .itemInputs(
            'ae2:storage_bus',
            '2x ae2:logic_processor',
            '#gtceu:circuits/ulv')
        .itemOutputs('expatternprovider:tag_storage_bus')
        .duration(100)
        .EUt(480)

    //mod export bus
    event.recipes.gtceu.assembler('expatternprovider:mod_export_bus')
        .itemInputs(
            'ae2:export_bus',
            '2x ae2:calculation_processor',
            '#gtceu:circuits/ulv')
        .itemOutputs('expatternprovider:mod_export_bus')
        .duration(100)
        .EUt(480)

    //mod storage bus
    event.recipes.gtceu.assembler('expatternprovider:mod_storage_bus')
        .itemInputs(
            'ae2:storage_bus',
            '2x ae2:calculation_processor',
            '#gtceu:circuits/ulv')
        .itemOutputs('expatternprovider:mod_storage_bus')
        .duration(100)
        .EUt(480)

    //precise export bus
    event.recipes.gtceu.assembler('expatternprovider:precise_export_bus')
        .itemInputs(
            'ae2:export_bus',
            '2x ae2:engineering_processor',
            '#gtceu:circuits/ulv')
        .itemOutputs('expatternprovider:precise_export_bus')
        .duration(100)
        .EUt(480)

    //precise storage bus
    event.recipes.gtceu.assembler('expatternprovider:precise_storage_bus')
        .itemInputs(
            'ae2:storage_bus',
            '2x ae2:engineering_processor',
            '#gtceu:circuits/ulv')
        .itemOutputs('expatternprovider:precise_storage_bus')
        .duration(100)
        .EUt(480)

    //threshold export bus
    event.recipes.gtceu.assembler('expatternprovider:threshold_export_bus')
        .itemInputs(
            'ae2:export_bus',
            '2x ae2:logic_processor',
            'ae2:level_emitter')
        .itemOutputs('expatternprovider:threshold_export_bus')
        .duration(100)
        .EUt(480)

    //#endregion

    //active formation plane
    event.recipes.gtceu.assembler('expatternprovider:active_formation_plane')
        .itemInputs(
            'ae2:formation_plane',
            'expatternprovider:export_bus',
            '2x ae2:engineering_processor')
        .itemOutputs('expatternprovider:active_formation_plane')
        .duration(100)
        .EUt(480)

    //pattern modifier
    event.recipes.gtceu.assembler('expatternprovider:pattern_modifier')
        .itemInputs(
            'ae2:blank_pattern',
            'ae2:logic_processor')
        .inputFluids(Fluid.of('tfc:green_dye', 144))
        .itemOutputs('expatternprovider:pattern_modifier')
        .duration(100)
        .EUt(480)

    //threshold level emitter
    event.recipes.gtceu.assembler('expatternprovider:threshold_level_emitter')
        .itemInputs(
            'ae2:level_emitter',
            '2x minecraft:redstone_torch',
            '2x ae2:calculation_processor')
        .itemOutputs('expatternprovider:threshold_level_emitter')
        .duration(100)
        .EUt(480)
    
    //wireless tool
    event.recipes.gtceu.assembler('expatternprovider:wireless_tool')
        .itemInputs(
            '3x #forge:plates/steel',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_emitter',
            '2x ae2:wireless_receiver',
            'ae2:calculation_processor')
        .itemOutputs('expatternprovider:wireless_tool')
        .duration(100)
        .EUt(1920)

    //wireless tool
    event.recipes.gtceu.assembler('expatternprovider:wireless_connect')
        .itemInputs(
            '2x gtceu:iv_machine_casing',
            '4x #gtceu:circuits/iv',
            '8x ae2:wireless_receiver',
            '4x gtceu:iv_emitter',
            '4x gtceu:iv_sensor',
            '8x ae2:engineering_processor',
            '4x megacells:accumulation_processor')
        .itemOutputs('2x expatternprovider:wireless_connect')
        .duration(200)
        .EUt(7580)

    //me packing tape
    event.recipes.gtceu.assembler('expatternprovider:me_packing_tape')
        .itemInputs(
            '4x #forge:dusts/fluix',
            '2x #forge:plates/paper')
        .inputFluids(Fluid.of('gtceu:glue', 144))
        .itemOutputs(Item.of('expatternprovider:me_packing_tape', '{Damage:0}'))
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    //ex pattern access
    event.recipes.gtceu.assembler('expatternprovider:ex_pattern_access_part')
        .itemInputs(
            'ae2:pattern_access_terminal',
            '4x ae2:logic_processor',
            '2x megacells:accumulation_processor',)
        .itemOutputs('expatternprovider:ex_pattern_access_part')
        .duration(100)
        .EUt(1920)

    // Wireless Crafting Terminal
    event.recipes.gtceu.assembler('expatternprovider:wireless_ex_pat')
        .itemInputs(
            '2x gtceu:hv_lithium_battery',
            '2x gtceu:luv_sensor',
            'gtceu:luv_emitter',
            '2x #forge:rods/osmiridium',
            'ae2:wireless_terminal',
            'expatternprovider:ex_pattern_access_part')
        .itemOutputs('expatternprovider:wireless_ex_pat')
        .duration(30)
        .EUt(250)
    
    //#region ex molecular assembler
    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_iv')
    .itemInputs(
        '8x ae2:molecular_assembler',
        '4x #gtceu:circuits/iv',
        '2x #gtceu:circuits/ev',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:iv_conveyor_module',
        '2x gtceu:iv_robot_arm',
        '4x #forge:rods/long/tungsten_steel',)
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(7680)
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_luv')
    .itemInputs(
        '16x ae2:molecular_assembler',
        '4x #gtceu:circuits/luv',
        '2x #gtceu:circuits/iv',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:luv_conveyor_module',
        '2x gtceu:luv_robot_arm',
        '4x #forge:rods/long/rhodium_plated_palladium',)
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('2x expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(30720)
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_zpm')
    .itemInputs(
        '32x ae2:molecular_assembler',
        '4x #gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:zpm_conveyor_module',
        '2x gtceu:zpm_robot_arm',
        '4x #forge:rods/long/naquadah_alloy')
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('4x expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(122880)
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_uv')
    .itemInputs(
        '32x ae2:molecular_assembler',
        '32x ae2:molecular_assembler',
        '4x #gtceu:circuits/uv',
        '2x #gtceu:circuits/zpm',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:uv_conveyor_module',
        '2x gtceu:uv_robot_arm',
        '4x #forge:rods/long/darmstadtium')
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('8x expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(491520)
    .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //ex io port
    event.recipes.gtceu.assembler('expatternprovider:ex_io_port')
        .itemInputs(
            'gtceu:ev_machine_casing',
            'ae2:io_port',
            '2x megacells:accumulation_processor',
            '4x ae2:logic_processor',
            '4x ae2:engineering_processor',
            '4x ae2:speed_card',)
        .itemOutputs('expatternprovider:ex_io_port')
        .duration(200)
        .EUt(1000)
    
    event.recipes.gtceu.assembler('expatternprovider:ex_drive')
        .itemInputs(
            'gtceu:ev_machine_casing',
            'ae2:drive',
            '2x megacells:accumulation_processor',
            '4x ae2:logic_processor',
            '4x ae2:engineering_processor',
            '2x ae2:capacity_card',)
        .itemOutputs('expatternprovider:ex_drive')
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.assembler('expatternprovider:ingredient_buffer')
        .itemInputs(
            'gtceu:hv_machine_casing',
            '2x ae2:quartz_vibrant_glass',
            'gtceu:stainless_steel_drum',
            '2x ae2:cell_component_1k',
            'gtceu:hv_robot_arm',
            'gtceu:hv_electric_pump',)
        .itemOutputs('expatternprovider:ingredient_buffer')
        .duration(200)
        .EUt(1920)

    //#endregion

    //#region Assembler Matrix

    //Frame

    event.recipes.gtceu.assembly_line('expatternprovider:assembler_matrix_frame_luv')
    .itemInputs(
        '4x gtceu:plascrete',
        '4x gtceu:luv_machine_casing',
        '1x #gtceu:circuits/luv',
        '1x megacells:accumulation_processor',
        '4x ae2:logic_processor',
        '4x #forge:rods/long/rhodium_plated_palladium',
        '1x expatternprovider:ex_molecular_assembler',)
    .inputFluids(
        Fluid.of("gtceu:concrete", 1152),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('expatternprovider:assembler_matrix_frame')
    .duration(400)
    .EUt(30768)
    .stationResearch(b => b.researchStack(Item.of("expatternprovider:ex_molecular_assembler")).EUt(GTValues.VA[GTValues.LuV]).CWUt(4))
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:assembler_matrix_frame_zpm')
    .itemInputs(
        '8x gtceu:plascrete',
        '4x gtceu:zpm_machine_casing',
        '1x #gtceu:circuits/zpm',
        '1x megacells:accumulation_processor',
        '4x ae2:logic_processor',
        '4x #forge:rods/long/naquadah_alloy',
        '1x expatternprovider:ex_molecular_assembler',)
    .inputFluids(
        Fluid.of("gtceu:concrete", 1152),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('4x expatternprovider:assembler_matrix_frame')
    .duration(400)
    .EUt(123072)
    .stationResearch(b => b.researchStack(Item.of("expatternprovider:ex_molecular_assembler")).EUt(GTValues.VA[GTValues.LuV]).CWUt(4))
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:assembler_matrix_frame_uv')
    .itemInputs(
        '16x gtceu:plascrete',
        '1x gtceu:uv_machine_casing',
        '1x #gtceu:circuits/uv',
        '1x megacells:accumulation_processor',
        '4x ae2:logic_processor',
        '4x #forge:rods/long/darmstadtium',
        '1x expatternprovider:ex_molecular_assembler',)
    .inputFluids(
        Fluid.of("gtceu:concrete", 1152),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('8x expatternprovider:assembler_matrix_frame')
    .duration(400)
    .EUt(492288)
    .stationResearch(b => b.researchStack(Item.of("expatternprovider:ex_molecular_assembler")).EUt(GTValues.VA[GTValues.LuV]).CWUt(4))
    .cleanroom(CleanroomType.CLEANROOM)

    //Matrix Wall

    event.recipes.gtceu.assembler('expatternprovider:assembler_matrix_wall_luv')
    .itemInputs(
        '4x gtceu:iridium_frame',
        '4x gtceu:plascrete',
        "1x gtceu:incoloy_ma_956_plate",)
    .inputFluids(
        Fluid.of("gtceu:styrene_butadiene_rubber", 1152)
    )
    .itemOutputs('expatternprovider:assembler_matrix_wall')
    .duration(800)
    .EUt(30768)

    //Matrix Glass

    event.recipes.gtceu.assembler("expatternprovider:assembler_matrix_glass")
    .itemInputs(
        '4x gtceu:iridium_frame',
        "4x gtceu:cleanroom_glass",
        "1x gtceu:incoloy_ma_956_plate",)
    .inputFluids(
        Fluid.of("gtceu:styrene_butadiene_rubber", 1152)
    )
    .itemOutputs("expatternprovider:assembler_matrix_glass")
    .duration(800)
    .EUt(30768)

    //Matrix Pattern

    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_pattern_luv")
    .itemInputs(
        '#expatternprovider:extended_pattern_provider',
        '4x megacells:accumulation_processor',
        '4x gtceu:luv_robot_arm',
        '2x #forge:dense_plates/rhodium_plated_palladium',
        '#gtceu:circuits/luv',
        '2x #gtceu:circuits/iv',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('1x expatternprovider:assembler_matrix_pattern')
    .duration(800)
    .EUt(GTValues.VA[GTValues.LuV])
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_pattern_zpm")
    .itemInputs(
        '4x #expatternprovider:extended_pattern_provider',
        '4x megacells:accumulation_processor',
        '4x gtceu:zpm_robot_arm',
        '2x #forge:dense_plates/naquadah_alloy',
        '#gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('4x expatternprovider:assembler_matrix_pattern')
    .duration(800)
    .EUt(GTValues.VA[GTValues.ZPM])
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_pattern_uv")
    .itemInputs(
        '8x #expatternprovider:extended_pattern_provider',
        '4x megacells:accumulation_processor',
        '4x gtceu:uv_robot_arm',
        '2x #forge:dense_plates/darmstadtium',
        '#gtceu:circuits/uv',
        '2x #gtceu:circuits/zpm',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('8x expatternprovider:assembler_matrix_pattern')
    .duration(800)
    .EUt(GTValues.VA[GTValues.UV])
    .cleanroom(CleanroomType.CLEANROOM)

    //Matrix Crafter

    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_crafter_luv")
    .itemInputs(
        "#expatternprovider:oversize_interface",
        '4x megacells:accumulation_processor',
        'gtceu:iv_field_generator',
        '2x #forge:dense_plates/rhodium_plated_palladium',
        '#gtceu:circuits/luv',
        '2x #gtceu:circuits/iv',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('1x expatternprovider:assembler_matrix_crafter')
    .duration(800)
    .EUt(GTValues.VA[GTValues.LuV])
    .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_crafter_zpm")
    .itemInputs(
        "4x #expatternprovider:oversize_interface",
        '4x megacells:accumulation_processor',
        'gtceu:luv_field_generator',
        '2x #forge:dense_plates/naquadah_alloy',
        '#gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('4x expatternprovider:assembler_matrix_crafter')
    .duration(800)
    .EUt(GTValues.VA[GTValues.ZPM])
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_crafter_uv")
    .itemInputs(
        "8x #expatternprovider:oversize_interface",
        '4x megacells:accumulation_processor',
        'gtceu:iv_field_generator',
        '2x #forge:dense_plates/darmstadtium',
        '#gtceu:circuits/uv',
        '2x #gtceu:circuits/zpm',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs('8x expatternprovider:assembler_matrix_crafter')
    .duration(800)
    .EUt(GTValues.VA[GTValues.UV])
    .cleanroom(CleanroomType.CLEANROOM)

    //Matrix Speed

    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_speed_luv")
    .itemInputs(
        "megacells:mega_crafting_accelerator",
        '4x megacells:accumulation_processor',
        "64x ae2:speed_card",
        '2x #forge:dense_plates/rhodium_plated_palladium',
        '#gtceu:circuits/luv',
        '2x #gtceu:circuits/iv',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs("expatternprovider:assembler_matrix_speed")
    .duration(800)
    .EUt(GTValues.VA[GTValues.LuV])
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_speed_zpm")
    .itemInputs(
        "4x megacells:mega_crafting_accelerator",
        '4x megacells:accumulation_processor',
        "64x ae2:speed_card",
        '2x #forge:dense_plates/naquadah_alloy',
        '#gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs("4x expatternprovider:assembler_matrix_speed")
    .duration(800)
    .EUt(GTValues.VA[GTValues.ZPM])
    .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_speed_uv")
    .itemInputs(
        "8x megacells:mega_crafting_accelerator",
        '4x megacells:accumulation_processor',
        "64x ae2:speed_card",
        '2x #forge:dense_plates/darmstadtium',
        '#gtceu:circuits/uv',
        '2x #gtceu:circuits/zpm',)
    .inputFluids(
        Fluid.of("gtceu:europium", 16),
        Fluid.of('gtceu:polybenzimidazole', 1430),)
    .itemOutputs("8x expatternprovider:assembler_matrix_speed")
    .duration(800)
    .EUt(GTValues.VA[GTValues.UV])
    .cleanroom(CleanroomType.CLEANROOM)


    //#endregion

    }
