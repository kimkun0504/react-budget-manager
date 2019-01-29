const persion = {
    name: 'Kun Kim',
    age: 22,
    location: {
        city: 'New York',
        temp: 92,
    },
};

const {city: cityName = 'New York', temp: temperature} = person.location;

console.log(cityName + 'is' + temperature + 'degrees');