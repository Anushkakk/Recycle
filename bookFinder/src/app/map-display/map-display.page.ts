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
export class MapDisplayPage implements OnInit 
{

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
    var w = 3520;
    var h = 2376;

    /*
    if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {

      canvas.height = window.outerHeight/2;
      canvas.width = window.outerWidth;

    } else {

      canvas.height = screen.height/2;
      canvas.width = screen.width;

    }
    */
    
   var canvas = document.createElement('canvas');
   document.getElementById("canvasContainer").appendChild(canvas);
   var ctx = canvas.getContext('2d');

    img.onload = function() {
        //alert("image is loaded");
        // get the scale
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        //ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        ctx.drawImage(img, x+100 , y+100);
        
        
        var xoffset = 0;
        var xShelfJump = 4;
        var yoffset = 0;

        // low x is left, high x is right
        // low y is top, high y is bottom

        /* Testing **********/
        arr[0] = '3'; // Floor
        arr[1] = '2'; // Aisle
        arr[2] = '1'; // Range
        arr[3] = 'A'; // Side
        /********************/

        var aisleNum = +arr[1]; // Converts string to integer
        var rangeNum = +arr[2]; // Converts string to integer
        switch (arr[0]) 
        { /*
          case '0':
            switch (arr[1]) 
            {
              case '1':
                xoffset = 838;
                yoffset = 321;
                break;
            } */
          case '1':
            switch (arr[1]) 
            { 
              case '1':
                xoffset = 896; // 838
                yoffset = 320; // 321
                break;

              case '2':
                xoffset = 847; // 790
                yoffset = 320; // 321
                break;

              case '3':
                xoffset = 788; //731
                yoffset = 320;
                break;

              case '4':
                xoffset = 658; //601
                yoffset = 320;
                break;

              case '5':
                xoffset = 645; //586
                yoffset = 275;
                break;

              case '6':
                xoffset = 591; //534
                yoffset = 320;
                break;

              case '7':
                xoffset = 535; // 475
                yoffset = 320;
                break;

              default:
                xoffset = 0;
                yoffset = 0;
                break;
            }
            // Determines when to shelf jump for Floor 2
            if (aisleNum <= 3 || aisleNum >= 6) // Bookshelves 1-3, 6-7 use shelfjump
              if (rangeNum > 4)
                yoffset -= xShelfJump;
            if (aisleNum == 5) // Bookshelf 5 uses shelfjump in a different location
              if (rangeNum >= 12)
                yoffset -= xShelfJump;
            if (aisleNum == 7) // Bookshelf 7 uses shelfjump in a different location
              if (rangeNum >= 16) 
                yoffset -=xShelfJump;
            break;

          case '2':
            switch (arr[1]) 
            {

              case '1':
                xoffset = 844; // 786
                yoffset = 330;
                break;

              case '2':
                xoffset = 782; // 725
                yoffset = 330;
                break;
              
              case '3':
                xoffset = 665; // 607
                yoffset = 307;
                break;
              
              case '4':
                xoffset = 592; // 535
                yoffset = 307;
                break;
              
              case '5':
                xoffset = 533; // 475
                yoffset = 307;
                break;

              default:
                xoffset = 0;
                yoffset = 0;
                break;
            }

            // Determines when to shelf jump for Floor 3
            if (aisleNum >= 3)
            {
              if (rangeNum > 12) 
              {
                yoffset -= xShelfJump;
                if (aisleNum == 3)
                  xoffset -= 14;
              }
            }
            break;

          case '3':
            switch (arr[1]) 
            {
      
              case '1':
                xoffset = 873; // 656
                yoffset = 311;
                break;
            
              case '2':
                xoffset = 651; //439
                yoffset = 183;
                break;
              
              default:
                xoffset = 0;
                yoffset = 0;
                break;
            }
            break;
        }
        
        
        //yoffset = yoffset - ((Number(arr[2]) - (stackNum + 1)) * 5); //number is the distance between shelves

        yoffset = yoffset - (Number(arr[2]) * 10.5) + 10.5; // Number is the distance between the shelves.

        

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

    
    //COMMENTED THIS OUT TO CHECK IF RESOLUTION PROBLEM CAN BE SOLVED BY COMPLETING THIS STEP EARLIER
    
    if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {

      canvas.height = h;
      canvas.width = w;

    } else {

      canvas.height = h;
      canvas.width = w;

      //screen.width or screen.height/2

    }
    
    
    //img.height = canvas.height;
    //img.width = canvas.width;

    console.log("imgh: " + canvas.height + "imgw: " + canvas.width);
  }


  decode(arr: Array<String>) {
      this.info = this.info + "Call Number:" + '\n';
      this.info.fontcolor("white");
      this.info = this.info + '\t' + "Floor: " + arr[0] + '\n';
      this.info = this.info + '\t' + "Aisle #: " + arr[1] + '\n';
      this.info = this.info + '\t' + "Range: " + arr[2] + '\n';
      this.info = this.info + '\t' + "Side: " + arr[3] + '\n';
  }

  ngOnInit() {
    
    this.dataRecv = this.activeRoute.snapshot.paramMap.get('data');
    this.dataRecv = this.dataRecv.substr(1);
    this.bookValues = this.dataRecv.split(",", 12);
    this.decode(this.bookValues);
    
    setTimeout(() => this.showFloor(Number(this.bookValues[0]), this.bookValues), 500);
  }

}
