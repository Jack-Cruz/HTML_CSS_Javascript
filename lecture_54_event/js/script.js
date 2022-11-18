document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello(){
            // Getting variables
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!<h2>";
        
            // Printing
            console.log(this);
            this.textContent = "Said it";
        
            // Seting content to HTML element
            // document.getElementById("content").textContent = message;
            document.getElementById("content").innerHTML = message;
            
            // Conditioning rendering
            if(name === "student"){ 
                var title = document.querySelector("#title").textContent;
                title += " and Lovin' it!";
                document.querySelector("h1").textContent = title;
            }
        }
        // Ubobstrusive event binding
        document.querySelector("button")
        .addEventListener("click", sayHello);

        document.querySelector("body")
          .addEventListener("mousemove", 
            function (event) {
              if(event.shiftKey){
                console.log("x: " + event.clientX);
                console.log("y: " + event.clientY);
              }
            }
          )
    }
);
    