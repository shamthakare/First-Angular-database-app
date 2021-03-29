import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from "../user.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  banty: User[];
  constructor(private userService: UserService) { }

  createCustomer = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });



  ngOnInit(): void {
    this.userService.alluserdata().subscribe(sarju => {
      this.banty = sarju.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as User;
      })
    });
  }


  createSubmit(sarju: User) {
    this.userService.createcustomer(sarju);
    alert("Save Data....!")
  }


  delete(id: string) {
    if (confirm("Are you sure to delete ")) {
      this.userService.deletecustomer(id);
      alert("Oohhhoo Your  Delete the Data");
    } else {
      alert("Thank you Not Deleteed....");
    }
  }



}
