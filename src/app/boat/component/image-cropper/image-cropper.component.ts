import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component({
    selector: 'app-image-cropper',
    templateUrl: './image-cropper.component.html',

})
export class ImageCropperComponent implements OnInit {
    imageChangedEvent: any = '';
    croppedImage: any = '';

    url = "./assets/img/faces/dn.jpg"
    selectedItems = []

    constructor(
        public dialogRef: MatDialogRef<ImageCropperComponent>,
    ) { }

    ngOnInit() {

    }


    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        if (this.croppedImage) {
            return true;
        } else {
            return false;
        }
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    closeDialog() {
        this.dialogRef.close();
    }
    onSubmit() {
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.croppedImage);
        if (this.croppedImage.size > 2000000) {
            alert("Taille de l'image est grande");
        } else {
            alert(this.url.split(',')[1])
            this.url.split(',')[1];
            let idCat: number[] = [];
            this.selectedItems.forEach(item => {
                let a: number = JSON.parse(item.item_id);
                idCat.push(a);
                this.closeDialog()
            });
        }
    }
}