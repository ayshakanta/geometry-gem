// triangle card area

function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseText = triangleBaseInput.value ;
    const base = parseFloat(triangleBaseText) ;
    console.log(base)
    const triangleHeightInput = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeightInput.value ;
    const height = parseFloat(triangleHeightText);
    console.log(height)

    const area = 0.5 * base * height ;
    console.log(area)

    const triangleAreaSpan = document.getElementById("triangle-area")
    triangleAreaSpan.innerText = area ;


}

// rectangle card area 

function calculateRectangleArea(){
    console.log("calculate rect area")
}