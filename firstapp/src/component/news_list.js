import React from 'react';

const NewsList = (props) => {
    console.log('getting in newslist>>>>', props)

    const output = props.newsdata.map((item) => {
        return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })
    return (
        <div>
            {output}
        </div>
    )
}

export default NewsList;