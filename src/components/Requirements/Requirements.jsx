import styled from "styled-components";

export const Requirements = ({ requirement }) => {
  return <StyledTable>
    <caption>Requisitos mínimos</caption>
    <tbody>
    <tr>
      <td>Sistema operacional:</td>
      <td>{requirement.os}</td>
    </tr>
    <tr>
      <td>Processador:</td>
      <td>{requirement.processor}</td>
    </tr>
    <tr>
      <td>Memória RAM:</td>
      <td>{requirement.memory}</td>
    </tr>
    <tr>
      <td>Placa gráfica:</td>
      <td>{requirement.graphics}</td>
    </tr>
    <tr>
      <td>Espaço em disco:</td>
      <td>{requirement.storage}</td>
    </tr>
    </tbody>
  </StyledTable>;
};

const StyledTable = styled.table`
    border: 1px solid gray;
    border-radius: 5px !important;
    background-color: rgba(0,0,0,0.1);
    width: 100%;
    table-layout: fixed;
    font-size: 0.85rem;

  & > caption {
    font-size: 0.75rem;
    font-weight: 900;
    text-align: left;
    padding: 1rem 0.5rem;
  }

  & td {
    padding: 0.5em 1em;
  }
  
  & tr > td:first-child {
    width: 250px;
    font-weight: 900;
  }
`
