---
title: how i created this website
date: 2020-08-05 15:21:07
tags:
---

## How I created this website

I use [Hexo](https://hexo.io/) as a static site generator, EJS for templating, and host for free via GitHub pages. I ultimately went with Hexo for the fast build times (sorry Jekyll) and my familiarity with Node.JS and `npm`. If I want to switch technologies later, it'll be easy since all the articles here are generated from markdown files from my laptop.

### Alternatives I considered:

Here's my thought process for choosing among the myriad of technologies available to create a personal website. There's website builders, content management systems (CMS), or you can code your website yourself. I chose to code my website myself for the fun/challenge/flexibility.

**Static Site Generator (SSG)**

Chances are you don't write your notes in HTML (and you shouldn't). Instead of writing your articles in HTML, you can write them in markdown (a more human-readable format) and use a SSG to "compile" your markdown down to the HTML your browser understands. [StaticGen](https://www.staticgen.com/) is a useful website to compare among static site generators. Here are SSGs I considered:

* Jekyll
  * GitHub pages default. Requires Ruby. Very popular and huge community, but slow build time.
* Hugo
  * Fast build time. Written in Go. You don't need to know Go if you use a pre-made theme, but I want the flexibility of designing my own theme.
* 11ty
  * Simple. Also written JavaScript. But it's newer and doesn't have as huge community behind it just yet.
* Gatsby
  * React is too much overhead for this simple website
* Pelican.
  * Written in Python. Cool, I know a bit of Python myself. Maybe I'll look into this later.

**Content Management System (CMS)**

If you want something quick and easy, CMS is for you. I haven't looked into CMS myself, but maybe I should. Here are a few CMS options I'm thinking about:

* WordPress
  * Google reveals "In 2020, over 455 million websites use WordPress.com. That means that the WordPress market share is 35% of all websites in the world!"
* Drupal
* Joomla
* Ghost
  * Open source headless Node.js CMS
