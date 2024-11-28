import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string,
    emailAddress: string,
    phoneNumber: number,
}

const StepOneForm = () => {
    const { register, handleSubmit } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 step-one-form ">
            <div>
                <label htmlFor={'Name'} >{'Name'}</label>
                <input {...register('name')} />
            </div>
            <div>
                <label htmlFor={'Email'} >{'Email Address'}</label>
                <input {...register('emailAddress')} />
            </div>
            <div>
                <label htmlFor={'Name'} >{'Phone Number'}</label>
                <input {...register('phoneNumber')} />
            </div>
            <input type='submit' value="Next Step" />
        </form>
    )
}

export default StepOneForm;