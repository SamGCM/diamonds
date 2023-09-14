import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menuDropdown') menu: ElementRef;
  menuState: boolean = false;

  @ViewChild('toggleButtonNav') toggleButtonNav: ElementRef;
  @ViewChild('menuDropdownNav') menuNav: ElementRef;
  menuStateNav: boolean = false;

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router
  ) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(!this.toggleButton.nativeElement && !this.menu.nativeElement) {
        if(this.toggleButton.nativeElement.contains(e.target) && this.menu.nativeElement.contains(e.target)){
            this.menuState = false;
        }
      }
    });


    this.renderer.listen('window', 'click',(e:Event)=>{
      if(!this.toggleButtonNav.nativeElement && !this.menuNav.nativeElement) {
        if(this.toggleButtonNav.nativeElement.contains(e.target) && this.menuNav.nativeElement.contains(e.target)){
            this.menuStateNav = false;
        }

      }
  });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  public menuIsShow() {
    this.menuState = !this.menuState
  }

  public navMobileIsShow() {
    this.menuStateNav = !this.menuStateNav
  }

}
