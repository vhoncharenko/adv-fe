$( document ).ready( function () {

    var postFullViewTemplate = Handlebars.compile( $( '#post-full-view-template' ).html() );
    var postCommentsTemplate = Handlebars.compile( $( '#post-comments-template' ).html() );
    var postsRelatedTemplate = Handlebars.compile( $( '#posts-related-template' ).html() );

    Handlebars.registerPartial( 'post-related', $( '#post-related-template' ).html() );
    Handlebars.registerPartial( 'post-comment', $( '#post-comment-template' ).html() );

    Handlebars.registerHelper('stripes', function(index, options) {
        return index % 2 == 0;
    });

    render();

    function render() {
        renderPost();
        renderComments();
        renderRelatedPosts();
        subscribeHandlers();
    }

    function renderPost() {
        var post = Data.getCurrentPost();

        $( '.post-container__full-view' ).html( postFullViewTemplate({
            imgUrl: post.imgUrl,
            userId: post.userId,
            description: post.description
        }) );
    }

    function renderComments() {
        var postComments = Data.getPostComments();

        $( '.post-container__comments' ).html( postCommentsTemplate({
            comments: postComments
        }) );
    }

    function renderRelatedPosts() {
        var relatedPosts = Data.getRelatedPosts();

        $( '.post-container__related-posts' ).html( postsRelatedTemplate({
            postsRelated: relatedPosts
        }) );
    }

    function subscribeHandlers() {
        $( '.post-related' ).click( function ( event ) {
            var id = $( this ).data( 'id' );
            if ( id === undefined ) {
                return;
            }
            window.location.href = 'post.html?id=' + id;
        } );
    }

});

