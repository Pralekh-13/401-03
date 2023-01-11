let ar=[
    "img01.jpg","img02.jpg","img03.jpg"
]
let img=document.getElementById("Slide-img");
img.src=ar[0];
let i=1;
function left(){
    if(i>0){
        i--;
        img.src=ar[i];
        
    }
    else{
        i=3;
    }
}
function right(){
    if(i==2){
        i=0;
    }
    else{
        i++;
        img.src=ar[i];
    }
}
