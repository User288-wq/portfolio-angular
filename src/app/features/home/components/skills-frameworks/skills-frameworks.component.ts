import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-frameworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-frameworks.component.html'
})
export class SkillsFrameworksComponent {
  frameworks = [
    { name: 'Angular', percent: 90 },
    { name: 'React', percent: 75 },
    { name: 'Node.js', percent: 80 },
    { name: 'Express', percent: 70 }
  ];
}
