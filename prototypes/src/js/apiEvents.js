/**
 * Created by witek on 17.04.16.
 */

var root = 'http://jsonplaceholder.typicode.com/posts/';
var eventDay=function(){
    $.ajax({
        url: root+selectedDay,
        method: 'GET'
    }).then(function(data) {
        console.log(data);
    });
};

var selectedDay = 0;

$( document ).ready(function() {
    $('.responsive-calendar').responsiveCalendar();

    $('.responsive-calendar').on('click', '.day', function(event){
        selectedDay = $( 'a', event.currentTarget).attr('data-day') ;
            eventDay();

        }
    );
});