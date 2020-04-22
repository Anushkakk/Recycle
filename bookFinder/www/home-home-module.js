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
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
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

module.exports = "\r\n<!--Page Header-->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style = \"color: #ffffff;\">\r\n      TCNJ Book Finder\r\n    </ion-title>\r\n    <ion-tab-button id = \"modal\" (click)=\"presentModal()\">Need help?</ion-tab-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--Page Body-->\r\n<!--make div move all of the other elements-->\r\n<ion-content padding>\r\n  <div> <!--used to be <div style = \"margin-left:5%\"> -->\r\n    <h1 style = \"padding-top: 35%\">I'm looking for...</h1>\r\n      <!--<h2 id=\"floor_number\"></h2>-->\r\n      <!--Input for First Call Number\r\n      User's input stored in a string named \"callNum_one\"\r\n      Other inputs will use the name \"callNum_two\", \"callNum_three\", etc.-->\r\n\r\n      <!--Used to have: (ionChange) = \"normalize($event)\" debounce = \"200\" -->\r\n\r\n    <ion-item lines=none>\r\n      <ion-input color = \"#222f79\" [(ngModel)]=\"callNum\" placeholder=\"Call Number\"></ion-input>\r\n    </ion-item>\r\n  \r\n  <!--Drop-Down Menu for First Call Number\r\n      This menu determines which section of the library you're looking in\r\n      It's set to \"General Collection\" by default-->\r\n  <!-- (ionChange) = \"getCollection($event)\" -->\r\n    <ion-item lines=none>\r\n      <p>in... &nbsp;</p>\r\n      <ion-select placeholder=\"Select a collection\" [(ngModel)] = \"collection\" okText=\"OK\" cancelText=\"Cancel\" interface=\"popover\" (ionChange) = \"textUpdate($event)\">\r\n        <ion-select-option value=\"General Collection\">General Collection</ion-select-option>\r\n        <ion-select-option value=\"Bound Periodicals\">Bound Periodicals</ion-select-option>\r\n        <ion-select-option value=\"Caldecott/Newberry\">Caldecott/Newberry</ion-select-option>\r\n        <ion-select-option value=\"Current Newspapers\">Current Newspapers</ion-select-option>\r\n        <ion-select-option value=\"Recent Newspapers\">Recent Newspapers</ion-select-option>\r\n        <ion-select-option value=\"Current Periodicals\">Current Periodicals</ion-select-option>\r\n        <ion-select-option value=\"Government Documents\">Government Documents</ion-select-option>\r\n        <ion-select-option value=\"Leisure Reading\">Leisure Reading</ion-select-option>\r\n        <ion-select-option value=\"Music Reference\">Music Reference</ion-select-option>\r\n        <ion-select-option value=\"New Books\">New Books</ion-select-option>\r\n        <ion-select-option value=\"RAND\">RAND</ion-select-option>\r\n        <ion-select-option value=\"Children's Collection\">Children's Collection</ion-select-option>\r\n        <ion-select-option value=\"Curriculum Reference\">Curriculum Reference</ion-select-option>\r\n        <ion-select-option value=\"New Textbook Collection\">New Textbook Collection</ion-select-option>\r\n        <ion-select-option value=\"Old Textbook Collection\">Old Textbook Collection</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <!--Updating example text based on which drop down item is picked-->\r\n    <div align=\"center\" style=\"color:white\"> {{info}} </div>\r\n\r\n  </div>\r\n  <br>\r\n\r\n  <!--ion-item lines=none>\r\n    <ion-input [(ngModel)]=\"callNum_two\" placeholder=\"Call Number\"></ion-input>\r\n  </ion-item -->\r\n\r\n  <!--Drop-Down Menu for Second Call Number\r\n      This menu determines which section of the library you're looking in\r\n      It's set to \"General Collection\" by default\r\n\r\n  <ion-item lines=none>\r\n    <p>in... &nbsp;</p>\r\n    <ion-select value=\"General Collection\" [(ngModel)]=\"collection_two\" okText=\"OK\" cancelText=\"Cancel\">\r\n      <ion-select-option value=\"General Collection\">General Collection</ion-select-option>\r\n      <ion-select-option value=\"Children's Collection\">Children's Collection</ion-select-option>\r\n      <ion-select-option value=\"Curriculum Reference\">Curriculum Reference</ion-select-option>\r\n      <ion-select-option value=\"New Textbook Collection\">New Textbook Collection</ion-select-option>\r\n      <ion-select-option value=\"Old Textbook Collection\">Old Textbook Collection</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <br-->\r\n\r\n  <!--Input for Third Call Number\r\n\r\n  <ion-item lines=none>\r\n    <ion-input [(ngModel)]=\"callNum_three\" placeholder=\"Call Number\"></ion-input>\r\n  </ion-item-->\r\n\r\n  <!--Drop-Down Menu for First Call Number\r\n      This menu determines which section of the library you're looking in\r\n      It's set to \"General Collection\" by default\r\n\r\n  <ion-item lines=none>\r\n    <p>in... &nbsp;</p>\r\n    <ion-select value=\"General Collection\" [(ngModel)]=\"collection_three\" okText=\"OK\" cancelText=\"Cancel\">\r\n      <ion-select-option value=\"General Collection\">General Collection</ion-select-option>\r\n      <ion-select-option value=\"Children's Collection\">Children's Collection</ion-select-option>\r\n      <ion-select-option value=\"Curriculum Reference\">Curriculum Reference</ion-select-option>\r\n      <ion-select-option value=\"New Textbook Collection\">New Textbook Collection</ion-select-option>\r\n      <ion-select-option value=\"Old Textbook Collection\">Old Textbook Collection</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <br-->\r\n\r\n  <!--Submit Button-->\r\n  <!--color is the color of the actual button-->\r\n  <ion-item class = submitbutton lines=none>\r\n    <ion-button color = \"#d3a40d\" size=\"large\" style = \"margin:auto; background-color: #d3a40d;\" type=\"submit\" (click)=\"load()\">Submit</ion-button>\r\n  </ion-item>\r\n\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-indent: 25px;\n  color: #ffffff; }\n\np {\n  color: #ffffff; }\n\nion-content {\n  --background: url('/assets/Background2.png') no-repeat center/cover fixed; }\n\nion-header {\n  --ion-background-color: #262748;\n  text-align: center; }\n\nion-title {\n  background-color: #262748;\n  color: #ffffff;\n  font-size: 130%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\nion-item {\n  --background: transparent;\n  --padding-start: 25px;\n  --padding-end: 25px; }\n\nion-item ion-input {\n    --background: #ffffff;\n    border: solid 1px #06123a;\n    border-radius: 5px;\n    --padding-start: 10px; }\n\nion-item ion-select {\n    max-width: 100%;\n    background-color: #ffffff;\n    border: solid 1px #06123a;\n    border-radius: 5px;\n    --padding-end: 7px; }\n\nion-input {\n  --placeholder-color: #000000; }\n\nion-button {\n  border-radius: 5px; }\n\n.submitbutton {\n  text-align: center; }\n\nion-tab-button {\n  color: #ffffff;\n  float: right;\n  font-size: 75%;\n  text-decoration: underline;\n  line-height: 99%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNEZXJhXFxEZXNrdG9wXFxCb29rRmluZGVyUHJvamVjdFxcYm9va2lzaC13YWZmbGVcXGJvb2tGaW5kZXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFJaEI7RUFFRSxjQUFjLEVBQUE7O0FBSWhCO0VBRUUseUVBQWEsRUFBQTs7QUFJZDtFQUVDLCtCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFJcEI7RUFFRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUyxFQUFBOztBQUlYO0VBRUUseUJBQWE7RUFDYixxQkFBZ0I7RUFDaEIsbUJBQWMsRUFBQTs7QUFKaEI7SUFRSSxxQkFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQWdCLEVBQUE7O0FBWHBCO0lBaUJJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBYyxFQUFBOztBQU1sQjtFQUVJLDRCQUFvQixFQUFBOztBQUl4QjtFQUVFLGtCQUFrQixFQUFBOztBQUlwQjtFQUVFLGtCQUFrQixFQUFBOztBQUlwQjtFQUVFLGNBQWM7RUFDZCxZQUFXO0VBQ1gsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcblxyXG4gIHRleHQtaW5kZW50OiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG5cclxucCB7XHJcblxyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7ICAgIFxyXG5cclxuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9CYWNrZ3JvdW5kMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG5cclxufVxyXG5cclxuIGlvbi1oZWFkZXIge1xyXG4gICAgXHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzI2Mjc0ODtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzQ4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTMwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIFxyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNXB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDI1cHg7XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzA2MTIzYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG5cclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDYxMjNhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogN3B4O1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcblxyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMDtcclxuXHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIFxyXG59XHJcblxyXG4uc3VibWl0YnV0dG9uIHtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuaW9uLXRhYi1idXR0b24ge1xyXG5cclxuICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgZmxvYXQ6cmlnaHQ7IFxyXG4gIGZvbnQtc2l6ZTogNzUlOyBcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgXHJcbiAgbGluZS1oZWlnaHQ6IDk5JTtcclxuXHJcblxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");

 //Import Ionic component
 //Allow HTTP requests
 //Get info from Map Display Page


 //Import Router for navigating pages
//Define function for splitting a string at an index
var splitAt = function (index) { return function (x) { return [x.slice(0, index), x.slice(index)]; }; };
//Define Ionic Home Page component
var HomePage = /** @class */ (function () {
    //Constructor for routing from Home Page to Map Display Page
    function HomePage(http, router, modalController) {
        this.http = http;
        this.router = router;
        this.modalController = modalController;
        this.rootPage = HomePage_1; //Define the Home Page as the root page
        this.stackData = ""; //Global string for holding value returned by database
        this.lCallNum = ""; //Global string (local to this file) that will hold the user call number
        this.callNum = ""; //Global string to be updated by the input to the text box (updated by HTML file)
        this.collection = ""; //Global String to be updated by the input to the collection dropdown (updated by HTML file)
        this.info = "";
        var routes = [
            { path: 'home', component: HomePage_1 },
            { path: 'map-display', component: _map_display_map_display_page__WEBPACK_IMPORTED_MODULE_3__["MapDisplayPage"] },
            { path: 'modal', component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"] },
        ];
        this.http = http;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.textUpdate = function () {
        switch (this.collection) {
            case "":
                this.info = "";
                break;
            case "General Collection":
                this.info = "EX: A 15 .G";
                break;
            case "Bound Periodicals":
                this.info = "EX: D 839 .M435";
                break;
            case "Caldecott/Newberry":
                this.info = "EX: 185 or 99";
                break;
            case "Current Newspapers":
                this.info = "EX: LOOK THESE UP";
                break;
            case "Current Periodicals":
                this.info = "EX: LB1028.J69 or RC489.B4B435";
                break;
            case "Government Documents":
                this.info = "GA1.13:AFMD-93-58BR or 974.90 159 1988-1989 or U";
                break;
            case "Leisure Reading":
                this.info = "EX: LOOK THESE UP";
                break;
            case "Music Reference":
                this.info = "EX: ML 134 .K";
                break;
            case "New Books":
                this.info = "EX: LOOK THESE UP";
                break;
            case "RAND":
                this.info = "EX: AR-3792 or Ref. AS36 R3321 V. 30/39";
                break;
            case "Children's Collection":
                this.info = "EX: 791.3 M or Fict Zusak";
                break;
            case "Curriculum Reference":
                this.info = "EX: PN 1009";
                break;
            case "New Textbook Collection":
                this.info = "372.4 Ope";
                break;
            case "Old Textbook Collection":
                this.info = "374.2 Mer 1967";
                break;
            case "Recent Newspapers":
                this.info = "EX: LOOK THESE UP";
                break;
            default:
                this.info = "";
                break;
        }
    };
    HomePage.prototype.dismiss = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    //Function to convert user entered call number into correctly formatted LoC Call Number string
    HomePage.prototype.normalize = function () {
        if (this.collection == "General Collection" || this.collection == "Bound Periodicals" || this.collection == "Caldecott/Newberry" || this.collection == "Curriculum Reference" || this.collection == "Music Reference") {
            this.normalizeLC();
        }
        else if (this.collection == "Children's Collection" || this.collection == "New Textbook Collection" || this.collection == "Old Textbook Collection") {
            this.normalizeMelvil();
        }
    };
    //Function to convert user entered call number into correctly formatted LoC Call Number string
    HomePage.prototype.normalizeLC = function () {
        var cutterNum = 0; //Variable representing how many cutters are in the call number
        var str1, str2; //Helper variables to hold 2 parts of a separated string
        //Place the string in a file-local variable so it does not update the text box
        this.lCallNum = this.callNum;
        //Remove all spaces from the string, and make the string all uppercase
        this.lCallNum = this.lCallNum.replace(/ /g, "");
        this.lCallNum = this.lCallNum.toUpperCase();
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
        console.log("User Call Num Normalized: " + this.lCallNum);
    };
    HomePage.prototype.normalizeMelvil = function () {
        //Place the string in a file-local variable so it does not update the text box
        this.lCallNum = this.callNum;
        //Make the string all uppercase
        this.lCallNum = this.lCallNum.toUpperCase();
        if (this.lCallNum.substring(0, 4) == "FICT") {
            this.lCallNum = this.lCallNum.substring(5);
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
        console.log('AAAAA');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map