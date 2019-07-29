import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      description: new FormControl()
   });
  }

  save() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
}

}
