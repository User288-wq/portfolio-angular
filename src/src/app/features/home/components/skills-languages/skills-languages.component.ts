import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-languages',
  standalone: true,
  template: \
    <section id="skills" class="py-24 bg-[#0f0f0f]">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold uppercase mb-12">Langages</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div *ngFor="let lang of languages" class="bg-[#1c1c1c] p-6 rounded-lg text-center">{{ lang }}</div>
        </div>
      </div>
    </section>
  \,
  standalone: true,
  imports: [CommonModule]
})
export class SkillsLanguagesComponent {
  languages = ['Java', 'Python', 'PHP', 'C', 'Dart', 'Kotlin', 'JavaScript', 'UML'];
}
