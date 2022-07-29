import styles from '../styles/Layout.module.css'
import Nav from'./nav'
import Meta from'./meta'
import Header from'./header'
const Layout= ({children})=>{
	return(
		<>
		<Meta/>
		<Nav/>
		<div className={styles.container}>
			<main className={styles.main}>
				<Header/>
				{children}
			</main>
		</div>
		</>
		)
}

export default Layout;