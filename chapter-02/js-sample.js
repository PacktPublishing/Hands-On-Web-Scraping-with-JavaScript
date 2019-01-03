window.onload = function() {
    var today = new Date();

    var MONTHS = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

     var currentDate = [
         MONTHS[today.getMonth()],
         today.getDate(),
         today.getFullYear()
     ].join(' ');

     window.alert(currentDate);
}
