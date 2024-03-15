export const homepageVideos = (req, res) => res.render("index");
export const upload = (req, res) => res.render("watch");
export const search = (req, res) => res.render("edit");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};
export const remove = (req, res) => {
  return res.send("Delete");
};
