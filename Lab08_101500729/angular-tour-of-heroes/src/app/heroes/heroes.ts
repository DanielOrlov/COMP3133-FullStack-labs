import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormat } from '../input-format';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor, RemoveSpacesPipe, InputFormat],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css']
})
export class Heroes {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}


}