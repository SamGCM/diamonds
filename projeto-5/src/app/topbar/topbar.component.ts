import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  search: string;
  public searchControl: FormControl;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  valueChange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.search = filterValue;
    console.log(this.search)
  }

  searchMovie() {
    this.router.navigate(['explorar'], { queryParams: {search: this.search}})
  }

}
