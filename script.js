
let gameover=false;
var mines=[];
var minesid=[];
let score=0;
var index=0;
window.random=[];
function initial()
{
let rows=9;
let columns=9;
//var tile="";
//var grid=document.createElement("div");
//grid.className="grid-container";
const parent=document.querySelector('.grid-class');
while(mines.length < 10)
{
    let random=Math.floor(Math.random()*100);
    if(random<=81 && !window.random.includes(random))
    {
        mines.push('cell_'+random);
        window.random.push(random);
    }
}
//console.log(mines);
for(var i=1;i<=rows*columns;i++)
{
    if(i>=82)
    {
        console.log("Out of Range");
    }
console.log(i);
let tile=document.createElement("div");
//child.innerText=i;
tile.className="grid-item";
//gridid.push(`cell_{${i}}`);
tile.id='cell_'+i;
tile.style.backgroundImage='url("https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/0.png")';
console.log(tile.id);
tile.addEventListener('mousedown',bomberman(tile));
parent.appendChild(tile);

}
}

function bomberman(tile)
{   
    return function()
        { 
         if(tile.innerText=="" && !gameover)
        {
          if(mines.includes(`${tile.id}`))
           {
                gameover=true;
               for(var i=0;i<mines.length;i++)
               {
                 
                 document.getElementById(`${mines[i]}`).style.background="red";
                 document.getElementById(`${mines[i]}`).style.backgroundImage='url("https://img.icons8.com/emoji/48/000000/bomb-emoji.png")';
                 document.getElementById('resultDisplay').innerText=`game over`;

               }
               
           }
           else
           {
               tile.innerText="1";
               score++;
               document.getElementById('gameScore').innerText=`${score}`;
               tile.style.background="green";
               if(score==71)
               {
                    document.getElementById("resultDisplay").innerHTML="win";
                    gameover=true;
               }
           }
        }
        }

           
    
   
}
function reset()
{   score=0;
    mines=[];
    window.random=[];
    gameover=false;
     document.querySelectorAll('.grid-item').forEach(function(element){
element.remove();
})
initial();
document.getElementById("resultDisplay").innerText="";
document.getElementById("gameScore").innerText=0;
window.addEventListener('load', (event) => {
 
initial();
});
}