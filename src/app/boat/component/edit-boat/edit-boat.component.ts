import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomeNotification } from 'app/layouts/custome-notification';
import { BoatService } from 'app/boat/service/boat.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-boat',
  templateUrl: './edit-boat.component.html',
  styleUrls: ['./edit-boat.component.css']
})
export class EditBoatComponent implements OnInit {

  url = "./assets/img/faces/cr.jpg"
  msg = "";
  reader !: FileReader;
  img: any;
  boatForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private boatServive: BoatService,
    private route: Router,
    private notification: CustomeNotification,
    public dialogRef: MatDialogRef<EditBoatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.initForm();
  }

  // -------------------------  Initial Form ------------------------

  initForm() {
    // alert(JSON.stringify(this.data))
    this.boatForm = this.formBuilder.group({
      mov_id: [this.data?.mov_id, Validators.required],
      mov_title: [this.data?.mov_title, Validators.required],
      mov_trailer: [this.data?.mov_trailer, Validators.required],
      mov_reference: [this.data?.mov_reference, Validators.required],
      mov_author: [this.data?.mov_author, Validators.required],
      mov_duration: [this.data?.mov_duration, Validators.required],
      mov_classification: [this.data?.mov_classification, Validators.required],
      mov_description: [this.data?.mov_description, Validators.required],
    })
  }

  onSubmitForm(): void {

    // alert(JSON.stringify(this.boatForm.value))
    this.boatServive.updateBoat(this.boatForm.value).subscribe(res => {
      if (res.status) {
        this.closeDialog(res.status)
      }

      error: (e) => console.error(e)
    });

  }
  closeDialog(status){
    this.dialogRef.close(status);
  }
  selectFile(event: any) { //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
  }


  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.url = reader.result as string;

        // this.myForm.patchValue({
        //   fileSource: reader.result
        // });

      };

    }
  }
}
