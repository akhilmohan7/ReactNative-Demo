/**
 * File: Home.tsx
 * -----
 * Created Date: Friday November 11th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Fri Nov 18 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */


import React from 'react';
import data from '../../assets/Test.json'
import FormHome from '../../components/Form/FormHome';

export default function Search() {

    return (
        <FormHome
            data={ data }
        />
    )
}