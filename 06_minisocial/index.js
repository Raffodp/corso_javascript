console.log("Thoughts started!");

// TODOs del Thoughts
// 1. TODO fare un frontend che mostri sempre due cose: 1 form di inserimento di un pensiero (1 testo) e una lista dei pensieri precedentemente inseriti (in ordine INVERSO di inserimento)
// 2. TODO fare un backend che implementi le seguenti operazioni:
// 3. TODO list (dei pensieri)
// 4. TODO create pensiero
// 5. TODO delete pensiero
// 6. TODO mostrare un gradimento (numero) del pensiero
// 7. TODO gestire l'aggiunta di un +1 al gradimento di un pensiero
// 8. TODO gestire un selettore di cambio ordinamento lista che consente di mostrare la list in due modi (ordine temporale INVERSO oppure GRADIMENTO DISCENDENTE)


const fs = require('fs');
const express = require('express');
const app = express();
const port = 10001;

app.get('/login', (req, res) => {

	let robj = {
		  "result":0,
		  "message":"welcome, you are logged in",
		  "data":[]
	  };
	  
	  try{
  
		  if(typeof req.query.nickname === 'undefined' || req.query.nickname =='' ||
		     typeof req.query.password === 'undefined' || req.query.password =='') throw('formato invalido required in GET');

  
		  let s = fs.readFileSync('user.json', 'utf8');
		  let sobj = JSON.parse(s);
		  let found = false;

		 for (li=0; li<sobj.length; li++){
			 if((sobj[li].nickname == req.query.nickname)&& (sobj[li].password == req.query.password)){
				 found =true;
				 break;
			 }
		 }
		 if(!found) throw('user not found');

	  } catch(err){
		  robj.result = 10000;
		  robj.message = err.toString();
	  }
	  let s= JSON.stringify(robj);
	  res.send(s);
  });


app.listen(port, () => {
	console.log(`Thoughts app listening on port ${port}`);
});