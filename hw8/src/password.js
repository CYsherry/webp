import TextField from "@mui/material/TextField";

function Password() {
    return (
        <TextField margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
        />
    );
}

export default Password;