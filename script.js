// tutorial

// show the tutorial and hide everything else by showing the overlay
function startTutorial() {
    // show overlay
    document.getElementById("overlay").style.display = "block";
    
    // hide other website elements
    document.body.style.pointerEvents = "none";
    document.body.style.filter = "blur(5px)";
    
    // show tutorial content
    document.getElementById("tutorial").style.display = "block";
  }
  
  // show tutorial when the page loads
  window.onload = function() {
      tutorial.style.display = "block";
  }
  
  // Hide the tutorial when u click proceed
  function finishTutorial() {
      const tutorial = document.getElementById("tutorial");
      tutorial.style.display = "none";
    }
  
  const tutorialClose = document.getElementsByClassName("close-button")[0];
  
  // Close tutorial when the close button is clicked
  tutorialClose.onclick = function() {
    tutorial.style.display = "none";
  }
  
  function finishTutorial() {
    // hide tutorial content
    document.getElementById("tutorial").classList.add("fade-out");
    
    // show other website elements
    document.body.style.pointerEvents = "auto";
    document.body.style.filter = "none";
    
    // hide overlay
    // setTimeout(function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").style.zIndex = "-10000";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("tutorial").style.zIndex = "-10000";
    // }, 300); // wait for tutorial content to fade out before hiding overlay
  
  
    runAnim();
  
  }
  
  // hints
  
  // toggle hints on / off when u click the button
  let currentHint = 0;
  
  function toggleHints() {
    const hintsMenu = document.getElementById("hints-menu");
    hintsMenu.classList.toggle("show");
    currentHint = 0;
    showHint(currentHint);
  }
  
  function nextHint() {
    const hints = document.getElementsByClassName("hint");
    if (currentHint < hints.length - 1) {
      currentHint++;
      showHint(currentHint);
    }
  }
  
  function showHint(index) {
    const hints = document.getElementsByClassName("hint");
    for (let i = 0; i < hints.length; i++) {
      hints[i].classList.remove("show");
    }
    hints[index].classList.add("show");
  }
  
  
  // loading screen
  
  window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var tutorial = document.getElementById('tutorial');
    
    // hide preloader
    preloader.style.display = 'none';
    
    // show tutorial
    tutorial.style.display = 'block';
  });
  
  
  // Add an event listener to the tutorial button
  function runAnim() {
    // Get the typewriter element
    var typewriter = document.getElementById('typewriter');
  
    // Get the text to type from the data-type attribute
    var texts = JSON.parse(typewriter.getAttribute('data-type'));
  
    // Initialize the current text index and current character index
    var textIndex = 0;
    var charIndex = 0;
  
    // Initialize the typewriter text to the first text
    typewriter.innerHTML = texts[textIndex];
  
    // Start typing the text
    function type() {
      // Check if we've typed all the characters in the current text
      if (charIndex >= texts[textIndex].length) {
        // Move to the next text and reset the character index
        textIndex++;
        charIndex = 0;
        // If we've typed all the texts, start over
      }
      // Set the typewriter text to the current text up to the current character
      typewriter.innerHTML = texts[textIndex].substring(0, charIndex + 1);
      // Increment the character index
      charIndex++;
      // Schedule the next character to be typed after a random delay
      setTimeout(type, Math.floor(Math.random() * 100) + 50);
    }
  
    // Start the typing animation
    // setTimeout(type, 2000);
    type();
  }
  
  
  // make scrolling smooth
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  


// // Get the button and popup container elements
// const showButton = document.getElementById("show-button-1");
// const popupContainer = document.getElementById("popup-container-1");

// // Get the close button element inside the popup container
// const closeButton = popupContainer.querySelector(".close-button-1");

// // Add a click event listener to the show button
// showButton.addEventListener("click", function() {
//   // Show the popup container
//   popupContainer.style.display = "block";
//   document.querySelector(".widget-container").style.pointerEvents = "none";
//   closeButton.style.pointerEvents = "auto";

// });

// // Add a click event listener to the close button
// closeButton.addEventListener("click", function() {
//   // Hide the popup container
//   popupContainer.style.display = "none";

//   document.querySelector(".widget-container").style.pointerEvents = "auto";
// });


const showButton = document.getElementById("show-button-1");
const popupContainer = document.getElementById("popup-container-1");

// Get the close button element inside the popup container
const closeButton = popupContainer.querySelector(".close-button-1");

// Add a click event listener to the show button
showButton.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer);

  popupContainer.style.display = "block";
  popupContainer.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer.style.display = "none";
  popupContainer.style.zIndex = "0";

});


const showButton2 = document.getElementById("show-button-2");
const popupContainer2 = document.getElementById("popup-container-2");

// Get the close button element inside the popup container
const closeButton2 = popupContainer2.querySelector(".close-button-2");

// Add a click event listener to the show button
showButton2.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer2);

  popupContainer2.style.display = "block";
  popupContainer2.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton2.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer2.style.display = "none";
  popupContainer2.style.zIndex = "0";

});


const showButton3 = document.getElementById("show-button-3");
const popupContainer3 = document.getElementById("popup-container-3");

// Get the close button element inside the popup container
const closeButton3 = popupContainer3.querySelector(".close-button-3");

// Add a click event listener to the show button
showButton3.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer3);

  popupContainer3.style.display = "block";
  popupContainer3.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton3.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer3.style.display = "none";
  popupContainer3.style.zIndex = "0";

});

const showButton4 = document.getElementById("show-button-4");
const popupContainer4 = document.getElementById("popup-container-4");

// Get the close button element inside the popup container
const closeButton4 = popupContainer4.querySelector(".close-button-4");

// Add a click event listener to the show button
showButton4.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer4);

  popupContainer4.style.display = "block";
  popupContainer4.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton4.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer4.style.display = "none";
  popupContainer4.style.zIndex = "0";

});



const showButton5 = document.getElementById("show-button-5");
const popupContainer5 = document.getElementById("popup-container-5");

// Get the close button element inside the popup container
const closeButton5 = popupContainer5.querySelector(".close-button-5");

// Add a click event listener to the show button
showButton5.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer5);

  popupContainer5.style.display = "block";
  popupContainer5.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton5.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer5.style.display = "none";
  popupContainer5.style.zIndex = "0";

});



const showButton6 = document.getElementById("show-button-6");
const popupContainer6 = document.getElementById("popup-container-6");

// Get the close button element inside the popup container
const closeButton6 = popupContainer6.querySelector(".close-button-6");

// Add a click event listener to the show button
showButton6.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer6);

  popupContainer6.style.display = "block";
  popupContainer6.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton6.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer6.style.display = "none";
  popupContainer6.style.zIndex = "0";

});



const showButton7 = document.getElementById("show-button-7");
const popupContainer7 = document.getElementById("popup-container-7");

// Get the close button element inside the popup container
const closeButton7 = popupContainer7.querySelector(".close-button-7");

// Add a click event listener to the show button
showButton7.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer7);

  popupContainer7.style.display = "block";
  popupContainer7.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton7.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer7.style.display = "none";
  popupContainer7.style.zIndex = "0";

});

const showButton8 = document.getElementById("show-button-8");
const popupContainer8 = document.getElementById("popup-container-8");

// Get the close button element inside the popup container
const closeButton8 = popupContainer8.querySelector(".close-button-8");

// Add a click event listener to the show button
showButton8.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer8);

  popupContainer8.style.display = "block";
  popupContainer8.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton8.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer8.style.display = "none";
  popupContainer8.style.zIndex = "0";

});

const showButton9 = document.getElementById("show-button-9");
const popupContainer9 = document.getElementById("popup-container-9");

// Get the close button element inside the popup container
const closeButton9 = popupContainer9.querySelector(".close-button-9");

// Add a click event listener to the show button
showButton9.addEventListener("click", function() {
  // Show the popup container and set its z-index to 1
  document.body.appendChild(popupContainer9);

  popupContainer9.style.display = "block";
  popupContainer9.style.zIndex = "100000000";
});

// Add a click event listener to the close button
closeButton9.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  popupContainer9.style.display = "none";
  popupContainer9.style.zIndex = "0";

});

var showPostButton = document.getElementById("fb-1");
var postContainer = document.getElementById("fb-container-1");
var closeFB = postContainer.querySelector(".fb-close-1");


showPostButton.addEventListener("click", function() {
  document.body.appendChild(postContainer);
  postContainer.style.display = "block";
  postContainer.style.zIndex = "100000000";
});

closeFB.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer.style.display = "none";
  postContainer.style.zIndex = "0";

});

var showPostButton2 = document.getElementById("fb-2");
var postContainer2 = document.getElementById("fb-container-2");
var closeFB2 = postContainer2.querySelector(".fb-close-2");


showPostButton2.addEventListener("click", function() {
  document.body.appendChild(postContainer2);
  postContainer2.style.display = "block";
  postContainer2.style.zIndex = "100000000";
});

closeFB2.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer2.style.display = "none";
  postContainer2.style.zIndex = "0";

});

var showPostButton3 = document.getElementById("fb-3");
var postContainer3 = document.getElementById("fb-container-3");
var closeFB3 = postContainer3.querySelector(".fb-close-3");


showPostButton3.addEventListener("click", function() {
  document.body.appendChild(postContainer3);
  postContainer3.style.display = "block";
  postContainer3.style.zIndex = "100000000";
});

closeFB3.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer3.style.display = "none";
  postContainer3.style.zIndex = "0";

});

var showPostButton4 = document.getElementById("fb-4");
var postContainer4 = document.getElementById("fb-container-4");
var closeFB4 = postContainer4.querySelector(".fb-close-4");


showPostButton4.addEventListener("click", function() {
  document.body.appendChild(postContainer4);
  postContainer4.style.display = "block";
  postContainer4.style.zIndex = "100000000";
});

closeFB4.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer4.style.display = "none";
  postContainer4.style.zIndex = "0";

});


var showPostButton5 = document.getElementById("fb-5");
var postContainer5 = document.getElementById("fb-container-5");
var closeFB5 = postContainer5.querySelector(".fb-close-5");


showPostButton5.addEventListener("click", function() {
  document.body.appendChild(postContainer5);
  postContainer5.style.display = "block";
  postContainer5.style.zIndex = "100000000";
});

closeFB5.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer5.style.display = "none";
  postContainer5.style.zIndex = "0";

});


var showPostButton6 = document.getElementById("fb-6");
var postContainer6 = document.getElementById("fb-container-6");
var closeFB6 = postContainer6.querySelector(".fb-close-6");


showPostButton6.addEventListener("click", function() {
  document.body.appendChild(postContainer6);
  postContainer6.style.display = "block";
  postContainer6.style.zIndex = "100000000";
});

closeFB6.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer6.style.display = "none";
  postContainer6.style.zIndex = "0";

});


var showPostButton7 = document.getElementById("fb-7");
var postContainer7 = document.getElementById("fb-container-7");
var closeFB7 = postContainer7.querySelector(".fb-close-7");


showPostButton7.addEventListener("click", function() {
  document.body.appendChild(postContainer7);
  postContainer7.style.display = "block";
  postContainer7.style.zIndex = "100000000";
});

closeFB7.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer7.style.display = "none";
  postContainer7.style.zIndex = "0";

});



var showPostButton8 = document.getElementById("fb-8");
var postContainer8 = document.getElementById("fb-container-8");
var closeFB8 = postContainer8.querySelector(".fb-close-8");


showPostButton8.addEventListener("click", function() {
  document.body.appendChild(postContainer8);
  postContainer8.style.display = "block";
  postContainer8.style.zIndex = "100000000";
});

closeFB8.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer8.style.display = "none";
  postContainer8.style.zIndex = "0";

});


var showPostButton9 = document.getElementById("fb-9");
var postContainer9 = document.getElementById("fb-container-9");
var closeFB9 = postContainer9.querySelector(".fb-close-9");


showPostButton9.addEventListener("click", function() {
  document.body.appendChild(postContainer9);
  postContainer9.style.display = "block";
  postContainer9.style.zIndex = "100000000";
});

closeFB9.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  postContainer9.style.display = "none";
  postContainer9.style.zIndex = "0";

});

var showTweetButton = document.getElementById("twitter-1");
var tweetContainer = document.getElementById("twitter-container-1");
var closeTwitter = tweetContainer.querySelector(".twitter-close-1");

showTweetButton.addEventListener("click", function() {
  document.body.appendChild(tweetContainer);
  tweetContainer.style.display = "block";
  tweetContainer.style.zIndex = "100000000";
});

closeTwitter.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer.style.display = "none";
  tweetContainer.style.zIndex = "0";
});

var showTweetButton2 = document.getElementById("twitter-2");
var tweetContainer2 = document.getElementById("twitter-container-2");
var closeTwitter2 = tweetContainer2.querySelector(".twitter-close-2");

showTweetButton2.addEventListener("click", function() {
  document.body.appendChild(tweetContainer2);
  tweetContainer2.style.display = "block";
  tweetContainer2.style.zIndex = "100000000";
});

closeTwitter2.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer2.style.display = "none";
  tweetContainer2.style.zIndex = "0";
});

var showTweetButton3 = document.getElementById("twitter-3");
var tweetContainer3 = document.getElementById("twitter-container-3");
var closeTwitter3 = tweetContainer3.querySelector(".twitter-close-3");

showTweetButton3.addEventListener("click", function() {
  document.body.appendChild(tweetContainer3);
  tweetContainer3.style.display = "block";
  tweetContainer3.style.zIndex = "100000000";
});

closeTwitter3.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer3.style.display = "none";
  tweetContainer3.style.zIndex = "0";
});

var showTweetButton4 = document.getElementById("twitter-4");
var tweetContainer4 = document.getElementById("twitter-container-4");
var closeTwitter4 = tweetContainer4.querySelector(".twitter-close-4");

showTweetButton4.addEventListener("click", function() {
  document.body.appendChild(tweetContainer4);
  tweetContainer4.style.display = "block";
  tweetContainer4.style.zIndex = "100000000";
});

closeTwitter4.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer4.style.display = "none";
  tweetContainer4.style.zIndex = "0";
});


var showTweetButton5 = document.getElementById("twitter-5");
var tweetContainer5 = document.getElementById("twitter-container-5");
var closeTwitter5 = tweetContainer5.querySelector(".twitter-close-5");

showTweetButton5.addEventListener("click", function() {
  document.body.appendChild(tweetContainer5);
  tweetContainer5.style.display = "block";
  tweetContainer5.style.zIndex = "100000000";
});

closeTwitter5.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer5.style.display = "none";
  tweetContainer5.style.zIndex = "0";
});


var showTweetButton6 = document.getElementById("twitter-6");
var tweetContainer6 = document.getElementById("twitter-container-6");
var closeTwitter6 = tweetContainer6.querySelector(".twitter-close-6");

showTweetButton6.addEventListener("click", function() {
  document.body.appendChild(tweetContainer6);
  tweetContainer6.style.display = "block";
  tweetContainer6.style.zIndex = "100000000";
});

closeTwitter6.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer6.style.display = "none";
  tweetContainer6.style.zIndex = "0";
});

var showTweetButton7 = document.getElementById("twitter-7");
var tweetContainer7 = document.getElementById("twitter-container-7");
var closeTwitter7 = tweetContainer7.querySelector(".twitter-close-7");

showTweetButton7.addEventListener("click", function() {
  document.body.appendChild(tweetContainer7);
  tweetContainer7.style.display = "block";
  tweetContainer7.style.zIndex = "100000000";
});

closeTwitter7.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer7.style.display = "none";
  tweetContainer7.style.zIndex = "0";
});


var showTweetButton8 = document.getElementById("twitter-8");
var tweetContainer8 = document.getElementById("twitter-container-8");
var closeTwitter8 = tweetContainer8.querySelector(".twitter-close-8");

showTweetButton8.addEventListener("click", function() {
  document.body.appendChild(tweetContainer8);
  tweetContainer8.style.display = "block";
  tweetContainer8.style.zIndex = "100000000";
});

closeTwitter8.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer8.style.display = "none";
  tweetContainer8.style.zIndex = "0";
});


var showTweetButton9 = document.getElementById("twitter-9");
var tweetContainer9 = document.getElementById("twitter-container-9");
var closeTwitter9 = tweetContainer9.querySelector(".twitter-close-9");

showTweetButton9.addEventListener("click", function() {
  document.body.appendChild(tweetContainer9);
  tweetContainer9.style.display = "block";
  tweetContainer9.style.zIndex = "100000000";
});

closeTwitter9.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  tweetContainer9.style.display = "none";
  tweetContainer9.style.zIndex = "0";
});



var showLinkedinButton = document.getElementById("linkedin-1");
var linkedinContainer = document.getElementById("linkedin-container-1");
var closeLinkedin = linkedinContainer.querySelector(".linkedin-close-1");

showLinkedinButton.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer);
  linkedinContainer.style.display = "block";
  linkedinContainer.style.zIndex = "100000000";
});

closeLinkedin.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer.style.display = "none";
  linkedinContainer.style.zIndex = "0";
});

var showLinkedinButton2 = document.getElementById("linkedin-2");
var linkedinContainer2 = document.getElementById("linkedin-container-2");
var closeLinkedin2 = linkedinContainer2.querySelector(".linkedin-close-2");

showLinkedinButton2.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer2);
  linkedinContainer2.style.display = "block";
  linkedinContainer2.style.zIndex = "100000000";
});

closeLinkedin2.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer2.style.display = "none";
  linkedinContainer2.style.zIndex = "0";
});


var showLinkedinButton3 = document.getElementById("linkedin-3");
var linkedinContainer3 = document.getElementById("linkedin-container-3");
var closeLinkedin3 = linkedinContainer3.querySelector(".linkedin-close-3");

showLinkedinButton3.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer3);
  linkedinContainer3.style.display = "block";
  linkedinContainer3.style.zIndex = "100000000";
});

closeLinkedin3.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer3.style.display = "none";
  linkedinContainer3.style.zIndex = "0";
});

var showLinkedinButton4 = document.getElementById("linkedin-4");
var linkedinContainer4 = document.getElementById("linkedin-container-4");
var closeLinkedin4 = linkedinContainer4.querySelector(".linkedin-close-4");

showLinkedinButton4.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer4);
  linkedinContainer4.style.display = "block";
  linkedinContainer4.style.zIndex = "100000000";
});

closeLinkedin4.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer4.style.display = "none";
  linkedinContainer4.style.zIndex = "0";
});

var showLinkedinButton5 = document.getElementById("linkedin-5");
var linkedinContainer5 = document.getElementById("linkedin-container-5");
var closeLinkedin5 = linkedinContainer5.querySelector(".linkedin-close-5");

showLinkedinButton5.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer5);
  linkedinContainer5.style.display = "block";
  linkedinContainer5.style.zIndex = "100000000";
});

closeLinkedin5.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer5.style.display = "none";
  linkedinContainer5.style.zIndex = "0";
});

var showLinkedinButton6 = document.getElementById("linkedin-6");
var linkedinContainer6 = document.getElementById("linkedin-container-6");
var closeLinkedin6 = linkedinContainer6.querySelector(".linkedin-close-6");

showLinkedinButton6.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer6);
  linkedinContainer6.style.display = "block";
  linkedinContainer6.style.zIndex = "100000000";
});

closeLinkedin6.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer6.style.display = "none";
  linkedinContainer6.style.zIndex = "0";
});

var showLinkedinButton7 = document.getElementById("linkedin-7");
var linkedinContainer7 = document.getElementById("linkedin-container-7");
var closeLinkedin7 = linkedinContainer7.querySelector(".linkedin-close-7");

showLinkedinButton7.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer7);
  linkedinContainer7.style.display = "block";
  linkedinContainer7.style.zIndex = "100000000";
});

closeLinkedin7.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer7.style.display = "none";
  linkedinContainer7.style.zIndex = "0";
});



var showLinkedinButton8 = document.getElementById("linkedin-8");
var linkedinContainer8 = document.getElementById("linkedin-container-8");
var closeLinkedin8 = linkedinContainer8.querySelector(".linkedin-close-8");

showLinkedinButton8.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer8);
  linkedinContainer8.style.display = "block";
  linkedinContainer8.style.zIndex = "100000000";
});

closeLinkedin8.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer8.style.display = "none";
  linkedinContainer8.style.zIndex = "0";
});

var showLinkedinButton9 = document.getElementById("linkedin-9");
var linkedinContainer9 = document.getElementById("linkedin-container-9");
var closeLinkedin9 = linkedinContainer9.querySelector(".linkedin-close-9");

showLinkedinButton9.addEventListener("click", function() {
  document.body.appendChild(linkedinContainer9);
  linkedinContainer9.style.display = "block";
  linkedinContainer9.style.zIndex = "100000000";
});

closeLinkedin9.addEventListener("click", function() {
  // Hide the popup container and set its z-index back to 0
  linkedinContainer9.style.display = "none";
  linkedinContainer9.style.zIndex = "0";
});
