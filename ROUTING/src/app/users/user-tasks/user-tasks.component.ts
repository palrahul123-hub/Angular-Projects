import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  // userId=input.required<string>()
  userName='';
  private activatedRoute=inject(ActivatedRoute);
  private userService=inject(UsersService);
  private destroyRef=inject(DestroyRef);
  // userName=computed(() => this.userService.users.find((a) => a.id==this.userId())?.name);

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: parammap=>{
        this.userName= this.userService.users.find((a) => a.id== parammap.get('userId'))?.name || ''
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

}
