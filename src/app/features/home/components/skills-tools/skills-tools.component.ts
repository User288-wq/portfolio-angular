import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-tools.component.html'
})
export class SkillsToolsComponent {
  tools = ['Git', 'Docker', 'VS Code', 'Webpack', 'Jenkins', 'Jira', 'Figma', 'Postman'];
}
