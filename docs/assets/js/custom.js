$(document).ready(function () {
  let imageGroups = []
  $(".lightbox").each(function () {
    let imageSource = $(this).attr('src')
    let imageAlt = $(this).attr('alt').replace(/ /g,"")
    let imageTitle = $(this).attr('alt')
    if (imageTitle) {
      imageTitle = 'title="' + imageTitle + '" '
    }
    else {
      imageTitle = ''
    }
    $(this).
        wrap('<a class="boxedThumb ' + imageAlt + '" ' +
            imageTitle + 'href="' + imageSource + '"></a>')
    imageGroups.push('.' + imageAlt)
  })
  jQuery.unique(imageGroups)
  imageGroups.forEach(imageGroupsSet)

  function imageGroupsSet (value) {
    $(value).simpleLightbox()
  }
})
