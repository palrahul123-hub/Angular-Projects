import { Directive,ElementRef,inject,input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  host:{
    '(click)':'onClick($event)'
  }
})
export class SafeLinkDirective {

  constructor() { 
    console.log('SafeLinkDirectuce  is active')
  }

  queryParam= input('myapp')
  private elementRef=inject<ElementRef<HTMLAnchorElement>>(ElementRef)
  onClick(event:MouseEvent){
    const wantsToLeave=window.confirm('Do you want to leave a page?')

    if(wantsToLeave){
      // let address=(event.target as HTMLAnchorElement).href+'?from='+this.queryParam();
      // (event.target as HTMLAnchorElement).href=address;
       let address=this.elementRef.nativeElement.href+'?from='+this.queryParam();
       this.elementRef.nativeElement.href=address;
      return;
    }
    
    event.preventDefault();

  }
  

}
