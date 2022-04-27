import React from 'react';
import { useForm } from "react-hook-form";
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <div>
            <button class={styles.btn} onClick={props.onClickHandle}>{props.btnText}</button>
        </div>
    );
};

export default Button;