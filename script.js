const root = document.getElementById('root');

// Getting the cookie
let userInfo = document.cookie;

let info = ['Username','Score','Level'];

let Username,Score,Level,range;

//if there is not an existing cookie
const newUser = () => {
   Username = prompt('Enter a Username');
  while(!Username) {
    Username = prompt(`Enter a Username, it doesn't kill`);}
  Level = 1;
  Score = 0;
document.cookie = `Username=${Username};SameSite=None; Secure`
document.cookie = `Level=${Level};SameSite=None; Secure`
document.cookie = `Score=${Score}; SameSite=None; Secure`
}

// If cookie exists, import it and save the info(username,level and score)
const existingUser = () => {
  userInfo = userInfo.replace(/Username=|Level=|Score=/g,'').split(';');

  [Username,Level,Score] = userInfo

  Score = Number(Score)
  Level = Number(Level)
  // Username----Level---Score
  
}

let checkExisitingUser = info.every((infoItem) => userInfo.includes(infoItem))


if(!checkExisitingUser) {
  
  newUser();
} else {

  existingUser()
}

// Setting the range
 range = Level + 1

const game = (username,level,range) => {
  let random = Math.floor(Math.random()*range)+1

  let userGuess = Number(prompt(`Guess the number between 1 and ${range}`));

  
while(userGuess !== random) {
  if(userGuess > range) {
    alert(`${username}, Guess the number between 1 and ${range}, you're still in level ${level}`);
  }
  userGuess = Number(prompt(`Try again
Enter a number between 1 and ${range}`));
}
alert(`Correct!!! 
Good one ${username}, you shall now advance to level ${level+1}`);

Level++
document.cookie = `Level=${Level};SameSite=None; Secure`
Score++
document.cookie = `Score=${Score};SameSite=None; Secure`
  
root.innerHTML = `Username: ${username} <br> 
Level:${Level} <br>
Score:${Score}`
}

game(Username,Level,range)
