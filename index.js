class Formatter {
  //add static methods here
   static capitalize(string) {
       return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
   static titleize(sentence) {
    // if(sentence.includes("the"|| "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "and" || "from")) {
    //   return 
    // } else {
    //   return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    // }
    let splitSentence = sentence.split(' ')
    for(let i = 0; i < splitSentence.length; i++) {
      let the ="the"
      if(splitSentence[i].includes("the"|| "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "and" || "from")) {
        splitSentence[i] = splitSentence[i].toLowerCase()
        console.log(splitSentence[i].includes("the"|| "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "and" || "from"))
      } else {
        splitSentence[i] = splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1)
        console.log(splitSentence[i])
      }
    }
    console.log(splitSentence)
    return splitSentence.join(" ")
  }
}

let sentence = Formatter.titleize("I am the boss")
// console.log(sentence)

