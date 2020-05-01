let paragra=["All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.","The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.","Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you.","The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence.","Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.","He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and again tried to imagine it was the first time."]
const root=document.getElementById("teext")
const restart=document.getElementById("reest")
const txt=document.getElementById("txt")
const textinput=document.getElementById("texinput")
const timer=document.getElementById("timer")
var arraytxt=true
var paarray
var T1
var T2
var date1
var DD
var min
var sec
var inter
var inter1
var tempresult
var totalms=0
function refrech() {
    let paragraph=paragra[Math.floor(Math.random()*paragra.length)]
    paarray=paragraph.split("")
    root.innerHTML = ''
    paarray.forEach(character => {
      const characterSpan = document.createElement('span')
      characterSpan.innerText = character
      root.appendChild(characterSpan)
    })
    txt.value=null
    textinput.classList.add('texinput')
    textinput.classList.remove('incorrect')
    textinput.classList.remove("correct")
    arraytxt=true
    totalms=0
}

function refrech1() {
  location.reload()
}

function keyf(e) {
    arraytxt=txt.value.split("")
    tempresult=0
    for (let i = 0; i < arraytxt.length; i++) {
        if (arraytxt[i]!=paarray[i]) {
            tempresult=false
            break
        }
        else{
            tempresult=true
        }
    }
    if (tempresult===true ) {
        textinput.classList.add("correct")
        textinput.classList.remove("incorrect")
        textinput.classList.remove("texinput")
        textinput.classList.remove("final")
    }
    else if (tempresult===0) {
        textinput.classList.add('texinput')
        textinput.classList.remove('incorrect')
        textinput.classList.remove("correct")
        textinput.classList.remove("final")
        correct=false
    }
    else{
        textinput.classList.remove('correct')
        textinput.classList.add('incorrect')
        textinput.classList.remove("texinput")
        textinput.classList.remove("final")
    }
    console.log(tempresult)
    const rootarray = root.querySelectorAll('span')
    rootarray.forEach((characterSpan, index) => {
      const character = arraytxt[index]
      if (character == null) {
        characterSpan.classList.remove('correctpara')
        characterSpan.classList.remove('incorrectpara')
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correctpara')
        characterSpan.classList.remove('incorrectpara')
      } else {
        characterSpan.classList.remove('correctpara')
        characterSpan.classList.add('incorrectpara')
      }
    })
    if ( arraytxt.length===paarray.length && tempresult===true ) {
      textinput.classList.remove("correct")
      textinput.classList.remove("incorrect")
      textinput.classList.remove("texinput")
      textinput.classList.add("final")
      clearInterval(inter)
      clearInterval(inter1)
      console.log("heeere")
      txt.setAttribute("readonly","")
      setInterval(tgl,500)
    }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

refrech()
restart.addEventListener("click",refrech1,true)
txt.addEventListener("input",keyf,false)
inter1=setInterval(setTime,10)

function setTime() {
  if ( arraytxt===true ) {
    T1 = new Date()
    date1= (T1.getHours()*60*60*1000)+(T1.getMinutes()*60*1000)+(T1.getSeconds()*1000)+T1.getMilliseconds()
    timer.innerText="00:00:00"
  }
  else{
    T2 = new Date()
    DD=((T2.getHours()*60*60*1000)+(T2.getMinutes()*60*1000)+(T2.getSeconds()*1000)+T2.getMilliseconds())-date1
    min=DD/60000
    sec=(DD-min)/1000
    ++totalms;
    if (totalms===100) {
      totalms=0
    }
    timer.innerText= pad(parseInt(min))+':'+pad( parseInt(sec %60))+':'+pad(totalms)
      
  }  
}

function pad(val) {
var valString = val + "";
if (valString.length < 2) {
  return "0" + valString;
} else {
  return valString;
}
}
function tgl() {

  if (timer.hasAttribute("style")!=true) {
    timer.setAttribute("style","display:none;")
  }
  else{
    timer.removeAttribute("style")
  }
}
