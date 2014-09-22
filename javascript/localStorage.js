var name = window.prompt("what is your name?");
var userType = window.prompt("Are you a \"new\" or \"existing\" resident?");



// Save data to the current session's store
sessionStorage.setItem("sessionName", name);
sessionStorage.setItem("sessionUserType", userType);


console.log(sessionStorage.getItem("sessionName"));
console.log(sessionStorage.getItem("sessionUserType"));


sessionStorage.setItem("sessionUserKeywords", "resident");
console.log(sessionStorage.getItem("sessionUserKeywords"));
sessionStorage.setItem("sessionUserKeywords", "non-resident");
console.log(sessionStorage.getItem("sessionUserKeywords"));
sessionStorage.setItem("sessionUserKeywords", sessionStorage.getItem("sessionUserKeywords") + "fark");
console.log(sessionStorage.getItem("sessionUserKeywords"));

/*
// Write form field to a container

// Get the text field that we're going to track
 var field = document.getElementById("field");
 
 // See if we have an autosave value
 // (this will only happen if the page is accidentally refreshed)
 if (sessionStorage.getItem("autosave")) {
    // Restore the contents of the text field
    field.value = sessionStorage.getItem("autosave");
 }
 
 // Listen for changes in the text field
 field.addEventListener("change", function() {
    // And save the results into the session storage object
    sessionStorage.setItem("autosave", field.value);
 });
 */