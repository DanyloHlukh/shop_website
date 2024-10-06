'use client'

// import { useState, useEffect } from 'react'
// import Image from "next/image"
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
    const {setTheme, resolvedTheme} = useTheme()
    // const [mounted, setMounted] = useState(false)
    //
    // useEffect(() => setMounted(true), [])
    //
    // if (!mounted) return (
    //     <Image
    //         src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
    //         width={36}
    //         height={36}
    //         sizes="36x36"
    //         alt="Loading Light/Dark Toggle"
    //         priority={false}
    //         title="Loading Light/Dark Toggle"
    //     />
    // )


    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 transition bg-gray-200 rounded-md dark:bg-gray-800"
        >
            {resolvedTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );

}