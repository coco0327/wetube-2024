let videos = [
  {
    title: "video#1",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "video#2",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "video#3",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 9,
    id: 3,
  },
];

export const homepageVideos = (req, res) =>
  res.render("index", { pageTitle: "Home", videos });

export const watch = (req, res) => {
  const { id } = req.params;
  //  === const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  console.log(req.body);
  let newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 0,
    createdAt: "2 minutes ago",
    views: 1,
    id: 4,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
