$(document).ready(function() {

  //  Prevent submit button from refreshing page
  $('#submit-btn').click(function(){
    event.preventDefault();
	// Reset submit button
   $("#submit-btn").trigger("reset");

    // Get value of the #city-type input and handle capitalization
    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();

    // If a user enters NYC / New York City / New York change the css class to 'nyc'
    if(city == 'nyc' || city == 'new york city' || city == 'new york') {
      $('body').attr('class','nyc');
    }

    // If a user enters San Francisco/SF/Bay Area change the css class to 'sf'
    else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
      $('body').attr('class','sf');
    }

    // If a user enters Los Angeles/LA/LAX change the css class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }

    // If a user enters Austin/ATX change the css class to 'austin'
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }

    // If a user enters Sydney/SYD change the css class to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }

  });
});