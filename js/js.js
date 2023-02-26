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
document.getElementById('rate2').innerHTML=addStars(3);
document.getElementById('rate3').innerHTML=addStars(3);
document.getElementById('rate4').innerHTML=addStars(3);


