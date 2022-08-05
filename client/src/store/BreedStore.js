import {makeAutoObservable} from "mobx";

export default class BreedStore{
    constructor() {
        this._breeds = [
            {id: 1, name: 'Dachshund'},
            {id: 2, name: 'German Shorthaired Pointer'},
            {id: 3, name: 'Border Collie'}
        ]
        makeAutoObservable(this)
    }

    setBreeds(breeds) {
        this._breeds = breeds
    }
    get breeds(){
        return this._breeds
    }
}
