let slideindex = 0;
slideshow(slideindex);

function plusSlides(value) {
    slideindex += value
    slideshow(slideindex)
}

function slideshow(n) {
    let slide = document.getElementsByClassName('mysilde');
    
    if (slide?.length > 0) {
        if (n == slide.length) {
            n = 0;
            slideindex = 0;
        }
        if (n < 0) {
            slideindex = slide.length - 1;
            n = slide.length - 1;
        }
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }
        slide[n].style.display = 'block';
    }
}



// // product details 

// let product_index = 0;
// productshow(product_index);

// function product_changes(value) {
//     product_index += value;
//     productshow(product_index);
// }

// function productshow(value) {
//     let products = document.getElementsByClassName('product-slides');
//     if (value == products.length) {
//         value = 0;
//         product_index = 0;
//     }
//     if (value < 0) {
//         product_index = products.length - 1;
//         value = products.length - 1;
//     }
//     for (let i = 0; i < products.length; i++) {
//         products[i].style.display = 'none';
//     }
//     products[value].style.display = 'block';

// }

// increase decrease 
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

let a = 1;
plus.addEventListener('click', ()=>{
    a++;
    num.innerText = a;
})

minus.addEventListener("click", ()=>{
    if(a>1){
        a--;
        num.innerText = a;
    }
})
