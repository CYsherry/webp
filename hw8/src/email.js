import TextField from "@mui/material/TextField";

function Email() {
    return (
        <TextField margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
        />
    );
}

export default Email;