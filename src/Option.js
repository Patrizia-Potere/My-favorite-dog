import React, {useState} from 'react';
import Slideshow from './Slide';
import List from './List';
import data from './dog-facts';

const Option = () => {

const [state,setState] = useState({...data[6]});

return (
    <div className='option-container'>
    <div className='dog'>
        <img className='funny-dog-img' src='https://www.teleischia.com/wp-content/uploads/2019/12/cane-divertente-con-osso_29190-1660.jpg' alt='funnydog'></img>
    </div>
    <div className='option'>
        <button onClick={()=>setState({...data[0]})}>Beagle</button>
        <button onClick={()=>setState({...data[1]})}> Border Collie</button>
        <button onClick={()=>setState({...data[2]})}>Chihuahua</button>
        <button onClick={()=>setState({...data[3]})}>Chow</button>
        <button onClick={()=>setState({...data[4]})}>Cocker Spaniel</button>
        <button onClick={()=>setState({...data[5]})}>Corgi</button>
        <button onClick={()=>setState({...data[6]})}>Dachshund</button>
        <button onClick={()=>setState({...data[7]})}>French Bulldog</button>
        <button onClick={()=>setState({...data[8]})}>Golden Retriever</button>
        <button onClick={()=>setState({...data[9]})}>Husky</button>
        <button onClick={()=>setState({...data[10]})}>Jack Russel</button>
        <button onClick={()=>setState({...data[11]})}>Pomeranian</button>
        <button onClick={()=>setState({...data[12]})}>Poodle</button>
        <button onClick={()=>setState({...data[13]})}>Pug</button>
    </div>
        <div className='slide'><Slideshow {...state}/></div>
        <div className='facts'><List {...state}/></div>
    </div>
)
}

export default Option;