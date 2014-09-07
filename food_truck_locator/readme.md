SF Food Trucks
==============

About
-----

When I saw that food truck location data could be queried from [DataSF](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat?), I wanted to build an app that would make looking for nearby trucks easy. You can view the app [here](http://rosemary-jammal.com/food_trucks_locator/food_trucks.html). 

I started by thinking of how this project could fit into Rails or Backbone, but with no persisting data, that approach seemed a little heavy handed. It really only required a little JavaScript and some elbow grease, so I created a single html file with the necessary scripts. 

Features
--------

* Only shows food truck descriptions within the current map screen
* Descriptions dynamically update as the map is moved
* Selecting the food you want displays matching locations on the map

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

* Full description displayed on mouse over
* Data from additional cities