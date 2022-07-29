const words = ['instagram', 'facebook', 'twitter', 'kakaotalk', 'line'];
let selectWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = [];
let wrongLetters = [];
let life=6;
let correctNum=0;

const usedLettersBox=document.querySelector(".UsedWordBox");
const ansLettersBox=document.querySelector(".AnsWordBox");
const lifeBox=document.querySelector(".LifeBox");


function SelectWord()
{
    let randIndex = Math.floor(Math.random() * words.length);
    selectWord=words[randIndex];
}

function CheckLetter(e)
{
    if(selectWord.includes(e.key))
    {
        if(correctLetters.includes(e.key))
        {
            alert('DUPLICATED!');
        }
        else
        {
            const temp=[];
            correctLetters.push(e.key);
            correctNum=0;
            for(i=0;i<selectWord.length;i++)
            {
                if(correctLetters.includes(selectWord[i]))
                {
                    correctNum=correctNum+1;
                    temp.push(selectWord[i]);
                }
                else temp.push('_');
            }
            ansLettersBox.innerHTML=temp.toString();
            if(correctNum == selectWord.length)
            {
                alert('WIN!!');
                Restart();
            }
        }

    }
    else
    {
        if(wrongLetters.includes(e.key))
        {
            alert('DUPLICATED!')
        }
        else
        {
            wrongLetters.push(e.key);
            life=life-1;
            lifeBox.innerHTML="life: "+life;
            usedLettersBox.innerHTML=wrongLetters.toString();
            DrawHangman();
            if(life<=0)
            {
                alert('FAIL :(');
                Restart();
            }
        }
    }
}

function Restart()
{
    let temp=[];
    correctLetters=[];
    wrongLetters=[];
    SelectWord();
    life=6;
    correctNum=0;
    for(i=0;i<selectWord.length;i++)
    {
        if(correctLetters.includes(selectWord[i]))
        {
            correctNum=correctNum+1;
            temp.push(selectWord[i]);
        }
        else temp.push('_');
    }
    DrawHangman();
    lifeBox.innerHTML="life: "+life;
    usedLettersBox.innerHTML=wrongLetters.toString();
    ansLettersBox.innerHTML=temp.toString();
}

function DrawHangman()
{
    if(life<=5)
    {
        document.getElementsByClassName("life5")[0].style.display="block";
    }
    if(life<=4)
    {
        document.getElementsByClassName("life4")[0].style.display="block";
    }
    if(life<=3)
    {
        document.getElementsByClassName("life3")[0].style.display="block";
    }
    if(life<=2)
    {
        document.getElementsByClassName("life2")[0].style.display="block";
    }
    if(life<=1)
    {
        document.getElementsByClassName("life1")[0].style.display="block";
    }
    if(life<=0)
    {
        document.getElementsByClassName("life0")[0].style.display="block";
    }
}
window.onload=Restart();
window.addEventListener("keydown", (e) => CheckLetter(e) );