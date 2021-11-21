import styled from 'styled-components';

export const MainContainer = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    align-self:center;
`;
export const ButtonContainer = styled.div`
    width:30%;
    margin-left:10%;
`;
export const TableWrapper = styled.div`
    width:80%;
    margin-left:10%;
    margin-top:29px;

`;
export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    justify-content:center;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    background: #FFFFFF;
    width:80%;
    align-self:center;
    border-top-left-radius: 8px 8px;
    border-top-right-radius: 8px 8px;
`;

export const ItemsContainer = styled.div`
    display: flex;
`;
export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    background: #FFFFFF;
    width:80%;
    align-self:center;
`;

export const Title = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #111827;
`;

export const Label = styled.h2`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #374151;
`;

export const  ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 24px;
    background: #FFFFFF;
    width:80%;
    align-self:center;
    background: #16295A;
    border-bottom-left-radius: 8px 8px;
    border-bottom-right-radius: 8px 8px;
`

export const  ActionButton = styled.button`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #00C1B1;
    background: #FFFFFF;
    border:0px;
    &:hover {
        cursor: pointer;
    }
`
export const  CloseButton = styled.button`
    font-family: SF Compact;
    font-style: normal;
    font-weight: 556;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    background: #FFFFFF;
    border:0px;
    &:hover {
        cursor: pointer;
    }
`