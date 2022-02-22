const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.nav_logo, .nav_links, .button, .main_text, .footer_space`, {delay: 600, origin: 'left'})
sr.reveal(`.woman_img`, {origin: 'right'})
sr.reveal(`.cards`, {delay: 800, origin: 'right'})
sr.reveal(`.main_title`, {delay: 1900, origin: 'left'})
sr.reveal(`.card_text, .rect, .rect_under`, {delay: 900, origin: 'top'})

sr.reveal(``, {origin: 'top', interval: 100})