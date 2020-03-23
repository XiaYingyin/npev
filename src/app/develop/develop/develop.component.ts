import { Component, OnInit } from '@angular/core';
import { FileService } from "../file.service";

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.css'],
  providers: [ FileService ]
})
export class DevelopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
