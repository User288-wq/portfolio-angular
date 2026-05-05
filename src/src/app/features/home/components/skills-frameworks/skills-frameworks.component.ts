import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-frameworks',
  standalone: true,
  imports: [CommonModule],
  template: \
    <section id="frameworks" class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold uppercase mb-12">Frameworks & Niveaux</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div *ngFor="let fw of frameworks">
            <div class="flex justify-between mb-2"><span>{{ fw.name }}</span><span class="text-sm text-gray-400">{{ fw.level }}</span></div>
            <div class="bg-[#1c1c1c] h-2 rounded-full"><div class="bg-lime-400 h-2 rounded-full" [style.width.%]="fw.percent"></div></div>
          </div>
        </div>
      </div>
    </section>
  \
})
export class SkillsFrameworksComponent {
  frameworks = [
    { name: 'Spring Boot', level: 'Avancé', percent: 85 },
    { name: 'Laravel', level: 'Avancé', percent: 80 },
    { name: 'Flutter', level: 'Intermédiaire', percent: 65 },
    { name: 'Angular', level: 'Intermédiaire', percent: 70 },
    { name: 'React', level: 'Avancé', percent: 85 }
  ];
}
