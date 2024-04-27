class Password {
  constructor() {
    let heading = document.getElementById('heading')
    heading.innerHTML = "Welcome to Password Generator";
    this.pass = "";
  }
  generatePassword(len) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "1234567890"
    let special = "!@#$%^&*()"
    if (len < 3) {
      return "Your password should be atleast 3 characters long";
    }
    else {
      let generatedPassword = "";
      let i = 0
      while (i < len) {
        generatedPassword += chars[Math.floor(Math.random() * chars.length)]
        generatedPassword += numbers[Math.floor(Math.random() * numbers.length)]
        generatedPassword += special[Math.floor(Math.random() * special.length)]
        i += 3
      }
      return generatedPassword;
    
  }
}
}
