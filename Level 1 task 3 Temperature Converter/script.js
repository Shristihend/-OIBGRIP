let main=()=>{
    let val = document.getElementById('val').value
    let op = document.getElementById('op').value
    let result = document.getElementById('result')
    let ic = document.getElementById('ic')

    let re
    let FtoC=(chr)=>{
        let c = Math.round((chr-32)*5/9)
        if(c <= 10){
            result.innerHTML=(`${c}°Celsius`) 
        }else if(c >= 40){
            result.innerHTML =(`${c}°Celsius `) 
        }else{
            result.innerHTML=(`${c}°Celsius `)
        
        }
    }

    let CtoF=(fhr)=>{
        let f = Math.round((fhr*9/5)+32)
        if(f <= 50){
            result.innerHTML=(`${f}°Fahrenheit `) 
        }else if(f >= 104){
            result.innerHTML =(`${f}°Fahrenheit`) 
        }else{
            result.innerHTML=(`${f}°Fahrenheit`)
            
        }
    }

    if(op=="Celsius"){
        re = FtoC(val)
        return re
    }else{
        re= CtoF(val)
        return re
    }
}
