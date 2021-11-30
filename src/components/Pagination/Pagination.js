import { GrNext, GrPrevious } from "react-icons/gr";
import styled from "styled-components";

export const Pagination = (props) => {
  const { page = 0, pages = 0, onClickNext, onClickPrevious, count } = props;

  return (
    <PaginationContainer>
      <StyledButton onClick={onClickPrevious}><GrPrevious /></StyledButton>
      <PaginationText>página {page} de {pages} (exibindo {count} itens)</PaginationText>
      <StyledButton onClick={onClickNext}><GrNext /></StyledButton>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationText = styled.span`
  font-size: 0.85rem;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.color.primary.light};
  }
`;
