// triangle card area

// function calculateTriangleArea(){
//     const triangleBaseInput = document.getElementById("triangle-base");
//     const triangleBaseText = triangleBaseInput.value ;
//     const base = parseFloat(triangleBaseText) ;
//     console.log(base)
//     const triangleHeightInput = document.getElementById("triangle-height");
//     const triangleHeightText = triangleHeightInput.value ;
//     const height = parseFloat(triangleHeightText);
//     console.log(height)

//     const area = 0.5 * base * height ;
//     console.log(area)

//     const triangleAreaSpan = document.getElementById("triangle-area")
//     triangleAreaSpan.innerText = area ;


// }



function calculateTriangleArea(){
    const triangleBase = getInputValueById("triangle-base")
    const triangleHeight = getInputValueById("triangle-height")
    const triangleArea = 0.5 * triangleBase * triangleHeight ;
    console.log(triangleArea)
    setInnerTextById("triangle-area" , triangleArea)

}



// rectangle card area 

// function calculateRectangleArea(){
//     const widthInput = document.getElementById("rectangle-width")
//     const widthText = widthInput.value ;
//     const width = parseFloat(widthText)
//     console.log(width)

//     const lengthInput = document.getElementById("rectangle-length")
//     const lengthText = lengthInput.value ;
//     const length = parseFloat(lengthText);
//     console.log(length)

//     const rectangleArea = width * length ;
//     console.log(rectangleArea)

//     const rectangleAreaSpan = document.getElementById("rectangle-area")
//     rectangleAreaSpan.innerText = rectangleArea ;
// }


function calculateRectangleArea(){
    const rectangleWidth = getInputValueById("rectangle-width")
    const rectangleLength = getInputValueById("rectangle-length")
    const rectangleArea = rectangleWidth * rectangleLength
    console.log(rectangleArea) ;
    setInnerTextById("rectangle-area" , rectangleArea)


}

// parallelogram card area

// function calculateParallelogramArea(){
//     const parallelogramBaseInput = document.getElementById("parallelogram-base")
//     const parallelogramBaseText = parallelogramBaseInput.value ;
//     const parallelogramBase = parseFloat(parallelogramBaseText)
//     console.log(parallelogramBase)

//     const parallelogramHeightInput = document.getElementById("parallelogram-height")
//     const parallelogramHeightText = parallelogramHeightInput.value ;
//     const parallelogramHeight = parseFloat(parallelogramHeightText)
//     console.log(parallelogramHeight);

//     const parallelogramArea = parallelogramBase * parallelogramHeight ;
//     console.log(parallelogramArea)

//     const parallelogramAreaSpan = document.getElementById("parallelogram-area")
//     parallelogramAreaSpan.innerText = parallelogramArea ;
// }


function calculateParallelogramArea(){
    const parallelogramBase = getInputValueById("parallelogram-base")
    // console.log(parallelogramBase)
    const parallelogramHeight = getInputValueById("parallelogram-height")
    // console.log(parallelogramHeight)
    const parallelogramArea = parallelogramBase * parallelogramHeight ;
    console.log(parallelogramArea) ;

    setInnerTextById("parallelogram-area" , parallelogramArea )
    setAreaContainer("area-container")

    
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value ;
    const inputValue = parseFloat(inputFieldText);
    return inputValue ;

}

function setInnerTextById(elementId , area){
    const elementField = document.getElementById(elementId)
    elementField.innerText = area ;
}










// rhombus area

function calculateRhombusArea(){
    const rhombusD1Input = document.getElementById("rhombus-d1")
    const rhombusD1Text = rhombusD1Input.value ;
    const rhombusD1 = parseFloat(rhombusD1Text);
    console.log(rhombusD1)

    const rhombusD2Input = document.getElementById("rhombus-d2")
    const rhombusD2Text = rhombusD2Input.value ;
    const rhombusD2 = parseFloat(rhombusD2Text);
    console.log(rhombusD2);

    const rhombusArea = 0.5 * rhombusD1 * rhombusD2 ;
    console.log(rhombusArea)

    const rhombusAreaSpan = document.getElementById("rhombus-area")
    rhombusAreaSpan.innerText = rhombusArea ;

}

// pentagon card area 

function calculatePentagonArea(){
    const pentagonPerimeterInput = document.getElementById("pentagon-perimeter")
    const pentagonPerimeterText = pentagonPerimeterInput.value ;
    const pentagonPerimeter = parseFloat(pentagonPerimeterText);
    console.log(pentagonPerimeter)

    const pentagonApothemInput = document.getElementById("pentagon-apothem")
    const pentagonApothemText = pentagonApothemInput.value ;
    const pentagonApothem = parseFloat(pentagonApothemText) ;
    console.log(pentagonApothem)

    const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem ;
    console.log(pentagonArea) 

    const pentagonAreaSpan = document.getElementById("pentagon-area")
    pentagonAreaSpan.innerText = pentagonArea ;
}

// ellipse card area 

function calculateEllipseArea(){
    const ellipseAxisAInput = document.getElementById("ellipse-axis-a")
    const ellipseAxisAText = ellipseAxisAInput.value ;
    const ellipseAxisA = parseFloat(ellipseAxisAText);
    console.log(ellipseAxisA)


    const ellipseAxisBInput = document.getElementById("ellipse-axis-b")
    const ellipseAxisBText = ellipseAxisBInput.value ;
    const ellipseAxisB = parseFloat(ellipseAxisBText);
    console.log(ellipseAxisB)

    const ellipseArea = 3.1416 * ellipseAxisA * ellipseAxisB 
    console.log(ellipseArea)

    const ellipseAreaSpan = document.getElementById("ellipse-area")
    ellipseAreaSpan.innerText = ellipseArea ;


}