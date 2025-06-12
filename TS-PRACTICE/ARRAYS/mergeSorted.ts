
function mergeSorted(nums1:Array<number>,m:number,nums2:Array<number>,n:number):void{

        for(let i = 0; i < n; i++){
            nums1[i+m] = nums2[i];
        };

    console.log(nums1.sort((a,b)=>a-b));
};

const arr1:Array<number> = [1,2,3,0,0,0];
const arr2:Array<number> = [2,5,6];

mergeSorted(arr1,3,arr2,3);