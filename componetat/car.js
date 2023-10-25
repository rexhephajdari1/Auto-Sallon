export function getCar(id) {
  return fetch(`https://myfakeapi.com/api/cars/${id}`)
    .then((data) => data.json())
    .then((data) => data);
}

//     export function composeCar(data ){
//         console.log(data)
//        let html = '<div class="container-fluid  row mx-5">'

//             html += `
//             <div class="col-3 mt-5 ">
//             <a class="text-dec" href="?id=${data.id}"> <div class="card" style="width: 19rem;  ">
//                 <div class="card-body">
//                     <img src="" alt="" class="img-cars">
//                     <h4 class="card-title">${data.car}</h4>
//                     <p class="card-text">Car model: ${data.car_model}</p>
//                     <p class="card-text">Car color: ${data.car_color} </p>
//                     <p class="card-text">Car model year: ${data.car_model_year}</p>

//                     <h5>${data.price}</h5>
//                 </div>
//             </div> </a>
//             </div>`

//         html += '</div>'
//         return html;
//  }

export function composeCar(car) {
  var sliderItems;

  for (var i = 0; i < car?.images?.length; i++) {
    var sliderItem = `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
            <img class="d-block w-100 carousel-item-img" src="${
              car.images[i]
            }" alt="Slider Item">
        </div>`;

    sliderItems += sliderItem;
  }

  var card = `
      <div class="card-container" ">
      <div> 
      <div class="card">
      
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            ${sliderItems}
        </div>
        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
      <div class="card-body">
       <div class="d-flex justify-content-between"
          <h4 class="card-title">${car.car} </h4>
          <button id="add-to-favourites" class="btn btn-outline-primary" style="height:35px; width:50px;">
             <i class="bi bi-bookmark-heart"></i>
           </button>

          </div>
       
       
         <p class="card-text">Car model: ${car.car_model}</p>
         <p class="card-text">Car color: ${car.car_color} </p>
         <p class="card-text">Car model year: ${car.car_model_year}</p>
      
      <h5>${car.price}</h5>
      </div>
      </div> </a>
      </div>
      `;
       
      var addToFavoritesButton = document.querySelector('#add-to-favourites');
      if (addToFavoritesButton ) {
        addToFavoritesButton.addEventListener('click',  function (e) {
          alert('hi');
        });
      }
    
  return card;

   
 
}
