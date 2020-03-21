import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  theme = 'vs';

  model: CodeModel = {
    language: 'c',
    uri: 'main.json',
    value: ''
  };

  options = {
    contextmenu: true,
    automaticLayout: true,
    wordWrap: 'on',
    fontSize: 14,
    minimap: {
      enabled: true
    }
  };

  onCodeChanged(value) {
    console.log('CODE', value);
  }

  constructor() { }

  ngOnInit() {
    this.model.value = "#include <stdio.h> \n\n" + 
                        "int main(int argc, char **argv) {\n" +
                        "\tprintf(\"Hello, World!\\n\");\n" +
                        "\treturn 0;\n" +
                        "}\n";
  }
}
