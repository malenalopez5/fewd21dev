var lights = 'on';

function switchLights() {
    if(lights == 'off') {
        lights = 'off';
        $('body').addClass('dark');
    } else {
        lights = 'on';
        $('body').removeClass('dark');
    }
}

$(document).ready(function() {
    $('#light_switch').click(switchLights);
});