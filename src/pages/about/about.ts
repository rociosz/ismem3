import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    marker: any;

    public latitude : any;
    public longitude : any;

    constructor(public navCtrl: NavController, private geolocation: Geolocation) {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //  this.latitude = resp.coords.latitude
        //  this.longitude = resp.coords.longitude
        //
        //
        //
        //
        // }).catch((error) => {
        //   console.log('Error getting location', error);
        // });


    }

    ionViewDidLoad(){
        this.loadMap();
    }

    loadMap(){

        this.geolocation.getCurrentPosition().then((resp) => {

            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 19,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            this.marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
                title: 'Mi posicion'
            });


        }).catch((error) => {
            console.log('Error getting location', error);
        });


        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {

            let latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            this.marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
                title: 'Current Location'
            });
        });




    }




}