//namespace1.js

var dorv0021 = {
   init: function () {
       console.log("script in dorv0021 called");
       var div = document.createElement("div");
       
       div.className = "box";
       div.textContent = "dorv0021";
       
       document.getElementById('boxes').apprendChild(div);
       
       div.addEventListener("click", click);
       div.addEventListener("mouseover", hover);
        div.addEventListener("mouseout", hover);

        function hover(ev) {
            this.classList.toggle("highlight");
        }

        function click(ev) {

                this.style.backgroundColor = "#D742F4";
                this.style.borderColor = "#41A0F4";
            }

        }
       
       
       
       
       
   





//let colorDiv, DivA;

//colorDiv = function(ev){
    
   // let target = ev.currentTarget;
   // target.style.backgroundColor = 'blue';
  //  target.style.color = 'white';
    
//}

//divA = document.getElementbyId('output');

//divA.addEventListener('mouseout', colorDiv);



























ß


