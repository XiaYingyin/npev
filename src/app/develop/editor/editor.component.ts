import { Component, OnInit, Output, Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  theme = 'vs';

  _editorVal: string = "#include <stdio.h> \n\n" +
                      "int main(int argc, char **argv) {\n" +
                      "\tprintf(\"Hello, World!\\n\");\n" +
                      "\treturn 0;\n" +
                      "}\n";

  @Input() set editorVal(value: string) {
    console.log("editor get content: " + value);
    this._editorVal = value;
    // this.model.value = value;
  }

  get editorVal(): string {
    return this._editorVal;
  }

  // model: CodeModel = {
  //   language: 'c',
  //   uri: 'main.json',
  //   value: '',

  // };
  // model: CodeModel = {
  //   language: 'c',
  //   uri: 'main.json',
  //   value: '',
  //   dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor']
  // };

  // options = {
  //   contextmenu: true,
  //   automaticLayout: true,
  //   wordWrap: 'on',
  //   fontSize: 14,
  //   minimap: {
  //     enabled: true
  //   }
  // };
  editorOptions = {theme: 'vs', language: 'c'};
  // onCodeChanged(value) {
  //   console.log('CODE', value);
  // }
  content: string = "#include <stdio.h> \n\n" +
                    "int main(int argc, char **argv) {\n" +
                    "\tprintf(\"Hello, World!\\n\");\n" +
                    "\treturn 0;\n" +
                    "}\n";
  constructor() { }

  ngOnInit() {
    
  }

  setEditorValue(value: string) {
    console.log("test editor " + value);
    // this.model.value = value;
  }
}
