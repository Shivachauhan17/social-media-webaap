import React,{useState,memo} from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import AddBioForm from "./AddBioForm";



const AddBioIcon=()=>{
    const [editBio,setEditBio]=useState(false)


return(
    <div>
        {editBio && <AddBioForm/>}
        <div className="mt-4 flex gap-x-2 justify-center items-center">
            <BiSolidPencil className="text-2xl" onClick={()=>setEditBio(!editBio)}/>
            <h5>Edit Bio</h5>       
        </div>
    </div>
)
}

export default memo(AddBioIcon);