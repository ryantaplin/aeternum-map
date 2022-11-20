import type { MarkerSize } from './types.js';

export const defaultSizes: MarkerSize[] = ['?', 'S', 'M', 'L'];
export const treeSizes: MarkerSize[] = ['?', 'XS', 'S', 'M', 'L', 'XL'];

export type FilterItem = {
  type: string;
  category: string;
  title: string;
  iconUrl: string;
  hasName?: boolean;
  hasLevel?: boolean;
  hasHP?: boolean;
  hasCustomRespawnTimer?: boolean;
  maxTier?: number;
  sizes?: MarkerSize[];
};

export const lootableMapFilters = [
  'boss',
  'bossElite',
  'rafflebones_25',
  'rafflebones_66',
];
export const mapFilters: FilterItem[] = [
  {
    category: 'locations',
    type: 'arena',
    title: 'Arena',
    iconUrl: '/pois/arena.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'expedition',
    title: 'Expedition',
    iconUrl: '/pois/expedition.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'outpost',
    title: 'Outpost',
    iconUrl: '/pois/outpost.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'settlement',
    title: 'Settlement',
    iconUrl: '/pois/settlement.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'spiritShrine',
    title: 'Spirit Shrine',
    iconUrl: '/pois/spiritShrine.webp',
    hasName: true,
  },
  {
    category: 'locations',
    type: 'vistaView',
    title: 'Vista View',
    iconUrl: '/pois/vista_view.webp',
    hasName: true,
  },
  {
    category: 'chests',
    type: 'expeditionChest',
    title: 'Expedition Chest',
    iconUrl: '/pois/chest_expedition.webp',
  },
  {
    category: 'chests',
    type: 'glyphChest',
    title: 'Glyph Chest',
    iconUrl: '/pois/chest_glyph.webp',
  },
  {
    category: 'chests',
    type: 'chestsEliteAncient',
    title: 'Elite Ancient Chest',
    iconUrl: '/pois/chest_elite2.webp',
  },
  {
    category: 'chests',
    type: 'chestsEliteSupplies',
    title: 'Elite Supply Stockpile',
    iconUrl: '/pois/chest_elite4.webp',
  },
  {
    category: 'chests',
    type: 'chestsEliteOffering',
    title: 'Elite Grave Offering',
    iconUrl: '/pois/chest_elite_offering.webp',
  },
  {
    category: 'chests',
    type: 'chestsLargeAlchemy',
    title: 'Alchemy Stockpile',
    iconUrl: '/pois/chest_large1.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsLargeAncient',
    title: 'Ancient Chest',
    iconUrl: '/pois/chest_large2.webp',
  },
  {
    category: 'chests',
    type: 'chestsLargeProvisions',
    title: 'Provisions Stockpile',
    iconUrl: '/pois/chest_large3.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsLargeSupplies',
    title: 'Supply Stockpile',
    iconUrl: '/pois/chest_large4.webp',
  },
  {
    category: 'chests',
    type: 'chestsOffering',
    title: 'Grave Offering',
    iconUrl: '/pois/chest_offering.webp',
  },
  {
    category: 'chests',
    type: 'chestsMediumAlchemy',
    title: 'Alchemy Crate',
    iconUrl: '/pois/chest_medium1.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsMediumAncient',
    title: 'Ancient Coffer',
    iconUrl: '/pois/chest_medium2.webp',
  },
  {
    category: 'chests',
    type: 'chestsMediumProvisions',
    title: 'Provisions Crate',
    iconUrl: '/pois/chest_medium3.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsMediumSupplies',
    title: 'Supply Crate',
    iconUrl: '/pois/chest_medium4.webp',
  },
  {
    category: 'chests',
    type: 'chestsCommonAncient',
    title: 'Ancient Urn',
    iconUrl: '/pois/chest_common2.webp',
  },
  {
    category: 'chests',
    type: 'chestsCommonProvisions',
    title: 'Provisions Cache',
    iconUrl: '/pois/chest_common3.webp',
    maxTier: 3,
  },
  {
    category: 'chests',
    type: 'chestsCommonSupplies',
    title: 'Supply Cache',
    iconUrl: '/pois/chest_common4.webp',
  },
  {
    category: 'enemies',
    type: 'boss',
    title: 'Boss',
    iconUrl: '/pois/boss.webp',
    hasName: true,
    hasLevel: true,
    hasCustomRespawnTimer: true,
    hasHP: true,
  },
  {
    category: 'enemies',
    type: 'bossElite',
    title: 'Elite Boss',
    iconUrl: '/pois/boss.webp',
    hasName: true,
    hasLevel: true,
    hasCustomRespawnTimer: true,
    hasHP: true,
  },
  {
    category: 'enemies',
    type: 'rafflebones_25',
    title: 'Rafflebones (LvL 25)',
    iconUrl: '/pois/rafflebones.webp',
  },
  {
    category: 'enemies',
    type: 'rafflebones_66',
    title: 'Rafflebones (LvL 66)',
    iconUrl: '/pois/rafflebones.webp',
  },
  {
    category: 'skinning',
    type: 'alligator',
    title: 'Alligator',
    iconUrl: '/pois/alligator.webp',
  },
  {
    category: 'skinning',
    type: 'bear',
    title: 'Bear',
    iconUrl: '/pois/bear.webp',
  },
  {
    category: 'skinning',
    type: 'bison',
    title: 'Bison',
    iconUrl: '/pois/bison.webp',
  },
  {
    category: 'skinning',
    type: 'boar',
    title: 'Boar',
    iconUrl: '/pois/boar.webp',
  },
  {
    category: 'skinning',
    type: 'cow',
    title: 'Cow',
    iconUrl: '/pois/cow.webp',
  },
  {
    category: 'skinning',
    type: 'elk',
    title: 'Elk',
    iconUrl: '/pois/elk.webp',
  },
  {
    category: 'skinning',
    type: 'elemential_forest',
    title: 'Elemential Forest',
    iconUrl: '/pois/elk.webp',
  },
  {
    category: 'skinning',
    type: 'elemential_mountain',
    title: 'Elemential Mountain',
    iconUrl: '/pois/bear.webp',
  },
  {
    category: 'skinning',
    type: 'elemential_tundra',
    title: 'Elemential Tundra',
    iconUrl: '/pois/wolf.webp',
  },
  {
    category: 'skinning',
    type: 'goat',
    title: 'Goat',
    iconUrl: '/pois/sheep.webp',
  },
  {
    category: 'skinning',
    type: 'lion',
    title: 'Lion',
    iconUrl: '/pois/puma.webp',
  },
  {
    category: 'skinning',
    type: 'lynx',
    title: 'Lynx',
    iconUrl: '/pois/lynx.webp',
  },
  {
    category: 'skinning',
    type: 'pig',
    title: 'Pig',
    iconUrl: '/pois/pig.webp',
  },
  {
    category: 'skinning',
    type: 'rabbit',
    title: 'Rabbit',
    iconUrl: '/pois/hare.webp',
  },
  {
    category: 'skinning',
    type: 'sheep',
    title: 'Sheep',
    iconUrl: '/pois/sheep.webp',
  },
  {
    category: 'skinning',
    type: 'scorpion',
    title: 'Scorpion',
    iconUrl: '/pois/scorpion.webp',
  },
  {
    category: 'skinning',
    type: 'turkey',
    title: 'Turkey',
    iconUrl: '/pois/turkey.webp',
  },
  {
    category: 'skinning',
    type: 'wolf',
    title: 'Wolf',
    iconUrl: '/pois/wolf.webp',
  },
  {
    category: 'mining',
    type: 'gold',
    title: 'Gold',
    iconUrl: '/pois/gold.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'iron',
    title: 'Iron',
    iconUrl: '/pois/iron.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'lodestone',
    title: 'Lodestone',
    iconUrl: '/pois/lodestone.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'oil',
    title: 'Seeping Stone (Oil)',
    iconUrl: '/pois/oil.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'orichalcum',
    title: 'Orichalcum',
    iconUrl: '/pois/orichalcum.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'platinum',
    title: 'Platinum',
    iconUrl: '/pois/platinum.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'saltpeter',
    title: 'Saltpeter',
    iconUrl: '/pois/saltpeter.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'sandstone',
    title: 'Sandstone',
    iconUrl: '/pois/sandstone.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'silver',
    title: 'Silver',
    iconUrl: '/pois/silver.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'starmetal',
    title: 'Starmetal',
    iconUrl: '/pois/starmetal.webp',
    sizes: defaultSizes,
  },
  {
    category: 'mining',
    type: 'brimstone',
    title: 'Sulfur',
    iconUrl: '/pois/brimstone.webp',
    sizes: defaultSizes,
  },
  {
    category: 'fishing',
    type: 'fish_hotspot1',
    title: 'Fish Broad',
    iconUrl: '/pois/fish_hotspot1.webp',
  },
  {
    category: 'fishing',
    type: 'fish_hotspot2',
    title: 'Fish Rare',
    iconUrl: '/pois/fish_hotspot2.webp',
  },
  {
    category: 'fishing',
    type: 'fish_hotspot3',
    title: 'Fish Secret',
    iconUrl: '/pois/fish_hotspot3.webp',
  },
  {
    category: 'logging',
    type: 'ironwood',
    title: 'Ironwood Tree',
    iconUrl: '/pois/ironwood_compass.webp',
    sizes: treeSizes,
  },
  {
    category: 'logging',
    type: 'wyrdwood',
    title: 'Wyrdwood Tree',
    iconUrl: '/pois/wyrdwood_compass.webp',
    sizes: treeSizes,
  },
  {
    category: 'farming',
    type: 'azoth_spring',
    title: 'Azoth Spring',
    iconUrl: '/pois/azoth_spring.webp',
  },
  {
    category: 'farming',
    type: 'fungus',
    title: 'Fungus',
    iconUrl: '/pois/fungi.webp',
  },
  {
    category: 'farming',
    type: 'hemp',
    title: 'Hemp',
    iconUrl: '/pois/hemp_compass.webp',
    sizes: defaultSizes,
  },
  {
    category: 'farming',
    type: 'herb',
    title: 'Herb',
    iconUrl: '/pois/herbs.webp',
    sizes: defaultSizes,
  },
  {
    category: 'farming',
    type: 'silkweed',
    title: 'Silkweed',
    iconUrl: '/pois/silkweed.webp',
    sizes: defaultSizes,
  },
  {
    category: 'farming',
    type: 'wirefiber',
    title: 'Wirefiber',
    iconUrl: '/pois/wirefiber.webp',
    sizes: defaultSizes,
  },
  {
    category: 'cooking_ingredients',
    type: 'barley',
    title: 'Barley',
    iconUrl: '/pois/barley.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'berry',
    title: 'Berry',
    iconUrl: '/pois/berry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'blueberry',
    title: 'Blueberry',
    iconUrl: '/pois/blueberry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'broccoli',
    title: 'Broccoli',
    iconUrl: '/pois/broccoli.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'cabbage',
    title: 'Cabbage',
    iconUrl: '/pois/cabbage.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'carrot',
    title: 'Carrot',
    iconUrl: '/pois/carrot.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'corn',
    title: 'Corn',
    iconUrl: '/pois/corn.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'cranberry',
    title: 'Cranberry',
    iconUrl: '/pois/cranberry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'honey',
    title: 'Honey',
    iconUrl: '/pois/honey.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'milk',
    title: 'Milk',
    iconUrl: '/pois/milk.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'nuts',
    title: 'Nuts',
    iconUrl: '/pois/nuts.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'potato',
    title: 'Potato',
    iconUrl: '/pois/potato.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'pricklyPearCactus',
    title: 'Prickly Pear Cactus',
    iconUrl: '/pois/pricklyPearCactus.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'pumpkin',
    title: 'Pumpkin',
    iconUrl: '/pois/pumpkin.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'squash',
    title: 'Squash',
    iconUrl: '/pois/squash.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'strawberry',
    title: 'Strawberry',
    iconUrl: '/pois/strawberry.webp',
  },
  {
    category: 'cooking_ingredients',
    type: 'turkey_nest',
    title: 'Turkey Nest',
    iconUrl: '/pois/turkey_nest.webp',
  },
  {
    category: 'npc',
    type: 'npc_generic',
    title: 'Generic',
    iconUrl: '/pois/npc_generic.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_inn',
    title: 'Inn',
    iconUrl: '/pois/npc_inn.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_covenant',
    title: 'Covenant',
    iconUrl: '/pois/npc_covenant.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_marauder',
    title: 'Marauder',
    iconUrl: '/pois/npc_marauder.webp',
    hasName: true,
  },
  {
    category: 'npc',
    type: 'npc_syndicate',
    title: 'Syndicate',
    iconUrl: '/pois/npc_syndicate.webp',
    hasName: true,
  },
  {
    category: 'lore',
    type: 'lore_note',
    title: 'Lore Note',
    iconUrl: '/pois/lore_note.webp',
    hasName: true,
  },
  {
    category: 'lore',
    type: 'glyph',
    title: 'Ancient Glyph',
    iconUrl: '/pois/glyph.webp',
    hasName: true,
  },
  {
    category: 'essences',
    type: 'essences_shockbulb',
    title: 'Shockbulb',
    iconUrl: '/pois/wind_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_shockspire',
    title: 'Shockspire',
    iconUrl: '/pois/wind_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_lightning_beetle',
    title: 'Lightning Beetle',
    iconUrl: '/pois/wind_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_blightroot',
    title: 'Blightroot',
    iconUrl: '/pois/death_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_blightcrag',
    title: 'Blightcrag',
    iconUrl: '/pois/death_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_blightmoth',
    title: 'Blightmoth',
    iconUrl: '/pois/death_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_earthspine',
    title: 'Earthspine',
    iconUrl: '/pois/earth_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_earthcrag',
    title: 'Earthcrag',
    iconUrl: '/pois/earth_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_earthshell_turtle',
    title: 'Earthshell Turtle',
    iconUrl: '/pois/earth_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_dragonglory',
    title: 'Dragonglory',
    iconUrl: '/pois/fire_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_scorchstone',
    title: 'Scorchstone',
    iconUrl: '/pois/fire_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_salamander_snail',
    title: 'Salamander Snail',
    iconUrl: '/pois/fire_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_lifebloom',
    title: 'Lifebloom',
    iconUrl: '/pois/life_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_lifejewel',
    title: 'Lifejewel',
    iconUrl: '/pois/life_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_lifemoth',
    title: 'Lifemoth',
    iconUrl: '/pois/life_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_soulsprout',
    title: 'Soulsprout',
    iconUrl: '/pois/spirit_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_soulspire',
    title: 'Soulspire',
    iconUrl: '/pois/spirit_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_soulwyrm',
    title: 'Soulwyrm',
    iconUrl: '/pois/spirit_boid.webp',
  },
  {
    category: 'essences',
    type: 'essences_rivercress',
    title: 'Rivercress',
    iconUrl: '/pois/water_plant.webp',
  },
  {
    category: 'essences',
    type: 'essences_springstone',
    title: 'Springstone',
    iconUrl: '/pois/water_stone.webp',
  },
  {
    category: 'essences',
    type: 'essences_floating_spinefish',
    title: 'Floating Spinefish',
    iconUrl: '/pois/water_boid.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_black_primsabloom',
    title: 'Black Prismabloom',
    iconUrl: '/pois/pigment_black.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_blue_primsabloom',
    title: 'Blue Prismabloom',
    iconUrl: '/pois/pigment_blue.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_brown_primsabloom',
    title: 'Brown Prismabloom',
    iconUrl: '/pois/pigment_brown.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_cyan_primsabloom',
    title: 'Cyan Prismabloom',
    iconUrl: '/pois/pigment_cyan.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_desert_rose_primsabloom',
    title: 'Desert Rose Prismabloom',
    iconUrl: '/pois/pigment_desert_rose.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_green_primsabloom',
    title: 'Green Prismabloom',
    iconUrl: '/pois/pigment_green.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_magenta_primsabloom',
    title: 'Magenta Prismabloom',
    iconUrl: '/pois/pigment_magenta.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_orange_primsabloom',
    title: 'Orange Prismabloom',
    iconUrl: '/pois/pigment_orange.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_red_primsabloom',
    title: 'Red Prismabloom',
    iconUrl: '/pois/pigment_red.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_turquoise_primsabloom',
    title: 'Turquoise Prismabloom',
    iconUrl: '/pois/pigment_turquoise.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_violet_primsabloom',
    title: 'Violet Prismabloom',
    iconUrl: '/pois/pigment_violet.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_white_primsabloom',
    title: 'White Prismabloom',
    iconUrl: '/pois/pigment_white.webp',
  },
  {
    category: 'pigment',
    type: 'pigment_yellow_primsabloom',
    title: 'Yellow Prismabloom',
    iconUrl: '/pois/pigment_yellow.webp',
  },
  {
    category: 'service',
    type: 'service_arcane_repository',
    title: 'Arcane Repository',
    iconUrl: '/pois/service_arcane_repository.webp',
  },
  {
    category: 'service',
    type: 'service_forge',
    title: 'Forge',
    iconUrl: '/pois/service_forge.webp',
  },
  {
    category: 'service',
    type: 'service_gypsum_kiln',
    title: 'Gypsum Kiln',
    iconUrl: '/pois/service_gypsum_kiln.webp',
  },
  {
    category: 'service',
    type: 'service_kitchen',
    title: 'Kitchen',
    iconUrl: '/pois/service_kitchen.webp',
  },
  {
    category: 'service',
    type: 'service_loom',
    title: 'Loom',
    iconUrl: '/pois/service_loom.webp',
  },
  {
    category: 'service',
    type: 'service_outfitting',
    title: 'Outfitting',
    iconUrl: '/pois/service_outfitting.webp',
  },
  {
    category: 'service',
    type: 'service_smelter',
    title: 'Smelter',
    iconUrl: '/pois/service_smelter.webp',
  },
  {
    category: 'service',
    type: 'service_stonecutting',
    title: 'Stonecutting',
    iconUrl: '/pois/service_stonecutting.webp',
  },
  {
    category: 'service',
    type: 'service_storage',
    title: 'Storage',
    iconUrl: '/pois/service_storage.webp',
  },
  {
    category: 'service',
    type: 'service_tannery',
    title: 'Tannery',
    iconUrl: '/pois/service_tannery.webp',
  },
  {
    category: 'service',
    type: 'service_territory_board',
    title: 'Territory Board',
    iconUrl: '/pois/service_territory_board.webp',
  },
  {
    category: 'service',
    type: 'service_town_board',
    title: 'Town Board',
    iconUrl: '/pois/service_town_board.webp',
  },
  {
    category: 'service',
    type: 'service_trading_post',
    title: 'Trading Post',
    iconUrl: '/pois/service_trading_post.webp',
  },
  {
    category: 'service',
    type: 'service_war_board',
    title: 'War Board',
    iconUrl: '/pois/service_warboard.webp',
  },
  {
    category: 'service',
    type: 'service_woodshop',
    title: 'Woodshop',
    iconUrl: '/pois/service_woodshop.webp',
  },
  {
    category: 'service',
    type: 'service_workshop',
    title: 'Workshop',
    iconUrl: '/pois/service_workshop.webp',
  },
  {
    category: 'other',
    type: 'miscellaneous',
    title: 'Miscellaneous',
    iconUrl: '/pois/other.webp',
  },
  {
    category: 'private',
    type: 'generic',
    title: 'Generic',
    iconUrl: '/pois/private/generic.webp',
    hasName: true,
  },
  {
    category: 'factionQuests',
    type: 'fort',
    title: 'Conquer',
    iconUrl: '/pois/fort.webp',
    hasName: true,
  },
  {
    category: 'factionQuests',
    type: 'enemyIntelligence',
    title: 'Enemy Intelligence',
    iconUrl: '/pois/enemyIntelligence.webp',
    hasName: true,
  },
  {
    category: 'factionQuests',
    type: 'infiltrate',
    title: 'Infiltrate',
    iconUrl: '/pois/infiltrate.webp',
    hasName: true,
  },
  {
    category: 'factionQuests',
    type: 'showOfStrength',
    title: 'Show of Strength',
    iconUrl: '/pois/showOfStrength.webp',
    hasName: true,
  },
  {
    category: 'events',
    type: 'turkulon',
    title: 'Turkulon',
    iconUrl: '/pois/turkulon.webp',
  },
];

export type MapFiltersCategory = {
  value: string;
  title: string;
  filters: FilterItem[];
  borderColor?: string;
};

export const mapFiltersCategories: MapFiltersCategory[] = [
  {
    value: 'events',
    title: 'Events',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'events'),
    borderColor: 'rgba(246, 177, 66, 0.7)',
  },
  {
    value: 'chests',
    title: 'Chests',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'chests'),
    borderColor: 'rgba(200, 200, 200, 0.7)',
  },
  {
    value: 'enemies',
    title: 'Enemies',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'enemies'),
    borderColor: 'rgba(220, 20, 60, 0.7)',
  },
  {
    value: 'farming',
    title: 'Farming',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'farming'),
    borderColor: 'rgba(34, 139, 34, 0.7)',
  },
  {
    value: 'cooking_ingredients',
    title: 'Cooking Ingredients',
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'cooking_ingredients'
    ),
    borderColor: 'rgba(0, 100, 0, 0.7)',
  },
  {
    value: 'fishing',
    title: 'Fishing',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'fishing'),
    borderColor: 'rgba(30, 144, 255, 0.7)',
  },
  {
    value: 'logging',
    title: 'Logging',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'logging'),
    borderColor: 'rgba(85, 107, 47, 0.7)',
  },
  {
    value: 'mining',
    title: 'Mining',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'mining'),
    borderColor: 'rgba(255, 235, 205, 0.7)',
  },
  {
    value: 'skinning',
    title: 'Skinning',
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'skinning'
    ),
    borderColor: 'rgba(205, 133, 63, 0.7)',
  },
  {
    value: 'lore',
    title: 'Documents',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'lore'),
    borderColor: 'rgba(65, 105, 225, 0.7)',
  },
  {
    value: 'essences',
    title: 'Essences',
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'essences'
    ),
    borderColor: 'rgba(75, 0, 130, 0.7)',
  },
  {
    value: 'pigment',
    title: 'Pigments',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'pigment'),
    borderColor: 'rgba(250, 128, 114, 0.7)',
  },
  {
    value: 'npc',
    title: 'NPC',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'npc'),
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  {
    value: 'service',
    title: 'Services',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'service'),
    borderColor: 'rgba(112, 128, 144, 0.7)',
  },
  {
    value: 'locations',
    title: 'Locations',
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'locations'
    ),
  },
  {
    value: 'factionQuests',
    title: 'Faction Quests',
    filters: mapFilters.filter(
      (mapFilter) => mapFilter.category === 'factionQuests'
    ),
    borderColor: 'rgba(230, 15, 55, 0.7)',
  },
  {
    value: 'private',
    title: 'Private (only visible to you)',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'private'),
  },
  {
    value: 'other',
    title: 'Other',
    filters: mapFilters.filter((mapFilter) => mapFilter.category === 'other'),
    borderColor: 'rgba(80, 80, 80, 0.7)',
  },
];
