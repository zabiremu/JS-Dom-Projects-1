window.onload =() =>{
    main();
}


function main(){
    const root = document.getElementById('root');
    const button = document.querySelector('.btn');
    button.addEventListener('click',function(){
        const bgColor= generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}


function generateRGBColor(){
    const red= Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);
    return  `rgb(${red},${green},${blue})`;
}