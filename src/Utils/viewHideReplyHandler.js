export function viewHideReplyHandler({comment,index,parrentCommentId,comments,filterComments,setPriorityArray}){

    const getCommentsWhichIsNotPresent = comments[index].childrenComments.filter(comment => !filterComments[index].childrenComments.includes(comment))
    
    const partiCularCommentArray = comment.childrenComments.length 
    const mainCommentsArray =  comments[index].childrenComments.length
  
    if(partiCularCommentArray === mainCommentsArray){
        filterComments = filterComments.map((comment)=>(
            comment.parrentCommentId === parrentCommentId ?{
                ...comment,
                childrenComments:comment.childrenComments.slice(0,1)
            }: comment
        ))
        setPriorityArray(filterComments)
    } else{
        filterComments = filterComments.map((comment)=>(
            comment.parrentCommentId === parrentCommentId ?{
                ...comment,
                childrenComments:[...comment.childrenComments,getCommentsWhichIsNotPresent[0]]
            }:comment
        ))
        setPriorityArray(filterComments)
    }  
    }

    export  function showRepliesNumber({num1,num2}){
        return num1-num2
      }