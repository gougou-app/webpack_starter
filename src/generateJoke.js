import axios from 'axios';

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  const jokeBtn = document.getElementById('jokeBtn');
  jokeBtn.disabled = true;
  axios.get('https://icanhazdadjoke.com', config).then(res => {
    document.getElementById('joke').innerHTML = res.data.joke;
    jokeBtn.disabled = false;
  })
}

export default generateJoke;