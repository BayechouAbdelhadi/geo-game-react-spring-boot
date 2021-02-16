export default function score (answers){
    let score =0;
    answers.forEach(answer=>{
        const j=answer.difference;
            if(j<=50) score+=1 ;
            else if(50<j&& j<=100) 
                score+=0.75;
            else if(100<j && j<=150)
                score+=0.5;
            else if(150<j && j<200)
                score+=0.25;
            else if(200<j && j<=300) 
                score+=0.125;
            else if(300<j && j<400) 
                score+=0.1;
            else  score+=0;
        
    });

    return score;
}
/*switch (j)
        {
            case(j<=50):score+=1;break;
            case(j<=100):score+=0.75;break;
            case(j<=150):score+=0.5;break;
            case(j<200):score+=0.25;break;
            case(j<=300):score+=0.125;break;
            case(j<400):score+=0.1;break;
            default : break;  
        }*/ 