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
  bookValues: Array<string> = ["", "", "", ""]; 
  bookValueString = "";
  public rootPage: any = HomePage;

  public CALL_NUM_ONE: string;

  callNumber_one: string = ""; //This value comes from the input for first call number

  //These values come from the dropdown menu below each input bar.  They indicate
  //which collection the desired book is located within.  They are set to "General
  //Collection" by default.
  collection_one: string   = "General Collection";

  data: any;
  navCtrl: any;
  storage: any;

  constructor(public http: Http, private router: Router) {
    const routes: Routes = [
      { path: 'home', component: HomePage },
      { path: 'map-display', component: MapDisplayPage },
    ];
    this.http = http;
  }

  normalize() {
    this.CALL_NUM_ONE = this.callNumber_one;
    this.CALL_NUM_ONE = this.CALL_NUM_ONE.replace(/ /g, "");

    //Parse through string until first number, insert space before first number
    //Continue parsing until . or end, if . place space before .
  }

  load() {
    this.normalize();
    var obj = {callnum: this.CALL_NUM_ONE, collection: this.collection_one};
    
    this.http.post("http://bookfind.hpc.tcnj.edu/retrieve-data.php", JSON.stringify(obj))
    .subscribe (data => {
      this.bookValueString = data['_body'];

      console.log(this.bookValueString);

      this.router.navigateByUrl('map-display/:' + this.bookValueString);
    },
    (error : any) =>
    {
      //If the connection doesn't work, an error message is sent.
      alert(error); 
    });

    
  }
}