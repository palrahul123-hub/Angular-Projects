import { InvokeFunctionExpr } from '@angular/compiler';
import { Component,EventEmitter,Input,Output } from '@angular/core';

type User={
    id:string,
    avatar:string,
    name:string
}

interface IUser{
  id:string,
    avatar:string,
    name:string
}

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({required:true}) user!:IUser
  @Input({required:true}) selected!:boolean
  @Output() Select=new EventEmitter();

  get GetImagePth(){
    return 'assets/users/'+this.user.avatar;
  }

  onSelectUser(){
      this.Select.emit(this.user.id)
  }

}
