import containsDuplicate from './containsDuplicate';
describe("containsDuplicate.ts",() =>{
    it("should return false",() =>{
        let arr = [1,2,3,4,5];
        const result = containsDuplicate(arr);
        expect(result).toBe(false);
    })
    it("should return true",() =>{
        let arr = [1,1,3,4,5];
        const result = containsDuplicate(arr);
        expect(result).toBe(true);
    })
})