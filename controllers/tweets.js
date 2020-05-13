exports.getTweets = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "1st Post", content: "This is the first post" }],
  });
};

exports.createTweets = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Post created succesfully",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
