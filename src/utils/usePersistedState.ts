import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem('light')

        if(storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })

    useEffect(() => {
        if(state === key)
        setState(localStorage.getItem(key))
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState