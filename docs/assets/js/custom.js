$(document).ready(function () {
  let imageGroups = []
  $(".lightbox").each(function () {
    let imageSource = $(this).attr('src')
    let imageTag = $(this).attr('tag')
    let imageTitle = $(this).attr('title')
    if (imageTitle) {
      imageTitle = 'title="' + imageTitle + '" '
    }
    else {
      imageTitle = ''
    }
    $(this).
        wrap('<a class="boxedThumb ' + imageTag + '" ' +
            imageTitle + 'href="' + imageSource + '"></a>')
    imageGroups.push('.' + imageTag)
  })
  jQuery.unique(imageGroups)
  imageGroups.forEach(imageGroupsSet)

  function imageGroupsSet (value) {
    $(value).simpleLightbox()
  }
})
