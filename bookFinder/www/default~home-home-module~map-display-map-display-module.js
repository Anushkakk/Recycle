(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~map-display-map-display-module"],{

/***/ "./src/app/map-display/map-display.page.html":
/*!***************************************************!*\
  !*** ./src/app/map-display/map-display.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button id = \"backButton\" defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>TCNJ Book Finder</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding style=\"white-space: pre-wrap\">\r\n\r\n   \r\n<!--pinch-zoom width=\"100%\" height = \"50%\">\r\n<div id = \"canvasContainer\" style = \"background-color: #ffffff; height: auto\"> \r\n</div>\r\n</pinch-zoom-->\r\n\r\n<!--pinch-zoom [limit-zoom]=\"4\">\r\n\t<img src=\"https://images.unsplash.com/photo-1444927714506-8492d94b4e3d\" />\r\n</pinch-zoom>\r\n\r\n<pinch-zoom>\r\n< <img src = \"{{ getSrc() }}\" imageViewer/> >\r\n<svg width=\"100%\" height=\"25%\">\r\n  <image href=\"https://kbob.github.io/images/sample-5.jpg\" width=\"100%\" height=\"100%\"></image>\r\n  <circle cx=\"150\" cy=\"150\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" />\r\n</svg>\r\n</pinch-zoom-->\r\n<pinch-zoom>\r\n<canvas style = \"height:50%; width: 100%\" id=\"canvas\"></canvas>\r\n<!--img style = \"height:50%; width: 100%\" src = \"{{ getSrc() }}\" imageViewer/-->\r\n</pinch-zoom>\r\n<br>\r\n\r\n<div> {{info}} </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/map-display/map-display.page.scss":
/*!***************************************************!*\
  !*** ./src/app/map-display/map-display.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('/assets/Background2.png') no-repeat center/cover fixed;\n  --color: #ffffff; }\n\nion-header {\n  --ion-background-color: #262748;\n  text-align: center;\n  border-color: red; }\n\nion-title {\n  background-color: #262748;\n  color: #ffffff;\n  font-weight: normal;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n#backButton {\n  color: #ffffff;\n  font-size: 85%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWRpc3BsYXkvQzpcXFVzZXJzXFxTRGVyYVxcRGVza3RvcFxcQm9va0ZpbmRlclByb2plY3RcXGJvb2tpc2gtd2FmZmxlXFxib29rRmluZGVyL3NyY1xcYXBwXFxtYXAtZGlzcGxheVxcbWFwLWRpc3BsYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUVBQWE7RUFDYixnQkFBUSxFQUFBOztBQUlaO0VBRUksK0JBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFJckI7RUFFSSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUyxFQUFBOztBQUliO0VBRUUsY0FBYztFQUNkLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcC1kaXNwbGF5L21hcC1kaXNwbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvQmFja2dyb3VuZDIucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzQ4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3NDg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBcclxufVxyXG5cclxuI2JhY2tCdXR0b24ge1xyXG5cclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDg1JTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/map-display/map-display.page.ts":
/*!*************************************************!*\
  !*** ./src/app/map-display/map-display.page.ts ***!
  \*************************************************/
/*! exports provided: MapDisplayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDisplayPage", function() { return MapDisplayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




//import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
var MapDisplayPage = /** @class */ (function () {
    function MapDisplayPage(activeRoute, modalController) {
        this.activeRoute = activeRoute;
        this.modalController = modalController;
        this.images = [];
        this.current_floor = 5;
        this.plans = [];
        this.plan_names = ["Lower", "First", "Second", "Third", "Fourth"];
        this.img_src = "";
        this.dataRecv = "";
        this.bookValues = ["", "", "", ""];
        this.info = ""; //Information variable to display text on the map display page
        for (var i = 0; i < 5; i++) {
            var plan_uri = "assets/maps/".concat(i.toString(), ".png");
            this.plans.push(plan_uri);
            this.plan_names[i] = this.plan_names[i] + " Level";
            this.images.push(this.createImage(this.plans[i], this.plan_names[i]));
        }
    }
    /*
      async openViewer() {
        const modal = await this.modalController.create({
          component: ViewerModalComponent,
          componentProps: {
            src: this.img_src // required
          },
          cssClass: 'ion-img-viewer', // required
          keyboardClose: true,
          showBackdrop: true
        });
    
        return await modal.present();
      }
    */
    MapDisplayPage.prototype.createImage = function (src, title) {
        var img = new Image();
        img.src = src;
        img.alt = title;
        img.title = title;
        return img;
    };
    MapDisplayPage.prototype.getSrc = function () {
        return this.img_src;
    };
    MapDisplayPage.prototype.showFloor = function (floor_number, arr) {
        if (floor_number === 5)
            return;
        var canvas = document.getElementById('canvas');
        var img = this.images[floor_number];
        if (navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod") {
            canvas.height = window.outerHeight / 2;
            canvas.width = window.outerWidth;
        }
        else {
            canvas.height = screen.height / 2;
            canvas.width = screen.width;
        }
        // Create a context from the canvas, which it moves and rotates before drawing the floor plan onto it
        var ctx = canvas.getContext("2d");
        //ctx.translate(canvas.width,0);
        //ctx.rotate(90*Math.PI/180);
        ctx.scale(0.07, 0.1);
        ctx.drawImage(img, 0, 0);
        //console.log("xOffSet: " + xoffset + " yOffset: " + yoffset);
        console.log("imgh" + img.height + " imgw" + img.width);
        ctx.beginPath(); //Canvas/Image dimensions: 375(width) by 406(height) 
        ctx.arc(325, 275, 45, 0, 2 * Math.PI); //ctx.arc(325, 275, 5, 0, 2 * Math.PI); 
        ctx.fillStyle = "red";
        ctx.fill();
        // Set title of page
        //document.getElementById("floor_name").innerHTML = this.plan_names[floor_number];
        //if (!document.getElementById("floor_number")) { return; }
        //console.log("This number is " + floor_number);
        //console.log("The plan name is " + this.plan_names[floor_number]);
        //document.getElementById("floor_number").innerHTML = this.plan_names[floor_number];
        // Create then adjusts the height and width of the canvas element
        /*
          this.img_src = this.images[floor_number].src;
          var canvas = document.createElement('canvas');
          document.getElementById("canvasContainer").appendChild(canvas);
          
          var ctx = canvas.getContext('2d');
          var img = document.createElement('img');
          var w = 3520;
          var h = 2376;
      */
        /*
        if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {
    
          canvas.height = window.outerHeight/2;
          canvas.width = window.outerWidth;
    
        } else {
    
          canvas.height = screen.height/2;
          canvas.width = screen.width;
    
        }
        */
        /*
            img.onload = function() {
                //alert("image is loaded");
                // get the scale
                var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
                console.log(canvas)
                // get the top left position of the image
                var x = ((canvas.width / 2) - (img.width / 2)) * scale;
                var y = ((canvas.height / 2) - (img.height / 2)) * scale;
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                //ctx.drawImage(img, x+100 , y+100);-
                
                
                var xoffset = 0;
                var xShelfJump = 4;
                var yoffset = 0;
        
                // low x is left, high x is right
                // low y is top, high y is bottom
        
                var aisleNum = +arr[1]; // Converts string to integer
                var rangeNum = +arr[2]; // Converts string to integer
                switch (arr[0]) */
        { /*
          case '0':
            switch (arr[1])
            {
              case '1':
                xoffset = 838;
                yoffset = 321;
                break;
            } */
            /* case '1':
               switch (arr[1])
               {
                 case '1':
                   xoffset = 896; // 838
                   yoffset = 320; // 321
                   break;
   
                 case '2':
                   xoffset = 847; // 790
                   yoffset = 320; // 321
                   break;
   
                 case '3':
                   xoffset = 788; //731
                   yoffset = 320;
                   break;
   
                 case '4':
                   xoffset = 658; //601
                   yoffset = 320;
                   break;
   
                 case '5':
                   xoffset = 645; //586
                   yoffset = 275;
                   break;
   
                 case '6':
                   xoffset = 591; //534
                   yoffset = 320;
                   break;
   
                 case '7':
                   xoffset = 535; // 475
                   yoffset = 320;
                   break;
   
                 default:
                   xoffset = 0;
                   yoffset = 0;
                   break;
               }
               // Determines when to shelf jump for Floor 2
               if (aisleNum <= 3 || aisleNum >= 6) // Bookshelves 1-3, 6-7 use shelfjump
                 if (rangeNum > 4)
                   yoffset -= xShelfJump;
               if (aisleNum == 5) // Bookshelf 5 uses shelfjump in a different location
                 if (rangeNum >= 12)
                   yoffset -= xShelfJump;
               if (aisleNum == 7) // Bookshelf 7 uses shelfjump in a different location
                 if (rangeNum >= 16)
                   yoffset -=xShelfJump;
               break;
   
             case '2':
               switch (arr[1])
               {
   
                 case '1':
                   xoffset = 844; // 786
                   yoffset = 330;
                   break;
   
                 case '2':
                   xoffset = 782; // 725
                   yoffset = 330;
                   break;
                 
                 case '3':
                   xoffset = 665; // 607
                   yoffset = 307;
                   break;
                 
                 case '4':
                   xoffset = 592; // 535
                   yoffset = 307;
                   break;
                 
                 case '5':
                   xoffset = 533; // 475
                   yoffset = 307;
                   break;
   
                 default:
                   xoffset = 0;
                   yoffset = 0;
                   break;
               }
   
               // Determines when to shelf jump for Floor 3
               if (aisleNum >= 3)
               {
                 if (rangeNum > 12)
                 {
                   yoffset -= xShelfJump;
                   if (aisleNum == 3)
                     xoffset -= 14;
                 }
               }
               break;
   
             case '3':
               switch (arr[1])
               {
         
                 case '1':
                   xoffset = 873; // 656
                   yoffset = 311;
                   break;
               
                 case '2':
                   xoffset = 651; //439
                   yoffset = 183;
                   break;
                 
                 default:
                   xoffset = 0;
                   yoffset = 0;
                   break;
               }
               break;
           }
           
           
           //yoffset = yoffset - ((Number(arr[2]) - (stackNum + 1)) * 5); //number is the distance between shelves
   
           yoffset = yoffset - (Number(arr[2]) * 10.5) + 10.5; // Number is the distance between the shelves.
   
           
   
           if (arr[3] == 'B') {
   
             yoffset = yoffset - 6.5; // 4
             
           }
       
           console.log("xOffSet: " + xoffset + " yOffset: " + yoffset);
           console.log("imgh" + img.height + " imgw" + img.width);
           ctx.beginPath(); //Canvas/Image dimensions: 375(width) by 406(height)
           ctx.arc(325, 275, 5, 0, 2 * Math.PI);//ctx.arc(325, 275, 5, 0, 2 * Math.PI);
           ctx.fillStyle = "red";
           ctx.fill();
   
       }; */
            img.src = this.images[floor_number].src;
            /*
                
                //COMMENTED THIS OUT TO CHECK IF RESOLUTION PROBLEM CAN BE SOLVED BY COMPLETING THIS STEP EARLIER
                
                if ( navigator.platform != "iPad" && navigator.platform != "iPhone" && navigator.platform != "iPod" ) {
            
                  canvas.height = window.outerHeight/2;
                  canvas.width = window.outerWidth;
            
                } else {
            
                  canvas.height = screen.height/2;
                  canvas.width = screen.width;
            
                  //screen.width or screen.height/2
            
                }
                
                
                img.height = canvas.height;
                img.width = canvas.width;
            */
            // this.img_src = canvas.toDataURL();
            // ctx.scale(.06,.06);
            //canvas.height = 0;
            //canvas.width = 0;
            console.log("imgh: " + canvas.height + "imgw: " + canvas.width);
        }
    };
    MapDisplayPage.prototype.decode = function (arr) {
        this.info = this.info + "Call Number:" + '\n';
        this.info.fontcolor("white");
        this.info = this.info + '\t' + "Floor: " + arr[0] + '\n';
        this.info = this.info + '\t' + "Aisle #: " + arr[1] + '\n';
        this.info = this.info + '\t' + "Range: " + arr[2] + '\n';
        this.info = this.info + '\t' + "Side: " + arr[3] + '\n';
    };
    MapDisplayPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataRecv = this.activeRoute.snapshot.paramMap.get('data');
        this.dataRecv = this.dataRecv.substr(1);
        this.bookValues = this.dataRecv.split(",", 12);
        this.decode(this.bookValues);
        /* Testing **********/
        this.bookValues[0] = '2'; // Floor
        this.bookValues[1] = '2'; // Aisle
        this.bookValues[2] = '2'; // Range
        this.bookValues[3] = 'A'; // Side
        /********************/
        setTimeout(function () { return _this.showFloor(Number(_this.bookValues[0]), _this.bookValues); }, 500);
    };
    MapDisplayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-display',
            template: __webpack_require__(/*! ./map-display.page.html */ "./src/app/map-display/map-display.page.html"),
            styles: [__webpack_require__(/*! ./map-display.page.scss */ "./src/app/map-display/map-display.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], MapDisplayPage);
    return MapDisplayPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~map-display-map-display-module.js.map