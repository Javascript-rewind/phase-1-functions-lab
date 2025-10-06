// Code your solution in this 
function distanceFromHqInBlocks(Blocks){
    if(Blocks<42){
        return 42-Blocks;
    }else if(Blocks>42){
        return Blocks-42;
    }else{
        return 0;
    }


}

console.log(distanceFromHqInBlocks(42));
console.log(distanceFromHqInBlocks(34));
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(Blocks){
    return distanceFromHqInBlocks(Blocks)*264;
}
console.log(distanceFromHqInFeet(43));

function distanceTravelledInFeet(start,destination){
    return Math.abs(start-destination)*264;
}


function calculatesFarePrice(start,destination){
    let totalDistance=Math.abs(start-destination)*264;
    if(totalDistance<=400){
        return 0;
    }else if(totalDistance<2000){
        return 2.56;

    }else if(totalDistance<2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
    
}

console.log(calculatesFarePrice(50,58));

