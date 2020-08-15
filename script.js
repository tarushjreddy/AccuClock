

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    a.getHours() + a.get


    let date = a.toLocaleDateString(undefined, options);
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() + ':' + a.getMilliseconds();
    document.getElementById('timming').innerHTML = time;


    document.getElementById('timmingg').innerHTML = date;
    if (a.getHours() < 6) {
        document.getElementById('back-img').style.backgroundImage = "url('pexels-pixabay-207130.jpg')"
    }
    else if (a.getHours() < 16) {
        document.getElementById('back-img').style.backgroundImage = "url('pexels-splitshire-1562.jpg')"
    }
    else if (a.getHours() < 19) {
        document.getElementById('back-img').style.backgroundImage = "url('pexels-stephan-seeber-1261728.jpg')"
    }
    else {
        document.getElementById('back-img').style.backgroundImage = "url('pexels-pixabay-207130.jpg')"
    }

}, 1);

