(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Page Header-->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style = \"color: #ffffff;\">\r\n      Book Finder\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--Page Body-->\r\n<!--make div move all of the other elements-->\r\n<ion-content>\r\n  <div style = \"margin-left:5%\">\r\n    <h1 style = \"padding-top: 35%\">I'm looking for...</h1>\r\n      <!--<h2 id=\"floor_number\"></h2>-->\r\n      <!--Input for First Call Number\r\n      User's input stored in a string named \"callNum_one\"\r\n      Other inputs will use the name \"callNum_two\", \"callNum_three\", etc.-->\r\n\r\n      <!--Used to have: (ionChange) = \"normalize($event)\" debounce = \"200\" -->\r\n\r\n    <ion-item lines=none>\r\n      <ion-input color = \"#222f79\" [(ngModel)]=\"callNum\" placeholder=\"Call Number\"></ion-input>\r\n    </ion-item>\r\n  \r\n  <!--Drop-Down Menu for First Call Number\r\n      This menu determines which section of the library you're looking in\r\n      It's set to \"General Collection\" by default-->\r\n  <!-- (ionChange) = \"getCollection($event)\" -->\r\n    <ion-item lines=none>\r\n      <p>in... &nbsp;</p>\r\n      <ion-select value=\"General Collection\" [(ngModel)] = \"collection\" okText=\"OK\" cancelText=\"Cancel\">\r\n        <ion-select-option value=\"General Collection\">General Collection</ion-select-option>\r\n        <ion-select-option value=\"Children's Collection\">Children's Collection</ion-select-option>\r\n        <ion-select-option value=\"Curriculum Reference\">Curriculum Reference</ion-select-option>\r\n        <ion-select-option value=\"New Textbook Collection\">New Textbook Collection</ion-select-option>\r\n        <ion-select-option value=\"Old Textbook Collection\">Old Textbook Collection</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n  <br>\r\n\r\n  <!--\r\n\r\n  <ion-item lines=none>\r\n    <ion-input [(ngModel)]=\"callNum_two\" placeholder=\"Call Number\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!--Drop-Down Menu for Second Call Number\r\n      This menu determines which section of the library you're looking in\r\n      It's set to \"General Collection\" by default\r\n\r\n  <ion-item lines=none>\r\n    <p>in... &nbsp;</p>\r\n    <ion-select value=\"General Collection\" [(ngModel)]=\"collection_two\" okText=\"OK\" cancelText=\"Cancel\">\r\n      <ion-select-option value=\"General Collection\">General Collection</ion-select-option>\r\n      <ion-select-option value=\"Children's Collection\">Children's Collection</ion-select-option>\r\n      <ion-select-option value=\"Curriculum Reference\">Curriculum Reference</ion-select-option>\r\n      <ion-select-option value=\"New Textbook Collection\">New Textbook Collection</ion-select-option>\r\n      <ion-select-option value=\"Old Textbook Collection\">Old Textbook Collection</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <br>\r\n\r\n  <!--Input for Third Call Number\r\n\r\n  <ion-item lines=none>\r\n    <ion-input [(ngModel)]=\"callNum_three\" placeholder=\"Call Number\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!--Drop-Down Menu for First Call Number\r\n      This menu determines which section of the library you're looking in\r\n      It's set to \"General Collection\" by default\r\n\r\n  <ion-item lines=none>\r\n    <p>in... &nbsp;</p>\r\n    <ion-select value=\"General Collection\" [(ngModel)]=\"collection_three\" okText=\"OK\" cancelText=\"Cancel\">\r\n      <ion-select-option value=\"General Collection\">General Collection</ion-select-option>\r\n      <ion-select-option value=\"Children's Collection\">Children's Collection</ion-select-option>\r\n      <ion-select-option value=\"Curriculum Reference\">Curriculum Reference</ion-select-option>\r\n      <ion-select-option value=\"New Textbook Collection\">New Textbook Collection</ion-select-option>\r\n      <ion-select-option value=\"Old Textbook Collection\">Old Textbook Collection</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <br>\r\n\r\n  <!--Submit Button-->\r\n  <!--color is the color of the actual button-->\r\n  <ion-item class = submitbutton lines=none>\r\n    <ion-button color = \"#d3a40d\" size=\"large\" style = \"margin:auto;\" type=\"submit\" (click)=\"load()\">Submit</ion-button>\r\n  </ion-item>\r\n\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-indent: 25px;\n  color: #ffffff; }\n\np {\n  color: #ffffff; }\n\nion-content {\n  --background: url('/assets/Background2.png') no-repeat center/cover fixed; }\n\nion-header {\n  --ion-background-color: #262748;\n  text-align: center; }\n\nion-title {\n  background-color: #262748;\n  color: #ffffff; }\n\nion-item {\n  --background: transparent;\n  --padding-start: 25px;\n  --padding-end: 25px; }\n\nion-item ion-input {\n    --background: #ffffff;\n    border: solid 1px #06123a;\n    border-radius: 5px;\n    --padding-start: 10px; }\n\nion-item ion-select {\n    max-width: 100%;\n    background-color: #ffffff;\n    border: solid 1px #06123a;\n    border-radius: 5px;\n    --padding-end: 7px; }\n\n.submitbutton {\n  padding-left: 7%; }\n\nion-input {\n  --placeholder-color: #000000; }\n\nion-button {\n  background-color: #d3a40d;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNEZXJhXFxEZXNrdG9wXFxCb29rRmluZGVyUHJvamVjdFxcYm9va2lzaC13YWZmbGVcXGJvb2tGaW5kZXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kseUVBQWEsRUFBQTs7QUFHaEI7RUFFRywrQkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBRUkseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSx5QkFBYTtFQUNiLHFCQUFnQjtFQUNoQixtQkFBYyxFQUFBOztBQUhsQjtJQUtRLHFCQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBZ0IsRUFBQTs7QUFSeEI7SUFXUSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWMsRUFBQTs7QUFJdEI7RUFLSSxnQkFDSixFQUFBOztBQUVBO0VBRUksNEJBQW9CLEVBQUE7O0FBR3hCO0VBQ0kseUJBQXlCO0VBR3pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1pbmRlbnQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7ICAgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvQmFja2dyb3VuZDIucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxufVxyXG5cclxuIGlvbi1oZWFkZXIge1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjM2IzNjUyO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzI2Mjc0ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzQ4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDI1cHg7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwNjEyM2E7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzA2MTIzYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3VibWl0YnV0dG9ue1xyXG4gICAgLy8tLXBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgLy8tLXBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgLy8tLXBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIC8vLS1wYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3JVxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjNTg4YmI0O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNhNDBkO1xyXG4gICAgLy8tLWNvbG9yLWFjdGl2YXRlZDogI2QzYTQwZDtcclxuICAgIC8vLS1yaXBwbGUtY29sb3I6ICMzMzMwOTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxOTdkZWcsIHJnYmEoMTAwLDEwMCwxMDAsMSkgMCUsIHJnYmEoNjMsNjMsNjMsMSkgMTMuNSUsIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLCByZ2JhKDAsMCwwLDEpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _map_display_map_display_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map-display/map-display.page */ "./src/app/map-display/map-display.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

 //Import Ionic component
 //Allow HTTP requests
 //Get info from Map Display Page
 //Import Router for navigating pages
//Define function for splitting a string at an index
var splitAt = function (index) { return function (x) { return [x.slice(0, index), x.slice(index)]; }; };
//Define Ionic Home Page component
var HomePage = /** @class */ (function () {
    //Constructor for routing from Home Page to Map Display Page
    function HomePage(http, router) {
        this.http = http;
        this.router = router;
        this.rootPage = HomePage_1; //Define the Home Page as the root page
        this.stackData = ""; //Global string for holding value returned by database
        this.lCallNum = ""; //Global string (local to this file) that will hold the user call number
        this.callNum = ""; //Global string to be updated by the input to the text box (updated by HTML file)
        this.collection = "General Collection"; //Global String to be updated by the input to the collection dropdown (updated by HTML file)
        var routes = [
            { path: 'home', component: HomePage_1 },
            { path: 'map-display', component: _map_display_map_display_page__WEBPACK_IMPORTED_MODULE_3__["MapDisplayPage"] },
        ];
        this.http = http;
    }
    HomePage_1 = HomePage;
    //Function to convert user entered call number into correctly formatted LoC Call Number string
    HomePage.prototype.normalize = function () {
        var cutterNum = 0; //Variable representing how many cutters are in the call number
        var str1, str2; //Helper variables to hold 2 parts of a separated string
        //Place the string in a file-local variable so it does not update the text box
        this.lCallNum = this.callNum;
        //Remove all spaces from the string
        this.lCallNum = this.lCallNum.replace(/ /g, "");
        //Read the second character of the string (the first will always be a letter)
        //If the second character is a number, place a space before the second character
        if (this.lCallNum.charCodeAt(1) >= 48 && this.lCallNum.charCodeAt(1) <= 57) {
            this.lCallNum = splitAt(1)(this.lCallNum).join(' ');
        }
        //Otherwise, place a space after the second character
        else if ((this.lCallNum.charCodeAt(1) >= 65 && this.lCallNum.charCodeAt(1) <= 90) ||
            (this.lCallNum.charCodeAt(1) >= 97 && this.lCallNum.charCodeAt(1) <= 122)) {
            this.lCallNum = splitAt(2)(this.lCallNum).join(' ');
        }
        //Continue reading until a period (.) is found
        for (var i = 2; i < this.lCallNum.length; ++i) {
            //To prevent accidental infinite loops
            if (i > 50)
                break;
            //When a period is found
            if (this.lCallNum.charAt(i) == '.' && cutterNum == 0) {
                //Read the next character. If it is a number, it's still part of the classification number
                //If it is a letter, it's the beginning of the cutter and a space is added before the period
                if ((this.lCallNum.charCodeAt(i + 1) >= 65 && this.lCallNum.charCodeAt(i + 1) <= 90) ||
                    (this.lCallNum.charCodeAt(i + 1) >= 97 && this.lCallNum.charCodeAt(i + 1) <= 122)) {
                    this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
                    cutterNum = 1;
                    i += 3;
                }
            }
            //Continue reading in characters.  If a c or a C is found, check the next letter
            if (this.lCallNum.charAt(i) == 'c' || this.lCallNum.charAt(i) == 'C') {
                //If it's a period, its a copy number and a space is added before the c
                if (this.lCallNum.charAt(i + 1) == '.') {
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
            if (this.lCallNum.charAt(i) == 'v' || this.lCallNum.charAt(i) == 'V') {
                //If it's a period, its a version number and a space is added before the v
                if (this.lCallNum.charAt(i + 1) == '.') {
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
            if (this.lCallNum.charAt(i) == '.' && cutterNum == 1) {
                str1 = this.lCallNum.substr(0, i);
                str2 = this.lCallNum.substr(i);
                str2 = str2.substr(1);
                this.lCallNum = str1 + ' ' + str2;
                i += 2;
            }
            //If any other letter is found, (not c or v), this is a second cutter and a space is
            //added before the letter
            if ((this.lCallNum.charCodeAt(i) >= 65 && this.lCallNum.charCodeAt(i) <= 90) ||
                (this.lCallNum.charCodeAt(i) >= 97 && this.lCallNum.charCodeAt(i) <= 122)) {
                if (!(this.lCallNum.charAt(i) == 'v' || this.lCallNum.charAt(i) == 'V' ||
                    this.lCallNum.charAt(i) == 'c' || this.lCallNum.charAt(i) == 'C')) {
                    this.lCallNum = splitAt(i)(this.lCallNum).join(' ');
                    i++;
                }
            }
        }
    };
    //Function to retrieve library info by querying the database for the user's call number and collection
    //This function is called when the submit button is pressed on the home page
    HomePage.prototype.load = function () {
        var _this = this;
        //normalize the user's call number
        this.normalize();
        //Create an object that can be turned into a JSON string and sent to the database with an HTTP post
        var obj = { callnum: this.lCallNum, collection: this.collection };
        //Post the user data and get a response
        this.http.post("http://bookfind.hpc.tcnj.edu/retrieve-data.php", JSON.stringify(obj)).subscribe(function (data) {
            //Place the database response in the stackData variable
            _this.stackData = data['_body'];
            console.log(_this.stackData);
            _this.router.navigateByUrl('map-display/:' + _this.stackData);
        }, function (error) {
            //If the connection doesn't work, an error message is sent.
            alert(error);
        });
    };
    var HomePage_1;
    HomePage = HomePage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map