import isAnagram from './validAnagram';
describe("containsDuplicate.ts",() =>{
    it("should return false",() =>{
        const result = isAnagram("rat","car");
        expect(result).toBeFalsy();
    })
    it("should return true",() =>{
        let result = isAnagram("anagram","nagaram");
        expect(result).toBeTruthy()
    })
})