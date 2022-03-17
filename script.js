let cardSwpied = 1
let completeDuet=0
let usedValue=[]
let timeOut='end'
let Turns=0

function clickedCard(card) {
    card= new Cards(card,number['value'])
    card.getDuet()
    

}

function start(){
    // const start = new Game()
    // start.imagePlacement();
    
    number= document.querySelector('.selector')
    game= new Game(number['value'])
    game.suppDiv()

    
}


class Cards{
        constructor(card, numberOfCard){
            this.card=card
            this.numberOfCard=numberOfCard
            this.pastDuet=[]
            
        }

        getDuet(){
            console.log(this.card);
            if (this.isClickable(this.card)) {
                
                document.getElementById('card'+this.card['id']).style.display='block'
    
                if (cardSwpied==2) {
                    if (this.card==card1) {
                        
                    }else{
                        // console.log(this.card);
                             cardSwpied=1;
                            card2=this.card;
                            this.showcard(card1,card2);
                   
                    }
                    
                }else{
                    // console.log(this.card);
                        cardSwpied=2;
                        card1=this.card;
                        let Select1=  document.getElementById(card1["id"])
                        Select1.style.backgroundColor="grey"
                }
            }
            
        }

        showcard(card1,card2){
            console.log(card1);
            // console.log(card2);
           
            
            if (card1['textContent']==card2['textContent']) {
                console.log('oui');

                if (this.isNewDuet(card1)) {
                let firstCard=  document.getElementById(card1["id"])
                let secondCard=  document.getElementById(card2["id"])
                firstCard.style.backgroundColor="blue"
                secondCard.style.backgroundColor="blue"
                this.numberOdTurn()
                this.endGame()
                }
                
            }else{
                this.showCardTimer()
                this.numberOdTurn()
                
            }
        }

        showCardTimer(){
            timeOut='start';
         setTimeout(() => {
            let firstCard=  document.getElementById(card1["id"])
            let secondCard=  document.getElementById(card2["id"])
            firstCard.style.backgroundColor="white"
            secondCard.style.backgroundColor="white"
            document.getElementById('card'+card1["id"]).style.display='none'
            document.getElementById('card'+card2["id"]).style.display='none'
            timeOut='end';
            


         }, 500);
        }

        isClickable(card){
            console.log(timeOut);
            if (usedValue.includes(card['textContent'])) {
                return false
            }
            if(timeOut=='start'){
                return false
            }
            return true
        }


        isNewDuet(card){
            console.log(usedValue);
            if (usedValue.includes(card['textContent'])) {
                return false
            }
            usedValue.push(card['textContent'])
            return true
        }


        endGame(){
            completeDuet++
            if (completeDuet==(this.numberOfCard/2)) {
                console.log('FINI');
                window.alert('FINI');
                completeDuet=0
                let resetUsedValue =[]
                usedValue=resetUsedValue
            }
            console.log(completeDuet);
        }

        numberOdTurn(){
            Turns++
            let nbTurns=document.querySelector('.turns')
            nbTurns.textContent=Turns
            
           }
 
}


class Game {

        constructor(size){
            this.size= size;
            this.cardTable = [   
                    "😀","😀",
                    "😅","😅",
                    "🤩","🤩",
                    "🧙‍♂️","🧙‍♂️",
                    "🍻","🍻",
                    "💾","💾",
                    "💨","💨",
                    "🏳️‍🌈","🏳️‍🌈",
                    "🍺","🍺",
                    "🔮","🔮",
                    "🦄","🦄",
                    "👯‍♂️","👯‍♂️",
                    "🐰","🐰",
                    "🐎","🐎",
                    "🏴‍☠️","🏴‍☠️"]
        }



    


 

    suppDiv(){
       let cards=document.querySelectorAll('.card')
        // console.log(cards.length);
        for (let index = 0; index < cards.length; index++) {
            let card= document.querySelector('.card')
            card.remove()
           
        } 
        game.CreateDiv()
        ///////////////RAZ AU CAS OU///////////
        let resetUsedValue =[]
        usedValue=resetUsedValue
        completeDuet=0
        card1=[]
        card2=[]
        cardSwpied = 1
        Turns=0
    }

    
    CreateDiv(){

        let divToCreate=document.querySelector('.gameTable')

        for (let index = 0; index < this.size; index++) {
            const para = document.createElement("div");
            para.classList.add('card')
            para.setAttribute('onclick','clickedCard(this)')
            para.setAttribute('id',index)
            divToCreate.appendChild(para)
            
            const newDiv = document.createElement("div");
            newDiv.classList.add('hidden')
            newDiv.setAttribute('id','card'+index)
            newDiv.classList.add('card'+index)
      
            para.appendChild(newDiv)
            // console.log(taille);
        }
    game.dellExistingCard()
    game.imagePlacement()
    game.makeItDesepear()

        
    }

makeItDesepear(){
    for (let index = 0; index < this.size; index++) {
        
        document.getElementById('card'+index).style.display='none'
    }

}
    dellExistingCard(){
        var cards = [];
        cards = document.querySelectorAll('.card')
        // cards.remove();
      
    }

    SetArrayFromSize(size){
       let element=[];
            for (let i = 0; i < size; i++) {
                element[i] = i;
               
            } 
            return element;
    }



     RandomizedArray(){
       var Number = [];
       let arrayToRandomiz = this.SetArrayFromSize(this.size);
       let IndexRandomizee = 0;
       while (arrayToRandomiz.length>0) {
           var num = Math.floor(Math.random() * arrayToRandomiz.length);
           var roll = arrayToRandomiz.splice(num, 1);
            Number[IndexRandomizee] = roll[0];
            IndexRandomizee++;
       }
       return Number;  
   }
    
   imageSelector(){
       let randomIcon=[];
        let randomized=this.RandomizedArray();
        for (let i = 0; i < randomized.length; i++) {
            randomIcon[i]=this.cardTable[randomized[i]];
            
        }
        return randomIcon
   }

   imagePlacement(){
       let imagesArray =this.imageSelector()
        let i = 0;
       imagesArray.forEach(element => {
           document.getElementById('card'+i).innerHTML=(element);
           i++
       });

   }

   
      
 
}


class Timer{


}
