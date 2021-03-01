import React ,{ useState }from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoImage from '../components/Common/LogoImage';
import LogoText from '../components/Common/LogoText';
import InputBox from '../components/Common/InputBox';
import Heading from '../components/Common/Heading';
import '../style/LoginPage.scss';
import {LinkButton} from '../components/Common/Button';
import { Link1} from '../components/Common/Link';

export const LoginPage = () =>{

      const [allValues,setAllValues ] = useState({
           email:'',
           password:''
      })

      const onChange = (e) =>{
             setAllValues({...allValues,[e.target.name]:e.target.value})
      }

      console.log("allValues",allValues)

       return(
           <Container fluid className="mt-4 login">
               <Row>
                   <Col>
                        <div>
                             <LogoImage/>
                        </div>
                        <div>
                               <LogoText/>
                        </div>
                   </Col>
               </Row>
               <Row className="login-form-container" >
                   <Heading
                          text="Welcome back"
                   />
                   <div className="login-form">
                      <InputBox 
                           className="login-input-box"
                           Placeholder="Email"
                           name="email"
                           value={allValues.email}
                           onChange ={onChange}
                           type="text"
                       />
                       <InputBox 
                           className="login-input-box"
                           Placeholder="Password"
                           name="password"
                           value={allValues.password}
                           onChange ={onChange}
                           type="password"
                       />
                       <LinkButton
                                title="Login"
                                className="login-button"
                                href="userdashboard"
                        />
                        <Link1
                           text="Forgot Password ?"
                        />
                   </div>
               </Row>
           </Container>
       )
}

export default LoginPage