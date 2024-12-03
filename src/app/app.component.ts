import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstMilestoneComponent } from './components/first-milestone/first-milestone.component';
import { SecondMilestoneComponent } from './components/second-milestone/second-milestone.component';
import { ThirdMilestoneComponent } from './components/third-milestone/third-milestone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FirstMilestoneComponent,
    SecondMilestoneComponent,
    ThirdMilestoneComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Virtual Mouse';

  // Változó a megjelenített komponenshez
  currentComponent = 'first';

  // Tab változtatás kezelése
  onTabChange(index: number): void {
    switch (index) {
      case 0:
        this.currentComponent = 'first';
        break;
      case 1:
        this.currentComponent = 'second';
        break;
      case 2:
        this.currentComponent = 'third';
        break;
    }
  }
}
