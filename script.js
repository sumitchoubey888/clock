setInterval(()=>{
let d = new Date();
let w = document.getElementById("watch")
w.innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
},1000)
