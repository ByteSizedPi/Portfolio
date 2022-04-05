(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Personal\1 Coding\1 Angular\Portfolio\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "3E3F":
/*!******************************************!*\
  !*** ./src/app/services/load.service.ts ***!
  \******************************************/
/*! exports provided: LoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadService", function() { return LoadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "NOJ/");
/* harmony import */ var _scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll.service */ "uPsD");




class LoadService extends _Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"] {
    constructor() {
        super();
        this.nodes = [];
        this.links = [
            "home",
            "about",
            "skills",
            "projects",
            "contact",
        ];
        this.listenOn = (index) => this.nodes[index];
        this.links.forEach(link => this.nodes.push(new _scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"](link).inView));
    }
}
LoadService.ɵfac = function LoadService_Factory(t) { return new (t || LoadService)(); };
LoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadService, factory: LoadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Helpers */ "NOJ/");
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/load.service */ "3E3F");




class AboutComponent extends _services_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"] {
    constructor(loadService) {
        super();
        this.loadService = loadService;
    }
    ngOnInit() {
        let sub = this.loadService.listenOn(1).subscribe(() => {
            this.liquidButton();
            this.loadIn();
            sub.unsubscribe();
        });
    }
    loadIn() {
        ['computer-animation', 'about-content'].forEach(el => {
            this.Id(el).style.opacity = '1';
        });
    }
    liquidButton() {
        $(function () {
            // Vars
            var pointsA = [], pointsB = [], $canvas = null, canvas = null, context = null, vars = null, points = 8, viscosity = 20, mouseDist = 70, damping = 0.05, showIndicators = false, mouseX = 0, mouseY = 0, relMouseX = 0, relMouseY = 0, mouseLastX = 0, mouseLastY = 0, mouseDirectionX = 0, mouseDirectionY = 0, mouseSpeedX = 0, mouseSpeedY = 0;
            /**
             * Get mouse direction
             */
            function mouseDirection(e) {
                if (mouseX < e.pageX)
                    mouseDirectionX = 1;
                else if (mouseX > e.pageX)
                    mouseDirectionX = -1;
                else
                    mouseDirectionX = 0;
                if (mouseY < e.pageY)
                    mouseDirectionY = 1;
                else if (mouseY > e.pageY)
                    mouseDirectionY = -1;
                else
                    mouseDirectionY = 0;
                mouseX = e.pageX;
                mouseY = e.pageY;
                relMouseX = (mouseX - $canvas.offset().left);
                relMouseY = (mouseY - $canvas.offset().top);
            }
            $(document).on('mousemove', mouseDirection);
            /**
             * Get mouse speed
             */
            function mouseSpeed() {
                mouseSpeedX = mouseX - mouseLastX;
                mouseSpeedY = mouseY - mouseLastY;
                mouseLastX = mouseX;
                mouseLastY = mouseY;
                setTimeout(mouseSpeed, 50);
            }
            mouseSpeed();
            /**
             * Init button
             */
            function initButton() {
                // Get button
                var button = $('.btn-liquid');
                var buttonWidth = button.width();
                var buttonHeight = button.height();
                // Create canvas
                $canvas = $('<canvas></canvas>');
                button.append($canvas);
                canvas = $canvas.get(0);
                canvas.width = buttonWidth + 100;
                canvas.height = buttonHeight + 100;
                context = canvas.getContext('2d');
                // Add points
                var x = buttonHeight / 2;
                for (var j = 1; j < points; j++) {
                    addPoints((x + ((buttonWidth - buttonHeight) / points) * j), 0);
                }
                addPoints(buttonWidth - buttonHeight / 5, 0);
                addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
                addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
                for (var j = points - 1; j > 0; j--) {
                    addPoints((x + ((buttonWidth - buttonHeight) / points) * j), buttonHeight);
                }
                addPoints(buttonHeight / 5, buttonHeight);
                addPoints(-buttonHeight / 10, buttonHeight / 2);
                addPoints(buttonHeight / 5, 0);
                // Start render
                renderCanvas();
            }
            /**
             * Add points
             */
            function addPoints(x, y) {
                pointsA.push(new Point(x, y, 1));
                pointsB.push(new Point(x, y, 2));
            }
            /**
             * Point
             */
            function Point(x, y, level) {
                this.x = this.ix = 50 + x;
                this.y = this.iy = 50 + y;
                this.vx = 0;
                this.vy = 0;
                this.cx1 = 0;
                this.cy1 = 0;
                this.cx2 = 0;
                this.cy2 = 0;
                this.level = level;
            }
            Point.prototype.move = function () {
                this.vx += (this.ix - this.x) / (viscosity * this.level);
                this.vy += (this.iy - this.y) / (viscosity * this.level);
                var dx = this.ix - relMouseX, dy = this.iy - relMouseY;
                var relDist = (1 - Math.sqrt((dx * dx) + (dy * dy)) / mouseDist);
                // Move x
                if ((mouseDirectionX > 0 && relMouseX > this.x) || (mouseDirectionX < 0 && relMouseX < this.x)) {
                    if (relDist > 0 && relDist < 1) {
                        this.vx = (mouseSpeedX / 4) * relDist;
                    }
                }
                this.vx *= (1 - damping);
                this.x += this.vx;
                // Move y
                if ((mouseDirectionY > 0 && relMouseY > this.y) || (mouseDirectionY < 0 && relMouseY < this.y)) {
                    if (relDist > 0 && relDist < 1) {
                        this.vy = (mouseSpeedY / 4) * relDist;
                    }
                }
                this.vy *= (1 - damping);
                this.y += this.vy;
            };
            /**
             * Render canvas
             */
            function renderCanvas() {
                // rAF
                let rafID = requestAnimationFrame(renderCanvas);
                // Clear scene
                context.clearRect(0, 0, $canvas.width(), $canvas.height());
                context.fillStyle = 'transparent';
                // context.fillStyle = 'blue';
                context.fillRect(0, 0, $canvas.width(), $canvas.height());
                // Move points
                for (var i = 0; i <= pointsA.length - 1; i++) {
                    pointsA[i].move();
                    pointsB[i].move();
                }
                // Create dynamic gradient
                var gradientX = Math.min(Math.max(mouseX - $canvas.offset().left, 0), $canvas.width());
                var gradientY = Math.min(Math.max(mouseY - $canvas.offset().top, 0), $canvas.height());
                var distance = Math.sqrt(Math.pow(gradientX - $canvas.width() / 2, 2) + Math.pow(gradientY - $canvas.height() / 2, 2)) / Math.sqrt(Math.pow($canvas.width() / 2, 2) + Math.pow($canvas.height() / 2, 2));
                var gradient = context.createRadialGradient(gradientX, gradientY, 300 + (300 * distance), gradientX, gradientY, 0);
                gradient.addColorStop(0, '#11BE79');
                gradient.addColorStop(1, '#11BE79');
                // Draw shapes
                var groups = [pointsA, pointsB];
                for (var j = 0; j <= 1; j++) {
                    var points = groups[j];
                    if (j == 0) {
                        // Background style
                        context.fillStyle = '#9d00ff';
                    }
                    else {
                        // Foreground style
                        context.fillStyle = gradient;
                    }
                    context.beginPath();
                    context.moveTo(points[0].x, points[0].y);
                    for (var i = 0; i < points.length; i++) {
                        var p = points[i];
                        var nextP = points[i + 1];
                        var val = 30 * 0.552284749831;
                        if (nextP != undefined) {
                            p.cx1 = (p.x + nextP.x) / 2;
                            p.cy1 = (p.y + nextP.y) / 2;
                            p.cx2 = (p.x + nextP.x) / 2;
                            p.cy2 = (p.y + nextP.y) / 2;
                            context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
                            //  continue;
                            // }
                            // context.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, nextP.x, nextP.y);
                        }
                        else {
                            nextP = points[0];
                            p.cx1 = (p.x + nextP.x) / 2;
                            p.cy1 = (p.y + nextP.y) / 2;
                            context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
                        }
                    }
                    // context.closePath();
                    context.fill();
                }
                if (showIndicators) {
                    // Draw points
                    context.fillStyle = '#FFF';
                    context.beginPath();
                    for (var i = 0; i < pointsA.length; i++) {
                        var p = pointsA[i];
                        context.rect(p.x - 1, p.y - 1, 2, 2);
                    }
                    context.fill();
                    // Draw controls
                    // context.fillStyle = '#FFF';
                    context.beginPath();
                    for (var i = 0; i < pointsA.length; i++) {
                        var p = pointsA[i];
                        context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
                        context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
                    }
                    context.fill();
                }
            }
            // Init
            initButton();
        });
    }
    contact() {
        this.Id("contact-link").click();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_2__["LoadService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 48, vars: 0, consts: [["id", "about", 1, "center"], ["src", "./assets/images/computer_animation.gif", "alt", "computer_animation", "id", "computer-animation"], ["id", "about-content", 1, "text", "fadein"], [1, "tag-open"], [1, "fa-solid", "fa-chevron-left"], [1, "fa", "fa-chevron-right"], [1, "tag-close"], [1, "row"], [1, "btn-liquid", "center", 3, "click"], [1, "inner", "center"], ["href", "https://docs.google.com/document/d/10VW0vK2XUaqtabzpmFwGVRlcDDHXWMAd/edit?usp=sharing&ouid=103536070252261943960&rtpof=true&sd=true", "target", "_blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " About me\uD83D\uDC68\u200D\uD83D\uDCBB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "/h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Johan Venter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ", an aspiring developer with a bachelor's in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Computer Science and Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " and currently doing an honour's degree in Computer Science and Information Systems at the North West University. Some of my hobbies and interests include playing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "squash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " for the university as well as coaching juniors. I tutor for Maths and Science and Highschool Ferdinand Postma. Training in Music and Exploring Photography has given me an eye for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "visual design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "user experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ". My primary interest is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Full Stack Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ". Parallel to my studies I have learned and become proficient in technologies such as Angular, Git, Windows and Linux terminal, Nodejs, MongoDB and Oracle SQL Developer to name a few. I am an avid programmer, a quick learner, great at problem solving and have good technical skills. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "/info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_42_listener() { return ctx.contact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " contact me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "my cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\n  padding: 3rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 6rem;\n  overflow: hidden;\n  height: 100vh;\n}\n\n.tag-open[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--lilac);\n  font-weight: 600;\n  margin-top: 2rem;\n}\n\n.tag-close[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--lilac);\n  font-weight: 600;\n  margin-bottom: 3rem;\n}\n\n.text[_ngcontent-%COMP%] {\n  position: relative;\n  justify-self: center;\n}\n\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: var(--green);\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0;\n  justify-self: center;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 5rem 0 1rem;\n  color: #e0e0e0;\n  font-weight: 200;\n  box-sizing: border-box;\n}\n\n.text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #33ffad;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  place-self: center;\n  object-fit: cover;\n}\n\n.btn-liquid[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 160px;\n  height: 52px;\n  color: var(--deep-blue);\n  font: 700 1.2rem/60px \"Poppins\", sans-serif;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 26px;\n}\n\n.btn-liquid[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 160px;\n  height: 52px;\n  margin-left: 2rem;\n  border: 2px solid var(--green);\n  background: transparent;\n  outline: none;\n  border-radius: 26px;\n  font: 700 1.2rem \"Poppins\", sans-serif;\n  cursor: pointer;\n  transition: background-color 0.1s, border-width 0.1s;\n}\n\nbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n\nbutton[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:active {\n  background-color: #15694763;\n  border-width: 4px;\n}\n\n@media (min-width: 480px) {\n  .btn-liquid[_ngcontent-%COMP%] {\n    background: none;\n  }\n}\n\n@media (max-width: 768px) {\n  img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .row[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFBRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBSUEsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxvREFBQTtBQUhGOztBQUxFO0VBQ0UsbUJBQUE7QUFPSjs7QUFFRTtFQUVFLDJCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLQTtFQUNFO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxhQUFBO0VBSEY7O0VBTUE7SUFDRSwwQkFBQTtFQUhGOztFQU1BO0lBQ0UsOEJBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICBncmlkLWdhcDogNnJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi50YWctb3BlbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1saWxhYyk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4udGFnLWNsb3NlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWxpbGFjKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgaDIge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDAgNXJlbSAwIDFyZW07XHJcbiAgICBjb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICBiIHtcclxuICAgIGNvbG9yOiBoc2woMTU2LCAxMDAlLCA2MCUpO1xyXG4gIH1cclxufVxyXG5cclxuaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uYnRuLWxpcXVpZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1kZWVwLWJsdWUpO1xyXG4gIGZvbnQ6IDcwMCAxLjJyZW0vNjBweCBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG59XHJcblxyXG4uYnRuLWxpcXVpZCAuaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcclxuICBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgfVxyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICBmb250OiA3MDAgMS4ycmVtIFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMsIGJvcmRlci13aWR0aCAwLjFzO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTY5NDc2MztcclxuICAgIGJvcmRlci13aWR0aDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmJ0bi1saXF1aWQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _services_load_service__WEBPACK_IMPORTED_MODULE_2__["LoadService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Helpers */ "NOJ/");
/* harmony import */ var _services_media_queries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/media-queries.service */ "yh1Q");
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ "3E3F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _media_links_media_links_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-links/media-links.component */ "uNaF");







function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function HomeComponent_div_3_Template_img_load_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "e");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "e");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "r");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-media-links");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent extends src_app_services_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"] {
    constructor(mediaQueries, loadService) {
        super();
        this.mediaQueries = mediaQueries;
        this.loadService = loadService;
        this.loaded = false;
        this.load = (event) => {
            this.loaded = true;
            this.onLoad(event);
            // this.mediaQueries.init();
            setTimeout(() => {
                this.scrollEvent();
                this.circleClip();
            }, 0);
        };
    }
    ngOnInit() {
    }
    circleClip() {
        let dev = this.Id("developer");
        let root = document.documentElement;
        dev.addEventListener("mousemove", (e) => {
            let box = dev.getBoundingClientRect();
            let xoffset = e.clientX - box.left;
            let yoffset = e.clientY - box.top;
            let xperc = 100 * xoffset / box.width;
            let yperc = 100 * yoffset / box.height;
            if (!this.mediaQueries.isMobile()) {
                root.style.setProperty('--centroid', "circle(30% at " + xperc + "% " + yperc + "%)");
            }
        });
        dev.addEventListener("mouseleave", e => {
            root.style.setProperty('--centroid', "circle(0% at 0% 0%)");
        });
    }
    scrollEvent() {
        const bg = this.Id("bg");
        const text = this.Id("text");
        window.addEventListener("scroll", () => {
            //set filter + img top
            let perc = this.constrain(1 - window.scrollY / bg.clientHeight, 0, 1);
            bg.style.opacity = `${perc - 0.1}`;
            if (!this.mediaQueries.isMobile()) {
                bg.style.top = Math.floor((perc - 1) * bg.clientHeight * 0.5) + "px";
                bg.style.animation = "none";
                bg.style.transform = `scale(${1 + (0.4 * (1 - perc))})`;
                //text animation
                perc = this.constrain(window.scrollY / bg.clientHeight, 0, 1);
                text.style.opacity = `${1 - perc * 1.5}`;
                text.style.transform = `scale(${1 + 0.4 * perc}) translateY(${perc * -5}rem)`;
            }
        });
    }
    ;
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_media_queries_service__WEBPACK_IMPORTED_MODULE_2__["MediaQueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__["LoadService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 1, consts: [["id", "home"], ["id", "bg"], ["src", "./assets/images/backdrop.webp", "alt", "", "loading", "lazy", 3, "load"], ["id", "text", "class", "center column", 4, "ngIf"], ["id", "text", 1, "center", "column"], ["src", "./assets/images/portrait.webp", "id", "portrait", "alt", "", 3, "load"], [1, "text-container", "center"], ["id", "name", 1, "row"], ["id", "surname", 1, "row"], ["id", "developer", "data-text", "Developer"], ["id", "profile"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function HomeComponent_Template_img_load_2_listener($event) { return ctx.load($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 33, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _media_links_media_links_component__WEBPACK_IMPORTED_MODULE_5__["MediaLinksComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n#bg[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: calc(100vh + 3rem);\n  top: 0;\n  left: 0;\n}\n\n#bg[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #20265a79;\n}\n\n#bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(100vh + 3rem);\n  position: absolute;\n  object-fit: cover;\n  object-position: center;\n  filter: grayscale(0.5) sepia(0.6);\n}\n\n#text[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(100vh - 3rem);\n  position: relative;\n  margin-top: 3rem;\n}\n\n#text[_ngcontent-%COMP%]   #portrait[_ngcontent-%COMP%] {\n  height: 20vh;\n  border-radius: 50%;\n  border: 2px solid var(--yellow);\n  padding: 0.5rem;\n  margin-bottom: 4vh;\n  transform: scale(0);\n  animation: bob-in 0.5s 0.5s forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n@keyframes bob-in {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n#text[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  pointer-events: none;\n  font-weight: 600;\n  font-size: 15vh;\n  line-height: 15vh;\n  margin-right: 4vh;\n}\n\n#text[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  opacity: 0;\n  color: transparent;\n  transform: scale(0);\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\n#text[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1) {\n  animation: bob-in-color 0.5s 100ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {\n  animation: bob-in-color 0.5s 200ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(3) {\n  animation: bob-in-color 0.5s 300ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(4) {\n  animation: bob-in-color 0.5s 400ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(5) {\n  animation: bob-in-color 0.5s 500ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  pointer-events: none;\n  font-weight: 400;\n  font-size: 15vh;\n  line-height: 15vh;\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  opacity: 0;\n  color: transparent;\n  transform: scale(0);\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1) {\n  animation: bob-in-color 0.5s 600ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {\n  animation: bob-in-color 0.5s 700ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(3) {\n  animation: bob-in-color 0.5s 800ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(4) {\n  animation: bob-in-color 0.5s 900ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(5) {\n  animation: bob-in-color 0.5s 1000ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #surname[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(6) {\n  animation: bob-in-color 0.5s 1100ms forwards cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n#text[_ngcontent-%COMP%]   #developer[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: 500;\n  margin: 0;\n  padding: 0.5rem;\n  text-shadow: 0px 0px 10px black;\n  color: white;\n  animation: drop-flip 0.5s 1s forwards;\n  -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n  font-size: 8vh;\n  line-height: 8vh;\n  margin-right: 2vh;\n}\n\n#text[_ngcontent-%COMP%]   #developer[_ngcontent-%COMP%]::after {\n  -webkit-text-stroke: 2px transparent;\n  pointer-events: none;\n  content: attr(data-text);\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0.5rem;\n  background-image: url(https://media.giphy.com/media/xThuW2fbatiCsyY3zW/giphy.gif);\n  filter: brightness(1.5) saturate(1.5);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  -webkit-clip-path: var(--centroid);\n          clip-path: var(--centroid);\n}\n\n#text[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\n  pointer-events: none;\n  font-weight: 200;\n  font-size: 7vh;\n  margin: 0;\n  padding: 0;\n  text-shadow: 0px 0px 12px black;\n  color: white;\n  animation: slide-right 0.4s 1.4s forwards;\n  -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);\n          clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);\n}\n\napp-media-links[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n}\n\n@keyframes expand {\n  from {\n    width: 0;\n    opacity: 0;\n  }\n  to {\n    width: 10rem;\n    opacity: 1;\n  }\n}\n\n@keyframes bob-in-color {\n  to {\n    color: var(--yellow);\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes slide-right {\n  from {\n    -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);\n            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);\n  }\n  to {\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n}\n\n@keyframes drop-flip {\n  from {\n    transform: translateY(-2rem);\n    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);\n  }\n  to {\n    transform: translateY(0rem);\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7QUFBSjs7QUFJQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RUFBQTtBQURKOztBQUdJO0VBQ0U7SUFDRSxtQkFBQTtFQUROO0VBR0k7SUFDRSxtQkFBQTtFQUROO0FBQ0Y7O0FBS0U7RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQUtJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUhOOztBQUtRO0VBQ0UsK0VBQUE7QUFIVjs7QUFFUTtFQUNFLCtFQUFBO0FBQVY7O0FBRFE7RUFDRSwrRUFBQTtBQUdWOztBQUpRO0VBQ0UsK0VBQUE7QUFNVjs7QUFQUTtFQUNFLCtFQUFBO0FBU1Y7O0FBSEU7RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFISTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUFLTjs7QUFIUTtFQUNFLCtFQUFBO0FBS1Y7O0FBTlE7RUFDRSwrRUFBQTtBQVFWOztBQVRRO0VBQ0UsK0VBQUE7QUFXVjs7QUFaUTtFQUNFLCtFQUFBO0FBY1Y7O0FBZlE7RUFDRSxnRkFBQTtBQWlCVjs7QUFsQlE7RUFDRSxnRkFBQTtBQW9CVjs7QUFkRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUVBQUE7VUFBQSx5REFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWRJO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxpRkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQWdCTjs7QUFaRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUFjSjs7QUFWQTtFQUNFLGVBQUE7QUFhRjs7QUFWQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFVBQUE7RUFhRjtFQVhBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFhRjtBQUNGOztBQVZBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQVlGO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUFXRjtFQVRBO0lBQ0UsMkRBQUE7WUFBQSxtREFBQTtFQVdGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsaUVBQUE7WUFBQSx5REFBQTtFQVVGO0VBUkE7SUFDRSwyQkFBQTtJQUNBLDJEQUFBO1lBQUEsbURBQUE7RUFVRjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4jYmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgM3JlbSk7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjAyNjVhNzk7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgM3JlbSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMC41KSBzZXBpYSgwLjYpO1xyXG4gIH1cclxufVxyXG5cclxuI3RleHQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuXHJcbiAgI3BvcnRyYWl0IHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXllbGxvdyk7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0dmg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgYW5pbWF0aW9uOiBib2ItaW4gMC41cyAwLjVzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjQ3LCAxLjY0LCAwLjQxLCAwLjgpO1xyXG5cclxuICAgIEBrZXlmcmFtZXMgYm9iLWluIHtcclxuICAgICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI25hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE1dmg7XHJcbiAgICBsaW5lLWhlaWdodDogMTV2aDtcclxuICAgIG1hcmdpbi1yaWdodDogNHZoO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNSB7XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgjeyRpfSkge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBib2ItaW4tY29sb3IgMC41cyAjeyRpICogMTAwfW1zIGZvcndhcmRzIGN1YmljLWJlemllcigwLjQ3LCAxLjY0LCAwLjQxLCAwLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3N1cm5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1dmg7XHJcbiAgICBsaW5lLWhlaWdodDogMTV2aDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDYge1xyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoI3skaX0pIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogYm9iLWluLWNvbG9yIDAuNXMgI3soJGkgKyA1KSAqIDEwMH1tcyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC40NywgMS42NCwgMC40MSwgMC44KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNkZXZlbG9wZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiKDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBkcm9wLWZsaXAgMC41cyAxcyBmb3J3YXJkcztcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIGZvbnQtc2l6ZTogOHZoO1xyXG4gICAgbGluZS1oZWlnaHQ6IDh2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMnZoO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IHRyYW5zcGFyZW50O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEveFRodVcyZmJhdGlDc3lZM3pXL2dpcGh5LmdpZik7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpIHNhdHVyYXRlKDEuNSk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNlbnRyb2lkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNwcm9maWxlIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogN3ZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjRzIDEuNHMgZm9yd2FyZHM7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMTAwJSwgMCUgMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtbWVkaWEtbGlua3Mge1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBleHBhbmQge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib2ItaW4tY29sb3Ige1xyXG4gIHRvIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCAxMDAlLCAwJSAxMDAlKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkcm9wLWZsaXAge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _services_media_queries_service__WEBPACK_IMPORTED_MODULE_2__["MediaQueriesService"] }, { type: _services_load_service__WEBPACK_IMPORTED_MODULE_3__["LoadService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F1hY":
/*!**********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.ts ***!
  \**********************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Helpers */ "NOJ/");
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/load.service */ "3E3F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TopNavComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#" + link_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", link_r1.isActive ? "link-active" : "")("id", link_r1.text + "-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, link_r1.text), " ");
} }
class TopNavComponent extends _services_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"] {
    constructor(loadService) {
        super();
        this.loadService = loadService;
        this.prevLink = 0;
        this.navOpen = false;
        this.links = [
            { text: "home", isActive: true },
            { text: "about", isActive: false },
            { text: "skills", isActive: false },
            { text: "projects", isActive: false },
            { text: "contact", isActive: false },
        ];
    }
    ngOnInit() {
        let i = 0;
        this.loop(5, i => this.loadService.listenOn(i)
            .subscribe(() => this.setActive(i)));
    }
    setActive(index) {
        this.links[this.prevLink].isActive = false;
        this.links[this.prevLink = index].isActive = true;
        setTimeout(() => this.toggleNav(false), 10);
    }
    toggleNav(toggle = true) {
        this.navOpen = toggle ? !this.navOpen : false;
    }
}
TopNavComponent.ɵfac = function TopNavComponent_Factory(t) { return new (t || TopNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_2__["LoadService"])); };
TopNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopNavComponent, selectors: [["app-top-nav"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 2, consts: [[1, "space-between", "row"], ["id", "bars", 3, "click"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 14", 1, "center"], ["x1", "1", "y1", "7", "x2", "19", "y2", "7", 1, "cls-1"], ["x1", "1", "y1", "1", "x2", "19", "y2", "1", 1, "cls-1"], ["x1", "1", "y1", "13", "x2", "19", "y2", "13", 1, "cls-1"], [1, "center-vertical", "row", "links", 3, "ngClass"], ["class", "center link", 3, "href", "ngClass", "id", 4, "ngFor", "ngForOf"], [1, "center", "link", 3, "href", "ngClass", "id"]], template: function TopNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_Template_span_click_2_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopNavComponent_a_10_Template, 3, 6, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.navOpen ? "nav-open" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["nav[_ngcontent-%COMP%] {\n  top: 0;\n  position: fixed;\n  box-sizing: border-box;\n  width: 100%;\n  height: 3rem;\n  color: white;\n  padding-left: 0.5rem;\n  background-color: #191932aa;\n  -webkit-backdrop-filter: blur(8px) brightness(0.8);\n          backdrop-filter: blur(8px) brightness(0.8);\n  box-shadow: rgba(0, 0, 0, 0.342) 0px 20px 30px -10px;\n}\n\nh2[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 3rem;\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n}\n\n.links[_ngcontent-%COMP%] {\n  transition: background-color 0s 0.3s;\n}\n\n#bars[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 13.925px;\n  right: 13.925px;\n  width: 1.8rem;\n}\n\n#bars[_ngcontent-%COMP%]:active   .cls-1[_ngcontent-%COMP%] {\n  stroke: var(--yellow);\n}\n\n#bars[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #fff;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2px;\n}\n\n.link[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.75rem;\n  font-size: 1rem;\n  font-weight: 200;\n  text-decoration: none;\n  color: white;\n  position: relative;\n  transition: color 0.2s;\n  font-weight: 200;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 3rem;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  color: var(--yellow);\n}\n\n.link[_ngcontent-%COMP%]:before, .link[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 8px;\n  left: 0.6rem;\n  right: 0;\n  height: 3px;\n  background-color: var(--yellow);\n  border-radius: 4px;\n  width: calc(100% - 1.2rem);\n}\n\n.link[_ngcontent-%COMP%]:before {\n  opacity: 0;\n  transform: translateY(-8px);\n  transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;\n}\n\n.link[_ngcontent-%COMP%]:after {\n  opacity: 0;\n  transform: translateY(4px);\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;\n}\n\n.link-active[_ngcontent-%COMP%] {\n  color: var(--yellow);\n  font-weight: 500;\n}\n\n.link-active[_ngcontent-%COMP%]:before, .link-active[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.link-active[_ngcontent-%COMP%]:before {\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;\n}\n\n.link-active[_ngcontent-%COMP%]:after {\n  transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s 0.2s;\n}\n\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    background-color: transparent;\n    -webkit-backdrop-filter: none;\n            backdrop-filter: none;\n    box-shadow: none;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    margin-top: 3rem;\n    height: 100vh;\n    width: 6rem;\n    padding: 1rem;\n    transform: translateX(8rem);\n    background: var(--deep-blue);\n    transition: transform 0.1s;\n    animation: fade-in 0.4s forwards;\n  }\n\n  .nav-open[_ngcontent-%COMP%] {\n    transform: translateX(0px);\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  nav[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    flex-direction: row;\n  }\n\n  #bars[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 1025px) and (max-width: 1200px) {\n  nav[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    flex-direction: row;\n  }\n\n  #bars[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 1201px) {\n  nav[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .links[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    flex-direction: row;\n  }\n\n  #bars[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvcC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFFQSwyQkFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7RUFDQSxvREFBQTtBQUFGOztBQUdBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFFSTtFQUNFLHFCQUFBO0FBQU47O0FBR0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQVFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQUxGOztBQU1FO0VBQ0Usb0JBQUE7QUFKSjs7QUFNRTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFMSjs7QUFPRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRFQUFBO0FBTEo7O0FBT0U7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnRkFBQTtBQUxKOztBQVNBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQU9FO0VBRUUsVUFBQTtFQUNBLHdCQUFBO0FBTko7O0FBUUU7RUFDRSxnRkFBQTtBQU5KOztBQVFFO0VBQ0Usc0ZBQUE7QUFOSjs7QUFVQTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsZ0JBQUE7RUFQRjs7RUFTQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSwwQkFBQTtJQUNBLGdDQUFBO0VBTkY7O0VBUUE7SUFDRSwwQkFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLGlCQUFBO0VBTkY7O0VBUUE7SUFDRSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxtQkFBQTtFQUxGOztFQU9BO0lBQ0UsYUFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGlCQUFBO0VBTEY7O0VBT0E7SUFDRSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxtQkFBQTtFQUpGOztFQU1BO0lBQ0UsYUFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGlCQUFBO0VBSkY7O0VBTUE7SUFDRSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxtQkFBQTtFQUhGOztFQUtBO0lBQ0UsYUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1ibHVlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTMyYWE7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCkgYnJpZ2h0bmVzcygwLjgpO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNDIpIDBweCAyMHB4IDMwcHggLTEwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyAwLjNzO1xyXG59XHJcblxyXG4jYmFycyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTMuOTI1cHg7XHJcbiAgcmlnaHQ6IDEzLjkyNXB4O1xyXG4gIHdpZHRoOiAxLjhyZW07XHJcbiAgJjphY3RpdmUge1xyXG4gICAgLmNscy0xIHtcclxuICAgICAgc3Ryb2tlOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2xzLTEge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbiRkdXJhdGlvbjogMC4ycztcclxuJGRpc3RhbmNlOiA4cHg7XHJcbiRlYXNlT3V0QmFjazogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4ubGluayB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogM3JlbTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gIH1cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGxlZnQ6IDAuNnJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuMnJlbSk7XHJcbiAgfVxyXG4gICY6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRkaXN0YW5jZSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgJGVhc2VPdXRCYWNrLCBvcGFjaXR5IDBzO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGRpc3RhbmNlLzIpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRkdXJhdGlvbiAkZWFzZU91dEJhY2ssIG9wYWNpdHkgJGR1cmF0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuLmxpbmstYWN0aXZlIHtcclxuICBjb2xvcjogdmFyKC0teWVsbG93KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRkdXJhdGlvbiAkZWFzZU91dEJhY2ssIG9wYWNpdHkgJGR1cmF0aW9uO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAkZHVyYXRpb24gJGVhc2VPdXRCYWNrLCBvcGFjaXR5IDBzICRkdXJhdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5saW5rcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cmVtKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRlZXAtYmx1ZSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcclxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjRzIGZvcndhcmRzO1xyXG4gIH1cclxuICAubmF2LW9wZW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBuYXYge1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgfVxyXG4gIC5saW5rcyB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgI2JhcnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICBuYXYge1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgfVxyXG4gIC5saW5rcyB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgI2JhcnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICBuYXYge1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgfVxyXG4gIC5saW5rcyB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgI2JhcnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-nav',
                templateUrl: './top-nav.component.html',
                styleUrls: ['./top-nav.component.scss']
            }]
    }], function () { return [{ type: _services_load_service__WEBPACK_IMPORTED_MODULE_2__["LoadService"] }]; }, null); })();


/***/ }),

/***/ "NOJ/":
/*!*************************************!*\
  !*** ./src/app/services/Helpers.ts ***!
  \*************************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
class Helpers {
    constructor() {
        this.mod = (val, base) => (base + val % base) % base;
        this.constrain = (num, min, max) => min * +(num < min) + max * +(num > max) + num * +(num <= max && num >= min);
        this.asTitle = (title) => title.replace(/_/g, ' ');
        this.onLoad = (event) => event.target.style.opacity = '1';
        this.getTextColor = (hex) => {
            if (!hex)
                return '#fff';
            return parseInt(hex.substr(1, 2), 16) * 0.299 +
                parseInt(hex.substr(3, 2), 16) * 0.587 +
                parseInt(hex.substr(5, 2), 16) * 0.114 > 150 ? '#000' : '#fff';
        };
        this.darkenColor = (hex, perc) => {
            if (!hex)
                return '#fff';
            let r = parseInt(hex.substr(1, 2), 16) * perc;
            let g = parseInt(hex.substr(3, 2), 16) * perc;
            let b = parseInt(hex.substr(5, 2), 16) * perc;
            return `rgb(${r},${g},${b})`;
        };
        this.getFontWeight = (hex) => this.getTextColor(hex) === '#fff' ? 500 : 700;
        this.Id = (s) => document.getElementById(s);
        this.query = (s) => document.querySelector(s);
        this.queryAll = (s) => Array.from(document.querySelectorAll(s));
        this.body = () => this.query("body");
        this.async = (func) => setTimeout(func, 0);
        this.loop = (num, func) => {
            for (let i = 0; i < num; i++)
                func(i);
        };
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "F1hY");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");








class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_1__["TopNavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]], styles: ["app-top-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 4;\n}\n\ndiv[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\n\nsection[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: var(--deep-blue);\n  margin-top: 8rem;\n}\n\nsection[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: -8rem;\n  left: 0;\n  height: 8rem;\n  width: 100vw;\n  background: linear-gradient(0deg, #191932 0%, rgba(25, 25, 50, 0) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVFQUFBO0FBQUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRvcC1uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWRlZXAtYmx1ZSk7XHJcbiAgbWFyZ2luLXRvcDogOHJlbTtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLThyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAwZGVnLFxyXG4gICAgICByZ2JhKDI1LCAyNSwgNTAsIDEpIDAlLFxyXG4gICAgICByZ2JhKDI1LCAyNSwgNTAsIDApIDEwMCVcclxuICAgICk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "F1hY");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _home_media_links_media_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/media-links/media-links.component */ "uNaF");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_4__["TopNavComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _home_media_links_media_links_component__WEBPACK_IMPORTED_MODULE_6__["MediaLinksComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_4__["TopNavComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _home_media_links_media_links_component__WEBPACK_IMPORTED_MODULE_6__["MediaLinksComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 34, vars: 0, consts: [["id", "contact", 1, "column", "center-vertical"], [1, "bottom"], [1, "space-between"], [1, "contact-item", "center", "space-between"], [1, "fas", "fa-envelope", "row", "center"], ["href", "https://gmail.com"], [1, "fas", "fa-phone-alt", "row", "center"], ["href", "#"], [1, "fab", "fa-github", "row", "center"], ["href", "https://github.com/ByteSizedPi", "target", "_blank"], [1, "fab", "fa-linkedin", "row", "center"], ["href", "https://www.linkedin.com/in/johanventer0/", "target", "_blank"], [1, "fab", "fa-instagram", "center", "space-between"], ["href", "https://www.instagram.com/johanventer1/", "target", "_blank"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "johann12venter@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mobile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+27 64 905 6201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Github:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "github.com/ByteSizedPi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LinkedIn:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "linkedin.com/in/johanventer0/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Instagram:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "instagram.com/johanventer1/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n  padding: 2rem;\n  margin: 15rem 1rem 0 1rem;\n}\n\nul[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  border-radius: 0.5rem;\n  background-color: #61542152;\n  color: var(--yellow);\n  list-style-type: none;\n  padding: 1rem;\n  margin: 1rem 0;\n  min-width: 33vw;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-weight: 400;\n  font-size: 5rem;\n  color: white;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin: 1rem;\n  margin-bottom: 3rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  margin: 0;\n  padding: 0;\n  margin-left: 1rem;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--yellow);\n  background-color: #61542152;\n  padding: 0.75rem;\n  margin-left: 0.5rem;\n  border-radius: 0.3rem;\n  transition: background 0.1s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: #b19a3f52;\n}\n\n@media (max-width: 480px) {\n  li[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  h3[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  a[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFLQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFGRjs7QUFJRTtFQUNFLDJCQUFBO0FBRko7O0FBTUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBSEY7O0VBTUE7O0lBRUUsaUJBQUE7RUFIRjs7RUFNQTtJQUNFLGtCQUFBO0VBSEY7O0VBTUE7SUFDRSxlQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3JlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3JlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1hcmdpbjogMTVyZW0gMXJlbSAwIDFyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBsaSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgdmFyKC0teWVsbG93KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTU0MjE1MjtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgbWluLXdpZHRoOiAzM3Z3O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXllbGxvdyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxNTQyMTUyO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjFzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTlhM2Y1MjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGgzLFxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Helpers */ "NOJ/");
/* harmony import */ var _services_media_queries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/media-queries.service */ "yh1Q");
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ "3E3F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SkillsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SkillsComponent_span_6_Template_img_load_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/svg/" + skill_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", skill_r1.name);
} }
class SkillsComponent extends _services_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"] {
    constructor(mediaQueries, loadService) {
        super();
        this.mediaQueries = mediaQueries;
        this.loadService = loadService;
        this.skills = [
            { name: "Javascript", link: "javascript.svg" },
            { name: "Typescript", link: "typescript.svg" },
            { name: "Java", link: "java.svg" },
            { name: "Angular", link: "angular.svg" },
            { name: "HTML", link: "html5.svg" },
            { name: "CSS", link: "css3.svg" },
            { name: "Sass", link: "sass.svg" },
            { name: "Node", link: "nodejs.svg" },
            { name: "SQL", link: "sql.svg" },
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let sub = this.loadService.listenOn(2).subscribe(() => {
            this.queryAll('.skill').forEach((skill, i) => {
                setTimeout(() => {
                    skill.style.transform = 'scale(1)';
                }, i * 150);
            });
            sub.unsubscribe();
            setTimeout(() => this.addEventListeners(), 1500);
        });
        this.scrollEvent();
    }
    addEventListeners() {
        let isHovering = false;
        this.queryAll(".skill-container")
            .forEach((element) => {
            element.addEventListener("mouseleave", (e) => {
                setTimeout(() => isHovering = false, 150);
                if (!this.mediaQueries.isMobile()) {
                    element.querySelector(".skill").style.transition = ".2s";
                    element.querySelector(".skill").style.transform = "none";
                }
            });
            element.addEventListener("mousemove", (e) => {
                if (!this.mediaQueries.isMobile()) {
                    let box = element.getBoundingClientRect();
                    let xoffset = e.clientX - box.left - box.width / 2;
                    let yoffset = e.clientY - box.top - box.height / 2;
                    let xdeg = 360 * xoffset / (box.width * 5);
                    let ydeg = 360 * yoffset / (box.height * 5);
                    element.querySelector(".skill").style.transform = `rotateX(${-ydeg}deg) rotateY(${xdeg}deg)`;
                    element.querySelector(".skill").style.transition = isHovering ? "none" : ".2s";
                    setTimeout(() => isHovering = true, 100);
                    // element.querySelector<HTMLElement>(".clip-img").style.clipPath = "circle(100% at 50% 50%)";
                }
            });
            element.addEventListener("touchmove", () => element.querySelector(".skill").style.transform = "none");
        });
    }
    scrollEvent() {
        const skills = this.query(".skills-text");
        const skills2 = this.query(".skills-text-rotated");
        window.addEventListener("scroll", () => {
            let top = skills.getBoundingClientRect().top;
            const offset = 100;
            skills.style.transform = `translateX(${-top / 2 - offset}px)`;
            skills2.style.transform = `translateX(${top / 2 - offset}px)`;
        });
    }
    ;
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_media_queries_service__WEBPACK_IMPORTED_MODULE_2__["MediaQueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__["LoadService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 1, consts: [["id", "skills"], [1, "row", "skills-text"], [1, "scroll-container"], ["id", "skills-container", 1, "row"], ["class", "skill-container center-vertical", 4, "ngFor", "ngForOf"], [1, "row", "skills-text-rotated"], [1, "skill-container", "center-vertical"], [1, "skill", "center", "column", 3, "ngClass"], ["alt", " ", 3, "src", "load"], [1, "card-bg", 3, "id"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SkillsSkillsSkillsSkillsSkillsSkillsSkillsSkillsSkills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SkillsComponent_span_6_Template, 6, 4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SkillsSkillsSkillsSkillsSkillsSkillsSkillsSkillsSkills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["#skills[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n}\n\n.skills-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .skills-text-rotated[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 7rem;\n  font-weight: 700;\n  margin: 0;\n  margin-bottom: 2rem;\n  letter-spacing: 5px;\n  -webkit-text-stroke: 8px transparent;\n  color: transparent;\n  background: linear-gradient(90deg, var(--lilac) 0%, var(--green) 33.3%, var(--green) 66.7%, var(--lilac) 100%);\n  background-size: 200% 100%;\n  animation: scroll-bg 4s forwards infinite ease-in-out;\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n\n.skills-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after, .skills-text-rotated[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: \"SkillsSkillsSkillsSkillsSkillsSkillsSkillsSkillsSkills\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: var(--deep-blue);\n}\n\n@keyframes scroll-bg {\n  from {\n    background-position: 0% 0%;\n  }\n  to {\n    background-position: 200% 0%;\n  }\n}\n\n.skills-text-rotated[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  transform: rotateX(180deg);\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  margin: 1rem;\n  padding: 1rem 0;\n}\n\n#skills-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.skill-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  max-width: 14rem;\n  width: 100%;\n  perspective: 1000px;\n  overflow: hidden;\n  padding: 3rem;\n}\n\n.skill-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  animation: alternate swivel 1s infinite ease-in-out;\n}\n\n.skill[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  transform-style: preserve-3d;\n  min-width: 8rem;\n  width: 8rem;\n  transform: scale(0);\n  transition: transform 0.5s cubic-bezier(0.47, 1.64, 0.41, 0.8);\n}\n\n.skill[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 10px;\n}\n\n.skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-position: center;\n  padding: 1rem;\n  width: 80%;\n  height: 5rem;\n  transform: translateZ(3rem);\n  transition: filter 0.2s;\n}\n\n.skill[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  transform: translateZ(2rem);\n}\n\n.card-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 20px;\n  left: 20px;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(-2rem);\n}\n\n#Javascript[_ngcontent-%COMP%] {\n  background-color: #f0dc50;\n}\n\n#Typescript[_ngcontent-%COMP%] {\n  background-color: #007acc;\n}\n\n#Java[_ngcontent-%COMP%] {\n  background-color: #e76f00;\n}\n\n#Angular[_ngcontent-%COMP%] {\n  background-color: #e23237;\n}\n\n#HTML[_ngcontent-%COMP%] {\n  background-color: #f1652a;\n}\n\n#CSS[_ngcontent-%COMP%] {\n  background-color: #33a9dc;\n}\n\n#Sass[_ngcontent-%COMP%] {\n  background-color: #cf649a;\n}\n\n#Node[_ngcontent-%COMP%] {\n  background-color: #5cab46;\n}\n\n#SQL[_ngcontent-%COMP%] {\n  background-color: #ea1b22;\n}\n\n@keyframes swivel {\n  0% {\n    transform: rotateZ(-5deg) translateZ(3rem);\n  }\n  100% {\n    transform: rotateZ(5deg) translateZ(3rem);\n  }\n}\n\n@keyframes bob-in {\n  to {\n    transform: scale(1);\n  }\n}\n\n@media (max-width: 480px) {\n  .scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 0px;\n  }\n  .scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: transparent;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 5px;\n  }\n  .scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #5f5f5f;\n    border-radius: 5px;\n  }\n\n  .skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    filter: none;\n  }\n\n  .skill-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .skill-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBSUU7O0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFFQSw4R0FBQTtFQUNBLDBCQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBREo7O0FBR0k7O0VBQ0UsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7QUFBTjs7QUFHSTtFQUNFO0lBQ0UsMEJBQUE7RUFETjtFQUlJO0lBQ0UsNEJBQUE7RUFGTjtBQUNGOztBQVFFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQUxKOztBQStCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBNUJGOztBQStCQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQTVCRjs7QUErQkE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBNUJGOztBQThCSTtFQUNFLG1EQUFBO0FBNUJOOztBQWtDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBRUEsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhEQUFBO0FBaENGOztBQWtDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtBQWhDSjs7QUFrQ0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsdUJBQUE7QUFqQ0o7O0FBbUNFO0VBQ0UsMkJBQUE7QUFqQ0o7O0FBcUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFLHlCQUFBO0FBbENGOztBQXFDQTtFQUNFO0lBQ0UsMENBQUE7RUFsQ0Y7RUFvQ0E7SUFDRSx5Q0FBQTtFQWxDRjtBQUNGOztBQXFDQTtFQUNFO0lBQ0UsbUJBQUE7RUFuQ0Y7QUFDRjs7QUFzQ0E7RUFFSTtJQUNFLFdBQUE7RUFyQ0o7RUF1Q0U7SUFDRSx1QkFBQTtJQUNBLDBDQUFBO0lBQ0Esa0JBQUE7RUFyQ0o7RUF1Q0U7SUFDRSxtQkFBQTtJQUNBLGtCQUFBO0VBckNKOztFQXlDQTtJQUNFLFlBQUE7RUF0Q0Y7O0VBeUNBO0lBQ0UsYUFBQTtFQXRDRjtFQXdDSTtJQUNFLGVBQUE7RUF0Q047QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2tpbGxzIHtcclxuICBwYWRkaW5nLXRvcDogNXJlbTtcclxufVxyXG5cclxuLnNraWxscy10ZXh0LFxyXG4uc2tpbGxzLXRleHQtcm90YXRlZCB7XHJcbiAgaDIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogOHB4IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tbGlsYWMpIDAlLCB2YXIoLS1ncmVlbikgMzMuMyUsIHZhcigtLWdyZWVuKSA2Ni43JSwgdmFyKC0tbGlsYWMpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XHJcbiAgICBhbmltYXRpb246IHNjcm9sbC1iZyA0cyBmb3J3YXJkcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiU2tpbGxzU2tpbGxzU2tpbGxzU2tpbGxzU2tpbGxzU2tpbGxzU2tpbGxzU2tpbGxzU2tpbGxzXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZGVlcC1ibHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIHNjcm9sbC1iZyB7XHJcbiAgICAgIGZyb20ge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0byB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNraWxscy10ZXh0LXJvdGF0ZWQge1xyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC5zY3JvbGwtY29udGFpbmVyIHtcclxuLy8gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4vLyAgIG1hcmdpbjogMXJlbTtcclxuLy8gICBwYWRkaW5nOiAxcmVtIDA7XHJcbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4vLyAgICAgaGVpZ2h0OiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICB9XHJcbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiKDk1LCA5NSwgOTUpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gI3NraWxscy1jb250YWluZXIge1xyXG4vLyAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuLy8gfVxyXG5cclxuLnNjcm9sbC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbiNza2lsbHMtY29udGFpbmVyIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5za2lsbC1jb250YWluZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICAmOmhvdmVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIGFuaW1hdGlvbjogYWx0ZXJuYXRlIHN3aXZlbCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgLy8gZmlsdGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNraWxsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogOHJlbTtcclxuICB3aWR0aDogOHJlbTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjQ3LCAxLjY0LCAwLjQxLCAwLjgpO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDNweCAxMHB4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigzcmVtKTtcclxuICAgIC8vIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycmVtKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnJlbSk7XHJcbn1cclxuXHJcbiNKYXZhc2NyaXB0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMjAsIDgwKTtcclxufVxyXG5cclxuI1R5cGVzY3JpcHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjIsIDIwNCk7XHJcbn1cclxuXHJcbiNKYXZhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxMTEsIDApO1xyXG59XHJcblxyXG4jQW5ndWxhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgNTAsIDU1KTtcclxufVxyXG5cclxuI0hUTUwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDEwMSwgNDIpO1xyXG59XHJcblxyXG4jQ1NTIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE2OSwgMjIwKTtcclxufVxyXG5cclxuI1Nhc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDEwMCwgMTU0KTtcclxufVxyXG5cclxuI05vZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2FiNDY7XHJcbn1cclxuXHJcbiNTUUwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTFiMjI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3dpdmVsIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTVkZWcpIHRyYW5zbGF0ZVooM3JlbSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDVkZWcpIHRyYW5zbGF0ZVooM3JlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvYi1pbiB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5zY3JvbGwtY29udGFpbmVyIHtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDk1LCA5NSwgOTUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2tpbGwgaW1nIHtcclxuICAgIGZpbHRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5za2lsbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return [{ type: _services_media_queries_service__WEBPACK_IMPORTED_MODULE_2__["MediaQueriesService"] }, { type: _services_load_service__WEBPACK_IMPORTED_MODULE_3__["LoadService"] }]; }, null); })();


/***/ }),

/***/ "uNaF":
/*!***********************************************************!*\
  !*** ./src/app/home/media-links/media-links.component.ts ***!
  \***********************************************************/
/*! exports provided: MediaLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaLinksComponent", function() { return MediaLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MediaLinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
MediaLinksComponent.ɵfac = function MediaLinksComponent_Factory(t) { return new (t || MediaLinksComponent)(); };
MediaLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaLinksComponent, selectors: [["app-media-links"]], decls: 31, vars: 0, consts: [["id", "code-links", 1, "center"], [1, "wrapper"], [1, "wrapper__links"], ["id", "github", "href", "https://github.com/ByteSizedPi", "target", "_blank", 1, "social-link", "social-link--github", "center"], ["viewBox", "0 0 600 600", "xmlns", "http://www.w3.org/2000/svg", 1, "social-svg"], ["fill", "none", "fill-rule", "evenodd", 1, "social-group"], ["stroke", "#000", "stroke-width", "20", "cx", "300", "cy", "300", "r", "262.5", 1, "social-group__outline"], ["fill", "#000", "cx", "300", "cy", "300", "r", "252.5", 1, "social-group__inner-circle"], ["d", "M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z", "fill", "#FFF", "fill-rule", "nonzero", 1, "social-group__icon"], ["id", "linkedin", "href", "https://www.linkedin.com/in/johanventer0/", "target", "_blank", 1, "social-link", "social-link--linkedin", "center"], ["fill", "#2D76B0", "cx", "300", "cy", "300", "r", "252.5", 1, "social-group__inner-circle"], ["d", "M278.9308 253.1923h43.5769v20.0539h.5923c6.0923-11.5077 20.9-23.6077 43.0692-23.6077 46.0308 0 54.577 30.2923 54.577 69.723v80.2154h-45.4385v-71.1615c0-17.0077-.2539-38.8385-23.6077-38.8385-23.6923 0-27.2462 18.5308-27.2462 37.5693v72.4307h-45.4384l-.0846-146.3846zm-74.1231 0h45.523V399.577h-45.523V253.1923zm22.8461-72.7692c14.5539 0 26.4 11.8461 26.4 26.4 0 14.5538-11.8461 26.4-26.4 26.4-14.6384 0-26.4-11.8462-26.4-26.4 0-14.5539 11.7616-26.4 26.4-26.4z", "fill", "#000", "fill-rule", "nonzero", 1, "social-group__icon"], ["id", "instagram", "href", "https://www.instagram.com/johanventer1/", "target", "_blank", 1, "social-link", "social-link--instagram", "center"], ["x1", "0%", "y1", "100%", "y2", "0%", "id", "simpleInsta"], ["stop-color", "#D72F3F", "offset", "0%"], ["stop-color", "#4221B9", "offset", "100%"], ["fill", "url(#simpleInsta)", "cx", "300", "cy", "300", "r", "252.5", 1, "social-group__inner-circle", "social-group__inner-circle--instagram"], ["d", "M436.8577 205.4154c-3.6808-9.4808-8.5885-17.5116-16.6192-25.5423-8.0308-8.0308-16.0616-12.9385-25.5423-16.6193-9.1462-3.5692-19.7424-6.023-35.0231-6.6923-15.3923-.6692-20.3-.8923-59.5616-.8923-39.2615 0-44.1692.1116-59.5615.8923-15.3923.6693-25.877 3.1231-35.023 6.6923-9.4808 3.6808-17.5116 8.5885-25.5424 16.6193-8.0308 8.0307-12.9384 16.0615-16.6192 25.5423-3.5692 9.1461-6.023 19.7423-6.6923 35.023-.6693 15.3924-.8923 20.3-.8923 59.5616 0 39.2615.1115 44.1692.8923 59.5615.6692 15.3923 3.123 25.877 6.6923 35.0231 3.6808 9.4808 8.5884 17.5116 16.6192 25.5423 8.0308 8.0308 16.0616 12.9385 25.5423 16.6193 9.1462 3.5692 19.7423 6.023 35.0231 6.6923 15.3923.6692 20.3.8923 59.5615.8923 39.2616 0 44.1693-.1116 59.5616-.8923 15.3923-.6693 25.8769-3.1231 35.023-6.6923 9.4808-3.6808 17.5116-8.5885 25.5424-16.6193 8.0307-8.0307 12.9384-16.0615 16.6192-25.5423 3.5692-9.1461 6.023-19.7423 6.6923-35.023.6692-15.3924.8923-20.3.8923-59.5616 0-39.2615-.1115-44.1692-.8923-59.5615-.6692-15.3923-3.123-25.877-6.6923-35.0231zm-19.2962 152.9192c-.6692 14.0539-3.0115 21.75-5.0192 26.7692-2.5654 6.6924-5.8 11.6-10.8192 16.6193-5.0193 5.0192-9.8154 8.1423-16.6193 10.8192-5.1307 2.0077-12.7153 4.35-26.7692 5.0192-15.2808.6693-19.7423.8923-58.3346.8923s-43.1654-.1115-58.3346-.8923c-14.0539-.6692-21.75-3.0115-26.7692-5.0192-6.6924-2.5654-11.6-5.8-16.6193-10.8192-5.0192-5.0193-8.1423-9.8154-10.8192-16.6193-2.0077-5.1307-4.35-12.7153-5.0192-26.7692-.6693-15.2808-.8923-19.8538-.8923-58.3346s.1115-43.1654.8923-58.3346c.6692-14.0539 3.0115-21.75 5.0192-26.7692 2.5654-6.6924 5.8-11.6 10.8192-16.6193 5.0193-5.0192 9.8154-8.1423 16.6193-10.8192 5.1307-2.0077 12.7153-4.35 26.7692-5.0192 15.2808-.6693 19.8538-.8923 58.3346-.8923s43.1654.1115 58.3346.8923c14.0539.6692 21.75 3.0115 26.7692 5.0192 6.6924 2.5654 11.6 5.8 16.6193 10.8192 5.0192 5.0193 8.1423 9.8154 10.8192 16.6193 2.0077 5.1307 4.35 12.7153 5.0192 26.7692.6693 15.2808.8923 19.8538.8923 58.3346s-.223 43.1654-.8923 58.3346zM300 225.827c-40.9346 0-74.173 33.2385-74.173 74.1731s33.2384 74.173 74.173 74.173 74.173-33.2384 74.173-74.173-33.2384-74.173-74.173-74.173zm0 122.3577c-26.5462 0-48.1846-21.527-48.1846-48.1846 0-26.5462 21.527-48.1846 48.1846-48.1846 26.6577 0 48.1846 21.527 48.1846 48.1846 0 26.5462-21.6384 48.1846-48.1846 48.1846zm77.073-107.9692c-9.548 0-17.2884-7.7403-17.2884-17.2885 0-9.5481 7.7403-17.2884 17.2885-17.2884 9.5481 0 17.2884 7.7403 17.2884 17.2884 0 9.5482-7.7403 17.2885-17.2884 17.2885z", "fill", "#FFF", "fill-rule", "nonzero", 1, "social-group__icon"]], template: function MediaLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " instagram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "linearGradient", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "stop", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "stop", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#code-links[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  opacity: 0;\n  animation: fade-in 0.5s 1.5s forwards;\n}\n#code-links[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  transition: all 0.4s ease-out;\n}\n#code-links[_ngcontent-%COMP%]   .wrapper__links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 30vh;\n}\n#code-links[_ngcontent-%COMP%]   .social-link--linkedin[_ngcontent-%COMP%] {\n  color: #2d76b0;\n}\n#code-links[_ngcontent-%COMP%]   .social-link--github[_ngcontent-%COMP%] {\n  color: #000;\n}\n#code-links[_ngcontent-%COMP%]   .social-link--instagram[_ngcontent-%COMP%] {\n  color: #9a2970;\n}\n#code-links[_ngcontent-%COMP%]   .social-link--dribbble[_ngcontent-%COMP%] {\n  color: #b53561;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%] {\n  width: 7vh;\n  height: 7vh;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]   .social-group__icon[_ngcontent-%COMP%] {\n  fill: white;\n  transition: all 0.2s;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]   .social-group__inner-circle[_ngcontent-%COMP%] {\n  fill: transparent;\n  transition: all 0.2s;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]   .social-group__outline[_ngcontent-%COMP%] {\n  stroke: white;\n  transform-origin: 50% 50%;\n  transition: all 0.2s;\n  fill: #19193288;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover, #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active, #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus {\n  cursor: pointer;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__icon[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__icon[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__icon[_ngcontent-%COMP%] {\n  fill: white;\n  transition: all 0.2s;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__inner-circle[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__inner-circle[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__inner-circle[_ngcontent-%COMP%] {\n  fill: currentColor;\n  transition: all 0.2s;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__inner-circle--instagram[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__inner-circle--instagram[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__inner-circle--instagram[_ngcontent-%COMP%] {\n  fill: url(#simpleInsta) !important;\n}\n#code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:hover   .social-group__outline[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:active   .social-group__outline[_ngcontent-%COMP%], #code-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   .social-svg[_ngcontent-%COMP%]:focus   .social-group__outline[_ngcontent-%COMP%] {\n  stroke: white;\n  fill: none;\n  transform: scale(1.1);\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWRpYS1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1FLGtCQUFBO0VBRUEsVUFBQTtFQUNBLHFDQUFBO0FBTEY7QUFNRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFKSjtBQUtJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSE47QUFPSTtFQUNFLGNBQUE7QUFMTjtBQU9JO0VBQ0UsV0FBQTtBQUxOO0FBT0k7RUFDRSxjQUFBO0FBTE47QUFPSTtFQUNFLGNBQUE7QUFMTjtBQU9JO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFMTjtBQU9RO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FBTFY7QUFPUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFMVjtBQU9RO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBTFY7QUFRTTtFQUdFLGVBQUE7QUFSUjtBQVVVO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FBUlo7QUFVVTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFSWjtBQVNZO0VBQ0Usa0NBQUE7QUFQZDtBQVVVO0VBRUUsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBVFoiLCJmaWxlIjoibWVkaWEtbGlua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29kZS1saW5rcyB7XHJcbiAgJGNvbG9yLXByaW1hcnk6ICM4MWMyZGU7XHJcbiAgJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNiNGY1ZmY7XHJcbiAgJGNvbG9yLXByaW1hcnktZGFyazogIzRmOTJhYztcclxuICAkY29sb3Itd2hpdGU6ICNmZmZiZmE7XHJcbiAgJGNvbG9yLWJsYWNrOiAjMTkxMzA4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAvLyBoZWlnaHQ6IDR2aDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIDEuNXMgZm9yd2FyZHM7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDMwdmg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zb2NpYWwtbGluayB7XHJcbiAgICAmLS1saW5rZWRpbiB7XHJcbiAgICAgIGNvbG9yOiAjMmQ3NmIwO1xyXG4gICAgfVxyXG4gICAgJi0tZ2l0aHViIHtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAmLS1pbnN0YWdyYW0ge1xyXG4gICAgICBjb2xvcjogIzlhMjk3MDtcclxuICAgIH1cclxuICAgICYtLWRyaWJiYmxlIHtcclxuICAgICAgY29sb3I6ICNiNTM1NjE7XHJcbiAgICB9XHJcbiAgICAmIC5zb2NpYWwtc3ZnIHtcclxuICAgICAgd2lkdGg6IDd2aDtcclxuICAgICAgaGVpZ2h0OiA3dmg7XHJcbiAgICAgICYgLnNvY2lhbC1ncm91cCB7XHJcbiAgICAgICAgJl9faWNvbiB7XHJcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pbm5lci1jaXJjbGUge1xyXG4gICAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fb3V0bGluZSB7XHJcbiAgICAgICAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgZmlsbDogIzE5MTkzMjg4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmOmFjdGl2ZSxcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICYgLnNvY2lhbC1ncm91cCB7XHJcbiAgICAgICAgICAmX19pY29uIHtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJl9faW5uZXItY2lyY2xlIHtcclxuICAgICAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgJi0taW5zdGFncmFtIHtcclxuICAgICAgICAgICAgICBmaWxsOiB1cmwoI3NpbXBsZUluc3RhKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmX19vdXRsaW5lIHtcclxuICAgICAgICAgICAgLy8gc3Ryb2tlOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICAgICAgICAgIGZpbGw6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaLinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media-links',
                templateUrl: './media-links.component.html',
                styleUrls: ['./media-links.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uPsD":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "NOJ/");



class ScrollService extends _Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"] {
    constructor(element) {
        super();
        this.inView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInView = () => this.inView;
        document.addEventListener("scroll", () => {
            let top = this.Id(element).getBoundingClientRect().top;
            const margin = 200;
            if (Math.abs(top) <= margin)
                this.inView.emit();
        });
    }
}
ScrollService.ɵfac = function ScrollService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
ScrollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yh1Q":
/*!***************************************************!*\
  !*** ./src/app/services/media-queries.service.ts ***!
  \***************************************************/
/*! exports provided: MediaQueriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueriesService", function() { return MediaQueriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MediaQueriesService {
    constructor() {
        this.queries = [
            "(min-width: 0px) and (max-width: 480px)",
            "(min-width: 481px) and (max-width: 768px)",
            "(min-width: 769px) and (max-width: 1024px)",
            "(min-width: 1025px) and (max-width: 1200px)",
            "(min-width: 1201px)",
        ];
        this.isMobile = () => this.mobile;
    }
    init() {
        var mobileSize = window.matchMedia(this.queries[0]);
        this.mobile = mobileSize.matches;
        mobileSize.addListener(x => this.mobile = x.matches);
    }
}
MediaQueriesService.ɵfac = function MediaQueriesService_Factory(t) { return new (t || MediaQueriesService)(); };
MediaQueriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MediaQueriesService, factory: MediaQueriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaQueriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Helpers */ "NOJ/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProjectsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ProjectsComponent_div_10_Template_img_load_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ProjectsComponent_div_10_Template_img_load_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Github ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/images/" + project_r1.imgLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/images/" + project_r1.imgLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectsComponent extends _services_Helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"] {
    constructor() {
        super();
        this.projects = [
            {
                name: 'Movie Streaming Site',
                description: `MongoDB backend and Nodejs API with Angular frontend that allows a user to stream and download movies using The Movie Database API and the YTS API. For displaying understanding of APIs and how to retrieve, combine and deal with asyncronous and missing data. using the Youtube api to display in-frame trailers. Together with a modern and easy to use interface.`,
                link: 'https://github.com/ByteSizedPi/Movie-App',
                imgLink: 'movieapp.webp',
            },
            {
                name: 'Employee Appraisals',
                description: `Angular Web app using SQL Server backend and ASP .NET API to allow the performance of employees of a company to be evaluated`,
                link: 'https://github.com/ByteSizedPi/Employee-Appraisals',
                imgLink: 'appraisals.webp',
            },
            {
                name: 'PRA Calculator',
                description: `simple script that demonstrates the page replacement algorithm used in RAM and the TLB showing off: 1. Clock 2. FIFO 3. LRU 4. Optimal 5. Second Chance`,
                link: 'https://github.com/ByteSizedPi/PRA-Calculator',
                imgLink: 'pracalculator.webp',
            },
            {
                name: 'Bulk Buy',
                description: `Express web app concept using MongoDb that allows users to place grocery/food orders for other users to collect and deliver for them and in this way save money by buying in bulk and helping those that don't have transport or live far away.`,
                link: 'https://github.com/ByteSizedPi/bulk-buy',
                imgLink: 'bulkbuy.webp',
            },
            {
                name: 'basic 3D rendering library',
                description: `Basic 3d cube rendering library using Processing, a java library, that can compute rotations and perspective for cubes`,
                link: 'https://github.com/ByteSizedPi/processing.java-projects',
                imgLink: 'matrices.webp',
            },
            {
                name: 'p5 projects',
                description: `Some of my p5.js projects: 1. minesweeper, 2. ripple effects, 3. Ptolemy curves, 4. fractal tree, 5. Sierpinski triangle, 6. Sodoku, 7. Vector field simulation, 8. image morphing.`,
                link: 'https://github.com/ByteSizedPi/p5.js-project-links',
                imgLink: 'p5.webp',
            },
            {
                name: 'MetaBalls',
                description: `Processing (Java) project that creates colour coded balls`,
                link: 'https://github.com/ByteSizedPi/processing.java-projects',
                imgLink: 'metaballs.webp',
            },
            {
                name: 'Hilbert Curve',
                description: `Processing (Java) project that creates hilbert curves`,
                link: 'https://github.com/ByteSizedPi/processing.java-projects',
                imgLink: 'hilbert.webp',
            },
        ];
    }
    ngOnInit() { }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 1, consts: [["id", "projects"], [1, "container"], [1, "projects-title"], [1, "row"], ["class", "project-container", 4, "ngFor", "ngForOf"], [1, "project-container"], [1, "bg-img", 3, "src", "alt", "load"], [1, "clip-img", 3, "src", "alt", "load"], [1, "info-container"], [1, "fas", "fa-info", "center"], [1, "text-container", "row", "space-between"], [1, "column"], [1, "row", "bottom"], ["target", "_blank", 1, "link", "row", "center", 3, "href"], [1, "fab", "fa-github"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ": Project[] = [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsComponent_div_10_Template, 15, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#projects[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n  min-height: 100vh;\n  margin-top: 10rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nsection[_ngcontent-%COMP%] {\n  width: calc(100vw - 2rem);\n  margin: 1rem;\n}\n\n.project-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  transition: flex 0.5s ease;\n  margin: 0.5rem;\n  position: relative;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.project-container[_ngcontent-%COMP%]:hover {\n  flex: 5;\n}\n\n.project-container[_ngcontent-%COMP%]:hover   .info-container[_ngcontent-%COMP%]   .fa-info[_ngcontent-%COMP%] {\n  -webkit-clip-path: circle(141% at 100% 100%);\n          clip-path: circle(141% at 100% 100%);\n  transition: opacity 0.2s 0.5s, -webkit-clip-path 0.2s 0.5s;\n  transition: clip-path 0.2s 0.5s, opacity 0.2s 0.5s;\n  transition: clip-path 0.2s 0.5s, opacity 0.2s 0.5s, -webkit-clip-path 0.2s 0.5s;\n  animation: attention 2s 1s infinite forwards;\n}\n\n@keyframes attention {\n  40% {\n    padding: 1rem 0.5rem 0.5rem 1rem;\n  }\n  50% {\n    padding: 1.5rem 1rem 1rem 1.5rem;\n  }\n  60% {\n    padding: 1rem 0.5rem 0.5rem 1rem;\n  }\n}\n\n.project-container[_ngcontent-%COMP%]:hover   .info-container[_ngcontent-%COMP%]:hover {\n  -webkit-clip-path: circle(150% at 100% 100%);\n          clip-path: circle(150% at 100% 100%);\n}\n\n.project-container[_ngcontent-%COMP%]:hover   .info-container[_ngcontent-%COMP%]:hover   .fa-info[_ngcontent-%COMP%] {\n  transition: opacity 0.2s, -webkit-clip-path 0.2s 0.5s;\n  transition: clip-path 0.2s 0.5s, opacity 0.2s;\n  transition: clip-path 0.2s 0.5s, opacity 0.2s, -webkit-clip-path 0.2s 0.5s;\n  opacity: 0;\n}\n\n.project-container[_ngcontent-%COMP%]:hover   .info-container[_ngcontent-%COMP%]:hover   .text-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-clip-path: circle(150% at 100% 100%);\n          clip-path: circle(150% at 100% 100%);\n  transition: opacity 0.2s, -webkit-clip-path 0.5s;\n  transition: clip-path 0.5s, opacity 0.2s;\n  transition: clip-path 0.5s, opacity 0.2s, -webkit-clip-path 0.5s;\n}\n\n.project-container[_ngcontent-%COMP%]:hover   .clip-img[_ngcontent-%COMP%] {\n  -webkit-clip-path: circle(150% at 100% 100%);\n          clip-path: circle(150% at 100% 100%);\n}\n\n.project-container[_ngcontent-%COMP%]   .clip-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-clip-path: circle(0% at 100% 100%);\n          clip-path: circle(0% at 100% 100%);\n  transition: -webkit-clip-path 0.7s;\n  transition: clip-path 0.7s;\n  transition: clip-path 0.7s, -webkit-clip-path 0.7s;\n}\n\n.project-container[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  filter: grayscale(1) brightness(0.5) sepia(1);\n}\n\n.project-container[_ngcontent-%COMP%]::after {\n  position: absolute;\n  bottom: -0.75rem;\n  right: -0.75rem;\n  content: \",\";\n  font-size: 2rem;\n  font-weight: 400;\n  color: var(--lilac);\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 6rem;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: var(--lilac);\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 20rem;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 20rem;\n  -webkit-clip-path: circle(5rem at 100% 100%);\n          clip-path: circle(5rem at 100% 100%);\n  transition: -webkit-clip-path 0.5s;\n  transition: clip-path 0.5s;\n  transition: clip-path 0.5s, -webkit-clip-path 0.5s;\n}\n\n.fa-info[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  right: 0;\n  -webkit-clip-path: circle(0% at 100% 100%);\n          clip-path: circle(0% at 100% 100%);\n  color: black;\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 1rem 0.5rem 0.5rem 1rem;\n  margin: 0;\n  background-color: rgba(245, 245, 245, 0.726);\n  box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.3);\n  border-top-left-radius: 100%;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  height: 16rem;\n  position: absolute;\n  z-index: 0;\n  bottom: 0;\n  overflow: hidden;\n  width: calc(100% - 4rem);\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-clip-path: circle(5rem at 100% 100%);\n          clip-path: circle(5rem at 100% 100%);\n  opacity: 0;\n  transition: opacity 0.25s 0.25s, -webkit-clip-path 0.5s;\n  transition: clip-path 0.5s, opacity 0.25s 0.25s;\n  transition: clip-path 0.5s, opacity 0.25s 0.25s, -webkit-clip-path 0.5s;\n  padding: 2rem;\n  -webkit-backdrop-filter: blur(8px) brightness(0.8) saturate(0.5);\n          backdrop-filter: blur(8px) brightness(0.8) saturate(0.5);\n}\n\n.text-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0 0 1rem 0;\n}\n\n.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n  font-size: 1rem;\n}\n\n.text-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .text-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  margin: 0.5rem 0;\n  padding: 0 0.5rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 2rem;\n  box-shadow: rgba(0, 0, 0, 0.3) 5px 0px 15px 3px;\n}\n\n.text-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: calc(2.5rem + 4px);\n  padding: 0 1rem;\n  margin-left: 0.5rem;\n}\n\n.text-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  margin-right: 0.5rem;\n}\n\n.text-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  border: 2px solid var(--hospital-blue);\n  color: var(--hospital-blue);\n  transition: background 0.2s;\n}\n\n.text-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  background: #0e244ba1;\n}\n\n.text-container[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\n  background: var(--hospital-blue);\n  transition: background 0.2s;\n  color: black;\n}\n\n.text-container[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%]:hover {\n  background: #4a8cff;\n}\n\n.fa-play[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.fa-github[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  color: var(--hospital-blue);\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFIRjs7QUFLRTtFQUNFLE9BQUE7QUFISjs7QUFPTTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSwwREFBQTtFQUFBLGtEQUFBO0VBQUEsK0VBQUE7RUFDQSw0Q0FBQTtBQUxSOztBQU9RO0VBQ0U7SUFDRSxnQ0FBQTtFQUxWO0VBT1E7SUFDRSxnQ0FBQTtFQUxWO0VBT1E7SUFDRSxnQ0FBQTtFQUxWO0FBQ0Y7O0FBU007RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0FBUFI7O0FBU1E7RUFDRSxxREFBQTtFQUFBLDZDQUFBO0VBQUEsMEVBQUE7RUFDQSxVQUFBO0FBUFY7O0FBVVE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnRUFBQTtBQVJWOztBQWFJO0VBQ0UsNENBQUE7VUFBQSxvQ0FBQTtBQVhOOztBQWVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7QUFiSjs7QUFnQkU7RUFDRSw2Q0FBQTtBQWRKOztBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBd0NBO0VBQ0UsWUFBQTtFQUVBLGVBQUE7QUF0Q0Y7O0FBd0NBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtBQXJDRjs7QUF3Q0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtBQXJDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxVQUFBO0VBQ0EsdURBQUE7RUFBQSwrQ0FBQTtFQUFBLHVFQUFBO0VBQ0EsYUFBQTtFQUNBLGdFQUFBO1VBQUEsd0RBQUE7QUF0Q0Y7O0FBd0NFOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQXRDSjs7QUF5Q0U7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUF2Q0o7O0FBMkNFOztFQUVFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQXpDSjs7QUE0Q0U7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQTFDSjs7QUE2Q0U7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUEzQ0o7O0FBOENFO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUE1Q0o7O0FBOENJO0VBQ0UscUJBQUE7QUE1Q047O0FBK0NFO0VBQ0UsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUE3Q0o7O0FBK0NJO0VBQ0UsbUJBQUE7QUE3Q047O0FBa0RBO0VBQ0UsbUJBQUE7QUEvQ0Y7O0FBa0RBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBL0NGIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2plY3RzIHtcclxuICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW4tdG9wOiAxMHJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAvLyBib3gtc2l6aW5nOiBtYXJnaW4tYm94O1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiA2LjVyZW07XHJcbiAgLy8gbWFyZ2luLXRvcDogMTByZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogZmxleCAwLjVzIGVhc2U7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41ODIpIDVweCA1cHggMTVweCA0cHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmbGV4OiA1O1xyXG5cclxuICAgIC5pbmZvLWNvbnRhaW5lciB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLmZhLWluZm8ge1xyXG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDE0MSUgYXQgMTAwJSAxMDAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyAwLjVzLCBvcGFjaXR5IDAuMnMgMC41cztcclxuICAgICAgICBhbmltYXRpb246IGF0dGVudGlvbiAycyAxcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBhdHRlbnRpb24ge1xyXG4gICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwLjVyZW0gMC41cmVtIDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtIDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDYwJSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtIDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMTUwJSBhdCAxMDAlIDEwMCUpO1xyXG5cclxuICAgICAgICAuZmEtaW5mbyB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyAwLjVzLCBvcGFjaXR5IDAuMnM7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgxNTAlIGF0IDEwMCUgMTAwJSk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC41cywgb3BhY2l0eSAwLjJzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jbGlwLWltZyB7XHJcbiAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgMTAwJSAxMDAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jbGlwLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMCUgYXQgMTAwJSAxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjdzO1xyXG4gIH1cclxuXHJcbiAgLmJnLWltZyB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDAuNSkgc2VwaWEoMSk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0wLjc1cmVtO1xyXG4gICAgcmlnaHQ6IC0wLjc1cmVtO1xyXG4gICAgY29udGVudDogXCIsXCI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHZhcigtLWxpbGFjKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC5wcm9qZWN0cy10aXRsZSB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbi8vICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyAgIG1hcmdpbi10b3A6IDMwcmVtO1xyXG4vLyAgIHBhZGRpbmc6IDAgNHJlbTtcclxuLy8gICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzlkMDBmZjAwIDIwJSwgIzlkMDBmZiAxMDAlKTtcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzlkMDBmZjAwIDIwJSwgd2hpdGUgMTAwJSk7XHJcblxyXG4vLyAgICY6OmJlZm9yZSB7XHJcbi8vICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZDogcmdiKDAsMCwwKTtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5MTkzMiAwJSwgIzE5MTkzMjAwIDQwJSwgIzE5MTkzMjAwIDYwJSwgIzE5MTkzMiAxMDAlKTtcclxuLy8gICB9XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8vIG1hcmdpbi10b3A6IDIwcmVtO1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxufVxyXG5zcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiB2YXIoLS1saWxhYyk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjByZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBjbGlwLXBhdGg6IGNpcmNsZSg1cmVtIGF0IDEwMCUgMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuNXM7XHJcbn1cclxuXHJcbi5mYS1pbmZvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMCUgYXQgMTAwJSAxMDAlKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbSAwLjVyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjcyNik7XHJcbiAgYm94LXNoYWRvdzogMnB4IDBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcclxuICAvLyB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC43NXMsIG9wYWNpdHkgMC41cyAxLjc1cztcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDE2cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgY2xpcC1wYXRoOiBjaXJjbGUoNXJlbSBhdCAxMDAlIDEwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuNXMsIG9wYWNpdHkgMC4yNXMgMC4yNXM7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KSBicmlnaHRuZXNzKDAuOCkgc2F0dXJhdGUoMC41KTtcclxuXHJcbiAgaDIsXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICBhLFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgNXB4IDBweCAxNXB4IDNweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMi41cmVtICsgNHB4KTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAubGluayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ob3NwaXRhbC1ibHVlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ob3NwaXRhbC1ibHVlKTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzBlMjQ0YmExO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3NwaXRhbC1ibHVlKTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzRhOGNmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mYS1wbGF5IHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4uZmEtZ2l0aHViIHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1ob3NwaXRhbC1ibHVlKTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map