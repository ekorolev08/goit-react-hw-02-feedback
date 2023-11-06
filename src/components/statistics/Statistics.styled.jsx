import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Item = styled.li`
  font-family: 'Trebuchet MS', 'Lucida Sans';
  padding: 7px 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-left: 15px solid #2808e0;
  background: blue linear-gradient(#2808e0, #f7ff07);
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  letter-spacing: 2px;
  color:#1a2a27;
`;