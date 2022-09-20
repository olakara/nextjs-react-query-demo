import {useState} from 'react';
function CheckboxComponent({label, post}) {

    const [state, setState] = useState(post.done);

    const handleCheck = (event) => {
        setState(event.target.checked);
    }

    return (        
        <div>
            <input            
            type="checkbox"
            checked={state}
            onChange={handleCheck}
            />
            <label> {label}</label>
        </div>        
      );
}

export default CheckboxComponent;