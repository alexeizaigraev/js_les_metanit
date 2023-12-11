// номер телефона в формате +х-ххх-ххх-хххх:
const exp = /\+\d-\d\d\d-\d\d\d-\d\d\d\d/;
const contact1 = "Email: mycomp@gmail.com";
const contact2 = "Phone: +1-234-567-8901";
console.log(exp.test(contact1));    // false
console.log(exp.test(contact2));    // true
