import { useState } from 'react'

export default function Card({ title }) {
    const [hasLiked, setHasLiked] = useState(false)
    return (
        <button onClick={() => setHasLiked(!hasLiked)}>
            {title} {hasLiked ? "Liked" : "Like"}
        </button>
    )
}