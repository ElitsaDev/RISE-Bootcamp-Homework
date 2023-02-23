


export default function FindPoint(xCity, yCity, xPoint, yPoint) {

    if (xPoint >= 0 && xPoint < xCity  && yPoint >= 0 && yPoint < yCity ) {
        return true;
    }

    return false;
}
