# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub](https://github.com/patrickbvargas/sunnyside-agency-landing-page)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Use source to provide enhanced images for screen media.

```html
<picture>
  <source
    media="(max-width: 400px)"
    srcset="./images/mobile/image-gallery-milkbottles.jpg"
  />
  <img
    src="./images/desktop/image-gallery-milkbottles.jpg"
    width="100%"
    height="auto"
    alt="Milk bootles"
  />
</picture>
```

Use a pseudo-class to select elements.

```css
.services-primary-item:first-child .services-content {
  justify-self: end;
}

.services-primary-item:nth-child(4) .services-content {
  justify-self: start;
}
```

### Continued development

I will focus my studies on the following topics

- Responsive layout
- CSS preprocessor
- Mobile First workflow

### Useful resources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

## Author

- Website - [Patrick Vargas](https://github.com/patrickbvargas)
- Frontend Mentor - [@patrickbvargas](https://www.frontendmentor.io/profile/patrickbvargas)
