function say(text) {
  console.log(text)
}
var people = [{name:'inna', age: 33},
{name:'anna', age: 15}, {name:'yana', age: 22},
{name:'unna', age: 44}, {name:'guna', age: 55},]

people.forEach(x => say(x))
say(123)

const young = people.filter(x => x.age <27)
say(young)

const yana = people.filter(x => x.name === 'yana')[0]
say(yana)

young[0] = {}
say(young[0])
say(people[0])
