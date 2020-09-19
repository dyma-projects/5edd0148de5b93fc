import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  public addUser(user: string): void {
    const users: string[] = this.users.value
    users.push(user);
    this.users.next(users);
  }
}
