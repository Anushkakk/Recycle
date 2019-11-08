import { Component } from '@angular/core';                           //Import Ionic component
import { Http } from '@angular/http';                                //Allow HTTP requests
import { MapDisplayPage } from '../map-display/map-display.page';    //Get info from Map Display Page
import { Routes } from '@angular/router';                            //Import Router for navigating pages
import { Router } from '@angular/router';                            //Import Router for navigating pages

//Define function for splitting a string at an index
const splitAt = index => x => [x.slice(0, index), x.slice(index)]

//Define Ionic Home Page component
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  public rootPage: any = HomePage;     //Define the Home Page as the root page
  stackData  = "";                     //Global string for holding value returned by database
  lCallNum   = "";                     //Global string (local to this file) that will hold the user call number
  callNum    = "";                     //Global string to be updated by the input to the text box (updated by HTML file)
  collection = "General Collection";   //Global String to be updated by the input to the collection dropdown (updated by HTML file)

  //Define Home Page properties
  data: any;
  navCtrl: any;
  storage: any;

  //Constructor for routing from Home Page to Map Display Page
  constructor(public http: Http, private router: Router) {
    const routes: Routes = [
      { path: 'home', component: HomePage },
      { path: 'map-display', component: MapDisplayPage },
    ];
    this.http = http;
  }

  //Function to convert user entered call number into correctly formatted LoC Call Number string
  normalize() {
    var cutterNum = 0;  //Variable representing how many cutters are in the call number
    var str1, str2;     //Helper variables to hold 2 parts of a separated string

    //Place the string in a file-local variable so it does not update the text box
    this.lCallNum = this.callNum;

    //Remove all spaces from the string
    this.lCallNum = this.lCallNum.replace(/ /g, "");

    //Read the second character of the string (the first will always be a letter)

      //If the second character is a number, place a space before the second character
      if(this.lCallNum.charCodeAt(1) >= 48 && this.lCallNum.charCodeAt(1) <= 57) {
        this.lCallNum = splitAt(1)(this.lCallNum).join(' ');
      }

      //Otherwise, place a space after the second character
      else if((this.lCallNum.charCodeAt(1) >= 65 && this.lCallNum.charCodeAt(1) <= 90) ||
      (this.lCallNum.charCodeAt(1) >= 97 && this.lCallNum.charCodeAt(1) <= 122)) {
        this.lCallNum = splitAt(2)(this.lCallNum).join(' ');
      }

    //Continue reading until a period (.) is found
    for(var i = 2; i < this.lCallNum.length; ++i) {
      
      //To prevent accidental infinite loops
      if(i > 50)
        break;

      //When a period is found
      if(this.lCallNum.charAt(i) == '.' && cutterNum == 0) {
        //Read the next character. If it is a number, it's still part of the classification number
        //If it is a letter, it's the beginning of the cutter and a space is added before the period
        if((this.lCallNum.charCodeAt(i + 1) >= 65 && this.lCallNum.charCodeAt(i + 1) <= 90) ||
        (this.lCallNum.charCodeAt(i + 1) >= 97 && this.lCallNum.charCodeAt(i + 1) <= 122)) {
          this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
          cutterNum = 1;
          i += 3;
        }
      }

      //Continue reading in characters.  If a c or a C is found, check the next letter
      if(this.lCallNum.charAt(i) == 'c' || this.lCallNum.charAt(i) == 'C') {
        //If it's a period, its a copy number and a space is added before the c
        if(this.lCallNum.charAt(i + 1) == '.') {
          this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
          i += 3;
        }
        //Otherwise, this is a second cutter and a space is added before the c
        else {
          this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
          i++;
        }
      }

      //If a v or a V is found, check the next letter
      if(this.lCallNum.charAt(i) == 'v' || this.lCallNum.charAt(i) == 'V') {
        //If it's a period, its a version number and a space is added before the v
        if(this.lCallNum.charAt(i + 1) == '.') {
          this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
          i += 3;
        }
        //Otherwise, this is a second cutter and a space is added before the v
        else {
          this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
          i++;
        }
      }

      //If a period is found, this is a second cutter, the period should be removed and a space
      //is added before the letter
      if(this.lCallNum.charAt(i) == '.' && cutterNum == 1) {
        str1 = this.lCallNum.substr(0, i);
        str2 = this.lCallNum.substr(i);
        str2 = str2.substr(1);
        this.lCallNum = str1 + ' ' + str2;
        i += 2;
      }

      //If any other letter is found, (not c or v), this is a second cutter and a space is
      //added before the letter
      if((this.lCallNum.charCodeAt(i) >= 65 && this.lCallNum.charCodeAt(i) <= 90) ||
      (this.lCallNum.charCodeAt(i) >= 97 && this.lCallNum.charCodeAt(i) <= 122)) {

        if(!(this.lCallNum.charAt(i) == 'v' || this.lCallNum.charAt(i) == 'V' ||
        this.lCallNum.charAt(i) == 'c' || this.lCallNum.charAt(i) == 'C')) {
          this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
          i++;
        }

      }
    }
  }

  //Function to retrieve library info by querying the database for the user's call number and collection
  //This function is called when the submit button is pressed on the home page
  load() {
    //normalize the user's call number
    this.normalize();

    //Create an object that can be turned into a JSON string and sent to the database with an HTTP post
    var obj = {callnum: this.lCallNum, collection: this.collection};
    
    //Post the user data and get a response
    this.http.post("http://bookfind.hpc.tcnj.edu/retrieve-data.php", JSON.stringify(obj)).subscribe (data => {
      //Place the database response in the stackData variable
      this.stackData = data['_body'];

      console.log(this.stackData);

      //this.router.navigateByUrl('map-display/:' + this.stackData);
    },
    (error : any) =>
    {
      //If the connection doesn't work, an error message is sent.
      alert(error); 
    });
  }
}