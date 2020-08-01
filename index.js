var rect ={
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};


function solveReact(l,b){
    console.log("Solving rectangular with l = "+ l +"and b = "+ b);


    if ( l <=0 || b<=0) {
        console.log("Rectangular dimensions should greater than zero:");
    }else{
        console.log("Area of rect is" + rect.area( l,b ) );
        console.log("the parameter of rectangular is"+ rect.perimeter(l,b));
    }
}

solveReact(2,4);
solveReact(3,5);
solveReact(-3,5);
solveReact(0,5);