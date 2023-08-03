export default class Utils {

  static isCorrectAnswer(correct: string, typedVal: string){
    correct = correct.trim();
    typedVal = typedVal.trim();
    correct = this.removeAccents(correct.toLowerCase());
    typedVal = this.removeAccents(typedVal.toLowerCase());
    return correct === typedVal;
  }

  static removeAccents(text: string){
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  static clearTags(text: string){
    return text.replace(/<\/?[^>]+(>|$)/g, '');
  }

  static clearPharentesisContent(text: string){
    return text.replace(/ *\([^)]*\) */g, '');
  }

  static playSpeachText(text: string, lang: string = 'es-ES'){
    console.log(text);
    text = this.clearTags(text);
    text = this.clearPharentesisContent(text);

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speechSynthesis.speak(speech);
    return speech;
  }

  static playSound(fileName: string = 'correct'){
    const audio = new Audio();
    audio.src = '../../../assets/sounds/'+fileName+'.mp3';
    audio.load();
    audio.play();
  }

  static isEqualInCase(text1: string, text2: string): boolean{
    text1 = this.removeAccents(text1.trim());
    text2 = this.removeAccents(text2.trim());
    return text1 === text2;
  }

  static isEqualInAccents(text1: string, text2: string): boolean{
    text1 = text1.trim().toLowerCase();
    text2 = text2.trim().toLowerCase();
    return text1 === text2;
  }
}
