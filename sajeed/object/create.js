//Object.create()
const person = {
      isHuman:false,
      printIntroduction:function(){
        console.log(`my name is ${this.name}. Am I human? ${this.isHuman}`);
        }
      };
const me = Object.create(person);

me.name = "sajeed";
me.isHuman = true;// inherited properties can be overwritten
me.printIntroduction();