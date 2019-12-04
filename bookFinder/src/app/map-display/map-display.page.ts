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
    
    for(let i = 0; i < 4; i++) {
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
    /*
    Creates a blank background (no floor plan) for when you
    have not chosen a floor yet
    */

    if(floor_number === 5)
      return;

    // Set title of page
    //document.getElementById("floor_name").innerHTML = this.plan_names[floor_number];
    //if (!document.getElementById("floor_number")) { return; }

    console.log("This number is " + floor_number);
    console.log("The plan name is " + this.plan_names[floor_number]);
    //document.getElementById("floor_number").innerHTML = this.plan_names[floor_number];

    // Create then adjusts the height and width of the canvas element
    let canvas = <HTMLCanvasElement>document.getElementById('canvas');
    let img = this.images[floor_number-1];
    console.log(this.images[floor_number-1]);
    canvas.height = img.height;//this is the actual code img.height;
    canvas.width = img.width;// editing this for the presentation with Sewell img.width;
    
    // Create a context from the canvas, which it moves and rotates before drawing the floor plan onto it
    let ctx = canvas.getContext("2d");

    console.log(img);
    ctx.drawImage(img,0,0);

    var xoffset = 0;
    var yoffset = 0;
    var stackNum = 0;

    switch (arr[1]) {
      case '1':
        xoffset = 4326;
        yoffset = 3395;
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
    }

    yoffset = yoffset - ((Number(arr[2]) - (stackNum + 1)) * 112)
    
    if(arr[3] == 'B') {
      yoffset = yoffset - 27;
    }

    ctx.beginPath();
    ctx.arc(xoffset, yoffset, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  decode(arr: Array<String>) {
    if(arr[0] == '2' && arr[1] == '4' && arr[2] == '35' && arr[3] == 'A') {
      //this.info = "Call Number 1: Empty" + '\n';
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
        console.log(this.bookValues);
        setTimeout(() => this.showFloor(Number(this.bookValues[0]), this.bookValues), 1000);
    /*if(!(this.bookValues[4] == '2' && this.bookValues[5] == '4' && this.bookValues[6] == '35' && this.bookValues[7] == 'A'))
        this.showFloor(Number(this.bookValues[4]));
    if(!(this.bookValues[8] == '2' && this.bookValues[9] == '4' && this.bookValues[10] == '35' && this.bookValues[11] == 'A'))
        this.showFloor(Number(this.bookValues[8]));*/
  }

}
