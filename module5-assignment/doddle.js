function (window) {
    let byeSpeaker = {}
    const speakWord = "Good Bye";
    byeSpeaker.speak = function speak (name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
}) (window);

(function (window) {
    let helloSpeaker = {}
    const speakWord = "Hello"
    helloSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker
})(window);

(function () {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (let i = 0, l = names.length; i < l; i++) {
        let firstLetter = names[i].charAt(0).toLowerCase()
            if (firstLetter.charAt(0) === "j") {
                byeSpeaker.speak(names[i])
            } else {
                helloSpeaker.speak(names[i])
            }
    }
}) ()