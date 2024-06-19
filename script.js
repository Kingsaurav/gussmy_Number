let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//console.log( sceretNumber);
document.querySelector('.check').addEventListener('click',function()
{
    const guess = Number(document.querySelector('.guess').value);
   // console.log(guess,typeof guess);

// when there is no input
if (!guess)
    {
      document.querySelector('.message').textContent=' ⛔️ No Number!';
    }
    // guess match and player wins
else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent=' 🎉 Correct Number!';
        document.querySelector('.number').textContent= secretNumber;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='20rem';
        // for highscore
        if (score > highscore)
            {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
            }

    }
    // guess is too high
else if(guess > secretNumber)
    {
        if (score > 1)
        {
            document.querySelector('.message').textContent=' 📈 Too high!';
            score--;
            document.querySelector('.score') .textContent=score;
        } 
        else{

            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;

        }
    }
    // when guess is too low
else if( guess < secretNumber)
    {
     if (score > 1)
       {
        document.querySelector('.message').textContent=' 📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
       }
       else{

        document.querySelector('.message').textContent='💥 You lost the game!';
        document.querySelector('.score').textContent=0;

    }
    }

});
// targeting the again button to restart game again
document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent="start guessing...";
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent="?";
    document.querySelector('body').style.backgroundColor='black';
     document.querySelector('.number').style.width='10rem';


});