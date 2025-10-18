import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NBAPlayersService } from '../services/nba-player-service';
import { NbaPlayer } from '../types/nba-player';

@Component({
  selector: 'app-nba-players',
  standalone: false,
  templateUrl: './nba-players.html',
  styleUrl: './nba-players.scss',
})
export class NbaPlayers implements OnInit, OnChanges, OnDestroy {
  nbaPlayers: NbaPlayer[] = [];

  constructor(private nbpPlayerService: NBAPlayersService) {}

  ngOnInit(): void {
    // this.nbpPlayerService.getPlayers().subscribe((data) => {
    //   console.log(data)
    // })

    this.nbpPlayerService.getPlayers().subscribe({
      next: (res) => {
        this.nbaPlayers = res;
      },
      error: () => {},
      complete: () => {},
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {}
}
