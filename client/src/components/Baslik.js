import React from 'react'
import {Link} from 'react-router-dom'

export default function Baslik() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Makale listesi</Link></li>
                <li><Link to="/ekle">Makale ekle</Link></li>
            </ul>
        </nav>
    )
}
