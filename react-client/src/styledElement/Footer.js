import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const Container = styled.div`
  height:45px;
  border-top:1px solid ;
  background: linear-gradient(#feb47b,antiquewhite,#feb47b);
  color:black;
  font-family:times;
  opacity:0.85;
  text-Align:center;
  margin-bottom:0;
  font-size:18;
  padding:5px;
  font-weight:bold;

`;
const Copyright=() =>{
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://https://www.facebook.com/profile.php?id=100021563408662-ui.com/">
        BAYECHOU Abdelhadi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Footer=()=>{

  return(
  <Container>{Copyright()}</Container>
  );
}
export default Footer;