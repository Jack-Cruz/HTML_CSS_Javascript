// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    // Unobstrusive event binding
    document.querySelector("button")
      .addEventListener("click", function() {

        // Call the server to get the name
        $ajaxUtils.sendGetRequest("data/name.json",
          function (res) {
            var message = res.firstName + " " 
             res.lastName;

            if(res.likesChineseFood) {
              message += " likes Chinese food";
            }
            else {
              message += " doesn't like Chinese food";
            }
            message += " and uses ";
            message += res.numberOfDisplays;
            message += " displays for coding";

            if(res.listenMusicWhileWorking){
                message += " and listen music while working.";
            }
            else {
                message += " and doesn't listen music while working."
            }
            document.querySelector("#content")
              .innerHTML = "<h2>" + message + "</h2>";
          }
        );

    });
  }
);