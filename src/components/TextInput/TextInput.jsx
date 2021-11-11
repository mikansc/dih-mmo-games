import { InputGroup } from "./TextInput.styles";

export const TextInput = ({ id, label, name, error, helperText, ...rest }) => {
  if (!name) {
    throw new Error("Campo de texto sem prop 'name'!");
  }

  return (
    <InputGroup error={!!error}>
      {!!label && <label htmlFor={id || name}>{label}</label>}
      <input id={id || name} type="text" {...rest} />
      {!!helperText && (<span>{helperText}</span>)}
    </InputGroup>
  );
};


