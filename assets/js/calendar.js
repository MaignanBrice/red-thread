/* CALENDAR SCRIPT */

let today = new Date

displayWeekdays();
displaySittingMorn();
displayLunch();
displaySittingAfter();
displayWorkhelp();



/* Events */

document.querySelector(".calendar--wrapper").addEventListener('click', (event) => {
    if(!event.target.classList.contains('sitting-morning')) return;
    event.target.classList.toggle('flip-top');
})


/* Template Display */

function displayWeekdays() {
    for (let i = 0; i < 5; i++) {
        document.querySelector('.calendar--wrapper').appendChild(createWeekdaysTemplate());
    }
}
function displaySittingMorn() {
    for (let i = 0; i < 5; i++) {
    document.querySelector('.calendar--wrapper').appendChild(createSittingMornTemplate());
    }
}
function displayLunch() {
    for (let i = 0; i < 5; i++) {
    document.querySelector('.calendar--wrapper').appendChild(createLunchTemplate());
    }
}
function displaySittingAfter() {
    for (let i = 0; i < 5; i++) {
    document.querySelector('.calendar--wrapper').appendChild(createSittingAfterTemplate());
    }
}
function displayWorkhelp() {
    for (let i = 0; i < 5; i++) {
    document.querySelector('.calendar--wrapper').appendChild(createWorkhelpTemplate());
    }
}





/* Template call */
function createWeekdaysTemplate() {
    const itemElement = document.importNode(document.querySelector('#weekdays').content, true);
    return itemElement;
};

function createSittingMornTemplate() {
    const itemElement = document.importNode(document.querySelector('#sitting-morning').content, true);
    return itemElement;
};

function createLunchTemplate() {
    const itemElement = document.importNode(document.querySelector('#lunch').content, true);
    return itemElement;
};

function createSittingAfterTemplate() {
    const itemElement = document.importNode(document.querySelector('#sitting-afternon').content, true);
    return itemElement;
};

function createWorkhelpTemplate() {
    const itemElement = document.importNode(document.querySelector('#work-help').content, true);
    return itemElement;
};
