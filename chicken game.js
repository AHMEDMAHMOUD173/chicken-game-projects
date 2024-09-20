
var boxleft=0
var boxup=0
var box = document.querySelector('.container')
document.addEventListener('keydown' , function (e) {
    // console.log(e);
if (e.code == 'ArrowRight') {
    boxleft+=30
    box.style.left = boxleft + "px"

}else if(e.code == 'ArrowUp'){
    boxup+=30
    box.style.bottom = boxup + "px"
}else if (e.code == 'ArrowDown' ){

boxup-=30
    box.style.bottom = boxup + "px"

}
else if (e.code == 'ArrowLeft') {
    boxleft-=30
    box.style.left = boxleft + "px"

}else if(e.code=="Space"){

    cube.style.bottom=600 +'px'; 
    cube.style.opacity =1 ;

}
    })

var cubeleft=0 
var cubebottom=0 

    var cube = document.querySelector('.type')
document.addEventListener('keyup' , function (e){
if (e.code == 'Space') {
    cube.style.bottom=50  +'px'; 
    cube.style.opacity =0 ;
    
}

})
