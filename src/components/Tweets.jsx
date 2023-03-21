import { useState, useEffect } from 'react'

export const Tweets = () => {

    const [tweetList, setTweetList] = useState([])

    //write the logic that sends request to the server, gets the tweets list, and show it.
    //Overall, the tweet list should be displayed on the main page of our new app.
    useEffect(() => {
        fetch('http://localhost:4000/tweets?apikey=1234')
            .then((response => {
                response.json().then(data => {
                    setTweetList(data.data)
                })
            }))
    }, [])

    const renderList = () => {
        return tweetList.map(tweet => {
            return <h4 key={tweet.id}> {tweet.name}:{tweet.text}</h4>
        })
    }

    return (
        <div>
            <h3>Tweet List</h3>
            {tweetList.length === 0 ? <h4>Loading...</h4> :
            renderList()}
        </div>
    )


}