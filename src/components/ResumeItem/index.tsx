import * as C from './styles';

type Props = {
    title: string;
    value: number
    color?: string;                                                        //Passando que é Opcional.
}

export const ResumeItem = ({ title, value, color }: Props) => {            //1ª Etapa da Prop 'color'.
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R$ {value}</C.Info>                      {/*2ª Etapa da Prop 'color'. 3ª Está no index.tsx. E 3ª da Outra q vem do style*/}
        </C.Container>
    )
}