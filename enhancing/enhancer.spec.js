const enhancer = require('./enhancer.js');
// test away!

describe("Items Test Succeds", ()=>{
    
    it("The item's enhancement increases by 1. If the item enhancement level is 20, the enhancement level is not changed. The durability of the item is not changed", () => {
        const item = {
            name: "Axe",
            durability: 100,
            enhancement: 19
        }
        enhancer.success(item);

        expect(item.enhancement).toBe(20);
    });

    it("repairs item to full capacity", () => {
        let item = {
            name: "Axe",
            durability: 50,
            enhancement: 0
        }
        item = enhancer.repair(item);
    
        expect(item.durability).toBe(100);
    });
    
})

describe("Enhancement Test Fails", () => {
   
    it("If the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
        const item = {
            name: "Staff",
            durability: 100,
            enhancement: 14
        }

        enhancer.fail(item);

        expect(item.enhancement).toBe(14);
        expect(item.durability).toBe(95);

        // enhancement >= 15 but equal to 16, durability - 10, enhancement does not decrease
        item.enhancement = 15; 

        enhancer.fail(item);

        expect(item.enhancement).toBe(15);
        expect(item.durability).toBe(85);

        // enhancement >= 15 but equal to 16, durability - 10, enhancement does not decrease
        item.enhancement = 18; 
        enhancer.fail(item);

        expect(item.enhancement).toBe(17);
        expect(item.durability).toBe(75);
    });

})
    
describe("Get Enhancement Level and Item", () =>{
    it("gets enhancement level and item name if enchancement is greater than 0", () => {
        const item = {
            name: "Hammer",
            durability: 100,
            enhancement: 2
        }
    
        enhancer.get(item);
    
        expect(item.name).toBe("+2 Hammer");
    // if enchancement level is = 0
        item.name = "Hammer";
        item.enhancement = 0;        
        enhancer.get(item);
    
        expect(item.name).toBe("Hammer");
    });
    
})

