// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   // It will help to redirect the page 
import { ViewportScroller } from '@angular/common'; // It will help to redirect the page 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private scroller: ViewportScroller) {}  // It will help to redirect the page 

  ngOnInit(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('#navbarNav') as HTMLElement;
    const togglerIcon = document.querySelector('.navbar-toggler-icon') as HTMLElement;

    // Toggle the 'show' class to open and close the navbar
    navbarToggler.addEventListener('click', (e) => {
      navbarCollapse.classList.toggle('show');
      togglerIcon.classList.toggle('close');  // Change icon to close when navbar is open
      e.stopPropagation();  // Prevents the click event from propagating to the document
    });

    // Close the navbar if clicked outside
    document.addEventListener('click', (e) => {
      if (!navbarCollapse.contains(e.target as Node) && !navbarToggler.contains(e.target as Node)) {
        navbarCollapse.classList.remove('show');
        togglerIcon.classList.remove('close');  // Reset icon when navbar is closed
      }
    });
  }

  

  // It will help to redirect the page 

  goToAbout() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        this.scroller.scrollToAnchor('about');
      }, 100); // Wait for HomeComponent to render
    });
  }

}
