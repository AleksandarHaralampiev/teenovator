function saveBioAndNavigate() {
    // Get the user's bio from the textarea
    var bio = document.getElementById('bio').value;

    // Print the bio to the console
    console.log('User Bio:', bio);
    
    console.log("User Bio:");

    // Save the bio to local storage
    localStorage.setItem('userBio', bio);
    console.log('Bio saved to local storage.');
}
