import styled from 'styled-components';

const InputWrapper = styled.input`
  ${props => props.error && `
    &&& {
      background-color: #ffccc9;
    }
  `}
`;

const Message = styled.div`
  &&& {
    display: ${props => props.display ? 'flex' : 'none'};
    align-items: center;
    
    * {
      margin: 5px 5px 15px 5px;
    }
  }
`;

const InfoMessage = styled(Message)`
  &&& * {
    color: white;
  }
`;

const SuccessMessage = styled(Message)`
  &&& * {
    color: #FF9F1C;
  }
`;

const ErrorMessage = styled(Message)`
  &&& * {
    color: #ffccc9;
  }
`;

export {
  InputWrapper,
  InfoMessage,
  SuccessMessage,
  ErrorMessage
}