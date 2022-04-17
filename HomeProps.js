import React, {useState} from 'react';
import Button from './../../components/commons/Button';
import Text from './../../components/commons/Text';
import Input from './../../components/commons/Input';
import './../../assets/css/style.css';
const HomeProps = () => {
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
                <Input labelText="Ten" 
            placeholder="Vui long nhap ten"
            handleOnChange={(e) => setName(e.target.value)}/>
            <Input labelText="Tuoi" 
            placeholder="Vui long nhap tuoi"
            handleOnChange={(e) => setAge(e.target.value)}/>
            <div>
                <Text text={"Ten :" + name} />
                <Text text={"Tuoi :" + age} />
            </div>
            <Button onClickHandle ={() => removeData()} btnText="Remove"/>
            </div>
            )}
        </div>
    );
};

export default HomeProps;