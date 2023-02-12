class geo {
  constructor() {
    this.lat = 43.22;
    this.long = 32.98;
  }
}

class language extends geo {
  constructor(name, country) {
    super();
    this.name = name;
    this.country = country;
  }
  greet = () => {
    return `Say Hi to ${this.name}`;
  };
}

var French = new language("French", "France");
console.log(French);
console.log(French.name);
console.log(French.country);
console.log(French.lat);
console.log(French.long);
console.log(French.greet());
