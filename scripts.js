const app= document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png' 

const container = document.createElement('div')
container.setAttribute('class','container')

app.appendChild(logo)
app.appendChild(container)

//Replace ;/data.json eith your JSON feed
fetch('https://ghibliapi.herokuapp.com/films/')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        //work with JSON daa here
        data.forEach((movie)=>{
            // Create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class','card')
            
            //Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            const p = document.createElement('p')
            movie.description = movie.description.substring(0,300) //Limit to 300 chars 
            p.textContent = `${movie.description}...` // End whith an ellipses

            //Append the cardds to the container Element
            container.appendChild(card)
            
            // Each card will contain an h1 and a p
            card.appendChild(h1)
            card.appendChild(p)            

        })
        //console.log(data)
    })
    .catch((err) => {
        // Do something for an erro here
        console.log('error')
    })