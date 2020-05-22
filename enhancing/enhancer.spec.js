const enhancer = require('./enhancer.js');
// test away!

describe('tests for enhancer.js', () => {
    describe('test(s) for repair method', () => {
        it('should return durability to be 100 from repair function', ()=>{
            let item = {
                name: 'player 1',
                durability: 80,
                enhancement: 15
            };
            // console.log('test--->', enhancer.repair(item)) 
            // console.log('enhancer.repair(item).durability:',enhancer.repair(item).durability)   
            expect(enhancer.repair(item).durability).toBe(100)   
        })
    })
    //tests success method
    describe('test(s) for success method', () => {
        it('should increase enhancement by 1 if successful', () => {
            let item = {
                name: "player 1",
                durability: 100,
                enhancement: 19
            }
            expect(enhancer.succeed(item).enhancement).toBe(20);
        })
        it('should leave enhancement level at 20 if is at 20', ()=>{
            let item = {
                name: "player 1",
                durability: 90,
                enhancement: 20
            }
            expect(enhancer.succeed(item).enhancement).toBe(20);
        })
        it('should leave durability the same', () =>{
            let item = {
                name: "player 1",
                durability: 90,
                enhancement: 20
            }
            expect(enhancer.succeed(item).durability).toBe(90);
        })
    })
    //test fail
    describe('tests for fail method', () => {
        let item = {
            name: "player 1",
            durability: 90,
            enhancement: 17
        }
        it('If the items enhancement is less than 15 the durability of the item is decreased by 5', ()=>{
            expect(enhancer.fail(item).durability).toBe(80)
        })
        it('If the items enhancement is 15 or more the durability of the item is decreased by 10.', ()=>{
            expect(enhancer.fail(item).durability).toBe(70)
        })
        it('If the items enhancement level is greater than 16 the enhancement level decreases by 1 (17 goes down to 16 18 goes down to 17).', ()=>{
            expect(enhancer.fail(item).enhancement).toBe(16)
        })
    })
})



