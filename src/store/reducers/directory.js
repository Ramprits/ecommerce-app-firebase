export const INITIAL_DIRECTORIES = "INITIAL_DIRECTORIES";
export const DIRECTORIES_LOADED = "DIRECTORIES_LOADED";
const initialState = {
  directories: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats",
      size: 4,
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "",
      size: 4,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "",
      size: 4,
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "",
      size: 6,
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "",
      size: 6,
    },
  ],
  loading: false,
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIAL_DIRECTORIES:
      return { ...state, loading: true, errorMessage: "" };
    case DIRECTORIES_LOADED:
      return { ...state, loading: false, errorMessage: "" };
    default:
      return state;
  }
};
