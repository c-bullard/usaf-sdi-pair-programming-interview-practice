class Blog {
  constructor() {
    this.posts = [];
  }

  getBlogPosts() {
    if (this.posts.length === 0) {
      return 'There are 0 blog posts';
    }
    return this.posts.map((post) => post.title);
  }

  addBlogPost(post, author = null, genre) {
    this.posts.push({ title: post, author, genre });
  }

  getBlogAuthors() {
    return this.posts.filter((post) => post.author).map((post) => post.author);
  }

  getSpecificBlogAuthor(title) {
    const post = this.posts.find((post) => post.title === title);
    if (!post) {
      return 'No such blog post';
    }
    if (!post.author) {
      return 'Blog has no author';
    }
    return post.author;
  }

  getBlogsFromGenre(genre) {
    const selection = this.posts.filter((post) => post.genre === genre);
    return selection;
  }

  getAllGenres() {
    const genres = this.posts.map((genre) => genre.genre);
    if (genres.length === 0) {
      return 'There are no genres available';
    }

    return genres;
  }

  addComment(title, user, comment) {
    const article = this.posts.find((post) => post.title === title);
    article.comments = article.comments || [];
    article.comments.push({ user, comment });
  }

  getBlogComments(title) {
    const blogPost = this.posts.find((post) => post.title === title);
    if (!blogPost.comments || blogPost.comments.length === 0) {
      return [];
    }
    return [{ user: blogPost.user, comments: blogPost.comments }];
  }

  getCommentsBy(user) {
    const results = { user: user, comments: [] };
    const matchingPosts = this.posts.filter((post) =>
      post.comments.some((c) => c.user === user),
    );
    results.comments = matchingPosts.map((post) => {
      const match = post.comments.find((c) => c.user === user);
      return { article: post.title, comment: match.comment };
    });
    return results;
  }

  deleteBlog(title) {
    const post = this.posts.filter((p) => p.title === title);
    const index = this.posts.indexOf(post);
    return this.posts.splice(index, 1);
  }
}

module.exports = Blog;
