import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { AuthNewComponent } from "./auth-new/auth-new.component";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AuthNewComponent],
})
export class AppComponent {
  

}
