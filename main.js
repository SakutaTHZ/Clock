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


const counter = ()=>{
    setInterval(()=>{
        const inputValue = Math.floor(Math.random() * 10);
    
        if (clockFace.hasOwnProperty(inputValue)) {
            const selectedObject = clockFace[inputValue];
            
            setTimeout(() => {
                setData(selectedObject)
            }, 100);
        } else {
            console.log(`Object with key "${inputValue}" not found`);
        }
    }, 1000)
}

const setData = (data)=>{
    data.handc?document.querySelector('.handc').classList.add('on'):document.querySelector('.handc').classList.remove('on')
    data.hand1?document.querySelector('.hand1').classList.add('on'):document.querySelector('.hand1').classList.remove('on')
    data.hand2?document.querySelector('.hand2').classList.add('on'):document.querySelector('.hand2').classList.remove('on')
    data.hand3?document.querySelector('.hand3').classList.add('on'):document.querySelector('.hand3').classList.remove('on')
    data.hand4?document.querySelector('.hand4').classList.add('on'):document.querySelector('.hand4').classList.remove('on')
    data.hand5?document.querySelector('.hand5').classList.add('on'):document.querySelector('.hand5').classList.remove('on')
    data.hand6?document.querySelector('.hand6').classList.add('on'):document.querySelector('.hand6').classList.remove('on')
    
}

counter()