import React from 'react'
import Link from 'next/link'
import { add } from '@greatgift/common'



export default () => (
    <ul>
        <li><Link href='/a' as='/a'><a>a</a></Link></li>
        <li><Link href='/b' as='/b'><a>b</a></Link></li>
        <li>{add(43, 8)}</li>
    </ul>
)