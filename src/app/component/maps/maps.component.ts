/// <reference types="@types/googlemaps" />
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.css']
})
export class MapsComponent implements OnInit {

  //Maps to get the current location
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search_from")
  public searchElementRef_from: ElementRef;
  @ViewChild("search_to")
  public searchElementRef_to: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
     // //To get the current location
    // if (navigator)  {
    // navigator.geolocation.getCurrentPosition( pos => {
    //     this.longitude = +pos.coords.longitude;
    //     this.latitude = +pos.coords.latitude;
    //   });
    // }
   }

   ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();
    //this.calcDistance (fromLat, fromLng, toLat, toLng);

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete_from = new google.maps.places.Autocomplete(this.searchElementRef_from.nativeElement, {
        types: ["address"]
      });
      let autocomplete_to = new google.maps.places.Autocomplete(this.searchElementRef_to.nativeElement, {
        types: ["address"]
      });      

      //Place the pointer the search location for the From input tag
      autocomplete_from.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place_from: google.maps.places.PlaceResult = autocomplete_from.getPlace();

          //verify result
          if (place_from.geometry === undefined || place_from.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom to the search location
          this.latitude = place_from.geometry.location.lat();
          this.longitude = place_from.geometry.location.lng();
          this.zoom = 12;
          let fromLat = this.latitude;
          let fromLng = this.longitude;
        });
      });

      //Place the pointer the search location for the To input tag
      autocomplete_to.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place_to: google.maps.places.PlaceResult = autocomplete_to.getPlace();
          
          //verify result
          if (place_to.geometry === undefined || place_to.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom To the search location
          this.latitude = place_to.geometry.location.lat();
          this.longitude = place_to .geometry.location.lng();
          this.zoom = 12; 
          let toLat = this.latitude;
          let toLng = this.longitude;        
        });     

      });

     
      
    });

  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

     
  private calcDistance (fromLat, fromLng, toLat, toLng) {
    return google.maps.geometry.spherical.computeDistanceBetween(
    new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
  }

}
