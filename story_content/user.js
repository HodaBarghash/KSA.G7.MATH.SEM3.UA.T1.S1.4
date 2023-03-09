function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NN31yCEykF":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwachiR5pEt5EhU2uRuSQW2fMSRY9gWH5nSAy1I8tci83KygbdUJ6Y1Lh2j54U7P0Q_VA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

