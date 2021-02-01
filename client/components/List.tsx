import * as React from 'react'
import ListItem from './ListItem'
import {User} from '../interfaces'
import {useActions} from "../hooks/useActions";
import {useEffect} from "react";

type Props = {
    items: User[]
}

const List = ({items}: Props) => {

    const {fetchCell2} = useActions()

    useEffect(() => {
        fetchCell2()
    }, [])

    return <ul>
        {items.map((item) => (
            <li key={item.id}>
                <ListItem data={item}/>
            </li>
        ))}
    </ul>
}


export default List
