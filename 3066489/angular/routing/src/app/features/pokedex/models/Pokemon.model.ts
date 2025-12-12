export interface Ability {
  name: 'friend-guard';
  url: 'https://pokeapi.co/api/v2/ability/132/';
}

export interface AbilityInfo {
  is_hidden: true;
  slot: 3;
  ability: Ability;
}

export interface Pokemon {
  id: number;
  name: string;
  abilities: AbilityInfo[];
  sprite: string;
}
