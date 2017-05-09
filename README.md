# algaecal_test
AlgaeCal Developer Test 2017 - Zachary Kirshner


OVERVIEW:

My project's index.php page and other assets can be found directly in this repository's root folder.

I have implemented all the functionality described in the test instructions (https://docs.google.com/document/d/1Cg68qXwc9Jgi1eQLw54kKGaU65ISC30RXGw32JdaK5c/edit?usp=sharing). My responsive web page should ring true to the Photoshop mockup at small screen sizes. At desktop sizes, the page is a sparse, but logical extension of the designs provided with the test.

I used a combination of bootstrap and CSS media queries to create my responsive page. I created a set of Sass files to organize my SCSS into an easily readable structure. I utilized JavaScript's jQuery, AJAX, moment.js, and moment-timezone.js libraries to create the required site functionality. I have kept my code organized and commented it where clarification may be helpful.


A FEW NOTES:

1. While working on this project, I noticed the Access-Control-Allow-Origin in the REST API Response Headers would change periodically away from "*". I am bringing this up so viewers of my project are aware of the possibility that changes to Access-Control-Allow-Origin could affect my project's ability to access the REST API and function properly.

2. I created a custom thumbnail and "Tap-to-Play" function for the Wistia video embed in order to visually match the site mockup. I imagine it would be better to specify the thumbnail and playback functionality directly in AlgaeCal's Wistia account, but since I did not have access to this, I created a workaround with Wistia’s API and JavaScript.

3. In addition to making the product bundles appear after the Wistia video reaches the 2:13 mark, I’ve also made them appear when the “Buy Now” button is clicked, as this button links back to the bundles section of the page, and it would seem awkward to link to bundles that aren’t displayed yet.

4. I removed "Tap to Talk" from larger screen sizes, as it seems like a mobile-specific directive.

5. I was only able to procure thin and bold free versions of the primary font ("Glober"). For this reason, the site's non-bold, "Glober" text looks a bit thin when compared to the Photoshop mockup's font weight. 