/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    const count = function(a,j) {
        let ret = 0;
        for (let i=0;i<a.length;i++) {
            if (a[i]<j) ret++;
            if (a[i]>=j) break;
        }
        return ret;
    }
    const n = nums.length;
    let sum = new Array(n).fill(0);
    let summap = new Map();
    sum[-1] = 0;
    summap.set(0,[-1]);
    for (let i=0;i<n;i++) {
        sum[i]=sum[i-1]+nums[i];
        if (summap.has(sum[i])) {
            summap.get(sum[i]).push(i);
        } else summap.set(sum[i],[i]);
    }
    let result = 0;
    for (let i=0;i<n;i++) {
        if (summap.has(sum[i]-k)) {
            result += count(summap.get(sum[i]-k),i);
        }
    }
    return result;
};

var subarraySum = function(nums, k) {
    const n = nums.length;
    let summap = new Map();
    summap.set(0,1);
    let result = 0, sum = 0;
    for (let i=0;i<n;i++) {
        sum += nums[i];
        if (summap.has(sum-k)) 
            result += summap.get(sum-k);
        summap.set(sum,(summap.get(sum)||0)+1);
    }
    return result;
};