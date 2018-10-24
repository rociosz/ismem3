import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	public latitude : String;
	public longitude : String;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
  	this.geolocation.getCurrentPosition().then((resp) => {
	 this.latitude = resp.coords.latitude
	 this.longitude = resp.coords.longitude
	}).catch((error) => {
	  console.log('Error getting location', error);
	});
  }

  


}