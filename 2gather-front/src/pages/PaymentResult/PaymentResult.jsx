import React from 'react'
import { InfoCardStyled } from '../Home/Home.styled'
import { ContainerStyled } from './PaymentResult.styled'

const PaymentResult = () => {
    return (
        <ContainerStyled>
                <InfoCardStyled>
                    <h2>Payment Successful.</h2>
                </InfoCardStyled>
        </ContainerStyled>
    )
};

export default PaymentResult;