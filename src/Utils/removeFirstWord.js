export function removeFirstWord(replyTo,userNameFlag) {
    let comment = replyTo || ''
    if(userNameFlag === false){
        return replyTo;
    }else{
        comment = comment.split(" ")
        comment.shift()
        comment = comment.join(" ")
        return comment
    }
}
