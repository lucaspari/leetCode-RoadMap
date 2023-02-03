export default function twoSum(nums: number[], target: number){
    const hashMap = new Map();
    for(let i = 0 ; i < nums.length;i++){
        const res = hashMap.get(nums[i])
        if(res == undefined){
            hashMap.set(target - nums[i],i);
        }
        else{
            return [res,i];
        }
    }
};
