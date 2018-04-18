import { Component } from '@angular/core';

@Component({
    selector:"app-form",
    templateUrl: '/src/webparts/helloWorld/app/appform.html'
})

export class AppComponent {
    public name: string = ": Please enter your name above!";
    changeName(inputVal):void {
        this.name = inputVal;
    }
}