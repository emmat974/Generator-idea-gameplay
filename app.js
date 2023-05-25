function random(chiffre) {
    let c = Math.floor(Math.random() * chiffre)
    return c == chiffre ? chiffre - 2 : c 
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

window.addEventListener("load", async (e) => {
    // On récupère la div
    var app = document.querySelector("#app")
    
    //On a récupérée nos data
    var data = await fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {  return jsonData })
        .catch(err => console.error(err))


    //On va mettre une action sur notre bouton
    var btnGenerator = document.querySelector("#btnGenerator")
    btnGenerator.addEventListener("click", (e) => {
        e.preventDefault()

        //On va récupérer des data de manière aléatoire.
        const type = data["typesDeJeu"][random(data["typesDeJeu"].length)]
        const univers =  data["univers"][random(data["univers"].length)]
        const idees = data["idees"][random(data["idees"].length)]

        let html = `<div id="types"> <h2> Type de jeu </h2> </div>
        <div class="response"> ${type} </div>
        <div id="univers"> <h2> Univers </div>
        <div class="response"> ${univers} </div>
        <div id="idees"> <h2> Idées </h2> </div>
        <div class="response"> ${idees} </div>
        `

        app.innerHTML = html
    })

    var btnModal = document.querySelector("#btnModal")
    btnModal.addEventListener("click", (e) => {
        e.preventDefault()

        openModal()
    })
})

