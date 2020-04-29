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

      let canvas = <HTMLCanvasElement>document.getElementById('canvas');
    let img = this.images[floor_number];
    if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {

      canvas.height = window.outerHeight/2;
      canvas.width = window.outerWidth;

    } else {

      canvas.height = screen.height/2;
      canvas.width = screen.width;

    }
    
    // Create a context from the canvas, which it moves and rotates before drawing the floor plan onto it
    let ctx = canvas.getContext("2d");
    //ctx.translate(canvas.width,0);
    //ctx.rotate(90*Math.PI/180);
    ctx.scale(0.07, 0.1);
        
    ctx.drawImage(img,0,0); // 0, 0
        
        
        var xoffset = 0;
        var xShelfJump = 30; // 4
        var yoffset = 0;

        // low x is left, high x is right
        // low y is top, high y is bottom

        var aisleNum = +arr[1]; // Converts string to integer
        var rangeNum = +arr[2]; // Converts string to integer
        switch (arr[0])
        { 
          case '1':
            switch (arr[1]) 
            {
              case '1':
                xoffset = 838;
                yoffset = 321;
                break;
            }
          case '2':
            switch (arr[1]) // The aisle
            { 
              case '1':
                xoffset = 4890; // 896
                yoffset = 3285; // 320
                break;

              case '2': // 896
                xoffset = 4380; // 790
                yoffset = 3285; // 321
                break;

              case '3':
                xoffset = 3775; //731
                yoffset = 3285;
                break;

              case '4':
                xoffset = 2440; //601
                yoffset = 3285;
                break;

              case '5':
                xoffset = 2293; //586
                yoffset = 2813;
                break;

              case '6':
                xoffset = 1770; //534
                yoffset = 3285;
                break;

              case '7':
                xoffset = 1154; // 475
                yoffset = 3285;
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

          case '3':
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

          case '4':
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

        yoffset = yoffset - (Number(arr[2]) * 109) + 108; // Number is the distance between the shelves.
        
        
        // 10.5, 10.5

        

        if (arr[3] == 'B') {

          yoffset = yoffset - 35; 
          
        }

        //6.5
    
        console.log("xOffSet: " + xoffset + " yOffset: " + yoffset);
        console.log("imgh" + img.height + " imgw" + img.width);
        ctx.beginPath(); //Canvas/Image dimensions: 375(width) by 406(height) 
        ctx.arc(xoffset, yoffset, 40, 0, 2 * Math.PI);// 325, 275, 5, 0, 2 * Math.Pi
        
        ctx.fillStyle = "red";
        ctx.fill();

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

    /* Testing **********/
    this.bookValues[0] = '2'; // Floor
    this.bookValues[1] = '1'; // Aisle
    this.bookValues[2] = '1'; // Range
    this.bookValues[3] = 'A'; // Side
    /********************/
    
    setTimeout(() => this.showFloor(Number(this.bookValues[0]), this.bookValues), 500);
  }

}
