import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted:Boolean = false;
  success:Boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(5)]],
      message: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.messageForm.controls);
    this.submitted = true;

    if(this.messageForm.invalid){
      return;
    }
    this.success = true;
  }

  ngOnInit() {
  }

}
