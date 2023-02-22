import { Component } from '@angular/core';
export interface usersI {
  id: number,
  name: string,
  phone: number,
  email: string,
  address: string,
  company: string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  users: usersI[] = [{
    id: 1,
    name: "Meera",
    phone: 1234567890,
    email: "meera@gamil.com",
    address: "India",
    company: "Amazone"
  }, {
    id: 2,
    name: "Rahul",
    phone: 7845125485,
    email: "rahul@gamil.com",
    address: "India",
    company: "Google"
  }, {
    id: 3,
    name: "Ajay",
    phone: 78454152255,
    email: "ajay@gamil.com",
    address: "India",
    company: "Adobe"
  }, {
    id: 4,
    name: "Praveen",
    phone: 8784545454,
    email: "praveen@gamil.com",
    address: "India",
    company: "xyzAbc"
  }];
  currUser!:usersI;


  selectedUser(user:usersI){
    console.log(user);
    this.currUser = user;
  }


}
