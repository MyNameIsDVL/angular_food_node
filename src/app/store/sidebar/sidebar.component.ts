import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faHamburger = faHamburger;

  mode = new FormControl('over');
  
  constructor() { }

  ngOnInit(): void {
  }

}
