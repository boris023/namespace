//namespace2.js

var Dorval = {

colorDiv: function(ev){
    var target = ev.currentTarget;
    target.style.backgroundColor = 'pink';
                this.style.borderColor = "#41A0F4";
           
    target.style.color = "#41A0F4";
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