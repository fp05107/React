import Header from "./components/Header";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);

  const add = () => {
    setUser([...user, { name, email }]);
    setName("");
    setEmail("");
  };
  const removeItem = (index) =>{
    let arr = user;
    arr.splice(index,1);
    setUser([...arr]);
  }
  return (
    <div className="App">
      <Header />
      <div className="inputFields">
        <Stack direction="row" spacing={2}>
          <Box>
            <TextField
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <Button
              onClick={() => {
                add();
              }}
              variant="contained"
              color="success"
            >
              <AddCircleIcon />
            </Button>
          </Box>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Remove</h2>
        </div>
        
        {user.map((element, index) => {
          return (
            <div className="data_val" key={index}>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
              <Button onClick={() => {removeItem(index)}} variant="contained" color="error">
                <DeleteIcon />
              </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
