import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private subscription!: Subscription;
  
  public dateNow = new Date();
  public demoStartTimeStamp = new Date();

  milliSecondsInASecond!: number;
  hoursInADay!: number;
  minutesInAnHour!: number;
  secondsInAMinute!: number;
  isWorking: boolean = false;
  trybeName!: string;
  isSettingsHidden: boolean;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;
  title!: string;


  private getTimeDifference () {
      this.timeDifference = this.demoStartTimeStamp.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: any) {


    if ((Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.secondsInAMinute)) >= 0) {
      this.isWorking = true;
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.secondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.secondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.secondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.secondsInAMinute * this.hoursInADay));
    } else {
      this.title = "Начинаем демо"
      this.isWorking = false;
    }
  }

  ngOnInit() {

    this.demoStartTimeStamp = this.setDefault();
    this.milliSecondsInASecond = 1000;
    this.hoursInADay = 24;
    this.minutesInAnHour = 60;
    this.secondsInAMinute = 60;
    this.trybeName = localStorage.getItem('TRYBE_NAME');
      
      this.subscription = interval(1000)
          .subscribe(x => { this.getTimeDifference(); });
  }


  public setDefault() {
    let currentDate = new Date();
    let newDate = new Date(currentDate.getTime() + 3 * 60000); // ставит время на текущее + 3 минуты
    this.demoStartTimeStamp = newDate;
    return newDate; // возвращает текущую дату и время в формате строки

  }

  public addOneMinute() {
    let currentDate = this.demoStartTimeStamp;
    let newDate = new Date(currentDate.getTime() + 1 * 60000); // увеличиваем время на 1 мин 
    this.demoStartTimeStamp = newDate;
  }


  saveSettings() {
    location.reload();
  }

  showSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }


  setFinished() {
    let currentDate = this.demoStartTimeStamp;
    let newDate = new Date(currentDate.getTime() * 60000); 
    this.demoStartTimeStamp = newDate;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}