export default (req, res) => {
    const posts = [
        { slug: 'post-1' },
        { slug: 'post-2' },
        { slug: 'post-3' }
    ]

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(posts))
  }