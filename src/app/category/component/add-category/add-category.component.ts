import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomeNotification } from 'app/layouts/custome-notification';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm!: FormGroup;

  constructor(private  categoryService: CategoryService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private notification: CustomeNotification
  ) { }


  ngOnInit() {
    this.initForm();
  }


  // -------------------------  Reset Form ------------------------

  onReset() { this.categoryForm.reset() }

  // -------------------------  Initial Form ------------------------

  initForm() {
    this.categoryForm = this.formBuilder.group({
      cat_name: ['', Validators.required],
      cat_description: ['', Validators.required]

    })
  }

  // -------------------------  Submit Form ------------------------

  onSubmitForm(): void {
    this.categoryService.createCategory(this.categoryForm.value).subscribe( res =>{
       if(res.status){
        this.closeDialog()
        
       }
        
      error: (e) => console.error(e)
    });

  }
   
  closeDialog(){
    this.notification.showNotification('success','bottom', 'right','Category add successfuly');
    this.dialogRef.close();
    
  }

}
