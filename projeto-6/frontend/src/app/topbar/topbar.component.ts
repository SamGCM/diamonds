import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menuDropdown') menu: ElementRef;
  menuState: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
        if(!this.toggleButton.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)){
            this.menuState = false;
        }
    });
  }

  public menuIsShow() {
    this.menuState = !this.menuState
    console.log(this.menuState)
  }

}
