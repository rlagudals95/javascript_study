function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

function displayPerson(person) {
  const name = person.name;
  const age = person.age;

  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// good code

function displayPerson(person) {
  const { name, age } = person;

  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}
