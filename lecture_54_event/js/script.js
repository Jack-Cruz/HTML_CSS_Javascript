document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello(){
            // Getting variables
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!<h2>";

            // Printing
            console.log(this);
            this.textContent = "Said it";

            // Setting content to HTML element
            document.getElementById("content").innerHTML = message;

            // Conditioning rendering
            if(name === "student"){
                var title = document.querySelector("#title").textContent;
                title += " and Lovin' it!";
                document.querySelector("h1").textContent = title;
            }

        }

        // Unobstrusive event binding
        document.querySelector("button")
        .addEventListener("click", sayHello);

        document.querySelector("body")
        .addEventListener("mouseover", 
            function (event) {
                if(event.shiftKey){
                    console.log("x: " + event.clientX);
                    console.log("y: " + event.clientY);
                }
            }
        )
    }
);

// Tip: Look at the body in the browser