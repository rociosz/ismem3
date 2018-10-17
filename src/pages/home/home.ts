import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public base64Image: String;
	
  constructor(public navCtrl: NavController, private camera : Camera) {

  }

  tomarFoto() {

  	const options : CameraOptions = {
  		destinationType : this.camera.DestinationType.DATA_URL,
  		encondingType : this.camera.EncodingType.JPEG,
  		mediaType : this.camera.MediaType.PICTURE
  	}
  	this.camera.getPicture(options).then((imageData) => {
	 	this.base64Image = 'data:image/jpeg;base64,' + imageData;
	}, (err) => {
		console.log(err)
	});

  }

}