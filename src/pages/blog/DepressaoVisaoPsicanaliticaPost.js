const BlogPostSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #F1FAF6 0%, #FFFFFF 100%);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 80px 0 40px;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #6A9A96;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.3s ease;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
    padding: 0 10px;
  }
`;

const Meta = styled.div`
  color: #6A9A96;
  font-size: 0.9rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 30px;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(106, 154, 150, 0.15);

  @media (max-width: 768px) {
    height: 250px;
    border-radius: 15px;
    margin-bottom: 30px;
  }
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6A9A96;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  p {
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  h2 {
    font-size: 1.8rem;
    color: #2C3E50;
    margin: 40px 0 20px;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin: 30px 0 15px;
    }
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
      padding-left: 15px;
    }

    li {
      margin-bottom: 10px;
      color: #6A9A96;

      @media (max-width: 768px) {
        margin-bottom: 8px;
      }
    }
  }
`; 