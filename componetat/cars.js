//qetu i shton veq fotot i bon 20 edhe te dalin vet tani
var fotot = [
  {
    src: "./cars/mitsubishi-2002-montero/first-img.jpg",
  },
  {
    src: "./cars/volkswagen 2008 passat/1.jpg",
  },
  {
    src: "./cars/saturn 2003/images.jpg",
  },
  {
    src: "./cars/jeep compass 2012/images.jpg",
  },
  {
    src: "./cars/mitsubishi lancer evolution 2002/1.jpg",
  },
  {
    src: "./cars/cheverlet suburban 2009/download.jpg",
  },
  {
    src: "./cars/dodge ram van b350 1994/download.jpg",
  },
  {
    src: "./cars/isuzu ascender 2004/download.jpg",
  },
  {
    src: "./cars/bmw 6 series 2008/download.jpg",
  },
  {
    src: "./cars/mitsubishi gto 1994/1.jpg",
  },
  {
    src: "./cars/mazda mazda5 2010/download.jpg",
  },
  {
    src: "./cars/audi q7 2012/download.jpg",
  },
  {
    src: "./cars/mercedes benz sl class 1989/images.jpg",
  },
  {
    src: "./cars/volvo c70 2012/images.jpg",
  },
  {
    src: "./cars/gmc envoy xl 2006/download.jpg",
  },
  {
    src: "./cars/gmc vandura g3500 1996/1.jpg",
  },
  {
    src: "./cars/cadillac cts 2003/download.jpg",
  },
  {
    src: "./cars/bmw x5 m 2012/images.jpg",
  },
  {
    src: "./cars/dodge viper 1999/download.jpg",
  },
  {
    src: "./cars/ford taurus 2002/images.jpg",
  },
];

export function getCars() {
  return fetch("https://myfakeapi.com/api/cars")
    .then((data) => data.json())
    .then((data) => data.cars);
}

function getimg(image) {
  return `
           <div>
             <img src="${image.image}" alt="" class="img-cars">
           </div>
        `;
}

function composedImage(indeksi, fotot) {
  return `<img src="${
    fotot[indeksi > fotot.length - 1 ? 1 : indeksi]["src"]
  }" alt="" class="img-cars">`;
}

export function composeCars(data, images) {
  const first20cars = data.slice(0, 20);
  let html = '<div class="container-fluid  row mx-auto">';
  for (let [index, cars] of first20cars.entries()) {
    html += `
            <div class="col-3 mt-5 ">
            <a class="text-dec" href="car.html?id=${
              cars.id
            }"> <div class="card">
                
                   <div class="images-card">
                    ${composedImage(index, fotot)}
                    </div>
                    <div class="card-body">
                    <h4 class="card-title">${cars.car}</h4>
                    <p class="card-text">Car model: ${cars.car_model}</p>
                    <p class="card-text">Car color: ${cars.car_color} </p>
                    <p class="card-text">Car model year: ${
                      cars.car_model_year
                    }</p>
                    <h5>${cars.price}</h5>
                </div>
            </div> </a>
            </div>`;
  }

  html += "</div>";
  return html;
}
