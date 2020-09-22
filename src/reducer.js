export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token:
    "BQCDqJ_SJrXYc6E1uGQU8dhivXTdB7aYnZi-kEMbeo33KW4fjCwceQMI1WLLxpgmqb9lvJv5PojYYk6JcP4wxkUkR7D_5VX3asOWtohXbiJT8GFKuxX-5GcgE4ahfNGJIXutl9Je8t5wY_4GfpAShltDu2v-GcCphsJo3mUpoxC89wjJ",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
