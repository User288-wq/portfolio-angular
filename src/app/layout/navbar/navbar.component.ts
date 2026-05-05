import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center sticky top-0 bg-[#0b0b0b]/90 backdrop-blur z-50">
      <div class="w-8"></div>
      <div class="space-x-6 text-sm text-gray-300">
        <a (click)="scrollTo('projects')" class="cursor-pointer hover:text-white">Projets</a>
        <a (click)="scrollTo('skills')" class="cursor-pointer hover:text-white">Compétences</a>
        <a (click)="scrollTo('frameworks')" class="cursor-pointer hover:text-white">Frameworks</a>
        <a (click)="scrollTo('tools')" class="cursor-pointer hover:text-white">Outils</a>
        <a (click)="scrollTo('contact')" class="cursor-pointer hover:text-white">Contact</a>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
