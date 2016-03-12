  // Create array for cities in dropdown
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
  // wait for all DOM elements to load before execution
  $(document).ready(function() {
  // Iterate on all cities to create a new <option> on that <select> (loop)       
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  // Replace the old <select> with the new <select> when clicked 
  $('form').on('change', '#city-type',function(){
    // Get value of the city type selected
    var city = $('#city-type').val();
    // If a user selects NYC change the css class to 'nyc'
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    // If a user selects SF change the css class to 'sf'
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    // If a user selects LA change the css class to 'la'
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    // If a user selects ATX change the css class to 'austin'
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    // If a user selects SYD change the css class to 'sydney'
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});