import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";

function Login() {

    const {handleSubmit, register} = useForm();
    const onSubmit = values => console.log(values);

    return (
        <Container className='mt-5'>
            <Row>
                <Col md={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 3 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Fatman V2 by AgroTech</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input ref={register} name=""type="text" className="form-control" placeholder="Unesi korisnicko ime" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input ref={register} type="password" className="form-control" placeholder="a sada sifru" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;