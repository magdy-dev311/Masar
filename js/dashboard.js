const header = document.getElementById("header")
const time = new Date()
if (time.getHours() < 12) {
    header.innerHTML = `صباح الخير يا <sapn class="text-cyan-600">وليد</sapn>`
} else {
    header.innerHTML = `مساء الخير يا <sapn class="text-cyan-600">وليد</sapn>`
}