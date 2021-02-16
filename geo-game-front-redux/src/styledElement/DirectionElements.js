import styled from 'styled-components';

export const DirectionWrapper= styled.div`
    width:650px;
    height:280px;
    overflow-y:'scroll',

`;
export const TextStart=styled.div`
    text-align: center;
    font-size:  20px;
    font-weight:bold;
    font-family:times;
    margin-top:10px;

`;
export const Text=styled.div`
    text-align: center;
    margin-top:10px;
    margin-right:20px;
    font-size:  20px;
    font-weight:bold;
    font-family:times;
    width:480px;
`;
export const Iteration=styled(Text)`
    text-align: left;
    font-weight: bold;
    border: solid;
    border-radius:3;
    opacity:0.75;
    box-shadow: 0 3px 5px 2px black;
    padding : 5px 15px;   
    width:50px;
    color:black;
    &:hover{
        background: white;
        width:60px;
        color:black;
        box-shadow: 0 3px 5px 2px red;

    }
`;
/*export const P=styled.p`
    font-weight: bold;
    border-radius:3;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    color:red;
`;*/