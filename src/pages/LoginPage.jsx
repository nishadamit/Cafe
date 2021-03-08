import React ,{ useState }from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoImage from '../components/Common/LogoImage';
import LogoText from '../components/Common/LogoText';
import InputBox from '../components/Common/InputBox';
import Heading from '../components/Common/Heading';
import '../style/LoginPage.scss';
import {LinkButton} from '../components/Common/Button';
import { Link1} from '../components/Common/Link';
import { Paragraph2 } from '../components/Common/Paragraph';
import { FaFacebook,FaGoogle } from 'react-icons/fa';

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
               <Row className="form-container" >
                   <Heading
                          text="Welcome back"
                   />
                   <div className="form">
                      <InputBox 
                           className="input-box"
                           Placeholder="Email"
                           name="email"
                           value={allValues.email}
                           onChange ={onChange}
                           type="text"
                       />
                       <InputBox 
                           className="input-box"
                           Placeholder="Password"
                           name="password"
                           value={allValues.password}
                           onChange ={onChange}
                           type="password"
                       />
                       <LinkButton
                                title="Login"
                                className="button"
                                href="userdashboard"
                        />
                        <Link1
                           text="Forgot Password ?"
                        />
                        <div className="signup">
                              <Paragraph2
                                   data="Don't have an account ?"
                              />
                            <Link1
                                text="SignUp Here"
                            />
                        </div>
                        <Paragraph2
                                   data="OR"
                        />
                        <FaFacebook
                          color="blue"
                        />
                        <FaGoogle
                           color="red"
                        />
                   </div>
               </Row>
           </Container>
       )
}

export default LoginPage