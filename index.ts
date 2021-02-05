/*
All Dragons, when created, have:

Health, starting at 1000

May be Alive or Dead, starting Alive

Dragons can Deal Damage to Dragons.

Damage is subtracted from Health

When damage received exceeds current Health, Health becomes 0 and the character dies

For extra points add Logging, and a Metric that counts the number of times a character is damaged.
*/

import { damage } from "./src/dragonExample";
import { dragon } from "./src/dragons";
import { logger, profiler } from "./src/nonfunctionals";

const loggerDamage = logger(damage);
loggerDamage(dragon, 100);

const profilerDamage = profiler(damage);
profilerDamage(dragon, 100);