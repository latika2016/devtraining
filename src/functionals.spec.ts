import { Dragon } from "./dragons";
import {damage} from "./functionals";

export let initialDragon: Dragon = {
    health: 800,
    alive: true
}

export let firstDamageToDragon: Dragon = {
    health: 500,
    alive: true
}

describe('dragon example', () => {

    it("should have a damage method", () => {
        expect(damage(initialDragon, 300)).toEqual(firstDamageToDragon)        
    })    
})



