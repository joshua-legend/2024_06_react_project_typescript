//1. 타입 어노테이션
const coffee1:string = "1"

//2. 타입 추론
const coffee = "아메리카노"

const coffeeList:string[] = ["아메리카노","라떼","초코초코"]
// number 배열 변수 만들기
const numList:number[] = Array(10).fill(10)
// boolean 배열 변수 만들기 그리고 js화 시키기
const boolList:boolean[] = [true,!!"123"]

const test = (arr:string[]) => {
    arr.forEach((x)=>{
        x.toUpperCase()
    })
}


// name, position, num
const test1:object = {name:"shinji", position:"middle", num:"7"}
const test2:{name:string, position:string, num:number} = {
    name:"신지", position:"middle", num:7
}