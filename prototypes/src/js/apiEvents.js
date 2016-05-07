/**
 * Created by witek on 17.04.16.
 */

var root = 'http://jsonplaceholder.typicode.com/posts/';
$.ajax({
    url: root,
    method: 'GET'
    }).then(function(data) {
        $(".responsive-calendar").responsiveCalendar({
        //time: '2016-05',
        events: {
            "2016-05-30": {
                "number": 5,
                "badgeClass": "badge-warning",
                "url": "http://w3widgets.com/responsive-calendar"
                //"dayEvents": [
                //    {
                //        "name": data[0].title,
                //        "hour": "12:22"
                //    }
                //]},
            }
        }});
        //console.log(data[0].title);
    });

//reakcja na kliknięcie

//$( document ).ready( function() {
//    $(".responsive-calendar").responsiveCalendar({
//        //time: '2016-05',
//        events: {
//            "2016-05-30": {
//                "number": 5,
//                "badgeClass": "badge-warning",
//                "url": "http://w3widgets.com/responsive-calendar"
//                //"dayEvents": [
//                //    {
//                //        "name"
//                //    }
//                //]},
//            }
//        }
//    })
//})