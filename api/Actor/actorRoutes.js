const express = require("express");
const actors = require("./actorControllers");
const router = express.Router();

router.param("actorId", async (req, res, next, actorId) => {
  const actor = await actors.fetchActor(actorId, next);
  if (actor) {
    req.actor = actor;
    next();
  } else {
    const err = new Error("Actor Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", actors.getAllActors);
router.post("/", actors.createActors);
router.delete("/:actorId", actors.deleteActors);
router.put("/:actorId", actors.updateActors);

router.put("/:movieId/:actorId", actors.addMoviesToActors);

module.exports = router;
