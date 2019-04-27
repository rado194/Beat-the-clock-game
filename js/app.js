document.addEventListener("DOMContentLoaded",function() {


  // ================ DOM Elements =================
  const wordInput = $("#word_input");
  const currentWord = $("#current-word");
  const timeDisplay = $("#time");
  const message = $("#message");
  const seconds = $("#seconds");


  //================= Globals ======================
  var scoreDisplay = $("#score");
  var score = 0;
  var isPlaying;
  var checkInterval;
  var countDownInterval;
  var currentTime = 6;
  var highScore = 0;
  var maxTime;

  //================ Levels ========================

  $("#easy").click(easy);
  $("#medium").click(medium);
  $("#redbull").click(redbull);

  function easy() {
    console.log("easy");
    maxTime = 4;
    seconds.html(maxTime);
    timeDisplay.html(maxTime);
  }

  function medium() {
    maxTime = 2;
    seconds.html(maxTime);
    timeDisplay.html(maxTime);
  }

  function redbull() {
    maxTime = 1;
    seconds.html(maxTime);
    timeDisplay.html(maxTime);
  }

  // ============== Functions after "Start" =========================

  $("#begin").click(function() {
    console.log("works");
    $("#begin").hide();


  // ================= WORDS ======================
  var words = [
        "hat",
        "river",
        "lucky",
        "statue",
        "generate",
        "stubborn",
        "cocktail",
        "runaway",
        "joke",
        "developer",
        "establishment",
        "hero",
        "javascript",
        "nutrition",
        "revolver",
        "echo",
        "siblings",
        "investigate",
        "horrendous",
        "symptom",
        "laughter",
        "magic",
        "master",
        "space",
        "definition",
        "jake",
        "sparta",
        "isharq",
        "gayan",
        "nish",
        "matt",
        "joel",
        "patrick",
        "iridocyclitis",
        "force",
        "problem",
        "last",
        "love",
        "rain",
        "why",
        "form",
        "possible",
        "drive",
        "heard",
        "better",
        "listen",
        "big",
        "their",
        "picture",
        "power",
        "more",
        "dog",
        "front",
        "king",
        "during",
        "same",
        "vodka",
        "rakia",
        "whiskey",
        "vodbull"
    ];


  ingame();

  // ================ Initialise Game ==================
  function ingame(){
    // Event listener for reset click
    $(document).find("#reset").on('click', function(){
      $(document).find("#begin").show();
      $(document).find("#reset").hide();

      $(document).find("#word_input").val('');
      $(document).find("#img").hide();

      $(document).find("#message").hide();
      currentTime = maxTime;
      });

    // Show number of seconds in UI
    seconds.html(currentTime);
    timeDisplay.html(currentTime);
    // Load word from array
    showWord(words);
    // Start matching on input
    wordInput.keyup(startMatch);
    // Call countdown every second
    countDownInterval = setInterval(countdown, 1000);
    // Check game status
    checkInterval = setInterval(checkStatus, 50);

  }


  // ================ Start match ==================
  function startMatch() {
    if (matchWords()) {
      isPlaying = true;
      currentTime = maxTime;
      showWord(words);
      wordInput.val("");
      score++;
    }

    // If score -1, display 0
    if (score === -1) {
      scoreDisplay.html(0);
    } else {
      scoreDisplay.html(score);
      console.log("resulz");
      }
  }

  // Match currentWord to wordInput
  function matchWords() {
    message.show();
    if (wordInput.val() == currentWord.html()) {
      message.html("correct!!!");
      return true;
    } else {
      message.html("");
      return false;
      }
    }

  // ============== Generating the words =============
      // Pick & Show random word
  function showWord(words){
      // Generate Random array index
    const randIndex = Math.floor(Math.random() * words.length);
      // Output a random word
    currentWord.html(words[randIndex]);
    };


  // ================= Coundown ===================
  // Coundown timer
  function countdown(){
  // Make sure time is not run out
    if (currentTime > 0) {
  // Decrement
        currentTime--;
    }
    else if (currentTime === 0){
  // Game is over
        isPlaying = false;
      }
  // Show currentTime
       timeDisplay.html(currentTime);
  };

  // Check game status
  function checkStatus() {
    if (!isPlaying && currentTime === 0) {
      message.show();
      console.log(score);
      // =====================High Score========================
      if(score > highScore){
        highScore = score;
        $("#highsc").html("<h3>High Score: " + highScore + "</h3>");
      }
      // $(document).find("#score")("New high score is: " + highScore);
      // localStorage.setItem("highScore", "topScore");
      // console.log(localStorage.getItem("highScore"));

      message.html("Game over !!!");
      score = -1;
      $('#img').show();
      $('#pop').get(0).play();
      //$("#reset").show()
      clearInterval(checkInterval);
      clearInterval(countDownInterval);

      $(document).find("#reset").show();

      }
    }
  })
  });
