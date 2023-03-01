export const funcDistToPoints=(p1:number,p2:number)=>{
    const dist=p1-p2;
    if (dist<0){
        return dist*-1
    }
    return dist;
}