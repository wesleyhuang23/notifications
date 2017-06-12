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

    //simulate an event
    dntrigger.addEventListener('click', function(){
        var notify;

        e.preventDefault();

        if(Notification.permission === 'default'){
            alert('Please allow notifications before doing this');
        } else {
            notify = new Notification('New Message from Wesley', {
                body: "Let's go play",
                icon: 'http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/dogesmall.jpg'
            });
        }
    })
})