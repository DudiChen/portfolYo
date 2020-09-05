import { useEffect, useState } from "react"

export const serverPath = '192.168.1.24'


export const fetchFromServer = async (route, method, body = null) => {

    const options = {
        method
    }
    if (body && !!body) {
        Object.assign(options, {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
    }
    const res = await fetch(`/${route}`, options)

    if (res.ok) {
        // handle some default when accept
        return await res.json()
    }
    else {
        // handle some default when rejected
    }
}