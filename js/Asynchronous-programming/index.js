// Function to simulate sending a message to a friend
function sendMessageToFriend() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = Math.random() > 0.5; // Simulating a random response
      if (response) {
        resolve("Friend: Hey there! What's up?");
      } else {
        reject("Friend: Busy right now, catch up later!");
      }
    }, 2000); // Simulating a delay of 2 seconds for the response
  });
}

// Using the Promise to send a message and handle responses
console.log("You: Sending a message to your friend...");

sendMessageToFriend()
  .then(response => {
    console.log(response);
    console.log("You: Great! Let's make plans for the weekend.");
  })
  .catch(error => {
    console.log(error);
    console.log("You: Okay, no worries. Talk to you later!");
  });
