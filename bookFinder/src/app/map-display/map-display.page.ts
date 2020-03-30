import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
//import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  
  selector: 'app-map-display',
  templateUrl: './map-display.page.html',
  styleUrls: ['./map-display.page.scss'],

})
export class MapDisplayPage implements OnInit {

  navCtrl: any;
  images = [];
  current_floor = 5;
  plans: Array<string> = [];
  plan_names: Array<string> = ["Lower", "First", "Second", "Third", "Fourth"];
  id: any;
  img_src = "";

  dataRecv = "";
  bookValues: Array<string> = ["", "", "", ""];

  public info: string = ""; //Information variable to display text on the map display page

  constructor(public activeRoute:ActivatedRoute, public modalController: ModalController) {
    
    for(let i = 0; i < 5; i++) {

      let plan_uri = "assets/maps/".concat(i.toString(), ".png");
      this.plans.push(plan_uri);
      this.plan_names[i] = this.plan_names[i] + " Level";
      this.images.push(this.createImage(this.plans[i], this.plan_names[i]));

    }

  }
/*
  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.img_src // required
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
*/
  createImage(src: string, title: string) {

    let img = new Image();
    img.src = src;
    img.alt = title;
    img.title = title;
    return img;

  }

  getSrc() {

    return this.img_src;

  }

  showFloor(floor_number: number, arr: Array<String>) {

    if(floor_number === 5)
      return;

    // Set title of page
    //document.getElementById("floor_name").innerHTML = this.plan_names[floor_number];
    //if (!document.getElementById("floor_number")) { return; }

    //console.log("This number is " + floor_number);
    //console.log("The plan name is " + this.plan_names[floor_number]);
    //document.getElementById("floor_number").innerHTML = this.plan_names[floor_number];

    // Create then adjusts the height and width of the canvas element
    this.img_src = this.images[floor_number].src;    
    var canvas = document.createElement('canvas');
    document.getElementById("canvasContainer").appendChild(canvas);
    
    var ctx = canvas.getContext('2d');
    var img = document.createElement('img');
    
    img.onload = function() {

        //alert("image is loaded");
        // get the scale
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);//ctx.drawImage(img, x , y);
        
        
        
        var xoffset = 0;
        var xShelfJump = 4;
        var yoffset = 0;
        var stackNum = 0;
        // low x is left, high x is right
        // low y is top, high y is bottom

        /* Testing **********/
        arr[1] = '7'; // Aisle
        arr[2] = '1'; // Range
        arr[3] = 'A'; // Side
        /********************/

        switch (arr[1]) { 

          case '1':
            xoffset = 680;  //298
            yoffset = 320;
            //yoffset = 312;  //312
            //stackNum = 15;
            break;

          case '2':
            xoffset = 632; //3685
            yoffset = 320;
            //yoffset = 312; //3395
            //stackNum = 15;   //5
            break;

          case '3':
            xoffset = 573; //2340
            yoffset = 320; //3165
            //stackNum = 10;  //10
            break;

          case '4':
            xoffset = 443; //1750
            yoffset = 320; //3165
            //stackNum = 30;  //30
            break;

          case '5':
            xoffset = 428; //1135
            yoffset = 274; //3165
            //stackNum = 44;  //44
            break;

          case '6':
            xoffset = 376;
            yoffset = 320;
            break;

          case '7':
            xoffset = 317;
            yoffset = 320;
            break;

          default:
            xoffset = 0;    //0
            yoffset = 0;    //0
            stackNum = 0;   //0
              
        }
        
        //yoffset = yoffset - ((Number(arr[2]) - (stackNum + 1)) * 5); //number is the distance between shelves

        yoffset = yoffset - (Number(arr[2]) * 10.5) + 10.5;

        // FUTURE PLANS:
        // I need to find a way to convert the contents of arr to integers, so I can use inequalities to simplify this a lot

        if (arr[1] == '1' || arr[1] == '2' || arr[1] == '3' || arr[1] == '6' || arr[1] == '7') // Bookshelves 1-3, 6-7 use shelfjump
          if (arr[2] != '1' && arr[2] != '2' && arr[2] != '3' && arr[2] != '4') // The first four bookcases in the range aren't affected by shelfjump
            yoffset -= xShelfJump;
        if (arr[1] == '5') // Bookshelf 5 uses shelfjump in a different location
          if (arr[2] == '12' || arr[2] == '13' || arr[2] == '14' || arr[2] == '15' || arr[2] == '16' || arr[2] == '17')
            yoffset -= xShelfJump;
        if (arr[1] == '7') // Bookshelf 7 uses shelfjump in a different location
          if (arr[2] == '16' || arr[2] == '17' || arr[2] == '18' || arr[2] == '19' || arr[2] == '20' || arr[2] == '21' || arr[2] == '22')
            yoffset -=xShelfJump;

        if (arr[3] == 'B') {

          yoffset = yoffset - 6.5; // 4
          
        }
    
        console.log("xOffSet: " + xoffset + " yOffset: " + yoffset);
        console.log("imgh" + img.height + " imgw" + img.width);
        ctx.beginPath(); //Canvas/Image dimensions: 375(width) by 406(height) 
        ctx.arc(xoffset, yoffset, 4, 0, 2 * Math.PI);//ctx.arc(xoffset, yoffset, 35, 0, 2 * Math.PI); 
        ctx.fillStyle = "red";
        ctx.fill();

    };

    img.src = this.images[floor_number].src;
    
    if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {

      canvas.height = window.outerHeight/2;
      canvas.width = window.outerWidth;

    } else {

      canvas.height = screen.height/2;
      canvas.width = screen.width;

    }
    
    //img.height = canvas.height;
    //img.width = canvas.width;

    console.log("imgh: " + canvas.height + "imgw: " + canvas.width);
  }


  decode(arr: Array<String>) {
    
    if(arr[0] == '2' && arr[1] == '4' && arr[2] == '35' && arr[3] == 'A') {
      
      this.info = "Call Number 1: Empty" + '\n';

    }

    else {

      this.info = this.info + "Call Number:" + '\n';
      this.info.fontcolor("white");
      this.info = this.info + '\t' + "Floor: " + arr[0] + '\n';
      this.info = this.info + '\t' + "Aisle #: " + arr[1] + '\n';
      this.info = this.info + '\t' + "Range: " + arr[2] + '\n';
      this.info = this.info + '\t' + "Side: " + arr[3] + '\n';
    
    }
/*
    if(arr[4] == '2' && arr[5] == '4' && arr[6] == '35' && arr[7] == 'A') {
      //this.info = this.info + "Call Number 2: Empty" + '\n';
    }
    else {
      this.info = this.info + "Call Number 2:" + '\n';
      this.info = this.info + '\t' + "Floor: " + arr[4] + '\n';
      this.info = this.info + '\t' + "Aisle #: " + arr[5] + '\n';
      this.info = this.info + '\t' + "Range: " + arr[6] + '\n';
      this.info = this.info + '\t' + "Side: " + arr[7] + '\n';
    }

    if(arr[8] == '2' && arr[9] == '4' && arr[10] == '35' && arr[11] == 'A') {
      //this.info = this.info + "Call Number 3: Empty" + '\n';
    }
    else {
      this.info = this.info + "Call Number 3:" + '\n';
      this.info = this.info + '\t' + "Floor: " + arr[8] + '\n';
      this.info = this.info + '\t' + "Aisle #: " + arr[9] + '\n';
      this.info = this.info + '\t' + "Range: " + arr[10] + '\n';
      this.info = this.info + '\t' + "Side: " + arr[11] + '\n';
    }
    */
  }

  ngOnInit() {
    
    this.dataRecv = this.activeRoute.snapshot.paramMap.get('data');
    this.dataRecv = this.dataRecv.substr(1);
    this.bookValues = this.dataRecv.split(",", 12);
    this.decode(this.bookValues);
    
    if(!(this.bookValues[0] == '2' && this.bookValues[1] == '4' && this.bookValues[2] == '35' && this.bookValues[3] == 'A'))
        //console.log(this.bookValues);
    setTimeout(() => this.showFloor(Number(this.bookValues[0]), this.bookValues), 1000);
    /*if(!(this.bookValues[4] == '2' && this.bookValues[5] == '4' && this.bookValues[6] == '35' && this.bookValues[7] == 'A'))
        this.showFloor(Number(this.bookValues[4]));
    if(!(this.bookValues[8] == '2' && this.bookValues[9] == '4' && this.bookValues[10] == '35' && this.bookValues[11] == 'A'))
        this.showFloor(Number(this.bookValues[8]));*/

  }

  /*load() {

    this.router.navigateByUrl('map-display/');


  }
*/
}
