import React, { Component, useEffect} from 'react';

class Game extends Component {
constructor(props){
    super(props);
    this.state=({
        chicken1:"https://1b-f.s3.eu-west-1.amazonaws.com/a/53460-8A6BCC93-3244-459F-A8C0-1AE48767A491-0-1499558789.giff",
        X:0,//huong di theo truc X
        Y:0,
        top:0,//vitri ban dau
        left:0,
        dx:0,
        dy:0
    })
}

componentDidMount(){
    setInterval(() => {
        let width = 1250; //? size of box app.
let height = 750;
       this.setState({
           X:Math.random()>0.5,
           Y:Math.random()>0.5,
           top : ~~(Math.random() * (height -90) ),
           left : ~~(Math.random() * (width -90)),
           dx : ~~(Math.random() * 5),
           dy : ~~(Math.random() * 5),
       })
       
      }, 2);
      
}

    render() {
        return (
            <div className='ongnoi'>
            <div className='cha'  >
                <div id='con' style={{marginTop:this.state.dy+"px",marginLeft:this.state.dx+"px"}}   className='con'>

                </div>
            </div>
            </div>
        );
    }
}

export default Game;