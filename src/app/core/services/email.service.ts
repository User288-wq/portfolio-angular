import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private serviceId = environment.emailJs.serviceId;
  private templateId = environment.emailJs.templateId;

  sendEmail(formData: { name: string; email: string; message: string }) {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Diaraf Diouf',
    };
    return emailjs.send(this.serviceId, this.templateId, templateParams);
  }
}
