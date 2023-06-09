const blocks = document.querySelectorAll(".block")
const ladders = document.querySelectorAll(".ladder")
const toilets = document.querySelectorAll(".toilet")

const inpFrom = document.getElementById('inputFrom_js');
const inpTo = document.getElementById('inputTo_js');
var flag = true;

for(let i=0;i<blocks.length;i++)
{
    blocks[i].addEventListener('click',function (){
        if(flag)
            inpFrom.value = blocks[i].id.slice(2);
        else
            inpTo.value = blocks[i].id.slice(2);
    })
}
for(let i=0;i<toilets.length;i++)
{
    toilets[i].addEventListener('click',function (){
        if(flag)
            inpFrom.value = toilets[i].id.slice(3);
        else
            inpTo.value = toilets[i].id.slice(3);
    })
}
for(let i=0;i<ladders.length;i++)
{
    ladders[i].addEventListener('click',function (){
        if(flag)
            inpFrom.value = ladders[i].id.slice(3);
        else
            inpTo.value = ladders[i].id.slice(3);
    })
}
inpFrom.addEventListener('focus', function (){flag=true})
inpTo.addEventListener('focus', function (){flag=false})