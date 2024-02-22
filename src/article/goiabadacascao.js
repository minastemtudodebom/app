import Layout from '../components/layout';
import { articles } from '../content/articles';

const GoiabadaPage = () => {
  const article = articles['queijo']; // Access article content using slug
  if (!article) return <div>Article not found</div>;

  return (
    <Layout>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      {/* Render the rest of the article content */}
    </Layout>
  );
};

export default GoiabadaPage;
