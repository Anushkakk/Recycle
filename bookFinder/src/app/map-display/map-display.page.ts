import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PinchZoomModule } from 'ngx-pinch-zoom';


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
    
    img.onload = function() {

        //alert("image is loaded");
        // get the scale
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);//ctx.drawImage(img, x , y);
        
        // xoffset is the x coordinate of the marker
        // Low xoffset is the left of the map
        // High xoffset is the right of the map
        var xoffset = 0; 

        // yoffset is the y coordinate of the marker
        // Low yoffset is top of the map
        // High yoffset is bottom of the map
        var yoffset = 0;

        // A shelf jump is when there is a walkway between shelves, and we need to account for this gap
        var xShelfJump = 4;

        // Converts the aisle and range (strings to ints)
        var floorNum = +arr[0]; // Converts string to integer
        var aisleNum = +arr[1]; // Converts string to integer
        var rangeNum = +arr[2]; // Converts string to integer

        switch (arr[0]) // Check Floors
        { /*
          case '0':
            switch (arr[1]) 
            {
              case '1':
                xoffset = 838;
                yoffset = 321;
                break;
            } */
          case '1': // 2nd Floor

            switch (arr[1]) // Check aisles of the 2nd Floor
            { 
              case '1': // 2nd Floor, Aisle 1
                xoffset = 896;
                yoffset = 320;
                break;

              case '2': // 2nd Floor, Aisle 2
                xoffset = 847;
                yoffset = 320;
                break;

              case '3': // 2nd Floor, Aisle 3
                xoffset = 788;
                yoffset = 320;
                break;

              case '4': // 2nd Floor, Aisle 4
                xoffset = 658;
                yoffset = 320;
                break;

              case '5': // 2nd Floor, Aisle 5
                xoffset = 645;
                yoffset = 275;
                break;

              case '6': // 2nd Floor, Aisle 6
                xoffset = 591;
                yoffset = 320;
                break;

              case '7': // 2nd Floor, Aisle 7
                xoffset = 535;
                yoffset = 320;
                break;

              default: // 2nd Floor Default
                xoffset = 0;
                yoffset = 0;
                break;
            }

            // Determines which locations on the 2nd Floor require a shelf jump
            if (aisleNum <= 3 || aisleNum >= 6) // Aisles 1-3, 6-7 require a shelf jump
              if (rangeNum > 4)
                yoffset -= xShelfJump;
            if (aisleNum == 5) // Aisle 5 requires a shelf jump
              if (rangeNum >= 12)
                yoffset -= xShelfJump;
            if (aisleNum == 7) // Aisle 7 requires a shelf jump
              if (rangeNum >= 16) 
                yoffset -=xShelfJump;
            break; 

          case '2': // 3rd Floor

            switch (arr[1]) // Checks aisles of the 3rd Floor
            {

              case '1': // 3rd Floor, Aisle 1
                xoffset = 844;
                yoffset = 330;
                break;

              case '2': // 3rd Floor, Aisle 2
                xoffset = 782;
                yoffset = 330;
                break;
              
              case '3': // 3rd Floor, Aisle 3
                xoffset = 665;
                yoffset = 307;
                break;
              
              case '4': // 3rd Floor, Aisle 4
                xoffset = 592;
                yoffset = 307;
                break;
              
              case '5': // 3rd Floor, Aisle 5
                xoffset = 533;
                yoffset = 307;
                break;

              default: // 3rd Floor Default
                xoffset = 0;
                yoffset = 0;
                break;
            }

            // Determines which locations on the 3rd Floor require a shelf jump
            if (aisleNum >= 3) // Aisles 3-5 require a shelf jump
              if (rangeNum > 12) {
                yoffset -= xShelfJump;
                if (aisleNum == 3)
                  xoffset -= 14;
              }
            break;

          case '3': // 4th Floor

            switch (arr[1]) // Checks aisles of the 4th Floor
            {
      
              case '1': // 4th Floor, Aisle 1
                xoffset = 873;
                yoffset = 311;
                break;
            
              case '2': // 4th Floor, Aisle 2
                xoffset = 651;
                yoffset = 183;
                break;
              
              default: // 4th Floor Default
                xoffset = 0;
                yoffset = 0;
                break;
            }
            break;
        }

        //yoffset = yoffset - ((Number(arr[2]) - (stackNum + 1)) * 5); // Old Formula

        // Calculating marker placement based on the range
        yoffset = yoffset - (Number(arr[2]) * 10.5) + 10.5; // This number is the distance between the shelves.

        // If we are using Side B, then we decrement the yoffset to reflect that (we move it to the other side of the bookshelf)
        if (arr[3] == 'B') 
        {
          yoffset = yoffset - 6.5;
        }
    
        // Prints/outputs the x and y coordinates of the marker
        console.log("xOffSet: " + xoffset + " yOffset: " + yoffset);
        console.log("imgh" + img.height + " imgw" + img.width);
        ctx.beginPath(); //Canvas/Image dimensions: 375(width) by 406(height) 
        ctx.arc(xoffset, yoffset, 4, 0, 2 * Math.PI);//ctx.arc(xoffset, yoffset, 35, 0, 2 * Math.PI); 
        ctx.fillStyle = "red";
        ctx.fill();

    };

    console.log("Floor Number: " + floor_number);
    img.src = this.images[floor_number+1].src; // change to floor_number to stop hard-coding
    
    if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {

      canvas.height = window.outerHeight/2;
      canvas.width = window.outerWidth;

    } else {

      canvas.height = screen.height/2;
      canvas.width = screen.width;

    }
    
    //img.height = canvas.height;
    //img.width = canvas.width;

    //console.log("imgh: " + img.height + "imgw: " + img.width);

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
    
   // if(!(this.bookValues[0] == '2' && this.bookValues[1] == '4' && this.bookValues[2] == '35' && this.bookValues[3] == 'A'))
    console.log(this.bookValues);
    
    /* Testing **********/
    this.bookValues[0] = '2'; // Floor
    this.bookValues[1] = '2'; // Aisle
    this.bookValues[2] = '2'; // Range
    this.bookValues[3] = 'A'; // Side
    /********************/

    
    //floor_number = floorNum;




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
