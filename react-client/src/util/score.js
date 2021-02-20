export default function score (answers){
    let score =0;
    answers.forEach(answer=>{
        const j=answer.difference;
            if(j<=200) score+=1;
            else if(200<j && j<=500)
                score+=0.5;
            else if(500<j && j<=1000) 
                score+=0.25;
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