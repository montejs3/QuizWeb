import Button from "react-bootstrap/Button";
import { useState } from "react";
let pos = 0;
function Post(props) {
    
    let questions = ["Bienvenido al quiz", "Cómo se define un nuevo componente en React ?", "Cómo se define un nuevo estado?", "F o V ... El inicializador del estdo puede ser una función", "Qué es el virtual DOM?"];
    let answers = ["", "Para definir un nuevo componente en React, se utiliza una función o una clase que extiende React.Component o React.PureComponent", "Un nuevo estado se define en un componente de React utilizando el método setState() o, en componentes de clase, el constructor y la propiedad de estado.", "F (Falso). El inicializador del estado en un componente de clase debe ser un objeto litera", "https://th.bing.com/th/id/OIP.ixVnnqAMGNfwK7u5KMh5qQAAAA?pid=ImgDet&rs=1"];   
    
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
                {pos === 4 && (<img src={Answer} alt="" />)}
            </div>
        </div>
    </div>
    
  );
}

export default Post;