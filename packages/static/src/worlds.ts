import worlds from './worlds.json' assert { type: 'json' };
import zones from './zones.json' assert { type: 'json' };

export { worlds, zones };

export const getWorld = (worldName: string): World | undefined =>
  worlds.find((world) => world.worldName === worldName);

export const getZone = (id: string): Zone | undefined =>
  zones.find((zone) => zone.id === id);

export const getZonesWithWorlds = () => {
  return zones.map((zone) => ({
    ...zone,
    worlds: worlds.filter((world) => world.zone === zone.id),
  }));
};

export type Faction = 'Covenant' | 'Marauder' | 'Syndicate';
export const SYNDICATE_COLOR = 'rgb(130, 95, 130)';
export const COVENANT_COLOR = 'rgb(152, 100, 43)';
export const MARAUDER_COLOR = 'rgb(95, 135, 76)';
export const NEUTRAL_COLOR = 'rgb(200, 200, 200)';

export const ICONS: {
  [faction in Faction]: string;
} = {
  Covenant: '<:covenant:1067756697873035284>',
  Marauder: '<:marauder:1067756763618746438>',
  Syndicate: '<:syndicate:1067756766672203788>',
};
export const validateInfluence = (
  influence: {
    regionName: string;
    factionName: string;
  }[]
) => {
  if (influence.length !== 15) {
    throw new Error('Could not detect all 15 regions');
  }
  influence.forEach(({ regionName, factionName }) => {
    if (
      ['Great Cleave', 'Shattered Mountain', 'Elysian Wilds'].includes(
        regionName
      )
    ) {
      if (factionName !== 'Neutral') {
        throw new Error(`${regionName} is invalid`);
      }
    } else if (factionName === 'Neutral') {
      throw new Error(`${regionName} is invalid`);
    }
  });
};
export type World = (typeof worlds)[0];
export type Zone = (typeof zones)[0];
