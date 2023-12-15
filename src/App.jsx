import { Header } from "./components/header"
import { Post } from "./components/post"

import styles from './app.module.css'

import './global.css'
import { Sidebar } from "./components/sidebar"

export function App() {

  return (
    <div>
      <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post />
          </main>
        </div>
    </div>
  )
}
