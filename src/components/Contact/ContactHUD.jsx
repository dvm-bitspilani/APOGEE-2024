import * as styles from "@styles/Contact.module.scss";
import ContactCard from "./ContactCard.jsx";
import data from "./Contact.json"

function CardList() {
  return (
    <div className={styles.container}>
      {data.map(card => (
        <ContactCard
          key={card.id}
          name={card.name}
          dept={card.dept}
          image={card.image}
          phone={card.phone}
          email={card.email}
        />
      ))}
    </div>
  )
}

export default function ContactHUD() {
  return (
    <>
      <div className={styles.wrapper}>
        <CardList/>
      </div>
    </>
  )
}
