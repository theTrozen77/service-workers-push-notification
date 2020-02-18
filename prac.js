
// var person = {
//     fullName : function(city, country)  {
//         console.log('Function this', this);
//         return `${this.firstName} ${this.lastName} ${city} ${country}`
//     }
// }

// const result = person.fullName.call({firstName: "prp", lastName: "ppp"}, "Kathmandu", "Nepal")
// console.log(result);

// /**
//  * apply() method
//  */

// var person = {
//     fullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var person1 = {
    
// }
// const a = 2;
// if(a == 1){
//     console.log('a i s1');
// }
// console.log('out');

// const getSomeTacos = new Promise((resolve, reject) => {
//     console.log('Initial state: Can I have some tacos');
//     resolve('returned data')
// })
// .then((data) => {
//     console.log(data);
    
// })
// const video = document.getElementById("video");
// navigator.getUserMedia({
//     video : {} } ,
//     stream => video.srcObject = stream,
//     err =>  console.log(err)
    
// // )
// function askPermission() {
//     return new Promise(function(resolve, reject) {
//       const permissionResult = Notification.requestPermission(function(result) {
//         resolve(result);
//       });
  
//       if (permissionResult) {
//         permissionResult.then(resolve, reject);
//       }
//     })
//     .then(function(permissionResult) {
//       if (permissionResult !== 'granted') {
//         throw new Error('We weren\'t granted permission.');
//       }
//     });
//   }

//   askPermission();

// var btn = document.createElement("button");
            // document.body.appendChild(btn);
            // btn.innerHTML = "Click";
            // btn.addEventListener('click',() => {
            //     registration.pushManager.subscribe()
            //    .then((retur) => console.log('sadad', retur))    
            // )