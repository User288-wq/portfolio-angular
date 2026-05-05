import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: \
    <section id="projects" class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold uppercase mb-12">Projets</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div class="bg-[#1c1c1c] p-4 rounded-lg"><img src="assets/photo2.jpeg" alt="Projet principal" class="rounded-md" /></div>
          <div><h3 class="text-xl font-bold mb-2">Application Web Moderne</h3><p class="text-gray-400 text-sm mb-4">Application développée avec React, Tailwind CSS et API REST.</p><p class="text-sm text-gray-500">Rôle : Développeur Full Stack</p><div class="flex gap-6 text-lime-400 font-semibold text-sm mt-2"><a href="#">DÉMO →</a><a href="#">GITHUB →</a></div></div>
          <div class="bg-[#1c1c1c] p-4 rounded-lg"><img src="assets/project image 1.png" alt="Projet 1" class="rounded-md" /></div>
          <div class="bg-[#1c1c1c] p-4 rounded-lg"><img src="assets/project image.png" alt="Projet 2" class="rounded-md" /></div>
        </div>
      </div>
    </section>
  \
})
export class ProjectsComponent {}
