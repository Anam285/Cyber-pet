
class pet {
    constructor (name,age){
        this.Name=name;
        this.Age=age;
        this.hunger=50;
        this.bored=50;
        this.energy=50;
        this.sleepy=50;
        this.liskes=50;


    }
    get nameAge(){
        return `your pet is ${this.Name} and ${this.Age}`;
    }

    health(){
        if (this.Age <= 5){
            return 100;
        }else if (this.Age > 5 && this.Age <=10){
            return  50;
        }else {
            return 10;
        }
    }


    feed(){
        return[this.hunger -=3,
        this.energy +=3,
        this.sleepy +=2,
        this.bored +=3,
        this.liskes+=1,]
        
    }
    sit(){
        return[this.hunger +=1,
            this.energy +=1,
            this.sleepy -=2,
            this.bored +=5,
            this.liskes-=1] 
    }

    walk(){
        return[this.hunger +=1,
            this.energy -=2,
            this.sleepy +=1,
            this.bored -=5,
            this.liskes+=1] 
    }

    leap(){        
        return[this.hunger +=2,
        this.energy -=2,
        this.sleepy -=1,
        this.bored -=10,
        this.liskes +=1]

    }


}

const buttons = document.getElementById("nameButton");
const callButton =document.querySelector('#callButton');
const sitButton =document.querySelector('#sitButton');
const leapButton =document.querySelector('#leapButton');
const feedButton =document.querySelector('#feedButton');

const catContainer = document.querySelector('.contain');
const catanime= document.querySelector('.cat')

const show = document.querySelector('.content');
const showhunger = document.querySelector('.pethunger')


let healthBar= document.querySelector('#health');
let energyBar= document.querySelector('#energy');
let hungerBar= document.querySelector('#hunger');
let sleepBar= document.querySelector('#sleep');
let boreBar= document.querySelector('#bored');
let likeBar= document.querySelector('#like');
let statBar= [hungerBar,energyBar, sleepBar,boreBar,likeBar]





function aboutPet(){
    function nam(){
        return (document.querySelector('#petfName').value)
    }

    function ages(){
        return (document.querySelector('#petnAge').value)
    }
    let names=nam()
    let petage = ages()
    return new pet(names,petage)
}


cat = aboutPet();
buttons.addEventListener('click', () => {
    cat =aboutPet();
    show.textContent = `HI I'm ${cat.Name} ! Nice to meet you.`
    healthBar.value = cat.health();

   })


callButton.addEventListener('click',()=>{
    
    stats = cat.walk();
    show.textContent ="Please wait for me to finish walking"

    for(let i = 0 ; i < statBar.length; i++){
        statBar[i].value = stats[i]
    }

    


    catanime.classList.remove('position')
    catanime.classList.remove('catSit')
    catContainer.classList.add('move');
    catanime.classList.add('catMove')
    setTimeout(()=>{
        catContainer.classList.remove('move')
        catanime.classList.remove('catMove')
        catanime.classList.add('position')
       

        
    },4000)
    


})



sitButton.addEventListener('click',()=>{
    stats = cat.sit();
    

    for(let i = 0 ; i < statBar.length; i++){
        statBar[i].value = stats[i]
    }
    
   
    catContainer.classList.remove('move');
    catanime.classList.remove('catMove')
    catanime.classList.add('catSit')

    setTimeout(()=>{
        show.textContent = "I am starting to get Bored"
    },1000)
   
    
})
leapButton.addEventListener('click',()=>{
    stats = cat.leap();
    show.textContent = "let me show you how high I can go!!!"

    for(let i = 0 ; i < statBar.length; i++){
        statBar[i].value = stats[i]}


    catanime.classList.remove('catSit')
    catContainer.classList.add('cat-leap');
    catanime.classList.add('leap');
    setTimeout(()=>{
        catContainer.classList.remove('cat-leap')
        catanime.classList.remove('leap')
        catanime.classList.add('position')

        
    },3500)
   

    
})

feedButton.addEventListener('click', ()=>{
    stats = cat.feed();
    
    show.textContent = "Thank you for feeding me!"
    for(let i = 0 ; i < statBar.length; i++){
        statBar[i].value = stats[i]}

    
})



function bored(){
    if (statBar[3].value>=100){
        show.textContent ="I am bored";
    }
    else{
        showhunger.textContent ="";

    }
}

setInterval(()=>{
    for(let i = 0 ; i < statBar.length; i++){
        if (i == 0 || i == 3){
            bored()
            statBar[i].value++
        }else{
            statBar[i].value--
        }}
    
    },300)

   
