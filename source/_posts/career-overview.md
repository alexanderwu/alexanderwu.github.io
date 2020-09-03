---
title: career overview
date: 2020-08-28 22:02:31
tags:
---

Here is a summary of my work experience, sorted by newest first.

## Halicioglu Data Science Institute (HDSI)

<img src="{% asset_path hdsi.png %}" height="50px"/>

HDSI is a university department at UC San Diego recently established in 2018 to train students, faculty, and industry partners to apply data science in new and novel ways. Halicioglu is pronounced HAW-LI-JI-OH-LOO.

My official title at HDSI was "Graduate Student Researcher", but "Navy contractor" is probably a more fitting title. Worked from April 2019 to July 2020 (1 year 4 months), part-time during the school year and full-time during summer.

The project I worked on was in collaboration with NAVWAR (Naval Information Warfare Systems Command). Essentially, it was a pilot project to demonstrate how the Navy can make use of the huge amounts of data they have collected over the years. It was a push towards a culture of  data-driven decision making within the Navy.

Throughout my employment I looked at various data sources, but the main thread connecting all these efforts was analyzing what factors most impact a crew's ability to operate and maintain their complex shipboard IT networks. I looked at data such as sailor training/experience, text fields from IT trouble tickets, ship history (whether ship is at sea vs in port), etc.

Most of the work was done in Python within [Jupyter Notebooks](https://jupyter.org/). Used Pandas (python package) for wrangling data, cleaning data, and joining data sources. Most visualizations were done with Matplotlib and Seaborn (python package built on top of Matplotlib).

I enjoyed the customer facing aspect of the job. Every week or so, the UCSD team (consisting of a few grad students and our PI Henrik Christensen) would hold meetings with a Navy representative to report progress.

* Links:
  * HDSI website: https://datascience.ucsd.edu/
  * NAVWAR website: https://www.public.navy.mil/navwar/Pages/default.aspx
  * NAVWAR press article: https://www.doncio.navy.mil/CHIPS/ArticleDetails.aspx?ID=12640

## Aruba Networks

<img src="{% asset_path aruba.png %}" height="50px"/>

The summer of 2018, after I graduated UCSB and was heading to UCSD for my Masters, I worked as a data science intern at Aruba Networks. Mid-sized company recently acquired by HPE. Their main competitor is Cisco.

I prototyped a new feature in Aruba NetInsight to automatically detect sudden changes in daily WiFi network efficiency (bytes delivered divided by airtime used). NetInsight is a cloud based dashboard used by network administrators to monitor their WiFi network; it offers automated insights (along with root causes) and suggests changes to improve the network.

My main contributions:

1. Writing the PySpark script for ETL.
   * Terabytes of raw data collected from ~15 buildings in the span of ~1 year. To efficiently filter this volume of data, we use elastic cloud compute. Spark is great for this because it does in-memory map reduce.
2. Interactively visualizing the change detection model with Bokeh (Python visualization package)
   * Since the model is unsupervised, we rely on visualizing model outputs to appropriately tune the model.
   * Model uses convex optimization via cvxpy (Python package). Totally different from the garden variety machine learning algorithms I learned from school.

* Links:
  * Aruba NetInsight overview: https://www.arubanetworks.com/techdocs/NetInsight/Content/ArubaFrameStyles/Overview/Overview.htm
  * Aruba NetInsight data sheet: https://www.arubanetworks.com/techdocs/NetInsight/Content/ArubaFrameStyles/PDFs/DS_NetInsight.pdf

## Northrop Grumman

<img src="{% asset_path northrop.png %}" height="50px"/>

Summer of 2016, I worked as a software engineer intern for Northrop Grumman, a defense contractor for the U.S. government.

It was my first taste of Agile methodology and Jira (for issue tracking and code reviews). Very different process than my previous internship at a small company (ProDIGIQ).

Worked on a integrating part of the GUI (graphical user interface) on an autonomous vehicle. Although the project is unclassified, interns were told not to disclose the exact plane.

Codebase was primarily in Java. Used WireShark from time to time to analyze that the correct network packets were being sent/received by the GUI. Interfaced with airplane pilot for feedback on GUI design.

First heard of VS Code from a co-worker here.

## ProDIGIQ

<img src="{% asset_path prodigiq.jpg %}" height="50px"/>

My first internship. I was referred by an acquaintance who interned there the year before. Small company (~15 people) based in Thousand Oaks.

Worked on customizing Ruby on Rails web applications for four airports. I helped digitize FAA Part 139 inspection forms, manage airport leases, track wildlife incidents, and monitor flight delays. Worked with both front-end and back-end. Picked up HTML, CSS, JavaScript, and Bootstrap. Designed MySQL database schema to collect additional data (each client has different needs) and queried database to debug data input and updates.

Very rewarding experience. Taught me that what you learn is school and what is actually applied in the real world are two separate things. College gives you the fundamentals and teaches you how to learn, but is not sufficient to thrive in the work place. You must be proactive about keeping up with industry trends and tools being used.

* Link:
  * All interns write about their experience at the end of their intership: https://www.prodigiq.com/site/prodigiq-internships
