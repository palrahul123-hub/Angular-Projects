import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from "./auth/auth.directive";


@Component({
  selector: 'app-root',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directive-Deep-Dive';

  private authService=inject(AuthService);

  isAdmin=computed(() => this.authService.activePermission()==='admin')

}
