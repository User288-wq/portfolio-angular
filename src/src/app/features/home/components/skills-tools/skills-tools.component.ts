import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-tools',
  standalone: true,
  imports: [CommonModule],
  template: \
    <section id="tools" class="py-24 bg-[#0f0f0f]">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold uppercase mb-12">Outils</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div *ngFor="let tool of tools" class="bg-[#1c1c1c] p-6 rounded-lg text-center">{{ tool }}</div>
        </div>
      </div>
    </section>
  \
})
export class SkillsToolsComponent {
  tools = ['Git', 'GitHub', 'Linux', 'VS Code', 'Android Studio', 'IntelliJ IDEA', 'MySQL', 'UML'];
}
