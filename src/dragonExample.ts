import { Dragon } from "./dragons";

export function damage(dragon: Dragon, amount: number): Dragon {
    return {
        ...dragon,
        health: dragon.health - amount
    }
}