import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



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

const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'

];

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
const cardsection = document.querySelector('.cards');

function cardmaker(obj){
  //creates div
  const card = document.createElement('div');
  card.classList.add("card");

  const userimage = document.createElement('img');
  userimage.src = obj.avatar_url;
  card.append(userimage);
  
  const cardinfo = document.createElement('div');
  cardinfo.classList.add('card-info');
  card.append(cardinfo);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = obj.name
  cardinfo.append(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.innerHTML = obj.login
  cardinfo.append(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${obj.location}`;
  cardinfo.append(location);

  const webaddress = document.createElement('a')
  webaddress.href = obj.html_url;
  webaddress.textContent = obj.html_url;

  const profile = document.createElement('p');
  profile.textContent = `profile ${webaddress}`;
  cardinfo.append(profile);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${obj.followers}`;
  cardinfo.append(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${obj.following}`;
  cardinfo.append(following);

  const bio = document.createElement('p');
  bio.textContent = `bio: ${obj.bio}`;
  cardinfo.append(bio);
  
  return card;
}
axios.get('https://api.github.com/users/teranasoras')
.then(stuff => {
  console.log(cardsection.appendChild(cardmaker(stuff.data)));
})
.catch(err =>{
  console.log(err)
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
followersArray.forEach(function(item){
  axios.get(item)
  .then(stuff => {
  console.log(cardsection.appendChild(cardmaker(stuff.data)));
})
.catch(err =>{
  console.log(err)
})
})
