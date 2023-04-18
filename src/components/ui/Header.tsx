import { useAuth } from "../../hooks/useAuth"
import styles from '../screens/home/Home.module.css'

const Header = () => {
    const {user, setUser} = useAuth()
    return user ? (<><h2 className={styles.wel_user}>
        Welcome, {user.name}!
      </h2>
        <button className={styles.auth} onClick={() => setUser(null)}>Logout</button>
      </>
      ) : <button className={styles.auth} onClick={() => setUser({
        name: 'Max'
      })}>Login</button>
      
}

export default Header