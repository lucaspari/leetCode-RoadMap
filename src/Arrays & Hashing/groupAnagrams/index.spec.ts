import groupAnagrams from "./groupAnagrams";

it("[[eat,tea,ate],[tan,nat],[bat]]",() =>{
    const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
    expect(result).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]]);
})