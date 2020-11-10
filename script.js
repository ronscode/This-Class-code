var x = this; // not attached to any object in our code, but our code is in a "Global Object" "

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName; // this is attached the person object
  },
  myFunction: function() { // This === owner of the function ^
    return this;
  }
}

console.log(person.myFunction(), person.fullName());

console.log( person.fullName());

//console.log("Just this is...", x)

// function myfunction() {
//   return this;
// }

// console.log(myfunction());

//console.log('Go get the value for the key fullname ', person.fullName());
//console.log("execute the function for the key fullName ", person.fullName());

// let ourServersResponse =[ {
//   headline: "Ron Breaks Fishing World Record",
//   subheadline: "It was a goldfish :( "
// },
//   {
//     headline: "Linda breaks surfing World Record", 
//     subheadline: "Measured from back of wave"
//   }
// ]

// function renderHTML() {
//   let slides = ourServersResponse.map(eachStory => {
//     return `
//     <div class="slide">
//     <h1>${this.headline}</h1>
//     <h3>${this.subheadline}</h3>
//     <img src="${this.background}> 
  
//     </div>
//     `
//   })
//   return slides
// }