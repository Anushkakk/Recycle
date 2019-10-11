import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  showFloor(floor_number: number) {
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
    img.height = 1000;
    img.width = 600;
    console.log(this.images[floor_number-1]);
    canvas.height = img.height;//this is the actual code img.height;
    canvas.width = img.width;// editing this for the presentation with Sewell img.width;
    
    // Create a context from the canvas, which it moves and rotates before drawing the floor plan onto it
    let ctx = canvas.getContext("2d");
    ctx.scale(.1,.25);
    //ctx.translate(canvas.width,0);
    //ctx.rotate(90*Math.PI/180);
    console.log(img);
    ctx.drawImage(img,0,0);
    //ctx.fillRect(0, 0, 2000, 2000);
  }

  decode(arr: Array<String>) {
    if(arr[0] == '2' && arr[1] == '4' && arr[2] == '35' && arr[3] == 'A') {
      //this.info = "Call Number 1: Empty" + '\n';
    }
    else {
      this.info = this.info + "Call Number 1:" + '\n';
      this.info = this.info + '\t' + "Floor: " + arr[0] + '\n';
      this.info = this.info + '\t' + "Aisle #: " + arr[1] + '\n';
      this.info = this.info + '\t' + "Range: " + arr[2] + '\n';
      this.info = this.info + '\t' + "Side: " + arr[3] + '\n';
    }

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
  }

  ngOnInit() {
    this.dataRecv = this.activeRoute.snapshot.paramMap.get('data');
    this.dataRecv = this.dataRecv.substr(1);
    this.bookValues = this.dataRecv.split(",", 12);
    this.decode(this.bookValues);
    
    if(!(this.bookValues[0] == '2' && this.bookValues[1] == '4' && this.bookValues[2] == '35' && this.bookValues[3] == 'A'))
        console.log(Number(this.bookValues[0]));
        setTimeout(() => this.showFloor(Number(this.bookValues[0])), 200);
    if(!(this.bookValues[4] == '2' && this.bookValues[5] == '4' && this.bookValues[6] == '35' && this.bookValues[7] == 'A'))
        this.showFloor(Number(this.bookValues[4]));
    if(!(this.bookValues[8] == '2' && this.bookValues[9] == '4' && this.bookValues[10] == '35' && this.bookValues[11] == 'A'))
        this.showFloor(Number(this.bookValues[8]));
  }

}
