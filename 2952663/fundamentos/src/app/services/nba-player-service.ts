import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbaPlayer, NbaPlayerReponse } from '../types/nba-player';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NBAPlayersService {
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<NbaPlayer[]> {
    const url =
      'https://api.server.nbaapi.com/api/playeradvancedstats?page=1&pageSize=100&sortBy=winShares&ascending=false';
    return this.http.get<NbaPlayerReponse>(url).pipe(
      map((res) => {
        return res.data.map((player) => ({
          playerId: player.playerId,
          playerName: player.playerName,
          position: player.position,
          age: player.age,
          team: player.team,
          games: player.games,
        }));
      })
    );
  }
}
