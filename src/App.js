import './App.css';
import { Grid } from "@material-ui/core";
import  Header  from "./Components/Header/Header";
function App() {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
      </Grid>
      <Grid container>

      </Grid>
    </div>
  );
}

export default App;
