var topics = ["Crying Jordan", "Deal with it", "Salt Bae", "White guy blinking", "Everything is fine", "Forever alone", "Like a boss", "Sips tea", "Steal yo girl", "Fail"];


// Function for displaying buttons
function renderButtons() {

    // Emptying our div so there are no repeat buttons
    $("#buttons-view").empty();

    // Loop through the array of topics
    for (var i = 0; i < topics.length; i++) {

        // Generate buttons for each topic in the array
        var button = $("<button>");

        // Add a class to the button
        button.addClass("topic");
        // Add a data-attribute
        button.attr("data-name", topics[i]);
        // Provide the button text
        button.text(topics[i]);
        // Add the button to the HTML
        $("#buttons-view").append(button);

        console.log(button);
    }
}

// Function to handle the submit button event
$("#add-topic").on('click', function(event) {
    // Peventing the default behavior of the submit button
    event.preventDefault();
    // Grab the input from the text box
    var topic = $("#topic-input").val().trim();

    // Add the movie from the textbox to our array
    topics.push(topic);

    // Call the function to generate the buttons
    renderButtons();
})


renderButtons();



