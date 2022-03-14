import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullName: string = 'Philip Mwendwa';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onChange( destination:string ) {
    this.router.navigate([`/${destination}`])
  }

  signOut():void {
    console.log('signed Out')
  }
}
