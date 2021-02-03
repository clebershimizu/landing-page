import Tempo from "../tempo"

async function tempo(request, response){

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const apiToken = process.env.CONVERTKIT_API_TOKEN;

  const dynamicDate = new Date();
  const trelloResponse = await fetch(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`);
  const trelloBoards = await fetch(`https://api.trello.com/1/members/me/boards?fields=name,url&key=${apiKey}&token=${apiToken}`);

  response.setHeader('Cache-Control','s-maxage=10, stale-while-revalidate');
  response.json({
    date: dynamicDate.toGMTString(),
    trello: trelloResponse,
    boards: trelloBoards
  });
  response.trelloResponse;
};
export default tempo;