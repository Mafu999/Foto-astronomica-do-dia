var botaoPesquisa = jQuery('#pesquisa').click(function(){
    console.log('Botão funfando')
    sendApi()
})

async function sendApi(){
    var ocorrencia = document.querySelector('#data').value
    var request = $.ajax({
        'url': 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
        'data': {
            'api_key': 'bEh3KqbXy1gDbDL9TKTfUHa1wA9y8JL0061hifK2',
            'date': ocorrencia,
        },
        'success': function(response){
                document.querySelector('#content').innerHTML = `<h1>${response.title}</h1>
                                                                <img src="${response.hdurl}">
                                                                <p>${response.explanation}</p>
                                                                `
        }
    })
    console.log(request)
    
}

function apiConteudo(data){
    var ocorrencia = data.date
    ocorrencia
        
    
}