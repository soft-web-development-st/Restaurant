import restaurants from "./data.js";

const filterResults = document.querySelector(".filter-results-contents");

const topLink = document.querySelector('.back-to-top')
const nav = document.querySelector('.nav')
const filterBtn = document.querySelectorAll('.menu-filter-btn');

window.addEventListener('DOMContentLoaded', () =>{
   displayRestaurants(restaurants)
})

filterBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const restaurantCategory = e.currentTarget.dataset.id;
        const restCategory = restaurants.filter(function(restCat){
         
        //    console.log(restCat.city);
        if(restCat.city === restaurantCategory){
            return restCat;
        }
        })
      if(restaurantCategory === 'all') {
          displayRestaurants(restaurants)
      }else{
          displayRestaurants(restCategory)
      }
    })
})


function displayRestaurants(restaurant){
 let displayResto = restaurant.map((item) =>{

        return`<div class="filter-results-content">
                <img src="${item.img}" alt="">
                <div class="filter-results-info">
                    <p>${item.city}</p>
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                    <a href="restaurant.html"><span>More Info</span></a>
                </div>
            </div> `
    });
    displayResto = displayResto.join('')

    filterResults.innerHTML = displayResto
}
 
 
window.addEventListener('scroll', () => {

     const scrollHeight = window.pageYOffset;
    if(scrollHeight > 500){
    topLink.classList.add('show-back-to-top')
    }else{
        topLink.classList.remove('show-back-to-top')
    }
 
   
})