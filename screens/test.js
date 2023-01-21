function deutchTranslator(deutch){
    const dictionary = {
        "Hallo": "Hello",
        "Wie geht es dir?": "How are you?",
        "Auf Wiedersehen": "Goodbye",
        "Danke": "Thank you",
        "Entschuldigung": "Excuse me"
    }
    let map = new Map();
    let dictKeys = Object.keys(dictionary);
    let dictValues = Object.values(dictionary);
    for(let i = 0; i < dictKeys.length; i++){
       if(!map.has(dictKeys[i])){
        map.set(dictKeys[i], dictValues[i]);
       }
    }
    let splitedArr = deutch.split(" ");
    let i = 0;
    for(let [keys, values] of map.entries()){
       
    }
    return splitedArr.join(" ");
 }

deutchTranslator("Hallo Wie geht es dir? Auf Wiedersehen")