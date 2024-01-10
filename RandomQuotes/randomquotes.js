let quoteContainer = document.getElementById("quoteContainer")
let authorContainer = document.getElementById("authorContainer")
let button = document.getElementById('button')
button.addEventListener('click', function(e){
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
        const i = Math.floor(Math.random()* data.length)
        const quote = data[i].text;
        const author = data[i].author;
        const authorS = author.replace(new RegExp("type.fit" + "|" + ", type.fit"), "")
        quoteContainer.textContent = `"${quote}"`
        authorContainer.textContent = `- ${authorS}`
    })
})

