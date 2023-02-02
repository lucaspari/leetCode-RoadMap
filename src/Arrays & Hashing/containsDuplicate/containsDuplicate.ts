export default function containsDuplicate(nums: number[]): boolean {
    // O(n)
    let obj : any = {};
    for(let i = 0;i < nums.length;i++){
        if(obj.hasOwnProperty(nums[i])) return true
        obj[`${nums[i]}`] = `${nums[i]}`;
    }
    return false;
}