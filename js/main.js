// let  https  = new XMLHttpRequest();

// https.open("Get" , "https://fakestoreapi.com/products"); 

// https.send(); 

// https.addEventListener("readystatechange" , function(){
//     if(https.readyState === 4){
//         let data =  JSON.parse( https.response); 
//         console.log(data);
//         display(data);  
//     }
// })

fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => display(data)); 

function display(data){
    let cols =  '' ; 
    data.map((i) => {
        cols += 
                `
                    <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="Card">
                        <div class="image">
                            <img src=${i.image} alt="">
                        </div>
                        <div class="text">
                            <h2>${i.title}</h2>
                            <p class="desc">${i.description}</p>
                            <p class="price">${i.price}$</p>
                            <button class="btn btn-warning text-white">Add to cart</button>
                        </div>
                        <div></div>
                    </div>
                </div>
                `
    }); 
    document.getElementById('box').innerHTML = cols ;  
}