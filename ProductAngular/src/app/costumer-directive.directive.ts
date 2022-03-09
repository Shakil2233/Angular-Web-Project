import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCostumerDirective]'
})
export class CostumerDirectiveDirective {

  constructor(private ef : ElementRef) 
  { 
    this.ef.nativeElement.style.backgroundColor ="red";
  }

}
