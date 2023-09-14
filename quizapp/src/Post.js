import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";
let pos = 0;
function Post(props) {

    
    let questions = ["Bienvenido al quiz", "Pregunta 1?", "Pregunta 2", "Pregunta 3", "Pregunta 4", "Pregunta 5"];
    let answers = ["", "respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4", "https://th.bing.com/th/id/OIP.ixVnnqAMGNfwK7u5KMh5qQAAAA?pid=ImgDet&rs=1"];   
    const [Text, setInputText] = useState(questions[pos]);
    const [Answer, setAnswer] = useState(answers[pos]);


   
    function handleChange(e){
        setInputText(questions[pos]);
        setAnswer(answers[pos]);
    }

 const handleNext = (e) => {
    if (pos === 5){
        pos =5;
    }else{
   pos +=1;
    }
    console.log(pos);
    handleChange(e);
    return(<img src={Answer} alt=""/> )
  };

  const handleRestart = (e) => {
    pos = 0;
    console.log(pos);  
    handleChange(e);
  }

  const handlePrev = (e) => {
    if (pos === 0){
        pos = 0;
    }else{
    pos -=1;
    }
    
    console.log(pos);  
    handleChange(e);
  }
 
  return (
    //center a div
    
    <div>
        <div>
            <div>

            <Button variant="primary" onClick={handleRestart}>
                Restart
            </Button>
            <Button variant="primary" onClick={handlePrev}>
                Prev
            </Button>
            <Button variant="primary" onClick={handleNext} >
                Next
            </Button>

                <div>
                    <h1>{Text}</h1>
                    <h1>{Answer}</h1>   
                  
                </div>
        
            </div>
        </div>
    </div>
    
  );
}

export default Post;