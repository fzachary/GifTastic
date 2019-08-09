# GifTastic

Giftastic is a web-based application that incorporates Giphy's API to render a library of gifs.

## Usage

Giftastic works by attaching a search parameter to the API query URL based on a button that was clicked in the DOM. There are buttons that are preloaded to the DOM that are from a list of popular memes. There is an input field where the user can type a new search parameter and click the submit button to add a new search query parameter to the DOM that they can then click to add the gifs. The gifs will load in their still or paused state. Once the user clicks on the individual images, they will animate.

There is an alternate button that the user can press once they have already loaded the first 10 gifs from their search. This button will add the next 10 gifs in the database that match the search parameter. The user can then click these gifs to animate them as the others before. I would have liked to have been able to continually add gifs in groups of 10, but I'm not sure how to increment the search parameters, which I assume, is what is needed to be done. I have used Bootstrap 4 for the style and layout.

## Contributing

Please contact me if you would like to contribute.



