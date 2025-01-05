import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  toggleNavbar() {
    const nav = document.getElementById('nav-bar');
    const bodypd = document.getElementById('body-pd');
    const headerpd = document.getElementById('header');
    if (nav && bodypd && headerpd) {
      nav.classList.toggle('show');
      bodypd.classList.toggle('body-pd');
      headerpd.classList.toggle('body-pd');
    }
  }

  // ฟังก์ชันที่ใช้เปลี่ยนสีลิงค์เมื่อคลิก
  colorLink(event: any) {
    const linkColor = document.querySelectorAll('.nav_link');
    linkColor.forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
  }

  constructor(private router: Router) {}
}
