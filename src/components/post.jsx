import styles from './post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/brunocassanti.png" />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Cassanti</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='13 de Dezembro às 10:00h' dateTime='2023-12-13 10:00:00'>Publicado há 1h</time>
            </header>
            <div>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">👉 woody.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}