import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-froms',
  templateUrl: './reactive-froms.component.html',
  styleUrls: ['./reactive-froms.component.scss']
})
export class ReactiveFromsComponent implements OnInit {
  registerFrom: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerFrom = this.fb.group({
      firstName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerFrom.invalid) {
      return;
    }
  }

}
