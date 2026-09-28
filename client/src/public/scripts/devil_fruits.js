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
                <a href="/fruits/${fruit.id}" role="button">Read More</a>
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
    const response = await fetch(`/devil_fruits/${requestedId}`)
    const data = await response.json()

    const fruitBox = document.querySelector('.fruit-box')

    if(data && !data.error) {
        const fruitName = document.getElementById('fruit-name')
        fruitName.textContent = data.name

        const fruitImage = document.getElementById('fruit-image')
        fruitImage.src = data.picture
        fruitImage.alt = data.name

        const fruitType = document.getElementById('fruit-type')
        fruitType.textContent = data.type

        const fruitUsers = document.getElementById('fruit-users')
        fruitUsers.textContent = `${data.users[0]} (past: ${data.users.slice(1).join(', ') || 'none'})`

        const fruitDescription = document.getElementById('fruit-description')
        fruitDescription.textContent = data.description
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
else if(requestedURL.startsWith('/fruits')) {
    // TODO: this also matches bare '/devil_fruits' with no id- FIX LATER!
    renderFruit()
}
else {
    window.location.href = '../404.html'
}