import { Component,  ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { MarkerOptions, Marker } from '@ionic-native/google-maps';
declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any; startLat:any; startLng:any; endLat:any; endLng:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient : HttpClient) {
  }



  ionViewDidLoad() {
    this.loadMap();
    // this.addMarker();
   }
 
   loadMap(){
 
    let latLng = new google.maps.LatLng(48.858585, 2.348217);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    
 
  }

  


}
