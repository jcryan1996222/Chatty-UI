const d0 = new Date();
const d1 = new Date().setSeconds(d0.getSeconds() + 10);
const d2 = new Date().setSeconds(d0.getSeconds() + 20);
const d3 = new Date().setSeconds(d0.getSeconds() + 30);
const d4 = new Date().setSeconds(d0.getSeconds() + 40);
const d5 = new Date().setSeconds(d0.getSeconds() + 50);

const chatMessages = [
  {
    id: 1,
    message: "First message!",
    createdAt: d0,
    author: "user_1",
  },
  {
    id: 2,
    message: "Hey, Buddy!",
    createdAt: d1,
    author: "user_2",
  },
  {
    id: 3,
    message: "How's it going?",
    createdAt: d2,
    author: "user_2",
  },
  {
    id: 4,
    message: "Not too bad. Been a long week--pretty glad it's over.",
    createdAt: d3,
    author: "user_1",
  },
  {
    id: 5,
    message: "How about you?",
    createdAt: d4,
    author: "user_2",
  },
  {
    id: 6,
    message: "Same",
    createdAt: d5,
    author: "user_1",
  },
];

module.exports = chatMessages;
