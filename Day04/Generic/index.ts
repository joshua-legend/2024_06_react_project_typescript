//generic -> generalize:일반화하다.

type My<A,B> = {
    first:A,
    second:B,
}
const test123:My<number,string> = {
    first:1,
    second:"문자"
}



type McMorningMain = "핫케익" | "맥머핀" | "브렉퍼스트"
type McMorningSide = "해쉬브라운" | "에그"
type McMorningDrink = "드립커피" | "탄산"
type NormalMain = "상하이 버거" | "빅맥" | "스낵랩"
type NormalSide = "감자튀김" | "맥너겟"
type NormalDrink = "탄산" | "드립커피" | "우유"

type Mcdonald<M extends McMorningMain | NormalMain,S,D> = {
    main:M,
    side:S,
    drink:D
}

const shinji:Mcdonald<NormalMain,McMorningSide,McMorningDrink> = {
    main:"빅맥",
    side:"해쉬브라운",
    drink:"드립커피",
}
const kang:Mcdonald<NormalMain,NormalSide,NormalDrink> = {
    main:"상하이 버거",
    side:"감자튀김",
    drink:"탄산",
}


//서브웨이 메뉴<빵,치즈,야채,소스>

type Subway<B extends Bread,C,V,S> = {
    bread:B,
    cheese:C,
    vegitable:V[],
    sauce:S,
}
type Bread = "화이트" | "플랫" | "하티" | "위트"
type Cheese = "모짜렐라" | "슈레드" | "아치"
type Vegitable = "올리브" | "양파" | "상추" | "토매토" | "피클"
type Sauce = "허니머스타드" | "바비큐" | "렌치" | "치폴레" | "웨스트사우스"

type SauceType = {
    first: Sauce,
    second: Sauce
}

const myOrder:Subway<Bread,Cheese,Vegitable,Partial<SauceType>> = {
    bread:"위트",
    cheese:"모짜렐라",
    vegitable:["상추","양파","올리브","토매토"],
    sauce:{
        first:"렌치",
    },
}


