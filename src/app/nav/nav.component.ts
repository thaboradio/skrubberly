import { Component, OnInit } from '@angular/core';

function toggleMenu() {
    // tslint:disable-next-line:prefer-const
    let mainNav = document.getElementById('js-menu');
    // tslint:disable-next-line:prefer-const
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    toggleMenu();
  }

}
