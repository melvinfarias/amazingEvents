const events= data.events
console.log(events)
  

  let allEvents = []
  function printCards(){
    for (let one of events){
        let card = `
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
                        <a href="./details.html" class="btn btn-success">Details</a>
                    </div>
                </div>
            </div>
        `
        allEvents.push(card)
        console.log(allEvents)
    }
    let cardEvents = document.getElementById('container-cards')
    cardEvents.innerHTML= allEvents.join('')
}
printCards()








/*   let upcomingEvent = []
for (let event of events) {
    let upcoming = 'The Upcoming Event is: ' + event.nombre
    console.log(upcoming)
    upcomingEvent.push(upcoming)
}
console.log(upcomingEvent);

let cardsEvents = []
for (let event of events) {
    let card = `
        <div class="card col-md-2" style="width: 16rem; height: 20rem;">
                <img src="./assets/img/event.foto" class="card-img-top" style="height: 8rem;" alt="event.nombre">
                <div class="card-body-text">
                    <h5 class="card-title">events.nombre</h5>
                    <p class="card-text">Some quick example text and make up the bulk.</p>
                </div>
                <div class="card-body">
                    <div>
                        <p class="card-link">Price: 2.000$</p>
                    </div>
                    <div>
                        <a href="./details.html" class="btn btn-outline-success">Details</a>
                    </div>
                </div>
        </div>
    `
    console.log(card)
    cardsEvents.push(card)
}
console.log(cardsEvents) */