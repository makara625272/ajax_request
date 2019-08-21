const url ="https://jsonplaceholder.typicode.com/photos";
const syncronuos = true;
const method = "GET";
const ajax = new XMLHttpRequest();
ajax.open(method, url,syncronuos);
ajax.onload = () => {
    // const data = ajax.response; // it will display just simple text
    const data = JSON.parse(ajax.response);  // convert to json // ajax.reponse is the method 
    data.forEach(element => {
        const card = document.getElementById('card');
        if(element.id <= 10){
            card.innerHTML += `
            <div class = "card">
                <div class = " card-header">${element.title}</div>
                <div class = "card-body">
                    <img src =" ${element.url}" class = "img-fluid"/>
                </div>
            </div>
        `;
        }
       
    });
    // console.log(data);
}
ajax.send();