
let userModel =  {
    _id: ObjectId(),
    firstName: String,
    sureName: String,
    username: String
}

let userExample = [
    {
        _id: "asjdkljas8213as",
        firstName: "Stephan",
        sureName: "Ljungros",
        username: "stlj"
    },
    {
        _id: "1283092183sad",
        firstName: "Alexandre",
        sureName: "Previ",
        username: "alpr"
    }
]

let postModel = {
    _id: ObjectId(),
    title: String,
    content: String,
    userId: ObjectId() | String,
    comments: Array of ObjectId(),
}

let postExample = {
    _id: "1231123sada",
    title: "This is a title",
    content: "This is some content",
    userId: "asjdkljas8213as",
    comments: ['21398219083asda', '12390912asdas']
}

let commentModel = {
    _id: ObjectId(),
    content: String,
    userId: ObjectId() | String
}

let commentExample = {
    _id: "213890921831",
    content: "This is a comment",
    userId: "1283092183sad"
}