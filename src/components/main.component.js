"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by administrator on 12/16/16.
 */
var core_1 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
        this.msg = 'This is my first Angular Application server by webpack';
        this.showImage = false;
    }
    MainComponent.prototype.alertme = function () {
        this.msg = 'Another message coming from angular';
        this.loremImg = 'http://lorempixel.com/400/200';
        this.showImage = !this.showImage;
    };
    MainComponent.prototype.ngOnInit = function () {
        console.log('Initialized');
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 'ng2-app',
        template: "<div>{{msg}}</div>\n               <button type=\"button\" (click)=\"alertme()\">This is a button</button>\n               <img [src]=\"loremImg\" [style.display]=\"showImage?'block':'none'\">\n                ",
        styles: ["div{\n                    color:red;\n                    font-size: 2em;\n                    }\n                    #lorem{\n                    display: none;\n                    }\n                "]
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map