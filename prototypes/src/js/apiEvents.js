/**
 * Created by witek on 17.04.16.
 */

function loadEvents() {
    $.ajax({
        url: root,
        method: 'GET'
    }).then(function(data) {
        var events = {};
        $('.responsive-calendar').responsiveCalendar({
            //time: (new Date()).getFullYear() + '-' + ((new Date()).getMonth()+1) ,
            events: events
        });

        $.each(data,function(i, item){
            var str=item.startsAt;
            var dateEvent=str.slice(0,10);
            console.log(dateEvent, item)
            events[dateEvent] = {
                number: item.type,
                "badgeClass": item.type
            }
        });
    });
}

var writeEvent=function(item){
    $('#foto').attr('src',item.image);
    $('#header').text(' '+item.title);
    $('#what').text(item.description);
};



var root = 'http://isa-api-sl.herokuapp.com/api/events/';
var eventDay=function(dateCalendar){
    $.ajax({
        url: root,
        method: 'GET'
    }).then(function(data) {
        $.each(data,function(i, item){
            var str=item.startsAt;
            //console.log(str);
            var dateEvent=str.slice(0,10);
            //console.log(dateEvent);
            if (dateEvent==dateCalendar) writeEvent(item);
        });
    });
};
 $('.menu input[type="checkbox"]').click( function() {

 })

;
$( document ).ready(function() {
    loadEvents();

    $('.responsive-calendar').on('click', '.day', function(event){
        selectedYear = $( 'a', event.currentTarget).attr('data-year');
        ($( 'a', event.currentTarget).attr('data-month')<10) ? selectedMonth='0'+ $( 'a', event.currentTarget).attr('data-month') :
            selectedMonth=$( 'a', event.currentTarget).attr('data-month');
        ($( 'a', event.currentTarget).attr('data-day')<10) ? selectedDay='0'+$( 'a', event.currentTarget).attr('data-day') :
            selectedDay=$( 'a', event.currentTarget).attr('data-day');
            console.log(selectedYear+'-'+selectedMonth+'-'+selectedDay);
            eventDay(selectedYear+'-'+selectedMonth+'-'+selectedDay);
        }
    );




});