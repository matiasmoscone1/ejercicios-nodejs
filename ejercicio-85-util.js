/* util.inherits: Crea una clase que herede de otra utilizando util.inherits y demuestra 
cómo se pueden extender las funcionalidades de la clase base. */ 

const util = require("node:util");

class Auto{
    constructor(color, modelo, tipo, kilometros){
        this.color = color;
        this.modelo = modelo;
        this.tipo = tipo;
        this.kilometros = kilometros;
    }

    getKm(){
        console.log(`El auto tiene: ${this.kilometros}km`);
    }

    mejorarMotor(){
        this.kilometros -= 1000;
        console.log("Se le bajaron 1000km al motor");
    }
}

const auto = new Auto("White", 2018, "Camioneta", 46540);

auto.getKm();
auto.mejorarMotor();
auto.getKm();

class Motor{
    constructor(kilometros){
        this.kilometros = kilometros;        
    }
}

util.inherits(Motor, Auto);

const motor = new Motor(23705);

motor.getKm();
motor.mejorarMotor();
motor.getKm();



