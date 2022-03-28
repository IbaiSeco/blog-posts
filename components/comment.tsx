import React from 'react';
import { FC } from 'react';

import { IComment } from '../libs/interfaces/IComment';
import { DateFormat } from '../libs/calendarLib';

import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CommentContainer = styled.div`
    background: #fff;
    border-radius: 10px;
    border: 1px solid #DFE0EB;
    padding: 10px;
`

const Comment: FC<IComment> = ({ title, description, createdAt, updatedAt, id, postId }) => {

    return <>
        <CommentContainer>
            <Container fluid>
                <Row>
                    <Col>
                        <h5>{ title }</h5>
                    </Col>
                    <Col>
                        <div style={{textAlign: "right"}}>
                            <p style={{fontSize: "14px"}}>{ DateFormat({date: createdAt}) }</p>
                            {updatedAt && (
                                <p style={{fontStyle: "italic", fontSize: "10px", marginTop: "-15px"}}>Updated: { DateFormat({date: updatedAt}) }</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <p style={{color: "#AA9D9D", fontSize: "15px"}}>
                { description }
            </p>
        </CommentContainer>
    </>
};

export default Comment;