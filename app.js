const ageToVote = 100

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE
let currentYear = '2023'
let jsReleaseYear = '1995'

console.log("current age of JavaScript is", currentYear - jsReleaseYear)
if(jsReleaseYear > ageToVote){
  console.log('JavaScript is old enough to vote')
} else if(jsReleaseYear < ageToVote) {
  console.log("JavaScrips is not old enough to vote")
}
console.log("Starting")
for (let i = 0; i <= 100; i++) {
  if(i % 10 == 0){
    console.log(i)
    }
    if(i == 50){
      console.log("Halfway")
      }
      if(i == 100){
        console.log("Finished")
      }
      }
  


  console.log(user.name,"lives at",user.address.street,",",user.address.city)

