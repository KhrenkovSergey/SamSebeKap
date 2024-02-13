import Image from "next/image";
import styles from "./page.module.css";
import ContactsHeader from "@/components/ContactsHeader";

export default function Home() {
  return (
    <main className={styles.main}>
      <ContactsHeader/>
    </main>
  );
}
