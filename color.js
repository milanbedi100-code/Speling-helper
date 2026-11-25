const delay = ms => new Promise(res => setTimeout(res,ms));
console.log("hiii")








async function GMSC (){
    while (true){
        for(let i = 0; i <= 100; i++){
            document.body.style.backgroundColor=`color-mix(in srgb,green ${i}%, #f70000)`;
            await delay(60)
        }
        
    }
}
GMSC()
