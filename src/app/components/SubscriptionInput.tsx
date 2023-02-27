import styles from "./SubscriptionInput.module.scss";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";

export default function SubscriptionInput(props) {
    return (
        <div className={styles.subscription_input}>
            <input type="text" placeholder="Enter Your Email Address" />
            <button className="btn_active">
                {props && <span ><HiOutlineMail /></span>}

                Subscribe</button>
        </div>
    )
}