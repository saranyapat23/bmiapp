import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight ? : number;
  hight ? : number;
  result ? : number;
  result_text ? : string="";

  constructor() {}

  oncal(){
   if(this.weight == undefined || this.hight == undefined){
    alert("โปรดใส่ข้อมูลให้ครบถ้วน")
    return
   }
    var hi = this.hight / 100;
    this.result = this.weight / (hi * hi)



      if(this.result < 18.50){
          this.result_text = "อยู่ในเกณฑ์น้ำหนักน้อย//ผอม";
      }else if(this.result >=18.50 && this.result <= 22.90){
         this.result_text = "อยู่ในเกณฑ์ปกติ";
      }else if(this.result >= 23 && this.result <= 24.90){
          this.result_text = "น้ำหนักเกิน";
      }else if(this.result >= 25 && this.result <= 29.90){
         this.result_text = "โรคอ้วนระยะที่ 1"
      }else{
        this.result_text = "โรคอ้วนระยะที่ 2"
      }


  }




}
