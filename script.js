const warp = document.querySelector(".warp");
const gparent = document.querySelector(".gparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const button = document.getElementById("btn");
// button.addEventListener('click',function(){
//     alert('Button Clicked!!!');
// });
// warp.addEventListener('click',function(){
//     alert('Warp Clicked...')
// });
// gparent.addEventListener('click',function(){
//     alert('Grand Parent Clicked...')
// });
// parent.addEventListener('click',function(){
//     alert('Parent Clicked...')
// });
// child.addEventListener('click',function(){
//     alert('Child Clicked...')
// });

// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());
// console.log(date.getUTCHours());
// console.log(date.getUTCFullYear());
// console.log(date.getUTCMinutes());
let arr = [];
const mainDiv = document.getElementById('con');

// window.onload = displayClock();
// function displayClock(){
//   var display = new Date().toLocaleTimeString();
//   document.getElementById('dt').textContent = display;
//   setTimeout(displayClock, 1000); 
// }
fetch("https://fakestoreapi.com/products")
.then(function(response){
    console.log(response)
    return response.json()
})
.then(function(p){
    console.log(p);
    arr = p;
    arr.forEach(
        function(val){
            const img = document.createElement('img')
            img.src = val.image;
            img.style.height='200px';
            const title = document.createElement('h2');
            title.innerHTML = val.title;
            const desc = document.createElement('p');
            desc.innerHTML = val.description;
            const price = document.createElement('h3');
            price.innerHTML = `Price: $${val.price}`;
            const rate = document.createElement('h4')
            rate.innerHTML = `Rating: ${val.rating}`;
            const btn = document.createElement('button')
            btn.innerHTML = "Add to Cart";
            const subDiv = document.createElement('div');
            subDiv.appendChild(img);
            subDiv.appendChild(title);
            subDiv.appendChild(desc);
            subDiv.appendChild(price);
            subDiv.appendChild(rate);
            subDiv.appendChild(btn);
            subDiv.classList.add("subDiv");
            mainDiv.appendChild(subDiv);
        })
})
