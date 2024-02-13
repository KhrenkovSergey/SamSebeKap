import styles from "./ContacsHeader.module.css"

const ContactsHeader = () => {
    return (
        <div className="contact-info">
            <div className="container">
                <div className="phone">
                    <img src="/icons/telegram.png" alt="telegram" className="icon" />
                    <img src="/icons/whatsapp.png" alt="whatsapp" className="icon" />
                    <img src="/icons/telephone.png" alt="telephone" className="icon" />
                    <span className="phone-number">: 8-910-000-00-00</span>
                </div>
                <div className="email">
                    <img src="/icons/mail.png" alt="email" className="icon" />
                    <span className="email-address">: info@ssk.courses.ru</span>
                </div>
            </div>
        </div>
    )
}

export default ContactsHeader;