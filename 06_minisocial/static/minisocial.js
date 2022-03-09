const URL = 'http://127.0.0.1:3000/';
const SELECT_LISTA = document.getElementById('listaPensieri'); 

fetch(URL+"list").then(e => e.json()).then(json => {
		let opt = document.createElement('li');
        let thoughts = json.data;

        thoughts.forEach(thought => {
            opt.innerHTML = thought.thought;
            SELECT_LISTA.appendChild(opt);
        });
})