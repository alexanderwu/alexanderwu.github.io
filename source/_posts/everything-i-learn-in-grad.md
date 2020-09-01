---
title: everything i learned at UCSD
date: 2020-08-25 11:33:39
tags:
---

(this article is incomplete)

I did my Computer Science M.S. at UC San Diego, specializing in artificial intelligence. I decided to pursue a Masters because I love learning and felt I could benefit from more knowledge in machine learning and AI.

Decided early on that I didn't want to pursue a PhD. I feel a PhD is too specialized and too much of a sacrifice/commitment when I could be earning money applying what is already known. Research is an important and intellectually satisfying, don't get me wrong, but it's certainly not for everyone. I've heard of PhDs described as roller coaster - with very high highs and very low lows.

Anways, here are some of my takeaways from doing grad school at UCSD.

---

## Fall 2018

__CSE 219 - Design at Large__ (1 unit)

_New societal challenges, cultural values, and technological opportunities are changing design—and vice versa. The seminar explores this increased scale, real-world engagement, and disruptive impact. Invited speakers from UC San Diego and beyond share cutting-edge research on interaction, design, and learning._

* (Meets one hour a week. Don't remember much from this seminar.)

__CSE 250A - Principles of Artificial Intelligence: Probabilistic Reasoning and Learning__

_Methods based on probability theory for reasoning and learning under uncertainty. Content may include directed and undirected probabilistic graphical models, exact and approximate inference, latent variables, expectation-maximization, hidden Markov models, Markov decision processes, applications to vision, robotics, speech, and/or text._

* Lots and lots of Bayes' rule. I've practically got it memorized: P(A|B) = P(B|A)P(A)
* Belief networks (BNs) = Directed Acyclic Graphs (DAGs) + Conditional Probability Tables (CPTs)
  * d-separation is a criterion for deciding whether a set of variables X is independent of another set Y, given a third set Z
  * Approximate inference in BNs with MCMC (Markov Chain Monte Carlo) "simulation"
* Hidden Markov Models (HMMs)
  * Viterbi algorithm to find mostly likely sequence of hidden states
* Reinforcement learning
  * Markov Decision process (MDP)
  * Discounted, infinite horizon return
  * Bellman's equation

__CSE 258 - Recommender Systems and Web Mining__

_Current methods for data mining and predictive analytics. Emphasis is on studying real-world data sets, building working systems, and putting current ideas from machine learning research into practice._

* Collaborative filtering
* Recommender systems
  * via latent factor models and matrix factorization
* "Friendship paradox"
  * E.g. why does it seem that my friends have more friends than I do?
  * Explanation: you are more likely to be friends with people with large amount of friends

__MUS 206 - Music Generation__

_In this seminar we will explore the use of machine learning and deep neural network technologies for creative purposes. Our focus will be on generative methods and their relevance to modeling of creative processes and cognition, with applications to style transfer and machine improvisation._

_We will introduce python and TensorFlow, and use of GPU cluster for running deep learning algorithms. The models to be discussed include variable Markov models, auto encoders, convolution networks, GANS and more._

* Computer generated music kinda sucks

## Winter 2019

__CSE 221 - Operating Systems__

_Operating system structures, concurrent computation models, scheduling, synchronization mechanisms, address spaces, memory management protection and security, buffering, streams, data-copying reduction techniques, file systems, naming, caching, disk organization, mapped files, remote file systems, case studies of major operating systems._

* The class was intimidating at first because the entire class consists of the professor calling on students to answer questions about the assigned readings (he called it the Socratic method). Really learned how to read technical papers.
* The papers we read could roughly be categorized as:
  * Philosophy - What ought to be done
  * Theoretical - Deriving truths. Generalizing with abstractions
  * Design and implementation - How to create a new OS and what are its benefits/drawbacks
  * Experience - System has been built and is used
  * Performance - Main contribution of paper are the performance numbers
* The first few questions the professor will always ask about the readings:
  * "In ten words or less, what is the paper about?"
  * "What type of paper is it? (philosophy, theoretical, etc.)"

__CSE 250B - Principles of Artificial Intelligence: Learning Algorithms__

_Algorithms for supervised and unsupervised learning from data. Content may include maximum likelihood; log-linear models, including logistic regression and conditional random fields; nearest neighbor methods; kernel methods; decision trees; ensemble methods; optimization algorithms; topic models; neural networks; and backpropagation_

* Professor Dasgupta started off the class with k-nearest neighbor (KNN) classifier on MNIST dataset
* Statistical learning framework
  * Central assumption: all data (past, present, future) are i.i.d. draws from the same distribution
  * Bayes optimal classifier (theoretically, this is the best you can do)
* Three learning modalities
  * Supervised learning - for solving prediction problems
    * nearest neighbor, generative models for prediction, linear regression, logistic regression, perceptron, support vector machines, kernel methods, decision trees, boosting, random forests, neural nets
  * Unsupervised learning - for finding good representations
    * clusters; low-dimensional subspaces; manifolds; dictionaries; independent components; topics
  * Learning through interaction
    * E.g., reinforcement learning
* Metric spaces
  * Lp space. Typically, we only care about L1, L2, and L∞.
* Cross valiation is cheap for ridge regression (not so for Lasso) because we have a closed-form solution (i.e. we can directly solve with matrix operations instead of gradient descent)
  * Lasso regression uses L1 regularization. Useful for shrinkage, more coefficients are zero, so we can use as dimensionality reduction.
  * Ridge regression uses L2 regularization.
  * Elastic net uses a linear combination of L1 and L2 penalties
* (more)...

## Spring 2019

__CSE 218 - Advanced Topics in Software Engineering__

_This course will cover a current topic in software engineering in depth. Topics in the past have included software tools, impacts of programming language design, and software system structure._

* The class is split into teams to refactor the Flappy Cow android game (similar to "Flappy Bird") based of design principles we learn and discuss throughout the course
* At its core, the class is about how to modularize software
* Some benefits of modularity:
  * Maintainability
  * Readability / Understandability / Comprehensibility
  * Testability / Debugabilty
  * Reusability / Interchangeability
  * Division of labor / parallel work / specialization
* [SOLID](https://en.wikipedia.org/wiki/SOLID)
  * Single Responsibility Principle (SRP) - A class should have only one reason to change
  * Open-Closed Principle (OCP) - Open for extensions, but closed for modification
  * Liskov Substitution Principle (LSP) - Can substitute objects with instances of their subclass
  * Interface Segregation Principle (ISP) - No client should be forced to depend on methods it does not use
  * Dependency Inversion Principle (DIP) - Depend on abstractions, not details
* Don't Repeat Yourself (DRY)
  * If you find yourself copy-pasting the same code 3 times, it's time to wrap it into a function call
* You Ain't Gonna Need It (YAGNI)
  * [No code](https://github.com/kelseyhightower/nocode) is best code
* Some design patterns:
  * Strategy pattern (similar to DIP)
  * Observer pattern
  * Mediator pattern
  * Factory pattern. Abstract factory pattern.
* Design by Contract
* Law of Demeter
* Aspect oriented programming (AOP)
  * Aims to increase modularity by allowing separation of cross-cutting concerns
  * AspectJ is a Java implementation of AOP.
  * CSS is kinda like AOP

__CSE 256 - Statistical Natural Language Processing__

_An introduction to modern statistical approaches to natural language processing: part of speech tagging, word sense disambiguation and parsing, using Markov models, hidden Markov models, and probabilistic context-free grammars._

---

## Fall 2019

__CSE 202 - Algorithm Design and Analysis__

_The basic techniques for the design and analysis of algorithms. Divide-and-conquer, dynamic programming, data structures, graph search, algebraic problems, randomized algorithms, lower bounds, probabilistic analysis, parallel algorithms_

__CSE 252A - Computer Vision I__

_Comprehensive introduction to computer vision providing broad coverage including low-level vision (image formation, photometry, color, image feature detection), inferring 3-D properties from images (shape-from shading, stereo vision, motion interpretation) and object recognition._

## Winter 2020

__CSE 253__

_Probability density estimation, perceptrons, multilayer neural networks, radial basis function networks, support vector machines, error functions, data preprocessing. Possible topics include unsupervised learning methods, recurrent networks, and mathematical learning theory._

* "Backprop learns representations in service of the task"
* Universal approximation theorem: With enough data, neural networks can approximate any function.
* Max likelihood leads to MSE (Mean square error) for linear regression and cross-entropy for logistic and multinomial regression
* How to deal with overfitting?
  * Use more data
  * Regularization
  * Dropout: randomly turn off hidden units during learning
    * Intuition: dropout explores an exponential space. N choose N/2 scales exponentially
    * Variation of dropout: drop-connect
  * Add Gassuain noise to inputs and/or hidden unit activations
  * Early stopping: when validation loss increases, stop training
* Use ReLU activation instead of tanh for deep networks
* RNNs. LSTMs. GRUs.
* Convolutional Neural Networks (CNNs) work well in computer vision because of inductive bias
  * Relies of four properties of the visual world:
    1. _Locality_: Nearby pixels depend most on nearby pixels - not pixels far away
    2. _Stationary statistics_: The statistics of pixels are relatively uniform across the image
    3. _Translation invariance_: Identity of object (usually) doesnt depend on its location in the image
    4. _Compositionality_: Objects are made of parts
* Siamese networks
* **Transformer networks**
  * From the seminal "Attention is All You Need" (2017) paper

## Spring 2020

__CSE 291E - Deep Learning for Sequence__

_Deep learning has had an enormous impact and has been especially effective for images (ConvNets) and sequences (RNN's). This course focusses on deep learning for sequence processing and their application including video understanding, language translation, speech recognition, image captioning, OCR, and financial market prediction. After creating a foundation in common architectures (RNN, LSTM, GRU, Attention) and their training, we will dig into recently published papers that highlight methods and applications of deep learning for sequence processing. Each paper will be presented by a student, and all students are expected to participate in a critical discussion of these papers. There will be one or two programming assignments and a full quarter project (individual or small group)._

__CSE 291D - Unsupervised Learning__

_A broad overview of unsupervised learning, with emphasis on basic principles and on algorithmic and statistical guarantees._

* What can be done without labels?
  1. Remember. Outlier detection
     * Nearest neighbor search
       * Distances and similarity measures
       * Hashing and spatial partitioning
       * Geometric reasoning
       * Statistical reasoning
  2. Group
     * But clustering is ill-defined. Challenges:
       * What's the right cost function?
       * NP-hardness
       * Algorithmic analysis
  3. Compress
     * PCA
     * Manifold learning
     * Dictionary learning
       * Datapoint translated to smaller vector
     * Autoencoding
     * (not domain specific, unlike embedding methods)
  4. Emulate
     * Fitting distribution to data
       * Exponential families
       * Multivariate Gaussian
       * Graph models
     * Latent variable models
       * Gaussian mixture
       * HMMs
       * Topic models
       * Variational autoencoder
  5. Embed
     * Visualization: high-dim to 2- or 3- dim
       * Multidimensional scaling
       * t-SNE
     * Word embedding
       * Data in complex space ⟶ simpler space whose geometry is familiar
* Wasserstein distance is preferable when we want to take into account the geometry of the outcome space
  * aka transportation distance or earth mover's distance
* Topics:
  * Tree-based nearest neighbor search
  * Ball trees
  * Cover trees
  * Locality Sensitive Hashing (LSH)
  * Agglomerative clustering
  * Clustering in online and streaming settings
  * Informative projections
  * Random projections
  * Spectral embeddings
  * Multidimensional scaling
  * Sparse coding
