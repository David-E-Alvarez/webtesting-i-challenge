const enhancer = require('./enhancer.js');
// test away!

describe('tests for enhancer.js', () => {
    describe('test(s) for repair method', () => {
        it('should return item object with durability of 100', ()=>{
            let item = {
                durability: 100,
            }
            expect(enhancer.repair({...item})).toBe(100)
        })
    })
})


