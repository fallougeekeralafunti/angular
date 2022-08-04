import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'app/category/service/category.service';
import { CustomeNotification } from 'app/layouts/custome-notification';
import { BoatService } from 'app/boat/service/boat.service';
import { ImageCropperComponent } from 'ngx-image-cropper';


@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css']
})
export class AddBoatComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  url = "./assets/img/faces/dn.jpg"
  msg = "";
  reader !: FileReader;
  img: any;
  boatForm!: FormGroup;
  categorys: any

  constructor(private formBuilder: FormBuilder,
    private boatServive: BoatService,
    private route: Router,
    private notification: CustomeNotification,
    private categoryService: CategoryService,
    private dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.initForm();
    this.getListCategory()
  }
  

  // -------------------------  Initial Form ------------------------

  initForm() {
    this.boatForm = this.formBuilder.group({
      boat_name: ['', Validators.required],
      boat_ref: ['', Validators.required],
      boat_capacite: ['', Validators.required],
      boat_long:['',Validators.required],
      boat_motorisation:['',Validators.required],
      boat_categorie:['',Validators.required],
      boat_desc: ['', Validators.required],
      boat_img: ['', Validators.required],      

  })
  }
  getListCategory() {
    this.categoryService.getCategorys().subscribe(response => {
      this.categorys = response;
      console.log(this.categorys)
    })
  }

  onSubmitForm(): void {

  

    const newBoat = [
      { "boat_name": this.boatForm.value.boat_name },
      { "boat_ref": this.boatForm.value.boat_ref },
      { "boat_desc": this.boatForm.value.boat_desc },
      { "boat_long": this.boatForm.value.boat_long },
      { "boat_capacite": this.boatForm.value.boat_capacite },
      { "boat_motorisation": this.boatForm.value.boat_motorisation },
      { "boat_img": this.boatForm.value.boat_img },
    



    ]


    this.boatServive.createBoat(this.boatForm.value).subscribe( res =>{
       if(res.status){
        
        this.notification.showNotification('success','top', 'left','Boat add successfuly');
       this.route.navigate(['/boat'])
       }

      error: (e) => console.error(e)
    });

  }
  openDialogImageCropper() {
    this.dialog.open(ImageCropperComponent, {
    //  width: '800px'
    }).afterClosed().subscribe(res => {

      this.notification.showNotification('success','bottom', 'right','Role add successfuly');
    });
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
