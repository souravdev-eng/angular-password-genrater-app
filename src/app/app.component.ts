import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  useLetters = false;
  useNumbers = false;
  useSymbol = false;
  password = '';
  length = 0;

  onLengthChange(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseSymbols() {
    this.useSymbol = !this.useSymbol;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onButtonSubmit() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbol = '!@#$%^&*()_+';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbol) {
      validChars += symbol;
    }
    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }
}
