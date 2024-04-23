let clockFace = {
  1: {
    handc: false,
    hand1: false,
    hand2: true,
    hand3: true,
    hand4: false,
    hand5: false,
    hand6: false,
  },
  2: {
    handc: true,
    hand1: true,
    hand2: true,
    hand3: false,
    hand4: true,
    hand5: true,
    hand6: false,
  },
  3: {
    handc: true,
    hand1: true,
    hand2: true,
    hand3: true,
    hand4: true,
    hand5: false,
    hand6: false,
  },
  4: {
    handc: true,
    hand1: false,
    hand2: true,
    hand3: true,
    hand4: false,
    hand5: false,
    hand6: true,
  },
  5: {
    handc: true,
    hand1: true,
    hand2: false,
    hand3: true,
    hand4: true,
    hand5: false,
    hand6: true,
  },
  6: {
    handc: true,
    hand1: true,
    hand2: false,
    hand3: true,
    hand4: true,
    hand5: true,
    hand6: true,
  },
  7: {
    handc: false,
    hand1: true,
    hand2: true,
    hand3: true,
    hand4: false,
    hand5: false,
    hand6: false,
  },
  8: {
    handc: true,
    hand1: true,
    hand2: true,
    hand3: true,
    hand4: true,
    hand5: true,
    hand6: true,
  },
  9: {
    handc: true,
    hand1: true,
    hand2: true,
    hand3: true,
    hand4: true,
    hand5: false,
    hand6: true,
  },
  0: {
    handc: false,
    hand1: true,
    hand2: true,
    hand3: true,
    hand4: true,
    hand5: true,
    hand6: true,
  },
};

let second2 = 0;
let second1 = 0;
let minute2 = 0;
let minute1 = 0;
let hour2 = 0;
let hour1 = 0;
const counter = () => {
  setInterval(() => {
    second2++;
    const inputValue = second2 % 10;

    if (clockFace.hasOwnProperty(inputValue)) {
      const selectedObject = clockFace[inputValue];

      setTimeout(() => {
        setData("Second2", selectedObject);
        if (inputValue == 0) {
          second1++;
          if (second1 == 6) {
            second1 = 0;
            minute2++;
            if (minute2 % 10 == 0) {
              minute1++;
              minute2 = 0;
              if (minute1 == 6) {
                minute1 = 0;
                hour2++;
                if (hour2 % 10 == 0) {
                  hour1++;
                  hour2 = 0;
                  if (hour1 == 9) {
                    second2 = 0;
                    second1 = 0;
                    minute2 = 0;
                    minute1 = 0;
                    hour2 = 0;
                    hour1 = 0;
                  }
                  setData("Hour1", clockFace[hour1]);
                }
                setData("Hour2", clockFace[hour2]);
              }
              setData("Minute1", clockFace[minute1]);
            }
            setData("Minute2", clockFace[minute2]);
          }
          setData("Second1", clockFace[second1]);
        }
      }, 30);
    } else {
      console.log(`Object with key "${inputValue}" not found`);
    }
    console.log(second2);
  }, 1000);
};

const setData = (boxname, data) => {
  data.handc
    ? document.querySelector(`.${boxname}>.handc`).classList.add("on")
    : document.querySelector(`.${boxname}>.handc`).classList.remove("on");
  data.hand1
    ? document.querySelector(`.${boxname}>.hand1`).classList.add("on")
    : document.querySelector(`.${boxname}>.hand1`).classList.remove("on");
  data.hand2
    ? document.querySelector(`.${boxname}>.hand2`).classList.add("on")
    : document.querySelector(`.${boxname}>.hand2`).classList.remove("on");
  data.hand3
    ? document.querySelector(`.${boxname}>.hand3`).classList.add("on")
    : document.querySelector(`.${boxname}>.hand3`).classList.remove("on");
  data.hand4
    ? document.querySelector(`.${boxname}>.hand4`).classList.add("on")
    : document.querySelector(`.${boxname}>.hand4`).classList.remove("on");
  data.hand5
    ? document.querySelector(`.${boxname}>.hand5`).classList.add("on")
    : document.querySelector(`.${boxname}>.hand5`).classList.remove("on");
  data.hand6
    ? document.querySelector(`.${boxname}>.hand6`).classList.add("on")
    : document.querySelector(`.${boxname}>.hand6`).classList.remove("on");
};

counter();
