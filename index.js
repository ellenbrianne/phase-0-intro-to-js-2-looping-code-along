const thankYouMessage = [];

function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    let message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;

    thankYouMessage.push(message);
  };

  return thankYouMessage;
};

let count = 10

function countDown(count) {
    while (count >= 0) {
    console.log(count--);
    };
};

console.log(countDown(count));