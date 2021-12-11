
let images = [`url(./img/img1.jpg)`, `url(./img/img2.png)`,`url(./img/img3.jpg)`, `url(./img/img4.jpg)`];
let length = images.length
let currentImageNum = 1
document.getElementById('container').style.backgroundImage = images[0];


function setBackground(){ 

    if (currentImageNum === length) {
        currentImageNum = 0
        
    }

document.getElementById('container').style.backgroundImage = images[currentImageNum];
currentImageNum +=1



    // if (onclick = true) {
    //     images+=1
    //     if (length === images.length+1) {
    //         container = images['0']
    //     };
    // }
   
}

