import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image : string;
  public fotos : any;

  constructor(public navCtrl: NavController, private camera : Camera) {
  this.fotos = [];
  }

  tomarFoto() {

    const options : CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        quality: 100,
        allowEdit: true,
        saveToPhotoAlbum: true,
        cameraDirection:1
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.fotos.push(this.base64Image);
    }, (err) => {
      console.log(err)
    });

  }

}