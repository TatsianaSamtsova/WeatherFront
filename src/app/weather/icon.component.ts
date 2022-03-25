import { Component, Input } from "@angular/core";
import {IconService} from "../services/icon.service";

@Component({
  selector: 'icon',
  template:`
    <div [ngSwitch]="getIcon()" >
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'thunderstorm'" ibmIconThunderstorm size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'rain'" ibmIconRain size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'rain scattered'" ibmIconRainScattered size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'rain and snow'" ibmIconSleet size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'snow'" ibmIconSnow size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'fog'" ibmIconFog size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'sunny'" ibmIconSun size="32" fill="#F1C21B"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'clouds'" ibmIconCloud size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'cloudy'" ibmIconCloudy size="32" fill="#0f62fe"></svg>
      <svg [ngStyle]= "iconSize()" *ngSwitchCase="'partly cloudy'" ibmIconPartlyCloudy size="32" fill="#0f62fe"></svg>
    </div>
        `
})

export class IconComponent {
  @Input() description: any;
  @Input() size: string | undefined;

  constructor( private iconService: IconService){
  }

  getIcon(){
    return this.iconService.showIcon(this.description)
  }

  iconSize(){
    if(this.size === 'big')
      return {height: '335px', width: '335px'}
    return {height: '32px', width: '32px'}
  }
}
