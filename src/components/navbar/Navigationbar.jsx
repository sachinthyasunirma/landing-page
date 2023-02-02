import { AiOutlineMenu } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import Dropdown from "../dropdown/Dropdown";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

function Navigationbar() {
  return (
    <nav className="mb-4 p-1">
      <div className="d-flex justify-content-between align-items-center">
        <div className={styles.prev_link}>
          <Link href={"#"}>back</Link>
        </div>
        <div className="brand">
          <Link className="text-decoration-none text-black" href={"/"}>
            <div className="brand_name d-flex flex-column gap-1 justify-content-center align-items-center">
              <div className={styles.brand_title}>digital artist</div>
              <h1 className={styles.brand_main}>banksy_is_dead</h1>
            </div>
          </Link>
        </div>
        <Dropdown btn_style={styles.navbar_toggler} title={<AiOutlineMenu />}>
          <ul className={styles.menu_items}>
            <li>
              <Link href={"#"}>
                <IoMdSettings />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navigationbar;
