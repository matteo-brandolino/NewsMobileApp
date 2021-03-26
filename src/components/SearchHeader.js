import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Input } from 'react-native-elements';
import { GlobalContext } from '../context/GlobalState';

function SearchHeader() {
    const [input, setInput] = useState()
    const inputRef = React.createRef();

    const { setQuery, setLoading, setSuccess } = useContext(GlobalContext);

    const preparingQuery = ( value ) => {
        setLoading()
        setInput(value)
    }
    const setValue = ( value ) => {
        setQuery(value)
        setSuccess()
    }
    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, [])

    return (
        <>
            <StatusBar backgroundColor='#7C0A02' />
            <Input
                ref={inputRef}
                placeholder="Search Topics"
                style={styles.search}
                containerStyle={{position:'absolute', top:-28}}
                inputContainerStyle={{borderBottomWidth:0, color:'white'}}
                onChangeText={val => preparingQuery(val)}
                onSubmitEditing={() => setValue(input)}
                
            />
        </>
    )
}

const styles = StyleSheet.create({
    search: {
        fontSize: 22,
        color:'white'
    }
})

export default SearchHeader

