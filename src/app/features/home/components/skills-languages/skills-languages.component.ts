import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-languages.component.html'
})
export class SkillsLanguagesComponent {
  languages = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'PHP', 'HTML/CSS', 'SQL'];
}
