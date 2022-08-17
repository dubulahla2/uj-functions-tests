// console.log(greet("hlananani"));
describe('Test my greet function' , function(){
    it("It should return ,'Hello,Hlanganani'when called with 'Hlanganani'" , function(){
        
        assert.equal("Hello, Hlanganani",greet("Hlanganani"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,Sizwe'when called with 'Sizwe'" , function(){
        
        assert.equal("Hello, Sizwe",greet("Sizwe"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });

});
// console.log(greet('Hlanganani'))