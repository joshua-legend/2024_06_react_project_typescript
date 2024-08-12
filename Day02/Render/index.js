var boxSize = {
    small: { width: "50px", height: "50px" },
    medium: { width: "100px", height: "100px" },
    large: { width: "150px", height: "150px" },
};
var applyBoxStyle = function (tag, css) {
    tag.style.backgroundColor = css.backgroundColor;
    tag.style.border = css.border;
    tag.style.borderRadius = css.borderRadius;
    tag.style.width = boxSize[css.size].width;
    tag.style.height = boxSize[css.size].height;
};
var myBoxStyle = {
    size: "small",
    backgroundColor: "orange",
    border: "1px solid black",
    borderRadius: "10px",
};
var box = document.createElement('div');
applyBoxStyle(box, myBoxStyle);
document.body.appendChild(box);
