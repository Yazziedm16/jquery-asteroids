var url ="https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_keyhttps://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEYmxsiSDEHXAmwsbO3g9VAWY4lTH8xnxjcidzYKZBf";

$.ajax({
url: url,
success: function(results) {
  alert("Got back " + results.element_count + " asteroids");
}

});
