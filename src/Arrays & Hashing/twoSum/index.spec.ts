import twoSum from './twoSum';
describe("containsDuplicate.ts",() =>{
    it("should return [0,1]",() =>{
        const result = twoSum([2,7,11,15],9)
        expect(result).toEqual([0,1])
    })
    it("should return [1,2]",() =>{
        const result = twoSum([3,2,4],6)
        expect(result).toEqual([1,2])
    })
})