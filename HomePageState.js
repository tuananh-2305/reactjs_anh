import React, {useState} from 'react';
import Button from './../../components/commons/Button';
import Text from './../../components/commons/Text';
import Input from './../../components/commons/Input';
import './../../assets/css/style.css';
const HomePageState = () => {
    const [name,setName]=useState("");  
    const [age,setAge]=useState(""); 
    const [loading, setLoading] = useState(false);
    const removeData = () =>{
        setLoading(true);
        if(name.length && age.length) {
        setTimeout(() =>{
            setLoading(false);
    },5000);
        setName("");
        setAge("");
    }else {
        setLoading(false);
        alert("vui lòng nhập thông tin vào");
        return false;
    }
    };
    return (
        <div className="wrapper">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
            <div>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}placeholder="name"/>
                <br/>
                <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}placeholder="age"/>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
            </div>
            )} 
            <button disabled={loading ? true : false} onClick={()=>removeData()}>Remove</button>
        </div>
    );
};

export default HomePageState;