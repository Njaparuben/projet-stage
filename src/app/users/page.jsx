
import fetchData from "@/lib/fetch-data"
import styles from './pageUsers.module.css';

export default async function PageUsers() {

  const users = await fetchData({ path: "users" });

    return (
      <div className={styles.user}>
        {(users?? []).map((user) => (
          <div key={user.id} className={styles.userId}>
            <h2>Nom: {user.firstname}</h2>
            <h2>Prenom:{user.lastname}</h2>
            <p>Mail: {user.email}</p>
            <p>Anniversaire: {user.birthDate}</p>
          </div>
        ))}
      </div>
    );
}