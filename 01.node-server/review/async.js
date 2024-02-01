const users = [
  { name: "John Doe", username: "user1", password: "1234", id: 1 },
  { name: "Mike Smith", username: "user2", password: "1234", id: 2 },
  { name: "Sally Adam", username: "user3", password: "1234", id: 3 },
];

// Problem
// const fetchUsers = ()=>{
//     setTimeout(()=>{
//         return users
//     }, 1000)
// }

// const results = fetchUsers()
// console.log(results)

// Callback
// const fetchUsers = (cb)=>{
//     setTimeout(()=>{
//         cb(users)
//     }, 1000)
// }

// fetchUsers((users)=>{ console.log(users)})

// Promises
// const fetchUsers = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(users)
//         }, 2000)
//     })
// }

// fetchUsers()
// .then((users)=>{
//     console.log(users)
// })
// .catch((err)=>{console.log(err)})

//Async/Await
const fetchUsers = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 2000);
  });
};

// async function main(){
//     try{
//         const results = await fetchUsers()
//         console.log(results);
    
//     }catch(err){
//         console.log(err)
//     }
// }


// main();
(async function(){
        try{
        const results = await fetchUsers()
        console.log(results);
    
    }catch(err){
        console.log(err)
    }
})()