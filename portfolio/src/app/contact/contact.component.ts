import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    //action="https:dennis-maier.developerakademie.net/Portfolio/send_mail/send_mail.php" 

    console.log('send mail', this.myForm);

    let nameField = this.nameField.nativeElement;
    let emailField = this.nameField.nativeElement;
    let messageField = this.nameField.nativeElement;
    let sendButton = this.nameField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await fetch('https:dennis-maier.developerakademie.net/Portfolio/send_mail/send_mail.php',
    {
      method: 'POST',
      body: fd

    }
    );

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

}
