const avaliableCarsContainer = document.getElementById("carsAvailable")
const carsOnTripContainer = document.getElementById("carsOnTripContainer")
const maintenanceContainer = document.getElementById("maintenanceContainer")
const carsExpiredContainer = document.getElementById("carsExpiredContainer")
const carModal = document.getElementById("carModal")
const modalTitle = document.getElementById("modalTitle")
const modalBody = document.getElementById("modalBody")
const closeModalBtn = document.getElementById("closeModalBtn")
const addNewCar = document.getElementById("addNewCar")

let whatsAppLink = localStorage.getItem("whatsAppLink") || null

let cars = JSON.parse(localStorage.getItem("cars"))
if (!cars) {
    cars = [
        { id: 1, status: "park", driver: null, destination: null, plateNumber: "9379 - س ع ن", type: "5000", branch: "قاهره" },
        { id: 2, status: "park", driver: null, destination: null, plateNumber: "7247 - و أ س", type: "5000", branch: "قاهره" },
        { id: 3, status: "park", driver: null, destination: null, plateNumber: "1636 - س أ ي", type: "5000", branch: "قاهره" },
        { id: 4, status: "park", driver: null, destination: null, plateNumber: "6186 - س أ ي", type: "5000", branch: "قاهره" },
        { id: 5, status: "park", driver: null, destination: null, plateNumber: "س ن ر- 9798", type: "جامبو", branch: "قاهره" },
        { id: 6, status: "park", driver: null, destination: null, plateNumber: "2686 - س ع م", type: "جامبو", branch: "قاهره" },
        { id: 7, status: "park", driver: null, destination: null, plateNumber: "1817 - س ع م", type: "جامبو", branch: "قاهره" },
        { id: 8, status: "park", driver: null, destination: null, plateNumber: "س ر ص-2723", type: "جامبو", branch: "قاهره" },
        { id: 9, status: "park", driver: null, destination: null, plateNumber: "1521 - س ع و", type: "جامبو", branch: "قاهره" },
        { id: 10, status: "park", driver: null, destination: null, plateNumber: "8262 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 11, status: "park", driver: null, destination: null, plateNumber: "8268 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 12, status: "park", driver: null, destination: null, plateNumber: "6162 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 13, status: "park", driver: null, destination: null, plateNumber: "6156 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 14, status: "park", driver: null, destination: null, plateNumber: "2686 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 15, status: "park", driver: null, destination: null, plateNumber: "2682 - س ع ه", type: "جامبو", branch: "قاهره" },
        { id: 16, status: "park", driver: null, destination: null, plateNumber: "س ع م -4393", type: "جامبو", branch: "قاهره" },
        { id: 17, status: "park", driver: null, destination: null, plateNumber: "7174 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 18, status: "park", driver: null, destination: null, plateNumber: "س ع ن-8676", type: "جامبو", branch: "قاهره" },
        { id: 19, status: "park", driver: null, destination: null, plateNumber: "6946 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 20, status: "park", driver: null, destination: null, plateNumber: "5272 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 21, status: "park", driver: null, destination: null, plateNumber: "5275 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 22, status: "park", driver: null, destination: null, plateNumber: "5265 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 23, status: "park", driver: null, destination: null, plateNumber: "1519 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 24, status: "park", driver: null, destination: null, plateNumber: "1518 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 25, status: "park", driver: null, destination: null, plateNumber: "1718 - س أ ي", type: "جامبو", branch: "قاهره" },
        { id: 26, status: "park", driver: null, destination: null, plateNumber: "2421 - س أ ن", type: "جامبو", branch: "قاهره" },
        { id: 27, status: "park", driver: null, destination: null, plateNumber: "4143 - س أ و", type: "جامبو", branch: "قاهره" },
        { id: 28, status: "park", driver: null, destination: null, plateNumber: "9414 - س أ ه", type: "جامبو", branch: "قاهره" },
        { id: 29, status: "park", driver: null, destination: null, plateNumber: "5774 - س ل ج", type: "جامبو", branch: "قاهره" },
        { id: 30, status: "park", driver: null, destination: null, plateNumber: "7446 - س ل ج", type: "مكشوفه", branch: "قاهره" },
        { id: 31, status: "park", driver: null, destination: null, plateNumber: "9795 - س د ه", type: "جامبو", branch: "قاهره" },
        { id: 32, status: "park", driver: null, destination: null, plateNumber: "5994 - س ل ج", type: "جامبو", branch: "قاهره" },
        { id: 33, status: "park", driver: null, destination: null, plateNumber: "9379 - س ل ص", type: "جامبو", branch: "قاهره" },
        { id: 34, status: "park", driver: null, destination: null, plateNumber: "6424 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 35, status: "park", driver: null, destination: null, plateNumber: "8272 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 36, status: "park", driver: null, destination: null, plateNumber: "7414 - س د ه", type: "جامبو", branch: "قاهره" },
        { id: 37, status: "park", driver: null, destination: null, plateNumber: "4243 - س و ر", type: "جامبو", branch: "قاهره" },
        { id: 38, status: "park", driver: null, destination: null, plateNumber: "3435 - س و ر", type: "جامبو", branch: "قاهره" },
        { id: 39, status: "park", driver: null, destination: null, plateNumber: "9585 - س ك ر", type: "جامبو", branch: "قاهره" },
        { id: 40, status: "park", driver: null, destination: null, plateNumber: "9419 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 41, status: "park", driver: null, destination: null, plateNumber: "6848 - س ه ج", type: "جامبو", branch: "قاهره" },
        { id: 42, status: "park", driver: null, destination: null, plateNumber: "3134 - س د ه", type: "جامبو", branch: "قاهره" },
        { id: 43, status: "park", driver: null, destination: null, plateNumber: "3345 - ر ن س", type: "جامبو", branch: "قاهره" },
        { id: 44, status: "park", driver: null, destination: null, plateNumber: "8184 - و د س", type: "جامبو", branch: "قاهره" },
        { id: 45, status: "park", driver: null, destination: null, plateNumber: "1575 - س ع ن", type: "جامبو", branch: "قاهره" },
        { id: 46, status: "park", driver: null, destination: null, plateNumber: "8128 - س د و", type: "جامبو", branch: "قاهره" },
        { id: 47, status: "park", driver: null, destination: null, plateNumber: "س ع ن -6961", type: "جامبو", branch: "قاهره" },
        { id: 48, status: "park", driver: null, destination: null, plateNumber: "س ع م -7479", type: "جامبو", branch: "قاهره" },
        { id: 49, status: "park", driver: null, destination: null, plateNumber: "1788 - س ق ر", type: "جامبو", branch: "قاهره" },
        { id: 50, status: "park", driver: null, destination: null, plateNumber: "س ن ر - 9976", type: "جامبو", branch: "قاهره" },
        { id: 51, status: "park", driver: null, destination: null, plateNumber: "س ع م -7484", type: "جامبو", branch: "قاهره" },
        { id: 52, status: "park", driver: null, destination: null, plateNumber: "س ع ن -4354", type: "جامبو", branch: "قاهره" },
        { id: 53, status: "park", driver: null, destination: null, plateNumber: "س ن ر -7571", type: "جامبو", branch: "قاهره" },
        { id: 54, status: "park", driver: null, destination: null, plateNumber: "س ع ن-1217", type: "جامبو", branch: "قاهره" },
        { id: 55, status: "park", driver: null, destination: null, plateNumber: "س ع م -9492", type: "جامبو", branch: "قاهره" },
        { id: 56, status: "park", driver: null, destination: null, plateNumber: "6883- س و ج", type: "جامبو", branch: "قاهره" },
        { id: 57, status: "park", driver: null, destination: null, plateNumber: "1419 - س د ه", type: "دبابه", branch: "قاهره" },
        { id: 58, status: "park", driver: null, destination: null, plateNumber: "7176 - س ع ن", type: "دبابه", branch: "قاهره" },
        { id: 59, status: "park", driver: null, destination: null, plateNumber: "8678 - س ع ن", type: "دبابه", branch: "قاهره" },
        { id: 60, status: "park", driver: null, destination: null, plateNumber: "7175 - س ع ن", type: "دبابه", branch: "قاهره" },
        { id: 61, status: "park", driver: null, destination: null, plateNumber: "9289 - ص أ س", type: "دبابه", branch: "اسكندريه" },
        { id: 62, status: "park", driver: null, destination: null, plateNumber: "س أ ي- 8198", type: "دبابه", branch: "قاهره" },
        { id: 63, status: "park", driver: null, destination: null, plateNumber: "4743 - س أ و", type: "دبابه", branch: "قاهره" },
        { id: 64, status: "park", driver: null, destination: null, plateNumber: "س أ و- 4145", type: "دبابه", branch: "قاهره" },
        { id: 65, status: "park", driver: null, destination: null, plateNumber: "5635 - أ ص ي", type: "دبابه", branch: "قاهره" },
        { id: 66, status: "park", driver: null, destination: null, plateNumber: "4214 - س أ و", type: "دبابه", branch: "قاهره" },
        { id: 67, status: "park", driver: null, destination: null, plateNumber: "7133 - س م ج", type: "دبابه", branch: "قاهره" },
        { id: 68, status: "park", driver: null, destination: null, plateNumber: "8968 - س أ ه", type: "دبابه", branch: "قاهره" },
        { id: 69, status: "park", driver: null, destination: null, plateNumber: "4642 - س أ ه", type: "دبابه", branch: "مطروح" },
        { id: 70, status: "park", driver: null, destination: null, plateNumber: "4284 - س ع ه", type: "دبابه", branch: "قاهره" },
        { id: 71, status: "park", driver: null, destination: null, plateNumber: "8481 - س ق ج", type: "دبابه", branch: "اسكندريه" },
        { id: 72, status: "park", driver: null, destination: null, plateNumber: "4483 - س م ر", type: "دبابه", branch: "اسكندريه" },
        { id: 73, status: "park", driver: null, destination: null, plateNumber: "9767 - س د ن", type: "دبابه", branch: "قاهره" },
        { id: 74, status: "park", driver: null, destination: null, plateNumber: "4249 - س م ج", type: "دبابه", branch: "اسكندريه" },
        { id: 75, status: "park", driver: null, destination: null, plateNumber: "7511 - س م ر", type: "دبابه", branch: "اسكندريه" },
        { id: 76, status: "park", driver: null, destination: null, plateNumber: "7574 - س ك ر", type: "دبابه", branch: "اسكندريه" },
        { id: 77, status: "park", driver: null, destination: null, plateNumber: "2388 - ر ق س", type: "دبابه", branch: "اسكندريه" },
        { id: 78, status: "park", driver: null, destination: null, plateNumber: "7448 - س م ج", type: "دبابه", branch: "اسكندريه" },
        { id: 79, status: "park", driver: null, destination: null, plateNumber: "2757 - س ع و", type: "دبابه", branch: "قاهره" },
        { id: 80, status: "park", driver: null, destination: null, plateNumber: "س ع م -6463", type: "دبابه", branch: "اسكندريه" },
        { id: 81, status: "park", driver: null, destination: null, plateNumber: "س د ن -9343", type: "دبابه", branch: "اسكندريه" },
        { id: 82, status: "park", driver: null, destination: null, plateNumber: "س أ ن - 7212", type: "دبابه", branch: "اسكندريه" },
        { id: 83, status: "park", driver: null, destination: null, plateNumber: "س ن ف - 3523", type: "فان", branch: "قاهره" },
        { id: 84, status: "park", driver: null, destination: null, plateNumber: "س ن ف -3515", type: "فان", branch: "قاهره" }
    ];
    localStorage.setItem("cars", JSON.stringify(cars))
}

let avaliableCars = cars.filter(c => c.status === "park")
let onTripCars = cars.filter(c => c.status === "onTrip")
let damagedCars = cars.filter(c => c.status === "damaged")
let expiredCars = cars.filter(c => c.status === "expired")

function rendeArrays() {
    avaliableCars = cars.filter(c => c.status === "park")
    onTripCars = cars.filter(c => c.status === "onTrip")
    damagedCars = cars.filter(c => c.status === "damaged")
    expiredCars = cars.filter(c => c.status === "expired")
}

function renderAvaliableCars() {
    let structure = ``
    avaliableCars.forEach(car => {
        structure += `
            <div
                class="bg-white px-4 sm:px-5 py-4 rounded-2xl flex items-center justify-between gap-3 shadow-sm shadow-slate-200/60 card-hover">
                <div class="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                        class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 text-xl sm:text-2xl shrink-0">
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span dir="ltr" class="font-bold sm:font-black text-base sm:text-lg tracking-wide">${car.plateNumber}</span>
                            <span
                                class="text-[11px] self-start sm:self-center font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">متاحة</span>
                        </div>
                        <p class="text-slate-400 text-xs sm:text-sm font-semibold mt-0.5 truncate">${car.type}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button title="بدء رحلة جديدة"
                        data-id="${car.id}"
                        data-action="startTrip"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center cursor-pointer rounded-full bg-teal-50 text-teal-500 hover:bg-teal-100 transition">
                        <span class="material-symbols-outlined sm:!text-3xl">search_hands_free</span>
                    </button>
                    <button title="تفاصيل السيارة"
                        data-id="${car.id}"
                        data-action="info"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center text-cyan-600 cursor-pointer rounded-full bg-cyan-50 hover:bg-cyan-100 transition">
                        <i class="fa-solid fa-info text-lg sm:text-xl"></i>
                    </button>
                </div>
            </div>
        `
    });
    if (structure) {
        avaliableCarsContainer.innerHTML = structure
    } else {
        avaliableCarsContainer.innerHTML = `
            <div
                class="bg-white rounded-2xl px-6 py-10 text-center shadow-sm shadow-slate-200/60 border border-dashed border-slate-200">
                <div
                    class="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-2xl mb-3">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <p class="font-bold text-slate-600">لا توجد سيارات في مشواير حاليًا</p>
                <p class="text-slate-400 text-sm mt-1">هيظهر هنا أي سيارة يتم تسجيلها في اي مشوار</p>
            </div>
        `
    }
}

function renderOnTripCars() {
    let structure = ``
    onTripCars.forEach(car => {
        structure += `
            <div
                class="bg-white px-4 sm:px-5 py-4 rounded-2xl flex items-center justify-between gap-3 shadow-sm shadow-slate-200/60 card-hover">
                <div class="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                        class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 text-xl sm:text-2xl shrink-0 relative">
                        <i class="fa-solid fa-truck drift"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span dir="ltr" class="font-bold sm:font-black text-base sm:text-lg tracking-wide">${car.plateNumber}</span>
                            <span
                                class="text-[11px] self-start sm:self-center font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">في
                                مشوار</span>
                        </div>
                        <p class="text-slate-400 text-xs sm:text-sm font-semibold mt-0.5 truncate"> ${car.type} · إلى: ${car.destination}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button title="ابلاغ عن عطل او حادث"
                        data-id="${car.id}"
                        data-action="reportIsuue"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center text-blue-500 cursor-pointer rounded-full bg-blue-50 hover:bg-blue-100 transition">
                        <i class="fa-solid fa-screwdriver-wrench text-lg sm:text-xl"></i>
                    </button>
                    <button title="إنهاء المشوار"
                        data-id="${car.id}"
                        data-action="endTrip"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center cursor-pointer rounded-full bg-rose-50 hover:bg-rose-100 transition">
                        <i class="fa-regular fa-hand text-rose-500 text-lg sm:text-xl"></i>
                    </button>
                    <button title="تفاصيل السيارة"
                        data-id="${car.id}"
                        data-action="info"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center text-cyan-600 cursor-pointer rounded-full bg-cyan-50 hover:bg-cyan-100 transition">
                        <i class="fa-solid fa-info text-lg sm:text-xl"></i>
                    </button>
                </div>
            </div>
        `
    })
    if (structure) {
        carsOnTripContainer.innerHTML = structure
    } else {
        carsOnTripContainer.innerHTML = `
            <div
                class="bg-white rounded-2xl px-6 py-10 text-center shadow-sm shadow-slate-200/60 border border-dashed border-slate-200">
                <div
                    class="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-3">
                    <i class="fa-solid fa-route"></i>
                </div>
                <p class="font-bold text-slate-600">لا توجد سيارات في مشواير حاليًا</p>
                <p class="text-slate-400 text-sm mt-1">هيظهر هنا أي سيارة يتم تسجيلها في اي مشوار</p>
            </div>
        `
    }
}

function renderDamagedCars() {
    let structure = ``
    damagedCars.forEach(car => {
        structure += `
            <div
                class="bg-white px-4 sm:px-5 py-4 rounded-2xl flex items-center justify-between gap-3 shadow-sm shadow-slate-200/60 card-hover">
                <div class="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                        class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 text-xl sm:text-2xl shrink-0 relative">
                        <i class="fa-solid fa-truck "></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span dir="ltr" class="font-bold sm:font-black text-base sm:text-lg tracking-wide">${car.plateNumber}</span>
                            <span
                                class="text-[11px] font-bold self-start sm:self-center bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">في
                                الصيانة</span>
                        </div>
                        <p class="text-slate-400 text-xs sm:text-sm font-semibold mt-0.5 truncate">${car.type} · منذ: ${formatDate(car.issueDate)}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button title="اعادة السيارة للعمل"
                        data-id="${car.id}"
                        data-action="returnToService"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center cursor-pointer rounded-full bg-amber-50 text-amber-500 hover:bg-amber-100 transition">
                        <i class="fa-solid fa-toggle-on text-lg sm:text-2xl"></i>
                    </button>
                    <button title="تفاصيل السيارة"
                        data-id="${car.id}"
                        data-action="info"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center text-cyan-600 cursor-pointer rounded-full bg-cyan-50 hover:bg-cyan-100 transition">
                        <i class="fa-solid fa-info text-lg sm:text-xl"></i>
                    </button>
                </div>
            </div>
        `
    })
    if (structure) {
        maintenanceContainer.innerHTML = structure
    } else {
        maintenanceContainer.innerHTML = `
            <div
                class="bg-white rounded-2xl px-6 py-10 text-center shadow-sm shadow-slate-200/60 border border-dashed border-slate-200">
                <div
                    class="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl mb-3">
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <p class="font-bold text-slate-600">لا توجد سيارات في الصيانة حاليًا</p>
                <p class="text-slate-400 text-sm mt-1">هيظهر هنا أي سيارة يتم تسجيلها في الصيانة</p>
            </div>
        `
    }
}

function renderExpiredCars() {
    let structure = ``
    expiredCars.forEach(car => {
        structure += `
            <div
                class="bg-white px-4 sm:px-5 py-4 rounded-2xl flex items-center justify-between gap-3 shadow-sm shadow-slate-200/60 card-hover">
                <div class="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                        class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 text-xl sm:text-2xl shrink-0 relative">
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span dir="ltr" class="font-bold sm:font-black text-base sm:text-lg tracking-wide">${car.plateNumber}</span>
                            <span
                                class="text-[11px] self-start sm:self-center font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full">منتهية
                                الرخصة</span>
                        </div>
                        <p class="text-slate-400 text-xs sm:text-sm font-semibold mt-0.5 truncate">${car.type} · انتهت في: 2026/07/15</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button title="تجديد الرخصة"
                        data-id="${car.id}"
                        data-action="renewLicense"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center text-rose-500 cursor-pointer rounded-full bg-rose-50 hover:bg-rose-100 transition">
                        <i class="fa-solid fa-rotate text-lg sm:text-xl"></i>
                    </button>
                    <button title="تفاصيل السيارة"
                        data-id="${car.id}"
                        data-action="info"
                        class="w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center text-cyan-600 cursor-pointer rounded-full bg-cyan-50 hover:bg-cyan-100 transition">
                        <i class="fa-solid fa-info text-lg sm:text-xl"></i>
                    </button>
                </div>
            </div>
        `
    })
    if (structure) {
        carsExpiredContainer.innerHTML = structure
    } else {
        carsExpiredContainer.innerHTML = `
            <div
                class="bg-white rounded-2xl px-6 py-10 text-center shadow-sm shadow-slate-200/60 border border-dashed border-slate-200">
                <div
                    class="w-14 h-14 mx-auto rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl mb-3">
                    <i class="fa-solid fa-file-circle-xmark"></i>
                </div>
                <p class="font-bold text-slate-600">لا توجد سيارات  منتهية الرخصة حاليًا</p>
                <p class="text-slate-400 text-sm mt-1">هيظهر هنا أي سيارة يتم انتهاء رخصتها</p>
            </div>
        `
    }
}

function renderAllContainers() {
    rendeArrays()

    renderAvaliableCars()
    renderOnTripCars()
    renderDamagedCars()
    renderExpiredCars()

    renderNumbers()
}

let totalCarsContainer = document.getElementById("totalCarsContainer")
let availableCarsContainer = document.getElementById("availableCarsContainer")
let onTripCarsContainer = document.getElementById("onTripCarsContainer")
let damagedCarsContainer = document.getElementById("damagedCarsContainer")
let expiredCarsContainer = document.getElementById("expiredCarsContainer")

let avaliableSpanNum = document.getElementById("avaliableSpanNum")
let onTripSpan = document.getElementById("onTripSpan")
let damagedSpan = document.getElementById("damagedSpan")
let expiredSpan = document.getElementById("expiredSpan")

function renderNumbers() {
    totalCarsContainer.textContent = cars.length
    availableCarsContainer.textContent = avaliableCars.length
    onTripCarsContainer.textContent = onTripCars.length
    damagedCarsContainer.textContent = damagedCars.length
    expiredCarsContainer.textContent = expiredCars.length

    avaliableSpanNum.textContent = avaliableCars.length
    onTripSpan.textContent = onTripCars.length
    damagedSpan.textContent = damagedCars.length
    expiredSpan.textContent = expiredCars.length
}

renderAllContainers()

window.addEventListener("click", function (e) {
    const button = e.target.closest("button")

    if (!button) return

    const action = button.dataset.action
    const carId = Number(button.dataset.id)
    let car = cars.find(car => car.id === carId)
    switch (action) {
        case "info":
            carModal.classList.remove('hidden')
            carModal.classList.add('flex')
            modalTitle.textContent = "بيانات السيارة"
            modalBody.innerHTML = `
                <div class="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-4">
                    <div>
                        <p class="text-xs text-gray-400 mb-1">رقم اللوحة</p>
                        <p dir="ltr" class="font-black text-xl text-gray-800">${car.plateNumber}</p>
                    </div>
                    ${car.status === "park" ? `
                        <span
                            class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700">
                            <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                            متاحة
                        </span>`
                    : ""}
                    ${car.status === "onTrip" ? `
                        <span
                            class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            في مشوار
                        </span>`
                    : ""}
                    ${car.status === "damaged" ? `
                        <span
                            class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            معطلة
                        </span>`
                    : ""}
                </div>

                <div class="grid grid-cols-2 gap-3">

                    <div class="flex flex-col gap-1">
                        <span class="text-xs text-gray-400">الموديل</span>
                        <span class="text-sm font-semibold text-gray-700">${car.type}</span>
                    </div>

                    <div class="flex flex-col gap-1">
                        <span class="text-xs text-gray-400">الفرع</span>
                        <span class="text-sm font-semibold text-gray-700">${car.branch}</span>
                    </div>

                    ${car.destination ? `
                                <div class="flex flex-col gap-1">
                                    <span class="text-xs text-gray-400">الوجهة</span>
                                    <span class="text-sm font-semibold text-gray-700">${car.destination}</span>
                                </div>
                            ` : ""}

                    ${car.driver ? `
                                <div class="flex flex-col gap-1">
                                    <span class="text-xs text-gray-400">السائق</span>
                                    <span class="text-sm font-semibold text-gray-700">${car.driver}</span>
                                </div>
                            ` : ""}

                    ${car.status === "damaged" ? `
                                <div class="flex flex-col gap-1">
                                    <span class="text-xs text-gray-400">نوع المشكلة</span>
                                    <span class="text-sm font-semibold text-gray-700">${car.issueType}</span>
                                </div>
                            ` : ""}

                    ${car.status === "damaged" ? `
                                <div class="flex flex-col gap-1">
                                    <span class="text-xs text-gray-400">معطلة منذ</span>
                                    <span class="text-sm font-semibold text-gray-700">${formatDate(car.issueDate)}</span>
                                </div>
                            ` : ""}

                    ${car.status === "damaged" ? `
                                <div class="flex col-span-2 flex-col gap-1">
                                    <span class="text-xs text-gray-400">وصف المشكلة</span>
                                    <span class="text-sm font-semibold text-gray-700">${car.isuueDesc}</span>
                                </div>
                            ` : ""}
            `
            break

        case "startTrip":
            carModal.classList.remove('hidden')
            carModal.classList.add('flex')
            modalTitle.textContent = "بدء رحلة جديدة"
            modalBody.innerHTML = `
                <div class="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-4">
                    <div>
                        <p class="text-xs text-gray-400 mb-1">رقم اللوحة</p>
                        <p dir="ltr" class="font-black text-xl text-gray-800">${car.plateNumber}</p>
                    </div>
                    <span
                        class="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700">
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                        متاحة
                    </span>
                </div>

                <div class="grid grid-cols-2 gap-3">

                    <div class="flex flex-col gap-1">
                        <span class="text-xs text-gray-400">الموديل</span>
                        <span class="text-sm font-semibold text-gray-700">${car.type}</span>
                    </div>

                    <div class="flex flex-col gap-1">
                        <span class="text-xs text-gray-400">الفرع</span>
                        <span class="text-sm font-semibold text-gray-700">${car.branch}</span>
                    </div>

                </div>
                <form data-action='submitTrip' data-id="${car.id}" class="w-full flex flex-col gap-3">
                        <input name="destination" type="text" required class="border w-full border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500" placeholder="المكان">
                        <input name="driver" type="text" required class="border w-full border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500" placeholder="السائق">
                        <button type="submit" class="bg-cyan-600 cursor-pointer hover:bg-cyan-700 text-white font-bold py-3 rounded-xl transition">ارسال الرحلة</button>
                </form>
            `
            break

        case "endTrip":
            Swal.fire({
                title: "هل أنت متأكد من انهاء تلك الرحلة",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "نعم",
                cancelButtonText: "لا"
            }).then((result) => {
                if (result.isConfirmed) {
                    car.driver = null
                    car.destination = null
                    car.status = "park"
                    localStorage.setItem("cars", JSON.stringify(cars))
                    renderAllContainers()
                    Swal.fire({
                        title: "تم ركن السيارة",
                        icon: "success"
                    })
                };
            });
            break

        case "reportIsuue":
            modalTitle.textContent = "الإبلاغ عن عطل / حادث"
            carModal.classList.remove("hidden")
            carModal.classList.add("flex")
            modalBody.innerHTML = `<form data-action='reportIssueForm' data-id="${car.id}" class="w-full flex flex-col gap-3">
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold text-gray-600">نوع البلاغ</label>
                                        <select name="issueType" required class="border border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500">
                                            <option value="عطل فني">عطل فني</option>
                                            <option value="حادث">حادث</option>
                                            <option value="أخرى">أخرى</option>
                                        </select>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold text-gray-600">تفاصيل البلاغ</label>
                                        <textarea required name="isuueDesc" rows="4" placeholder="اكتب وصف المشكلة هنا..." class="border border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500 resize-none"></textarea>
                                    </div>
                                    <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition">
                                        إرسال البلاغ
                                    </button>
                                </form>`
            break

        case "returnToService":
            Swal.fire({
                title: "هل تم اصلاح السيارة",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "نعم",
                cancelButtonText: "لا"
            }).then((result) => {
                if (result.isConfirmed) {
                    car.status = "park"
                    car.driver = null
                    car.destination = null
                    car.issueType = null
                    car.issueDate = null
                    car.isuueDesc = null
                    localStorage.setItem("cars", JSON.stringify(cars))
                    renderAllContainers()
                    Swal.fire({
                        title: "تم اعادة السيارة للعمل بنجاح",
                        icon: "success"
                    })
                };
            });
            break
    }
})

closeModalBtn.addEventListener("click", () => {
    carModal.classList.remove("flex")
    carModal.classList.add("hidden")
})

window.addEventListener("submit", function (e) {

    const form = e.target.closest("form[data-action='submitTrip']")

    if (!form) return

    e.preventDefault()

    let car = cars.find(car => car.id === +e.target.dataset.id)
    let destination = form.elements.destination.value.trim()
    let driver = form.elements.driver.value.trim()

    if (destination && driver) {
        car.status = 'onTrip'
        car.driver = driver
        car.destination = destination
        localStorage.setItem("cars", JSON.stringify(cars))
        renderAllContainers()
        carModal.classList.remove("flex")
        carModal.classList.add("hidden")
        Swal.fire({
            title: "تمت اضافة الرحلة",
            icon: "success"
        });
    }


})






window.addEventListener("submit", function (e) {

    const form = e.target.closest("form[data-action='reportIssueForm']")

    if (!form) return

    e.preventDefault()

    let car = cars.find(car => car.id === +e.target.dataset.id)
    let issueType = form.elements.issueType.value.trim()
    let isuueDesc = form.elements.isuueDesc.value.trim()

    if (issueType && isuueDesc) {
        car.status = 'damaged'
        car.issueType = issueType
        car.isuueDesc = isuueDesc
        car.issueDate = new Date()
        localStorage.setItem("cars", JSON.stringify(cars))
        renderAllContainers()
        carModal.classList.remove("flex")
        carModal.classList.add("hidden")
        Swal.fire({
            title: "تمت اضافة المشكلة",
            icon: "success"
        });
    }


})

window.addEventListener("submit", function (e) {

    const form = e.target.closest("form[data-action='addNewCarForm']")

    if (!form) return

    e.preventDefault()

    let carPlate = form.elements.carPlate.value.trim()
    let carType = form.elements.carType.value.trim()
    let carBranch = form.elements.carBranch.value.trim()

    if (carPlate && carType && carBranch) {
        cars.push({
            id: Date.now(),
            status: "park",
            driver: null,
            destination: null,
            plateNumber: carPlate,
            type: carType,
            branch: carBranch,
        })
        localStorage.setItem("cars", JSON.stringify(cars))
        renderAllContainers()
        carModal.classList.remove("flex")
        carModal.classList.add("hidden")
        Swal.fire({
            title: "تمت اضافة السيارة بنجاح",
            icon: "success"
        });
    }


})

function formatDate(date) {
    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }).format(new Date(date))
}

addNewCar.addEventListener("click", function () {
    carModal.classList.remove("hidden")
    carModal.classList.add("flex")
    modalTitle.textContent = "اضافة سيارة"
    modalBody.innerHTML = `
        <form data-action='addNewCarForm' class="w-full flex flex-col gap-3">
            <input name="carPlate" type="text" required class="border w-full border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500" placeholder="رقم اللوحة">
            <input name="carType" type="text" required class="border w-full border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500" placeholder="نوع السيارة">
            <input name="carBranch" type="text" required class="border w-full border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500" placeholder="الفرع">
            <button type="submit" class="bg-cyan-600 cursor-pointer hover:bg-cyan-700 text-white font-bold py-3 rounded-xl transition">إضافة السيارة</button>
        </form>
`
})

function renderSearchCars(searchValue) {
    const search = searchValue
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[-–—]/g, "");

    const filteredCars = cars.filter(car => {
        const plate = car.plateNumber
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[-–—]/g, "");

        return plate.includes(search);
    });

    avaliableCars = filteredCars.filter(car => car.status === "park");
    onTripCars = filteredCars.filter(car => car.status === "onTrip");
    damagedCars = filteredCars.filter(car => car.status === "damaged");
    expiredCars = filteredCars.filter(car => car.status === "expired");

    renderAvaliableCars();
    renderOnTripCars();
    renderDamagedCars();
    renderExpiredCars();
}

const searchInput = document.querySelector(
    'input[placeholder="ابحث برقم اللوحة..."]'
);

searchInput.addEventListener("input", function () {
    renderSearchCars(this.value);
});

document.querySelectorAll(".settingBtn").forEach(b => {
    b.addEventListener("click", () => {
        carModal.classList.add("flex")
        carModal.classList.remove("hidden")
        modalTitle.textContent = "الإعدادات"
        modalBody.innerHTML = `
            <form data-action='whatsGroupForm' class="w-full flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-600">رابط جروب الأعطال</label>
                    <input value="${whatsAppLink ? whatsAppLink : ''}" name="whatsInput" type="text" required class="whatsInput  border w-full border-gray-200 rounded-xl px-4 py-3 focus:outline-cyan-500" placeholder="الرابط">
            </div>
            <button type="submit" class="bg-cyan-600 cursor-pointer hover:bg-cyan-700 text-white font-bold py-3 rounded-xl transition">تأكيد التعديل</button>
        </form>
        `
    })
})

window.addEventListener("submit", function (e) {

    const form = e.target.closest("form[data-action='whatsGroupForm']")

    if (!form) return

    e.preventDefault()

    let whatsInput = form.elements.whatsInput.value.trim()

    if (whatsInput) {
        localStorage.setItem("whatsAppLink", whatsInput)
        carModal.classList.remove("flex")
        carModal.classList.add("hidden")
        Swal.fire({
            title: "تمت التعديل بنجاح",
            icon: "success"
        });
    }
})