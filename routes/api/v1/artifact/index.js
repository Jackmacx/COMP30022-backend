"use strict";
const router = require("express").Router();
const addArtifact = require("./addartifact");
const delArtifact = require("./delartifact");

router.post("/add", addArtifact);
router.post("/del", delArtifact);

module.exports = router;
