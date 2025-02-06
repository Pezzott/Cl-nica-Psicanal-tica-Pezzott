const BlogPostSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #6A9A96;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #2C3E50;
  }

  i {
    margin-right: 8px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
`;

const Meta = styled.div`
  color: #6A9A96;
  font-size: 0.9rem;
  margin-bottom: 40px;
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(106, 154, 150, 0.15);
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6A9A96;

  p {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem;
    color: #2C3E50;
    margin: 40px 0 20px;
    font-family: 'Playfair Display', serif;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
      color: #6A9A96;
    }
  }
`; 