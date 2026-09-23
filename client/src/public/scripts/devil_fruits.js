// The JS file that cranks out Devil Fruit details on @index.html and @fruit.html.

const gridContainer = document.querySelector(".grid")

const renderFruits = async () => {
    const response = await fetch('/devil_fruits')
    const data = await response.json()

    if (data) {
        data.map((fruit) => {
            const card = document.createElement("article")

            card.innerHTML = `
                <img src="${fruit.picture}" alt="${fruit.name}">
                <h2>${fruit.name}</h2>
                <a href="/devil_fruits/${fruit.id}" role="button">Read More</a>
            `

            gridContainer.appendChild(card)
        })
    }
    else {
        // Display that no devil fruit data is available.
        gridContainer.innerHTML = "<p>No devil fruit data available.</p>"
    }
}

const renderFruit = async () => {
    const requestedId = window.location.href.split('/').pop() // grabs the ID of the fruit in the URL
    const response = await fetch('/devil_fruits')
    const data = await response.json()

    const fruitBox = document.querySelector('.fruit-box')
    let fruit = data.find(fruit => fruit.id === requestedId)

    if(fruit) {
        const fruitName = document.getElementById('fruit-name')
        fruitName.textContent = fruit.name

        const fruitImage = document.getElementById('fruit-image')
        fruitImage.src = fruit.picture
        fruitImage.alt = fruit.name

        const fruitType = document.getElementById('fruit-type')
        fruitType.textContent = fruit.type

        const fruitUsers = document.getElementById('fruit-users')
        fruitUsers.textContent = `${fruit.users[0]} (past: ${fruit.users.slice(1).join(', ') || 'none'})`

        const fruitDescription = document.getElementById('fruit-description')
        fruitDescription.textContent = fruit.description
    }
    else {
        const noDataFound = document.createElement('h1')
        noDataFound.textContent = 'No Fruit Data Available 😱'
        fruitBox.appendChild(noDataFound)
    }
}

const requestedURL = window.location.pathname

if(requestedURL === '/') {
    renderFruits()
}
else if(requestedURL.startsWith('/devil_fruits')) {
    // TODO: this also matches bare '/devil_fruits' with no id- FIX LATER!
    renderFruit()
}
else {
    window.location.href = '../404.html'
}