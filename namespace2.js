//namespace2.js

var Dorval = {

colorDiv: function(ev){
    var target = ev.currentTarget;
    target.style.backgroundColor = 'pink';
    target.style.color = '#333';
   },
    init: function(){
       var divB = document.getElementById('output');
    divB.addEventListener('mouseover', 
    this.colorDiv);

}
}
Dorval.init();


 


//divB = document.getElementById('output');

//divB.addEventListener('mouseover', colorDiv);