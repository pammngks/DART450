// Load the data from the external JSON file
$.getJSON('../data/data.json', gotData);

// FUNCTION: Display a random person and task count in the leaderboard section
  function gotData(data) {
    // Get a first name
    var first1 = getRandomElement(data.firstName);
    var first2 = getRandomElement(data.firstName);
    var first3 = getRandomElement(data.firstName);
    var first4 = getRandomElement(data.firstName);
    // Get a last name
    var last1 = getRandomElement(data.lastName);
    var last2 = getRandomElement(data.lastName);
    var last3 = getRandomElement(data.lastName);
    var last4 = getRandomElement(data.lastName);
    // Get a task count
    var task1 = getRandomElement(data.taskCount);
    var task2 = getRandomElement(data.taskCount);
    var task3 = getRandomElement(data.taskCount);
    var task4 = getRandomElement(data.taskCount);

    $('.user1').text(first1 + " " + last1);
    $('.user2').text(first2 + " " + last2);
    $('.user3').text(first3 + " " + last3);
    $('.user4').text(first4 + " " + last4);
    $('.points1').text(task1);
    $('.points2').text(task2);
    $('.points3').text(task3);
    $('.points4').text(task4);
    $('.opponent').text(task3);

    console.log('Leaderboard has loaded.');

    // Get random elements every time the page loads
    function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Increase the opponent count by 1 every 2 minutes
  var i = task3;
  var interval = setInterval(increment,120000);
  function increment(){
    // Increase task3 by 1
    i++;
    // Display new number in challenge section
    $('.opponent').text(i);
    // Display new number in leaderboard section
    $('.points3').text(i);
    console.log('Opponent is being productive.');
  }

};
