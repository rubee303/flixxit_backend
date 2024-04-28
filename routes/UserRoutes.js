const { addToLikedMovies, getLikedMovies, removeFromLikedMovies, } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.post("/liked", getLikedMovies);
router.put("/delete", removeFromLikedMovies);


module.exports = router;
