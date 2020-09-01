---
title: everything i learned at UCSB
date: 2020-08-25 00:36:24
tags:
---

(the article is incomplete)

I did my Computer Science B.S. at UC Santa Barbara, with a minor is statistics. Graduated in June 2018, Summa Cum Laude (Highest distinction, top 2.5%). Dean's Honors list 10 times.

Here goes.

---

## Summer 2014

Since I wasn't doing much with my summer anyway, I enrolled for Freshman Summer Start Program (FSSP).

__CMPSC 8 - Intro to Computer Science__

_Introduction to computer program development for students with little to no programming experience. Basic programming concepts, variables and expressions, data and control structures, algorithms, debugging, program design, and documentation._

## Fall 2014

__AS AM 2 - American Migration Since 1965: Asians and others in the United States__

_An examination of central themes in immigration law and policy, especially after the Immigration Act of 1965. The class focuses on Asian immigrants, but covers immigration trends comparatively. Topics include economic integration, interracial conflict, subsequent immigration reforms and their consequences._

__CMPSC 16 - Problem Solving with Computers I__

_Fundamental building blocks for solving problems using computers. Topics include basic computer organization and programming constructs: memory CPU, binary arithmetic, variables, expressions, statements, conditionals, iteration, functions, parameters, recursion, primitive and composite data types, and basic operating system and debugging tools._

__MATH 4A - Linear Algebra with Applications__

_Systems of linear equations, matrix algebra, determinants, vector spaces and subspaces, basis and dimension, linear transformations, eigenvalues and eigenvectors, diagonalization, and orthogonality._

## Winter 2014

__CMPSC 24 - Problem Solving with Computers II__

_Intermediate building blocks for solving problems using computers. Topics include data structures, object-oriented design and development, algorithms for manipulating these data structures and their runtime analyses. Data structures introduced include stacks, queues, lists, trees, and sets._

__MATH 6A - Vector Calculus with Applications, First Course__

_Calculus of functions of several variables, vector-valued functions of one variable, scalar and vector fields, integration along paths, double and triple integrals, integration over surfaces, properties, and applications of integrals, and classical integration theorems of vector calculus._

__MUS 11__

_The study of notes, scales, triads, inversions, rhythm, harmony, and musical terminology. Laboratory activities include keyboard orientation, sight singing, and ear training._

__PHYS 1__

_Introduction to classical mechanics for students in engineering and the physical sciences. Measurement, units, and foundations of physics; vectors; kinematics; circular motion; forces, mass, and Newton's laws; center of mass; momentum; work and energy; conservation laws; collisions; rotational kinematics._

## Spring 2015

__CMPSC 32 - Object Oriented Design and Implementation__

_Advanced topics in object-oriented computing. Topics include encapsulation, data hiding, inheritance, polymorphism, compilation, linking and loading, memory management, and debugging; recent advances in design and development tools, practices, libraries, and operating system support._

__MATH 4B - Differential Equations__

_First and second order differential equations, separation of variables, linear differential equations, systems of first order equations, nonlinear differential equations and stability._

__PHYS 2__

_Rotational dynamics and angular momentum; equilibrium and elasticity; periodic motion including LRC electrical circuits; gravitation; fluid mechanics; temperature; thermal expansion; heat and the first law of thermodynamics; heat conduction; kinetic theory of gases; entropy and the second law; heat engines._

__PSTAT 120A - Probability and Statistics__

_Concepts of probability; random variables; combinatorial probability; discrete and continuous distributions; joint distributions, expected values; moment generating functions; law of large numbers and central limit theorems._

## Summer 2015

__CMPSC 40 - Foundations of Computer Science__

_Introduction to the theoretical underpinnings of computer science. Topics include propositional predicate logic, set theory, functions and relations, counting, mathematical induction and recursion (generating functions)._

* First time I learned we can think of the set of integers is the same size as the set of rational numbers (i.e. fractions), since we associate a bijection (i.e., a one-to-one function) between the two
* First time I learned that the set of real numbers is larger than the set of rational numbers. The set of integers are countably infinite, but the set of reals are uncountably infinite.
  * Using Cantor's diagonalization argument

__WRIT 50__

_A writing course addressing the analytical skills underlying the research processes of various academic and professional communities. Sections vary in topic and disciplinary emphasis._

---

## Fall 2015

__CMPSC 64 - Computer Organization and Logic Design__

_Assembly language programming and advanced computer organization; Digital logic design topics including gates, combinational circuits, flip-flops, and the design and analysis of sequential circuits._

__CMPSC 56__

_Advanced application programming using a high-level, virtual-machine-based language. Topics include generic programming, exception handling, programming language implementation; automatic memory management, & application development, management, & maintenance tools; event handling, concurrency & threading, & advanced library use._

__PHYS 3__

_Mechanical waves, wave interference and normal modes, sound and hearing, electric field, Gauss's law, electric potential, capacitance and dielectrics, current, resistance, electromotive force, DC circuits._

__PHYS 3L__

_Introductory laboratory emphasizing periodic motion, sound and basic electronics._

__PSTAT 120B - Probability and Statistics__

_Distribution of sample mean and sample variance; t, chi-squared and F distributions; summarizing data by statistics and graphs; estimation theory for single samples: sufficiency, efficiency, consistency, method of moments, maximum likelihood; hypothesis testing: likelihood ratio test; confidence intervals._

## Winter 2016

__CMPSC 130A - Data Structures and Algorithms I__

_The study of data structures and their applications. Correctness proofs and techniques for the design of correct programs. Internal and external searching. Hashing and height balanced trees. Analysis of sorting algorithms. Memory management. Graph traversal techniques and their applications._

* I first heard of the halting problem here: it's impossible for a program to always determine whether another program will terminate
* AVL or Red-Black tree to maintain a balanced tree. Allows O(log n) insertions and deletions in the worse case.

__CMPSC 111 - Introduction to Computational Science__

_Introduction to computational science, emphasizing basic numerical algorithms and the informed use of mathematical software. Matrix computation, systems of linear and nonlinear equations, interpolation and zero finding, differential equations, numerical integration. Students learn and use the Matlab language._

__CMPSC 48__

_Team-based project development. Topics include software engineering and professional development practices, interface design, advanced library support; techniques for team-oriented design and development, testing and test-driven development, and software reliability and robustness. Students present and demonstrate final projects._

* I first heard of Agile methodology here

__COMM 1__

_An introduction to the basic concepts and principles in the field of communication. Contexts include intrapersonal, interpersonal, intercultural, public, small group, organizational, and mass communication._

## Spring 2016

__CMPSC 154 - Computer Architecture__

_Introduction to the architecture of computer systems. Topics include: central processing units, memory systems, channels and controllers, peripheral devices, interrupt systems, software versus hardware tradeoffs._

* Ahmdahl's law tells you how much faster your algorithm can execute if part of the algorithm is parallelized
* Pipelining: run computer instructions like an assembly line
  * Design principle: make the common case fast

__CMPSC 138 - Automata and Formal Languages__

_Formal languages; finite automata and regular expressions; properties of regular languages; pushdown automata and context-free grammars; properties of context-free languages; introduction to Turing machines and computability._

__CMPSC 165B - Machine Learning__

_Covers the most important techniques of machine learning (ML) and includes discussions of: well-posed learning problems; artificial neural networks; concept learning and general to specific ordering; decision tree learning; genetic algorithms; Bayesian learning; analytical learning; and others._

* You can combine uncorrelated weak classifiers to create a better classifier, aka boosting

---

## Fall 2016

__CMPSC 160 - Translation of Programming Languages__

_Study of the structure of compilers. Topics include: lexical analysis; syntax analysis including LL and LR parsers; type checking; run-time environments; intermediate code generation; and compiler-construction tools._

__CMPSC 176A - Introduction to Computer Communication Networks__

_Basic concepts in networking, the OSI model, error detection codes, flow control, routing, medium access control, and high-speed networks._

__EARTH 7__

_The origin and diversification of dinosaurs, including birds. Survey of evolutionary relationships within the group, and between the major groups of vertebrates. Broad introduction including anatomy, geography, climate, and vertebrate contemporaries._

__PSTAT 126 - Regression Analysis__

_Linear and multiple regression, analysis of residuals, transformations, variable and model selection including stepwise regression, and analysis of covariance. The course will stress the use of computer packages to solve real-world problems._

## Winter 2017

__CMPSC 130B - Data Structures and Algorithms II__

_Design and analysis of computer algorithms. Correctness proofs and solution of recurrance relations. Design techniques; divide and conquer, greedy strategies, dynamic programming, branch and bound, backtracking, and local search. Applications of techniques to problems from several disciplines. NP - completeness._

__CMPSC 178 - Introduction to Cryptography__

_An introduction to the basic concepts and techniques of cryptography and cryptanalysis. Topics include: The Shannon Theory, classical systems, the enigma machine, the data encryption standard, public key systems, digital signatures, file security._

* Don't invent your own encryption
* MD5 is not safe, use SHA-2 instead.
* MAC = Message authentication codes. Think of MAC as a tamper seal, used to verify a message has not been tampered with.
  * Always do encrypt then MAC instead of MAC then encrypt

__PSTAT 131 - Data Mining (now fashionably renamed to "Introduction to Statistical Machine Learning")__

_Statistical Machine Learning is used to discover patterns and relationships in large data sets. Topics will include: data exploration, classification and regression tress, random forests, clustering and association rules. Building predictive models focusing on model selection, model comparison and performance evaluation. Emphasis will be on concepts, methods and data analysis; and students are expected to complete a significant class project, individual or team based, using real-world data._

* My introduction to R-Markdown

## Spring 2017

__CMPSC 170 - Operating Systems__

_Basic concepts of operating systems. The notion of a process; interprocess communication and synchronization; input-output, file systems, memory management._

__CMPSC 171 - Distributed Systems__

_Distributed systems architecture, distributed programming, network of computers, message passing, remote procedure calls, group communication, naming and membership problems, asynchrony, logical time, consistency, fault-tolerance, and recovery._

* Leslie Lamport contributed greatly to the field of distributed computing
* Learned and implemented Paxos algorithm for solving consensus in a network of unreliable processors

__PSY 103__

_Covers the concepts, theory, and research within psychopathology. Focuses on the concepts of mental illness and mental disorder, including diagnosis, causes, and treatments. Topics may include: exploration of the cultural influences, and social consequences of current and historical definitions of mental disorders._

---

## Fall 2017

__CMPSC 177 - Computer Security__

_Introduction to the basics of computer security and privacy. Analysis of technical difficulties of producing secure computer information systems that provide guaranteed controlled sharing. Examination and critique of current systems, methods, certification._

__CMPSC 174A - Fundamentals of Database Systems__

_Database system architectures, relational data model, relational algebra, relational calculus, SQL, QBE, query processing, integrity constraints (key constraints, referential integrity), database design, ER and object- oriented data model, functional dependence, lossless join and dependency preserving decompositions, Boyce-Codd and Third Normal Forms._

__ENGR 101__

_The nature of moral value, normative judgment and moral reasoning. Theories of moral value. The engineer's role in society. Ethics in professional practice. Safety, risk, responsibility. Morality and career choice. Code of ethics. Case studies facilitate the comprehension of the concepts introduced._

__MUS 114__

_A survey of the relationships between music and popular culture in America. Music to be discussed includes blues, jazz, and rock, as well as classical music. Emphasis is on cultural, rather than technical aspects of music._

__PSTAT 296A__

_Introduction to research skills. Discussion of current research trends, writing literature reviews etc. Students will be required to present material reflecting their interests in actuarial science, which will be critically appraised for both content and presentation. Emphasis will be placed on aiding students to acquire a high-level of professionalism._

## Winter 2018

__CMPSC 140 - Parallel Scientific Computing__

_Fundamentals of high performance computing and parallel algorithm design for numerical computation. Topics include parallel architectures and clusters, parallel programming with message-passing libraries and threads, program parallelization methodologies, parallel performance evaluation and optimization, parallel numerical algorithms and applications with different performance tradeoffs._

__PSTAT 194 - Spark Programming__

_This course will focus on using Spark for big data analytics. The fundamental data types and concepts will be covered (e.g., resilient distributed datasets, DataFrames, MapReduce). A large component of the course will be using Spark's library for machine learning, MLlib._

* Spark is not always faster. Parallel computations take longer on smaller datasets
  * In practice, 1 GB+ data makes sense for Spark
* Spark is useful when data does not fit in a single computer's RAM
* Don't use `.collect()` on a huge dataset

__PSTAT 298B__

_Introduction to research opportunities. Planning, organizing and managing projects; quality and time management. Students will complete projects on topics of their interest in the areas of actuarial science and financial mathematics. A written report will be required._

## Spring 2018

__EARTH 4__

_An introduction to oceanography covering the major physical, chemical, and geological features of the oceans, their role in Earth history, and potential use as a natural resource. Lab and lecture._

__PHIL 20C__

_From the Empiricists and Kant._

* Covers Locke, Berkeley, and Hume and their approaches to various topics such as metaphysics, religion, and philosophy of mind

__TMP 111__

_Lecture series where entrepreneurial, technological, business, and governmental leaders share their lessons of experience and discuss current business issues. For anyone interested in entrepreneurship, management, technology development, and commercialization and the impact that innovation has on society_

---

## Conclusion

I learned a lot at UCSB

---

Sources:

* CS courses: https://my.sa.ucsb.edu/catalog/Current/CollegesDepartments/coe/compsci-engr.aspx?DeptTab=Courses
* Stats courses: https://my.sa.ucsb.edu/catalog/Current/CollegesDepartments/ls-intro/stats.aspx?DeptTab=Courses
* Math courses: https://my.sa.ucsb.edu/catalog/Current/CollegesDepartments/ls-intro/math.aspx?DeptTab=Courses
* Physics courses: https://my.sa.ucsb.edu/catalog/Current/CollegesDepartments/ls-intro/phys.aspx?DeptTab=Courses
