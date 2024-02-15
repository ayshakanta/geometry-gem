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
    const widthInput = document.getElementById("rectangle-width")
    const widthText = widthInput.value ;
    const width = parseFloat(widthText)
    console.log(width)

    const lengthInput = document.getElementById("rectangle-length")
    const lengthText = lengthInput.value ;
    const length = parseFloat(lengthText);
    console.log(length)

    const rectangleArea = width * length ;
    console.log(rectangleArea)

    const rectangleAreaSpan = document.getElementById("rectangle-area")
    rectangleAreaSpan.innerText = rectangleArea ;
}