import { useState } from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller'; //new

export default function CardComponent({ cardData }) {
  const [data, setData] = useState(cardData); //new

  const loading = async () => {
    //new
    const newCardData = [
      {
        title: 'New card title',
        buttonName: 'right',
        description: 'this is an infinite scroll',
      },
      {
        title: 'New card title',
        buttonName: 'right',
        description: 'this is an infinite scroll',
      },
      {
        title: 'New card title',
        buttonName: 'right',
        description: 'this is an infinite scroll',
      },
    ];
    // if (data.length <= 20) {
    //new
    await setData((data) => [...data, ...newCardData]);
    // }
  };

  return (
    <Container>
      <InfiniteScroll //new
        pageStart={0}
        loadMore={loading}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <Row>
          {data.map(
            (
              data,
              index //new
            ) => (
              <Col md={4} key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1652512456007-e16ac46f1879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
                  />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    <Button variant="primary">{data.buttonName}</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
