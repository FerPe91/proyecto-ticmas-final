let count=0;
parseInt(count);

function addStars(number){
    let stars=''
    for(let i=0; i<=number;i++){
        stars=stars+"⭐"
        
    }
    return stars
}


document.getElementById('rate1').innerHTML=addStars(4);
document.getElementById('rate2').innerHTML=addStars(4);
document.getElementById('rate3').innerHTML=addStars(4);
document.getElementById('rate4').innerHTML=addStars(3);



/* document.getElementById('contacto').addEventListener('click', function(){
    count++
    if(count%2==0){
        document.getElementById('contacto').style.backgroundColor ='';
    }else{
        document.getElementById('contacto').style.backgroundColor ='rgb(195, 172, 172)';
        document.getElementById('contacto').style.borderRadius='5.5px';
    }    
    
});  */

