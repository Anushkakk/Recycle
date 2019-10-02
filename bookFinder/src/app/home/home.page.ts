import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MapDisplayPage } from '../map-display/map-display.page';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  img_src = "";
  plans: Array<string> = [];
  plan_names: Array<string> = ["Lower", "First", "Second", "Third", "Fourth"];
  images = [];
  current_floor = 5;
  bookValues: Array<string> = ["", "", "", ""]; 
  bookValueString = "";
  public rootPage: any = HomePage;

  public CALL_NUM_ONE: string;
  public CALL_NUM_TWO: string;
  public CALL_NUM_THREE: string;

  callNumber_one: string = ""; //This value comes from the input for first call number
  callNumber_two: string = ""; //This value comes from the input for second call number
  callNumber_three: string = ""; //This value comes from the input for third call number

  //These values come from the dropdown menu below each input bar.  They indicate
  //which collection the desired book is located within.  They are set to "General
  //Collection" by default.
  collection_one: string   = "General Collection";
  collection_two: string   = "General Collection";
  collection_three: string = "General Collection";

  data: any;
  navCtrl: any;
  storage: any;

  constructor(public http: Http, private router: Router)
  {
    const routes: Routes = [
      { path: 'home', component: HomePage },
      { path: 'map-display', component: MapDisplayPage },
    ];
    this.http = http;
    for(let i = 0; i < 5; i++) {
      let plan_uri = "assets/maps/".concat(i.toString(), ".png");
      this.plans.push(plan_uri);
      this.plan_names[i] = this.plan_names[i] + " Level";
      this.images.push(this.createImage(this.plans[i], this.plan_names[i]));
    }
    console.log(this.images);
  }
  

  getCollection(){
    //console.log(this.collection_one);
  }

  normalize() {
    this.CALL_NUM_ONE = this.callNumber_one;
    this.CALL_NUM_ONE = this.CALL_NUM_ONE.replace(/ /g, "");
  }

  getSrc(){
    return this.img_src;
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
    console.log(this.images[floor_number-1]);
    canvas.height = 500;//this is the actual code img.height;
    canvas.width = 1000;// editing this for the presentation with Sewell img.width;
    // Create a context from the canvas, which it moves and rotates before drawing the floor plan onto it
    let ctx = canvas.getContext("2d");
    ctx.scale(.1,.1);
    //ctx.translate(canvas.width,0);
    //ctx.rotate(90*Math.PI/180);
    //this.navCtrl.push('map-display', floor_number-1);
    ctx.drawImage(img,0,0);
  }

  ionViewDidLeave() {
    this.current_floor = 5;
  }

  createImage(src: string, title: string) {
    let img = new Image();
    img.src = src;
    img.alt = title;
    img.title = title;
    return img;
  }

  async openDetails(floorNum: any) {
    await this.storage.set('floorNum', floorNum);
    await this.navCtrl.navigateForward(['/currency-details/tabs-currency/currency-overview']);
  }

  load() {
    this.normalize();
    //This is a random variable. Pay no attention to it. It's here because the
    //http.post method needs two variables. It doesn't do anything.
    var randomVariable = 0;

    var obj = {callnum: this.CALL_NUM_ONE, collection: this.collection_one};
    
    this.http.post("http://bookfind.hpc.tcnj.edu/retrieve-data.php", JSON.stringify(obj))
    .subscribe (data => {
      console.log(JSON.stringify(data['_body']));
      //First index is floor number, second is aisle, third range, fourth is side
      this.bookValueString = data['_body'];
      console.log(this.bookValueString);
      this.bookValues = this.bookValueString.split(",", 4);
      console.log(this.bookValues);
      //this.showFloor(Number(this.CALL_NUM_ONE));
      this.showFloor(Number(this.bookValues[0]));
      this.data = data['_body'];
      //alert(this.data);

    },
    (error : any) =>
    {
      //If the connection doesn't work, an error message is sent.
      //alert(error); 
    });
    

    //This is an HTTP request, which links to a PHP file that queries the database
    //for relevant information.
    this.http.get("http://bookfind.hpc.tcnj.edu/retrieve-data.php", JSON.stringify(randomVariable))
    .subscribe(data => 
    {
      this.data = data['_body'];
      //Right now, we're "alerting" the data - displaying it in a dialog box.
    },
    (error : any) =>
    {
      //If the connection doesn't work, an error message is sent.
      //alert(error);
    });
  }
}
