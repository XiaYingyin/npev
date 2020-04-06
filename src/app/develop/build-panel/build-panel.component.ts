import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-build-panel',
  templateUrl: './build-panel.component.html',
  styleUrls: ['./build-panel.component.css']
})
export class BuildPanelComponent implements OnInit {
  @Input() panelOpenState = false;
  output: string[] = [];
  constructor() { }

  ngOnInit() {

  }

  displayOutput(output: string) {
    this.output = output.split("\n");
  }
}
