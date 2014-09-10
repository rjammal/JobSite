SF Food Trucks
==============

About
-----

When I saw that food truck location data could be queried from [DataSF](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat?), I wanted to build an app that would make looking for nearby trucks easy. You can view the app [here](http://rosemary-jammal.com/food_truck_locator/food_trucks.html). To see other projects I've worked on, visit [rosemary-jammal.com](http://rosemary-jammal.com). 

I started by thinking of how this project could fit into Rails or Backbone, but with no persisting data, that approach seemed a little heavy handed. It really only required a little JavaScript and some elbow grease, so I created a single html file with the necessary scripts. 

Currently, the app loads all data into memory and iterates through all the data when moving the map. The data set was small enough that this didn't result in any latency. However, if the data set were to grow significantly (such as to multiple cities), it might be worthwhile to redesign. As it stands now, the app is actually more responsive by making a single AJAX request and running through all the results when rendering. 

Features
--------

* Search within San Francisco to re-center the map
* Only shows food trucks visible within the current map screen and fluidly reupdates as the map is moved
* Selecting the food you want displays matching locations on the map
* Markers on map open dialog boxes describing the truck
* Hover text on the food truck name gives description without having to display it on map

Technologies
------------

* JQuery
* Google Maps JavaScript API v3
* SODA Consumer API
* Bootstrap
* HTML
* CSS
* AJAX
* Amazon S3

Future Feature Roadmap
----------------------

* Data from additional cities