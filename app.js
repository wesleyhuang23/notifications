var dnperm = document.getElementById('dnperm');
var dntrigger = document.getElementById('dntrigger');

dnperm.addEventListener('click', function(e){
    e.preventDefault();

    if(!window.Notification){
        alert('Sorry, notifications are not supported');
    } else {
        Notification.requestPermission(function(p){ //when the user makes a slection to allow or deny
            if(p === 'denied') {
                alert('you have denied notifications.');
            } else if (p === 'granted'){
                alert('you have granted notifications');
            }
        })
    }
})