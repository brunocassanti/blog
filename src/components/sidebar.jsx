import styles from './sidebar.module.css'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/brunocassanti.png" />
                <strong>Bruno Cass</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Editar perfil</a>
            </footer>
        </aside>
    )
}