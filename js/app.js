// selectors
let getButton = document.querySelector("#getButton");
let deleteButton = document.querySelector("#deleteButton");
let userContainer = document.querySelector("#newUserContainer")


// select list
let selected = document.querySelector("#selected");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let younger30 = document.querySelector("#younger30");
let older30 = document.querySelector("#older30");


// create new classes ****************************************
const user = new User("https://randomuser.me/api/?results=10");
const ui = new UI();
let myContainerArray = [];


// function for  all event listeners *******************************************************
 eventListeners();
function eventListeners(){

     getButton.addEventListener("click", getData);
     deleteButton.addEventListener("click", deleteData);
     userContainer.addEventListener("click", deleteUser);

}
//*****

// Add all infos to our container array
user.pullUserData()
     .then( allDatas => allDatas.results.map( (x) => {
               
               return {
                    name: x.name.first + " " + x.name.last,
                    gender: x.gender,
                    age: Number(x.dob.age),
                    location: x.location.city + " " + x.location.state + " " + x.location.contry,
                    email: x.email,
                    phone: x.phone    
               }
          })
     )
     .then( data => {

          data.forEach( dt => myContainerArray.push(dt) );

     })
     .catch( err => alert("error"))


// function for get all user's data with one click *****************************************
function getData(){
     
//     if( userContainer.firstChild){
//           alert("You already have users!");
//      }
 //    else{
          while (userContainer.firstChild) {
               userContainer.removeChild(userContainer.firstChild);
          }

         if( selected.selected){
              myContainerArray.forEach( arr => {
                   ui.getAllUsers(arr.name, arr.gender, arr.age, arr.location, arr.email, arr.phone);
              })
         }
         else if( male.selected){
               myContainerArray.forEach( arr => {
                    if( arr.gender == "male"){
                         ui.getAllUsers(arr.name, arr.gender, arr.age, arr.location, arr.email, arr.phone);
                    }
               })
         }
         else if( female.selected){
               myContainerArray.forEach( arr => {
                    if( arr.gender == "female"){
                         ui.getAllUsers(arr.name, arr.gender, arr.age, arr.location, arr.email, arr.phone);
                    }
               })
          }
          else if( younger30.selected){
               myContainerArray.forEach( arr => {
                    if( arr.age < 30){
                         ui.getAllUsers(arr.name, arr.gender, arr.age, arr.location, arr.email, arr.phone);
                    }
               })
          }
          else if( older30.selected){
               myContainerArray.forEach( arr => {
                    if( arr.age >= 30){
                         ui.getAllUsers(arr.name, arr.gender, arr.age, arr.location, arr.email, arr.phone);
                    }
               })
          }
     }
//}
//****


// function for delete all user's data with one click ******************************************
function deleteData(){

     while (userContainer.firstChild) {
          userContainer.removeChild(userContainer.firstChild);
      }

}
//*****


// function for get single user's data with one click *******************************************
function deleteUser(e){

     if(e.target.className.includes("delete-user-button")){
          e.target.parentElement.parentElement.parentElement.remove();
     }
}