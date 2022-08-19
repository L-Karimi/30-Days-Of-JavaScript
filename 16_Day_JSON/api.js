let fetch=require("node-fetch2")
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:"POST",
    Headers:{
    "content-type": "application/json",
},
    body: JSON.stringify({
        userId:5,
        File:"AnitaB",
        completed:true,
})
})
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
});