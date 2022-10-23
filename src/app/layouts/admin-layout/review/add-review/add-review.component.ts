import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor() { }
  get f(){return this.editForm.controls} 

  editForm:any
  ngOnInit(): void {
    this.editForm=new FormGroup({
      Titre:new FormControl("",[Validators.required]),
      Description:new FormControl("",[Validators.required]),
       image:new FormControl("")
     });
  }

}
