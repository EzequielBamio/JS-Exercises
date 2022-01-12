class InputDevice {

    constructor(type, brand) {
        this._typeEntry = type;
        this._brand = brand;
    }

    get typeEntry() {
        return this._typeEntry;
    }
    set typeEntry(type) {
        this._typeEntry = type;
    }

    get brand() {
        return this._brand;
    }
    set typeEntry(brand) {
        this._brand = brand;
    }
}

class Mouse extends InputDevice {
    static countMouses = 1;
    constructor(type, brand) {
        super(type, brand);
        this._idMouses = Mouse.countMouses++;
    }

    toString() {
        return `MOUSE ID: ${ this._idMouses } Type entry: ${ super.typeEntry }, Brand: ${ super.brand }`;
    }
}

class Keyboard extends InputDevice {
    static countKeyboard = 1;
    constructor(type, brand) {
        super(type, brand);
        this._idKeyboard = Keyboard.countKeyboard++;
    }

    toString() {
        return `KEYBOARD ID: ${ this._idKeyboard } Type entry: ${ super.typeEntry }, Brand: ${ super.brand }`;
    }
}

class Display {
    static countDisplay = 1;

    constructor(brand, size) {
        this._idDisplay = Display.countDisplay++;
        this._brand = brand;
        this._size = size;
    }
    get idDisplay() {
        return this._idDisplay;
    }

    get brand() {
        return this._brand;
    }
    set brand(brand) {
        return this._brand = brand;
    }

    get size() {
        return this._size;
    }
    set size(size) {
        return this._size = size;
    }

    toString() {
        return `DISPLAY ID: ${ this._idDisplay }, Brand: ${ this._brand }, Size: ${ this._size }`;
    }
}

class Computer {

    static countComputer = 1;

    constructor(name, display, keyboard, mouse) {
        this._idComputer = Computer.countComputer++;
        this._name = name;
        this._display = display;
        this._keyboard = keyboard;
        this._mouse = mouse
    }

    toString() {
        return `COMPUTER ID: ${ this._idComputer }, Name: ${ this._name },
        \nDisplay: { ${ this._display } }
        \nKeyboard: { ${ this._keyboard } }
        \nMouse: { ${ this._mouse } } `
    }
}

class Order {
    static countOrder = 1;

    constructor() {
        this._idOrder = Order.countOrder++;
        this._computer = [];
    }

    addComputer(computer) {
        this._computer.push(computer);
    }

    showOrder() {
        console.log(this.toString());
    }

    toString() {
        return `ORDER ID: ${ this._idOrder }, Computer:\n${ this._computer }`;
    }

}

//-----------------

const mouse = new Mouse('USB', 'Genius');
const keyboard = new Keyboard('USB', 'Brb');
const display = new Display('Samsungs', 25);
console.log(mouse.toString());
console.log(keyboard.toString());
console.log(display.toString());

console.log('---------------');

const computer = new Computer('Brb', display, keyboard, mouse);
console.log(computer.toString());

console.log('---------------');

const order = new Order();
order.addComputer(computer);
order.showOrder();