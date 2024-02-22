import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const QueijoPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticleContent = async () => {
      if (!slug) return; // Exit early if slug is undefined
      try {
        const response = await fetch(`/api/articles/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        const articleData = await response.json();
        setArticle(articleData);
      } catch (error) {
        console.error('Error fetching article:', error);
        setArticle(null);
      }
    };

    fetchArticleContent();
  }, [slug]);

  // Render loading state while fetching article content or if slug is undefined
  if (!slug || !article) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </Layout>
  );
};

export default QueijoPage;
