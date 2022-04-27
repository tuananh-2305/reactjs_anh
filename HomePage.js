import React, {useState, useMemo, useEffect, useCallback} from 'react';
import Button from './../../components/commons/Button';
import Text from './../../components/commons/Text';
import Input from './../../components/commons/Input';
import './../../assets/css/style.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object({
  fullName: yup.string().required("Bắt buộc nhập").min(3, 'Must be exactly 3 digits'),
  age: yup.number().positive().integer().required("Bắt buộc nhập").min(3, 'Must be exactly 3 digits'),
}).required();
const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const {register , handleSubmit , setValue, watch, formState: {errors}} = useForm({
        resolver:yupResolver(schema)
    });
const onSubmit = data => {
        console.log("phamtuananh", data);
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
    },2000);
        setValue("fullName", '');
        setValue("age", '');
    };
    return (
        <div className="wrapper">
            {loading ? (
                <h1>
                    {" "}
                    <Text text = "Loading..."/>
                </h1>
            ) : (
                <div>
                    <Text colorText="pink" bg="yellow" text="Pham Tuan Anh" />
                    <Text colorText="green" text="Pham Tuan Anh 2" />
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    {...register("fullName")}
                    placeholder="Full Name"
                    />
                    <p>{errors.fullName?.message}</p>
                    <br/>
                    <input 
                    {...register("age")}
                    type="number"
                    placeholder="Age"
                    />
                    <p>{errors.age?.message}</p>
                    <br/>
                    <Button btnText="CSS BUTTON" />
                    </form>
                </div>
            )}
        </div>
    );
};

export default HomePage;