
function clickFunction1(){
    document.getElementById("Metalsa-exp").innerHTML = "I was an intern during the spring semester my senior year (2018).";    
}
function clickFunction2(){
    document.getElementById("Univance-exp").innerHTML = "Univance is another automotive factory. I was a Manufacturing Engineer for 2 years before I decided I wanted to move out of Kentucky.";
}
function clickFunction3(){
    document.getElementById("Leonardo-DRS-exp").innerHTML = "DRS is a government defense contractor. I was a Manufacturing Engineer for just over a year and a half. It was after this job that I decided manufacturing was not for me.";
}



function toggleText() {
  
            // Get all the elements from the page
    const Metalsa = 
        document.getElementById("Metalsa");
        const showMoreText =
            document.getElementById("moreText");
  
        const buttonText =
            document.getElementById("textButton");
  
            // If the display property of the dots 
            // to be displayed is already set to 
            // 'none' (that is hidden) then this 
            // section of code triggers
        if (Metalsa.style.display === "none") {
  
                // Hide the text between the span
                // elements
            showMoreText.style.display = "none";
  
                // Show the dots after the text
            Metalsa.style.display = "inline";
  
                // Change the text on button to 
                // 'Show More'
            buttonText.innerHTML = "Show More";
            }
  
            // If the hidden portion is revealed,
            // we will change it back to be hidden
        else {
  
                // Show the text between the
                // span elements
             showMoreText.style.display = "inline";
  
                // Hide the dots after the text
             Metalsa.style.display = "none";
  
                // Change the text on button
                // to 'Show Less'
             buttonText.innerHTML = "Show Less";
            }
        }