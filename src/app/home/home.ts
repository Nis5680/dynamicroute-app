import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = [
    {
      id:'1',
      name:'John Doe',
      age:30,
      email:'john@example.com'
    },
    {
      id:'2',
      name:'Jane Smith',
      age:25,
      email:'jane@example.com'
    },
    {
      id:'3',
      name:'Mike Johnson',
      age:35,
      email:'mike@example.com'
    },
    {
      id:'4',
      name:'Emily Davis',
      age:28,
      email:'emily@example.com'
    },
    {
      id:'5',
      name:'David Wilson',
      age:32,
      email:'david@example.com'
    }
  ];
}
