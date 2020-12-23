const body = document.body;


const vanillaButton = document.querySelector(".vanilla-button");
// console.log(vanillaButton);



// The following was partially sourced by following along here: https://www.youtube.com/watch?v=rXuHGLzSmSE& at 10:15-10:50

const vanillaClick = () => {
    if (body.classList.contains('default')) {
        body.classList.replace('default', 'vanilla-function');
    }
    else if (body.classList.contains('strawberry-function')) {
        body.classList.replace('strawberry-function', 'vanilla-function');
    }


};


vanillaButton.addEventListener
    ("click",vanillaClick);



const strawberryButton = document.querySelector(".strawberry-button");

const strawberryClick = () => {
    if (body.classList.contains('default')) {
        body.classList.replace('default', 'strawberry-function');
    }
    else if (body.classList.contains('vanilla-function')) {
        body.classList.replace('vanilla-function', 'strawberry-function');
    }
}


strawberryButton.addEventListener
    ("click",strawberryClick);