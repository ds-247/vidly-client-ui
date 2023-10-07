import TextField from "@mui/material/TextField";

function Input({
  autofocus,
  label,
  name,
  onChange,
  value,
  type,
  error,
  errorMessage,
}) {
  return (
    <TextField
      autoFocus={autofocus}
      autoComplete=""
      error={error}
      helperText={error && errorMessage}
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      sx={{ mb: 2, mt: 2, width: "80%" }}
    />
  );
}

export default Input;

Input.defaultProps = {
  type: "text",
};
