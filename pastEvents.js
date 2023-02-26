const events = data.events
console.log(events)

let currentDate = data.currentDate;
console.log(currentDate);

let pastEvents= [];
function printPastEvents() {
    for (let one of events) {
        if (one.date < currentDate) {
            let cardPastEvents = `
            <div class="card col-md-2" style="width: 16rem; height: 22rem;">
                <img src="${one.image} " class="card-img-top" style="height: 8rem;" alt="${one.name}">
                <div class="card-body-text">
                    <h5 class="card-title">${one.name}</h5>
                    <p class="card-text">${one.description}</p>
                </div>
                <div class="card-body">
                    <div>
                        <p class="card-link">Price:${one.price} </p>
                    </div>
                    <div>
                        <a href="./details.html" class="btn btn-outline-success">Details</a>
                    </div>
                </div>
            </div>
        `
        pastEvents.push(cardPastEvents)
            console.log(pastEvents)
        }
    }
    let cardPastEvents= document.getElementById('container-pastEvents')
    cardPastEvents.innerHTML = pastEvents
}
printPastEvents()