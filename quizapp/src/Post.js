import Button from "react-bootstrap/Button";
import { useState } from "react";
let pos = 0;
function Post(props) {
    
    let questions = ["Bienvenido al quiz", "Cómo se define un nuevo componente en React ?", "Cómo se define un nuevo estado?", "F o V ... El inicializador del estdo puede ser una función", "Qué es el virtual DOM?"];
    let answers = ["", "Para definir un nuevo componente en React, se utiliza una función o una clase que extiende React.Component o React.PureComponent", "Para definir un nuevo estado en React, se puede usar el State Hook. El State Hook es una función que te permite agregar estado local a un componente de función const [count, setCount] = useState(0);", "Verdadero, el inicializador del estado puede ser una función. Los Hooks son una nueva incorporación en React 16.8 que te permiten usar estado y otras características de React sin escribir una clase", "https://assets.interviewbit.com/assets/skill_interview_questions/react/real-virtual-dom-ef615afd3c603140a15cc509f6b107db83aeb5d8ac27add7bd416558fa40fdd7.png.gz"];   
    
    const [Text, setInputText] = useState(questions[pos]);
    const [Answer, setAnswer] = useState(answers[pos]);

    function handleChange(){
        setInputText(questions[pos]);
        setAnswer(answers[pos]);
    }


 const handleNext = (e) => {
    if (pos === 4){
        pos =4;
    }else{
   pos +=1;
    }
    console.log(pos);
    handleChange();
  };

  const handleRestart = (e) => {
    pos = 0;
    console.log(pos);  
    handleChange();
  }

  const handlePrev = (e) => {
    if (pos === 0){
        pos = 0;
    }else{
    pos -=1;
    }
    
    console.log(pos);  
    handleChange();
  }
 
  return ( 
    <div class="container"> 
        <div class="row">
            <div class="col text-center">
                <Button variant="primary" onClick={handleRestart}>
                    Restart
                </Button>
                <Button variant="primary" onClick={handlePrev}>
                    Prev
                </Button>
                <Button variant="primary" onClick={handleNext} >
                    Next
                </Button>
            </div> 
        </div>
        <div class="row">
            <div class="text-center">
                <h1>{Text}</h1>
                {pos <= 3 && (<h4>{Answer}</h4>)}
                {pos === 4 && (<img src={Answer}  style={{ width: '75%', height: '75%' }} alt="El Virtual DOM es una representación visual del DOM. Es una copia que nos permite hacer cálculos pesados sin afectar el rendimiento del verdadero DOM. " />)}
            </div>
        </div>
    </div>
    
  );
}

export default Post;