import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const dataInfo = {
            ...data
        }
        fetch('https://frozen-bayou-71820.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(' Your review processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="my-5 pt-3 text-2xl font-bold text-danger fw-bold">Add Review</h2>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <textarea className="rounded-lg" {...register("description")} placeholder="Description" />
                <input placeholder="rating" defaultValue="" {...register("rating")} />
                <button type="submit" className="btn btn-outline-danger fw-bold w-25" >Submit</button>
            </form>
        </div>
    );
};

export default AddReview;