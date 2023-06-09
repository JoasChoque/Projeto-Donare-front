import React from "react";
import "./Navbar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";
import PersonIcon from '@material-ui/icons/Person';


function Navbar() {

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch();

  let navigate = useNavigate()

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário Deslogado', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate('/login')
  }


  var navbarComponent;

  if (token !== "") {
    navbarComponent =
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" className="color">
        <Toolbar variant="dense" className="container">
          <Box >
            <img src="https://i.imgur.com/iAIRTMo.png" alt="Logo donare" width="150px" height="150px" className="imagemlogo" />
          </Box>

          <Box display='flex' justifyContent='center'>

            <Link to='/home'>
              <Box mx={1} className="dis-flex-row conteudoNav">
                <HomeIcon className="icones" />
                <Typography className="texto-navbar" variant="h6"> Home </Typography>
              </Box>
            </Link>

            <Link to='/temas'>
              <Box mx={1} className="dis-flex-row conteudoNav">
                <AssignmentIcon className="icones" />
                <Typography className="texto-navbar" variant="h6">Temas</Typography>
              </Box>
            </Link>

            <Link to='/perfil'>
              <Box mx={1} className="dis-flex-row conteudoNav">
                <PersonIcon className="icones" />
                <Typography className="texto-navbar" variant="h6">Perfil</Typography>
              </Box>
            </Link>


            <Box mx={1} className="dis-flex-row cursor conteudoNav" onClick={goLogout}>
              <LogoutIcon className="icones" />
              <Typography className="texto-navbar" variant="h6">Logout</Typography>
            </Box>
          </Box>

          <Box className="barraPesquisa">
            <Box className="pesquisa icone-pesquisa">
              <SearchIcon className="" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;
