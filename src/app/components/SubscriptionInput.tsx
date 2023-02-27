import styles from "./SubscriptionInput.module.scss";

export default function SubscriptionInput() {
    return (
        <div className={styles.subscription_input}>
            <input type="text" placeholder="Enter Your Email Address" />
            <button className="btn_active">Subscribe</button>
        </div>
    )
}