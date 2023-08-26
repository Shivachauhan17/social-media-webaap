import React from 'react'

export function Input({border,size,radius,placeholder,labelfor,name,labelname}){
    return(
        <div>
        <label for={labelfor}>{labelname}</label>
        <input if={labelfor} name={name} placeholder={placeholder} style={{
            border:{border},
            width:{size},
            borderRadius:{radius},
        }}/>
        </div>
    )
}

export function Button({padding,border,background,radius,color,width,height,value}){
    return(<div>
        <button style={{
            padding:{padding},
            border:{border},
            height:{size},
            width:{width},
            height:{height},
            color:{color},
            borderRadius:{radius},
            background:{background},
        }}>{value}</button>
        </div>
    )
}

// export default function Typicalform({action,buttonparams,inputparams}){

//     return(
//         <div>
//             <form action={action}>
//                 <Input border={buttonparams.border} size={buttonparams.size} radius={buttonparams.radius} 
//                 placeholder={buttonparams.placeholder} labelfor={buttonparams.labelfor} name={buttonparams.name} labelname/>
//                 <Button border={inputparams.border} background={inputparams.background} 
//                 radiuscolor={inputparams.radiuscolor} size={inputparams.size} value={inputparams.size} />
//             </form>
//         </div>
//     )
// }