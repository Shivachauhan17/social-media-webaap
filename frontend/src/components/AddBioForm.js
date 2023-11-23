import React,{useState,memo} from 'react';
import Swal from 'sweetalert2';
import { userActions } from '../store/user-slice';
import { useDispatch } from 'react-redux';

const AddBioForm=()=>{
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({
        profession:"",
        hobby:"",
        birthday:"",
        loveToDo:""
    })

    const handleProfession=(e)=>{
        setFormData({
            ...formData,
            profession:e.target.value
        })
    }
    const handleHobby=(e)=>{
        setFormData({
            ...formData,
            hobby:e.target.value
        })
    }
    const handleBirthday=(e)=>{
        setFormData({
            ...formData,
            birthday:e.target.value
        })
    }
    const handleLoveToDo=(e)=>{
        setFormData({
            ...formData,
            loveToDo:e.target.value
        })
    }

    const handleSubmit=async (e)=>{
        try{
            e.preventDefault();
            let response=await fetch('http://localhost:8000/post/addBio',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                credentials: "include",
                body:JSON.stringify(formData)
            })
            
            response=await response.json();
            console.log(response)
            const bio=response.bio;
            dispatch(userActions.setBio(bio));
        }
        catch(err){
            Swal.fire('while updating bio something gone wrong')
        }
    }

    return(
        <div>
            <div className=' bg-white  w-1/4 h-80 right-1/3 absolute rounded-3xl z-50'>
                <form className='w-full flex grow flex-col p-6  bg-white h-full justify-around rounded-3xl shadow-lg' onSubmit={handleSubmit}>
                    <div className='flex justify-around'>
                        <label htmlFor='profession' className='font-bold '>Profession</label>
                        <input id="profession" 
                        placeholder='about your profession'
                        className='text-center h-8 rounded-md border-2 border-gray-200'
                        value={formData.profession}
                        onChange={handleProfession}/>
                    </div>
                    <div className='flex justify-around'>
                        <label htmlFor='hobby' className='font-bold'>Hobbies</label>
                        <input id="hobby" 
                        placeholder='about your hobby'
                        className='text-center h-8 rounded-md border-gray-200'
                        value={formData.hobby}
                        onChange={handleHobby}/>
                    </div>
                    <div className='flex justify-around'>
                        <label htmlFor='birthday' className='font-bold'>BirthDay</label>
                        <input id="birthday" 
                        placeholder='about your birthday'
                        className='text-center h-8 rounded-md border-gray-200'
                        value={formData.birthday}
                        onChange={handleBirthday}/>
                    </div>
                    <div className='flex justify-around'>
                        <label htmlFor='loveToDo' className='font-bold'>Love doing..</label>
                        <input id="loveToDo" 
                        placeholder='what you love to do'
                        className='text-center h-8 rounded-md border-gray-200'
                        value={formData.loveToDo}
                        onChange={handleLoveToDo}/>
                    </div>
                    <div className='flex justify-around'>
                        <button type='submit' className='font-bold border-4 border-gray-400 p-0.5 hover:bg-gray-200' >Change</button>
                    </div>
                </form>
                
            </div>
        </div>
    )

}

export default memo(AddBioForm);