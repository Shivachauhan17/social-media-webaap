import { Button } from "./button";

export default function IndexLogin({loginUrl,signupUrl,firstButton,secondButton}){
    return(
        <div className="indexLogin">
            <a href={loginUrl} ><Button padding={firstButton.padding} border={firstButton.border} background={firstButton.background} radius={firstButton.radius} color={firstButton.color} width={firstButton.width} height={firstButton.height} value={firstButton.value}/></a>
            <a href={signupUrl}><Button padding={secondButton.padding} border={secondButton.border} background={secondButton.background} radius={secondButton.radius} color={secondButton.color} width={secondButton.width} height={secondButton.height} value={secondButton.value} /></a>
        </div>
    )
}