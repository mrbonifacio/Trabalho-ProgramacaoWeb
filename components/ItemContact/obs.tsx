import { Obs } from './style'

interface AutProps{
    label: string
    valor: any
    tipo?: 'text' 
}

export default function init(props: AutProps){
    return(
        <div>
                <label>{props.label}</label>
                <Obs input type={props.tipo ?? "text"}/>
            </div>
    )
}    