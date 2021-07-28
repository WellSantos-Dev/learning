function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultados) {
        return resultados.json();
    })
    .then(function(json) {
        montarBlog(json);
    })

    .catch(function(error) {
        console.log("Deu problema.. :(");
    });
}

function montarBlog(list) {
    let html = '';

    for(let i in list){
        html += '<h3>'+list[i].title+'</h3>'
        html += list[i].body+'<br/>'
        html += '<hr/>'
    }

    document.getElementById("buto").innerHTML = html;
}