/*
퀴즈 1: 피자 메뉴 정의
다음은 피자 주문을 위한 타입을 정의하는 문제입니다. 
다음과 같은 속성을 포함하도록 Pizza 타입을 정의하세요:

도우(Dough): "오리지널" | "씬" | "치즈크러스트"
치즈(Cheese): "모짜렐라" | "고르곤졸라" | "체다"
토핑(Topping): "페퍼로니" | "베이컨" | "양파" | "올리브" | "피망"
소스(Sauce): "토마토" | "크림" | "핫소스"



퀴즈 2: 아이스크림 메뉴 정의
다음은 아이스크림 주문을 위한 타입을 정의하는 문제입니다. 
다음과 같은 속성을 포함하도록 IceCream 타입을 정의하세요:

베이스(Base): "바닐라" | "초콜릿" | "딸기"
토핑(Topping): "아몬드" | "초콜릿 칩" | "카라멜"
시럽(Syrup): "초콜릿" | "카라멜" | "딸기"


퀴즈 3: 라면 메뉴 정의
다음은 라면 주문을 위한 타입을 정의하는 문제입니다. 
다음과 같은 속성을 포함하도록 Ramen 타입을 정의하세요:

면(Noodle): "소면" | "중면" | "우동면"
국물(Broth): "간장" | "된장" | "매운맛"
토핑(Topping): "계란" | "차슈" | "파" | "김치"
추가(AddOn): "떡" | "치즈" | "만두" (선택적)
*/

type Dough = "오리지널" | "씬" | "치즈크러스트";
type Cheese1 = "모짜렐라" | "고르곤졸라" | "체다";
type Topping = "페퍼로니" | "베이컨" | "양파" | "올리브" | "피망";
type Sauce1 = "토마토" | "크림" | "핫소스";

type Pizza<D, C, T, S> = {
    dough: D,
    cheese: C,
    topping: T,
    sauce: S
};

const myPizza: Pizza<Dough, Cheese1, Topping, Sauce1> = {
    dough: "씬",
    cheese: "모짜렐라",
    topping: "페퍼로니",
    sauce:"크림",
};

type Base = "바닐라" | "초콜릿" | "딸기";
type Topping1 = "아몬드" | "초콜릿 칩" | "카라멜";
type Syrup = "초콜릿" | "카라멜" | "딸기";

type IceCream<B, T, S> = {
    base: B,
    toppings: T[],
    syrup?: S
};

const myIceCream: IceCream<Base, Topping1, Syrup> = {
    base: "바닐라",
    toppings: ["아몬드", "카라멜"],
    syrup: "초콜릿",
};

type Noodle = "소면" | "중면" | "우동면";
type Broth = "간장" | "된장" | "매운맛";
type Topping2 = "계란" | "차슈" | "파" | "김치";
type AddOn = "떡" | "치즈" | "만두";

type Ramen<N, B, T, A> = {
    noodle: N,
    broth: B,
    topping: T[],
    addon?: Partial<A>
};

const myRamen: Ramen<Noodle, Broth, Topping2, AddOn> = {
    noodle: "우동면",
    broth: "된장",
    topping: ["계란", "파"],
};