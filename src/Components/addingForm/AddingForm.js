import React from "react";
import { useForm } from "react-hook-form";
import './AddingForm.css'

const AddingForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        console.log(e)
        fetch('http://localhost:5000/lists',{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        
        e.target.reset()
        
    };




    return (
        <div className="d-flex flex-row justify-content-center align-items-center m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder="name" {...register("name", { required: true })} /> <br />
                <input type='text' placeholder="img link" {...register("imgLink", { required: true })} /> <br />
                <input type='text' placeholder="site link" {...register("siteLink", { required: true })} /> <br />
                <input type='text' placeholder="front-side code link" {...register("frontSideCode", { required: true })} /> <br />
                <input type='text' placeholder="server-side code link" {...register("serverSideCode")} /> <br />
                <input type='text' placeholder="used technology" {...register("usedTechnology", { required: true })} /> <br />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddingForm;
