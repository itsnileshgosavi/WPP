function filterValuesFromArr(arr:Array<number>, ...values:Array<any>):Array<number>
{ 
    let result:number[]=[]

    let filteredValues=arr.filter((val)=>{
        return !values.includes(val)
    })

    
    return filteredValues 
}
let arr:any[]=[1,2,3,4,5,6,7,8,9,10]

console.log(filterValuesFromArr(arr,4,5,7,10));
