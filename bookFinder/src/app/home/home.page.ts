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

    //Place the string in a local variable so it does not update the text box
    this.CALL_NUM_ONE = this.callNumber_one;

    //Remove all spaces from the string
    this.CALL_NUM_ONE = this.CALL_NUM_ONE.replace(/ /g, "");

    //Read the second character of the string (the first will always be a letter)

      //If the second character is a number, place a space before the second character
      if(this.CALL_NUM_ONE.charCodeAt(1) >= 48 && this.CALL_NUM_ONE.charCodeAt(1) <= 57) {
        console.log("Second character is a number\n");
        this.CALL_NUM_ONE = splitAt(1)(this.CALL_NUM_ONE).join(' ');
      }

      //Otherwise, place a space after the second character
      else if((this.CALL_NUM_ONE.charCodeAt(1) >= 65 && this.CALL_NUM_ONE.charCodeAt(1) <= 90) ||
      (this.CALL_NUM_ONE.charCodeAt(1) >= 97 && this.CALL_NUM_ONE.charCodeAt(1) <= 122)) {
        console.log("Second character is a letter\n");
        this.CALL_NUM_ONE = splitAt(2)(this.CALL_NUM_ONE).join(' ');
      }

    //Continue reading until a period (.) is found
    for(var i = 2; i < this.CALL_NUM_ONE.length; ++i) {
      if(i > 50)
        break;
      if(this.CALL_NUM_ONE.charAt(i) == '.' && cutterNum == 0) {
        //Read the next character
        if(this.CALL_NUM_ONE.charCodeAt(i + 1) >= 48 && this.CALL_NUM_ONE.charCodeAt(i + 1) <= 57) {            
          //If it is a number, it's still part of the classification number
          console.log(". is part of classification #\n");
        }
        else if((this.CALL_NUM_ONE.charCodeAt(i + 1) >= 65 && this.CALL_NUM_ONE.charCodeAt(i + 1) <= 90) ||
        (this.CALL_NUM_ONE.charCodeAt(1) >= 97 && this.CALL_NUM_ONE.charCodeAt(1) <= 122)) {
          //If it is a letter, it's the beginning of the cutter and a space is added before the period
          console.log(". is beginning of cutter #\n");
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          console.log("CUTTER NUMBER: " + cutterNum);
          cutterNum = 1;
          console.log("CUTTER NUMBER: " + cutterNum);
          i += 3;
        }
      }
      //Continue reading in characters
      //If a c or a C is found, check the next letter
      if(this.CALL_NUM_ONE.charAt(i) == 'c' || this.CALL_NUM_ONE.charAt(i) == 'C') {
        console.log("C found");
        //If it's a period, its a copy number and a space is added before the c
        if(this.CALL_NUM_ONE.charAt(i + 1) == '.') {
          console.log("Copy number found");
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i += 3;
        }
        //Otherwise, this is a second cutter and a space is added before the c
        else {
          console.log("Second cutter found");
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i++;
        }
      }

      //If a v or a V is found, check the next letter
      if(this.CALL_NUM_ONE.charAt(i) == 'v' || this.CALL_NUM_ONE.charAt(i) == 'V') {
        console.log("V found");
        //If it's a period, its a version number and a space is added before the v
        if(this.CALL_NUM_ONE.charAt(i + 1) == '.') {
          console.log("Version number found");
          console.log(this.CALL_NUM_ONE + '\t' + i);
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i += 3;
          console.log(this.CALL_NUM_ONE + '\t' + i);
        }
        //Otherwise, this is a second cutter and a space is added before the v
        else {
          console.log("Second cutter found");
          this.CALL_NUM_ONE = splitAt(i)(this.CALL_NUM_ONE).join(' ');
          i++;
        }
      }

      //If a period is found, this is a second cutter, the period should be removed and a space
      //is added before the letter

      console.log(this.CALL_NUM_ONE + '\t' + i);

      console.log("CUTTER NUMBER: " + cutterNum);
      if(this.CALL_NUM_ONE.charAt(i) == '.' && cutterNum == 1) {
        console.log("THIS IS THE ONE RIGHT HERE AHHHHHSecond cutter found");
        var str1, str2;
        str1 = this.CALL_NUM_ONE.substr(0, i);
        str2 = this.CALL_NUM_ONE.substr(i);
        str2 = str2.substr(1);
        console.log("THIS IS STR2: " + str2);
        this.CALL_NUM_ONE = str1 + ' ' + str2;
        i += 2;
        console.log(this.CALL_NUM_ONE + '\t' + i);
      }
      //If any other letter is found, (not c or v), this is a second cutter and a space is
      //added before the letter
      else if((this.CALL_NUM_ONE.charCodeAt(i + 1) >= 65 && this.CALL_NUM_ONE.charCodeAt(i + 1) <= 90) ||
      (this.CALL_NUM_ONE.charCodeAt(1) >= 97 && this.CALL_NUM_ONE.charCodeAt(1) <= 122)) {
        console.log("Second cutter found");
        this.CALL_NUM_ONE = splitAt(i + 1)(this.CALL_NUM_ONE).join(' ');
        i++;
      }
    }

    console.log(this.CALL_NUM_ONE);

      //Split the string up into an array of strings using a space (" ") as a delimeter

  }

  load() {
    this.normalize();
    var obj = {callnum: this.CALL_NUM_ONE, collection: this.collection_one};
    /*
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

    */
  }
}