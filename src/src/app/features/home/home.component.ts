import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsLanguagesComponent } from './components/skills-languages/skills-languages.component';
import { SkillsFrameworksComponent } from './components/skills-frameworks/skills-frameworks.component';
import { SkillsToolsComponent } from './components/skills-tools/skills-tools.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, SkillsLanguagesComponent, SkillsFrameworksComponent, SkillsToolsComponent, ContactComponent],
  template: \<app-hero /><app-projects /><app-skills-languages /><app-skills-frameworks /><app-skills-tools /><app-contact />\
})
export class HomeComponent {}
