import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy.usuer';
@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'first-angular-app';

   users=DUMMY_USERS;
   selectedUserId='';

   get getuser(){
      return this.users.find((user) => user.id==this.selectedUserId)!;
   }

   onSelectUser(id:string){
   this.selectedUserId=id;
   
   }
}
