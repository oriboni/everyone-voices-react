import React, {useCallback, useMemo, useState} from 'react';
import getImage from "../../utils/getImage";
import styles from './SortFilterBar.module.css'
import useInput from "../../hooks/useInput";
import SortDropDown from "../sortDropDown/SortDropDown";
import FilterDropDown from "../filterDropDown/FilterDropDown";

const SortFilterBar = () => {



    return (
        <div className={styles.wrapper}>
            <SortDropDown/>
            <FilterDropDown/>
        </div>
    );
};

export default SortFilterBar;