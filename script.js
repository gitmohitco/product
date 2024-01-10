let arr = [];
const mainDiv = document.getElementById('con');

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
            rate.innerHTML = `Rating: ${val.rating.rate} <-> ${val.rating.count}`;
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
