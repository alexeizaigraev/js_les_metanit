const currentDate = new Date();
console.log(currentDate);

//В конструктор Date передается количествo 
// миллисекунд, которые прошли с начала эпохи Unix, 
// то есть с 1 января 1970 года 00:00:00 GMT:
const myDate = new Date(1359270000000);
console.log(myDate); // Sun Jan 27 2013 11:00:00 GMT+0400 (Москва, стандартное время)

//  конструктор Date передаются день, месяц и год:
const date1 = new Date("27 March 2008");
console.log(date1); // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)
// или так
const date2 = new Date("3/27/2008");
console.log(date2); // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)
// или так
const date3 = new Date("3 27 2008");
console.log(date3); // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)


// что отсчет месяцев начинается с нуля, 
// то есть январь - 0, а декабрь - 11.
const myDate33 = new Date(2012,11,25,18,30,20,10); 
console.log(myDate33);

const myDate34 = new Date(2012,11,25); 
console.log(myDate34);

