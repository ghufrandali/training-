import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation, Position } from '@capacitor/geolocation';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgUrl:string;
  coordinates:Position;
  constructor() {}



   takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      saveToGallery:true,
      resultType: CameraResultType.DataUrl
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imgUrl= image.dataUrl;



    // Can be set to the src of an image now

  };


  printCurrentPosition = async () => {
   this.coordinates = await Geolocation.getCurrentPosition();

  console.log( this.coordinates.coords.latitude);
  console.log( this.coordinates.coords.longitude);

};

  ngOnInit(){
    SplashScreen.show({
      showDuration: 2000,
      autoHide: true
    });
}


show(){
  SplashScreen.show({
    showDuration: 2000,
  });

  console.log('splash screen');

}



}
