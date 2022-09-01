async function newAssignment() {
let newData = await fetch('https://swapi.dev/api/people')
let newdata2 = await newData.json();
console.log('2222', newdata2)
let totaldata = newdata2.results
let result = totaldata.map(people=> `<p>name:${people.name}------birthyear:${people.birth_year}----film:${people.films}----gender:${people.gender}</p>`
)

document.body.innerHTML = result.join('')

};

newAssignment()