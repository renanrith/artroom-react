import React, { useState, useEffect, createContext } from "react";

export const CommentContext = createContext();

export default function CommentProvider({children}) {
    const [postId, setPostId] = useState(null);
    
    return (
        <CommentContext.Provider value={{postId, setPostId}}>
        {children}
    </CommentContext.Provider>
    )
}