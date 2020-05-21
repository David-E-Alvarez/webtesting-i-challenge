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
            console.log('test--->', enhancer.repair(item)) 
            console.log('enhancer.repair(item).durability:',enhancer.repair(item).durability)   
            expect(enhancer.repair(item).durability).toBe(100)   
        })
    })
    describe('test(s) for success method', () => {
        it.todo('should increase enhancement by 1 if successful')
        it.todo('should leave enhancement level at 20 if is at 20')
        it.todo('should leave durability the same')
    })
})



