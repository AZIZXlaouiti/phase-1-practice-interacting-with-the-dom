var time = document.querySelector('#counter')
setInterval(function(){
  a= parseInt(time.innerText),time.innerText = a+1
},1e3) 