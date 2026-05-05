import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../../../core/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \
    <section id="contact" class="py-24 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-extrabold uppercase mb-4">Contact</h2>
        <p class="text-gray-400 mb-6 text-sm">
          📧 Email : <a href="mailto:diaraf1993diouf@gmail.com" class="text-lime-400">diaraf1993diouf@gmail.com</a><br/>
          📱 Téléphone : <a href="tel:+221773509559" class="text-lime-400">+221 77 350 9559</a>
        </p>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4 max-w-md">
          <input type="text" placeholder="Nom complet" formControlName="name" class="w-full bg-[#1c1c1c] p-3 rounded" />
          <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-red-400 text-sm">Nom requis</div>
          <input type="email" placeholder="Email" formControlName="email" class="w-full bg-[#1c1c1c] p-3 rounded" />
          <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-red-400 text-sm">Email valide requis</div>
          <textarea placeholder="Message" rows="4" formControlName="message" class="w-full bg-[#1c1c1c] p-3 rounded"></textarea>
          <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="text-red-400 text-sm">Message requis</div>
          <button type="submit" [disabled]="contactForm.invalid || isSending" class="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded disabled:opacity-50">{{ isSending ? 'Envoi...' : 'ENVOYER' }}</button>
          <div *ngIf="successMessage" class="text-green-400 text-sm">{{ successMessage }}</div>
          <div *ngIf="errorMessage" class="text-red-400 text-sm">{{ errorMessage }}</div>
        </form>
      </div>
    </section>
  \
})
export class ContactComponent {
  contactForm: FormGroup;
  isSending = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;
    this.isSending = true;
    this.emailService.sendEmail(this.contactForm.value).subscribe({
      next: () => { this.successMessage = 'Message envoyé !'; this.contactForm.reset(); this.isSending = false; },
      error: () => { this.errorMessage = 'Erreur, réessayez.'; this.isSending = false; }
    });
  }
}
