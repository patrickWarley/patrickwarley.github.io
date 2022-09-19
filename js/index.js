//just use the intersect observer api
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


function reveal(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting) 
            return entry.target.classList.add('active');
        return entry.target.classList.remove('active');
    });
}


//lets use the intersection api
function setIntersectionObserver(){
    //first define the options
    let options = {
        root: null, //root null = viewport
        rootMargin: '0px',
        threshold: 0.4 
        //how much of the element is intersecting the root, is this case how much of the element is visible
        //, 1.0 means that the element mis 100% visible
    }

    let observer = new IntersectionObserver(reveal, options);

    var reveals = document.querySelectorAll('.reveal');

    for(let elem of reveals){
        observer.observe(elem)
    }
}

setIntersectionObserver();
