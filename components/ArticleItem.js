import articleStyles from '../styles/Article.module.css'
import link from 'next/Link'

const ArticleItem= ({article})=>{
	return(
		<link href="/article/[id]" as={`/article/${article.id}`}>
			
	        	<a className={articleStyles.card}>
	        		<h3>{article.title} &rarr;</h3>
	        		<p>{article.excerpt}</p>
	        	</a>
	      	
		</link>
		)
}

export default ArticleItem;