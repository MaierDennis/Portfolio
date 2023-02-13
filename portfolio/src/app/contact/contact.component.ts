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

  sendMailUrl:string = 'https://maier-dennis.de/send_mail/send_mail.php'
  
  
  send :boolean = false;
  sendSuccess : boolean = false;
  failed : boolean = false;
  
    async sendMail(){
      this.failed = false;
      this.sendSuccess = false;
      this.send = true;
      let fd = new FormData();
      this.setFormData(fd);
      await this.sendData(fd);
      this.resetInputs();
      this.send = false;
      if(!this.failed){
        this.sendSuccess = true;
      }
    }
  
    async sendData(fd:FormData){
      try{
        let response = await fetch(this.sendMailUrl, {
          method: 'POST',
          body: fd
        });
        if(!response.ok){
          throw await response.json();
        }
      }catch(e){
        this.failed = true;
      }
    }
  
    setFormData(fd: FormData){
      fd.append('name', this.nameField.nativeElement.value);
      fd.append('email', this.emailField.nativeElement.value);
      fd.append('message', this.messageField.nativeElement.value);
    }
  
    resetInputs(){
      this.nameField.nativeElement.value = '';
      this.emailField.nativeElement.value = '';
      this.messageField.nativeElement.value = '';
    }
}

