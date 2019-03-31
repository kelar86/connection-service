import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="main-container">
  <header class="header header-6">
    <div class="branding">
      <a routerLink="/" class="nav-link">
        <span class="title">Интерфейс оператора</span>
      </a>
    </div>
  </header>
    <div class="content-container">
      <nav class="sidenav">
          <section class="sidenav-content">
            <a routerLink="/" class="nav-link" >Входящий звонок</a>
            <a routerLink="/orders" class="nav-link" >Принятые звонки</a>
          </section>
      </nav>
      <div class="content-area">
        <router-outlet></router-outlet>
      </div>
    </div>
    
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'connection-service';
}
