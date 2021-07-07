import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPhotoAlbum } from "../redux/ActionsAlbum";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import "../components/Photoalbum.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Photoalbum = () => {
  const [searchInput, setInput] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const { error, result, photos } = useSelector((state) => state);

  const handleSearchInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = () => {
    if (searchInput === "") {
      alert("This field is required!");
    } else if (searchInput <= 0) {
      alert("zero and negative numbers is not allowed!");
    } else {
     
      dispatch(GetPhotoAlbum(searchInput));
    }
  };

  useEffect(() => {
    if (result) {
      setInput("");
  
    }
    if (error) {
   
      setInput("");
    }
  }, [error, result, photos]);

  return (
    <div>
      <Container maxWidth="sm">
        <div>
          <form className={classes.root}>
            <input
              type="number"
              value={searchInput}
              name="album"
              className=" search-box"
              onInput={handleSearchInputChange}
              placeholder="search album by id ..."
            />

            <Button
              size="small"
              style={{ fontSize: 8, height: 46 }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className="search-button"
            >
              Search
            </Button>
          </form>
        </div>

        <div className="photo-wrapper">
          <div className="container">
            <div id="photo">
              {photos.map((photo, index) => (
                <div className="photo-item" key={index}>
                  <div className="photo-name">
                    <img
                      className="images"
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                    />
                    <h2>{photo.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Photoalbum;
