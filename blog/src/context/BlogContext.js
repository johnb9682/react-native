import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

    console.info(children);

    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
};