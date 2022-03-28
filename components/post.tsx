import React from 'react';
import { FC } from 'react';

import styled from 'styled-components';
import AvatarItem from './avatar';

// Importing application components
import Comment from './comment';
import { IPost } from '../libs/interfaces/IPost'
import { DateFormat } from '../libs/calendarLib';

// Importing react-boostrap components
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// styled-components
const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    border: 1px solid #DFE0EB;
    text-align: left;
    &:hover {
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    }
`

const TitleSection = styled.div`
    padding: 15px;
`

const CommentSection = styled.div`
    padding: 15px
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #eaeaea;
`

const Post: FC<IPost> = ({ title, description, createdAt, updatedAt, id, authors, comments }) => {
    
    const [expandComments, setExpandComments] = React.useState(false);

    const updateExpandComment = () => {
        var newExpandState = !expandComments;
        setExpandComments(newExpandState);
    }

    return <>
        <Card>
            <TitleSection>
                <Container fluid>
                    <Row>
                        <Col md="auto">
                            <Stack direction="horizontal" gap={1}>
                                {authors.map((object) =>
                                    <div key={object.id}>
                                        <div>
                                            <AvatarItem 
                                                name={object.name}
                                                avatar={object.avatar}
                                                updatedAt={object.updatedAt}
                                                id={object.id}
                                                postId={object.postId}
                                                createdAt={object.createdAt}
                                            />
                                        </div>
                                    </div>
                                )}  
                            </Stack>  
                        </Col>
                        <Col>
                            <h2>{ title }</h2>
                        </Col>
                        <Col>
                            <div style={{textAlign: "right"}}>
                                <p>{ DateFormat({date: createdAt}) }</p>
                                {updatedAt && (
                                    <p style={{fontStyle: "italic", fontSize: "12px", marginTop: "-15px"}}>Updated: { DateFormat({date: updatedAt}) }</p>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <p style={{color: "#AA9D9D", fontSize: "18px"}}>
                    { description }
                </p>
            </TitleSection>
                {comments.length > 0 && (
                    <div>
                        <Divider />
                        <CommentSection>
                            <Button 
                                variant="link" 
                                color="secondary" 
                                active={expandComments}
                                onClick={updateExpandComment}
                            >
                                {comments.length} Comments
                            </Button>
                            {(expandComments) && (
                                <div style={{paddingTop: '10px'}}>
                                    {comments.map((comment) => 
                                        <div key={comment.id} style={{paddingTop: "10px"}}>
                                            <Comment 
                                                title={comment.title}
                                                description={comment.description}
                                                updatedAt={comment.updatedAt}
                                                id={comment.id}
                                                postId={comment.postId}
                                                createdAt={comment.createdAt}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </CommentSection>
                    </div>
                )}
        </Card>
    </>
};

export default Post;