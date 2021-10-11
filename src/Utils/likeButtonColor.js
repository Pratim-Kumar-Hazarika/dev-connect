export function likeColorHandler(likedUsers,loggedInUser) {
    const ifLiked = likedUsers?.find(({_id}) => _id === loggedInUser) 
    return ifLiked
        ? "#F472B6"
        : ""
}