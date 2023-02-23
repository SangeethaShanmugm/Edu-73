let calc = {
  sum: function (a, b) {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
  add: (a, b) => {
    return a + b;
  },
};

calc.sum(2, 2);
4;
calc.sub(9, 4);
5;

function language(name, country) {
  this.name = name;
  this.country = country;
  this.greet = () => {
    return `Say HI to ${name}`;
  };
}

var Hindi = new language("Hindi", "India");

//language(name: 'Hindi', country: 'India', greet: f)
Hindi.greet();
("Say HI to Hindi");

var English = new language("English", "England");
//language(name: 'English', country: 'England',greet: f )
English.country;
("England");
English.name;
("English");
