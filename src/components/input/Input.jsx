import React from 'react'
import { useForm } from "react-hook-form";

const Input = (props) => {
  const { register } = useForm();
  console.log(props.name)
  return (
    <>
      <input {...register(props.name)} type={props.type} placeholder={props.placeholder} />
    </>
  )
}

export default Input
