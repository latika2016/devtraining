# Problem Satement
* All Dragons, when created, have:
    * Health, starting at 1000
    * May be Alive or Dead, starting Alive
    * Dragons can Deal Damage to Dragons.
    * Damage is subtracted from Health
    * When damage received exceeds current Health, Health becomes 0 and the character dies
* For extra points add Logging, and a Metric that counts the number of times a character is damaged.
* I'd like the 'damage' method to be written.

* Things to remember
    * Dragons are immutable (we only work with immutable data nowadays)
        * So the damage method will return a new dragon
    * Try putting in the logging, try adding a couple of metrics like 'how much damage the dragon has received' and 'how many times the dragon has been damaged'
    * Consider how you would do error handling in it.