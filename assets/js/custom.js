$(document).ready(function () {

    /* Convert a loose structure of:

       article
         .step-title
         .step-thumb
         .step-thumb
         <content>
         .step-title
         .step-thumb
         .step-thumb
         <content>

       into a strict hierarchy of containers:

       article
         .step
           .step-title
           .step-thumbs
             .step-thumb
             .step-thumb
           .step-contents
             <content>
         .step
           .step-title
           .step-thumbs
             .step-thumb
             .step-thumb
           .step-contents
             <content>
         */

    /* First, wrap all "step-title" article elements and all elements
       until next such element or end of article into a "step" div */
    $("article").each(function () {
        var step = $();
	var wrap = false;
        $(this).contents().each(function () {
            if ($(this).hasClass("step-title")) {
		if (wrap && step.length > 1) {
                    step.wrapAll('<div class="step" />');
                }
                step = $();
		wrap = true;
            }
	    step = step.add($(this));
        });
        if (wrap && step.length > 1) {
            step.wrapAll('<div class="step" />');
        }
    });

    /* Then wrap all "step step-thumb" elements into a "step-thumbs"
       div */
    $(".step p").each(function () {
        var thumbs = $();
        $(this).contents().each(function () {
            if ($(this).hasClass("step-thumb")) {
		thumbs = thumbs.add($(this));
	    }
        });
        if (thumbs.length > 0) {
	    thumbs.unwrap();
            thumbs.wrapAll('<div class="step-thumbs" />');
        }
    });

    /* Then wrap all other except "step step-title" ones into a
       "step-contents" div */
    $(".step").each(function () {
	var contents = $();
        $(this).contents().each(function () {
            if (!$(this).hasClass("step-title") &&
		!$(this).hasClass("step-thumbs") &&
		!$(this).hasClass("step-thumb")) {
		contents = contents.add($(this));
	    }
        });
        if (contents.length > 0) {
            contents.wrapAll('<div class="step-contents" />');
        }
    });

    /* Create the large "step-picture" from the first thumbnail in a
       "step-thumbs" */

    /* For each first thumbnail in a "step-thumbs" */
    $(".step-thumbs img:first-child").each(function () {

        /* Clone first thumbnail, change its class to create the
           "step-picture" by default and insert it in the parent
           step */
        $(this)
            .clone()
            .removeClass("step-thumb")
            .addClass("step-picture")
	    .addClass("lightbox")
            .insertBefore($(this).parent());

        /* Make the first thumbnail active by default */
        $(this).addClass("active");
    })

    let imageGroups = []
    $(".lightbox").each(function () {
	let imageSource = $(this).attr('src')
	let imageAlt = $(this).attr('alt').replace(/ /g,"")
	let imageTitle = $(this).attr('alt')
	if (imageTitle) {
	    imageTitle = 'title="' + imageTitle + '" '
	} else {
	    imageTitle = ''
	}
	$(this).
            wrap('<a class="boxedThumb step-picture ' + imageAlt + '" ' +
		 imageTitle + 'href="' + imageSource + '"></a>')
	imageGroups.push('.' + imageAlt)
    })
    jQuery.unique(imageGroups)
    imageGroups.forEach(imageGroupsSet)

    function imageGroupsSet (value) {
	$(value).simpleLightbox()
    }
})
  
/* Attach a delegate function on mouse over thumbnail to change the
   step main picture and radio-toggle the thumbnails */
$(".step-thumb").on("mouseover", function() {

    /* Set picture image source to the thumbnail image source */
    $(this).closest(".step").find(".step-picture").attr("src", $(this).attr("src"));
    $(this).closest(".step").find(".boxedThumb").attr("href", $(this).attr("src"));
    $(this).closest(".step").find(".boxedThumb").attr("title", $(this).attr("alt"));

    /* Activate the corresponding thumbnail and deactivate all others */
    $(this).addClass("active")
        .siblings().removeClass("active");
});
