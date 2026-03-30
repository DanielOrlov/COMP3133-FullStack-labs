import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
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