import request from 'superagent'

export  const getTracks = (callback) => {
    request
      .get("http://api.soundcloud.com/tracks")
      .query({
        q: 'piano',
        client_id: "MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL"
      })
      .end((err, res) => {
         callback(err, res.body)
      })
  }
