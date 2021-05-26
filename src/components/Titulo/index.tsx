import React from 'react';

import * as S from './styles';

export type TitleProps = {
    tittle: string;
    subTittle?: string;
}

const Titulo: React.FC<TitleProps> = ({tittle, subTittle}) => {
  return <S.CustomTitulo>
      <h1>{tittle}</h1>
      {subTittle && <h2>{subTittle}</h2>}
      
  </S.CustomTitulo>;
}

export default Titulo;