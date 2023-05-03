clr = ['red','green','blue','yellow','white','orange']
var t = document.getElementById("tablazat")
var s = "<table class='border'>"

function Kirajzol()
{
    for (let i = 0; i < 3; i++) 
    {
        s += "<tr>"
        for (let j = 0; j < 3; j++) 
        {
            s += "<td onclick=Katt('"+i+j+"') id='"+i+j+"'></td>"
        }
        s += "</tr>"
    }
    t.innerHTML += s

    var rnd = Math.floor(Math.random()* 5)
    for (let g = 0; g < 3; g++)
    {
        for (let k = 0; k < 3; k++)
        {
           document.getElementById(g+""+k).style.background = clr[rnd]
        }
    }
}

function Kever()
{
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
           var rnd = Math.floor(Math.random()* 5)
           document.getElementById(i+""+j).style.background = clr[rnd] 
        }
    }
}

function Katt(x)
{
    var hatter = document.getElementById(x).style.backgroundColor
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++) 
        {
            document.getElementById(i+""+j).style.backgroundColor = hatter
        }
    }
}

