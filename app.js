let MoviePrice = 0;
let seatCount = 0;
let totalSeatBook = 0;
const seatBtns = document.querySelectorAll('#seat-btn');
const MovieName = document.getElementById('movie-name');
const alreadyBooked = document.querySelectorAll('#booked');
const imgStore = document.getElementById('movie-img');

const MoviePriceList = {
    'Turbo' : 60,
    'Indian' : 100,
    'Savi' : 80,
    'Little Hearts' : 80,
    'Bhaiyya Ji' : 120,
    'Mr. & Mrs. Mahi' : 60,
    'Chandu Champion' : 100,
}
let bookedName = MoviePriceList[MovieName.value];

MovieName.addEventListener('change', function(e) {
    bookedName = MoviePriceList[e.target.value];
    
    switch(e.target.value) {
        case 'Turbo' : {
            imgStore.src = './turbo.jpg';
            break;
        }
        case 'Indian' : {
            imgStore.src = './indian.jpeg';
            break;
        }
        case 'Little Hearts' : {
            imgStore.src = './littleHertzs.jpg';
            break;
        }
        case 'Bhaiyya Ji' : {
            imgStore.src = './bhayaji.jpeg';
            break;
        }
        case 'Mr. & Mrs. Mahi' : {
            imgStore.src = './mr&mis.jpg';
            break;
        }
        case 'Savi' : {
            imgStore.src = './savi.jpeg';
            break;
        }
        case 'Chandu Champion' : {
            imgStore.src = './champ.jpeg';
            break;
        }
    }
})

function calPrice() {
    seatCount++;
    totalSeatBook++;
    MoviePrice = seatCount * bookedName;

    document.getElementById('seat-total-price').innerHTML = MoviePrice;
    document.getElementById('seat-no').innerHTML = totalSeatBook;
}

function dePrice() {
    totalSeatBook--;
    seatCount--;
    MoviePrice = seatCount * bookedName;
    document.getElementById('seat-total-price').innerHTML = MoviePrice;
    document.getElementById('seat-no').innerHTML = totalSeatBook;
}
Array.from(seatBtns).forEach( (item)=> {
    item.addEventListener('click', (e) => {
        if(e.target.style.backgroundColor == 'aqua') {
            e.target.style.backgroundColor = 'white';
            e.target.style.boxShadow = 'none';

            dePrice();
        }

        else {
            e.target.style.backgroundColor = 'aqua';
            e.target.style.boxShadow = '0 0 10px aqua';

            calPrice();
        }
    })
})