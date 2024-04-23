let clockFace = {
    "1" : {
        "handc":false,
        "hand1":false,
        "hand2":true,
        "hand3":true,
        "hand4":false,
        "hand5":false,
        "hand6":false,
    },
    "2" : {
        "handc":true,
        "hand1":true,
        "hand2":true,
        "hand3":false,
        "hand4":true,
        "hand5":true,
        "hand6":false,
    },
    "3" : {
        "handc":true,
        "hand1":true,
        "hand2":true,
        "hand3":true,
        "hand4":true,
        "hand5":false,
        "hand6":false,
    },
    "4" : {
        "handc":true,
        "hand1":false,
        "hand2":true,
        "hand3":true,
        "hand4":false,
        "hand5":false,
        "hand6":true,
    },
    "5" : {
        "handc":true,
        "hand1":true,
        "hand2":false,
        "hand3":true,
        "hand4":true,
        "hand5":false,
        "hand6":true,
    },
    "6" : {
        "handc":true,
        "hand1":true,
        "hand2":false,
        "hand3":true,
        "hand4":true,
        "hand5":true,
        "hand6":true,
    },
    "7" : {
        "handc":false,
        "hand1":true,
        "hand2":true,
        "hand3":true,
        "hand4":false,
        "hand5":false,
        "hand6":false,
    },
    "8" : {
        "handc":true,
        "hand1":true,
        "hand2":true,
        "hand3":true,
        "hand4":true,
        "hand5":true,
        "hand6":true,
    },
    "9" : {
        "handc":true,
        "hand1":true,
        "hand2":true,
        "hand3":true,
        "hand4":true,
        "hand5":false,
        "hand6":true,
    },
    "0" : {
        "handc":false,
        "hand1":true,
        "hand2":true,
        "hand3":true,
        "hand4":true,
        "hand5":true,
        "hand6":true,
    }
}

let second2 = 0
let second1 = 0
let minute2 = 0
let minute1 = 0
const counter = ()=>{
    setInterval(()=>{
        second2++
        const inputValue = second2%10;
    
        if (clockFace.hasOwnProperty(inputValue)) {
            const selectedObject = clockFace[inputValue];
            
            setTimeout(() => {
                setData("Second2",selectedObject)
                if(inputValue == 0){
                    second1++
                    if(second1 == 6){
                        second1 = 0
                        setData("Second1",clockFace[second1])
                    }else{
                        setData("Second1",clockFace[second1])
                    }
                }
            }, 100);
        } else {
            console.log(`Object with key "${inputValue}" not found`);
        }
    }, 1000)
}

const setData = (boxname,data)=>{
    data.handc?document.querySelector(`.${boxname}>.handc`).classList.add('on'):document.querySelector(`.${boxname}>.handc`).classList.remove('on')
    data.hand1?document.querySelector(`.${boxname}>.hand1`).classList.add('on'):document.querySelector(`.${boxname}>.hand1`).classList.remove('on')
    data.hand2?document.querySelector(`.${boxname}>.hand2`).classList.add('on'):document.querySelector(`.${boxname}>.hand2`).classList.remove('on')
    data.hand3?document.querySelector(`.${boxname}>.hand3`).classList.add('on'):document.querySelector(`.${boxname}>.hand3`).classList.remove('on')
    data.hand4?document.querySelector(`.${boxname}>.hand4`).classList.add('on'):document.querySelector(`.${boxname}>.hand4`).classList.remove('on')
    data.hand5?document.querySelector(`.${boxname}>.hand5`).classList.add('on'):document.querySelector(`.${boxname}>.hand5`).classList.remove('on')
    data.hand6?document.querySelector(`.${boxname}>.hand6`).classList.add('on'):document.querySelector(`.${boxname}>.hand6`).classList.remove('on')
    
}

counter()