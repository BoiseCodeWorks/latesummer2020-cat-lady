let cat = {
    name: "Mr. Snibbley",
    petCount: 0,
    moods: [
        {
            img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9",
            status: "Happy"
        },
        {
            img: "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs=",
            status: "Irritated"
        },
        {
            img: "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6",
            status: "Bitey"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS",
            status: "Blood Thirsty"
        }
    ]
}

function petCat() {
    cat.petCount++
    // if we wanted to change the mood based on number of times petted
    // cat.moodIndex
    // if (cat.petCount < 10) {
    //     cat.moodIndex = 0
    // }
    drawCat()
    // console.log(cat.petCount)
}

// What does this do?
// randomly change the cat mood every 2 seconds for 10 seconds
// we need to call drawCatMood every 2 seconds which handles randomly drawing a new mood
function giveCatnip() {
    // let handler = function () {
    //     console.log("Interval ran, you better go catch it")
    // }

    let seconds = 2

    let interval = setInterval(drawCatMood, 1000 * seconds)
    console.log(interval)
    let clearIntervalHandler = function () {
        clearInterval(interval)
    }

    setTimeout(clearIntervalHandler, 10000)
}

//WHATS THIS DO?
// randomly select an index and return that index
// function randomizeCatMoodIndex() {
//     return Math.floor(Math.random() * cat.moods.length)
// }

//WHATS THIS DO?
// randomly select an index and return the mood at that index
function getRandomCatMood() {
    console.log("this ran")
    let moodIndex = Math.floor(Math.random() * cat.moods.length)
    let mood = cat.moods[moodIndex]
    return mood
}

function drawCatMood() {
    let catStatusElem = document.getElementById("cat-status")
    let catImageElem = document.getElementById("cat-image")
    // catStatusElem.innerText = cat.moods[randomizeCatMoodIndex()].status

    let catMood = getRandomCatMood()
    catStatusElem.innerText = catMood.status
    // @ts-ignore we know that we have a src property because we know this is an image element
    catImageElem.src = catMood.img
}

function drawCat() {
    let catPetCountElem = document.getElementById("cat-pet-count")
    let catNameElem = document.getElementById("cat-name")

    // catPetCountElem.innerHTML = `<span>${cat.petCount}</span>`
    catPetCountElem.innerText = `${cat.petCount}`
    catNameElem.innerText = cat.name
    drawCatMood()
}

drawCat()