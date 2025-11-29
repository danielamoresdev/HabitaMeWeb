import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isScrolled = false;


  constructor(private router: Router) {}


  scrollTo(sectionId: string) {
    const currentUrl = this.router.url;

    if (currentUrl === '/' || currentUrl.startsWith('/home')) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigateByUrl(`/#${sectionId}`);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

}
