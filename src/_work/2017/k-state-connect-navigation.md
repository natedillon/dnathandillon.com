---
published: true
featured: false

title: K-State Connect Navigation
description: |
  Redesigned navigation for the K-State Connect website.
date: 2017-03-28 # Released in Connect v1.41.0
date_start:
agency: Kansas State University, Office of Mediated Education
client: Kansas State University
logo:
image: /assets/img/work/2017/k-state-connect-navigation/image.jpg
thumb:
links:
  - title: Website
    url: https://connect.k-state.edu
    type: # website, source, article
    active: false
  - title: Blog Post
    url: https://ntdln.com/2017/04/14/connect-navigation/
    type: # website, source, article
    active: false
services:
  - Design
  - Front-end development
tools:
  - Python
  - Django
  - CSS
  - Sass
  - JavaScript
  - jQuery
  - Bootstrap
  - Grunt
  - npm
  - Vagrant
tools_additional:
  - BEM
fonts:
  -
icons:
  - Font Awesome
colors:
  - '#512888'
team:
  - name: Jon Faustman
    role: Front-end development
notes:
  -
---

Serving as a dashboard of various services for Kansas State University, K-State Connect was in need of a re-designed navigation system. The K-State <abbr title="Office of Mediated Education">OME</abbr> Web Team wanted to provide better access to the “widgets” within the Connect dashboard for both large and small screens.

## Large Screens

For large screens, we decided on a dropdown list of each of the activated widgets. The dropdown list appears when hovering over the “Dashboard” navigation item. This was done with pure CSS, no JavaScript required. If for some reason the sub-nav is not accessible, the menu item works just as a normal link, taking the user to the dashboard page when clicked/tapped.

<figure>
  <img src="/assets/img/work/2017/k-state-connect-navigation/connect-nav-large.jpg" alt="connect-nav-large">
  <figcaption>Navigation on large screens</figcaption>
</figure>

If JavaScript is available, the nav bar sticks to the top of the screen, allowing access to the menu at all times.

<figure>
  <img src="/assets/img/work/2017/k-state-connect-navigation/connect-nav-large-scrolled.jpg" alt="connect-nav-large-scrolled">
  <figcaption>Navigation bar when scrolling on large screens</figcaption>
</figure>

## Small Screens

On small screens, the nav bar also sticks to the top of the screen when scrolling, just as it does on large screens.

<figure>
  <img src="/assets/img/work/2017/k-state-connect-navigation/connect-nav-small-scrolled.jpg" alt="connect-nav-small-scrolled">
  <figcaption>Navigation bar when scrolling on small screens</figcaption>
</figure>

When open, the navigation expands to the full height of the screen. Clicking/tapping a menu item with sub-navigation will open the sub-nav.

<figure>
  <img src="/assets/img/work/2017/k-state-connect-navigation/connect-nav-small-subnav.png" alt="connect-nav-small-subnav">
  <figcaption>Sub-navigation on small screens</figcaption>
</figure>

When JavaScript is not available, the main menu items are displayed at the top of the page and the sub-nav is hidden, leaving only the absolutely necessary items and making the navigation as small as possible.

<figure>
  <img src="/assets/img/work/2017/k-state-connect-navigation/connect-nav-small-no-js.jpg" alt="connect-nav-small-no-js">
  <figcaption>Navigation on small screens without JavaScript</figcaption>
</figure>
