
const score=JSON.parse(localStorage.getItem('score'))|| {wins:0,losses:0,tie:0};
/*we get the score from the local storage cause, we dont want to loss the  
previous scores we obtained. so we are storing it in local storage.

local storage onlu supports string

get the item from the local storage(in string format) so we parse to normal form*/

function playGame(userinput)
{
    let result='';
    const computerValue=pickComputerValue();
    if(userinput==='Rock')
    {
        if(computerValue==='Rock')
        result='Tie!'
        else if(computerValue==='Paper')
        result='u lose!'
        else
        result='U win!'
    }
    else if(userinput==='Paper')
    {
        if(computerValue==='Rock')
        result='U win!'
        else if(computerValue==='Paper')
        result='Tie!'
        else
        result='U lose!'
    }
    else
    {
        if(computerValue==='Scissors')
        result='Tie!'
        else if(computerValue==='Paper')
        result='U win!'
        else
        result='U lose!'
    }

    if(result==='U win!')
    score.wins++;
    else if(result==='U lose!')
    score.losses++;
    else
    score.tie++;

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML=result;

    document.querySelector('.js-moves').innerHTML=`You <img src="${userinput}-emoji.png" class="move-icon"> <img src="${computerValue}-emoji.png" class="move-icon">Computer`;

}

function updateScoreElement()
{
    document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Tie:${score.tie}`;
}

function pickComputerValue()
{
    const randNum=Math.random();
    let computerValue='';
    if(randNum>=0 && randNum<1/3)
    computerValue='Rock';

    else if(randNum>=1/3 && randNum<2/3)
    computerValue='Paper';

    else
    computerValue='Scissors';

    return computerValue;
}

document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Tie:${score.tie}`;

