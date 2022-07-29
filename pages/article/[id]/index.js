// import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config/index'
import Meta from '../../../components/meta'




const article= ({article})=>{
	// const router  = useRouter ()
	// const {id}= router.query
	return(
		<>
			<Meta title={article.title} description={article.excerpt}/>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br/>
			<Link href='/'>Go back</Link>
		</>
		)
}

export const getStaticProps = async (context)=>{
	const res = await fetch(`${server}/api/articles/${context.params.id}`)
	const article = await res.json()
	return{
		props:{
			article
		}
	}
}

export const getStaticPaths = async ()=>{
	const res = await fetch(`${server}/api/articles`,
        {
            headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
          Accept: "application/json; charset=UTF-8",
        }, //this is required by api provider
        })
	const articles = await res.json()
	const ids = articles.articles.map(article=>article.id)
	const paths = ids.map(id=>({params:{id:id.toString()}}))

	return{ 
		paths,
		fallback:false
	}
}

export default article