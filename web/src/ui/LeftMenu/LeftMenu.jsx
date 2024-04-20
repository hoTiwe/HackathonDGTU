import React, { useState } from "react";
import styles from "./LeftMenu.module.scss";
import arrowIMG from "./../../img/arrow.png";
import logo from "./../../img/logo.png";

function LeftMenu(props) {
    const handleMenuClick = (menuName) => {
        props.setActiveMenu(menuName); // Функция для обновления активного пункта меню при клике
    };

    return (
        <div className={styles.LeftMenu}>
            <div className={styles.LeftMenu__inner}>
                <div>      
                    <img src={logo} className={styles.logo}></img>
                    <ul className={styles.LeftMenu__list}>
                        <li style={{ backgroundColor: props.activeMenu === "Главная" ? "#F3702233" : "#D9D9D9" }} onClick={() => handleMenuClick("Главная")}>Главная</li>
                        <li style={{ backgroundColor: props.activeMenu === "Склады" ? "#F3702233" : "#D9D9D9" }} onClick={() => handleMenuClick("Склады")}>Склады<img src={arrowIMG}></img></li>
                        <li style={{ backgroundColor: props.activeMenu === "Запросы" ? "#F3702233" : "#D9D9D9" }} onClick={() => handleMenuClick("Запросы")}>Запросы<img src={arrowIMG}></img></li>
                        <li style={{ backgroundColor: props.activeMenu === "Магазины" ? "#F3702233" : "#D9D9D9" }} onClick={() => handleMenuClick("Магазины")}>Магазины<img src={arrowIMG}></img></li>
                        <li style={{ backgroundColor: props.activeMenu === "Аналитика" ? "#F3702233" : "#D9D9D9" }} onClick={() => handleMenuClick("Аналитика")}>Аналитика<img src={arrowIMG}></img></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LeftMenu;