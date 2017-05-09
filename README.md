# algaecal_test
AlgaeCal Developer Test 2017 - Zachary Kirshner


AlgaeCal team: thank you for your time and consideration. Please let me know if you have any questions about my project or process. I hope my results intrigue you, and if so, look forward to discussing how we can work together.


PROJECT OVERVIEW:

My project build can be accessed from index.php in this repository's root folder. I chose not to separate source and distribution assets for this project in order to keep things simple for anyone reviewing my test. If this kind of organization is imprortant to your team, I would be happy to demonstrate my ability to work in this way.

I believe I have successfully implemented all the functionality described in the test instructions (https://docs.google.com/document/d/1Cg68qXwc9Jgi1eQLw54kKGaU65ISC30RXGw32JdaK5c/edit?usp=sharing) and have created a responsive website that is very close to the Photoshop mockup for small screen sizes. I believe that my desktop rendition, while sparse, is a reasonable representation of the assets I was given to work with.


NOTES:

1. While working on this project, I noticed the Access-Control-Allow-Origin in the REST API Response Headers would change periodically. I'm not sure if this was intentional or not, but I just wanted to make a note of this, as my project likely won't be able to access the REST API data if the Access-Control-Allow-Origin value changes from “*”.

2. I created a custom thumbnail and 'tap-to-play' function for the Wistia video embed, in order to match the site mockup. I imagine it would be better to specify the thumbnail and playback functionality directly in AlgaeCal's Wistia account, but since I didn't have access to this, I created a workaround with Wistia’s API and JavaScript.

3. In addition to making the ‘product bundles’ appear after the Wistia video reaches the 2:13 mark, I’ve also made them appear when the “Buy Now” button is clicked, as this button links back to the bundles section of the page, and it would seem awkward to link to bundles that aren’t there yet.