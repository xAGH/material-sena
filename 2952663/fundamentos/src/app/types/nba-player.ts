export interface NbaPlayerReponse {
  data: NbaPlayer[],
  pagination: any
}

export interface NbaPlayer {
  playerId: string;
  playerName: string;
  position: string;
  age: number;
  team: string;
  games: number;
}
