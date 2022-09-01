## Overview
In this project, the topic of UFOs is explored through the creation of an interacive webpage, which filters search results about various UFO sightings based user input. First an html page was constructed to display the content. The page was styled using css and bootstrap elements. A javascript app was then created to construct a complete table on the html page using a data file. When a user enters a search perameter, the javascript app stores the value associated with the
search criteria in a dictionary, and rebuilds the table to show only the desired results of the user. The html page features five filters for the user to search with (Date, City, State, Country, and shape) which can be used in any combination to show results refined on multiple criteria. 

## Results
The process to search for a UFO sighting is very user friendly. When the html page is first displayed, all of the sightings are listed by date. 

![Screenshot (135)](https://user-images.githubusercontent.com/106559768/187842301-301ad2a3-5330-43d7-83ba-570dfb028e9a.png)


The next step is to select a criteria to filter, type the desired result, and press enter. In this case, the results are filtered by the date

![Screenshot (136)](https://user-images.githubusercontent.com/106559768/187842390-d72da630-246f-4b31-ad77-6d73026e7f2d.png)


The user can then enter another search criteria to further refine the results. This can be accomplished by using the same method of typing the desired result and pressing enter. In this case, the state of California was selected 
![Screenshot (137)](https://user-images.githubusercontent.com/106559768/187842580-ccd266aa-b680-4b2b-a0c0-652cab2de0cf.png)
 
If the user wants to clear a field, they can simply delete the filter and hit enter to update the search criteria. Any combination of filters can be used in the user's UFO search. 

## Summary
Although this page is a useful resource for filtering data, it does come with the drawback of needing specific input; The format of the input must match the data in the table. If a user wanted to search for sightings in Colorado for example, they would need to enter "co" verbatim; "Colorado" or "CO" would not return any results because the search would not match the key in the data set. This is an area of the program that could use improvement. Using regular expressions to identify patterns that do not match the input format, it might be possible to display a pop up to alert the user that their entry does not match the form required for the filter. Another area that could bennefit from improvement would be to lock certain elements of the webpage in place. By locking the search filters to the side of the page, and the image on top, the web page would look cleaner and provide a better end user experience.
