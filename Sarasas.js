/*
Array CRUD:
- (c) sukurti nauja irasa ir itraukti ji i array
- (r) isspausdinti visus array irasus
- (u) atnaujinti iraso reiksme
- (d) istrinti irasa is saraso
*/
class Sarasas {
    constructor() {
        this.list = [];
    }
    prideti(item) {
        if (!this.isValidItem(item)) {
            console.error('ERROR: parametras turi buti ne tuscias tekstas!');
            return false;
        }
        this.list.push(item);
    };
    spausdinti() {
        console.log('Sarasas:');
        console.log('===============');
        for (let i = 0; i < this.list.length; i++) {
            console.log((i + 1) + '. ' + this.list[i]);
        }
        console.log('===============');
    }
    redaguoti(index, newItem) {
        if (!this.isValidIndex(index) ||
            !this.isValidItem(newItem)) {
            console.error('ERROR: narys nerastas arba nepateiktas pakeitimas!');
            return false;
        }
        this.list[index] = newItem;
    }
    pasalinti(index) {
        if (!this.isValidIndex(index)) {
            console.error('ERROR: narys nerastas!');
            return false
        }
        const updatedList = [];
        for (let i = 0; i < this.list.length; i++) {
            if (index !== i) {
                updatedList.push(this.list[i]);
            }

        }
        // this.list.filter((item) => item.id !== id);
        this.list = updatedList;
    }
    isValidIndex(index) {
        if (this.list.length <= index ||
            index < 0 ||
            index % 1 !== 0) {
            return false;
        }

        return true;
    }

    isValidItem(item) {
        if (typeof item !== 'string' ||
            item === '') {
            return false;
        }

        return true;
    }

};

module.exports = Sarasas;