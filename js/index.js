//just use the intersect observer api
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


function reveal(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) return entry.target.classList.add('active');
    else {
      //I wanna reset the animation on the icon-group
      if (entry.target.classList.contains("tecnologies"))
        return entry.target.classList.remove('active');
    }
  });
}


//lets use the intersection api
function setIntersectionObserver() {
  //first define the options
  let options = {
    root: null, //root null = viewport
    rootMargin: '0px',
    threshold: 0.5
    //how much of the element is intersecting the root, is this case how much of the element is visible
    //, 1.0 means that the element mis 100% visible
  }

  let observer = new IntersectionObserver(reveal, options);

  var reveals = document.querySelectorAll('.reveal, .tecnologies');

  for (let elem of reveals) {
    observer.observe(elem)
  }
}

// project animations

function setExpand(evt) {
  const parent = evt.target.parentElement.parentElement;

  for (let element of parent.children) {
    let classList = element.classList;

    for (let className of classList)
      if (className === "expand") classList.toggle("expand");
  }

  evt.target.parentElement.classList.toggle('expand');
  console.log(evt.target.parentElement)
}

function getProjectImages() {
  var images = document.querySelectorAll('.project-click');

  for (let image of images) image.addEventListener('click', setExpand);
}

function init() {

  setIntersectionObserver();
  getProjectImages();
}


init();