import React, {useState} from 'react';
import styles from "./SortDropDown.module.css";
import getImage from "../../utils/getImage";
import {useDispatch, useSelector} from "react-redux";
import {changeSorting} from "../../store/slices/sortingSlice";

const SortDropDown = () => {
    const [sortDropDown, setSortDropDown] = useState(false)
    const sortMethods = ["Сначала популярные", "Сначала новые", "Сначала старые", "Сначала мои предложения"]
    const dispatch = useDispatch()
    const sorting = useSelector(state => state.sortingSlice.sorting)
    const choseSort = (index) => {
        dispatch(changeSorting({sort: sortMethods[index]}))
        setSortDropDown(false)
    }

    return (
        <div className={styles.sortBarWrapper}>
            <div
                className={styles.sortBar}
                onClick={() => setSortDropDown(!sortDropDown)}
            >
                <span>{sorting}</span>
                <div className={(sortDropDown ? styles.sortIcon + " " + styles.activeSortIcon : styles.sortIcon)}>
                    <img
                        src={getImage("sortIcon")}
                        alt="#"
                    />
                </div>
            </div>

            <div className={styles.sortDropDown + " " + (sortDropDown ? styles.sortDropDownActive : styles.sortDropDownDisactive)}>
                {sortMethods.map((sort, index) => (
                    <span
                        key={index}
                        onClick={() => choseSort(index)}
                    >
                        {sort}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SortDropDown;