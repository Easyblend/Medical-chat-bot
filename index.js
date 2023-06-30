const question = document.querySelector(".question");
const question_field = document.querySelector(".user-question");
const answer_field = document.querySelector(".bot-answer");

const askquestion = async () => {
  const options = {
    method: "POST",
    url: "https://chatgpt53.p.rapidapi.com/",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "839ea37f2fmsh798b9b58e610d05p1de960jsn98c1f5d0d4d9",
      "X-RapidAPI-Host": "chatgpt53.p.rapidapi.com",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: question.value,
        },
      ],
      temperature: 1,
    }),
  };

  try {
    question_field.innerHTML = question.value;
    answer_field.innerHTML = "Loading..."; // Add a loading message while waiting for the response.
    const response = await fetch("https://chatgpt53.p.rapidapi.com/", options);
    const data = await response.json();

    if (data.choices[0].message.content.length > 0) {
      const botResponse = data.choices[0].message.content;
      answer_field.innerHTML = botResponse;
    } else {
      answer_field.innerHTML = "No response from the bot.";
    }
    // Get the bot's response from the API data and update the answer_field.
  } catch (error) {
    console.log(error);
    answer_field.innerHTML = "An error occurred. Please try again.";
  }
};
