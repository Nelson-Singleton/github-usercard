import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardContainer = document.querySelector('.cards')

axios.get("https://api.github.com/users/nelson-singleton")
  .then(response => {
    const gitData = response.data
    console.log (gitData) //test
    
    gitData.forEach(item => {
      const finishedCard = cardMaker(item)
      
      cardContainer.appendChild(finishedCard)

        return cardContainer     
    });

    console.log(cardContainer)
    
    
    

  })
  .catch(err => {
    
    

  })


const cardContainer = document.querySelector('.cards')

axios.get("https://api.github.com/users/nelson-singleton")
.then(response => {
  
    const myData = response.data    
     
    
    const cardFeeder = cardMaker(myData)
  debugger

    cardContainer.appendChild
  debugger


     })
  .catch(error => {
    debugger
    
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(singleObj){
  
  //select objects
  const card = document.querySelector('.card')
  const img = document.querySelector('img')
  const cardInfo = document.querySelector('.card-info')
  const name = document.querySelector('.name')
  const userName = document.querySelector('.username')
  const location = document.querySelector('p')
  const profile = document.querySelector('p')
  const followers = document.querySelector('p')
  const following = document.querySelector('p')
  const bio = document.querySelector('p')

  //add classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')
  
  //add text, attributes, etc
  img.src = singleObj.avatar_url
  name.textContent = singleObj.name
  userName.textContent = singleObj.login
  location.textContent = singleObj.location
  profile.href = singleObj.url
  followers.textContent = singleObj.followers
  following.textContent = singleObj.following
  bio.textContent = singleObj.bio

  //append objects to card and cardInfo
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  
  return card

}

function cardMaker(singleObj){
  
  //select objects
  
  const cardDiv = document.querySelector('.card')
  const cardDiv2 = document.querySelector('.card-info')
  const name = document.querySelector('.name')
  const userName = document.querySelector('.username')
  const img = document.querySelector('img')  
  const location = document.querySelector('p')
  const profile = document.querySelector('p')
  const followers = document.querySelector('p')
  const following = document.querySelector('p')
  const bio = document.querySelector('p')


  //add text, attributes, etc
  img.src = singleObj.avatar_url
  
  location.textContent = singleObj.location
  profile.href = singleObj.url
  followers.textContent = singleObj.followers
  following.textContent = singleObj.following
  bio.textContent = singleObj.bio
  debugger
  name.innerHTML = singleObj.name
  userName.textContent = singleObj.login

  debugger
  //append objects to card and cardInfo
  cardDiv.appendChild(img)  
  cardDiv.appendChild(cardDiv2) 
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
   
  console.log(card)
debugger

  
debugger
  
  
  debugger

  
  //add classes
  cardDiv.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  return card

}





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/