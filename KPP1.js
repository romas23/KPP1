 var b,k
    const readlineSync = require('readline-sync');
        function RND(a,b) {
            return Math.floor(Math.random()*(b-a+1)+a);
        }
        function Make() {
            var s = '';
            for (var i = 0; i < 4; i++){
                do{
                    var c = RND(0,9);
                }
               while (s.indexOf(c)>=0) {
                s=s+c;
                }
            }
            return s;
        }
        function Analizy(make,attempt) {
            b=0;
            k=0;
            for (var i = 0; i < 4; i++){
                if (make[i]==attempt[i]) {
                    b++;
                }
                else
                if(make.indexOf(attempt[i])>=0){
                    k++;
                }
            }
        }
       var m=Make();
       for (var i = 0; i < 10; i++) {
           const c = readlineSync.question("Enter number: ")
           Analizy(m,c)
           var s=c+" "+b+"Б "+k+"K";
            console.log(s+" ");
            if (c==m) {
                alert("You win")
                break
            }
       }
       
       console.log("Number:"+m)
       
       
