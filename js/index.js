function scrolledIntoView(){


    var docViewTop = window.scrollY;
    console.log(docViewTop);

    var test = document.getElementById('hobbiesinterests');

    console.log(test.offsetHeight);
}

//just use the intersect observer api
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

scrolledIntoView();