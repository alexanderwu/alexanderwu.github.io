---
title: how i created this website
date: 2020-08-05 15:21:07
tags:
---

## How I created this website

I use [Hexo](https://hexo.io/) as a static site generator and host for free via [GitHub Pages](https://pages.github.com/). You can view the source code [here](https://github.com/alexanderwu/alexanderwu.github.io).

I went with Hexo for the fast build times (sorry Jekyll) and because my familiarity with Node.js and npm. If I want to switch technologies later, it'll be easy since all the articles here are generated from [Markdown](https://en.wikipedia.org/wiki/Markdown) files from my laptop.

### Alternatives I considered:

Here's my thought process for choosing among the myriad of technologies available to create a personal website. There are website builders, content management systems (CMS), or you can code your website yourself. I chose to code my website myself (with the help of Hexo) for the fun/challenge/flexibility.

**Static Site Generator (SSG)**

Chances are you don't write your notes in HTML (and you shouldn't). Instead of writing your articles in HTML, you can write them in Markdown (a more human-readable format) and use a SSG to "compile" your markdown down to the HTML your browser understands. [StaticGen](https://www.staticgen.com/) is a useful website to compare among static site generators. Here are SSGs I considered:

* Jekyll
  * GitHub pages default. Requires Ruby. Very popular and huge community, but slow build time.
* Hugo
  * Fast build time. Written in Go. You don't need to know Go if you use a pre-made theme, but I wanted the flexibility of designing my own theme.
* 11ty
  * Simple. Also written JavaScript. But it's newer and doesn't have as huge community behind it just yet.
* Gatsby
  * React.js is too much overhead for this simple website. Also, I'm a beginner with React.js.
* Pelican.
  * Written in Python. Cool, I know a bit of Python myself. Maybe worth checking out later.

**Content Management System (CMS)**

If you want something quick and easy, CMS is for you. No coding necessary. I haven't looked much into using a CMS myself, but here are a few options I thought about:

* WordPress
  * The most popular option. Google search reveals "In 2020, over 455 million websites use WordPress.com. That means that the WordPress market share is 35% of all websites in the world!"
* Drupal
* Joomla
* Magento
* Ghost
  * An open source headless Node.js CMS. To be honest, I'm not sure what a "headless CMS" is at the moment, but maybe I'll look into it later.
