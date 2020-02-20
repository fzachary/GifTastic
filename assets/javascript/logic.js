const topics = [
    'Crying Jordan', 
    'Deal with it', 
    'Salt Bae', 
    'White guy blinking', 
    'Everything is fine', 
    'Forever alone', 
    'Like a boss', 
    'Sips tea', 
    'Steal yo girl', 
    'Fail'
];

// Function for displaying buttons
function renderButtons() {

    // Emptying our div so there are no repeat buttons
    $('#buttons-view').empty();

    // Loop through the array of topics
    for (let i = 0; i < topics.length; i++) {

        // Generate buttons for each topic in the array
        let button = $('<button>');

        // Add a class to the button
        button.addClass('btn btn-outline-secondary');
        // Add an ID to the buttons
        button.attr('id', 'topic');
        // Add a data-attribute
        button.attr('data-name', topics[i]);
        // Provide the button text
        button.text(topics[i]);
        // Add the button to the HTML
        button.attr('style', 'margin: 10px;');

        $('#buttons-view').append(button);
        $('#topic-input').val('');
    }
}

// Function to render the HTML
function displayGifInfo() {

    let gif = $(this).attr('data-name');
    let queryURL = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10`;

    // Create an AJAX call for the button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(res) {
        let results = res.data;

        // Loop over every result item
        for (let i = 0; i < results.length; i++) {
            // Only take action if the gif has an appropriate rating
            // if (results[i].rating !== "r") {
            // && results[i].rating !== "pg-13") {

            // Creating a div to hold the gifs
            let gifDiv = $('<div class="gifs">');

            // Storing the rating data
            let ratings = results[i].rating;

            // Creating an element to have the rating displayed
            let ratingP = $('<p>').text('Rating: ' + ratings);
            ratingP.attr('style', 'margin-top: 30px;');

            // Displaying the rating
            gifDiv.append(ratingP);

            // Retrieving the URL for the gif
            let gifUrl = results[i].images.fixed_height.url;
            let gifUrlStill = results[i].images.fixed_height_still.url;

            // Creating an element to hold the image
            let displayGif = $('<img>').attr('src', gifUrlStill);            
            displayGif.attr('data-still', gifUrlStill);
            displayGif.attr('data-animate', gifUrl);
            displayGif.attr('data-state', 'still');
            displayGif.attr('class', 'gif');
            displayGif.attr('style', 'margin-right: 45px; margin-top: 15px;');

            // Appending the image
            gifDiv.append(displayGif);

            // Putting the new gifs above the previous ones
            $('#gifs-div').prepend(gifDiv);
        }
            
        $('img').on('click', function() {
            let state = $(this).attr('data-state');

            if (state === 'still') {
                $(this).attr('src', $(this).attr('data-animate'));
                $(this).attr('data-state', 'animate');
            } else {
                $(this).attr('src', $(this).attr('data-still'));
                $(this).attr('data-state', 'still');
            }
            console.log('click');
        })
        
        $("#extra-gifs").on('click', function(event) {
            event.preventDefault();
            let queryURL = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10&offset=10`;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(res) {
                results = res.data;

                for (let i = 0; i < results.length; i++) {

                    let gifDiv = $('<div class="gifs">');

                    let ratings = results[i].rating;

                    let ratingP = $('<p>').text('Rating: ' + ratings);
                    ratingP.attr('style', 'margin-top: 30px;');

                    gifDiv.append(ratingP);

                    let gifUrl = results[i].images.fixed_height.url;
                    let gifUrlStill = results[i].images.fixed_height_still.url;

                    let displayGif = $('<img>').attr('src', gifUrlStill);
                    displayGif.attr('data-still', gifUrlStill);
                    displayGif.attr('data-animate', gifUrl);
                    displayGif.attr('data-state', 'still');
                    displayGif.attr('class', 'gif');
                    displayGif.attr('style', 'margin-right: 45px; margin-top: 15px;');
                    gifDiv.append(displayGif);

                    $('#gifs-div').prepend(gifDiv);
                }
                
                $('img').on('click', function() {
                    let state = $(this).attr('data-state');

                    if (state === 'still') {
                        $(this).attr('src', $(this).attr('data-animate'));
                        $(this).attr('data-state', 'animate');
                    } else {
                        $(this).attr('src', $(this).attr('data-still'));
                        $(this).attr('data-state', 'still');
                    }
                })
            })
        })            
    })
}

// Empty the search input on click
$('#topic-input').on('focus', function() {
    $('#topic-input').empty();
});

// Function to handle the submit button event
$('#add-topic').on('click', function(event) {
    // Prevent the default behavior of the submit button
    event.preventDefault();

    // Grab the input from the text box
    let topic = $('#topic-input').val().trim();
    
    // Add the movie from the text box to our array
    topics.push(topic);

    // Call the function to generate the buttons
    renderButtons();
})

$(document).on('click', '#topic', displayGifInfo);

renderButtons();
