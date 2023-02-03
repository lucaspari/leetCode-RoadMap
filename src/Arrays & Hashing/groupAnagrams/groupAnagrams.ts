export default function groupAnagrams(strs: string[]) {
    let hashmap = new Map();
    const result = []
    for(let word of strs){
        const sorted = word.split("").sort().join("");
        if(hashmap.get(sorted) == undefined){
            hashmap.set(sorted,[word]);
        }
        else{
            hashmap.get(sorted).push(word);
        }
    }
    for(let value of hashmap.values()){
        result.push(value);
    }
    return result
};
