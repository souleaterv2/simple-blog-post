exports.redmore = function (arrayOfPost) {
    let newArrayOfPost = [];
    let cont = 0;
    arrayOfPost.forEach((post)=>{
        postCoverted = {
            title:post.title,
            post: `<p>${post.post.substr(0, 30)}<span>...</span><a href='/post?id=${cont}'>Read More</a>`
        };
        newArrayOfPost.push(postCoverted);
        cont++;
    });

    return newArrayOfPost;
};