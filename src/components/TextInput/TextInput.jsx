import { InputGroup } from "./TextInput.styles";

export const TextInput = ({ id, label, name, error, helperText,Icon, onClick, ...rest }) => {
  if (!name) {
    throw new Error("Campo de texto sem prop 'name'!");
  }

  return (
    <InputGroup error={!!error}>
      {!!label && <label htmlFor={id || name}>{label}</label>}
      {!!Icon && <button type="button" onClick={onClick}>{<Icon />}</button>}
      <input id={id || name} type="text" {...rest} />
      {!!helperText && (<span>{helperText}</span>)}
    </InputGroup>
  );
};


