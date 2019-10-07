"use strict";

const addArtifact = (req, res) => {
  const { register_id, name, family_members, description, date, lat, lon } = req.body;

  [register_id, name, family_members, description, date, lat, lon]
  .forEach(element => {
    if (element === undefined) {      
      res.status(400).json({ error: "incorrect schema" });
      return;
    }
  });

  req.app.locals.db.artifact
    .create(res.locals.authenticatedEmail, register_id, name, family_members, description, date, lat, lon)
    .then(() => {
      res.status(200).json({ message: "successfully added artifact"});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err.message });
    });
  
};

module.exports = addArtifact;
