

let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let num = 0
let t1 = null

btn.onclick = function(){
    // setTimeout(function(){
    //     console.log('2秒时间到');
    // }, 5000);

    t1 = setInterval(() => {
        console.log(++num);
    }, 1000);
}

btn2.onclick = function(){
    if(null != t1){
        clearInterval(t1)
        console.log('定时器已经清除')
    }
}




