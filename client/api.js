import request from 'superagent'

export  const getTracks = (query, callback) => {
    request
      .get("http://api.soundcloud.com/tracks")
      .query({
        q: query || 'bad blood',
        client_id: "MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL"
      })
      .end((err, res) => {
         console.log(res.body)
         callback(err, res.body)
      })
  }
