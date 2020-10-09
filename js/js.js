function Temperture(c) {
    this.c=c;

    this.getF=function (){
        let f=((9/5)*this.c)+32;
        return f;
    }
    this.getK=function (){
        let k=this.c+273.15
        return k;
    }

}
let c1= new Temperture(25);
let f = c1.getF();
let k = c1.getK();
alert('do F: '+f +' do K: ' +k);