import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryForm!: FormGroup;

  constructor(private categoryService: CategoryService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }


  ngOnInit() {
    this.initForm();
  }


  // -------------------------  Reset Form ------------------------

  onReset() { this.categoryForm.reset() }

  // -------------------------  Initial Form ------------------------

  initForm() {
    this.categoryForm = this.formBuilder.group({
      cat_id: [this.data.cat_id, Validators.required],
      cat_name: [this.data.cat_name, Validators.required],
      cat_description: [this.data.cat_description, Validators.required]
    })
  }

  // -------------------------  Submit Form ------------------------

  onSubmitForm(): void {
    this.categoryService.updateCategory(this.categoryForm.value).subscribe( res =>{
        this.closeDialog(res.status);
    });

  }
   
  closeDialog(status){
    this.dialogRef.close(status);
  }

}
