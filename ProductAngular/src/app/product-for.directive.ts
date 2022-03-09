import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appProductFor]'
})
export class ProductForDirective {

  constructor(private ef : ElementRef)
   {
    this.ef.nativeElement.style.backgroundColor ="yellow";
   }

}
