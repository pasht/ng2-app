/**
 * Created by administrator on 12/16/16.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'ng2-app',
    template: `<div>{{msg}}</div>
               <button type="button" (click)="alertme()">This is a button</button>
               <img [src]="loremImg" [style.display]="showImage?'block':'none'">
                `,
    styles:   [`div{
                    color:red;
                    font-size: 2em;
                    }
                    #lorem{
                    display: none;
                    }
                `]
})
export class MainComponent implements OnInit{
    msg:string = 'This is my first Angular Application server by webpack';
    loremImg:string;
    showImage:boolean=false;

    alertme(){
        this.msg = 'Another message coming from angular';
        this.loremImg = 'http://lorempixel.com/400/200';
        this.showImage = !this.showImage;
    }

    ngOnInit(){
        console.log('Initialized')
    }
}
