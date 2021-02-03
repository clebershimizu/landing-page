import Tempo from "../tempo"

async function tempo(request, response){

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const apiToken = process.env.CONVERTKIT_API_TOKEN;
  //conts apiToken
  const dynamicDate = new Date();
  const trelloResponse = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`);
  

  response.json({
    date: dynamicDate.toGMTString(),
    trello: trelloResponse
  });
}

export default tempo;