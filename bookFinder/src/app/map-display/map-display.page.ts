import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PinchZoomModule } from 'ngx-pinch-zoom';


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

  dataRecv = "";
  bookValues: Array<string> = ["", "", "", ""];

  public info: string = ""; //Information variable to display text on the map display page

  constructor(public activeRoute:ActivatedRoute) {
    
    for(let i = 0; i < 5; i++) {

      let plan_uri = "assets/maps/".concat(i.toString(), ".png");
      this.plans.push(plan_uri);
      this.plan_names[i] = this.plan_names[i] + " Level";
      this.images.push(this.createImage(this.plans[i], this.plan_names[i]));

    }

   }

  createImage(src: string, title: string) {

    let img = new Image();
    img.src = src;
    img.alt = title;
    img.title = title;
    return img;

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
        //var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        //var x = (canvas.width / 2) - (img.width / 2) * scale;
        //var y = (canvas.height / 2) - (img.height / 2) * scale;
        //ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        //ctx.drawImage(img, x, y, img.width * scale, img.height * scale);//ctx.drawImage(img, x , y);


        
        canvas.width = w/2;
        canvas.height = h/2
        
        
        ctx.drawImage(img, 0, 0, w/2, h/2);
        ctx.drawImage(canvas, 0, 0, w/2, h/2, 0, 0, w/4, h/4);
        ctx.drawImage(canvas, 0, 0, w/4, h/4, 0, 0, w/6, h/6);
        ctx.drawImage(canvas, 0, 0, w/6, h/6, 0, 0, w/8, h/8);
        ctx.drawImage(canvas, 0, 0, w/8, h/8, 0, 0, w/10, h/10);
        ctx.drawImage(canvas, 0, 0, w/10, h/10, 0, 0, w/12, h/12);
        /*
        ctx.drawImage(canvas, 0, 0, w/12, h/12, 0, 0, w/14, h/14);
        ctx.drawImage(canvas, 0, 0, w/14, h/14, 0, 0, w/16, h/16);
        ctx.drawImage(canvas, 0, 0, w/16, h/16, 0, 0, w/18, h/18);
        ctx.drawImage(canvas, 0, 0, w/18, h/18, 0, 0, w/20, h/20);
        ctx.drawImage(canvas, 0, 0, w/20, h/20, 0, 0, w/22, h/22);
        ctx.drawImage(canvas, 0, 0, w/22, h/22, 0, 0, w/24, h/24);
*/

        
        var xoffset = 0;
        var xShelfJump = 5;
        var yoffset = 0;
        var stackNum = 0;
    
        switch (arr[1]) {

          case '1':
            xoffset = 298;
            yoffset = 312;
            break;

          case '2':
            xoffset = 3685;
            yoffset = 3395;
            stackNum = 5;
            break;

          case '3':
            xoffset = 2340;
            yoffset = 3165;
            stackNum = 10;
            break;

          case '4':
            xoffset = 1750;
            yoffset = 3165;
            stackNum = 30;
            break;

          case '5':
            xoffset = 1135;
            yoffset = 3165;
            stackNum = 44;
            break;

          default:
            xoffset = 0;
            yoffset = 0;
            stackNum = 0;
              
        }
    
        yoffset = yoffset - ((Number(arr[2]) - (stackNum + 1)) * 11); //number is the distance between shelves

        if (stackNum > 4)
          yoffset -= xShelfJump;

        if (arr[3] == 'B') {

          yoffset = yoffset - 4;
          
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

    //console.log("imgh: " + img.height + "imgw: " + img.width);

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
