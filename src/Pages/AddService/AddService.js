import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
     const { register, handleSubmit , formState: { errors } } = useForm();
     const onSubmit = data =>{ console.log(data)
            const url = `http://localhost:5000/service`;
            fetch(url,{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div className='container '>
            <h1 className='text-center'>This is add service</h1>
            
            <form className='d-flex w-50 mx-auto flex-column my-3' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input type='text' placeholder='Enter Service name'  {...register("name", { required: true })} />
      {errors.name && <span>This field is required name</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <textarea placeholder='description' name="description" id="description" cols="10" rows="2"
      className='my-3 p-3' {...register("description", { required: true })}></textarea>
      {/* errors will return when field validation fails  */}
      {errors.Description && <span>This field is required description</span>}

      <input placeholder='price' type="number" name="price" id="price" {...register("price", { required: true })}  />
      <input className='my-3' placeholder='Photo URL' type="text" name="photo" id="photo" {...register("img", { required: true })} />
      
      <input className='w-25 mx-auto my-2' type="submit" value='Add service'/>
    </form>
           
            
        </div>
    );
};

export default AddService;