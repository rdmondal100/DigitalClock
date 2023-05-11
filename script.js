setInterval(()=>{

    let a=new Date()
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
    let d=a.getDate()
    let amPRpm= h>=12? "PM" : "AM";
    
    
      let hh=document.getElementById("hh")
      let mm=document.getElementById("mm")
      let ss=document.getElementById("ss")
    
      let hr_dot=document.querySelector(".hr_dot")
      let min_dot=document.querySelector(".min_dot")
      let sec_dot=document.querySelector(".sec_dot")
    
    
    let hour=document.getElementById("hour")
    let minute=document.getElementById("minute")
    let second=document.getElementById("second")
    let ampm=document.getElementById("ampm")
    
    
    //convert
    if(h>12){
      h=h-12;
    }
    
    
    //add zero befor single digit
    h= h<10? '0'+h : h;
    m= m<10? '0'+m : m;
    s= s<10? '0'+s : s;
    
    
    hour.innerHTML=h
    minute.innerHTML=m
    second.innerHTML=s
    ampm.innerHTML=amPRpm
    
              
    hh.style.strokeDashoffset=440-(440*h)/12
    mm.style.strokeDashoffset=440-(440*m)/60
    ss.style.strokeDashoffset=440-(440*s)/60
    
    
    // hr_dot.style.transform=`rotate(${h * 30}deg)`  
    // min_dot.style.transform=`rotate(${m * 6}deg)`  
    // sec_dot.style.transform=`rotate(${s * 6}deg)`  
    
    
    })