let myslider=[
'asset/images/image1.jpg',
'asset/images/image2.jpg',
'asset/images/image3.jpg',
'asset/images/image4.jpg',
]
let img = document.querySelector('#slider img');
let index = 0;
img.src = myslider[index]
// img.setAttribute('src',myslider[0]);

let next = document.querySelector('.next');

next.addEventListener('click',function() {
    index++;

    if(index > myslider.length -1){
    index = 0;
    }


    img.src = myslider[index]
})

let prev = document.querySelector('.prev');

prev.addEventListener('click',function() {
    index++;

    if(index > myslider.length -1){
    index = 0;
    }


    img.src = myslider[index]
})
