import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: \
    <header id="hero" class="py-20">
      <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2 border-l-4 border-lime-400 pl-6 space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight">HI, I AM <br/> DIARAF DIOUF.</h1>
          <p class="text-gray-400">Développeur front-end basé à Dakar, passionné par le web, le mobile et les interfaces modernes.</p>
          <div class="flex gap-5 items-center">
            <a (click)="scrollToContact()" class="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded cursor-pointer">CONTACTEZ-MOI</a>
            <a href="https://www.linkedin.com/mynetwork/grow/" target="_blank" class="text-gray-400 hover:text-white text-xl"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/diarafdiouf" target="_blank" class="text-gray-400 hover:text-white text-xl"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <img src="assets/photo.jpeg" alt="Diaraf Diouf" class="rounded-lg shadow-lg w-80" />
        </div>
      </div>
    </header>
  \,
  styles: [\i { font-family: 'Font Awesome 6 Brands'; }\]
})
export class HeroComponent {
  scrollToContact() { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }
}
