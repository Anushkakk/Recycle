import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MapDisplayPage } from '../map-display/map-display.page';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';

// :: splitAt = number => Array<any>|string => Array<Array<any>|string>
const splitAt = index => x => [x.slice(0, index), x.slice(index)]

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
    var cutterNum = 0;
    var str1: string, str2: string;

    //Place the string in a local variable so it does not update the text box
    this.CALL_NUM_ONE = this.callNumber_one;

    //Remove all spaces from the string
    this.CALL_NUM_ONE = this.CALL_NUM_ONE.replace(/ /g, "");

    //Read the second character of the string (the first will always be a letter)

      //If the second character is a number, place a space before the second character
      if(this.CALL_NUM_ONE.charCodeAt(1) >= 48 && this.CALL_NUM_ONE.charCodeAt(1) <= 57) {
        this.CALL_NUM_ONE = splitAt(1)(this.CALL_NUM_ONE).join(' ');
      }

      //Otherwise, place a space after the second character
      else if((this.CALL_NUM_ONE.charCodeAt(1) >= 65 && this.CALL_NUM_ONE.charCodeAt(1) <= 90) ||
      (this.CALL_NUM_ONE.charCodeAt(1) >= 97 && this.CALL_NUM_ONE.charCodeAt(1) <= 122)) {
        this.CALL_NUM_ONE = splitAt(2)(this.CALL_NUM_ONE).join(' ');
      }

    //Continue reading until a period (.) is found
    for(var i = 2; i < this.CALL_NUM_ONE.length; ++i) {
      
      //To prevent accidental infinite loops
      if(i > 50)
        break;

      //When a period is found
      if(this.CALL_NUM_ONE.charAt(i) == '.' && cutterNum == 0) {
        //Read the next character. If it is a number, it's still part of the classification number
        //If it is a letter, it's the beginning of the cutter and a space is added before the period
        if((this.CALL_NUM_ONE.charCodeAt(i + 1) >= 65 && this.CALL_NUM_ONE.charCodeAt(i + 1) <= 90) ||
        (this.CALL_NUM_ONE.charCodeAt(1) >= 97 && this.CALL_NUM_ONE.charCodeAt(1) <= 122)) {
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          cutterNum = 1;
          i += 3;
        }
      }

      //Continue reading in characters.  If a c or a C is found, check the next letter
      if(this.CALL_NUM_ONE.charAt(i) == 'c' || this.CALL_NUM_ONE.charAt(i) == 'C') {
        //If it's a period, its a copy number and a space is added before the c
        if(this.CALL_NUM_ONE.charAt(i + 1) == '.') {
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i += 3;
        }
        //Otherwise, this is a second cutter and a space is added before the c
        else {
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i++;
        }
      }

      //If a v or a V is found, check the next letter
      if(this.CALL_NUM_ONE.charAt(i) == 'v' || this.CALL_NUM_ONE.charAt(i) == 'V') {
        //If it's a period, its a version number and a space is added before the v
        if(this.CALL_NUM_ONE.charAt(i + 1) == '.') {
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i += 3;
        }
        //Otherwise, this is a second cutter and a space is added before the v
        else {
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i++;
        }
      }

      //If a period is found, this is a second cutter, the period should be removed and a space
      //is added before the letter
      if(this.CALL_NUM_ONE.charAt(i) == '.' && cutterNum == 1) {
        str1 = this.CALL_NUM_ONE.substr(0, i);
        str2 = this.CALL_NUM_ONE.substr(i);
        str2 = str2.substr(1);
        this.CALL_NUM_ONE = str1 + ' ' + str2;
        i += 2;
      }

      //If any other letter is found, (not c or v), this is a second cutter and a space is
      //added before the letter
      if((this.CALL_NUM_ONE.charCodeAt(i) >= 65 && this.CALL_NUM_ONE.charCodeAt(i) <= 90) ||
      (this.CALL_NUM_ONE.charCodeAt(i) >= 97 && this.CALL_NUM_ONE.charCodeAt(i) <= 122)) {

        if(!(this.CALL_NUM_ONE.charAt(i) == 'v' || this.CALL_NUM_ONE.charAt(i) == 'V' ||
        this.CALL_NUM_ONE.charAt(i) == 'c' || this.CALL_NUM_ONE.charAt(i) == 'C')) {
          this.CALL_NUM_ONE = splitAt(i - 1)(this.CALL_NUM_ONE).join(' ');
          i++;
        }

      }
    }

    //console.log(this.CALL_NUM_ONE);

    //Split the string up into an array of strings using a space (" ") as a delimeter

  }

  load() {
    this.normalize();
    var obj = {callnum: this.CALL_NUM_ONE, collection: this.collection_one};
    this.http.post("http://bookfind.hpc.tcnj.edu/retrieve-data.php", JSON.stringify(obj))
    .subscribe (data => {
      this.bookValueString = data['_body'];

      console.log(this.bookValueString);

      //this.router.navigateByUrl('map-display/:' + this.bookValueString);
    },
    (error : any) =>
    {
      //If the connection doesn't work, an error message is sent.
      alert(error); 
    });
  }
}