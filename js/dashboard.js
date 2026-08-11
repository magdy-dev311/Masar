const header = document.getElementById("header")
const time = new Date()
if (time.getHours() < 12) {
    header.innerHTML = `صباح الخير يا <span class="text-cyan-600">وليد</span>`
} else {
    header.innerHTML = `مساء الخير يا <span class="text-cyan-600">وليد</span>`
}


let cars = JSON.parse(localStorage.getItem("cars"))
if (!cars) {
    cars = [
        { id: 1, status: "park", plateNumber: "9379 - س ع ن", type: "5000", branch: "قاهره" },
        { id: 2, status: "park", plateNumber: "7247 - و أ س", type: "5000", branch: "قاهره" },
        { id: 3, status: "park", plateNumber: "1636 - س أ ي", type: "5000", branch: "قاهره" },
        { id: 4, status: "park", plateNumber: "6186 - س أ ي", type: "5000", branch: "قاهره" },
        { id: 5, status: "park", plateNumber: "س ن ر- 9798", type: "جامبو", branch: "قاهره" },
        { id: 6, status: "park", plateNumber: "2686 - س ع م", type: "جامبو", branch: "قاهره" },
        { id: 7, status: "park", plateNumber: "1817 - س ع م", type: "جامبو", branch: "قاهره" },
        { id: 8, status: "park", plateNumber: "س ر ص-2723", type: "جامبو", branch: "قاهره" },
        { id: 9, status: "park", plateNumber: "1521 - س ع و", type: "جامبو", branch: "قاهره" },
        { id: 10, status: "park", plateNumber: "8262 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 11, status: "park", plateNumber: "8268 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 12, status: "park", plateNumber: "6162 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 13, status: "park", plateNumber: "6156 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 14, status: "park", plateNumber: "2686 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 15, status: "park", plateNumber: "2682 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 16, status: "park", plateNumber: "س ع م -4393", type: "جامبو", branch: "قاهره" },
        { id: 17, status: "park", plateNumber: "7174 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 18, status: "park", plateNumber: "س ع ن-8676", type: "جامبو", branch: "قاهره" },
        { id: 19, status: "park", plateNumber: "6946 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 20, status: "park", plateNumber: "5272 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 21, status: "park", plateNumber: "5275 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 22, status: "park", plateNumber: "5265 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 23, status: "park", plateNumber: "1519 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 24, status: "park", plateNumber: "1518 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 25, status: "park", plateNumber: "1718 - س أ ي", type: "جامبو", branch: "قاهره" },
        { id: 26, status: "park", plateNumber: "2421 - س أ ن", type: "جامبو", branch: "قاهره" },
        { id: 27, status: "park", plateNumber: "4143 - س أ و", type: "جامبو", branch: "قاهره" },
        { id: 28, status: "park", plateNumber: "9414 - س أ ه", type: "جامبو", branch: "قاهره" },
        { id: 29, status: "park", plateNumber: "5774 - س ل ج", type: "جامبو", branch: "قاهره" },
        { id: 30, status: "park", plateNumber: "7446 - س ل ج", type: "مكشوفه", branch: "قاهره" },
        { id: 31, status: "park", plateNumber: "9795 - س د ه", type: "جامبو", branch: "قاهره" },
        { id: 32, status: "park", plateNumber: "5994 - س ل ج", type: "جامبو", branch: "قاهره" },
        { id: 33, status: "park", plateNumber: "9379 - س ل ص", type: "جامبو", branch: "قاهره" },
        { id: 34, status: "park", plateNumber: "6424 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 35, status: "park", plateNumber: "8272 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 36, status: "park", plateNumber: "7414 - س د ه", type: "جامبو", branch: "قاهره" },
        { id: 37, status: "park", plateNumber: "4243 - س و ر", type: "جامبو", branch: "قاهره" },
        { id: 38, status: "park", plateNumber: "3435 - س و ر", type: "جامبو", branch: "قاهره" },
        { id: 39, status: "park", plateNumber: "9585 - س ك ر", type: "جامبو", branch: "قاهره" },
        { id: 40, status: "park", plateNumber: "9419 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 41, status: "park", plateNumber: "6848 - س ه ج", type: "جامبو", branch: "قاهره" },
        { id: 42, status: "park", plateNumber: "3134 - س د ه", type: "جامبو", branch: "قاهره" },
        { id: 43, status: "park", plateNumber: "3345 - ر ن س", type: "جامبو", branch: "قاهره" },
        { id: 44, status: "park", plateNumber: "8184 - و د س", type: "جامبو", branch: "قاهره" },
        { id: 45, status: "park", plateNumber: "1575 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 46, status: "park", plateNumber: "8128 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 47, status: "park", plateNumber: "س ع ن -6961", type: "جامبو", branch: "قاهره" },
        { id: 48, status: "park", plateNumber: "س ع م -7479", type: "جامبو", branch: "قاهره" },
        { id: 49, status: "park", plateNumber: "1788 - س ق ر", type: "جامبو", branch: "قاهره" },
        { id: 50, status: "park", plateNumber: "س ن ر - 9976", type: "جامبو", branch: "قاهره" },
        { id: 51, status: "park", plateNumber: "س ع م -7484", type: "جامبو", branch: "قاهره" },
        { id: 52, status: "park", plateNumber: "س ع ن -4354", type: "جامبو", branch: "قاهره" },
        { id: 53, status: "park", plateNumber: "س ن ر -7571", type: "جامبو", branch: "قاهره" },
        { id: 54, status: "park", plateNumber: "س ع ن-1217", type: "جامبو", branch: "قاهره" },
        { id: 55, status: "park", plateNumber: "س ع م -9492", type: "جامبو", branch: "قاهره" },
        { id: 56, status: "park", plateNumber: "6883- س و ج", type: "جامبو", branch: "قاهره" },
        { id: 57, status: "park", plateNumber: "1419 - س د ه", type: "دبابه", branch: "قاهره" },
        { id: 58, status: "park", plateNumber: "7176 - س ع ن", type: "دبابه", branch: "قاهره" },
        { id: 59, status: "park", plateNumber: "8678 - س ع ن", type: "دبابه", branch: "قاهره" },
        { id: 60, status: "park", plateNumber: "7175 - س ع ن", type: "دبابه", branch: "قاهره" },
        { id: 61, status: "park", plateNumber: "9289 - ص أ س", type: "دبابه", branch: "اسكندريه" },
        { id: 62, status: "park", plateNumber: "س أ ي- 8198", type: "دبابه", branch: "قاهره" },
        { id: 63, status: "park", plateNumber: "4743 - س أ و", type: "دبابه", branch: "قاهره" },
        { id: 64, status: "park", plateNumber: "س أ و- 4145", type: "دبابه", branch: "قاهره" },
        { id: 65, status: "park", plateNumber: "5635 - أ ص ي", type: "دبابه", branch: "قاهره" },
        { id: 66, status: "park", plateNumber: "4214 - س أ و", type: "دبابه", branch: "قاهره" },
        { id: 67, status: "park", plateNumber: "7133 - س م ج", type: "دبابه", branch: "قاهره" },
        { id: 68, status: "park", plateNumber: "8968 - س أ ه", type: "دبابه", branch: "قاهره" },
        { id: 69, status: "park", plateNumber: "4642 - س أ ه", type: "دبابه", branch: "مطروح" },
        { id: 70, status: "park", plateNumber: "4284 - س ع ه", type: "دبابه", branch: "قاهره" },
        { id: 71, status: "park", plateNumber: "8481 - س ق ج", type: "دبابه", branch: "اسكندريه" },
        { id: 72, status: "park", plateNumber: "4483 - س م ر", type: "دبابه", branch: "اسكندريه" },
        { id: 73, status: "park", plateNumber: "9767 - س د ن", type: "دبابه", branch: "قاهره" },
        { id: 74, status: "park", plateNumber: "4249 - س م ج", type: "دبابه", branch: "اسكندريه" },
        { id: 75, status: "park", plateNumber: "7511 - س م ر", type: "دبابه", branch: "اسكندريه" },
        { id: 76, status: "park", plateNumber: "7574 - س ك ر", type: "دبابه", branch: "اسكندريه" },
        { id: 77, status: "park", plateNumber: "2388 - ر ق س", type: "دبابه", branch: "اسكندريه" },
        { id: 78, status: "park", plateNumber: "7448 - س م ج", type: "دبابه", branch: "اسكندريه" },
        { id: 79, status: "park", plateNumber: "2757 - س ع و", type: "دبابه", branch: "قاهره" },
        { id: 80, status: "park", plateNumber: "س ع م -6463", type: "دبابه", branch: "اسكندريه" },
        { id: 81, status: "park", plateNumber: "س د ن -9343", type: "دبابه", branch: "اسكندريه" },
        { id: 82, status: "park", plateNumber: "س أ ن - 7212", type: "دبابه", branch: "اسكندريه" },
        { id: 83, status: "park", plateNumber: "س ن ف - 3523", type: "فان", branch: "قاهره" },
        { id: 84, status: "park", plateNumber: "س ن ف -3515", type: "فان", branch: "قاهره" }
    ];
    localStorage.setItem("cars", JSON.stringify(cars))
}

let totlaCarsContainer = document.getElementById("totlaCarsContainer")
let parkingCarsContainer = document.getElementById("parkingCarsContainer")
let onTripContainer = document.getElementById("onTripContainer")
let damagedCarsContainer = document.getElementById("damagedCarsContainer")
let expiredCarsContainer = document.getElementById("expiredCarsContainer")

let avaliableCars = cars.filter(c => c.status === "park")
let onTripCars = cars.filter(c => c.status === "onTrip")
let damagedCars = cars.filter(c => c.status === "damaged")
let expiredCars = cars.filter(c => c.status === "expired")

function renderNumbers () {
    totlaCarsContainer.textContent = cars.length
    parkingCarsContainer.textContent = avaliableCars.length
    onTripContainer.textContent = onTripCars.length
    damagedCarsContainer.textContent = damagedCars.length
    expiredCarsContainer.textContent = expiredCars.length
}

renderNumbers()