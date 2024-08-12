// BoxStyle이라는 타입을 만들기
type BoxSize = "small" | "medium" | "large"
type BoxBG = "blue" | "red" | "green" | "yellow" | "orange"
type BoxBR = "0px" | "4px" | "10px" | "9999px"
type BoxBorder = "1px solid black"| "1px solid grey"
type BoxStyle = {
    size:BoxSize,
    backgroundColor:BoxBG,
    borderRadius:BoxBR,
    border:BoxBorder
}


type BoxSizeMap = {
    small: {width:"50px",height:"50px"},
    medium: {width:"100px",height:"100px"},
    large: {width:"150px",height:"150px"},
}

const boxSize:BoxSizeMap = {
    small:{width:"50px",height:"50px"},
    medium:{width:"100px",height:"100px"},
    large:{width:"150px",height:"150px"},
}


const applyBoxStyle = (tag:HTMLElement, css:BoxStyle) => {
    tag.style.backgroundColor = css.backgroundColor
    tag.style.border = css.border
    tag.style.borderRadius = css.borderRadius
    tag.style.width = boxSize[css.size].width
    tag.style.height = boxSize[css.size].height
}

const myBoxStyle:BoxStyle ={
    size:"small",
    backgroundColor:"orange",
    border:"1px solid black",
    borderRadius:"10px",
}

const box = document.createElement('div')
applyBoxStyle(box,myBoxStyle)
document.body.appendChild(box)
