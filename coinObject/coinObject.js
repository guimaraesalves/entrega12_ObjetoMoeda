const coin = {
    state: 0,

    flip: function () {        
        this.chosenValue = Math.floor(2 * Math.random() + 1);  
        
            
    },

    toString: function (){
        if (this.chosenValue === 1){
            return "Heads";
        }
        if (this.chosenValue === 2){
            return "Tails"
        }
    },

    toHTML: function () {

        let imageCara = document.createElement("img");
        imageCara.src = "./coinObject/images/cara100px.png";
        imageCara.alt = "Heads";

        let imageCoroa = document.createElement("img");
        imageCoroa.src = "./coinObject/images/coroa100px.png";
        imageCoroa.alt = "Tails";



        if (this.toString() === "Heads"){             
            document.body.appendChild(imageCara);           
        }
        
        if (this.toString() === "Tails"){            
            document.body.appendChild(imageCoroa);           
        }
        
    }    
}




//Hora de jogar a moeda;

function display20Flips() {
    let titulo1 = document.createElement("p");
    titulo1.innerHTML = "Sorteio do Array.";
    titulo1.style.background = "#4777ad"
    titulo1.style.color = "white";
    titulo1.style.fontSize = "30px";
    titulo1.style.textAlign = "center";
    document.body.appendChild(titulo1);  


    const results = [];
    //use um loop para arremessar a moeda 20 vezes;
    for (let i = 0; i < 20; i ++){
        coin.flip();
        results.push(coin.toString());
    }
    const exibeString = document.createElement("div");
    exibeString.innerText = results;
    document.body.appendChild(exibeString);

    return results
}



function display20Images(){
    let titulo = document.createElement("p");
    titulo.innerHTML = "Sorteio das Imagens.";
    titulo.style.background = "#4777ad"
    titulo.style.color = "white";
    titulo.style.fontSize = "30px";
    titulo.style.textAlign = "center";
    document.body.appendChild(titulo);    
    
    const results = [];
    for (let i = 0; i < 20; i ++){
        coin.flip();
        
        results.push(coin.toString);
        if(coin.toString() === "Heads"){
            coin.toHTML(this.imageCara)
            
        }
        if(coin.toString() === "Tails"){
            coin.toHTML(this.imageCoroa)
            
        }
        
    }

    return results;

}

function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("GERAR");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
         display20Flips();
         display20Images();
     }
     
     document.body.appendChild(btn); 
     btn.style.background = "#ba9f3c";  
     btn.style.width = "100px" ;
     btn.style.height = "30px";
     btn.style.marginTop = "30px";
     btn.style.marginLeft = "50%";
}

createButton();


