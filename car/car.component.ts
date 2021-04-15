import { Component } from "@angular/core";

@Component({
    selector:'car-comp',
    templateUrl:'./car.component.html',
    styleUrls:['./car.component.css']
})
export class CarComponent{
    status:boolean=true;

    brand:string[]=["Maruti", "Mustang", "Volkswagen", "Hyundai", "Honda"];
}









































