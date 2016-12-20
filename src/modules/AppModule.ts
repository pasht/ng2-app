/**
 * Created by administrator on 12/16/16.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MainComponent } from '../components/main.component';

@NgModule({
    imports:        [ BrowserModule],
    declarations:   [ MainComponent],
    bootstrap:      [ MainComponent ]

})
export class AppModule {
}