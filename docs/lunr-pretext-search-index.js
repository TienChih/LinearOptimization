var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Student Statements",
  "body": " Student Statements   I really liked how the textbook built up the ideas in a way that made the motivation behind each concept and theorem feel natural. The order that the material was presented in made sense, and it was clear why each new technique was introduced. I also appreciated that we often derived or proved results ourselves before seeing the formal version - it made everything fit together more logically and helped me actually understand why things work instead of just memorizing them. On top of that, the emphasis on the geometric perspective really deepened my understanding; seeing how the concepts connect visually made linear programming feel much more intuitive. - Lance Ding, Computer Science & Mathematics Student, Emory University      I enjoyed the inquiry-based classroom experience - it transformed each class into an exciting research project. I felt a great sense of achievement when my peers and I collaborated to prove important theorems and explored how linear optimization applies to real-world scenarios. The excitement of discovery not only deepened my understanding of mathematics but also fostered lasting friendships and unforgettable memories. - Arthur Han, Mathematics & Physics Student, University of Michigan      I would say that some of the best skills I learned from this class wasn't just the material, but the way it was taught. Doing collaborative proofs allowed for a more complete understand of not just the proof itself, but the process of coming up with proofs. The collaborative process has helped me learned how to apply knowledge from both me and my classmates to figure out principles that previously I did not know. It has helped me with research projects that I have undertaken not just in math, but in CS as well. - Jane Brennan, Computer Science & Mathematics Student, Emory University  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For Tara, Byron, Max and Mya  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This book is the product of multiple influences and is the by product of many threads in my life. I want to thank Steven Clontz and Drew Lewis for including me in the inaugural Team Based Inquiry Learning group. What I learned about authoring inquiry learning materials from that experience is the biggest contributor to the structure of this text. I wanted to thank the OER and PreTeXt communities, but in particular David Austin, Steven Clontz, Sean Fitzpatrick, Mitch Keller, Oscar Levin and Chrissy Safranski for their contributions not only to PreTeXt which I used to author this text, but directly help with numerous technical issues throughout the writing process. I would like to thank my brother Fong Chih for his help with the simplex pivot tool.  I would like to thank Jennifer Nordstrom and John Rock for their helpful suggestions and feedback. I would like to thank Candice Price, Miloš Savić, Jen Martindale and Jean Tashima, the whole 619 Wreath Publishing team for their support, encouragement, and genuine partnership. Their support of scholars, open access, and unique contributions is truly commendable.  Finally, I would like to thank the students, faculty and staff of Oxford College of Emory University for fostering an environment of inquiry and creativity. An especial heartfelt thank you goes to Jane Brennan, Lance Ding, Will Farthing and Ari Gurovich, the wonderful students in my first Math 346 Linear Optimization course who were taught with an embryonic version of this text, and provided valuable feedback and encouraged me to develop those notes into this text.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-7",
  "level": "1",
  "url": "frontmatter-7.html",
  "type": "Preface",
  "number": "",
  "title": "Our goals",
  "body": " Our goals  This is an inquiry-learning based textbook on introductory linear optimization. Linear optimization, or linear programming, is a common but not ubiquitous course at the undergraduate level, with somewhat divergent goals and approaches. There are numerous texts for linear optimization, so it what is it that this book offers that others do not?  Linear optimization as a course serves a variety of disciplines, and can be taught in a number of different approaches. In a math curriculum, while it has linear algebra as a pre-requisite, it generally lies in the mid-high tier level of courses, prior to classes like abstract algebra and real analysis, but past calculus and linear algebra. This is a subject rich with both beautiful mathematics, as well as numerous applications to economics, computer science, operations research, sociology and other areas. So this course is an excellent choice for a variety of students, and can serve the needs of many.  The presentation of linear optimization can be computation or theory focused, and both approaches would generally be an extension of a linear algebra course which also generally has those two flavors. Either way, the material is often presented in a way that is very technical from a linear algebraic stand-point. For a student, learning the algorithms, techniques, theorems and proofs can be overwhelming. There are numerous, technically intricate arguments, and the complexity of the associated algebra can subsume the intuition behind this material, and render much of the content opaque.  I had a similar experience working with linear optimization as a graduate student, and having never taken an undergraduate linear optimization course, found myself having to play catch-up . It didn't help that different text and resources presented the content in very different ways, and so unpacking the algorithms and theorems was a challenge. I was never satisfied with the idea that it was sufficient to memorize an algorithm or even prove the theorems, what I was looking for was an intuitive way to think about this subject, in a way that makes the results intuitive, natural, even expected.  What helped me then was recontextualizing all of the key ideas of linear optimization in geometric terms. By centering the geometry underlying each scenario, we can allow our intuition to guide things forward, and the flow of the material proceeds naturally. So this book begins with geometric realizations, translating that geometry into linear algebra, and proceeding from there to computations, but each theorem, formula and computation can be understood on this level.  Something that this approach allows is an easier entry-point for students. With geometric motivation, students have an easier time anticipating and predicting what may be true, and then this intuition can then be formalized with the appropriate statements and proofs. A friend from graduate school, Dr. Michael Severino, is an avid rock climber and gave the analogy that in mathematics, intuition was knowing where on the cliff to grab next, and rigor was the rope keeping you from falling. This book aims to present both intuition and rigor in a way that lets all students propel to the top of this cliff.  Presenting the content with this framework lends itself well to teaching this course in an inquiry based manner. Numerous studies have been done showing the efficacy of inquiry learning, and the longer term understanding students develop from learning this way. I have taught numerous courses in an inquiry based manner, and have authored inquiry learning materials, and the key to successful course is appropriate scaffolding. Presenting the right mixture of intuitive exploration, rigorous argumentation, and text or instructor intervention.  As of the writing of this text, there is a renaissance of open source technology tools aimed at visualizing, computing or demonstrating mathematical ideas in accessible, interactive ways. Use of this technology can greatly enhance the ability for students to visualize and intuit the ideas being presented in a class, or side-step tedious computations, so that students can focus their attention and time on the conceptual principles of a course.  These are the thoughts that I had in mind when I was first asked to teach linear optimization at Oxford College of Emory University. Oxford College is a small, teaching-focused, liberal arts college of Emory University of about 950 students. We teach first and second year students who, upon completing Oxford's liberal arts curriculum, proceed to Atlanta to complete their bachelor degrees. Given the inquiry driven principles of the college, and all of the above thoughts, I decided to teach this class in an inquiry manner, incorporating the ideas I've written about, and through the semester wrote a set of inquiry learning materials, which serves of the basis of the document you are currently reading.  Given the principles which informed my design choices, and the ways in which a text for an inquiry based course differs substantially from a more traditional textbook, there are some things to keep in mind as you go through this text:    This book is written with the assumption that students have taken a linear algebra course. Linear algebra is the language in which we discuss the content of this course. There is some variation in how linear algebra is presented, just as there is variation in linear optimization presentations. For anyone requiring a quick review of linear algebra or an approach to linear algebra is that this geometry forward, I highly recommend Dr. David Austin's Understanding Linear Algebra  . This book was motivated by very similar thoughts to the ones I had, and are thereby governed by similar philosophies.     This book is presented as a collection of explorations and activities meant to be done by the students in class. The initial explorations and activities are generally more motivational, followed by activities meant to rigorously crystalize the intuition students develop throughout a lesson. Later activities reinforce these ideas or place them in the broader context of the course.  These activities are meant to be done in groups by the students, giving them the opportunity to discuss their ideas, let their intuition guide them, and develop their own reasoning skills. I recommend groups of about 4-6, but this is not set in stone, and it should be possible for someone to work on their own, or even self-study with this text. After discussing within their groups, the class comes together to discuss as a single entity.   For the student : I recommend actively engaging in the activities with your peers. We learn best by active participation rather than passive observation. Confronting these ideas, even and especially when you're unsure what is happening is how our understanding grows and deepens. You may be surprised what ideas you come up with, and how much progress you and your classmates can make on your own!   For the instructor : I recommend eavesdropping on group conversations to ensure active participation and equitable practices within groups. It may be necessary to nudge students toward or away from a direction, or to highlight specific things they, or another group said, but as much as possible, try to place agency with the students' hands. Students are far better motivated when they take ownership of their own learning.  It is highly recommended that between classes, students review the activities done in class, and rewrite them to be more cohesive. Frequently, activities will be broken down into a sequence of parts or tasks, each of which represents grabbing a new handhold on the cliff or adjusting the harness to prevent falling (hopefully I am using this metaphor correctly, I am not a rock climber).  Another thing to keep in mind is timing. One challenge of inquiry learning is the amount of time needed to cover content appropriately. By taking a more active role in student discussions, one can help accelerate the process without overtaking the course. However, I recommend that one does so sparingly.  The end of each chapter presents a few exercises that are applications of the material learned, or extensions of those concepts. There is a mix of computational, applied and theoretical problems, and some proof writing will be expected.     Interactive technological tools are deployed throughout the text. In the html version of this book, there will be numerous Doenet activities and Sage cells embedded throughout, there is also embedded Desmos for 3d visualizations. Print and pdf versions of this text will contain QR codes linking to these activities. The use of technology can greatly enhance geometric intuition, or eliminate tedium from computations. Hand computations are a part of the class, and students will be expected to be able to explain and perform them. However, the focus of this text is ever on the concepts of this course, and modeling a problem is almost always a more important skill than computing a solution.  There are also practical elements to computing solution by code: in class where time is a premium, executing an algorithm with potentially dozens of steps is often a poor use of that limited resource, and in practice, students who go into industry would be working on problems of tremendous scope, far beyond what could be done by hand. Even for students who pursue theoretical mathematics, the intuition and proofs are a far better focus than hand computation.     As always, we anchor everything in this course with geometric reasoning, and use this reasoning to bolster the algebraic aspects of this material. Much like linear algebra, students who find themselves confused or lost in the midst of algebraic weeds, should retreat and consider the situation from a geometric point of view. It can be natural for practical linear optimization problems to take place in hundreds, maybe thousands of dimensions, but two and three dimensions gives us all the intuition we need.     I chose presentations and conventions which best support student intuition. Frustratingly, just about every linear optimization text seems to have their own convention and notation when it comes to recording and presenting data. This book follows Dr. James Strayer's Linear Programming and it's Applications as being, in my opinion, the most natural, intuitive, and compact of the innumerable variations.      Linear Optimization: A Geometric Inquiry Course was a labor of love. I hope that this book serves your needs as an instructor, student, or curious scholar. This book can be used as a stand-alone text or supplement another text, with some adjustment. The content of this course is licensed by Creative Commons, and so please feel free to create variations for this material that best suits your needs.  "
},
{
  "id": "frontmatter-8",
  "level": "1",
  "url": "frontmatter-8.html",
  "type": "Preface",
  "number": "",
  "title": "A note on the print version",
  "body": " A note on the print version  This book aims to develop readers' ability to reason about linear optimization concepts, and to facilitate thinking and intuition. Several technological tools are deployed to this effect, to enhance geometric reasoning, bypass tedious arithmetic computations, or both. These include embedded Sage cells with executable code, Doenet activities, and Desmos graphs.   Sage is introduced as a platform for performing many computations since it is freely available and its syntax mirrors common mathematical notation. Print readers may access Sage online through https:\/\/sagecell.sagemath.org\/ .  Throughout the book, Sage cells appear in various places to encourage readers to use Sage to complete some relevant computation. In the print version, these may appear with some pre-populated code, such as the one below, that you will want to copy into an online Sage cell. Some activities call for the students to determine the appropriate parameters which would allow Sage to solve the question at hand. In these cases, FIXME or similar place holders are placed within the code, and meant to be edited out in favor of the correct entries Empty cells appear as shown below and are included to indicate part of an exercise or activity that is meant to be completed in Sage.   For other interactive components to activities, the pdf and print versions of this text will contain links and QR codes to a standalone version of the activity, so that readers with an appropriate device may follow along the flow of the course.  In this section, I provide two additional such interactives. One is a Desmos linear optimization visualizer and solver for two dimensional problems:   The other is a Desmos 3d version of this interactive for three dimensions.   These tools can help you visualize and solve small dimensional problems and can be very helpful for beginners.  There is also a handy simplex pivoting tool provided in to simplify computations for higher dimension problems.  "
},
{
  "id": "frontmatter-9",
  "level": "1",
  "url": "frontmatter-9.html",
  "type": "Preface",
  "number": "",
  "title": "A note on inquiry learning",
  "body": " A note on inquiry learning  The four pillars of Inquiry Learning are the cornerstone around which this text was built. For those who wish to learn now, I highly reccomend Dr. Dana Ernst's blog on this subject https:\/\/danaernst.com\/resources\/inquiry-based-learning\/.   Some care must be taken to ensure that the class flows in a productive way, and that students are equitably engaged, and are given agency to take ownership of their own learning. Some judicious instructor intervention may occasionally be necessary, but this text facilitates a student centered, deep and engaging learning experience.  While it may be possible for a student to work through this text on their own, it is designed to facilitate discussion between students, and between the class and the instructor. There is truly where this material come to life.   Class engaged together in an activity.   I highly recommend, if possible, projecting the html version of this text on a screen, and for students to use whatever computing devices they have available to access this text, use the provided tools, and collaborate on working through this material.  Best wishes to everyone reading this text on your grand adventure through linear optimization!  "
},
{
  "id": "sec-intro",
  "level": "1",
  "url": "sec-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "A Brief Geometric Review of Linear Algebra",
  "body": " A Brief Geometric Review of Linear Algebra   In this introductory section, we do not begin linear optimization. Instead, we recall a few concepts from linear algebra, and examine them through a geometric lense, setting the stage for our mindset going forward. The activities in this section are not strictly necessary to work through the rest of this text.     Let   What is ?      Consider the augmented matrix      Given a fixed , what is a necessary condition for the values of so that the system of equations encoded by has a unique solution?      What does this mean geometrically?      If the rows of are independent, and , then what is the dimension of the solution space of ?       Consider the matrix      Describe necessary and sufficient conditions for the columns to be linearly independent.      Describe necessary and sufficient conditions for the columns to be a spanning set.      Describe necessary and sufficient conditions for the columns to be a basis for .     Here, we recall the geometric interpretation of the determinant.    Recall that each matrix may be thought of as a linear transformation from . When we may define the determinant of the transformation. The determinant has numerous algebraic properties one learns about in a linear algebra course, but it also has a geometric interpretation. Roughly speaking, the determinant measures how the transformation changes the unit dimensional cube, with the magnitude of the determinant measuring the -dimensional volume of the cube after transformation, and the sign measuring whether or not the orientation of the cube is preserved or reversed.  Some resources for linear algebra define the determinant algebraically, then prove that it has special geometric properties. In many ways this is a natural approach to introduce the subject to students whose background is primarily algebraic. However, in my opinion, this is backwards. It makes far more sense to approach the determinant geometrically first: there is a property of transformations we want to measure, we call this quantity the determinant, it happens to have cool algebraic properties.       Consider the square matrix       Explain why for any constant and  geometrically, i.e. without cofactor expansion.      Explain why for any constant and  geometrically.      Explain why for any constant and  geometrically.       Michael Atiyah (1929 - 2019), mathematician and Field's medalist (1966), once said:  Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine.    What do you suppose Dr. Atiyah meant by this quote? What does it mean to you? How might this sentiment have impacted your mathematical journey or education?    "
},
{
  "id": "activity-null",
  "level": "2",
  "url": "sec-intro.html#activity-null",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  Let   What is ?   "
},
{
  "id": "activity-solspace",
  "level": "2",
  "url": "sec-intro.html#activity-solspace",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  Consider the augmented matrix      Given a fixed , what is a necessary condition for the values of so that the system of equations encoded by has a unique solution?      What does this mean geometrically?      If the rows of are independent, and , then what is the dimension of the solution space of ?    "
},
{
  "id": "activity-basis",
  "level": "2",
  "url": "sec-intro.html#activity-basis",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "  Consider the matrix      Describe necessary and sufficient conditions for the columns to be linearly independent.      Describe necessary and sufficient conditions for the columns to be a spanning set.      Describe necessary and sufficient conditions for the columns to be a basis for .    "
},
{
  "id": "sec-intro-7",
  "level": "2",
  "url": "sec-intro.html#sec-intro-7",
  "type": "Observation",
  "number": "1.1.4",
  "title": "",
  "body": "  Recall that each matrix may be thought of as a linear transformation from . When we may define the determinant of the transformation. The determinant has numerous algebraic properties one learns about in a linear algebra course, but it also has a geometric interpretation. Roughly speaking, the determinant measures how the transformation changes the unit dimensional cube, with the magnitude of the determinant measuring the -dimensional volume of the cube after transformation, and the sign measuring whether or not the orientation of the cube is preserved or reversed.  Some resources for linear algebra define the determinant algebraically, then prove that it has special geometric properties. In many ways this is a natural approach to introduce the subject to students whose background is primarily algebraic. However, in my opinion, this is backwards. It makes far more sense to approach the determinant geometrically first: there is a property of transformations we want to measure, we call this quantity the determinant, it happens to have cool algebraic properties.   "
},
{
  "id": "sec-intro-8",
  "level": "2",
  "url": "sec-intro.html#sec-intro-8",
  "type": "Activity",
  "number": "1.1.5",
  "title": "",
  "body": "   Consider the square matrix       Explain why for any constant and  geometrically, i.e. without cofactor expansion.      Explain why for any constant and  geometrically.      Explain why for any constant and  geometrically.    "
},
{
  "id": "sec-intro-9",
  "level": "2",
  "url": "sec-intro.html#sec-intro-9",
  "type": "Activity",
  "number": "1.1.6",
  "title": "",
  "body": "  Michael Atiyah (1929 - 2019), mathematician and Field's medalist (1966), once said:  Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine.    What do you suppose Dr. Atiyah meant by this quote? What does it mean to you? How might this sentiment have impacted your mathematical journey or education?   "
},
{
  "id": "sec-initial",
  "level": "1",
  "url": "sec-initial.html",
  "type": "Section",
  "number": "1.2",
  "title": "Initial Examples",
  "body": " Initial Examples   Here we begin with some initial examples motivating the sort of problems we will study. We define the central problems around which the course will revolve.     A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor 2 hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.     Write an inequality terms of and that represent the constraints on the time of the sculptor.      Write an inequality terms of and that represent the constraints on the time of the painter.      What other inequalities involving and would be sensible to impose?      Treating as and as , sketch the region on the Cartesian plane satisfying all the above inequalities. We will refer to this as the feasible region .      Pick some points within this feasible region, what do they represent in terms of vases and figurines? How much revenue is generated? What causes the revenue to increase or decrease?      Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  (For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?)       If there was a surge in demand for vases, and they started selling for $1000, how would that change your approach and the solution?       Carlos is planning to shop for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti with sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.     Let denote pounds of bell pepper, denote pounds of chicken and denote cups of spaghetti with sauce. Find three inequalities in terms of the for how much of each food Carlos should eat to meet his minimum dietary requirements.      How might we solve this problem? How is it different from ?      This seems like a wildly over simplistic dietary problem, because it is. How might we complicate it for more realism?        linear optimization problem, canonical maximization The Canonical Maximization Linear Optimization Problem is the problem: where .   linear optimization problem, canonical minimization The Canonical Minimization Linear Optimization Problem is the problem: where .     canonical  The term canonical in this context refers to the fact that for both of the above problems, the are nonnegative, and each bound is an inequality.  (In , we discuss noncanonical linear optimization problems, where these conditions may fail.)      objective function  feasible solution  solution, feasible  optimal solution  solution, optimal  above are called objective functions . Any point satisfying either of the above set of inequalities are called feasible solutions . Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .      Given the canonical minimization problem: How might we convert this to a canonical maximization problem?      How might we in general convert a minimization problem to a maximization problem?     "
},
{
  "id": "activity-exampleart",
  "level": "2",
  "url": "sec-initial.html#activity-exampleart",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor 2 hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.     Write an inequality terms of and that represent the constraints on the time of the sculptor.      Write an inequality terms of and that represent the constraints on the time of the painter.      What other inequalities involving and would be sensible to impose?      Treating as and as , sketch the region on the Cartesian plane satisfying all the above inequalities. We will refer to this as the feasible region .      Pick some points within this feasible region, what do they represent in terms of vases and figurines? How much revenue is generated? What causes the revenue to increase or decrease?      Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  (For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?)       If there was a surge in demand for vases, and they started selling for $1000, how would that change your approach and the solution?    "
},
{
  "id": "activity-examplediet",
  "level": "2",
  "url": "sec-initial.html#activity-examplediet",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  Carlos is planning to shop for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti with sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.     Let denote pounds of bell pepper, denote pounds of chicken and denote cups of spaghetti with sauce. Find three inequalities in terms of the for how much of each food Carlos should eat to meet his minimum dietary requirements.      How might we solve this problem? How is it different from ?      This seems like a wildly over simplistic dietary problem, because it is. How might we complicate it for more realism?    "
},
{
  "id": "def-canonicalproblems",
  "level": "2",
  "url": "sec-initial.html#def-canonicalproblems",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "   linear optimization problem, canonical maximization The Canonical Maximization Linear Optimization Problem is the problem: where .   linear optimization problem, canonical minimization The Canonical Minimization Linear Optimization Problem is the problem: where .   "
},
{
  "id": "note-canon",
  "level": "2",
  "url": "sec-initial.html#note-canon",
  "type": "Note",
  "number": "1.2.4",
  "title": "",
  "body": " canonical  The term canonical in this context refers to the fact that for both of the above problems, the are nonnegative, and each bound is an inequality.  (In , we discuss noncanonical linear optimization problems, where these conditions may fail.)  "
},
{
  "id": "def-objectivefunction",
  "level": "2",
  "url": "sec-initial.html#def-objectivefunction",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "   objective function  feasible solution  solution, feasible  optimal solution  solution, optimal  above are called objective functions . Any point satisfying either of the above set of inequalities are called feasible solutions . Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .   "
},
{
  "id": "activity-change",
  "level": "2",
  "url": "sec-initial.html#activity-change",
  "type": "Activity",
  "number": "1.2.6",
  "title": "",
  "body": "  Given the canonical minimization problem: How might we convert this to a canonical maximization problem?      How might we in general convert a minimization problem to a maximization problem?    "
},
{
  "id": "sec-polyhedralconvex",
  "level": "1",
  "url": "sec-polyhedralconvex.html",
  "type": "Section",
  "number": "1.3",
  "title": "Polyhedral Convextiy",
  "body": " Polyhedral Convextiy   In this section, we establish the fundamental geometric notions which underlie our work.     In , describe geometrically what the following represent.                                           Let . Let for some .      What is when ?      What is when ?      What is when ?      What is when ?      Describe the set of points .       Let . Describe the set of points .         line segment Given , we call the set the line segment between and .       hyperplane  plane Given constants  hyperplane in is a set of the form . If we usually call this a plane .   normal vector We call the vector the normal vector to .      Consider the desmos interactive:     Adjust the different sliders to different values. What do we notice about the plane and the vector ?       convex Let , we say that is convex if given any , also contains the line segment between .      For each of the following subsets of , sketch the region, decide if it is convex or not.      .       .       (in polar coordinates).       (in polar coordinates).       .       .         half-plane Let be defined by for some (i.e. is a half-space of ).      Let . Explain why for any .      Show that for any , that .      Let , that is, there are such that and . Show that for .      Conclude that is convex.        Let be convex sets.      Show that is convex.    Let . Why is the line segment between them contained in ? ?      Sketch an induction argument to show that if is convex, is convex.      Prove or find a counterexample to the following statement: If are convex sets, then is convex.       Prove that the feasible region of a canonical linear optimization problem is convex.       convex, polyhedral A convex set that is equal to a finite intersection of half-spaces (defined by either strict or nonstrict inequalities) is polyhedral convex .      The feasible region for is:         The feasible region for is:          norm Given we define the norm of to be        ball Given we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?      Describe for .       bounded A set is bounded if there is such that .      Which of the problems described in and have bounded feasible regions?      Let be the feasible region of of a canonical maximization linear optimization problem, let be the objective function.     Consider the point . Which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the dot product.)      Let such that there is a so that . Explain why cannot be a maximizer of .      On the other hand, suppose  is a maximizer of , what must be true about ?      Consider the canonical maximization linear optimization problem:     How do the statements you've made above apply here? Where is  maximized? Is it consistent with what you said before?         extreme point  corner point Let be a convex set. We say is an extreme point of if there are no distinct so that .   In other words, does not lie on any nontrivial line segment contained in .      For each of the following convex sets, find its extreme points (if any).     The feasible region of the problem in .       .       .     We present the following theorems without proof. At least one of these should seem familiar from calculus.   Extreme Value Theorem  Extreme Value Theorem   If is a closed and bounded region, and is a continuous function. Then there are such that and for every .    (We will assume without proof that linear functions are continuous, and that the feasible region of a linear optimization problem is always closed.)    If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .      If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is an so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is an so that for all , then contains an optimal solution which is an extreme point of .         Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?      Let be optimal solutions of a canonical linear optimization problem, giving optimal solution . Show that for any , and that .      Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?       So, we see that the hunt for optimal solutions boils down to a hunt for extreme points.     In , how many lines are needed to intersect so their intersection is a unique point?      In , how many planes are needed to intersect so their intersection is a unique point?      In , how many dimensional hyperplanes are needed to intersect so their intersection is a unique point?      Suppose a canonical linear optimization problem in is bounded by the usual hyperplanes corresponding to as well as additional hyperplanes. How many potential points of intersection could there be?                                 So for a canonical linear optimization problem in bounded by an additional 15 hyperplanes, how many potential extreme points are there?     "
},
{
  "id": "activity-planes",
  "level": "2",
  "url": "sec-polyhedralconvex.html#activity-planes",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "  In , describe geometrically what the following represent.                                       "
},
{
  "id": "activity-segment",
  "level": "2",
  "url": "sec-polyhedralconvex.html#activity-segment",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "   Let . Let for some .      What is when ?      What is when ?      What is when ?      What is when ?      Describe the set of points .       Let . Describe the set of points .     "
},
{
  "id": "def-segment",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-segment",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "   line segment Given , we call the set the line segment between and .   "
},
{
  "id": "def-hyperplane",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-hyperplane",
  "type": "Definition",
  "number": "1.3.4",
  "title": "",
  "body": "   hyperplane  plane Given constants  hyperplane in is a set of the form . If we usually call this a plane .   normal vector We call the vector the normal vector to .   "
},
{
  "id": "activity-normalplane",
  "level": "2",
  "url": "sec-polyhedralconvex.html#activity-normalplane",
  "type": "Activity",
  "number": "1.3.5",
  "title": "",
  "body": "  Consider the desmos interactive:     Adjust the different sliders to different values. What do we notice about the plane and the vector ?   "
},
{
  "id": "def-convex",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-convex",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "   convex Let , we say that is convex if given any , also contains the line segment between .   "
},
{
  "id": "sec-polyhedralconvex-9",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-9",
  "type": "Activity",
  "number": "1.3.7",
  "title": "",
  "body": "  For each of the following subsets of , sketch the region, decide if it is convex or not.      .       .       (in polar coordinates).       (in polar coordinates).       .       .    "
},
{
  "id": "sec-polyhedralconvex-10",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-10",
  "type": "Activity",
  "number": "1.3.8",
  "title": "",
  "body": "    half-plane Let be defined by for some (i.e. is a half-space of ).      Let . Explain why for any .      Show that for any , that .      Let , that is, there are such that and . Show that for .      Conclude that is convex.    "
},
{
  "id": "sec-polyhedralconvex-11",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-11",
  "type": "Activity",
  "number": "1.3.9",
  "title": "",
  "body": "   Let be convex sets.      Show that is convex.    Let . Why is the line segment between them contained in ? ?      Sketch an induction argument to show that if is convex, is convex.      Prove or find a counterexample to the following statement: If are convex sets, then is convex.    "
},
{
  "id": "sec-polyhedralconvex-12",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-12",
  "type": "Activity",
  "number": "1.3.10",
  "title": "",
  "body": "  Prove that the feasible region of a canonical linear optimization problem is convex.   "
},
{
  "id": "def-polyhedralconvex",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-polyhedralconvex",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "   convex, polyhedral A convex set that is equal to a finite intersection of half-spaces (defined by either strict or nonstrict inequalities) is polyhedral convex .   "
},
{
  "id": "sec-polyhedralconvex-14",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-14",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  The feasible region for is:      "
},
{
  "id": "sec-polyhedralconvex-15",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-15",
  "type": "Example",
  "number": "1.3.13",
  "title": "",
  "body": "  The feasible region for is:      "
},
{
  "id": "def-norm",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-norm",
  "type": "Definition",
  "number": "1.3.14",
  "title": "",
  "body": "   norm Given we define the norm of to be    "
},
{
  "id": "def-ball",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-ball",
  "type": "Definition",
  "number": "1.3.15",
  "title": "",
  "body": "   ball Given we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?   "
},
{
  "id": "sec-polyhedralconvex-18",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-18",
  "type": "Activity",
  "number": "1.3.16",
  "title": "",
  "body": "  Describe for .   "
},
{
  "id": "def-bounded",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-bounded",
  "type": "Definition",
  "number": "1.3.17",
  "title": "",
  "body": "   bounded A set is bounded if there is such that .   "
},
{
  "id": "sec-polyhedralconvex-20",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-20",
  "type": "Activity",
  "number": "1.3.18",
  "title": "",
  "body": "  Which of the problems described in and have bounded feasible regions?   "
},
{
  "id": "activity-ball",
  "level": "2",
  "url": "sec-polyhedralconvex.html#activity-ball",
  "type": "Activity",
  "number": "1.3.19",
  "title": "",
  "body": "  Let be the feasible region of of a canonical maximization linear optimization problem, let be the objective function.     Consider the point . Which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the dot product.)      Let such that there is a so that . Explain why cannot be a maximizer of .      On the other hand, suppose  is a maximizer of , what must be true about ?      Consider the canonical maximization linear optimization problem:     How do the statements you've made above apply here? Where is  maximized? Is it consistent with what you said before?     "
},
{
  "id": "def-extremepoint",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-extremepoint",
  "type": "Definition",
  "number": "1.3.20",
  "title": "",
  "body": "   extreme point  corner point Let be a convex set. We say is an extreme point of if there are no distinct so that .   In other words, does not lie on any nontrivial line segment contained in .   "
},
{
  "id": "sec-polyhedralconvex-23",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-23",
  "type": "Activity",
  "number": "1.3.21",
  "title": "",
  "body": "  For each of the following convex sets, find its extreme points (if any).     The feasible region of the problem in .       .       .    "
},
{
  "id": "thm-evt",
  "level": "2",
  "url": "sec-polyhedralconvex.html#thm-evt",
  "type": "Theorem",
  "number": "1.3.22",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem  Extreme Value Theorem   If is a closed and bounded region, and is a continuous function. Then there are such that and for every .   "
},
{
  "id": "thm-boundedextreme",
  "level": "2",
  "url": "sec-polyhedralconvex.html#thm-boundedextreme",
  "type": "Theorem",
  "number": "1.3.23",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .   "
},
{
  "id": "thm-unboundedextreme",
  "level": "2",
  "url": "sec-polyhedralconvex.html#thm-unboundedextreme",
  "type": "Theorem",
  "number": "1.3.24",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is an so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is an so that for all , then contains an optimal solution which is an extreme point of .     "
},
{
  "id": "sec-polyhedralconvex-29",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-29",
  "type": "Activity",
  "number": "1.3.25",
  "title": "",
  "body": "   Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?      Let be optimal solutions of a canonical linear optimization problem, giving optimal solution . Show that for any , and that .      Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?    "
},
{
  "id": "sec-polyhedralconvex-30",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-30",
  "type": "Activity",
  "number": "1.3.26",
  "title": "",
  "body": "  So, we see that the hunt for optimal solutions boils down to a hunt for extreme points.     In , how many lines are needed to intersect so their intersection is a unique point?      In , how many planes are needed to intersect so their intersection is a unique point?      In , how many dimensional hyperplanes are needed to intersect so their intersection is a unique point?      Suppose a canonical linear optimization problem in is bounded by the usual hyperplanes corresponding to as well as additional hyperplanes. How many potential points of intersection could there be?                                 So for a canonical linear optimization problem in bounded by an additional 15 hyperplanes, how many potential extreme points are there?    "
},
{
  "id": "sec-summarygeometric",
  "level": "1",
  "url": "sec-summarygeometric.html",
  "type": "Section",
  "number": "1.4",
  "title": "Summary of Chapter 1",
  "body": " Summary of  We introduced some basic examples of linear optimization problems in and . In these examples, we were able to graphically analyze and show that they reach optimality, and that these optimal solutions occur on the boundary of the feasible region. This is an idea which is critical to the development of our theory.  To show that such a result may generalize, we introduce the notion of convexity  . A convex set is a set which contains every line segment between points in the set. We then show that a half-space is convex, that an intersection of halfspaces is convex, and thus the feasible region of a linear optimization problem is always convex.  Note then that for a linear function , that for any output of , , the equation forms a plane in , and that for any lying on this plane, as well. We may increase the value of by moving in one of two directions orthogonal to this plane, until we reach the boundary. But even then, we can still increase the value of by moving along the boundary until we either fall on a subset of the boundary on which is constant, or a corner point also called an extreme point  .  Thus, if a linear optimization problem admits a maximum solution, it must do so at some extreme point. Each extreme point is an intersection of hyperplanes, but in with additional bounding hyperplanes, there could be intersections, not all of whom are feasible, and not all of whom are optimal. There is also no guarantee that a linear optimization problem admits an optimal solution at all. This motivates us to find a more systematic approach to obtaining optimal solutions.   A summary of Chapter 1.    "
},
{
  "id": "sec-summarygeometric-3",
  "level": "2",
  "url": "sec-summarygeometric.html#sec-summarygeometric-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convexity "
},
{
  "id": "sec-summarygeometric-4",
  "level": "2",
  "url": "sec-summarygeometric.html#sec-summarygeometric-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extreme point "
},
{
  "id": "figure-videochapter1summary",
  "level": "2",
  "url": "sec-summarygeometric.html#figure-videochapter1summary",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " A summary of Chapter 1.   "
},
{
  "id": "sec-exercisesgeometric",
  "level": "1",
  "url": "sec-exercisesgeometric.html",
  "type": "Section",
  "number": "1.5",
  "title": "Problems for Chapter 1",
  "body": " Problems for      Draw and shade appropriate regions in as described below, where .     A bounded polyhedral convex subset.      An unbounded polyhedral convex subset.      A bounded nonconvex subset      An unbounded nonconvex subset.      A convex subset that is not a polyhedral convex subset.      A convex subset having no extreme points.      A polyhedral convex subset having no extreme points.      A bounded polyhedral convex subset having exactly one extreme point.      An unbounded polyhedral convex subset having exactly one extreme point.      An bounded convex subset having infinitely many extreme points.      An unbounded convex subset having infinitely many extreme points.       Convert each of the linear optimization problems below to canonical form as in .                                 A drive-in sells homemade hot dogs and hamburgers. The hot dogs take cup of flour and oz of beef to make. A hamburger bun takes cups of flour and oz of beef. Suppose the drive-in has cups of flour and oz of beef on hand. If hot dogs sell for $4 and hamburgers for $6, how much of each should they make to maximize revenue?      A rancher has a herd to feed which requires 54, 48, and 72 units of the nutritional elements A, B, and C, respectively, per day. Feed 1 costs 10 cents a pound and contains 8, 4 and 3 units of elements A, B, C respectively. Feed 2 costs 8 cents a pound and contains 2, 4 and 6 units of elements A, B, C respectively. How much of each feed should the rancher purchase to cover the herds nutritional needs while minimizing cost?      A drug company sells three different formulations of vitamin complex and mineral complex. The first formulation consists entirely of vitamin complex and sells for $1 per unit. The second formulation consists of 3\/4 of a unit of vitamin complex and 1\/4 of a unit of mineral complex and sells for $2 per unit. The third formulation consists of 1\/2 of a unit of each of the complexes and sells for $3 per unit. If the company has 100 units of vitamin complex and 75 units of mineral complex available, how many units of each formulation should the company produce so as to maximize sales revenue?              For each of the following, sketch the feasible region , and find the optimal solution by identifying the extreme points of and evaluating.                     .        .        .        .        .        .        .      Prove that  has infinitely many optimal solutions, two of which lie on extreme points. Identify these points on the plot of the feasible region done in .    Prove that if are distinct optimal solutions of a canonical linear optimization problem, then all points on the line segment between are also optimal solutions of the problem.  Conclude that a canonical linear optimization problem can have 0, 1 or infinitely many optimal solutions and no other possibilities.    Consider the canonical linear optimization problem   Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal.    Consider the canonical linear optimization problem   Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal. (It is recommended that you use some technological tools to solve for the resulting linear systems.)     Express as a polynomial in terms of . How does this relate to and ?    Show that is unbounded. (Hint: sketch the feasible region and consider feasible points on the line .)    Show that is infeasible.     For each of the following, determine whether or not the statement is TRUE or FALSE. If TRUE, provide a proof, if FALSE, provide a counterexample.     If a canonical feasible linear optimization problem is unbounded, then its feasible region is unbounded.      If a canonical feasible linear optimization problem has unbounded feasible region, then it is unbounded.      "
},
{
  "id": "exercises-geometric-1",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-1",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Draw and shade appropriate regions in as described below, where .     A bounded polyhedral convex subset.      An unbounded polyhedral convex subset.      A bounded nonconvex subset      An unbounded nonconvex subset.      A convex subset that is not a polyhedral convex subset.      A convex subset having no extreme points.      A polyhedral convex subset having no extreme points.      A bounded polyhedral convex subset having exactly one extreme point.      An unbounded polyhedral convex subset having exactly one extreme point.      An bounded convex subset having infinitely many extreme points.      An unbounded convex subset having infinitely many extreme points.    "
},
{
  "id": "ex-convertcanon",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-convertcanon",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Convert each of the linear optimization problems below to canonical form as in .                                 A drive-in sells homemade hot dogs and hamburgers. The hot dogs take cup of flour and oz of beef to make. A hamburger bun takes cups of flour and oz of beef. Suppose the drive-in has cups of flour and oz of beef on hand. If hot dogs sell for $4 and hamburgers for $6, how much of each should they make to maximize revenue?      A rancher has a herd to feed which requires 54, 48, and 72 units of the nutritional elements A, B, and C, respectively, per day. Feed 1 costs 10 cents a pound and contains 8, 4 and 3 units of elements A, B, C respectively. Feed 2 costs 8 cents a pound and contains 2, 4 and 6 units of elements A, B, C respectively. How much of each feed should the rancher purchase to cover the herds nutritional needs while minimizing cost?      A drug company sells three different formulations of vitamin complex and mineral complex. The first formulation consists entirely of vitamin complex and sells for $1 per unit. The second formulation consists of 3\/4 of a unit of vitamin complex and 1\/4 of a unit of mineral complex and sells for $2 per unit. The third formulation consists of 1\/2 of a unit of each of the complexes and sells for $3 per unit. If the company has 100 units of vitamin complex and 75 units of mineral complex available, how many units of each formulation should the company produce so as to maximize sales revenue?           "
},
{
  "id": "ex-geosolve",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-geosolve",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  For each of the following, sketch the feasible region , and find the optimal solution by identifying the extreme points of and evaluating.                     .        .        .        .        .        .        .    "
},
{
  "id": "exercises-geometric-4",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-4",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": " Prove that  has infinitely many optimal solutions, two of which lie on extreme points. Identify these points on the plot of the feasible region done in .  "
},
{
  "id": "exercises-geometric-5",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-5",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": " Prove that if are distinct optimal solutions of a canonical linear optimization problem, then all points on the line segment between are also optimal solutions of the problem.  Conclude that a canonical linear optimization problem can have 0, 1 or infinitely many optimal solutions and no other possibilities.  "
},
{
  "id": "ex-5planes",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-5planes",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": " Consider the canonical linear optimization problem   Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal.  "
},
{
  "id": "ex-6planes",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-6planes",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": " Consider the canonical linear optimization problem   Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal. (It is recommended that you use some technological tools to solve for the resulting linear systems.)   "
},
{
  "id": "exercises-geometric-8",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-8",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": " Express as a polynomial in terms of . How does this relate to and ?  "
},
{
  "id": "exercises-geometric-9",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-9",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": " Show that is unbounded. (Hint: sketch the feasible region and consider feasible points on the line .)  "
},
{
  "id": "exercises-geometric-10",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-10",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": " Show that is infeasible.  "
},
{
  "id": "exercises-geometric-11",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-11",
  "type": "Exercise",
  "number": "1.5.11",
  "title": "",
  "body": "  For each of the following, determine whether or not the statement is TRUE or FALSE. If TRUE, provide a proof, if FALSE, provide a counterexample.     If a canonical feasible linear optimization problem is unbounded, then its feasible region is unbounded.      If a canonical feasible linear optimization problem has unbounded feasible region, then it is unbounded.    "
},
{
  "id": "sec-pivot",
  "level": "1",
  "url": "sec-pivot.html",
  "type": "Section",
  "number": "2.1",
  "title": "Canonical Problems and the Simplex Pivot",
  "body": " Canonical Problems and the Simplex Pivot   In this section, we use our geometric intuition to develop an algebraic operation called a simplex pivot , which will be the key operation in solving linear optimization problems. We give both a geometric and algebraic understanding of this operation.     Consider the canonical maximization problem:      slack variable  decision variable  variable, slack  variable, decision Note that we may rewrite this as a system of equalities by introducing the slack variables  . We will refer to the as decision variables .        What must be true about the slack variables ?                        Which of these must be an upper bound for ?                    could be unbounded.          Similarly the canonical minimization problem is:   where . This problem may be rewritten as:     In this case, we refer to the as the slack variables , and the as decision variables .    As usual, we focus on maximization for now.   Tucker tableau  slack variable  basic variable  decision variable  independent variable  tableau, Tucker  variable, slack  variable, basic  variable, decision  variable, independent  basic solution  solution, basic   We can rewrite as Which may be recorded by the Tucker tableau :                                                                                                                                        The variables at the top are called the decision variables or independent variables , the variables on the side are the slack variables or basic variables .  The basic solution recorded by a Tucker tableau is the solution where each decision variable has the value zero.      Note that this tableau records a basic solution . We will further explore what this means in a bit. But for now, if , then:       Consider the region in bound by and . Let and   The feasible region for a canonical maximization problem.        If , what point(s) in satisfy ?      If , what point(s) in satisfy ?      What point(s) in satisfy both ?      What point(s) in satisfy both ?      What point(s) in satisfy both ? What about ?      Consider the interactive below. Drag around the point . For each variable , when are they positive? Negative? Equal to zero?        Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150. Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C. The company has 20 units of ingredient A, 30 units of B and 25 units of C.     Set up the canonical maximization problem for the information given above and record it in the following tableau:                                                                                         Recall that this tableau has a basic solution where and . If we slightly increase and , do we increase ?      Let's increase . Consider the row corresponding to . Take the associated equality and solve for in terms of and . Then, for each equality associated with the rows corresponding to , replace with the value you found above and rewrite the left hand sides.      Record this new system in the following tableau:                                                                                         Recall that this new tableau has a basic solution where and . What is ? Where in is this solution?      If we increase from 0, do we increase ? What about increasing ?      Let's increase . Take the row corresponding to and repeat Tasks and to obtain a tableau of the form:                                                                                         What point in represents the basic solution for this new tableau?      If we increase from 0, do we increase ? What about ?      Consider the plot of the feasible region for this problem. What exactly, geometrically, did we end up doing in this activity?           Based on , what would be a reasonable sufficient condition for a feasible tableau to record a basic optimal solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .        Consider the tableau:                                                                     along with the corresponding system of equations.     Solve for in terms of and .      In each of the other two equalities, replace with the expression we found above and simplify.      Record this new system in the following tableau:                                                                         pivot   The following is the procedure for a pivot transformation :    Pick a nonzero entry in the tableau but not in the objective row or constraint column.    Transpose the decision and slack variables corresponding to the position of .    Replace by .    Replace each entry in the same row as (but not ) with .    Replace each entry in the same column as (but not ) with .    Each entry not in the same row or column as but in the same column as (which is in the same row as ) and in the same row as (which is in the same column as ) is replaced with .         Consider the problem: maximize subject to: which we may encode as:                                                                                                         Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                         Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                         Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                          Look at your decision variables. Which two lines are we currently sitting on?      How do we know the basic solution we now have is an optimal solution?      Confirm your solution geometrically:       One may observe, this pivot operation is not difficult, but rather tedious, and it is easy to make a minor error that derails this process. Doing multiple pivots in a row compounds this issue. It is like a more tedious version of row reduction and Gaussian elimination. Thus an interactive pivoter has been provided in . Hopefully this improves everyone's lives.     Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150. Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C. The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, i.e.: Of course, the values shouldn't be negative, so . But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:                                                                                        For each column , consider the equality recorded by this tableau: . What must be true about in order for ?    .     .     .    Nothing may be determined about .         Pivot on the entry with the :                                                                                       Pivot on the entry with the :                                                         -1                               Compare this basic solution and tableau to the final solution in . What do you notice?        "
},
{
  "id": "sec-pivot-2-1",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simplex pivot "
},
{
  "id": "activity-maxslack",
  "level": "2",
  "url": "sec-pivot.html#activity-maxslack",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  Consider the canonical maximization problem:      slack variable  decision variable  variable, slack  variable, decision Note that we may rewrite this as a system of equalities by introducing the slack variables  . We will refer to the as decision variables .        What must be true about the slack variables ?                        Which of these must be an upper bound for ?                    could be unbounded.       "
},
{
  "id": "sec-pivot-4",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-4",
  "type": "Observation",
  "number": "2.1.2",
  "title": "",
  "body": "  Similarly the canonical minimization problem is:   where . This problem may be rewritten as:     In this case, we refer to the as the slack variables , and the as decision variables .   "
},
{
  "id": "def-tuckertableau",
  "level": "2",
  "url": "sec-pivot.html#def-tuckertableau",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": " Tucker tableau  slack variable  basic variable  decision variable  independent variable  tableau, Tucker  variable, slack  variable, basic  variable, decision  variable, independent  basic solution  solution, basic   We can rewrite as Which may be recorded by the Tucker tableau :                                                                                                                                        The variables at the top are called the decision variables or independent variables , the variables on the side are the slack variables or basic variables .  The basic solution recorded by a Tucker tableau is the solution where each decision variable has the value zero.   "
},
{
  "id": "sec-pivot-7",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-7",
  "type": "Observation",
  "number": "2.1.4",
  "title": "",
  "body": "  Note that this tableau records a basic solution . We will further explore what this means in a bit. But for now, if , then:    "
},
{
  "id": "sec-pivot-8",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-8",
  "type": "Activity",
  "number": "2.1.5",
  "title": "",
  "body": "  Consider the region in bound by and . Let and   The feasible region for a canonical maximization problem.        If , what point(s) in satisfy ?      If , what point(s) in satisfy ?      What point(s) in satisfy both ?      What point(s) in satisfy both ?      What point(s) in satisfy both ? What about ?      Consider the interactive below. Drag around the point . For each variable , when are they positive? Negative? Equal to zero?     "
},
{
  "id": "activity-widget",
  "level": "2",
  "url": "sec-pivot.html#activity-widget",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": "  Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150. Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C. The company has 20 units of ingredient A, 30 units of B and 25 units of C.     Set up the canonical maximization problem for the information given above and record it in the following tableau:                                                                                         Recall that this tableau has a basic solution where and . If we slightly increase and , do we increase ?      Let's increase . Consider the row corresponding to . Take the associated equality and solve for in terms of and . Then, for each equality associated with the rows corresponding to , replace with the value you found above and rewrite the left hand sides.      Record this new system in the following tableau:                                                                                         Recall that this new tableau has a basic solution where and . What is ? Where in is this solution?      If we increase from 0, do we increase ? What about increasing ?      Let's increase . Take the row corresponding to and repeat Tasks and to obtain a tableau of the form:                                                                                         What point in represents the basic solution for this new tableau?      If we increase from 0, do we increase ? What about ?      Consider the plot of the feasible region for this problem. What exactly, geometrically, did we end up doing in this activity?       "
},
{
  "id": "sec-pivot-10",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-10",
  "type": "Activity",
  "number": "2.1.7",
  "title": "",
  "body": "   Based on , what would be a reasonable sufficient condition for a feasible tableau to record a basic optimal solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .     "
},
{
  "id": "sec-pivot-11",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-11",
  "type": "Activity",
  "number": "2.1.8",
  "title": "",
  "body": "  Consider the tableau:                                                                     along with the corresponding system of equations.     Solve for in terms of and .      In each of the other two equalities, replace with the expression we found above and simplify.      Record this new system in the following tableau:                                                                       "
},
{
  "id": "def-pivot",
  "level": "2",
  "url": "sec-pivot.html#def-pivot",
  "type": "Definition",
  "number": "2.1.9",
  "title": "",
  "body": " pivot   The following is the procedure for a pivot transformation :    Pick a nonzero entry in the tableau but not in the objective row or constraint column.    Transpose the decision and slack variables corresponding to the position of .    Replace by .    Replace each entry in the same row as (but not ) with .    Replace each entry in the same column as (but not ) with .    Each entry not in the same row or column as but in the same column as (which is in the same row as ) and in the same row as (which is in the same column as ) is replaced with .     "
},
{
  "id": "activity-pivotexample",
  "level": "2",
  "url": "sec-pivot.html#activity-pivotexample",
  "type": "Activity",
  "number": "2.1.10",
  "title": "",
  "body": "   Consider the problem: maximize subject to: which we may encode as:                                                                                                         Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                         Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                         Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                          Look at your decision variables. Which two lines are we currently sitting on?      How do we know the basic solution we now have is an optimal solution?      Confirm your solution geometrically:     "
},
{
  "id": "sec-pivot-14",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-14",
  "type": "Remark",
  "number": "2.1.11",
  "title": "",
  "body": " One may observe, this pivot operation is not difficult, but rather tedious, and it is easy to make a minor error that derails this process. Doing multiple pivots in a row compounds this issue. It is like a more tedious version of row reduction and Gaussian elimination. Thus an interactive pivoter has been provided in . Hopefully this improves everyone's lives.  "
},
{
  "id": "activity-insurance",
  "level": "2",
  "url": "sec-pivot.html#activity-insurance",
  "type": "Activity",
  "number": "2.1.12",
  "title": "",
  "body": "  Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150. Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C. The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, i.e.: Of course, the values shouldn't be negative, so . But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:                                                                                        For each column , consider the equality recorded by this tableau: . What must be true about in order for ?    .     .     .    Nothing may be determined about .         Pivot on the entry with the :                                                                                       Pivot on the entry with the :                                                         -1                               Compare this basic solution and tableau to the final solution in . What do you notice?     "
},
{
  "id": "sec-simplexmax",
  "level": "1",
  "url": "sec-simplexmax.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Simplex Algorithm for Canonical Maximization",
  "body": " The Simplex Algorithm for Canonical Maximization   Having established the pivot in , we use geometry to determine where to pivot to find optimal solutions. We also discuss how to address potential obstacles.    Basic Feasible Maximization    Consider the following tableau:                                                                                                                   Note that for the basic solution of this tableau. Write out the corresponding system of canonical inequalities. Are they all satisfied?     Which of the following is a necessary and sufficient condition for a Tucker tableau to have a feasible basic solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .         Consider the following tableau:                                                                                                                   Note that this tableau records a basic solution where .     Why is the basic solution feasible?      Which of the following could we increase from zero to increase our objective function value?      If we increase to 5, are all our inequalities satisfied? What about 10? 100?      If we increase to 5, are all our inequalities satisfied? What about 10? 100?      What is the largest value we could increase while satisfying our 3 inequalities? What about ?      Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .         So we have found a reasonable condition for a canonical maximization problem to have unbounded feasible region. We now consider objective functions.     Before reading ahead, discuss whether or not the statements a canonical maximization problem has unbounded feasible region and a canonical maximization problem has unbounded objective function are logically equivalent. If they are, why? If not, does one imply the other, or can each statement hold while the other statement is false?      Consider the following tableau:                                                                     Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?      Which of the following is a reasonable sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .         Consider the canonical maximization problem and basic solution encoded by the following tableau:                                                                                         Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?      Consider a sketch of our feasible region:  The feasible region for a canonical maximization problem.     We could choose to pivot with either . Only one of these would result in a feasible solution. Looking graphically, which is it?      What's the connection between the two above tasks?      For a canonical linear problem and basic solution encoded by a Tucker tableau:                                                                                                                                        If we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .        Based on the observations above, what should be the pivot entry for the following tableau?                                                                                          For each of the following tableaus, determine which, if any, of the following are true:    The tableau records an infeasible basic solution.    The tableau records a basic optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              With all this, we finally may define our Simplex Algorithm for Maximum Basic Feasible Tableaus .   Simplex Algorithm: maximum basic feasible  algorithm, simplex: maximum basic feasible    The Simplex Algorithm for Maximum Basic Feasible Tableaus    Ensure that each , that is that the solution is feasible.  IF every : STOP since the current solution is optimal.  PICK a column such that .  IF each : STOP since the objective function is unbounded.  PICK a row that minimizes .  PIVOT on .  GOTO 1.       Recall the canonical tableau:                                                                                                                                         Suppose that the basic solution encoded by the tableau were feasible, and that after pivoting on according to we had that . Show that .       Apply to the following tableaus.                                                                                                                                                                                                                                                                         Basic Infeasible Maximization    Each of the following tableaus records the origin as a basic solution, which is not feasible. Determine geometrically which of these tableau record a problem which has an optimal solution. Then answer the follow-up questions.                                                                                                                                                                                   For the one problem where the origin is not feasible, but the problem has an optimal solution, what pivot would result in a feasible solution?      If , what should be true about so that is positive afterwards?      Consider the inequality . Is there a solution which satisfies this where each ?      Consider the inequality . Is there a solution which satisfies this where each ?       We now want to concoct a scheme to turn all the nonnegative, if possible.  Consider the following tableau:                                                                                                                       Suppose that . We want to turn positive while making sure stay positive.     Suppose each , what can we say about the associated problem?       Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?      Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?      Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?      Who should we pivot on?    Any , where .    All of the such that is minimized.    All of the such that if then and is minimized.        Note that we have no idea if is positive or negative before we started, much less after. Why don't we care?     With this, we may define our algorithm for potential nonfeasible tableau.   simplex algorithm: maximum  algorithm, simplex: maximum    The Simplex Algorithm for Maximum Tableaus    IF each , GOTO 8.  PICK the largest such that .  IF : STOP since the problem in infeasible.  PICK a column such that .  PICK a row so that .  PIVOT on .  GOTO 1.  APPLY .       Apply to the following tableau:                                                                                                                                                                    The Simplex Algorithm for Canonical Minimization   negative transpose   Consider a canonical minimization problem:   where .  This problem may be recorded in the following tableau:                                                                                                                                           The negative transpose of this tableau is:                                                                                                                                             Show that this negative transpose of a canonical minimization tableau encodes a problem that has the same feasible region and optimal solution as the original minimization problem.      Describe a procedure to utilize to solve a minimization problem.      Use this procedure to solve the problem presented in .       "
},
{
  "id": "activity-tableaufeasible",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaufeasible",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Consider the following tableau:                                                                                                                   Note that for the basic solution of this tableau. Write out the corresponding system of canonical inequalities. Are they all satisfied?     Which of the following is a necessary and sufficient condition for a Tucker tableau to have a feasible basic solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .      "
},
{
  "id": "activity-tableaubounded",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaubounded",
  "type": "Activity",
  "number": "2.2.2",
  "title": "",
  "body": "  Consider the following tableau:                                                                                                                   Note that this tableau records a basic solution where .     Why is the basic solution feasible?      Which of the following could we increase from zero to increase our objective function value?      If we increase to 5, are all our inequalities satisfied? What about 10? 100?      If we increase to 5, are all our inequalities satisfied? What about 10? 100?      What is the largest value we could increase while satisfying our 3 inequalities? What about ?      Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .      "
},
{
  "id": "subsec-basicfeasible-4",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-4",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": "  So we have found a reasonable condition for a canonical maximization problem to have unbounded feasible region. We now consider objective functions.     Before reading ahead, discuss whether or not the statements a canonical maximization problem has unbounded feasible region and a canonical maximization problem has unbounded objective function are logically equivalent. If they are, why? If not, does one imply the other, or can each statement hold while the other statement is false?      Consider the following tableau:                                                                     Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?      Which of the following is a reasonable sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .      "
},
{
  "id": "activity-chooserowpivot",
  "level": "2",
  "url": "sec-simplexmax.html#activity-chooserowpivot",
  "type": "Activity",
  "number": "2.2.4",
  "title": "",
  "body": "  Consider the canonical maximization problem and basic solution encoded by the following tableau:                                                                                         Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?      Consider a sketch of our feasible region:  The feasible region for a canonical maximization problem.     We could choose to pivot with either . Only one of these would result in a feasible solution. Looking graphically, which is it?      What's the connection between the two above tasks?      For a canonical linear problem and basic solution encoded by a Tucker tableau:                                                                                                                                        If we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .        Based on the observations above, what should be the pivot entry for the following tableau?                                                                                       "
},
{
  "id": "subsec-basicfeasible-6",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-6",
  "type": "Activity",
  "number": "2.2.5",
  "title": "",
  "body": "  For each of the following tableaus, determine which, if any, of the following are true:    The tableau records an infeasible basic solution.    The tableau records a basic optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             "
},
{
  "id": "def-simplexcanonmaxbf",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexcanonmaxbf",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": " Simplex Algorithm: maximum basic feasible  algorithm, simplex: maximum basic feasible    The Simplex Algorithm for Maximum Basic Feasible Tableaus    Ensure that each , that is that the solution is feasible.  IF every : STOP since the current solution is optimal.  PICK a column such that .  IF each : STOP since the objective function is unbounded.  PICK a row that minimizes .  PIVOT on .  GOTO 1.    "
},
{
  "id": "subsec-basicfeasible-9",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-9",
  "type": "Activity",
  "number": "2.2.7",
  "title": "",
  "body": "  Recall the canonical tableau:                                                                                                                                         Suppose that the basic solution encoded by the tableau were feasible, and that after pivoting on according to we had that . Show that .   "
},
{
  "id": "subsec-basicfeasible-10",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-10",
  "type": "Activity",
  "number": "2.2.8",
  "title": "",
  "body": "   Apply to the following tableaus.                                                                                                                                                                                                                                                                      "
},
{
  "id": "subsec-infeasiblemaximization-2",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-infeasiblemaximization-2",
  "type": "Activity",
  "number": "2.2.9",
  "title": "",
  "body": "  Each of the following tableaus records the origin as a basic solution, which is not feasible. Determine geometrically which of these tableau record a problem which has an optimal solution. Then answer the follow-up questions.                                                                                                                                                                                   For the one problem where the origin is not feasible, but the problem has an optimal solution, what pivot would result in a feasible solution?      If , what should be true about so that is positive afterwards?      Consider the inequality . Is there a solution which satisfies this where each ?      Consider the inequality . Is there a solution which satisfies this where each ?    "
},
{
  "id": "subsec-infeasiblemaximization-3",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-infeasiblemaximization-3",
  "type": "Activity",
  "number": "2.2.10",
  "title": "",
  "body": "  We now want to concoct a scheme to turn all the nonnegative, if possible.  Consider the following tableau:                                                                                                                       Suppose that . We want to turn positive while making sure stay positive.     Suppose each , what can we say about the associated problem?       Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?      Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?      Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?      Who should we pivot on?    Any , where .    All of the such that is minimized.    All of the such that if then and is minimized.        Note that we have no idea if is positive or negative before we started, much less after. Why don't we care?    "
},
{
  "id": "def-simplexmax",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexmax",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": " simplex algorithm: maximum  algorithm, simplex: maximum    The Simplex Algorithm for Maximum Tableaus    IF each , GOTO 8.  PICK the largest such that .  IF : STOP since the problem in infeasible.  PICK a column such that .  PICK a row so that .  PIVOT on .  GOTO 1.  APPLY .    "
},
{
  "id": "subsec-infeasiblemaximization-6",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-infeasiblemaximization-6",
  "type": "Activity",
  "number": "2.2.12",
  "title": "",
  "body": "  Apply to the following tableau:                                                                                                                                                                 "
},
{
  "id": "def-negativetranspose",
  "level": "2",
  "url": "sec-simplexmax.html#def-negativetranspose",
  "type": "Definition",
  "number": "2.2.13",
  "title": "",
  "body": " negative transpose   Consider a canonical minimization problem:   where .  This problem may be recorded in the following tableau:                                                                                                                                           The negative transpose of this tableau is:                                                                                                                                         "
},
{
  "id": "subsec-simplexmin-3",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-simplexmin-3",
  "type": "Activity",
  "number": "2.2.14",
  "title": "",
  "body": "   Show that this negative transpose of a canonical minimization tableau encodes a problem that has the same feasible region and optimal solution as the original minimization problem.      Describe a procedure to utilize to solve a minimization problem.      Use this procedure to solve the problem presented in .    "
},
{
  "id": "sec-cycling",
  "level": "1",
  "url": "sec-cycling.html",
  "type": "Section",
  "number": "2.3",
  "title": "Cycling",
  "body": " Cycling   In this section, we discuss a potentially serious hurdle to using the Simplex Algorithm, and show how to avoid it completely.     Consider the following canonical maximization tableau:                                                                                                Perform the following sequence of pivots, ensure each time that it is a valid pivot according to , and keep track of the variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Compare your final tableau to the initial tableau. Are there any similarities?       Consider the canonical linear optimization problem: Maximize , subject to   Consider a sequence of pivots swapping ,  , . In each of these cases, what is the basic solution recorded by the tableau?    The feasible region with multiple lines intersecting the origin.        cycling   If a series of pivots in accordance to allows one to return to a set of basic variables achieved earlier in the algorithm, we call this phenomenon cycling .     degenerate   If a pivot on a tableau gives a new tableau corresponding to the same basic solution, we call the pivot a degenerate pivot.    Cycling is bad, since potentially this allows the Simplex Algorithm to not terminate. Fortunately, there is a solution to this issue.   Bland's anticycling rules  anticycling  theorem, Bland's anticycling  Bland's Anticycling Rules   List all variables, independent and dependent in the initial tableau. Then consider the following rules:    Whenever there is more than one possible choice for a pivot row according to : select the row corresponding to the variable closest to the front of the initial list.    Whenever there is more than one possible choice for a pivot column according to : select the column corresponding to the variable closest to the front of the initial list.    Then the Simplex Algorthm will not cycle.    Before we proceed with the proof, we require a technical definition.   dictionary   We call the dictionary for a basis the system of equations corresponding to that basis. So the dictionary for a basis is which we can write with constraint equalities: and objective function equality:      For the sake of notation, we denote the initial tableau:                                                                                                                                     and order the variables in the associated way. Suppose we follow Bland's rules and still have cycling. That is, there is a sequence of pivots and bases (set of basic variables) . We call a variable  fickle if is in one, but not all of the bases. That is, it leaves a basis, and re-enters it later during the cycle.  Note that in order for cycling to occur, each pivot must be degenerate (ask yourself why?). So if is fickle, for each basic solution during the cycle.  Since the number of variables is finite, the set of fickle variables is also finite, and let denote the fickle variable with largest subscript. Suppose that (why must such a exist?). Denote the entering variable from with .                                                                                                                                                                                              Note that must also be fickle (why?) and so . We also see that since the above pivot was valid, we must have that and since the pivot was degenerate, we have .  Now, because we have cycling, we must have that re-enters the basis at some point:                                                                                                                                                                                                  Note that for this pivot to be valid, we must have that . If we let denote the dictionary before re-enters the basis, we have: So note that the solution space to the system of equations for both these dictionaries are the same. So we have a solution for (not necessarily feasible ie nonnegativity may fail) that must also be a solution to :   So we have where for . So via algebra:   The above equation holds true no matter what is. Thus: Note that , NOT is entering the basis. If is already in the basis, . Otherwise, , otherwise would have entered by Bland's Anticyling rules. We've also shown . Thus which is only possible if there is some such that   From this, we know that . So , but , so is fickle. Since is the largest index of a fickle variable, . Note that is not entering from , so . Thus .  But is fickle, so in . But then, we would have picked , not to leave.                                                                                                                     which is a contradiction.     If we follow , then no basis is visited twice during the execution of the Simplex Algorithm. Note that is nondecreasing with each pivot. Must the Simplex Algorithm terminate? Why?    "
},
{
  "id": "activity-cyclingexample",
  "level": "2",
  "url": "sec-cycling.html#activity-cyclingexample",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "  Consider the following canonical maximization tableau:                                                                                                Perform the following sequence of pivots, ensure each time that it is a valid pivot according to , and keep track of the variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Compare your final tableau to the initial tableau. Are there any similarities?    "
},
{
  "id": "sec-cycling-4",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-4",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "  Consider the canonical linear optimization problem: Maximize , subject to   Consider a sequence of pivots swapping ,  , . In each of these cases, what is the basic solution recorded by the tableau?    The feasible region with multiple lines intersecting the origin.      "
},
{
  "id": "def-Cycling",
  "level": "2",
  "url": "sec-cycling.html#def-Cycling",
  "type": "Definition",
  "number": "2.3.3",
  "title": "",
  "body": " cycling   If a series of pivots in accordance to allows one to return to a set of basic variables achieved earlier in the algorithm, we call this phenomenon cycling .   "
},
{
  "id": "def-degenerate",
  "level": "2",
  "url": "sec-cycling.html#def-degenerate",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": " degenerate   If a pivot on a tableau gives a new tableau corresponding to the same basic solution, we call the pivot a degenerate pivot.   "
},
{
  "id": "thm-BlandAnticycling",
  "level": "2",
  "url": "sec-cycling.html#thm-BlandAnticycling",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "Bland’s Anticycling Rules.",
  "body": " Bland's anticycling rules  anticycling  theorem, Bland's anticycling  Bland's Anticycling Rules   List all variables, independent and dependent in the initial tableau. Then consider the following rules:    Whenever there is more than one possible choice for a pivot row according to : select the row corresponding to the variable closest to the front of the initial list.    Whenever there is more than one possible choice for a pivot column according to : select the column corresponding to the variable closest to the front of the initial list.    Then the Simplex Algorthm will not cycle.   "
},
{
  "id": "sec-cycling-10",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-10",
  "type": "Definition",
  "number": "2.3.6",
  "title": "",
  "body": " dictionary   We call the dictionary for a basis the system of equations corresponding to that basis. So the dictionary for a basis is which we can write with constraint equalities: and objective function equality:    "
},
{
  "id": "sec-cycling-11",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-11",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " For the sake of notation, we denote the initial tableau:                                                                                                                                     and order the variables in the associated way. Suppose we follow Bland's rules and still have cycling. That is, there is a sequence of pivots and bases (set of basic variables) . We call a variable  fickle if is in one, but not all of the bases. That is, it leaves a basis, and re-enters it later during the cycle.  Note that in order for cycling to occur, each pivot must be degenerate (ask yourself why?). So if is fickle, for each basic solution during the cycle.  Since the number of variables is finite, the set of fickle variables is also finite, and let denote the fickle variable with largest subscript. Suppose that (why must such a exist?). Denote the entering variable from with .                                                                                                                                                                                              Note that must also be fickle (why?) and so . We also see that since the above pivot was valid, we must have that and since the pivot was degenerate, we have .  Now, because we have cycling, we must have that re-enters the basis at some point:                                                                                                                                                                                                  Note that for this pivot to be valid, we must have that . If we let denote the dictionary before re-enters the basis, we have: So note that the solution space to the system of equations for both these dictionaries are the same. So we have a solution for (not necessarily feasible ie nonnegativity may fail) that must also be a solution to :   So we have where for . So via algebra:   The above equation holds true no matter what is. Thus: Note that , NOT is entering the basis. If is already in the basis, . Otherwise, , otherwise would have entered by Bland's Anticyling rules. We've also shown . Thus which is only possible if there is some such that   From this, we know that . So , but , so is fickle. Since is the largest index of a fickle variable, . Note that is not entering from , so . Thus .  But is fickle, so in . But then, we would have picked , not to leave.                                                                                                                     which is a contradiction.  "
},
{
  "id": "sec-cycling-12",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-12",
  "type": "Activity",
  "number": "2.3.7",
  "title": "",
  "body": "  If we follow , then no basis is visited twice during the execution of the Simplex Algorithm. Note that is nondecreasing with each pivot. Must the Simplex Algorithm terminate? Why?   "
},
{
  "id": "sec-simplexsage",
  "level": "1",
  "url": "sec-simplexsage.html",
  "type": "Section",
  "number": "2.4",
  "title": "Using Sage to Solve Linear Optimization Problems",
  "body": " Using Sage to Solve Linear Optimization Problems   In practice, most linear algebra computations are done with computers. The presence of tedious technical operations and algorithmic thinking should suggest the same can be done here.     Suppose we wanted to solve the following maximization problem by hand:                                                                                                                                                                                                                                                                                                                                                                                                                            How annoying would this be?    Very.    Extraordinarily.    Horrifically.    I have nothing to do for the next hour anyway. Hope I don't forget a minus sign!      Given that we have a developed an algorithm, guaranteed to terminate, using only arithmetic in its steps, it seems reasonable to think this can be done via a computer.    Let's start simple, suppose we want to solve:                                                                                        We can enter the above problem into Sage via:       We can plot the feasible region and objective level curves, since this is a 2d problem:       We could also encode this problem into a dictionary. We will understand that .      If we want to pivot from to we can write that as: Then we can update the dictionary: We should read this as:                                                                                         What pivot should we do next? Encode it below by editing the FIX_ME values:       We can check at any point if we have an optimal solution.        So if we want to solve:                                                                                                                   We can encode this in:      We now encode the above problem in a dictionary.       We can see who can enter: If we say, pick to enter, see who can legitimately leave: Then select one to leave:       From here, pick another legitimate pivot and perform it:       This still seems like a it would be annoying. Why don't we revisit the original problem? and then just run the Simplex Algorithm:        Remember that cycling example ?     Encode the problem into Sage:       Now let's run the Simplex Algorithm to see what the deal is:        We can now tackle the problem posed in .     Encode the problem into Sage:       We can run the Simplex Algorithm:       We can also just say what the solution is:      "
},
{
  "id": "exploration-sage",
  "level": "2",
  "url": "sec-simplexsage.html#exploration-sage",
  "type": "Exploration",
  "number": "2.4.1",
  "title": "",
  "body": "  Suppose we wanted to solve the following maximization problem by hand:                                                                                                                                                                                                                                                                                                                                                                                                                            How annoying would this be?    Very.    Extraordinarily.    Horrifically.    I have nothing to do for the next hour anyway. Hope I don't forget a minus sign!     "
},
{
  "id": "activity-initialsage",
  "level": "2",
  "url": "sec-simplexsage.html#activity-initialsage",
  "type": "Activity",
  "number": "2.4.2",
  "title": "",
  "body": "  Let's start simple, suppose we want to solve:                                                                                        We can enter the above problem into Sage via:       We can plot the feasible region and objective level curves, since this is a 2d problem:       We could also encode this problem into a dictionary. We will understand that .      If we want to pivot from to we can write that as: Then we can update the dictionary: We should read this as:                                                                                         What pivot should we do next? Encode it below by editing the FIX_ME values:       We can check at any point if we have an optimal solution.     "
},
{
  "id": "sec-simplexsage-6",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-6",
  "type": "Activity",
  "number": "2.4.3",
  "title": "",
  "body": "  So if we want to solve:                                                                                                                   We can encode this in:      We now encode the above problem in a dictionary.       We can see who can enter: If we say, pick to enter, see who can legitimately leave: Then select one to leave:       From here, pick another legitimate pivot and perform it:       This still seems like a it would be annoying. Why don't we revisit the original problem? and then just run the Simplex Algorithm:     "
},
{
  "id": "sec-simplexsage-7",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-7",
  "type": "Activity",
  "number": "2.4.4",
  "title": "",
  "body": "  Remember that cycling example ?     Encode the problem into Sage:       Now let's run the Simplex Algorithm to see what the deal is:     "
},
{
  "id": "sec-simplexsage-8",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-8",
  "type": "Activity",
  "number": "2.4.5",
  "title": "",
  "body": "  We can now tackle the problem posed in .     Encode the problem into Sage:       We can run the Simplex Algorithm:       We can also just say what the solution is:     "
},
{
  "id": "sec-summarysimplex",
  "level": "1",
  "url": "sec-summarysimplex.html",
  "type": "Section",
  "number": "2.5",
  "title": "Summary of Chapter 2",
  "body": " Summary of  We recall that the canonical linear optimization problem may be written as where the are called the slack variables for each constraint. We refer to the original as decision variables . We noted that by their construction, for any point , is zero if and only if lies on bounding hyperplane, and is positive if it is on the correct side of the bounding hyperplane.    An introduction to slack variables.     All of this information may be written in a condensed form, the Tucker tableau .                                                                                                                                      We also noted that, although our inequalities and objective are written in terms of the , since we have the equality that we could rewrite as: provided . This would allow us to rewrite all the pertinent equalities and inequalities replacing with . This process is called a pivot transformation  , where now is a decision variable and is a slack variable.  We note that by setting all the decision variables equal to zero, we obtain a potential solution called a basic solution and the pivot transformation is really moving from basic solution to basic solution. Assuming that all , the basic solutions are feasible, and we establish a rule to identify pivots. Picking a , we choose a positive entry minimizing the ratio . When each , we have obtained an optimal solution. This is summarized in the Simplex Algorithm  .    Pivot transformations and the simplex algorithm.     Note that a feasible region may be unbounded, which we may detect with seeing a column where each but each . However, this does not mean the objective function is unbounded. This only occurs when as well. Note that this is a sufficient, and not necessary condition.    Unbounded regions and objective functions.     Similarly, whenever , the basic solution is not feasible, but the problem may not be infeasible. The problem is only infeasible (i.e. the feasible region is empty) when for each in the same row. This is again sufficient but not necessary.    Infeasible basic solutions and feasible regions.     Finally, it is possible to pivot from basic solution to basic solution, represented as the intersection of different hyperplanes, but without actually changing the point in in a phenomena called cycling . We introduce and prove Bland's Anticyling Theorem  which shows that ordering the variables, and always using the first possible variable to break any ties, we may avoid this issue.    Cycling and Bland's Anticycling Theorem.     "
},
{
  "id": "sec-summarysimplex-2",
  "level": "2",
  "url": "sec-summarysimplex.html#sec-summarysimplex-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slack variables decision variables "
},
{
  "id": "figure-videochapter2slack",
  "level": "2",
  "url": "sec-summarysimplex.html#figure-videochapter2slack",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " An introduction to slack variables.   "
},
{
  "id": "sec-summarysimplex-4",
  "level": "2",
  "url": "sec-summarysimplex.html#sec-summarysimplex-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tucker tableau "
},
{
  "id": "sec-summarysimplex-5",
  "level": "2",
  "url": "sec-summarysimplex.html#sec-summarysimplex-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot transformation "
},
{
  "id": "sec-summarysimplex-6",
  "level": "2",
  "url": "sec-summarysimplex.html#sec-summarysimplex-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basic solution Simplex Algorithm "
},
{
  "id": "figure-videochapter2Tableau",
  "level": "2",
  "url": "sec-summarysimplex.html#figure-videochapter2Tableau",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": " Pivot transformations and the simplex algorithm.   "
},
{
  "id": "figure-videochapter2Unbounded",
  "level": "2",
  "url": "sec-summarysimplex.html#figure-videochapter2Unbounded",
  "type": "Figure",
  "number": "2.5.3",
  "title": "",
  "body": " Unbounded regions and objective functions.   "
},
{
  "id": "figure-videochapter2Infeasibility",
  "level": "2",
  "url": "sec-summarysimplex.html#figure-videochapter2Infeasibility",
  "type": "Figure",
  "number": "2.5.4",
  "title": "",
  "body": " Infeasible basic solutions and feasible regions.   "
},
{
  "id": "sec-summarysimplex-12",
  "level": "2",
  "url": "sec-summarysimplex.html#sec-summarysimplex-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cycling Bland's Anticyling Theorem "
},
{
  "id": "figure-videochapter2Cycling",
  "level": "2",
  "url": "sec-summarysimplex.html#figure-videochapter2Cycling",
  "type": "Figure",
  "number": "2.5.5",
  "title": "",
  "body": " Cycling and Bland's Anticycling Theorem.   "
},
{
  "id": "sec-exercisessimplex",
  "level": "1",
  "url": "sec-exercisessimplex.html",
  "type": "Section",
  "number": "2.6",
  "title": "Problems for Chapter 2",
  "body": " Problems for   The simplex pivoter may be found here:          Consider the tableau:                                                                      Write out the canonical maximization problem encoded by the tableau.      State the basic solution for this tableau.      Determine if the basic solution is feasible.      Pivot on the entry .      Write out the new canonical maximization problem in terms of the nonbasic variables and the new basic solution in terms of .       Consider the tableau:                                                                                Write out the canonical minimization problem encoded by the tableau.      State the basic solution for this tableau.      Determine if the basic solution is feasible.      Pivot on the entry .      Write out the new canonical minimization problem in terms of the nonbasic variables and the new basic solution in terms of .       For each of the following canonical maximization tableaus:    Write out the current basic solution.      Determine if the current basic solution is feasible.      Determine if the tableau detects that the feasible region is unbounded.      Determine if the tableau detects that the problem is infeasible. If so, ignore the rest of the prompts.      Determine if the tableau detects that the problem is unbounded. If so, ignore the rest of the prompts.     Determine if the current basic solution is optimal. If so, ignore the rest of the prompts.     Identify all valid pivot entries.      Pivot on the entry corresponding to Bland's Anticycling Theorem .      Write out the new basic solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    For each problem in solve these problems using the Simplex Algorithm.     Solve the following using the Simplex Algorithm.                                                                                                                                                                                                                                                                         For each problem in , sketch the feasible region and label the extreme points traversed by the Simplex Algorithm in order.     Solve the following using the Simplex Algorithm.     A firm produces a rare blend of scotch whiskey. The blend must contain at least 42% alcohol, at least 25% Highland blend, and no more than 15% malt. Three distillery products can be combined for the blend.  Product A costs $12 a gallon, is 46% alcohol, 30% Highland blend and 10% malt. Product B costs $8 a gallon, is 40% alcohol, 20% Highland blend and 5% malt. Product C costs $14 a gallon, is 45% alcohol, 25% Highland blend and 2% malt.  How much of each product should be used to produce 100 gallons of blend at minimal cost?      A company produces three types of tires for the SUV market. In their manufacture, the tires are processed on two machines, a molder and a capper. Tire type A takes 8 hours in the molder, 4 on the capper and sells for $45. Tire type B takes 10 hours in the molder, 7 on the capper and sells for $50. Tire type C takes 5 hours in the molder, 6 on the capper and sells for $40. At least 75 of each type of tire needs to be made each week to fulfill current contracts. If 3000 hours are available each week for molders and 2700 for cappers, how many of each type of tire should be made each week to maximize revenue?      The canonical optimization problem below potentially cycles (due to H.W. Kuhn). Solve the problem by using the Simplex Algorithm with Bland's Anticycling Theorem .                                                                                                                     Consider a tableau whose basic solution is feasible and optimal. Suppose each . Prove that this is the unique optimal solution if and only if each .     The following have multiple optimal solutions, use the Simplex Algorithm and then pivots to classify all the optimal solutions.                                                                                                                                                                                      Consider a square tableau:                                                                                                                                    Suppose we perform pivots so we achieve a tableau of the form:                                                                                                                                      Let and . For each of the following matrices perform appropriate pivots to achieve and confirm .                          Explain why in that in general.      Find necessary and sufficient conditions for the minimization tableau                                                                                                               to have a feasible basic solution.      If a minimization tableau as depicted above has a feasible basic solution, must it also have a feasible basic maximum solution? Prove or find a counterexample.      Find neccesary and sufficient conditions for                                                                                                                      to encode feasible basic solutions for both its maximization and minimization problems.       Prove that each tableau always encodes a unique basic solution by first showing that the default starting basic solution is unique, and then proving that each pivot preserves the uniqueness of the basic solution.    Note that each basic solution is the intersection of hyperplanes. What would it take for this to be empty or contain multiple points? Think in terms of linear (in)dependence and solving linear systems.     "
},
{
  "id": "exercises-simplex-1",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-1",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": "  Consider the tableau:                                                                      Write out the canonical maximization problem encoded by the tableau.      State the basic solution for this tableau.      Determine if the basic solution is feasible.      Pivot on the entry .      Write out the new canonical maximization problem in terms of the nonbasic variables and the new basic solution in terms of .    "
},
{
  "id": "exercises-simplex-2",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-2",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": "  Consider the tableau:                                                                                Write out the canonical minimization problem encoded by the tableau.      State the basic solution for this tableau.      Determine if the basic solution is feasible.      Pivot on the entry .      Write out the new canonical minimization problem in terms of the nonbasic variables and the new basic solution in terms of .    "
},
{
  "id": "exercises-simplex-3",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-3",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": "  For each of the following canonical maximization tableaus:    Write out the current basic solution.      Determine if the current basic solution is feasible.      Determine if the tableau detects that the feasible region is unbounded.      Determine if the tableau detects that the problem is infeasible. If so, ignore the rest of the prompts.      Determine if the tableau detects that the problem is unbounded. If so, ignore the rest of the prompts.     Determine if the current basic solution is optimal. If so, ignore the rest of the prompts.     Identify all valid pivot entries.      Pivot on the entry corresponding to Bland's Anticycling Theorem .      Write out the new basic solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
},
{
  "id": "exercises-simplex-4",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-4",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": " For each problem in solve these problems using the Simplex Algorithm.  "
},
{
  "id": "ex-solvesimplex",
  "level": "2",
  "url": "sec-exercisessimplex.html#ex-solvesimplex",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": "  Solve the following using the Simplex Algorithm.                                                                                                                                                                                                                                                                       "
},
{
  "id": "exercises-simplex-6",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-6",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "",
  "body": " For each problem in , sketch the feasible region and label the extreme points traversed by the Simplex Algorithm in order.  "
},
{
  "id": "exercises-simplex-7",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-7",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "",
  "body": "  Solve the following using the Simplex Algorithm.     A firm produces a rare blend of scotch whiskey. The blend must contain at least 42% alcohol, at least 25% Highland blend, and no more than 15% malt. Three distillery products can be combined for the blend.  Product A costs $12 a gallon, is 46% alcohol, 30% Highland blend and 10% malt. Product B costs $8 a gallon, is 40% alcohol, 20% Highland blend and 5% malt. Product C costs $14 a gallon, is 45% alcohol, 25% Highland blend and 2% malt.  How much of each product should be used to produce 100 gallons of blend at minimal cost?      A company produces three types of tires for the SUV market. In their manufacture, the tires are processed on two machines, a molder and a capper. Tire type A takes 8 hours in the molder, 4 on the capper and sells for $45. Tire type B takes 10 hours in the molder, 7 on the capper and sells for $50. Tire type C takes 5 hours in the molder, 6 on the capper and sells for $40. At least 75 of each type of tire needs to be made each week to fulfill current contracts. If 3000 hours are available each week for molders and 2700 for cappers, how many of each type of tire should be made each week to maximize revenue?    "
},
{
  "id": "exercises-simplex-8",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-8",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "",
  "body": " The canonical optimization problem below potentially cycles (due to H.W. Kuhn). Solve the problem by using the Simplex Algorithm with Bland's Anticycling Theorem .                                                                                                                   "
},
{
  "id": "exercises-simplex-9",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-9",
  "type": "Exercise",
  "number": "2.6.9",
  "title": "",
  "body": " Consider a tableau whose basic solution is feasible and optimal. Suppose each . Prove that this is the unique optimal solution if and only if each .  "
},
{
  "id": "exercises-simplex-10",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-10",
  "type": "Exercise",
  "number": "2.6.10",
  "title": "",
  "body": "  The following have multiple optimal solutions, use the Simplex Algorithm and then pivots to classify all the optimal solutions.                                                                                                                                                                                   "
},
{
  "id": "ex-invert",
  "level": "2",
  "url": "sec-exercisessimplex.html#ex-invert",
  "type": "Exercise",
  "number": "2.6.11",
  "title": "",
  "body": "  Consider a square tableau:                                                                                                                                    Suppose we perform pivots so we achieve a tableau of the form:                                                                                                                                      Let and . For each of the following matrices perform appropriate pivots to achieve and confirm .                        "
},
{
  "id": "exercises-simplex-12",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-12",
  "type": "Exercise",
  "number": "2.6.12",
  "title": "",
  "body": " Explain why in that in general.  "
},
{
  "id": "exercises-simplex-13",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-13",
  "type": "Exercise",
  "number": "2.6.13",
  "title": "",
  "body": "   Find necessary and sufficient conditions for the minimization tableau                                                                                                               to have a feasible basic solution.      If a minimization tableau as depicted above has a feasible basic solution, must it also have a feasible basic maximum solution? Prove or find a counterexample.      Find neccesary and sufficient conditions for                                                                                                                      to encode feasible basic solutions for both its maximization and minimization problems.    "
},
{
  "id": "exercises-simplex-14",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-14",
  "type": "Exercise",
  "number": "2.6.14",
  "title": "",
  "body": "  Prove that each tableau always encodes a unique basic solution by first showing that the default starting basic solution is unique, and then proving that each pivot preserves the uniqueness of the basic solution.    Note that each basic solution is the intersection of hyperplanes. What would it take for this to be empty or contain multiple points? Think in terms of linear (in)dependence and solving linear systems.   "
},
{
  "id": "sec-unconstrained",
  "level": "1",
  "url": "sec-unconstrained.html",
  "type": "Section",
  "number": "3.1",
  "title": "Unconstrained Variables",
  "body": " Unconstrained Variables  unconstrained variable  variable, unconstrained   Recall that canonical problems have nonnegative variables and inequality bounds. In this section, we consider linear optimization problems with potentially negative variables.     Suppose we wanted to solve the linear optimization problem:      What are some differences between this linear optimization problem and previous examples of optimization problems?      We can record the problem with the following tableau, we denote the variables which can be negative by circling them:                                                                                     What point currently represents the basic solution?      Suppose we pivot on the entry with the . What point has the basic solution moved to? (You do not need to fill in the tableau.)                                                                                         Suppose we pivot on the entry with the . What point has the basic solution moved to?                                                                                         Consider the plot of the feasible region. What geometrically did our two pivots do?         List all the hyperplanes that bound the feasible region.      Recall that each simplex pivot represents a shift of the basic solution from one extreme point to another. Which of the following do you believe is true?    Following the rules of pivoting through the Simplex Algorithm, we should be able to return to the origin, and this is consistent with our geometric viewpoint.    It is possible to perform pivots that don't necessarily follow the rules of the Simplex Algorithm, to return to the origin, and this is consistent with our geometric viewpoint.    It is technically possible to perform pivots that don't necessarily follow the rules of the Simplex Algorithm to return to the origin, and this is not consistent with our geometric viewpoint.         In a linear optimization problem, a variable which can be potentially negative is called an unconstrained variable.      Suppose we wanted to solve the linear optimization problem:      We can record the problem as follows:                                                                     Out of , which are nonnegative?      Perform a pivot on the entry with the :                                                                         Consider the resulting tableau:                                                                     What point in represents the basic solution of this tableau? Why is this point not an optimal solution?      Consider the row with the , and recall that is allowed to be negative. Consider only this row and the nonnegativity constraints of . Which of the following is allowed to be?     .     .     .    For each choice of that is valid, with , what would be?      Which of the following bits of information does this row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .    That .        After recording this piece of information, we may as well delete this row, since we have what we need from it:                                                     Pivot on the entry with the .      Why does the resulting tableau encode a basic solution which is not infeasible?      Which of the following bits of information does the row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .        After recording this piece of information, we may as well delete this row, since we have what we need from it:                                     Why is the basic solution encoded by this tableau optimal?      What are the final values for ?      Consider the plot of the feasible region. If we started at the origin, what did we do in each step?          With unconstrained variables, we proceed as follows.    Remove all unconstrained slack variables and delete the corresponding rows.    If there are no unconstrained decision variables: STOP.    Pivot an unconstrained decision variable with a slack variable.    GOTO 1.        Solve the linear optimization problem:     "
},
{
  "id": "unconstrained-geometry",
  "level": "2",
  "url": "sec-unconstrained.html#unconstrained-geometry",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Suppose we wanted to solve the linear optimization problem:      What are some differences between this linear optimization problem and previous examples of optimization problems?      We can record the problem with the following tableau, we denote the variables which can be negative by circling them:                                                                                     What point currently represents the basic solution?      Suppose we pivot on the entry with the . What point has the basic solution moved to? (You do not need to fill in the tableau.)                                                                                         Suppose we pivot on the entry with the . What point has the basic solution moved to?                                                                                         Consider the plot of the feasible region. What geometrically did our two pivots do?         List all the hyperplanes that bound the feasible region.      Recall that each simplex pivot represents a shift of the basic solution from one extreme point to another. Which of the following do you believe is true?    Following the rules of pivoting through the Simplex Algorithm, we should be able to return to the origin, and this is consistent with our geometric viewpoint.    It is possible to perform pivots that don't necessarily follow the rules of the Simplex Algorithm, to return to the origin, and this is consistent with our geometric viewpoint.    It is technically possible to perform pivots that don't necessarily follow the rules of the Simplex Algorithm to return to the origin, and this is not consistent with our geometric viewpoint.      "
},
{
  "id": "def-unconstrained",
  "level": "2",
  "url": "sec-unconstrained.html#def-unconstrained",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  In a linear optimization problem, a variable which can be potentially negative is called an unconstrained variable.   "
},
{
  "id": "unconstrained-example",
  "level": "2",
  "url": "sec-unconstrained.html#unconstrained-example",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Suppose we wanted to solve the linear optimization problem:      We can record the problem as follows:                                                                     Out of , which are nonnegative?      Perform a pivot on the entry with the :                                                                         Consider the resulting tableau:                                                                     What point in represents the basic solution of this tableau? Why is this point not an optimal solution?      Consider the row with the , and recall that is allowed to be negative. Consider only this row and the nonnegativity constraints of . Which of the following is allowed to be?     .     .     .    For each choice of that is valid, with , what would be?      Which of the following bits of information does this row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .    That .        After recording this piece of information, we may as well delete this row, since we have what we need from it:                                                     Pivot on the entry with the .      Why does the resulting tableau encode a basic solution which is not infeasible?      Which of the following bits of information does the row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .        After recording this piece of information, we may as well delete this row, since we have what we need from it:                                     Why is the basic solution encoded by this tableau optimal?      What are the final values for ?      Consider the plot of the feasible region. If we started at the origin, what did we do in each step?       "
},
{
  "id": "sec-unconstrained-8",
  "level": "2",
  "url": "sec-unconstrained.html#sec-unconstrained-8",
  "type": "Observation",
  "number": "3.1.4",
  "title": "",
  "body": "  With unconstrained variables, we proceed as follows.    Remove all unconstrained slack variables and delete the corresponding rows.    If there are no unconstrained decision variables: STOP.    Pivot an unconstrained decision variable with a slack variable.    GOTO 1.     "
},
{
  "id": "sec-unconstrained-9",
  "level": "2",
  "url": "sec-unconstrained.html#sec-unconstrained-9",
  "type": "Activity",
  "number": "3.1.5",
  "title": "",
  "body": "  Solve the linear optimization problem:    "
},
{
  "id": "sec-superconstrained",
  "level": "1",
  "url": "sec-superconstrained.html",
  "type": "Section",
  "number": "3.2",
  "title": "Super Constrained Bounds",
  "body": " Super Constrained Bounds  equality constraint   In this section, we consider linear optimization problems with equality bounds.     Suppose we wanted to solve the linear optimization problem:      Plot the feasible region, what dimension is it?           Suppose we added in the constraint Plot the feasible region, what dimension is it?      Consider the inequality captured by the equality . What value must so that is always an equality? Call this value .            Note that this problem may be encoded in the tableau:                                                                                                                     Without computing the tableau, what point does the basic solution move to if we pivot on the entry with a ? Is it feasible?      As we traverse corner points on the way to an optimal solution, would we ever leave the plane ?      After the last pivot, our tableau has the form:                                                                                                                     Ignoring the specific values of the entries of this tableau, using the value for computed earlier, rewrite each of the above equations in terms of . What information did the column provide?       An equality constraint can be written as: and thus recorded in a tableau as:                                                                                                                                                                                                                                                                                  If we pivot on the entry, we obtain:                                                                                                                                                                                                                                                                                  Then depending on your perspective, we can either delete the 0 column because it does not contribute information algebraically, or because it is redundant geometrically, and we restrict ourselves to a dimensional solution space. Either way, removing this column gives us:                                                                                                                                                                                                                                                                Consider the linear optimization problem:      Record this problem in a tableau with an equality constraint.                                                                                    Pivot on the entry with .                                                                                    We obtained a tableau of the form:                                                                              Rewrite the 3 rows as linear equalities, and verify that the 0 column contributes nothing.      Delete the 0 column and solve the remaining system.            Solve the linear optimization problem:            Solve the linear optimization problem:            Solve the linear optimization problem:          "
},
{
  "id": "super-constrained-geometry",
  "level": "2",
  "url": "sec-superconstrained.html#super-constrained-geometry",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "  Suppose we wanted to solve the linear optimization problem:      Plot the feasible region, what dimension is it?           Suppose we added in the constraint Plot the feasible region, what dimension is it?      Consider the inequality captured by the equality . What value must so that is always an equality? Call this value .            Note that this problem may be encoded in the tableau:                                                                                                                     Without computing the tableau, what point does the basic solution move to if we pivot on the entry with a ? Is it feasible?      As we traverse corner points on the way to an optimal solution, would we ever leave the plane ?      After the last pivot, our tableau has the form:                                                                                                                     Ignoring the specific values of the entries of this tableau, using the value for computed earlier, rewrite each of the above equations in terms of . What information did the column provide?    "
},
{
  "id": "sec-superconstrained-5",
  "level": "2",
  "url": "sec-superconstrained.html#sec-superconstrained-5",
  "type": "Observation",
  "number": "3.2.2",
  "title": "",
  "body": "  An equality constraint can be written as: and thus recorded in a tableau as:                                                                                                                                                                                                                                                                                  If we pivot on the entry, we obtain:                                                                                                                                                                                                                                                                                  Then depending on your perspective, we can either delete the 0 column because it does not contribute information algebraically, or because it is redundant geometrically, and we restrict ourselves to a dimensional solution space. Either way, removing this column gives us:                                                                                                                                                                                                                                                             "
},
{
  "id": "sec-superconstrained-6",
  "level": "2",
  "url": "sec-superconstrained.html#sec-superconstrained-6",
  "type": "Activity",
  "number": "3.2.3",
  "title": "",
  "body": "  Consider the linear optimization problem:      Record this problem in a tableau with an equality constraint.                                                                                    Pivot on the entry with .                                                                                    We obtained a tableau of the form:                                                                              Rewrite the 3 rows as linear equalities, and verify that the 0 column contributes nothing.      Delete the 0 column and solve the remaining system.         "
},
{
  "id": "sec-superconstrained-7",
  "level": "2",
  "url": "sec-superconstrained.html#sec-superconstrained-7",
  "type": "Activity",
  "number": "3.2.4",
  "title": "",
  "body": "  Solve the linear optimization problem:         "
},
{
  "id": "sec-superconstrained-8",
  "level": "2",
  "url": "sec-superconstrained.html#sec-superconstrained-8",
  "type": "Activity",
  "number": "3.2.5",
  "title": "",
  "body": "  Solve the linear optimization problem:         "
},
{
  "id": "sec-superconstrained-9",
  "level": "2",
  "url": "sec-superconstrained.html#sec-superconstrained-9",
  "type": "Activity",
  "number": "3.2.6",
  "title": "",
  "body": "  Solve the linear optimization problem:         "
},
{
  "id": "sec-noncanonsage",
  "level": "1",
  "url": "sec-noncanonsage.html",
  "type": "Section",
  "number": "3.3",
  "title": "Solving Noncanonical Problems with Sage",
  "body": " Solving Noncanonical Problems with Sage   In , we showed how to use Sage to solve canonical linear optimization problems with the Simplex Algorithm. In this section, we use Sage to solve noncanonical problems.     Say we want to solve the noncanonical linear optimization problem:        Record this noncanonical problem using Sage:         Find the optimal solution:      Note that we use the command InteractiveLPProblem for general (potentially noncanonical) linear optimization problems, rather than InteractiveLPProblemStandardForm . Sage does not have a command for the Simplex Algorithm for InteractiveLPProblem .    Solve:           "
},
{
  "id": "sec-noncanonsage-3",
  "level": "2",
  "url": "sec-noncanonsage.html#sec-noncanonsage-3",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": "  Say we want to solve the noncanonical linear optimization problem:        Record this noncanonical problem using Sage:         Find the optimal solution:     "
},
{
  "id": "sec-noncanonsage-5",
  "level": "2",
  "url": "sec-noncanonsage.html#sec-noncanonsage-5",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": "  Solve:          "
},
{
  "id": "sec-summarynoncanon",
  "level": "1",
  "url": "sec-summarynoncanon.html",
  "type": "Section",
  "number": "3.4",
  "title": "Summary of Chapter 3",
  "body": " Summary of  We first consider the case where some is allowed to be negative, which we denote as .                                                                                                                                                                                                                                                                                  Note that should we pivot on                                                                                                                                                                                                                                                                                 that having a slack variable that can be negative serves no purpose, since the point of the nonnegativity constraint is to reinforce the inequality. Also note that the hyperplane also plays no role in this problem, since it does not serve as a bounding hyperplane. Thus, we may simply delete this row (after recording the equality) as this equality will have no bearing on future steps or the final solution.                                                                                                                                                                                                                A summary of unconstrained variables.     Next we consider the case where the feasible region is bound by an equality, rather than an inequality. In such a case, the slack variable must be zero.                                                                                                                                                                                                                                                                                  Now in this case, if we pivot on entry, we obtain:                                                                                                                                                                                                                                                                                  Note that what the coefficients are, they are coefficients of the variable  and are thus irrelevant. Moreover, we cannot pivot away from this plane, since our feasible region is contained completely within the plane. Thus we may delete this column.                                                                                                                                                                                                                                                            A summary of equality constraints.     "
},
{
  "id": "figure-videochapter3negativity",
  "level": "2",
  "url": "sec-summarynoncanon.html#figure-videochapter3negativity",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " A summary of unconstrained variables.   "
},
{
  "id": "figure-videochapter3Equality",
  "level": "2",
  "url": "sec-summarynoncanon.html#figure-videochapter3Equality",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " A summary of equality constraints.   "
},
{
  "id": "sec-exercisesnoncanon",
  "level": "1",
  "url": "sec-exercisesnoncanon.html",
  "type": "Section",
  "number": "3.5",
  "title": "Problems for Chapter 3",
  "body": " Problems for   The simplex pivoter may be found here:          Solve each of the noncanonical linear optimization problems below. If a linear optimization problem has infinitely many optimal solutions, find all optimal solutions.                                                                                   Label each of the following statements TRUE or FALSE. If the statement is FALSE, provide a counterexample.     A noncanonical linear optimization problem with more unconstrained independent variables than constraints has unbounded objective function (as in  ).      A noncanonical linear optimization problem with more equations of constraint than independent variables is infeasible (as in  ).       Sketch the constraint set for each noncanonical linear optimization problem below. On the basis of this constraint set, formulate a conjecture as to whether or not the solution of the given problem is the same as the solution of the associated canonical linear optimization problem where all independent variables are constrained to be nonnegative. Verify your conjecture by solving both linear optimization problems.                                 The following problem has infinitely many optimal solutions. Sketch the feasible region, find the optimal solutions and sketch the solution set.        Another method method for transforming a linear optimization problem with unconstrained independent variables into canonical form is to replace every unconstrained independent variable by the difference of two independent variables constrained to be nonnegative. This produces an equivalent canonical linear optimization problem which is solved by using the Simplex Algorithm.  For example:     may be restated as the following canonical optimization problem:     where we let .     Solve the second canonical optimization problem above.      Solve the original optimization problem.      How do the solutions compare?       Another method method for transforming a linear optimization problem with equations of constraint into canonical form is to replace every equation of constraint by two inequality constraints. This produces an equivalent canonical linear optimization problem which is solved by using the Simplex Algorithm.  For example:     may be restated as the following canonical optimization problem:        Solve the second canonical optimization problem above.      Solve the original optimization problem.      How do the solutions compare?      Use the methods presented in and to solve:       What are some pros and cons of the methods presented in and ?    "
},
{
  "id": "ex-nc",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#ex-nc",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "  Solve each of the noncanonical linear optimization problems below. If a linear optimization problem has infinitely many optimal solutions, find all optimal solutions.                                                                                "
},
{
  "id": "exercises-noncanon-2",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#exercises-noncanon-2",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "  Label each of the following statements TRUE or FALSE. If the statement is FALSE, provide a counterexample.     A noncanonical linear optimization problem with more unconstrained independent variables than constraints has unbounded objective function (as in  ).      A noncanonical linear optimization problem with more equations of constraint than independent variables is infeasible (as in  ).    "
},
{
  "id": "exercises-noncanon-3",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#exercises-noncanon-3",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "  Sketch the constraint set for each noncanonical linear optimization problem below. On the basis of this constraint set, formulate a conjecture as to whether or not the solution of the given problem is the same as the solution of the associated canonical linear optimization problem where all independent variables are constrained to be nonnegative. Verify your conjecture by solving both linear optimization problems.                               "
},
{
  "id": "exercises-noncanon-4",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#exercises-noncanon-4",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": " The following problem has infinitely many optimal solutions. Sketch the feasible region, find the optimal solutions and sketch the solution set.     "
},
{
  "id": "ex-uc",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#ex-uc",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "  Another method method for transforming a linear optimization problem with unconstrained independent variables into canonical form is to replace every unconstrained independent variable by the difference of two independent variables constrained to be nonnegative. This produces an equivalent canonical linear optimization problem which is solved by using the Simplex Algorithm.  For example:     may be restated as the following canonical optimization problem:     where we let .     Solve the second canonical optimization problem above.      Solve the original optimization problem.      How do the solutions compare?    "
},
{
  "id": "ex-superconstrained",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#ex-superconstrained",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": "  Another method method for transforming a linear optimization problem with equations of constraint into canonical form is to replace every equation of constraint by two inequality constraints. This produces an equivalent canonical linear optimization problem which is solved by using the Simplex Algorithm.  For example:     may be restated as the following canonical optimization problem:        Solve the second canonical optimization problem above.      Solve the original optimization problem.      How do the solutions compare?    "
},
{
  "id": "exercises-noncanon-7",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#exercises-noncanon-7",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": " Use the methods presented in and to solve:     "
},
{
  "id": "exercises-noncanon-8",
  "level": "2",
  "url": "sec-exercisesnoncanon.html#exercises-noncanon-8",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "",
  "body": " What are some pros and cons of the methods presented in and ?  "
},
{
  "id": "sec-sensitivity",
  "level": "1",
  "url": "sec-sensitivity.html",
  "type": "Section",
  "number": "4.1",
  "title": "Sensitivity Analysis",
  "body": " Sensitivity Analysis   In this section, we begin the exploration of what duality means. We assign natural meanings to dual variables and the dual problem. One perspective to keep in mind this section is the role of bounds and objective function in the primal problem, and how they change here.     The witch Agnesi The name Agnesi was chosen by my Spring 2024 class who knew her from her eponymous curve. is brewing a healing elixir and a poison. A pint of healing elixir takes 3 newt eyes and one frog, whereas a pint of poison takes 1 each of newt eyes and frogs. She currently has 34 newt eyes and 14 frogs.  Supposing that the healing elixir sells for three gold pieces, and the poison sells for two. Agnesi wishes to maximize her revenue. Let us also suppose that since these are liquids, she is happy making fractional amounts of elixirs and potions.     Before proceeding to solve the problem, make an estimate: how much do you think each newt eye and frog is worth to her? Why do you think so?      We now return to the initially posed maximization problem. Sketch the feasible region for this problem, and use whatever method you feel like to find the optimal solution.       Agnesi is frustrated by her production levels and income. She is going to recruit some local children to gather more materials for her. Without explicitly computing anything, looking at her situation, what would result in greater profits for her, more newt eyes or frogs?      Recompute this linear optimization problem with 35 newt eyes and 14 frogs, then with 34 newt eyes and 15 frogs. Which provides the greater increase in revenue? Is this consistent with what you thought earlier? (Use the above interactive.)      If the need for healing elixir increases and they now sell for 5 gold, would that change our answers above?        In both and we essentially explore the idea of assigning values somehow to the bounds of a maximization problem.  Suppose you have a production problem, and you wish to acquire new materials to increase production. You then assign a value to each potential new material, according to which would benefit you the most. Which of the following should be reasonable things to expect from these values?    The value of each material is nonnegative.    The total value of the materials should be as big as possible, to maximize costs associated with their value.    The total value of the materials should be as small as possible, to minimize costs associated with their value.    The total value of these materials should reflect the value of selling products made with those materials.    If a material is not to be used, it has zero value.        From , letting denote the number of healing elixirs, and denote the amount of poison created. Then, we get that the feasible region satisfies the inequalities: which is bounded by hyperplanes: with normal vectors which may be depicted:   The feasible region for the witch production problem, and depicted normal vectors.         Starting at the basic solution, perform pivots as follows:                                                                                                                                                                                                                                                                              For each tableau, confirm the solution is feasible.      For each tableau above, if we decrease each decision variable from to , how does that change the value of the objective function? What does decreasing a decision variable from to mean geometrically? What does it mean in terms of the normal vectors of the associated intersecting hyperplanes?      Consider that is on the intersection of which are hyperplanes with normal vectors and respectively. Note that passes through with normal vector .  Drag sliders for so that    As you adjust , what do you notice about the resulting linear combination?      For each extreme point, express as a linear combination of the normal vectors of the corresponding hyperplanes. Then, for each tableau computed above, look at their basic solutions. What point corresponds to each basic solution, and how are these coefficients reflected in each tableau?         For each extreme point in the feasible region, consider the bounding planes who intersect at that point. If you traverse in the direction of the normal vectors from the extreme point, does the objective function increase or decrease? How does this connect to the coefficients we just found?      For which extreme points are the normal vector of the objective plane a linear combination of the normal vectors of intersecting hyperplanes using only positive coefficients? Is there anything special about those extreme points? Is there anything noteworthy about the corresponding tableau?       Consider the tableau:                                                                                                                                         Suppose that for each plane has corresponding normal vector .     Prove that the normal vector for is .      Is there anything special about a tableau where is a nonnegative linear combination of normal vectors?      Suppose that this tableau corresponds to an optimal solution. If we decrease any from to , how does change? What does this decrease correspond to geometrically?      dual problem  linear optimization problem, dual minimization  dual variable  variable, dual  Recall the canonical maximization problem:     The dual minimization problem is articulated as follows:     We refer to the as dual variables .     Recall Agnesi's business , and the coefficient computations done in .     Following , write out the dual problem to the maximization problem described in .       Which of the following best represent the dual variables in this context?    The quantity of newt eyes and frogs.    The value of newt eyes and frogs.    The quantity of healing elixirs and poisons.    The value of healing elixirs and poisons.         For each inequality in our dual problem, articulate what those inequalities represent in this context.      Describe the dual objective function in this context.       Describe three primal maximization problems with some real world context, these do not have to be realistic , they can be fantastical like Agnesi's problem here. Then, describe the dual problem to each and explain what the dual variables mean in each case.    "
},
{
  "id": "exploration-witch",
  "level": "2",
  "url": "sec-sensitivity.html#exploration-witch",
  "type": "Exploration",
  "number": "4.1.1",
  "title": "",
  "body": "  The witch Agnesi The name Agnesi was chosen by my Spring 2024 class who knew her from her eponymous curve. is brewing a healing elixir and a poison. A pint of healing elixir takes 3 newt eyes and one frog, whereas a pint of poison takes 1 each of newt eyes and frogs. She currently has 34 newt eyes and 14 frogs.  Supposing that the healing elixir sells for three gold pieces, and the poison sells for two. Agnesi wishes to maximize her revenue. Let us also suppose that since these are liquids, she is happy making fractional amounts of elixirs and potions.     Before proceeding to solve the problem, make an estimate: how much do you think each newt eye and frog is worth to her? Why do you think so?      We now return to the initially posed maximization problem. Sketch the feasible region for this problem, and use whatever method you feel like to find the optimal solution.       Agnesi is frustrated by her production levels and income. She is going to recruit some local children to gather more materials for her. Without explicitly computing anything, looking at her situation, what would result in greater profits for her, more newt eyes or frogs?      Recompute this linear optimization problem with 35 newt eyes and 14 frogs, then with 34 newt eyes and 15 frogs. Which provides the greater increase in revenue? Is this consistent with what you thought earlier? (Use the above interactive.)      If the need for healing elixir increases and they now sell for 5 gold, would that change our answers above?    "
},
{
  "id": "sec-sensitivity-4",
  "level": "2",
  "url": "sec-sensitivity.html#sec-sensitivity-4",
  "type": "Activity",
  "number": "4.1.2",
  "title": "",
  "body": "   In both and we essentially explore the idea of assigning values somehow to the bounds of a maximization problem.  Suppose you have a production problem, and you wish to acquire new materials to increase production. You then assign a value to each potential new material, according to which would benefit you the most. Which of the following should be reasonable things to expect from these values?    The value of each material is nonnegative.    The total value of the materials should be as big as possible, to maximize costs associated with their value.    The total value of the materials should be as small as possible, to minimize costs associated with their value.    The total value of these materials should reflect the value of selling products made with those materials.    If a material is not to be used, it has zero value.     "
},
{
  "id": "activity-coefficients",
  "level": "2",
  "url": "sec-sensitivity.html#activity-coefficients",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": "  From , letting denote the number of healing elixirs, and denote the amount of poison created. Then, we get that the feasible region satisfies the inequalities: which is bounded by hyperplanes: with normal vectors which may be depicted:   The feasible region for the witch production problem, and depicted normal vectors.         Starting at the basic solution, perform pivots as follows:                                                                                                                                                                                                                                                                              For each tableau, confirm the solution is feasible.      For each tableau above, if we decrease each decision variable from to , how does that change the value of the objective function? What does decreasing a decision variable from to mean geometrically? What does it mean in terms of the normal vectors of the associated intersecting hyperplanes?      Consider that is on the intersection of which are hyperplanes with normal vectors and respectively. Note that passes through with normal vector .  Drag sliders for so that    As you adjust , what do you notice about the resulting linear combination?      For each extreme point, express as a linear combination of the normal vectors of the corresponding hyperplanes. Then, for each tableau computed above, look at their basic solutions. What point corresponds to each basic solution, and how are these coefficients reflected in each tableau?         For each extreme point in the feasible region, consider the bounding planes who intersect at that point. If you traverse in the direction of the normal vectors from the extreme point, does the objective function increase or decrease? How does this connect to the coefficients we just found?      For which extreme points are the normal vector of the objective plane a linear combination of the normal vectors of intersecting hyperplanes using only positive coefficients? Is there anything special about those extreme points? Is there anything noteworthy about the corresponding tableau?    "
},
{
  "id": "sec-sensitivity-6",
  "level": "2",
  "url": "sec-sensitivity.html#sec-sensitivity-6",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": "  Consider the tableau:                                                                                                                                         Suppose that for each plane has corresponding normal vector .     Prove that the normal vector for is .      Is there anything special about a tableau where is a nonnegative linear combination of normal vectors?      Suppose that this tableau corresponds to an optimal solution. If we decrease any from to , how does change? What does this decrease correspond to geometrically?    "
},
{
  "id": "definition-dual",
  "level": "2",
  "url": "sec-sensitivity.html#definition-dual",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": " dual problem  linear optimization problem, dual minimization  dual variable  variable, dual  Recall the canonical maximization problem:     The dual minimization problem is articulated as follows:     We refer to the as dual variables .  "
},
{
  "id": "sec-sensitivity-8",
  "level": "2",
  "url": "sec-sensitivity.html#sec-sensitivity-8",
  "type": "Activity",
  "number": "4.1.6",
  "title": "",
  "body": "  Recall Agnesi's business , and the coefficient computations done in .     Following , write out the dual problem to the maximization problem described in .       Which of the following best represent the dual variables in this context?    The quantity of newt eyes and frogs.    The value of newt eyes and frogs.    The quantity of healing elixirs and poisons.    The value of healing elixirs and poisons.         For each inequality in our dual problem, articulate what those inequalities represent in this context.      Describe the dual objective function in this context.    "
},
{
  "id": "sec-sensitivity-9",
  "level": "2",
  "url": "sec-sensitivity.html#sec-sensitivity-9",
  "type": "Activity",
  "number": "4.1.7",
  "title": "",
  "body": "  Describe three primal maximization problems with some real world context, these do not have to be realistic , they can be fantastical like Agnesi's problem here. Then, describe the dual problem to each and explain what the dual variables mean in each case.   "
},
{
  "id": "sec-dualitytheory",
  "level": "1",
  "url": "sec-dualitytheory.html",
  "type": "Section",
  "number": "4.2",
  "title": "Duality Theory",
  "body": " Duality Theory   In this section, we establish the theoretical underpinnings of duality. This is a proof heavy section.     Recall the primal maximization problem , and the corresponding dual minimization problem . By letting   We can rephrase the primal max problem as follows: Maximize for subject to Here, we understand to denote entrywise inequality.  Likewise, we can rephrase the dual min problem as follows: Minimize for subject to        In this activity, we explore a foundational relationship between the primal max problem and its dual, called weak duality .      Consider the matrix product . Use this product to show that .      Suppose there were feasible for which . What then must be true about these solutions? Can we prove our assertion?      Recall and . Consider the primal max and dual min of the associated problems. How does our assertion fit these problems?      Come up with a primal max problem (and corresponding min dual) where all have integer values, so that the primal max and dual min problems achieve optimal solutions , where .      Using the same values for for the problem we just constructed, suppose we relax the condition that all our values must be integers. What can we say about the optimal solutions then?     What we have proven is the following:   weak duality theorem  theorem, weak duality  Weak Duality   For a primal maximization problem with objective function and dual objective , we have that   In particular, if there is a feasible primal solution and feasible dual solution such that then are optimal solutions for the primal and dual problems respectively.    We have now that if for a pair of feasible solutions, then we have optimality for both problems. It would be good if the converse were also true. This is encapsulated by the following theorem.   The Strong Duality Theorem  strong duality theorem  theorem, strong duality   Given a pair of primal max-dual min problems, the primal max problem has an optimal solution if and only if the dual min problem has an optimal solution . Moreover, .    To prove this, we recall the idea we explored in that dual variables were coefficients or weights of normal variables of the bounding hyperplanes.    Before we delve into the proof, we illustrate the idea with a constrained case. Consider a canonical optimization problem captured by the following tableau (we assume for simplicities sake to let ):                                                                                                                 Which after pivoting achieves optimality with the following tableau:                                                                                                                    Let if is the coefficient for in the optimal tableau, and let otherwise. Similarly let if is the coefficient for in the optimal tableau, and let otherwise.  Recall that the optimal tableau represents a reformulation of the original problem where is instead rewritten as .  Why must       Use the fact that to rewrite the above equality without 's. Regroup the right hand side so we have the form:       Recall that the above equality we established is an equality as functions of the 's . What must be the constant portion of the right hand side be equal to? What must the linear function in terms of 's on the right hand side be equal to?      Recall that . Prove that .      We now need to show that these 's we found is a feasible solution to the dual problem. Why do we have that ?      Why is each ? Why does this show that ? This shows that 's are nonnegative slack variables for the and that the 's are a feasible solution.      Show by Weak Duality that the 's are an optimal dual solution.       Adopt the arguments of to prove the Strong Duality Theorem for a general primal-dual optimization problem                                                                                                                                    which also achieves optimality for some general tableau.  Use the fact that that , and by construction each .    An alternative approach to proving this theorem is provided in .   Complementary Slackness   We assume the primal problem is canonical.     Prove that .      Suppose is a feasible extreme point, and and are the corresponding coefficients for the normal vectors. If , what does that say about ?     is the coefficient of the normal vector for the plane . If the feasible solution does not lie on , what can we say about ?       The repeat the above for , , and .       Give an example of a linear optimization primal-dual problem, and feasible solutions with slack variables where .      If are feasible optimal solutions with slack variables , what must be true about ?      complementary slackness   Feasible variables with slack variables are said to exhibit complementary slackness if .    "
},
{
  "id": "sec-dualitytheory-3",
  "level": "2",
  "url": "sec-dualitytheory.html#sec-dualitytheory-3",
  "type": "Observation",
  "number": "4.2.1",
  "title": "",
  "body": "  Recall the primal maximization problem , and the corresponding dual minimization problem . By letting   We can rephrase the primal max problem as follows: Maximize for subject to Here, we understand to denote entrywise inequality.  Likewise, we can rephrase the dual min problem as follows: Minimize for subject to    "
},
{
  "id": "activity-weakduality",
  "level": "2",
  "url": "sec-dualitytheory.html#activity-weakduality",
  "type": "Activity",
  "number": "4.2.2",
  "title": "",
  "body": "   In this activity, we explore a foundational relationship between the primal max problem and its dual, called weak duality .      Consider the matrix product . Use this product to show that .      Suppose there were feasible for which . What then must be true about these solutions? Can we prove our assertion?      Recall and . Consider the primal max and dual min of the associated problems. How does our assertion fit these problems?      Come up with a primal max problem (and corresponding min dual) where all have integer values, so that the primal max and dual min problems achieve optimal solutions , where .      Using the same values for for the problem we just constructed, suppose we relax the condition that all our values must be integers. What can we say about the optimal solutions then?    "
},
{
  "id": "prop-weakduality",
  "level": "2",
  "url": "sec-dualitytheory.html#prop-weakduality",
  "type": "Proposition",
  "number": "4.2.3",
  "title": "Weak Duality.",
  "body": " weak duality theorem  theorem, weak duality  Weak Duality   For a primal maximization problem with objective function and dual objective , we have that   In particular, if there is a feasible primal solution and feasible dual solution such that then are optimal solutions for the primal and dual problems respectively.   "
},
{
  "id": "thm-strongduality",
  "level": "2",
  "url": "sec-dualitytheory.html#thm-strongduality",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "The Strong Duality Theorem.",
  "body": " The Strong Duality Theorem  strong duality theorem  theorem, strong duality   Given a pair of primal max-dual min problems, the primal max problem has an optimal solution if and only if the dual min problem has an optimal solution . Moreover, .   "
},
{
  "id": "activity-sampleSD",
  "level": "2",
  "url": "sec-dualitytheory.html#activity-sampleSD",
  "type": "Activity",
  "number": "4.2.5",
  "title": "",
  "body": "  Before we delve into the proof, we illustrate the idea with a constrained case. Consider a canonical optimization problem captured by the following tableau (we assume for simplicities sake to let ):                                                                                                                 Which after pivoting achieves optimality with the following tableau:                                                                                                                    Let if is the coefficient for in the optimal tableau, and let otherwise. Similarly let if is the coefficient for in the optimal tableau, and let otherwise.  Recall that the optimal tableau represents a reformulation of the original problem where is instead rewritten as .  Why must       Use the fact that to rewrite the above equality without 's. Regroup the right hand side so we have the form:       Recall that the above equality we established is an equality as functions of the 's . What must be the constant portion of the right hand side be equal to? What must the linear function in terms of 's on the right hand side be equal to?      Recall that . Prove that .      We now need to show that these 's we found is a feasible solution to the dual problem. Why do we have that ?      Why is each ? Why does this show that ? This shows that 's are nonnegative slack variables for the and that the 's are a feasible solution.      Show by Weak Duality that the 's are an optimal dual solution.    "
},
{
  "id": "sec-dualitytheory-11",
  "level": "2",
  "url": "sec-dualitytheory.html#sec-dualitytheory-11",
  "type": "Activity",
  "number": "4.2.6",
  "title": "",
  "body": "  Adopt the arguments of to prove the Strong Duality Theorem for a general primal-dual optimization problem                                                                                                                                    which also achieves optimality for some general tableau.  Use the fact that that , and by construction each .   "
},
{
  "id": "sec-dualitytheory-13",
  "level": "2",
  "url": "sec-dualitytheory.html#sec-dualitytheory-13",
  "type": "Activity",
  "number": "4.2.7",
  "title": "Complementary Slackness.",
  "body": " Complementary Slackness   We assume the primal problem is canonical.     Prove that .      Suppose is a feasible extreme point, and and are the corresponding coefficients for the normal vectors. If , what does that say about ?     is the coefficient of the normal vector for the plane . If the feasible solution does not lie on , what can we say about ?       The repeat the above for , , and .       Give an example of a linear optimization primal-dual problem, and feasible solutions with slack variables where .      If are feasible optimal solutions with slack variables , what must be true about ?    "
},
{
  "id": "def-complementaryslackness",
  "level": "2",
  "url": "sec-dualitytheory.html#def-complementaryslackness",
  "type": "Definition",
  "number": "4.2.8",
  "title": "",
  "body": " complementary slackness   Feasible variables with slack variables are said to exhibit complementary slackness if .   "
},
{
  "id": "sec-dualpivot",
  "level": "1",
  "url": "sec-dualpivot.html",
  "type": "Section",
  "number": "4.3",
  "title": "Tucker Tableau’s, Pivots and Duality",
  "body": " Tucker Tableau's, Pivots and Duality   In this section, we examine pivoting with primal-dual tableaus. We will compare (in a good way!) to what we did in .     Noting that the dual variables are nonnegative weights attached to the hyperplanes defined by , and the slack variables for the dual problem are the weights associated with the planes , we can encode all this information in the Primal-Dual Tucker tableau :                                                                                                                          (The additional dividing lines in the top left and bottom right separate the primal decision-slack variables from the dual decision-slack variables.)     Write out the sufficient conditions for the tableau to determine:    The primal problem is feasible.    The dual problem is feasible.    The feasible primal problem is unbounded above.    The feasible dual problem is unbounded below.    The primal problem is infeasible.    The dual problem is infeasible.    The primal problem has a feasible optimal solution.    The dual problem has a feasible optimal solution.        Are any of these conditions identical?       Recall .     Record this information in a primal-dual Tucker tableau.      Apply the Simplex Algorithm to this tableau.      Consider the dual solution. What does that mean in the context of the time spent by the painter and the sculptor?       If a primal problem is infeasible, what could be true of the dual problem?    The dual problem has an optimal solution.    The dual problem is unbounded below.    The dual problem is infeasible.       For each of the possibilities discussed in (a), fill in the tableau below to achieve this criteria or explain why it is not possible.                                                                                            We now consider unconstrained and equality constrained primal-dual problems.     Suppose for a pair of primal-dual solutions if were allowed to be be any value including negative values, what must be true about ? (If is unconstrained, what can we say about the hyperplane as a bounding hyperplane? Would there ever be an extreme point solution lying on this plane? See interactive below.)      could be any value as well.     .     .     .     .        Suppose for a pair of primal-dual solutions if . What must be true about ? (Does it matter whether or not pivoting away from the equality constraint increases or decreases the objective function? See interactive below.)       could be any value as well.     .     .     .     .         Solve the following noncanonical primal-dual problem:                                                                                                                             Enter the primal-problem and use Sage to confirm the solution:          Use Sage to find the dual and solve it:       "
},
{
  "id": "sec-dualpivot-3",
  "level": "2",
  "url": "sec-dualpivot.html#sec-dualpivot-3",
  "type": "Activity",
  "number": "4.3.1",
  "title": "",
  "body": "  Noting that the dual variables are nonnegative weights attached to the hyperplanes defined by , and the slack variables for the dual problem are the weights associated with the planes , we can encode all this information in the Primal-Dual Tucker tableau :                                                                                                                          (The additional dividing lines in the top left and bottom right separate the primal decision-slack variables from the dual decision-slack variables.)     Write out the sufficient conditions for the tableau to determine:    The primal problem is feasible.    The dual problem is feasible.    The feasible primal problem is unbounded above.    The feasible dual problem is unbounded below.    The primal problem is infeasible.    The dual problem is infeasible.    The primal problem has a feasible optimal solution.    The dual problem has a feasible optimal solution.        Are any of these conditions identical?    "
},
{
  "id": "sec-dualpivot-4",
  "level": "2",
  "url": "sec-dualpivot.html#sec-dualpivot-4",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "  Recall .     Record this information in a primal-dual Tucker tableau.      Apply the Simplex Algorithm to this tableau.      Consider the dual solution. What does that mean in the context of the time spent by the painter and the sculptor?    "
},
{
  "id": "sec-dualpivot-5",
  "level": "2",
  "url": "sec-dualpivot.html#sec-dualpivot-5",
  "type": "Activity",
  "number": "4.3.3",
  "title": "",
  "body": "  If a primal problem is infeasible, what could be true of the dual problem?    The dual problem has an optimal solution.    The dual problem is unbounded below.    The dual problem is infeasible.       For each of the possibilities discussed in (a), fill in the tableau below to achieve this criteria or explain why it is not possible.                                                                                         "
},
{
  "id": "sec-dualpivot-6",
  "level": "2",
  "url": "sec-dualpivot.html#sec-dualpivot-6",
  "type": "Activity",
  "number": "4.3.4",
  "title": "",
  "body": "  We now consider unconstrained and equality constrained primal-dual problems.     Suppose for a pair of primal-dual solutions if were allowed to be be any value including negative values, what must be true about ? (If is unconstrained, what can we say about the hyperplane as a bounding hyperplane? Would there ever be an extreme point solution lying on this plane? See interactive below.)      could be any value as well.     .     .     .     .        Suppose for a pair of primal-dual solutions if . What must be true about ? (Does it matter whether or not pivoting away from the equality constraint increases or decreases the objective function? See interactive below.)       could be any value as well.     .     .     .     .      "
},
{
  "id": "sec-dualpivot-7",
  "level": "2",
  "url": "sec-dualpivot.html#sec-dualpivot-7",
  "type": "Activity",
  "number": "4.3.5",
  "title": "",
  "body": "  Solve the following noncanonical primal-dual problem:                                                                                                                             Enter the primal-problem and use Sage to confirm the solution:          Use Sage to find the dual and solve it:      "
},
{
  "id": "sec-summaryduality",
  "level": "1",
  "url": "sec-summaryduality.html",
  "type": "Section",
  "number": "4.4",
  "title": "Summary of Chapter 4",
  "body": " Summary of  We recall that at each corner or extreme point solution, this solution lies on the intersection of bounding hyperplanes of the feasible region. We also note that the orthogonal vector for the objective plane may be written as a linear combination of the orthogonal vectors for these bounding hyperplanes, and in particular, the coefficients of the linear combination are exactly the negative of the in the corresponding tableau.                                                                                                                                      In some sense what tells us is how much increases if the corresponding decreases by one, i.e. the bound associated with were relaxed by one. This gives us a way of determining how relaxing each of the constraints compare to each other, and their relative value to each other. So in the case of , we have:                                                                 We have that the normal vector for the objective plane, may be written as , and lowering by 1 decreases the objective by 3, and lowering by 1 decreases the objective by 2.  But should we pivot to:                                                                   Then and decreasing by 1 increases the objective by and decreasing by 1 increases the objective by . Note that this is equivalent to stating how much value would be gained should there by one more newt eye or frog respectively.  This inspires us to define the dual problem of a primal maximization problem in , where the are the weights or coefficients of the normal vectors for bounding hyperplanes of the feasible region. We may define the to be the slack variable for each dual constraint so that , or equivalently: and we have feasibility if and only if each .   Normal Vectors and Sensitivity Analysis.    We note that by reformulating the primal and dual problem using matrix algebra, then for feasible and , we have that which is the statement of the Weak Duality Theorem . In particular, if for feasible , then both are optimal.  It turns out the converse to this statement is true as well. To show this, we suppose that achieves optimality at                                                                                                                                      We let depending on which variable is the coefficient for, and by letting each other , we have that   We note that since the above tableau satisfies the conditions for an optimal basic solution, each . Since the above equality is an equality of functions of , by comparing coefficients of , we have and is a feasible solution. Then we also have that . The left hand side is the optimal value for , and the right hand side is the current value of for this choice of . So by , we prove the Strong Duality Theorem .   Proofs of the duality theorems.    We then note that the dual problem may be recorded simultaneously as the primal problem within the same tableau                                                                                                                      and that by using similar arguments as we did in , we may establish conditions for determining the feasibility, optimality, and boundedness if the dual problem. A basic dual variable is feasible if and only if each , and if we had a but each for that problem, then the problem is infeasible, since this inequality can never be satisfied. If the basic dual is feasible then it is also optimal if and only if . However, if the basic dual is feasible but there is a row where , then the dual region is unbounded, and if additionally , then the dual problem is unbounded below. These boundedness conditions are sufficient but not necessary, the reader is encouraged to come up with their own counterexamples to necessity.  We conclude by observing that if a primal problem has an unconstrained variable, the corresponding dual variable must be zero, since the associated hyperplane is not a bounding hyperplane. Similarly, if we had an equality constraint in the primal with corresponding slack set to zero, the corresponding dual is allowed to be unconstrained, since it is no longer relevant whether pivoting away from this plane improves the primal objective.   The dual problem as recorded in tableaus.    "
},
{
  "id": "sec-summaryduality-6",
  "level": "2",
  "url": "sec-summaryduality.html#sec-summaryduality-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dual problem "
},
{
  "id": "figure-videochapter4normal",
  "level": "2",
  "url": "sec-summaryduality.html#figure-videochapter4normal",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " Normal Vectors and Sensitivity Analysis.   "
},
{
  "id": "figure-videochapter4duality",
  "level": "2",
  "url": "sec-summaryduality.html#figure-videochapter4duality",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " Proofs of the duality theorems.   "
},
{
  "id": "figure-videochapter4tableaus",
  "level": "2",
  "url": "sec-summaryduality.html#figure-videochapter4tableaus",
  "type": "Figure",
  "number": "4.4.3",
  "title": "",
  "body": " The dual problem as recorded in tableaus.   "
},
{
  "id": "sec-exercisesduality",
  "level": "1",
  "url": "sec-exercisesduality.html",
  "type": "Section",
  "number": "4.5",
  "title": "Problems for Chapter 4",
  "body": " Problems for   The simplex pivoter may be found here:         For each problem in , if the problem has an optimal solution, identify the bounding hyperplanes that the solution lies on, then state the normal vector for the objective plane in terms of the normal vectors of the bounding hyperplanes.     Suppose that a company is painting figurines, 4 colors . The colors are mixed from red, green and blue paint.   takes 2 oz of red, 2 oz green and 1 oz blue. takes 3 oz of red, 1 oz green and 1 oz blue. takes 1 oz of red, 2 oz green and 2 oz blue. takes 1 oz of red and 4 oz blue.  Figurines with color sell for $20, colored figures sell for $25 dollars and colored figurines sell for $30. The company has many figurines to paint and 100 oz each of red, green and blue paint. How many of each colored figurine should be painted to maximize revenue?     Solve the above canonical maximization problem and restate the objective function in terms of the .      If we had 110 oz red, 100 oz green, and 100 oz blue paint, without re-solving the problem, what would the optimal revenue be?      If we had 95 oz red, 100 oz green, and 100 oz blue paint, without re-solving the problem, what would the optimal revenue be?      If we had 100 oz red, 110 oz green, and 100 oz blue paint, without re-solving the problem, what would the optimal revenue be?      If we had 100 oz red, 100 oz green, and 95 oz blue paint, without re-solving the problem, what would the optimal revenue be?       An office worker is eating in their work cafeteria and they are recently put on a low cholesterol diet. Their usual choices are pasta, fried tofu and chicken sandwiches. The pasta has 6 g of protein, 60 g of carbohydrates, 2 mg of vitamin C, and 60 mg of cholesterol. The fried tofu has 10 g of protein, 40 g of carbohydrates, 2 mg of vitamin C, and 50 mg of cholesterol. The chicken sandwich has 18 g of protein, 40 g of carbohydrates, 2 mg of vitamin C, and 60 mg of cholesterol.  They need 200 g of protein, 960 g of carbohydrates and 40 mg of vitamin C in a month, and wishes to minimize cholesterol. How many of each meal should they eat?     Find the optimal solution to the above problem.      Suppose they needed to increase their protein consumption to 220 g a month. Without recomputing the solution, what would the new minimum cholesterol be?      Suppose instead that they needed to decrease their carbohydrate consumption to 190 g a month. Without recomputing the solution, what would the new minimum cholesterol be?      Suppose instead that they needed to increase their vitamin C consumption to 45 g a month. Without recomputing the solution, what would the new minimum cholesterol be?        Consider .     Prove that if the primal problem is infeasible, and the dual problem is feasible, then the dual problem is unbounded below. (Use .)      Prove that if the dual problem is infeasible, and the primal problem is feasible, then the primal problem is unbounded above. (Use .)      Prove that if the primal (dual) problem is feasible and unbounded above (below), then the dual (primal) problem is infeasible.      Find a primal-dual linear problem where both the primal and dual problems are infeasible.       Consider the canonical maximization linear optimization problem below:        State the dual canonical minimization linear optimization problem.      Sketch the constraint sets for both problems above.      Solve both problems above by applying the simplex algorithm to a dual tableau. Indicate the movement in both constraint set diagrams exhibited by the basic solutions of successive tableaus.      Is complementary slackness exhibited in the solutions above? Why or why not?       For each problem in , state the dual problem and find its solution.      For each of the following, solve the canonical dual minimization problem. If there are infinitely many solutions, classify them all.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Consider the following tableau:                                                                                        Find so that the basic solutions of the above tableau are optimal, and both problems have infinitely many solutions.      Classify the choices for for which the conditions of part hold.       Consider a two variable, two constraint primal maximization problem.                                                                                   Recall Weak Duality , and Complementary Slackness . Suppose we found a pair of primal-dual solutions which satisfied main constraints, but failed one or more nonnegativity constraints.     Must the Weak Duality still hold? Prove or find a counterexample.      Suppose there were a pair of such solutions so that , must complementary slackness still hold? Prove or find a counterexample.      complementary slackness theorem  theorem, complementary slackness  Prove that for a canonical problem, feasible solutions , with slack variables exhibit complementary slackness if and only if are optimal. (This fact is commonly known as the Complementary Slackness Theorem .)     Solve the following noncanonical primal-dual problems:                                                                                                                                                                                                                                                                                                                                                                                                    "
},
{
  "id": "exercises-duality-1",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-1",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": " For each problem in , if the problem has an optimal solution, identify the bounding hyperplanes that the solution lies on, then state the normal vector for the objective plane in terms of the normal vectors of the bounding hyperplanes.  "
},
{
  "id": "exercises-duality-2",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-2",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "  Suppose that a company is painting figurines, 4 colors . The colors are mixed from red, green and blue paint.   takes 2 oz of red, 2 oz green and 1 oz blue. takes 3 oz of red, 1 oz green and 1 oz blue. takes 1 oz of red, 2 oz green and 2 oz blue. takes 1 oz of red and 4 oz blue.  Figurines with color sell for $20, colored figures sell for $25 dollars and colored figurines sell for $30. The company has many figurines to paint and 100 oz each of red, green and blue paint. How many of each colored figurine should be painted to maximize revenue?     Solve the above canonical maximization problem and restate the objective function in terms of the .      If we had 110 oz red, 100 oz green, and 100 oz blue paint, without re-solving the problem, what would the optimal revenue be?      If we had 95 oz red, 100 oz green, and 100 oz blue paint, without re-solving the problem, what would the optimal revenue be?      If we had 100 oz red, 110 oz green, and 100 oz blue paint, without re-solving the problem, what would the optimal revenue be?      If we had 100 oz red, 100 oz green, and 95 oz blue paint, without re-solving the problem, what would the optimal revenue be?    "
},
{
  "id": "exercises-duality-3",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-3",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "  An office worker is eating in their work cafeteria and they are recently put on a low cholesterol diet. Their usual choices are pasta, fried tofu and chicken sandwiches. The pasta has 6 g of protein, 60 g of carbohydrates, 2 mg of vitamin C, and 60 mg of cholesterol. The fried tofu has 10 g of protein, 40 g of carbohydrates, 2 mg of vitamin C, and 50 mg of cholesterol. The chicken sandwich has 18 g of protein, 40 g of carbohydrates, 2 mg of vitamin C, and 60 mg of cholesterol.  They need 200 g of protein, 960 g of carbohydrates and 40 mg of vitamin C in a month, and wishes to minimize cholesterol. How many of each meal should they eat?     Find the optimal solution to the above problem.      Suppose they needed to increase their protein consumption to 220 g a month. Without recomputing the solution, what would the new minimum cholesterol be?      Suppose instead that they needed to decrease their carbohydrate consumption to 190 g a month. Without recomputing the solution, what would the new minimum cholesterol be?      Suppose instead that they needed to increase their vitamin C consumption to 45 g a month. Without recomputing the solution, what would the new minimum cholesterol be?    "
},
{
  "id": "ex-duality",
  "level": "2",
  "url": "sec-exercisesduality.html#ex-duality",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "  Consider .     Prove that if the primal problem is infeasible, and the dual problem is feasible, then the dual problem is unbounded below. (Use .)      Prove that if the dual problem is infeasible, and the primal problem is feasible, then the primal problem is unbounded above. (Use .)      Prove that if the primal (dual) problem is feasible and unbounded above (below), then the dual (primal) problem is infeasible.      Find a primal-dual linear problem where both the primal and dual problems are infeasible.    "
},
{
  "id": "exercises-duality-5",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-5",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "  Consider the canonical maximization linear optimization problem below:        State the dual canonical minimization linear optimization problem.      Sketch the constraint sets for both problems above.      Solve both problems above by applying the simplex algorithm to a dual tableau. Indicate the movement in both constraint set diagrams exhibited by the basic solutions of successive tableaus.      Is complementary slackness exhibited in the solutions above? Why or why not?    "
},
{
  "id": "exercises-duality-6",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-6",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "  For each problem in , state the dual problem and find its solution.   "
},
{
  "id": "exercises-duality-7",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-7",
  "type": "Exercise",
  "number": "4.5.7",
  "title": "",
  "body": "  For each of the following, solve the canonical dual minimization problem. If there are infinitely many solutions, classify them all.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
},
{
  "id": "exercises-duality-8",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-8",
  "type": "Exercise",
  "number": "4.5.8",
  "title": "",
  "body": "  Consider the following tableau:                                                                                        Find so that the basic solutions of the above tableau are optimal, and both problems have infinitely many solutions.      Classify the choices for for which the conditions of part hold.    "
},
{
  "id": "exercises-duality-9",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-9",
  "type": "Exercise",
  "number": "4.5.9",
  "title": "",
  "body": "  Consider a two variable, two constraint primal maximization problem.                                                                                   Recall Weak Duality , and Complementary Slackness . Suppose we found a pair of primal-dual solutions which satisfied main constraints, but failed one or more nonnegativity constraints.     Must the Weak Duality still hold? Prove or find a counterexample.      Suppose there were a pair of such solutions so that , must complementary slackness still hold? Prove or find a counterexample.    "
},
{
  "id": "exercises-duality-10",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-10",
  "type": "Exercise",
  "number": "4.5.10",
  "title": "",
  "body": " complementary slackness theorem  theorem, complementary slackness  Prove that for a canonical problem, feasible solutions , with slack variables exhibit complementary slackness if and only if are optimal. (This fact is commonly known as the Complementary Slackness Theorem .)  "
},
{
  "id": "exercises-duality-11",
  "level": "2",
  "url": "sec-exercisesduality.html#exercises-duality-11",
  "type": "Exercise",
  "number": "4.5.11",
  "title": "",
  "body": "  Solve the following noncanonical primal-dual problems:                                                                                                                                                                                                                                                                                                                                                                                                  "
},
{
  "id": "sec-minmaxgames",
  "level": "1",
  "url": "sec-minmaxgames.html",
  "type": "Section",
  "number": "5.1",
  "title": "Min-Max Games",
  "body": " Min-Max Games   In this section, we introduce zero-sum games, some basic strategies for approaching them, and highlight a connection to linear optimization.     Suppose we have two players, an Even player and an Odd player. Each player picks an integer from 1-3.    If the sum is even:   If the chosen numbers are distinct, then the Odd player pays the Even player the difference between the numbers.    If the chosen numbers are the same, then the Odd player pays the Even player the sum of the numbers.       If the sum is odd: the Even player pays the Odd player $3.       Take turns playing this game, do you think either the Even or Odd player has any advantage in this game?      Record the net winnings to the Even player in the following table:            Odd                                             Even                                                        Examine this table, and comparing the rows, is there any advantage to the Even player in picking the first row over the third row?      Comparing the columns, is there any advantage to the Odd player in picking the third column over the first column?      Delete any row (column) corresponding to a choice that the Even (Odd) player would never make.  If the Even player always picks a 2, what is the optimal strategy for the Odd player? Similarly if the Odd player always picks a 1, what is the optimal strategy for the even player?      Does either player gain any advantage by picking a single choice and sticking to it?      Suppose the Even player flips a coin to make their choice, if the Odd player picks a 1, what is their average expected winnings? What if they choose a 2?      Suppose the Odd player flips a coin to make their choice, if the Even player picks a 2, what is their average expected winnings? What if they choose a 3?      Does this game favor either the Even or Odd player? What is your best guess?      payoff matrix  domination   In a two-player zero-sum game, where the row player has choices and the column player has choices, the payoff matrix is a matrix which records in each row and column the net payoff to the row player (this choice is purely by convention, but we will stick to it).  If a row has entries that are strictly greater than or equal to the entries of another row , then we say that row  dominates row . We then may delete row since there is no reason the row player would choose . Similarly, if column is less than or equal to column , column  dominates column and we may delete column .      Consider the payoff matrix for a game between Rowan and Colleen.         Colleen                                            Rowan                                                             Suppose that Rowan pursues a mixed strategy a probability distribution of their choices where   If Colleen chooses column as her strategy, what is the expected value of Rowan's earnings?     .     .     .     .     .     .        If Colleen somehow figures out Rowan's strategy , which column should she choose?      Rowan is aware that Colleen is a sharp player can likely figure out . How then should he choose his strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .        At the exact same time, Colleen is pursuing her own mixed strategy :   If Rowan chooses row as his strategy, what is the expected value of Colleen's losses?     .     .     .     .     .     .        If Rowan somehow figures out Colleen's strategy , which row should he choose?      Colleen is also aware that Rowan is a sharp player can likely figure out . How then should she choose her strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .        Consider the primal-dual problems encoded by the tableau:                                                                                                                                                                                                                  Write out both the primal and dual problems encoded by this tableau. (Including all equalities, inequalities, and the objective functions)      What primal constraint does the first row represent? How does it relate to Colleen's strategy?      What primal constraint do the next rows represent? How does it relate to Colleen's strategy?      What is the primal objective function? How does it relate to Colleen's strategy?      Repeat for the columns, and with regards to Rowan's strategy.      Supposing that this system has an optimal primal and dual solution, what would those solutions represent?      saddle point   Suppose that the reduced payoff matrix had an entry that is the largest value in its column and the smallest value in its row. Such an entry is called a saddle point .        Suppose a reduced payoff matrix had a saddle point , and consider the resulting tableau:                                                                                                                                                                       Pivot first on the entry with a then .                                                                                                                                                                                                                                                                                                                                        For each entry determine if:    The entry is zero.    The entry is positive.    The entry is negative.    The entries value cannot be determined.        What is ? What are and ?      After we delete the appropriate rows and columns, what could be said about the resulting primal-dual problems?      Would it make a difference if we pivoted by first then ?       Follow the outline provided by to find the optimal strategies for the Even and Odd players in , and who if anyone the game favors.    To test out this solution edit this R code:   Where FIXMER1 , FIXMER2 , FIXMER3 represent the entries for the optimal mixed strategy for the row player Even, and FIXMEC1 , FIXMEC2 , FIXMEC3 are for the optimal mixed strategy for the column player Odd.  Then run the cell and see the distributions of winnings and the average winnings. How does this value compare to what you found?     Taking turns, have one student pick a new strategy for Even, and another student then modify the strategy for Odd in light of the new strategy. Can we do better than Odd's current best strategy?      Conversely, taking turns, one student pick a new strategy for Odd, and another student then modify the strategy for Even in light of the new strategy. Can we do better than Even's current best strategy?       Find the optimal strategies for two players Rowan and Colleen playing Rock, Paper, Scissors .    "
},
{
  "id": "exploration-evenodd",
  "level": "2",
  "url": "sec-minmaxgames.html#exploration-evenodd",
  "type": "Exploration",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose we have two players, an Even player and an Odd player. Each player picks an integer from 1-3.    If the sum is even:   If the chosen numbers are distinct, then the Odd player pays the Even player the difference between the numbers.    If the chosen numbers are the same, then the Odd player pays the Even player the sum of the numbers.       If the sum is odd: the Even player pays the Odd player $3.       Take turns playing this game, do you think either the Even or Odd player has any advantage in this game?      Record the net winnings to the Even player in the following table:            Odd                                             Even                                                        Examine this table, and comparing the rows, is there any advantage to the Even player in picking the first row over the third row?      Comparing the columns, is there any advantage to the Odd player in picking the third column over the first column?      Delete any row (column) corresponding to a choice that the Even (Odd) player would never make.  If the Even player always picks a 2, what is the optimal strategy for the Odd player? Similarly if the Odd player always picks a 1, what is the optimal strategy for the even player?      Does either player gain any advantage by picking a single choice and sticking to it?      Suppose the Even player flips a coin to make their choice, if the Odd player picks a 1, what is their average expected winnings? What if they choose a 2?      Suppose the Odd player flips a coin to make their choice, if the Even player picks a 2, what is their average expected winnings? What if they choose a 3?      Does this game favor either the Even or Odd player? What is your best guess?    "
},
{
  "id": "def-payoff",
  "level": "2",
  "url": "sec-minmaxgames.html#def-payoff",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": " payoff matrix  domination   In a two-player zero-sum game, where the row player has choices and the column player has choices, the payoff matrix is a matrix which records in each row and column the net payoff to the row player (this choice is purely by convention, but we will stick to it).  If a row has entries that are strictly greater than or equal to the entries of another row , then we say that row  dominates row . We then may delete row since there is no reason the row player would choose . Similarly, if column is less than or equal to column , column  dominates column and we may delete column .   "
},
{
  "id": "activity-rowcol",
  "level": "2",
  "url": "sec-minmaxgames.html#activity-rowcol",
  "type": "Activity",
  "number": "5.1.3",
  "title": "",
  "body": "  Consider the payoff matrix for a game between Rowan and Colleen.         Colleen                                            Rowan                                                             Suppose that Rowan pursues a mixed strategy a probability distribution of their choices where   If Colleen chooses column as her strategy, what is the expected value of Rowan's earnings?     .     .     .     .     .     .        If Colleen somehow figures out Rowan's strategy , which column should she choose?      Rowan is aware that Colleen is a sharp player can likely figure out . How then should he choose his strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .        At the exact same time, Colleen is pursuing her own mixed strategy :   If Rowan chooses row as his strategy, what is the expected value of Colleen's losses?     .     .     .     .     .     .        If Rowan somehow figures out Colleen's strategy , which row should he choose?      Colleen is also aware that Rowan is a sharp player can likely figure out . How then should she choose her strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .        Consider the primal-dual problems encoded by the tableau:                                                                                                                                                                                                                  Write out both the primal and dual problems encoded by this tableau. (Including all equalities, inequalities, and the objective functions)      What primal constraint does the first row represent? How does it relate to Colleen's strategy?      What primal constraint do the next rows represent? How does it relate to Colleen's strategy?      What is the primal objective function? How does it relate to Colleen's strategy?      Repeat for the columns, and with regards to Rowan's strategy.      Supposing that this system has an optimal primal and dual solution, what would those solutions represent?    "
},
{
  "id": "def-saddlepoint",
  "level": "2",
  "url": "sec-minmaxgames.html#def-saddlepoint",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": " saddle point   Suppose that the reduced payoff matrix had an entry that is the largest value in its column and the smallest value in its row. Such an entry is called a saddle point .    "
},
{
  "id": "sec-minmaxgames-7",
  "level": "2",
  "url": "sec-minmaxgames.html#sec-minmaxgames-7",
  "type": "Activity",
  "number": "5.1.5",
  "title": "",
  "body": "   Suppose a reduced payoff matrix had a saddle point , and consider the resulting tableau:                                                                                                                                                                       Pivot first on the entry with a then .                                                                                                                                                                                                                                                                                                                                        For each entry determine if:    The entry is zero.    The entry is positive.    The entry is negative.    The entries value cannot be determined.        What is ? What are and ?      After we delete the appropriate rows and columns, what could be said about the resulting primal-dual problems?      Would it make a difference if we pivoted by first then ?    "
},
{
  "id": "sec-minmaxgames-8",
  "level": "2",
  "url": "sec-minmaxgames.html#sec-minmaxgames-8",
  "type": "Activity",
  "number": "5.1.6",
  "title": "",
  "body": "  Follow the outline provided by to find the optimal strategies for the Even and Odd players in , and who if anyone the game favors.    To test out this solution edit this R code:   Where FIXMER1 , FIXMER2 , FIXMER3 represent the entries for the optimal mixed strategy for the row player Even, and FIXMEC1 , FIXMEC2 , FIXMEC3 are for the optimal mixed strategy for the column player Odd.  Then run the cell and see the distributions of winnings and the average winnings. How does this value compare to what you found?     Taking turns, have one student pick a new strategy for Even, and another student then modify the strategy for Odd in light of the new strategy. Can we do better than Odd's current best strategy?      Conversely, taking turns, one student pick a new strategy for Odd, and another student then modify the strategy for Even in light of the new strategy. Can we do better than Even's current best strategy?    "
},
{
  "id": "sec-minmaxgames-9",
  "level": "2",
  "url": "sec-minmaxgames.html#sec-minmaxgames-9",
  "type": "Activity",
  "number": "5.1.7",
  "title": "",
  "body": "  Find the optimal strategies for two players Rowan and Colleen playing Rock, Paper, Scissors .   "
},
{
  "id": "sec-vonneumann",
  "level": "1",
  "url": "sec-vonneumann.html",
  "type": "Section",
  "number": "5.2",
  "title": "von Neumann Minimax Theorem",
  "body": " von Neumann Minimax Theorem  von Neumann minimax theorem  theorem, von Neumann minimax   In this section, show that the linear optimization scheme from gives us exactly what we want by proving von Neumann's Theorem.    Consider the tableau in and the associated primal-dual problems. Which of the following could possibly be true for these problems?    Both primal and dual problem achieve optimality.    The primal problem is unbounded and the dual problem is infeasible.    The primal problem is infeasible and the dual problem is unbounded.    Both problems are infeasible.     It would be very bad if either problem were infeasible or unbounded! It would be good to show that this is not the case.    Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions .  Let denote the th row of a matrix and let denote the th column of .     Given a fixed column strategy which of these describes the role for the row player?     .     .     .     .        Given a fixed row strategy which of these describes the role for the column player?     .     .     .     .         We prove an interesting way to think of the optimal strategies.  Let denote a fixed column strategy, let , and let .     Recall that . Prove that .      Why must ?      Show that there is a (very simple) row strategy where .      Why must ?      What have we proven?       We now prove a characterization theorem about the optimal solutions for both the row and column player.  Suppose we have a payoff matrix where every entry is positive. In other words, after each round Rowan is guaranteed to win money and Colleen is guaranteed to lose money. Rowan's strategy here is to take Colleen for as much money as he can and Colleen's strategy is to minimize her losses.  (We'll ignore the obvious question of why Colleen would be willing to play this game.)     Write out the primal maximization problem for the Linear Optimization formulation of this game:                                                                                                                                                                                                                  Write out the noncanonical primal problem including the objective function and constraint equalities and inequalities involving the and where appropriate. (There should be no slack variables here.)      For each row and column strategy, we have expected row winnings and respectively. Why are these always positive?      Consider the inequality constraints in our formulation, divide each of these by . Let . Can we rewrite our inequalities as linear combinations of is less than or equal to some constant?      Consider the equality constraint after dividing by , rewrite this equality in terms of without negatives.  Remember, Colleen's strategy is to minimize which must be positive. Can we rephrase this as maximizing or minimizing a linear function involving then ? What is this linear function and is it a maximization or minimization problem? (Note that the solution to this problem likely isn't the solution to the original problem, but both are optimized under the same conditions.)      Rewrite the new canonical linear optimization problem with variables that optimizes Colleen's strategy.      Why is the feasible region for Colleen's new problem nonempty but bounded? What does the Extreme Value Theorem then say about this?      Repeat tasks for Rowan's strategy, where .      Compare Rowan and Colleen's problems with the . Show that these problems are dual problems to each other. Which is the primal max and which is the dual min?      What does the Strong Duality Theorem say about the optimal solutions to both problems? What, in turn, does that say about and ?      We're still in this pretty ridiculous situation where Colleen is for some reason willing to throw money away at Rowan. To balance things out, Rowan has to pay Colleen $5 after each round. Would this fact change anything about Rowan and Colleen's strategies? Say Rowan paid Colleen $ , would that make any difference?      Let denote any strategy for Rowan and Colleen. Let denote a matrix with all 1's. Show that .      Show that for fixed strategies and not fixed strategies that is maximized when is maximized and is minimized when is minimized.      von Neumann's Minimax Theorem   Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions and . Also let denote the th row of a matrix and let denote the th column of .  Then, there are optimal strategies such that:   We call the described value the von Neumann value of the game.     Revisit . Has your answer adjusted at all?     Consider the payoff matrix .     Find the optimal strategy for Colleen in this game, and the game value .      Find a strategy for Rowan so that , but is not the optimal strategy.      What does this say about ?       In a simplified game of battleship played on a board, Colleen selects two consecutive squares on the board to place her ship. Rowan then picks one of six squares to fire at. If he hits, he gets a point, otherwise Colleen gets a point.     Write out a payoff matrix for this game. (Why is it ?)      Find the optimal solution for Colleen using Sage:      Does the game favor Rowan or Colleen?      Use Sage to find the optimal solution for Rowan:       "
},
{
  "id": "exploration-vonneuman",
  "level": "2",
  "url": "sec-vonneumann.html#exploration-vonneuman",
  "type": "Exploration",
  "number": "5.2.1",
  "title": "",
  "body": " Consider the tableau in and the associated primal-dual problems. Which of the following could possibly be true for these problems?    Both primal and dual problem achieve optimality.    The primal problem is unbounded and the dual problem is infeasible.    The primal problem is infeasible and the dual problem is unbounded.    Both problems are infeasible.    "
},
{
  "id": "sec-vonneumann-7",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-7",
  "type": "Activity",
  "number": "5.2.2",
  "title": "",
  "body": "  Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions .  Let denote the th row of a matrix and let denote the th column of .     Given a fixed column strategy which of these describes the role for the row player?     .     .     .     .        Given a fixed row strategy which of these describes the role for the column player?     .     .     .     .      "
},
{
  "id": "sec-vonneumann-8",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-8",
  "type": "Activity",
  "number": "5.2.3",
  "title": "",
  "body": "  We prove an interesting way to think of the optimal strategies.  Let denote a fixed column strategy, let , and let .     Recall that . Prove that .      Why must ?      Show that there is a (very simple) row strategy where .      Why must ?      What have we proven?    "
},
{
  "id": "sec-vonneumann-9",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-9",
  "type": "Activity",
  "number": "5.2.4",
  "title": "",
  "body": "  We now prove a characterization theorem about the optimal solutions for both the row and column player.  Suppose we have a payoff matrix where every entry is positive. In other words, after each round Rowan is guaranteed to win money and Colleen is guaranteed to lose money. Rowan's strategy here is to take Colleen for as much money as he can and Colleen's strategy is to minimize her losses.  (We'll ignore the obvious question of why Colleen would be willing to play this game.)     Write out the primal maximization problem for the Linear Optimization formulation of this game:                                                                                                                                                                                                                  Write out the noncanonical primal problem including the objective function and constraint equalities and inequalities involving the and where appropriate. (There should be no slack variables here.)      For each row and column strategy, we have expected row winnings and respectively. Why are these always positive?      Consider the inequality constraints in our formulation, divide each of these by . Let . Can we rewrite our inequalities as linear combinations of is less than or equal to some constant?      Consider the equality constraint after dividing by , rewrite this equality in terms of without negatives.  Remember, Colleen's strategy is to minimize which must be positive. Can we rephrase this as maximizing or minimizing a linear function involving then ? What is this linear function and is it a maximization or minimization problem? (Note that the solution to this problem likely isn't the solution to the original problem, but both are optimized under the same conditions.)      Rewrite the new canonical linear optimization problem with variables that optimizes Colleen's strategy.      Why is the feasible region for Colleen's new problem nonempty but bounded? What does the Extreme Value Theorem then say about this?      Repeat tasks for Rowan's strategy, where .      Compare Rowan and Colleen's problems with the . Show that these problems are dual problems to each other. Which is the primal max and which is the dual min?      What does the Strong Duality Theorem say about the optimal solutions to both problems? What, in turn, does that say about and ?      We're still in this pretty ridiculous situation where Colleen is for some reason willing to throw money away at Rowan. To balance things out, Rowan has to pay Colleen $5 after each round. Would this fact change anything about Rowan and Colleen's strategies? Say Rowan paid Colleen $ , would that make any difference?      Let denote any strategy for Rowan and Colleen. Let denote a matrix with all 1's. Show that .      Show that for fixed strategies and not fixed strategies that is maximized when is maximized and is minimized when is minimized.    "
},
{
  "id": "thm-vonneumann",
  "level": "2",
  "url": "sec-vonneumann.html#thm-vonneumann",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "von Neumann’s Minimax Theorem.",
  "body": " von Neumann's Minimax Theorem   Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions and . Also let denote the th row of a matrix and let denote the th column of .  Then, there are optimal strategies such that:   We call the described value the von Neumann value of the game.   "
},
{
  "id": "sec-vonneumann-11",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-11",
  "type": "Activity",
  "number": "5.2.6",
  "title": "",
  "body": " Revisit . Has your answer adjusted at all?  "
},
{
  "id": "sec-vonneumann-12",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-12",
  "type": "Activity",
  "number": "5.2.7",
  "title": "",
  "body": "  Consider the payoff matrix .     Find the optimal strategy for Colleen in this game, and the game value .      Find a strategy for Rowan so that , but is not the optimal strategy.      What does this say about ?    "
},
{
  "id": "sec-vonneumann-13",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-13",
  "type": "Activity",
  "number": "5.2.8",
  "title": "",
  "body": "  In a simplified game of battleship played on a board, Colleen selects two consecutive squares on the board to place her ship. Rowan then picks one of six squares to fire at. If he hits, he gets a point, otherwise Colleen gets a point.     Write out a payoff matrix for this game. (Why is it ?)      Find the optimal solution for Colleen using Sage:      Does the game favor Rowan or Colleen?      Use Sage to find the optimal solution for Rowan:      "
},
{
  "id": "sec-chance",
  "level": "1",
  "url": "sec-chance.html",
  "type": "Section",
  "number": "5.3",
  "title": "Games of Chance",
  "body": " Games of Chance  games of chance   For games with random components, such as gambling, we can still apply our techniques, using the expected winnings. This requires some work, and we explore how to do so.     Consider the following game. Rowan and Colleen place $25 into a pot. Then they are dealt either a Jack, Queen or King at random. This deck only has those three cards. Whoever has the highest card takes the pot.  Rowan has two options. He may raise by $10 or fold. If he folds, he loses $25. Otherwise Colleen then can either fold or call. If she folds, she loses $25, if she calls, she puts $10 into the pot.  Note that if Rowan folds, even if Colleen had planned on folding, she would win the $25.     What would best describe possible choices of strategy for Rowan and Colleen?    The cards Jack, Queen, King.    Whether to fold\/raise for Rowan, whether to fold\/call for Colleen.    Whether to fold\/raise for Rowan depending on the card he is dealt, whether to fold\/call for Colleen, depending on the card she is dealt.        List the possible pairs of Rowan\/Colleen hands.      Let's say Rowan raises on a Jack, folds on a Queen, and raises on a King, denoted as RFR. Let's saw Colleen folds on a Jack, and calls on a Queen or King, denoted FCC.  If both players are committed to these strategies, what are Rowan's expected net winnings? (Note that all the above hand pairs are equally likely, what are Rowan's net winnings in each case?)      If Rowan's strategy is (for some reason) FFF, what are Rowan's net winnings?      If Colleen's strategy is FFF, what are Rowan's net winnings? (These may be different for each of Rowan's choice of strategy.)      Without computing the entire payoff matrix, are there any obviously poor strategies for Rowan or Colleen?      Fill out the remainder of this payoff matrix, where the entries are expected values.      FFF  FFC  FCF  CFF  FCC  CFC  CCF  CCC      FFF  ?  ?  ?  ?  ?  ?  ?  ?      FFR  ?                           FRF  ?                           RFF  ?                           FRR  ?                           RFR  ?           ?               RRF  ?        ?                  RRR  ?                    ?                                After dominating what does this table reduce to?      ???  ???      ???  ?  ?      ???  ?  ?                    Solve for the optimal strategies using the method of your choice.      Who does the game favor and by how much?      If Rowan is dealt a Jack, what is his optimal strategy (as a pair of probabilities to raise or fold). Queen? King?      If Colleen is dealt a Jack, what is her optimal strategy. Queen? King?       We introduce a second game here. Each player places $ into the pot. Then the each secretly flip a coin. We consider heads greater than tails.  Rowan then has the options of pass or bet. If he passes, then both players reveal their coin and the higher value wins. If they are the same, players split the pot evenly, and both players net wins\/losses are $0. His other option is to bet, in which case he adds $ to the pot.  Then Colleen has a choice as well, to fold or call. If she folds, then Rowan nets the $ . Otherwise, she calls, and also adds $ to the pot and both coins are revealed.     Suppose that Rowan will stick to the strategy of RP (raise on head, pass on tails) and Colleen choses CC (call on both heads or tails). What are Rowan's expected winnings in this case?      Fill out the payoff matrix for this game.      FF  FC  CF  CC      PP  ?        ?      PR  ?        ?      RP     ?     ?      RR     ?  ?                           It's not possible to determine all the domination without knowing what are. However, knowing , dominate as much as possible      ??  ??      ??  ?  ?      ??  ?  ?                    If , use domination to find the optimal pure strategy for both players.      If , use linear optimization methods to find the optimal mixed strategies for both players.     "
},
{
  "id": "sec-chance-4",
  "level": "2",
  "url": "sec-chance.html#sec-chance-4",
  "type": "Activity",
  "number": "5.3.1",
  "title": "",
  "body": "  Consider the following game. Rowan and Colleen place $25 into a pot. Then they are dealt either a Jack, Queen or King at random. This deck only has those three cards. Whoever has the highest card takes the pot.  Rowan has two options. He may raise by $10 or fold. If he folds, he loses $25. Otherwise Colleen then can either fold or call. If she folds, she loses $25, if she calls, she puts $10 into the pot.  Note that if Rowan folds, even if Colleen had planned on folding, she would win the $25.     What would best describe possible choices of strategy for Rowan and Colleen?    The cards Jack, Queen, King.    Whether to fold\/raise for Rowan, whether to fold\/call for Colleen.    Whether to fold\/raise for Rowan depending on the card he is dealt, whether to fold\/call for Colleen, depending on the card she is dealt.        List the possible pairs of Rowan\/Colleen hands.      Let's say Rowan raises on a Jack, folds on a Queen, and raises on a King, denoted as RFR. Let's saw Colleen folds on a Jack, and calls on a Queen or King, denoted FCC.  If both players are committed to these strategies, what are Rowan's expected net winnings? (Note that all the above hand pairs are equally likely, what are Rowan's net winnings in each case?)      If Rowan's strategy is (for some reason) FFF, what are Rowan's net winnings?      If Colleen's strategy is FFF, what are Rowan's net winnings? (These may be different for each of Rowan's choice of strategy.)      Without computing the entire payoff matrix, are there any obviously poor strategies for Rowan or Colleen?      Fill out the remainder of this payoff matrix, where the entries are expected values.      FFF  FFC  FCF  CFF  FCC  CFC  CCF  CCC      FFF  ?  ?  ?  ?  ?  ?  ?  ?      FFR  ?                           FRF  ?                           RFF  ?                           FRR  ?                           RFR  ?           ?               RRF  ?        ?                  RRR  ?                    ?                                After dominating what does this table reduce to?      ???  ???      ???  ?  ?      ???  ?  ?                    Solve for the optimal strategies using the method of your choice.      Who does the game favor and by how much?      If Rowan is dealt a Jack, what is his optimal strategy (as a pair of probabilities to raise or fold). Queen? King?      If Colleen is dealt a Jack, what is her optimal strategy. Queen? King?    "
},
{
  "id": "sec-chance-5",
  "level": "2",
  "url": "sec-chance.html#sec-chance-5",
  "type": "Activity",
  "number": "5.3.2",
  "title": "",
  "body": "  We introduce a second game here. Each player places $ into the pot. Then the each secretly flip a coin. We consider heads greater than tails.  Rowan then has the options of pass or bet. If he passes, then both players reveal their coin and the higher value wins. If they are the same, players split the pot evenly, and both players net wins\/losses are $0. His other option is to bet, in which case he adds $ to the pot.  Then Colleen has a choice as well, to fold or call. If she folds, then Rowan nets the $ . Otherwise, she calls, and also adds $ to the pot and both coins are revealed.     Suppose that Rowan will stick to the strategy of RP (raise on head, pass on tails) and Colleen choses CC (call on both heads or tails). What are Rowan's expected winnings in this case?      Fill out the payoff matrix for this game.      FF  FC  CF  CC      PP  ?        ?      PR  ?        ?      RP     ?     ?      RR     ?  ?                           It's not possible to determine all the domination without knowing what are. However, knowing , dominate as much as possible      ??  ??      ??  ?  ?      ??  ?  ?                    If , use domination to find the optimal pure strategy for both players.      If , use linear optimization methods to find the optimal mixed strategies for both players.    "
},
{
  "id": "sec-summarygames",
  "level": "1",
  "url": "sec-summarygames.html",
  "type": "Section",
  "number": "5.4",
  "title": "Summary of Chapter 5",
  "body": " Summary of  In this chapter, we begin by introducing the notion of zero-sum games. Suppose two players, Rowan and Colleen had and strategies to choose from, and given an choice of strategies, the net payout to Rowan was (with a negative value meaning a payout to Colleen). This may be recorded in what is called a payoff matrix .       Colleen                                            Rowan                                                          We note that some strategies may be simply bad choices for either player. For example, if there were two rows where , for each , then there is no reason for Rowan to pick over and we may delete the row. Similarly if for columns , , we may delete the column. This process of deleting rows and columns is called domination .  Once domination is complete, we can find the resulting optimal strategies by considering the primal-dual optimization problem:                                                                                                                                                                                                              Where the represent probabilities for Rowan and Colleen and represent the values of Rowan and Colleens strategies respectively.  We note that a saddle point , is an entry that is the smallest value in row but the greatest in column . If there is a saddle point, the optimal strategies for Rowan and Colleen are and respectively.  Otherwise, if there are no saddle points, then both players need to employ a random mix of strategies, and solving the above primal-dual problem find , the probability distribution of the valid strategies for both players.   Zero-Sum Games.    The theorem that shows this approach is valid is the von Neumann minimax Theorem  . We first note that technically the above problem attempts to maximize (minimize ) constrained by , (minimize ), i.e. it maximizes or minimizes across pure strategies, but we wish to max or min across mixed strategies. These can be shown to be equivalent, a pure strategy is a type of mixed strategy, and the other inequality can be shown through some algebra.  Then if we assume that each , then by letting , the above system is equivalent to solving:                                                                                                                                                                 We note that since each , then the primal region is bounded, and so by the Extreme Value Theorem, the primal problem achieves a maximum, and so by the Strong Duality Theorem, the dual achieves optimality as well.   Proof of the von Neumann minimax Theorem.    Finally, we note that when playing games of chance, the random element prevents us from knowing the actual payouts of different strategies. But we can decide to maximize\/minimize expected payouts, and then may proceed as before.   Games of Chance.    "
},
{
  "id": "sec-summarygames-2",
  "level": "2",
  "url": "sec-summarygames.html#sec-summarygames-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "payoff matrix "
},
{
  "id": "sec-summarygames-3",
  "level": "2",
  "url": "sec-summarygames.html#sec-summarygames-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domination "
},
{
  "id": "sec-summarygames-5",
  "level": "2",
  "url": "sec-summarygames.html#sec-summarygames-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saddle point "
},
{
  "id": "figure-videochapter5ZeroSum",
  "level": "2",
  "url": "sec-summarygames.html#figure-videochapter5ZeroSum",
  "type": "Figure",
  "number": "5.4.1",
  "title": "",
  "body": " Zero-Sum Games.   "
},
{
  "id": "sec-summarygames-8",
  "level": "2",
  "url": "sec-summarygames.html#sec-summarygames-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "von Neumann minimax Theorem "
},
{
  "id": "figure-videochapter5vonNeumann",
  "level": "2",
  "url": "sec-summarygames.html#figure-videochapter5vonNeumann",
  "type": "Figure",
  "number": "5.4.2",
  "title": "",
  "body": " Proof of the von Neumann minimax Theorem.   "
},
{
  "id": "figure-videochapter5Chance",
  "level": "2",
  "url": "sec-summarygames.html#figure-videochapter5Chance",
  "type": "Figure",
  "number": "5.4.3",
  "title": "",
  "body": " Games of Chance.   "
},
{
  "id": "sec-exercisesgames",
  "level": "1",
  "url": "sec-exercisesgames.html",
  "type": "Section",
  "number": "5.5",
  "title": "Problems for Chapter 5",
  "body": " Problems for   The simplex pivoter may be found here:          For the following games, write out the payoff matrix and the reduced matrix after domination.     Rowan has a 3 of hearts, 4 of spades, 9 of spades and 10 of hearts. Colleen has a 5 of spades, 6 of hearts, 7 of hearts and 8 of spades.  Each player selects a card without revealing it, and both players flip their cards over at the same time. If the suits are the same, then Rowan wins the sum of the two card values. Otherwise, Colleen wins that sum.      The same as but reverse the payoff conditions for Rowan and Colleen.      Rowan picks an even integer from 1-6, and Colleen picks an odd integer from 1-6. If the difference is less than 3, the player who played the bigger number wins the sum of the two values. Otherwise the player who played the smaller number wins the sum of the two values.      Rowan picks an integer from 1-3. Colleen picks two guesses which may be the same. Colleen reveals her guesses one at a time. If she guesses correctly, she wins a number of dollars equal to the value of their other guess. If she does not guess correctly, Rowan wins a number of dollars equal to the sum of both guesses.     Colonel Blotto   Colonel Rowan is attacking a town defended by Colonel Colleen. Rowan has three regiments and Colleen has four. There are two routes to the town. Rowan and select any number of regiments to attack along each route, up to a total of three and Colleen can likewise assign her four regiments along either route, neither knowing beforehand the other's strategy.  Along each route, whatever side has a greater number of regiments wins points equal to the number of regiments sent by the opposing side (as they capture those units). Furthermore, if Rowan wins along either route, he captures the town also worth one point.     Morra   Rowan and Colleen each simultaneously hold up one or two fingers and shouts a guess for the total number of fingers held. If either Rowan or Colleen guess correctly, then they collect dollars from their opponent equal to this number of fingers. If they both guess correctly or both guess incorrectly, then no money changes hands.       For each of the following payoff matrices, determine if there is a value of so that the matrix has a saddle point. If so, determine the value(s) of and the saddle point(s).                                                              Write out a reduced payoff matrix with exactly three saddle points.      For each of the following payoff matrices, find the von Neumann value and optimal strategy for the payoff matrix.                                                      For each exercise in , determine the von Neumann value and the optimal strategy.     For each of the following games of chance, determine the von Neumann value for the game, and optimal strategies for both players.     Both players secretly flip a coin, they see their own result but not the other. Suppose Heads is greater value than Tails.  Rowan then has two choices. He may CALL : both coins are revealed. If Rowan wins, Colleen gives him $2, if Colleen wins, Rowan gives her $4. If both are the same, no money changes hands. He may BID : Colleen then has two choices.  Colleen may FOLD : and Rowan wins $4. Or she may SEE : in which case both coins are revealed, and the winner is awarded $10 from the loser. If there is no winner, no money changes hands.      Each player adds $2 to the pot. Then they roll a 4-sided dice in secret. Each player knows their own results, but not the other's.  Rowan two options. He may FOLD : The pot goes to Colleen. He may PLAY : In which case he adds $5 to the pot.  Colleen then has two options. She may FOLD : The pot goes to Rowan. She may PLAY : In which case she adds $5 to the pot.  Then the results are revealed. Whoever wins takes the pot. If they are a tie, then the pot is split between the players.      There are 6 cards, 2 Jacks, 2 Queens and 2 Kings with Jack < Queen < King. The players each place $1 in the pot. Then, one card each is dealt to each player face down. They may see their own card but not their opponent's.  Rowan now has three choices. He may FOLD : the pot goes to Colleen. He may CHECK : the pot remains as is, or he may RAISE : Rowan adds $2 to the pot.  If Rowan doesn't FOLD, Colleen also has three choices. She may also FOLD : The pot goes to Rowan. She may SEE : Colleen adds money to the pot equal to what Rowan added (if any). She may SEE-RAISE : Colleen adds money to the pot equal to what Rowan added, and then they both add in an additional $2.  If no one has folded at this point, the cards are revealed. The pot goes to the winner. If the cards are a tie, then the pot is split evenly between the players.       Prove that if a reduced payoff matrix has multiple saddle points, they have the same value.      Consider the payoff matrix      Find necessary and sufficient conditions for this matrix to be reduced by domination.      Find the von Neumann value in terms of and and optimal strategies for each player for the game above. There may be multiple cases.       Consider the payoff matrix where .     Find the von Neumann value and optimal strategies for each player for the game above.      Suppose could be any value, when does this matrix reduce via domination?      Find the von Neumann value and optimal strategies for each player for the game above if could be any value.       Consider the payoff matrix where .     Find the optimal solutions and the von Neumann value for the above game. (Without loss of generality, we may assume are positive, why?)      Prove that in a game with a two-by-two payoff matrix where the optimal solution for each player is a pure strategy , then the matrix has a saddle point.      Prove via contradiction that in a game with a reduced payoff matrix where the optimal solution for each player is a pure strategy , then the matrix has a saddle point.      "
},
{
  "id": "ex-games",
  "level": "2",
  "url": "sec-exercisesgames.html#ex-games",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "  For the following games, write out the payoff matrix and the reduced matrix after domination.     Rowan has a 3 of hearts, 4 of spades, 9 of spades and 10 of hearts. Colleen has a 5 of spades, 6 of hearts, 7 of hearts and 8 of spades.  Each player selects a card without revealing it, and both players flip their cards over at the same time. If the suits are the same, then Rowan wins the sum of the two card values. Otherwise, Colleen wins that sum.      The same as but reverse the payoff conditions for Rowan and Colleen.      Rowan picks an even integer from 1-6, and Colleen picks an odd integer from 1-6. If the difference is less than 3, the player who played the bigger number wins the sum of the two values. Otherwise the player who played the smaller number wins the sum of the two values.      Rowan picks an integer from 1-3. Colleen picks two guesses which may be the same. Colleen reveals her guesses one at a time. If she guesses correctly, she wins a number of dollars equal to the value of their other guess. If she does not guess correctly, Rowan wins a number of dollars equal to the sum of both guesses.     Colonel Blotto   Colonel Rowan is attacking a town defended by Colonel Colleen. Rowan has three regiments and Colleen has four. There are two routes to the town. Rowan and select any number of regiments to attack along each route, up to a total of three and Colleen can likewise assign her four regiments along either route, neither knowing beforehand the other's strategy.  Along each route, whatever side has a greater number of regiments wins points equal to the number of regiments sent by the opposing side (as they capture those units). Furthermore, if Rowan wins along either route, he captures the town also worth one point.     Morra   Rowan and Colleen each simultaneously hold up one or two fingers and shouts a guess for the total number of fingers held. If either Rowan or Colleen guess correctly, then they collect dollars from their opponent equal to this number of fingers. If they both guess correctly or both guess incorrectly, then no money changes hands.    "
},
{
  "id": "exercises-games-2",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-2",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "  For each of the following payoff matrices, determine if there is a value of so that the matrix has a saddle point. If so, determine the value(s) of and the saddle point(s).                                                           "
},
{
  "id": "exercises-games-3",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "  Write out a reduced payoff matrix with exactly three saddle points.   "
},
{
  "id": "exercises-games-4",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": "  For each of the following payoff matrices, find the von Neumann value and optimal strategy for the payoff matrix.                                                    "
},
{
  "id": "exercises-games-5",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-5",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": " For each exercise in , determine the von Neumann value and the optimal strategy.  "
},
{
  "id": "exercises-games-6",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-6",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": "  For each of the following games of chance, determine the von Neumann value for the game, and optimal strategies for both players.     Both players secretly flip a coin, they see their own result but not the other. Suppose Heads is greater value than Tails.  Rowan then has two choices. He may CALL : both coins are revealed. If Rowan wins, Colleen gives him $2, if Colleen wins, Rowan gives her $4. If both are the same, no money changes hands. He may BID : Colleen then has two choices.  Colleen may FOLD : and Rowan wins $4. Or she may SEE : in which case both coins are revealed, and the winner is awarded $10 from the loser. If there is no winner, no money changes hands.      Each player adds $2 to the pot. Then they roll a 4-sided dice in secret. Each player knows their own results, but not the other's.  Rowan two options. He may FOLD : The pot goes to Colleen. He may PLAY : In which case he adds $5 to the pot.  Colleen then has two options. She may FOLD : The pot goes to Rowan. She may PLAY : In which case she adds $5 to the pot.  Then the results are revealed. Whoever wins takes the pot. If they are a tie, then the pot is split between the players.      There are 6 cards, 2 Jacks, 2 Queens and 2 Kings with Jack < Queen < King. The players each place $1 in the pot. Then, one card each is dealt to each player face down. They may see their own card but not their opponent's.  Rowan now has three choices. He may FOLD : the pot goes to Colleen. He may CHECK : the pot remains as is, or he may RAISE : Rowan adds $2 to the pot.  If Rowan doesn't FOLD, Colleen also has three choices. She may also FOLD : The pot goes to Rowan. She may SEE : Colleen adds money to the pot equal to what Rowan added (if any). She may SEE-RAISE : Colleen adds money to the pot equal to what Rowan added, and then they both add in an additional $2.  If no one has folded at this point, the cards are revealed. The pot goes to the winner. If the cards are a tie, then the pot is split evenly between the players.    "
},
{
  "id": "exercises-games-7",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-7",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "  Prove that if a reduced payoff matrix has multiple saddle points, they have the same value.   "
},
{
  "id": "exercises-games-8",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-8",
  "type": "Exercise",
  "number": "5.5.8",
  "title": "",
  "body": "  Consider the payoff matrix      Find necessary and sufficient conditions for this matrix to be reduced by domination.      Find the von Neumann value in terms of and and optimal strategies for each player for the game above. There may be multiple cases.    "
},
{
  "id": "exercises-games-9",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-9",
  "type": "Exercise",
  "number": "5.5.9",
  "title": "",
  "body": "  Consider the payoff matrix where .     Find the von Neumann value and optimal strategies for each player for the game above.      Suppose could be any value, when does this matrix reduce via domination?      Find the von Neumann value and optimal strategies for each player for the game above if could be any value.    "
},
{
  "id": "exercises-games-10",
  "level": "2",
  "url": "sec-exercisesgames.html#exercises-games-10",
  "type": "Exercise",
  "number": "5.5.10",
  "title": "",
  "body": "  Consider the payoff matrix where .     Find the optimal solutions and the von Neumann value for the above game. (Without loss of generality, we may assume are positive, why?)      Prove that in a game with a two-by-two payoff matrix where the optimal solution for each player is a pure strategy , then the matrix has a saddle point.      Prove via contradiction that in a game with a reduced payoff matrix where the optimal solution for each player is a pure strategy , then the matrix has a saddle point.    "
},
{
  "id": "sec-vam",
  "level": "1",
  "url": "sec-vam.html",
  "type": "Section",
  "number": "6.1",
  "title": "A Transportation problem and VAM",
  "body": " A Transportation problem and VAM  transportation problem   We introduce the transportation problem, consider its connection to linear optimization, and show an algorithm that produces a (maybe not optimal) solution.     Suppose we have a company moving goods (let's say widgets) from 3 different warehouses to 3 different markets. The cost of shipping from warehouses to markets is listed below, along with the demand from each market and the supply available at each warehouse:       Market 1  Market 2  Market 3      Warehouse 1  $2\/ton  $1\/ton  $5\/ton  70 tons    Warehouse 2  $5\/ton  $3\/ton  $6\/ton  20 tons    Warehouse 3  $1\/ton  $2\/ton  $8\/ton  10 tons      40 tons  40 tons  20 tons  100 tons     We want to ship the goods from the warehouses to the markets in a way that minimizes costs.     Just eyeballing this, can you come up with a heuristic guess as to an optimal, or at least good shipping schedule? How did you come up with this and what did you have to consider?      Let denote the the tons of goods shipped from warehouse to market . Write an (in)equality for the quantity of goods shipped from Warehouse 1 in terms of the .      Write an (in)equality for the quantity of goods shipped to Market 2 in terms of the .      Write a (possibly noncanonical) linear minimization problem that minimizes the cost to ship these goods.      transportation problem, balanced  balanced transportation problem   A transportation problem where the total demand and the total supply are the same is a balanced transportation problem.      While we could solve this transportation by the Simplex Algorithm, it would be painfully tedious to do. We develop an algorithm to simplify this process.      Consider the transportation problem described in , and consider the linear equations Set up an augmented matrix representing this system and solve it. What is the rank of this matrix? Describe the set of solutions to this system.      We now generalize to a balanced transportation problem with warehouses and markets with supplies and demands . Note that we have linear equations Since , how many of the are needed to be nonzero for a basic solution?    Imagine an augmented matrix with the coefficients of the on one side and the supplies\/demand of the other. What is an upper bound of the rank of this matrix? Then consider that . What does this say about the (in)dependence of the rows? What then must the rank be? What happened in part ?      We first mark the difference between the lowest two values in each row\/column:                                                                                        transportation tableau  tableau, transportation A table like this is called a transportation tableau  transportation tableau .  Ideally we would always want to move everything with the cheapest available option. It's not hard to see that in most cases, like this one, this isn't actually possible. What do these numbers we computed measure? How can they help us decide how to move goods?      We select the row or column with the highest difference and use the smallest entry in said row\/column to move as much of the goods as we can:                                                                                                                                                                            Would it make sense to move any more goods from Warehouse 2? How should we decide how to move goods next?      Note that Warehouse 2 has all their supply exhausted, and shipping from there is no longer an option. What are the differences between the lowest costs and second lowest costs in each row\/column?                                      NA                                                     The next highest difference is for Market 3:                                      NA                                                             NA                        NA                                                 Does it make sense to continue to move goods to Market 3?  What should be the next choice of warehouse\/market?      Finish moving the goods from warehouses to markets.      Consider the final transportation tableau:        NA   NA   NA       NA                 NA                 NA                                Verify that this is a feasible solution to the original transportation problem. Do you think it is optimal?      Out of the nine possible warehouse\/market pairs, how many have actual shipments between them? How does that compare to what we found in (a)?      Vogel advanced-start method  VAM  algorithm, VAM   To summarize the Vogel Advanced-Start Method or VAM method of producing a feasible solution to the transportation problem is outlined as follows.    We begin with  sources (warehouses in the above activities) and  sinks (markets in the above activities), each with a supply or demand respectively. We associate each row of the transportation tableau with a source, each column with a sink, and each entry with the cost of shipping from source to sink .    For each row and column, we record the difference between the lowest two values.    We pick the row\/column with the largest difference (so long as the associated supply\/demand is positive), and the smallest entry in the row\/column, . By convention we circle this entry.    We ship quantity from source to sink , recording this quantity as a superscript in the numerator and adjusting the supply for source and demand for sink appropriately.    We ignore any source\/sink with 0 supply\/demand and repeat 2-4.    If all source\/sinks are exhausted and we have not yet circled entries, we circle any entries in the last row\/column we've examined, noting that the quantities shipped for these entries is zero.    Once entries are circled and all supply\/demand is exhausted, we terminate. The circled entries are called the basis of the tableau.      "
},
{
  "id": "exploration-transportation",
  "level": "2",
  "url": "sec-vam.html#exploration-transportation",
  "type": "Exploration",
  "number": "6.1.1",
  "title": "",
  "body": "  Suppose we have a company moving goods (let's say widgets) from 3 different warehouses to 3 different markets. The cost of shipping from warehouses to markets is listed below, along with the demand from each market and the supply available at each warehouse:       Market 1  Market 2  Market 3      Warehouse 1  $2\/ton  $1\/ton  $5\/ton  70 tons    Warehouse 2  $5\/ton  $3\/ton  $6\/ton  20 tons    Warehouse 3  $1\/ton  $2\/ton  $8\/ton  10 tons      40 tons  40 tons  20 tons  100 tons     We want to ship the goods from the warehouses to the markets in a way that minimizes costs.     Just eyeballing this, can you come up with a heuristic guess as to an optimal, or at least good shipping schedule? How did you come up with this and what did you have to consider?      Let denote the the tons of goods shipped from warehouse to market . Write an (in)equality for the quantity of goods shipped from Warehouse 1 in terms of the .      Write an (in)equality for the quantity of goods shipped to Market 2 in terms of the .      Write a (possibly noncanonical) linear minimization problem that minimizes the cost to ship these goods.    "
},
{
  "id": "def-balanced",
  "level": "2",
  "url": "sec-vam.html#def-balanced",
  "type": "Definition",
  "number": "6.1.2",
  "title": "",
  "body": " transportation problem, balanced  balanced transportation problem   A transportation problem where the total demand and the total supply are the same is a balanced transportation problem.   "
},
{
  "id": "activity-vamexample",
  "level": "2",
  "url": "sec-vam.html#activity-vamexample",
  "type": "Activity",
  "number": "6.1.3",
  "title": "",
  "body": "  While we could solve this transportation by the Simplex Algorithm, it would be painfully tedious to do. We develop an algorithm to simplify this process.      Consider the transportation problem described in , and consider the linear equations Set up an augmented matrix representing this system and solve it. What is the rank of this matrix? Describe the set of solutions to this system.      We now generalize to a balanced transportation problem with warehouses and markets with supplies and demands . Note that we have linear equations Since , how many of the are needed to be nonzero for a basic solution?    Imagine an augmented matrix with the coefficients of the on one side and the supplies\/demand of the other. What is an upper bound of the rank of this matrix? Then consider that . What does this say about the (in)dependence of the rows? What then must the rank be? What happened in part ?      We first mark the difference between the lowest two values in each row\/column:                                                                                        transportation tableau  tableau, transportation A table like this is called a transportation tableau  transportation tableau .  Ideally we would always want to move everything with the cheapest available option. It's not hard to see that in most cases, like this one, this isn't actually possible. What do these numbers we computed measure? How can they help us decide how to move goods?      We select the row or column with the highest difference and use the smallest entry in said row\/column to move as much of the goods as we can:                                                                                                                                                                            Would it make sense to move any more goods from Warehouse 2? How should we decide how to move goods next?      Note that Warehouse 2 has all their supply exhausted, and shipping from there is no longer an option. What are the differences between the lowest costs and second lowest costs in each row\/column?                                      NA                                                     The next highest difference is for Market 3:                                      NA                                                             NA                        NA                                                 Does it make sense to continue to move goods to Market 3?  What should be the next choice of warehouse\/market?      Finish moving the goods from warehouses to markets.      Consider the final transportation tableau:        NA   NA   NA       NA                 NA                 NA                                Verify that this is a feasible solution to the original transportation problem. Do you think it is optimal?      Out of the nine possible warehouse\/market pairs, how many have actual shipments between them? How does that compare to what we found in (a)?    "
},
{
  "id": "def-vam",
  "level": "2",
  "url": "sec-vam.html#def-vam",
  "type": "Definition",
  "number": "6.1.4",
  "title": "",
  "body": " Vogel advanced-start method  VAM  algorithm, VAM   To summarize the Vogel Advanced-Start Method or VAM method of producing a feasible solution to the transportation problem is outlined as follows.    We begin with  sources (warehouses in the above activities) and  sinks (markets in the above activities), each with a supply or demand respectively. We associate each row of the transportation tableau with a source, each column with a sink, and each entry with the cost of shipping from source to sink .    For each row and column, we record the difference between the lowest two values.    We pick the row\/column with the largest difference (so long as the associated supply\/demand is positive), and the smallest entry in the row\/column, . By convention we circle this entry.    We ship quantity from source to sink , recording this quantity as a superscript in the numerator and adjusting the supply for source and demand for sink appropriately.    We ignore any source\/sink with 0 supply\/demand and repeat 2-4.    If all source\/sinks are exhausted and we have not yet circled entries, we circle any entries in the last row\/column we've examined, noting that the quantities shipped for these entries is zero.    Once entries are circled and all supply\/demand is exhausted, we terminate. The circled entries are called the basis of the tableau.     "
},
{
  "id": "sec-transportalgorithm",
  "level": "1",
  "url": "sec-transportalgorithm.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Transportation Algorithm",
  "body": " The Transportation Algorithm   We show how we can take a feasible transportation solution (say from ), and from there produce an optimal solution.     Consider a transportation tableau:                       0            0      0  0       The box here denotes that the bottom right 5 isn't currently being used but likely should be.     It is clear that we should shift some of warehouse 2's shipments to market 2 to reduce costs. Why isn't this a valid transportation tableau?                                                      How should we adjust these values to have a valid tableau?                                                      How about this one?                           ?  ?  0         ?     ?  0      ?     ?     0      ?  ?  ?  ?  0      ?  ?        0      0  0  0  0            Recall the transportation tableau obtained in :        NA   NA   NA       NA                 NA                 NA                                Note that this tableau corresponds to a basic feasible solution for the original minimization problem.     If this solution is not optimal, what should the next step be? (Recall how we chose pivots in .)    Pick a variable to exit the basis which increases the objective function and make the smallest change.    Pick a variable to exit the basis which decreases the objective function and make the smallest change.    Pick a variable to exit the basis which increases the objective function and make the biggest change.    Pick a variable to exit the basis which decreases the objective function and make the biggest change.        Select row values and column values so that each circled value is the sum of row and column values .  (We can think of these as analogous to the shadow costs associated with the warehouse\/market bounds.)                                                                   Replace each entry of the tableau with . What does this measure? What does it mean if each entry is nonnegative?      Pick a .                                                                   Pick circled entries so that they with the boxed form a cycle , that is each of these entries shares a row with exactly one another of the entries, and a column with another of the entries.      Based on the discussion in , which entry should transfer their shipments to ?     .     .     .     .     .    How do the other entries in the cycle adjust? (There may be more than one valid choice.)      Remove the basis entry which is no longer being used, and recompute the with the new basis.                                                                                     Verify that none of the entries are non negative. Why do we now terminate?  We then replace the entries with the original entries:                                                                   Use Sage to confirm the solution:          transportation algorithm  algorithm, transportation   To summarize, the Transportation Algorithm is as follows:    We begin with a feasible transportation tableau, probably via VAM .  We then associate with each row an unknown and each column a .    We select values so that for each basis entry we have that .    Replace every entry with .    If there is a negative entry box this entry and select basis entries so that they, along with the boxed entry, form a cycle.  If each entry is nonnegative, GOTO 6.    Shift shipments appropriately along the cycle so that has a nonnegative shipping quantity, and one of the selected basis entries has a zero shipping quantity. Remove this entry from the basis and add the entry in step 4 to the basis.  Then GOTO 2.    Replace each cost entry with the costs from step 1 and terminate.        Consider the tableau:                                                                  Perform steps 2-5 of the Transportation Algorithm . How much was shifted along the cycle in step 5?      What is the analogous type of pivot when performing the Simplex Algorithm ?       Consider the Transportation Algorithm . Recall that the objective function for the transportation problem is , and that the entries of the tableau produced in step 3 are .  Show that in step 5 the newly produced solution has a lower or equal objective value.     Unbalanced Transportation Problems   transportation problem, unbalanced  unbalanced transportation problem   We now consider the case of unbalanced transportation problems, where the demand and supply are unequal.     Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  20 tons  40 tons       Suppose we satisfy all the demand in a way that minimizes costs. What would be the remaining result?      Suppose we ship the excess supply to a phantom market :       Market 1  Market 2  Market 3   Market       Warehouse 1  $5\/ton  $3\/ton  $1\/ton  ?  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  ?  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  ?  15 tons      30 tons  20 tons  40 tons  ?       How much is shipped to the market ? How much does it cost to ship from each warehouse to market ?      Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  50 tons  40 tons       Suppose we exhaust all the supply in a way that minimizes costs. What would be the remaining result?      Suppose we have a phantom warehouse that filled the outstanding demand.       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons     Warehouse   ?  ?  ?  ?      30 tons  50 tons  40 tons       How much additional supply is needed? How much would it cost to ship this supply from warehouse to the markets?      Describe a general procedure for solving unbalanced transportation problems.      "
},
{
  "id": "sec-transportalgorithm-3",
  "level": "2",
  "url": "sec-transportalgorithm.html#sec-transportalgorithm-3",
  "type": "Exploration",
  "number": "6.2.1",
  "title": "",
  "body": "  Consider a transportation tableau:                       0            0      0  0       The box here denotes that the bottom right 5 isn't currently being used but likely should be.     It is clear that we should shift some of warehouse 2's shipments to market 2 to reduce costs. Why isn't this a valid transportation tableau?                                                      How should we adjust these values to have a valid tableau?                                                      How about this one?                           ?  ?  0         ?     ?  0      ?     ?     0      ?  ?  ?  ?  0      ?  ?        0      0  0  0  0         "
},
{
  "id": "activity-transportalgorithm",
  "level": "2",
  "url": "sec-transportalgorithm.html#activity-transportalgorithm",
  "type": "Activity",
  "number": "6.2.2",
  "title": "",
  "body": "  Recall the transportation tableau obtained in :        NA   NA   NA       NA                 NA                 NA                                Note that this tableau corresponds to a basic feasible solution for the original minimization problem.     If this solution is not optimal, what should the next step be? (Recall how we chose pivots in .)    Pick a variable to exit the basis which increases the objective function and make the smallest change.    Pick a variable to exit the basis which decreases the objective function and make the smallest change.    Pick a variable to exit the basis which increases the objective function and make the biggest change.    Pick a variable to exit the basis which decreases the objective function and make the biggest change.        Select row values and column values so that each circled value is the sum of row and column values .  (We can think of these as analogous to the shadow costs associated with the warehouse\/market bounds.)                                                                   Replace each entry of the tableau with . What does this measure? What does it mean if each entry is nonnegative?      Pick a .                                                                   Pick circled entries so that they with the boxed form a cycle , that is each of these entries shares a row with exactly one another of the entries, and a column with another of the entries.      Based on the discussion in , which entry should transfer their shipments to ?     .     .     .     .     .    How do the other entries in the cycle adjust? (There may be more than one valid choice.)      Remove the basis entry which is no longer being used, and recompute the with the new basis.                                                                                     Verify that none of the entries are non negative. Why do we now terminate?  We then replace the entries with the original entries:                                                                   Use Sage to confirm the solution:        "
},
{
  "id": "def-transportationalg",
  "level": "2",
  "url": "sec-transportalgorithm.html#def-transportationalg",
  "type": "Definition",
  "number": "6.2.3",
  "title": "",
  "body": " transportation algorithm  algorithm, transportation   To summarize, the Transportation Algorithm is as follows:    We begin with a feasible transportation tableau, probably via VAM .  We then associate with each row an unknown and each column a .    We select values so that for each basis entry we have that .    Replace every entry with .    If there is a negative entry box this entry and select basis entries so that they, along with the boxed entry, form a cycle.  If each entry is nonnegative, GOTO 6.    Shift shipments appropriately along the cycle so that has a nonnegative shipping quantity, and one of the selected basis entries has a zero shipping quantity. Remove this entry from the basis and add the entry in step 4 to the basis.  Then GOTO 2.    Replace each cost entry with the costs from step 1 and terminate.     "
},
{
  "id": "sec-transportalgorithm-6",
  "level": "2",
  "url": "sec-transportalgorithm.html#sec-transportalgorithm-6",
  "type": "Activity",
  "number": "6.2.4",
  "title": "",
  "body": "  Consider the tableau:                                                                  Perform steps 2-5 of the Transportation Algorithm . How much was shifted along the cycle in step 5?      What is the analogous type of pivot when performing the Simplex Algorithm ?    "
},
{
  "id": "sec-transportalgorithm-7",
  "level": "2",
  "url": "sec-transportalgorithm.html#sec-transportalgorithm-7",
  "type": "Activity",
  "number": "6.2.5",
  "title": "",
  "body": "  Consider the Transportation Algorithm . Recall that the objective function for the transportation problem is , and that the entries of the tableau produced in step 3 are .  Show that in step 5 the newly produced solution has a lower or equal objective value.   "
},
{
  "id": "activity-unbalanced",
  "level": "2",
  "url": "sec-transportalgorithm.html#activity-unbalanced",
  "type": "Activity",
  "number": "6.2.6",
  "title": "",
  "body": " transportation problem, unbalanced  unbalanced transportation problem   We now consider the case of unbalanced transportation problems, where the demand and supply are unequal.     Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  20 tons  40 tons       Suppose we satisfy all the demand in a way that minimizes costs. What would be the remaining result?      Suppose we ship the excess supply to a phantom market :       Market 1  Market 2  Market 3   Market       Warehouse 1  $5\/ton  $3\/ton  $1\/ton  ?  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  ?  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  ?  15 tons      30 tons  20 tons  40 tons  ?       How much is shipped to the market ? How much does it cost to ship from each warehouse to market ?      Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  50 tons  40 tons       Suppose we exhaust all the supply in a way that minimizes costs. What would be the remaining result?      Suppose we have a phantom warehouse that filled the outstanding demand.       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons     Warehouse   ?  ?  ?  ?      30 tons  50 tons  40 tons       How much additional supply is needed? How much would it cost to ship this supply from warehouse to the markets?      Describe a general procedure for solving unbalanced transportation problems.    "
},
{
  "id": "sec-assignment",
  "level": "1",
  "url": "sec-assignment.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Assignment Problem and Hungarian Algorithm",
  "body": " The Assignment Problem and Hungarian Algorithm   We consider the assignment problem, where each source and sink have supply and demand 1, and an alternative algorithm to solve these sort of problems.     Suppose we have 3 jobs and 3 contractors, and we wish to assign jobs to contractors at the minimum price. How can we distribute the jobs amongst the contractors? (Costs are in thousands of dollars.)       Job 1  Job 2  Job 3      Contractor 1  10  9  12  ?    Contractor 2  9  9  10  ?    Contractor 3  10  7  9  ?      ?  ?  ?  ?        What are the supply and demand of each job and contractor?      Use VAM and the Transportation Algorithm to solve this problem.      Could there have been an easier way to approach this problem?      assignment problem   An assignment problem is a transportation problem where the supply and demands are all 1.    Note that in , while we were able to solve this as a transportation problem, the restriction to supplies and demands of 1 ought to yield a simpler way to find a solution.   permutation set of zeroes   Let be a tableau for a balanced assignment problem. A permutation set of zeroes is a subset of zero cells for so that each row and column contains exactly one zero cell.      We explore some features of the assignment tableau that can help shed light on what an appropriate algorithm would look like.                                                                  If we multiply each entry by , would that change our optimal solution? What about by ? What values could we multiply the tableau by to preserve the optimal solution?      If we add or subtract from each entry, does it change the optimal solution? What about ?      Suppose we had an optimal solution to the assignment problem. Explain why adding to each entry in a row does not change the optimal solution.    How would this compare to solving the original problem and adding to the cost?      What would change if we did this to a different row? A column?      Suppose we subtracted the smallest value in each row from every entry of that row. If there was a permutation set of zeroes, what would that entail?      Suppose we subtracted the smallest value in each column from every entry of that column. If there was a permutation set of zeroes, what would that entail?      If we had a tableau with all rational values, how could we change this to a tableau of all integer values with the same optimal solution?      If we had a tableau with all integer values, how could we change this to a tableau of all nonnegative integer values with the same optimal solution?      Hungarian algorithm  algorithm, Hungarian   We state here the steps of the Hungarian Algorithm . We start with an assignment tableau .    IF the entries of are rational but not all integral, :  THEN multiply each entry of by the lowest common multiple of the denominators, .    IF the entries of are not all nonnegative:  THEN add to every entry of the smallest value of , .    Subtract from each row the smallest entry in that row.    Subtract from each column the smallest entry in that column.    IF has a permutation set of zeroes: STOP.    Draw a minimum number of lines through covering an entire row or column such that all 's are covered.    Let be the value of the smallest uncovered entry. Subtract all uncovered entries by , and add to the entries corresponding to intersections of the lines.    GOTO 5.         In step 6 of , suppose we draw lines. Could be greater than ?      Suppose that the zeroes of the tableau in a given step do not form a permutation set of zeroes. Show that .      What would it mean if ?      Show that step 7 is equivalent to subtracting from each uncovered row, and adding to each covered column. (Or subtracting from each uncovered column, and adding to each covered row.)      Why does step 7 not change the optimal assignment?       Use the Hungarian Algorithm to solve the problem from .      Suppose 4 students are picking 4 research topics. The four topics are to be distributed one each amongst the four students. They rated the topics on a scale of 1-10.       Topic 1  Topic 2  Topic 3  Topic 4    Student 1  6  9  10  8    Student 2  2  8  9  7    Student 3  7  7  8  9    Student 4  6  8  9  8     We want to maximize the total enjoyment .     This is a maximization problem, and the assignment problem is a minimization problem, how might we convert it to a minimization problem?      After converting, use the Hungarian Algorithm to solve the problem.     "
},
{
  "id": "exploration-assignment",
  "level": "2",
  "url": "sec-assignment.html#exploration-assignment",
  "type": "Exploration",
  "number": "6.3.1",
  "title": "",
  "body": "  Suppose we have 3 jobs and 3 contractors, and we wish to assign jobs to contractors at the minimum price. How can we distribute the jobs amongst the contractors? (Costs are in thousands of dollars.)       Job 1  Job 2  Job 3      Contractor 1  10  9  12  ?    Contractor 2  9  9  10  ?    Contractor 3  10  7  9  ?      ?  ?  ?  ?        What are the supply and demand of each job and contractor?      Use VAM and the Transportation Algorithm to solve this problem.      Could there have been an easier way to approach this problem?    "
},
{
  "id": "def-assignmentproblem",
  "level": "2",
  "url": "sec-assignment.html#def-assignmentproblem",
  "type": "Definition",
  "number": "6.3.2",
  "title": "",
  "body": " assignment problem   An assignment problem is a transportation problem where the supply and demands are all 1.   "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-assignment.html#def-permutation",
  "type": "Definition",
  "number": "6.3.3",
  "title": "",
  "body": " permutation set of zeroes   Let be a tableau for a balanced assignment problem. A permutation set of zeroes is a subset of zero cells for so that each row and column contains exactly one zero cell.   "
},
{
  "id": "sec-assignment-7",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-7",
  "type": "Activity",
  "number": "6.3.4",
  "title": "",
  "body": "  We explore some features of the assignment tableau that can help shed light on what an appropriate algorithm would look like.                                                                  If we multiply each entry by , would that change our optimal solution? What about by ? What values could we multiply the tableau by to preserve the optimal solution?      If we add or subtract from each entry, does it change the optimal solution? What about ?      Suppose we had an optimal solution to the assignment problem. Explain why adding to each entry in a row does not change the optimal solution.    How would this compare to solving the original problem and adding to the cost?      What would change if we did this to a different row? A column?      Suppose we subtracted the smallest value in each row from every entry of that row. If there was a permutation set of zeroes, what would that entail?      Suppose we subtracted the smallest value in each column from every entry of that column. If there was a permutation set of zeroes, what would that entail?      If we had a tableau with all rational values, how could we change this to a tableau of all integer values with the same optimal solution?      If we had a tableau with all integer values, how could we change this to a tableau of all nonnegative integer values with the same optimal solution?    "
},
{
  "id": "def-hungarian",
  "level": "2",
  "url": "sec-assignment.html#def-hungarian",
  "type": "Definition",
  "number": "6.3.5",
  "title": "",
  "body": " Hungarian algorithm  algorithm, Hungarian   We state here the steps of the Hungarian Algorithm . We start with an assignment tableau .    IF the entries of are rational but not all integral, :  THEN multiply each entry of by the lowest common multiple of the denominators, .    IF the entries of are not all nonnegative:  THEN add to every entry of the smallest value of , .    Subtract from each row the smallest entry in that row.    Subtract from each column the smallest entry in that column.    IF has a permutation set of zeroes: STOP.    Draw a minimum number of lines through covering an entire row or column such that all 's are covered.    Let be the value of the smallest uncovered entry. Subtract all uncovered entries by , and add to the entries corresponding to intersections of the lines.    GOTO 5.     "
},
{
  "id": "sec-assignment-9",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-9",
  "type": "Activity",
  "number": "6.3.6",
  "title": "",
  "body": "   In step 6 of , suppose we draw lines. Could be greater than ?      Suppose that the zeroes of the tableau in a given step do not form a permutation set of zeroes. Show that .      What would it mean if ?      Show that step 7 is equivalent to subtracting from each uncovered row, and adding to each covered column. (Or subtracting from each uncovered column, and adding to each covered row.)      Why does step 7 not change the optimal assignment?    "
},
{
  "id": "sec-assignment-10",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-10",
  "type": "Activity",
  "number": "6.3.7",
  "title": "",
  "body": "  Use the Hungarian Algorithm to solve the problem from .   "
},
{
  "id": "sec-assignment-11",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-11",
  "type": "Activity",
  "number": "6.3.8",
  "title": "",
  "body": "  Suppose 4 students are picking 4 research topics. The four topics are to be distributed one each amongst the four students. They rated the topics on a scale of 1-10.       Topic 1  Topic 2  Topic 3  Topic 4    Student 1  6  9  10  8    Student 2  2  8  9  7    Student 3  7  7  8  9    Student 4  6  8  9  8     We want to maximize the total enjoyment .     This is a maximization problem, and the assignment problem is a minimization problem, how might we convert it to a minimization problem?      After converting, use the Hungarian Algorithm to solve the problem.    "
},
{
  "id": "sec-summarytransports",
  "level": "1",
  "url": "sec-summarytransports.html",
  "type": "Section",
  "number": "6.4",
  "title": "Summary of Chapter 6",
  "body": " Summary of  We introduce the Transportion Problem : given  warehouses and  markets , each with supply and demand respectively, then given , the cost to ship from warehouse to market , to find the shipping quantities which satisfy all the warehouse and market constraints. When , we call this problem balanced .  This can be captured with a transportation tableau:                                                                                                                 Note that if we were to consider the inherent system of equations: and the fact that , that the associated augmented matrix would have rank and thus at most of the need be nonzero for a feasible or optimal solution. A selection of these variables will be considered the basis of a solution, and is equivalent to the basis variables from .  We then introduce the Vogel Advanced Start Method (VAM) to heuristically pick a good feasible solution. The essential premise is that, we take each warehouse and market, and consider the difference between the cheapest and second cheapest options for that row\/column. Since we want to minimize cost, we prioritize warehouses\/markets where making the second best choice would incur a larger cost penalty than the best choice, and choose the cheapest option for those row\/columns. We then readjust and repeat until we obtain a feasible solution.   The Vogel Advanced Start Method.    We then proceed with the Transportation Algorithm  . The general idea is that we assign an to each row and for each column so that for each in the basis. Then, we reduce each by . We then see if any entries are negative.  Note that for the current basis, the cost of shipping is , but since for not in the basis, and since we have that so shifting the shipping to an entry where would lower the total shipping cost. We then outline a cycle consisting of new basis elements and shifting the shipping around to preserve the warehouse and market constraints, adding the negative entry to the basis and removing an entry with no shipping from the basis. Note that it is possible for this shift to be zero, yet changing the basis, equivalent to a degenerate pivot from . We repeat this process until there are no longer negative entries.   The Transportation Algorithm.    Finally, we consider the Assignment Problem and the Hungarian Algorithm  . The assignment problem can be thought of as a transportation problem where each warehouse and market have supply and demand 1. But since this is greatly simplified, we should expect a simpler algorithm. We note that we may add and subtract from any row or column without changing the optimal assignment, since this is equivalent to picking originally and then giving\/taking back afterwards. We may also multiply all entries by the same value and preserve the optimal assignment by a similar argument. So we may adjust the tableau to only have nonnegative integer entries, and then subtract the smallest value from each row, then each column.  If there is a permutation set of zeroes , a collection of zeroes no two of which share a row or column, then these clearly represent an optimal assignment. If none exist, we may rearrange the tableau by drawing a minimum number of lines through each zero. We then take the smallest uncovered entry and subtract that from each uncovered row and add it to each covered column. Equivalently we subtract this value from each uncovered entry and add it to each intersection. We then repeat until we find a permutation set of zeroes.   The Assignment Problem.    "
},
{
  "id": "sec-summarytransports-2",
  "level": "2",
  "url": "sec-summarytransports.html#sec-summarytransports-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transportion Problem balanced "
},
{
  "id": "sec-summarytransports-4",
  "level": "2",
  "url": "sec-summarytransports.html#sec-summarytransports-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis "
},
{
  "id": "figure-videochapter6VAM",
  "level": "2",
  "url": "sec-summarytransports.html#figure-videochapter6VAM",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " The Vogel Advanced Start Method.   "
},
{
  "id": "sec-summarytransports-7",
  "level": "2",
  "url": "sec-summarytransports.html#sec-summarytransports-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transportation Algorithm "
},
{
  "id": "figure-videochapter6Transportation",
  "level": "2",
  "url": "sec-summarytransports.html#figure-videochapter6Transportation",
  "type": "Figure",
  "number": "6.4.2",
  "title": "",
  "body": " The Transportation Algorithm.   "
},
{
  "id": "sec-summarytransports-10",
  "level": "2",
  "url": "sec-summarytransports.html#sec-summarytransports-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Assignment Problem Hungarian Algorithm "
},
{
  "id": "sec-summarytransports-11",
  "level": "2",
  "url": "sec-summarytransports.html#sec-summarytransports-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation set of zeroes "
},
{
  "id": "figure-videochapter6Assignment",
  "level": "2",
  "url": "sec-summarytransports.html#figure-videochapter6Assignment",
  "type": "Figure",
  "number": "6.4.3",
  "title": "",
  "body": " The Assignment Problem.   "
},
{
  "id": "sec-exercisestransports",
  "level": "1",
  "url": "sec-exercisestransports.html",
  "type": "Section",
  "number": "6.5",
  "title": "Problems for Chapter 6",
  "body": " Problems for   The simplex pivoter may be found here:          Solve each of the following transportation problems.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 In , looking at the final tableau of the Transportation Algorithm, determine which of these have a unique optimal solution.    In , for each problem without a unique optimal solution, find an alternative solution and show that it is feasible and gives the same objective value.     TRUE or FALSE for a valid choice of in step 2, then for a fixed real number , is also a valid choice.    Suppose were an absurdly large number. Solve the transportation problem:                                                                                                  Solve the following transportation problems.                                                                                                                                                                                                                                             On the planet Zeltros, a luxury resort is preparing for a multi-day celebration they are hosting. One of the requested activities by the guests is hoverbike riding. Over the three day event, they will require hoverbikes on the first day, hoverbikes on the second and hoverbikes on the final day.  Brand new hoverbikes are credits. After use they undergo a maintenance procedure which costs credits and takes two days, before they may be used again. A rush job that takes one day is possible but costs credits.  The resort naturally wishes to minimize their costs. They wish to know how many bikes to purchase and what maintenance schedule would achieve this.  Model this as a transportation problem where the warehouses are the number of brand new hoverbikes purchased before day 1, used hoverbikes from day 1 and used hoverbikes from day 2. Can we make educated guesses on what these capacities should be? What should the markets represent and what are their demands? Then solve the problem.     Solve the following assignment problem using both and as a transportation problem using .                                                         Solve the following assignment problems.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Some of the problems in have multiple solutions. Identify them and identify all the optimal solutions.     Consider a general balanced transportation problem. Let denote the supply of the warehouses, and denote the demand of the markets. Then let denote the cost to ship from warehouse to market .     Write out a noncanonical minimization problem which models this problem (there should be some equality constraints).      State the dual problem to the transportation problem.      Prove that in , for a valid choice of in step 2 that How does this relate the dual problem to the transportation problem?      Consider the nonnegativity condition in step 4 of . How does this relate to the constraints of the dual problem to the transportation problem?      Consider an assignment problem treated as a transportation problem. Apply VAM ( ) to this initial tableau. Show that the resulting basis generated has selected entries where the shipment along those entries ( ) is zero.    Prove that the Transportation Algorithm will lead to an optimal solution after a finite number of steps if the algorithm is applied to a problem with all data rational.     Consider the following network:   A Network Flow depicting several islands with bridges and carrying capacity.    where the labels on each edge denote the distance from to .  (More about directed weighted networks may be found in )     Consider an assignment problem with sources and sinks  such that the cost of from shipping from to is the label on the edge. Let the cost from shipping from to be 0. For each , let the cost of shipping from to itself be 0. Let every other cost be an absurdly high .  Solve this assignment problem.      For your optimal solution, if  ships to , highlight the corresponding edge on the network above. If a vertex ships to itself, highlight that vertex. Disregard the case when ships to . What can you say about the highlighted edges? What may be reasonable conjectures about these edges?       Consider a general directed weighted network with vertices with a unique source and sink , and all weights on edges are positive such as (see for more information).  We will be considering assignment problems where warehouses and markets are the vertices . Throughout this problem, let be an absurdly large number.     Consider an assignment problem where the cost of shipping from to is the weight on that edge if it exists and otherwise. Show that any solution to the assignment problem (not necessarily optimal) is bijective with the set of possible unions of disjoint cycles on the network.      Suppose we adjust the previous assignment problem where the cost of shipping from to is 0. Show that solutions to this assignment problem are bijective with the union of disjoint cycles and path from to on this network.      Suppose we then further adjust this assignment problem by setting the cost to ship from to itself for any to be 0. Show that an optimal solution to this problem must be a shortest path from to .      "
},
{
  "id": "ex-transport",
  "level": "2",
  "url": "sec-exercisestransports.html#ex-transport",
  "type": "Exercise",
  "number": "6.5.1",
  "title": "",
  "body": "  Solve each of the following transportation problems.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
},
{
  "id": "exercises-transport-2",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-2",
  "type": "Exercise",
  "number": "6.5.2",
  "title": "",
  "body": " In , looking at the final tableau of the Transportation Algorithm, determine which of these have a unique optimal solution.  "
},
{
  "id": "exercises-transport-3",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-3",
  "type": "Exercise",
  "number": "6.5.3",
  "title": "",
  "body": " In , for each problem without a unique optimal solution, find an alternative solution and show that it is feasible and gives the same objective value.  "
},
{
  "id": "exercises-transport-4",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-4",
  "type": "Exercise",
  "number": "6.5.4",
  "title": "",
  "body": "  TRUE or FALSE for a valid choice of in step 2, then for a fixed real number , is also a valid choice.  "
},
{
  "id": "exercises-transport-5",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-5",
  "type": "Exercise",
  "number": "6.5.5",
  "title": "",
  "body": " Suppose were an absurdly large number. Solve the transportation problem:                                                                                               "
},
{
  "id": "exercises-transport-6",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-6",
  "type": "Exercise",
  "number": "6.5.6",
  "title": "",
  "body": "  Solve the following transportation problems.                                                                                                                                                                                                                                           "
},
{
  "id": "ex-hoverbike",
  "level": "2",
  "url": "sec-exercisestransports.html#ex-hoverbike",
  "type": "Exercise",
  "number": "6.5.7",
  "title": "",
  "body": " On the planet Zeltros, a luxury resort is preparing for a multi-day celebration they are hosting. One of the requested activities by the guests is hoverbike riding. Over the three day event, they will require hoverbikes on the first day, hoverbikes on the second and hoverbikes on the final day.  Brand new hoverbikes are credits. After use they undergo a maintenance procedure which costs credits and takes two days, before they may be used again. A rush job that takes one day is possible but costs credits.  The resort naturally wishes to minimize their costs. They wish to know how many bikes to purchase and what maintenance schedule would achieve this.  Model this as a transportation problem where the warehouses are the number of brand new hoverbikes purchased before day 1, used hoverbikes from day 1 and used hoverbikes from day 2. Can we make educated guesses on what these capacities should be? What should the markets represent and what are their demands? Then solve the problem.  "
},
{
  "id": "exercises-transport-8",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-8",
  "type": "Exercise",
  "number": "6.5.8",
  "title": "",
  "body": "  Solve the following assignment problem using both and as a transportation problem using .                                                      "
},
{
  "id": "ex-assignment",
  "level": "2",
  "url": "sec-exercisestransports.html#ex-assignment",
  "type": "Exercise",
  "number": "6.5.9",
  "title": "",
  "body": "  Solve the following assignment problems.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
},
{
  "id": "exercises-transport-10",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-10",
  "type": "Exercise",
  "number": "6.5.10",
  "title": "",
  "body": " Some of the problems in have multiple solutions. Identify them and identify all the optimal solutions.  "
},
{
  "id": "exercises-transport-11",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-11",
  "type": "Exercise",
  "number": "6.5.11",
  "title": "",
  "body": "  Consider a general balanced transportation problem. Let denote the supply of the warehouses, and denote the demand of the markets. Then let denote the cost to ship from warehouse to market .     Write out a noncanonical minimization problem which models this problem (there should be some equality constraints).      State the dual problem to the transportation problem.      Prove that in , for a valid choice of in step 2 that How does this relate the dual problem to the transportation problem?      Consider the nonnegativity condition in step 4 of . How does this relate to the constraints of the dual problem to the transportation problem?    "
},
{
  "id": "exercises-transport-12",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-12",
  "type": "Exercise",
  "number": "6.5.12",
  "title": "",
  "body": " Consider an assignment problem treated as a transportation problem. Apply VAM ( ) to this initial tableau. Show that the resulting basis generated has selected entries where the shipment along those entries ( ) is zero.  "
},
{
  "id": "exercises-transport-13",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-13",
  "type": "Exercise",
  "number": "6.5.13",
  "title": "",
  "body": " Prove that the Transportation Algorithm will lead to an optimal solution after a finite number of steps if the algorithm is applied to a problem with all data rational.  "
},
{
  "id": "ex-shortestpathassignmentparticular",
  "level": "2",
  "url": "sec-exercisestransports.html#ex-shortestpathassignmentparticular",
  "type": "Exercise",
  "number": "6.5.14",
  "title": "",
  "body": "  Consider the following network:   A Network Flow depicting several islands with bridges and carrying capacity.    where the labels on each edge denote the distance from to .  (More about directed weighted networks may be found in )     Consider an assignment problem with sources and sinks  such that the cost of from shipping from to is the label on the edge. Let the cost from shipping from to be 0. For each , let the cost of shipping from to itself be 0. Let every other cost be an absurdly high .  Solve this assignment problem.      For your optimal solution, if  ships to , highlight the corresponding edge on the network above. If a vertex ships to itself, highlight that vertex. Disregard the case when ships to . What can you say about the highlighted edges? What may be reasonable conjectures about these edges?    "
},
{
  "id": "exercises-transport-15",
  "level": "2",
  "url": "sec-exercisestransports.html#exercises-transport-15",
  "type": "Exercise",
  "number": "6.5.15",
  "title": "",
  "body": "  Consider a general directed weighted network with vertices with a unique source and sink , and all weights on edges are positive such as (see for more information).  We will be considering assignment problems where warehouses and markets are the vertices . Throughout this problem, let be an absurdly large number.     Consider an assignment problem where the cost of shipping from to is the weight on that edge if it exists and otherwise. Show that any solution to the assignment problem (not necessarily optimal) is bijective with the set of possible unions of disjoint cycles on the network.      Suppose we adjust the previous assignment problem where the cost of shipping from to is 0. Show that solutions to this assignment problem are bijective with the union of disjoint cycles and path from to on this network.      Suppose we then further adjust this assignment problem by setting the cost to ship from to itself for any to be 0. Show that an optimal solution to this problem must be a shortest path from to .    "
},
{
  "id": "sec-networkflow",
  "level": "1",
  "url": "sec-networkflow.html",
  "type": "Section",
  "number": "7.1",
  "title": "Directed Graphs and Network Flow",
  "body": " Directed Graphs and Network Flow   In this section, we introduce capacitated networks and flows.     Consider a series of islands with bridges between them. A group of people are trying to move from island to island . Due to the length\/width of the bridges, only but so many people can move between a pair of islands in a minute, and these are labeled. The bridges, represented by arrows below, also only allow movement in one direction. Some pairs of islands have two bridges between them, one going in each direction.   A Network Flow depicting several islands with bridges and carrying capacity.       Conjecture a solution to the maximum number of people that can arrive at in a minute.      If you could increase the capacity of a single bridge to increase the number of people who can travel to in a minute, which would it be and by how much?      directed graph  network  graph, directed  capacitated network  network, capacitated  flow   A directed graph or network is a pair where is a set of vertices and is a set of ordered pairs of distinct elements of called edges .  A network is capacitated if for each edge we assign a nonnegative capacity . (If there is no edge from to , we may equivalently say that .)  A flow assigned to a capacitated network is an assignment to each edge a value such that . (If there is no edge from to , what must be?)      Graph theory is a rich, complex and deep area of study. Graph Theorists study a variety of graphs or objects called graphs, with a wide range of conventions. For the purposes of this chapter, graphs are directed, there is at most two edges between graphs (one in each direction), and loops are disallowed. Note that in general some or any of these conventions can be modified or removed.     flow, net input  net input flow  source  sink  intermediary vertex   For any vertex , the net input flow at vertex is   If then we say is called a source .  If then we say is called a sink .  If then we say is called an intermediary vertex .      For the network in , find three different flows, including one you believe is an optimal flow.    For each flow you found, identify the sources, sinks, and intermediary vertices.     For each flow you found, compute the sum .      conservation of flow  theorem, conservation of flow  Conservation of Flow   For a capacitated network , for any flow on .      Prove .      Consider the network:  A network with multiple sources and sinks.        Find a (not necessarily optimal!) flow through this network with exactly two sources and exactly two sinks.      Add two vertices to this network: , and two edges from to two vertices, and two edges to from two different vertices, each with infinite capacity, and extend the above flow to those edges so that this flow has a unique source and sink.       To be able to address the sort of questions we wish to ask, we will restrict ourselves to networks with a unique fixed source or sink, with no edges from the sink or to the source. In light of , this is not really much of a restriction.      Suppose we have a capacitated network with a unique fixed source and sink . We wish to define a maximization linear optimization problem with decision variables .     Define the objective function both in terms of variables and . Explain why these are equivalent (can you prove it?).      For each edge , there is a natural inequality constraint for the decision variables associated with this edge. What is this inequality?      For each vertex not our source or sink, there is an equality constraint for the decision variables associated with this vertex. Which of the following represents this equality?                                      There is an additional type of inequality for this problem, what is it?      Write out the primal max problem for as a noncanonical Tucker tableau.      Solve this problem:          Let denote the dual variable for associated with vertex and let denote the dual variable associated with edge .  Describe the dual min problem.     "
},
{
  "id": "exploration-flow",
  "level": "2",
  "url": "sec-networkflow.html#exploration-flow",
  "type": "Exploration",
  "number": "7.1.1",
  "title": "",
  "body": "  Consider a series of islands with bridges between them. A group of people are trying to move from island to island . Due to the length\/width of the bridges, only but so many people can move between a pair of islands in a minute, and these are labeled. The bridges, represented by arrows below, also only allow movement in one direction. Some pairs of islands have two bridges between them, one going in each direction.   A Network Flow depicting several islands with bridges and carrying capacity.       Conjecture a solution to the maximum number of people that can arrive at in a minute.      If you could increase the capacity of a single bridge to increase the number of people who can travel to in a minute, which would it be and by how much?    "
},
{
  "id": "def-directedgraph",
  "level": "2",
  "url": "sec-networkflow.html#def-directedgraph",
  "type": "Definition",
  "number": "7.1.2",
  "title": "",
  "body": " directed graph  network  graph, directed  capacitated network  network, capacitated  flow   A directed graph or network is a pair where is a set of vertices and is a set of ordered pairs of distinct elements of called edges .  A network is capacitated if for each edge we assign a nonnegative capacity . (If there is no edge from to , we may equivalently say that .)  A flow assigned to a capacitated network is an assignment to each edge a value such that . (If there is no edge from to , what must be?)   "
},
{
  "id": "sec-networkflow-5",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-5",
  "type": "Note",
  "number": "7.1.3",
  "title": "",
  "body": "  Graph theory is a rich, complex and deep area of study. Graph Theorists study a variety of graphs or objects called graphs, with a wide range of conventions. For the purposes of this chapter, graphs are directed, there is at most two edges between graphs (one in each direction), and loops are disallowed. Note that in general some or any of these conventions can be modified or removed.   "
},
{
  "id": "def-netinput",
  "level": "2",
  "url": "sec-networkflow.html#def-netinput",
  "type": "Definition",
  "number": "7.1.4",
  "title": "",
  "body": " flow, net input  net input flow  source  sink  intermediary vertex   For any vertex , the net input flow at vertex is   If then we say is called a source .  If then we say is called a sink .  If then we say is called an intermediary vertex .   "
},
{
  "id": "sec-networkflow-7",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-7",
  "type": "Activity",
  "number": "7.1.5",
  "title": "",
  "body": "  For the network in , find three different flows, including one you believe is an optimal flow.    For each flow you found, identify the sources, sinks, and intermediary vertices.     For each flow you found, compute the sum .    "
},
{
  "id": "thm-conservation",
  "level": "2",
  "url": "sec-networkflow.html#thm-conservation",
  "type": "Theorem",
  "number": "7.1.6",
  "title": "Conservation of Flow.",
  "body": " conservation of flow  theorem, conservation of flow  Conservation of Flow   For a capacitated network , for any flow on .   "
},
{
  "id": "sec-networkflow-9",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-9",
  "type": "Activity",
  "number": "7.1.7",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "activity-uniquesourcesink",
  "level": "2",
  "url": "sec-networkflow.html#activity-uniquesourcesink",
  "type": "Activity",
  "number": "7.1.8",
  "title": "",
  "body": "  Consider the network:  A network with multiple sources and sinks.        Find a (not necessarily optimal!) flow through this network with exactly two sources and exactly two sinks.      Add two vertices to this network: , and two edges from to two vertices, and two edges to from two different vertices, each with infinite capacity, and extend the above flow to those edges so that this flow has a unique source and sink.    "
},
{
  "id": "sec-networkflow-11",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-11",
  "type": "Observation",
  "number": "7.1.9",
  "title": "",
  "body": "  To be able to address the sort of questions we wish to ask, we will restrict ourselves to networks with a unique fixed source or sink, with no edges from the sink or to the source. In light of , this is not really much of a restriction.   "
},
{
  "id": "sec-networkflow-12",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-12",
  "type": "Activity",
  "number": "7.1.10",
  "title": "",
  "body": "  Suppose we have a capacitated network with a unique fixed source and sink . We wish to define a maximization linear optimization problem with decision variables .     Define the objective function both in terms of variables and . Explain why these are equivalent (can you prove it?).      For each edge , there is a natural inequality constraint for the decision variables associated with this edge. What is this inequality?      For each vertex not our source or sink, there is an equality constraint for the decision variables associated with this vertex. Which of the following represents this equality?                                      There is an additional type of inequality for this problem, what is it?      Write out the primal max problem for as a noncanonical Tucker tableau.      Solve this problem:          Let denote the dual variable for associated with vertex and let denote the dual variable associated with edge .  Describe the dual min problem.    "
},
{
  "id": "sec-maxflowmincut",
  "level": "1",
  "url": "sec-maxflowmincut.html",
  "type": "Section",
  "number": "7.2",
  "title": "Max Flow - Min Cut",
  "body": " Max Flow - Min Cut   In this section, we consider an algorithm which solves for the maximum flow. We also discuss cuts , and show how duality connects flows and cuts.     Recall . Suppose that we wish to install a toll booth on these bridges so that each person going to pays a toll at least once. The cost of installing a toll booth on a bridge is proportional to it's capacity. Find three different ways to install these booths, and find what you believe is the cheapest way to do so.     cut   Given a capacitated network , a cut of is a partition of the vertex set into nonempty subsets , where .  The capacity of a cut is the sum .      From , find three different cuts and their capacities.    What cut do you think minimizes the capacity, how does this compare to your conjectured max flow for this problem?       Consider the primal maximization problem for a max flow problem for a capacitated network with unique source and unique sink :     Go through this activity twice. First for the network and max flow found for , then for a general capacitated network.     Consider the dual problem for this maximization problem where is the unconstrained dual variable for the vertex equality constraint and the is the dual variable for the capacity constraint. Verify that this problem may be written as         Verify that we may simplify the dual solution as:         Suppose . What could be? What value for would minimize the dual objective function? What happens if is huge? How would the resulting that affect the inequality ?  Repeat for , and if were either or .      Suppose each , Note that forms a cut of .  For , what is the that minimizes the objective function?  For , what is the that minimizes the objective function?  For , what is the that minimizes the objective function?  For , what is the that minimizes the objective function?  Can any cut of be modeled this way?      What is the capacity of the above cut? How does that relate to the dual problem?      Prove that the maximum flow through a network is bounded above by the minimum cut capacity.       We explore a way of generating potential minimum cuts using a maximum flow. Again recall and your proposed maximum flow .     Let , we recursively define by adding to if either:    .     .         Let . What is the cut capacity of ?       We now prove that the minimum cut capacity is equal to the maximum flow.     Why does the primal max problem achieve optimality?  Call the maximum flow , with flow on each edge .      Let , we recursively define by adding to if either:    .     .   and repeating until we stabilize, why must we eventually stabilize?      Show that for any in , there is an -path  : a sequence of vertices starting to , where between and either or .    An -path.     We would call the edges to be forward edges and  backwards edges of .      Suppose (by way of contradiction) that . There is by (c) an -path from to .  Let   Why is ?      We define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Explain why this is still a valid network flow.      Explain why has a greater value than . Why must ?      Define . Prove that for any , we have that .  (Not necessary for this proof, but to tie things in, if , what does that say about from the dual problem in ? If , what does that say about ? )      Use the result from to show that the value of is equal to the cut capacity of . (Proving the result!)      Going back to if we let for and for , what is the value of the dual min objective?      max flow-min cut theorem  theorem, max flow-min cut  Max Flow-Min Cut   Let be a capacitated directed network with unique fixed source and unique fixed sink, no edges into the source, and no edges out of the sink. Then the value of the maximal flow from to is equal to the minimal cut capacity in .      Suppose we had a nonoptimal flow , how could we adopt the procedure in to obtain a better flow?     Algorithms for Max Flow and Min Cut    Consider the following capacitated network with source and sink :    A network with multiple sources and sinks.     Recall the procedure to produce improved flows in .     Begin with the zero-flow.  A network with multiple sources and sinks.     Consider the -path . Apply  to this path. What is ?      Adjust the flow on edges by appropriately. Explain why we need not consider the edge for any future -paths.      Pick another -path where and repeat until we achieve a maximum flow.     A network with multiple sources and sinks.        Use the maximum flow and the argument in to find a minimum cut.      Ford-Fulkerson Algorithm  Ford-Fulkerson algorithm  algorithm, Ford-Fulkerson   We describe an algorithm to find the maximum flow for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with any feasible flow (including the zero flow).    Pick an -path in from to such that:   Each forward edge of satisfies .    Each backwards edge satisfies .   (If no such -path exists, GOTO 5.)    Compute     Define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Let and GOTO 2.    STOP. The flow is now optimal.       Prove that the Ford-Fulkerson Algorithm terminates at a maximum flow.    Min Cut Algorithm  min cut algorithm  algorithm, min cut   We describe an algorithm to find the minimum for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with a maximum flow and .    We add to if there is a such that either:     .     .    If there is no such , GOTO 4.    GOTO 2.    Let .  STOP form a minimum cut.       "
},
{
  "id": "sec-maxflowmincut-3",
  "level": "2",
  "url": "sec-maxflowmincut.html#sec-maxflowmincut-3",
  "type": "Exploration",
  "number": "7.2.1",
  "title": "",
  "body": "  Recall . Suppose that we wish to install a toll booth on these bridges so that each person going to pays a toll at least once. The cost of installing a toll booth on a bridge is proportional to it's capacity. Find three different ways to install these booths, and find what you believe is the cheapest way to do so.   "
},
{
  "id": "def-cut",
  "level": "2",
  "url": "sec-maxflowmincut.html#def-cut",
  "type": "Definition",
  "number": "7.2.2",
  "title": "",
  "body": " cut   Given a capacitated network , a cut of is a partition of the vertex set into nonempty subsets , where .  The capacity of a cut is the sum .   "
},
{
  "id": "activity-cutflow",
  "level": "2",
  "url": "sec-maxflowmincut.html#activity-cutflow",
  "type": "Activity",
  "number": "7.2.3",
  "title": "",
  "body": "  From , find three different cuts and their capacities.    What cut do you think minimizes the capacity, how does this compare to your conjectured max flow for this problem?    "
},
{
  "id": "activity-dualflow",
  "level": "2",
  "url": "sec-maxflowmincut.html#activity-dualflow",
  "type": "Activity",
  "number": "7.2.4",
  "title": "",
  "body": "  Consider the primal maximization problem for a max flow problem for a capacitated network with unique source and unique sink :     Go through this activity twice. First for the network and max flow found for , then for a general capacitated network.     Consider the dual problem for this maximization problem where is the unconstrained dual variable for the vertex equality constraint and the is the dual variable for the capacity constraint. Verify that this problem may be written as         Verify that we may simplify the dual solution as:         Suppose . What could be? What value for would minimize the dual objective function? What happens if is huge? How would the resulting that affect the inequality ?  Repeat for , and if were either or .      Suppose each , Note that forms a cut of .  For , what is the that minimizes the objective function?  For , what is the that minimizes the objective function?  For , what is the that minimizes the objective function?  For , what is the that minimizes the objective function?  Can any cut of be modeled this way?      What is the capacity of the above cut? How does that relate to the dual problem?      Prove that the maximum flow through a network is bounded above by the minimum cut capacity.    "
},
{
  "id": "sec-maxflowmincut-7",
  "level": "2",
  "url": "sec-maxflowmincut.html#sec-maxflowmincut-7",
  "type": "Activity",
  "number": "7.2.5",
  "title": "",
  "body": "  We explore a way of generating potential minimum cuts using a maximum flow. Again recall and your proposed maximum flow .     Let , we recursively define by adding to if either:    .     .         Let . What is the cut capacity of ?    "
},
{
  "id": "activity-maxflowmincutproof",
  "level": "2",
  "url": "sec-maxflowmincut.html#activity-maxflowmincutproof",
  "type": "Activity",
  "number": "7.2.6",
  "title": "",
  "body": "  We now prove that the minimum cut capacity is equal to the maximum flow.     Why does the primal max problem achieve optimality?  Call the maximum flow , with flow on each edge .      Let , we recursively define by adding to if either:    .     .   and repeating until we stabilize, why must we eventually stabilize?      Show that for any in , there is an -path  : a sequence of vertices starting to , where between and either or .    An -path.     We would call the edges to be forward edges and  backwards edges of .      Suppose (by way of contradiction) that . There is by (c) an -path from to .  Let   Why is ?      We define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Explain why this is still a valid network flow.      Explain why has a greater value than . Why must ?      Define . Prove that for any , we have that .  (Not necessary for this proof, but to tie things in, if , what does that say about from the dual problem in ? If , what does that say about ? )      Use the result from to show that the value of is equal to the cut capacity of . (Proving the result!)      Going back to if we let for and for , what is the value of the dual min objective?    "
},
{
  "id": "thm-maxflowmincut",
  "level": "2",
  "url": "sec-maxflowmincut.html#thm-maxflowmincut",
  "type": "Theorem",
  "number": "7.2.7",
  "title": "Max Flow-Min Cut.",
  "body": " max flow-min cut theorem  theorem, max flow-min cut  Max Flow-Min Cut   Let be a capacitated directed network with unique fixed source and unique fixed sink, no edges into the source, and no edges out of the sink. Then the value of the maximal flow from to is equal to the minimal cut capacity in .   "
},
{
  "id": "sec-maxflowmincut-10",
  "level": "2",
  "url": "sec-maxflowmincut.html#sec-maxflowmincut-10",
  "type": "Activity",
  "number": "7.2.8",
  "title": "",
  "body": "  Suppose we had a nonoptimal flow , how could we adopt the procedure in to obtain a better flow?   "
},
{
  "id": "exploration-shipmentflow",
  "level": "2",
  "url": "sec-maxflowmincut.html#exploration-shipmentflow",
  "type": "Exploration",
  "number": "7.2.9",
  "title": "",
  "body": "  Consider the following capacitated network with source and sink :    A network with multiple sources and sinks.     Recall the procedure to produce improved flows in .     Begin with the zero-flow.  A network with multiple sources and sinks.     Consider the -path . Apply  to this path. What is ?      Adjust the flow on edges by appropriately. Explain why we need not consider the edge for any future -paths.      Pick another -path where and repeat until we achieve a maximum flow.     A network with multiple sources and sinks.        Use the maximum flow and the argument in to find a minimum cut.    "
},
{
  "id": "def-maxflowalgorithm",
  "level": "2",
  "url": "sec-maxflowmincut.html#def-maxflowalgorithm",
  "type": "Definition",
  "number": "7.2.10",
  "title": "Ford-Fulkerson Algorithm.",
  "body": " Ford-Fulkerson Algorithm  Ford-Fulkerson algorithm  algorithm, Ford-Fulkerson   We describe an algorithm to find the maximum flow for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with any feasible flow (including the zero flow).    Pick an -path in from to such that:   Each forward edge of satisfies .    Each backwards edge satisfies .   (If no such -path exists, GOTO 5.)    Compute     Define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Let and GOTO 2.    STOP. The flow is now optimal.     "
},
{
  "id": "subsec-flowcutalgorithms-4",
  "level": "2",
  "url": "sec-maxflowmincut.html#subsec-flowcutalgorithms-4",
  "type": "Activity",
  "number": "7.2.11",
  "title": "",
  "body": " Prove that the Ford-Fulkerson Algorithm terminates at a maximum flow.  "
},
{
  "id": "def-mincutalgorithm",
  "level": "2",
  "url": "sec-maxflowmincut.html#def-mincutalgorithm",
  "type": "Definition",
  "number": "7.2.12",
  "title": "Min Cut Algorithm.",
  "body": " Min Cut Algorithm  min cut algorithm  algorithm, min cut   We describe an algorithm to find the minimum for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with a maximum flow and .    We add to if there is a such that either:     .     .    If there is no such , GOTO 4.    GOTO 2.    Let .  STOP form a minimum cut.     "
},
{
  "id": "sec-weighted",
  "level": "1",
  "url": "sec-weighted.html",
  "type": "Section",
  "number": "7.3",
  "title": "Weighted Graphs",
  "body": " Weighted Graphs   We now pivot to weighted networks and consider some natural optimization problems to pose about them.     Dr. Ayad is driving from her home to Fantasi College. The town is connected by a series of one way streets, each labeled with the time it would take to traverse the road.   A Network Flow depicting several nodes and edges with weights.       Suppose home for Dr. Ayad is . What is the shortest amount of time needed for her to arrive at Fantasi College on ?      Is there a unique route she could take that minimizes this time?      weighted network  network, weighted   A network is weighted if for each edge we assign (potentially negative!) weight .     path  length  distance   Give a network , a path  from , is a sequence of consecutive edges where . We say that the length of is . We say that the distance from to , , is the length of a shortest path from to .      Consider the weighted network:   A network with negative weights.      What is the shortest path from to ? (You may repeat edges.)    What if we change to ?     What is a reasonable condition for the shortest path to be well defined?      cycle  negative cycle  cycle, negative   We define a cycle in a weighted network to be a path from a vertex to itself. If the length of a cycle is negative, we call it a negative cycle .      In this activity, we model the shortest path problem as a linear optimization problem. Assume is a weighted network with no negative cycles. Let where if is in a shortest path from to .    What is the objective problem?    Maximize .    Maximize .    Maximize .    Minimize .    Minimize .    Minimize .       What inequality ensures that exactly one edge of the chosen edges is incident to ?     .     .     .     .     .     .        What inequality ensures that the chosen edges form a path?    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .        Why do we not need a constraint for ?      Model the shortest path problem in as a linear optimization problem and solve it:         As was the case in previous examples, we introduce a less cumbersome method for finding these shortest paths.   Dijkstra's Shortest Path Algorithm  Dijkstra's shortest path algorithm  algorithm, Dijkstra's shortest path   Let be a weighted network with only nonnegative weights. Then Dijkstra's Shortest Path Algorithm is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let be a vertex where .    Let .    If : STOP.    For each , let .    GOTO 2.    When the algorithm terminates, each takes on the value , the length of the shortest path from to .      We revisit the shortest path problem from .     Apply to the network in this problem and label each vertex by .      What does each represent in terms of travel time?      Consider and . Which vertex could be on a shortest path from to ?      Take your previous choice of vertex and repeat: look at the of its potential predecessors and . Recursively repeat until we reach .      What is the shortest path from to ?       We prove that in , for each via induction on .     Verify that the statement is true when .      Prove that in step 3, if we select then is adjacent to a vertex in .      Let and consider as chosen in step 3. Show that is the shortest distance from to traversing only vertices in .      Suppose (by way of contradiction) that there was a shortest path from to where the length of . Show that there must be an edge in , ) so that .      Show that in this case that . (Invoke the induction hypothesis.)      Show that the last statement produces a contradiction (why wasn't already chosen?)      Conclude that .     We present an alternative algorithm for when weights can be negative.   Shortest Path Algorithm  shortest path algorithm  algorithm, shortest path   Let be a weighted network with no negative cycles. Then an algorithm to find shortest paths is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let be a vertex where .    Let .    If : STOP.    For each , let , if has a value changed by this process, remove from and add it to .    GOTO 2.    When the algorithm terminates, , the length of the shortest path from to .      Suppose a shipping company is moving goods through a series of transportation hubs via rail. The maximum capacity in tons and the cost in thousands of dollars per ton are listed as an ordered pair:  A Network Flow depicting several hubs with rails showing capacity and cost.   The pairs are (capacity, cost) pairs (denoted ), and we are trying to ship 10 tons of goods from to .     Let's find a single path from to along which we could ship goods at the lowest possible cost. What criteria should we use to identify this path?    Maximize along this path.    Minimize along this path.    Maximize along this path.    Minimize along this path.        Find a shortest path from to .      Use this as an -path as in .      Decrease capacities of any used edges by .      Repeat - until we have a flow of 10.      Argue that this is not the lowest cost flow.      Which of the following was an issue with how this problem was approached?    The original path chosen was too expensive.    The original path forced us into poor choices of future paths.    There was no mechanism to backtrack or adjust previous choices.         We model the shipping problem in as a linear optimization problem. Let denote the quantity in tons of goods shipped from to .     What is the objective function of this problem?     .     .     .     .     .     .        For each edge, there is a constraint for the shipping capacity of that edge. What (in)equality represents that capacity?     .     .     .     .     .     .        For each vertex excluding the source and sink, what (in)equality represents the conservation of flow?     .     .     .        Let be the total amount of goods to be shipped, in this case . What equality represents this constraint?     .     .     .     .     .     .        Write out the linear optimization problem modeling and solve it.         We return to with an adjustment to the procedure there to enable adjusting previously chosen paths.     Once again, find the shortest path from to , and use this as an -path as in .      Now in addition to decreasing the capacities of used edges by , add a backwards edge with capacity and negative weight .  Pick any path from to that traverses a backwards negative edge. What does shipping along this path represent in terms of determining a new shipping procedure.  Test your ideas out on a few different paths traversing negative edges.      Find the shortest path along this adjusted graph and treat it as an -path.      What does this second chosen shortest path represent in terms of shipping goods?      Have you now achieved a minimal cost flow shipping 10 tons of goods?     We now formalize this idea of adjusting previous choices to an algorithm:   Minimum Cost Flow Algorithm  minimum cost flow algorithm  algorithm, minimum cost flow   The steps for the Minimum Cost Flow Algorithm are as follows:    INITIALIZE: Let be a weighted capacitated network with a unique source and sink , with no edges going into the source and no edges coming out of the sink. We start with the zero flow for each edge . Let be the desired total flow.    If , STOP, we have reached a total flow of .    Form a weighted network as follows:   Let .    Let if and only if . Let .    Let if and only if . Let .       Apply Dijkstra's Shortest Path Algorithm on to find the shortest path from to . If no path exists STOP, there is no flow with total value .    Find the -path corresponding to the shortest path found in (4). Let     Add to each forward in , and subtract from each backwards in .    GOTO 2.      "
},
{
  "id": "exploration-path",
  "level": "2",
  "url": "sec-weighted.html#exploration-path",
  "type": "Exploration",
  "number": "7.3.1",
  "title": "",
  "body": "  Dr. Ayad is driving from her home to Fantasi College. The town is connected by a series of one way streets, each labeled with the time it would take to traverse the road.   A Network Flow depicting several nodes and edges with weights.       Suppose home for Dr. Ayad is . What is the shortest amount of time needed for her to arrive at Fantasi College on ?      Is there a unique route she could take that minimizes this time?    "
},
{
  "id": "def-weightedgraph",
  "level": "2",
  "url": "sec-weighted.html#def-weightedgraph",
  "type": "Definition",
  "number": "7.3.2",
  "title": "",
  "body": " weighted network  network, weighted   A network is weighted if for each edge we assign (potentially negative!) weight .   "
},
{
  "id": "def-path",
  "level": "2",
  "url": "sec-weighted.html#def-path",
  "type": "Definition",
  "number": "7.3.3",
  "title": "",
  "body": " path  length  distance   Give a network , a path  from , is a sequence of consecutive edges where . We say that the length of is . We say that the distance from to , , is the length of a shortest path from to .   "
},
{
  "id": "sec-weighted-6",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-6",
  "type": "Activity",
  "number": "7.3.4",
  "title": "",
  "body": "  Consider the weighted network:   A network with negative weights.      What is the shortest path from to ? (You may repeat edges.)    What if we change to ?     What is a reasonable condition for the shortest path to be well defined?    "
},
{
  "id": "def-negativecycle",
  "level": "2",
  "url": "sec-weighted.html#def-negativecycle",
  "type": "Definition",
  "number": "7.3.5",
  "title": "",
  "body": " cycle  negative cycle  cycle, negative   We define a cycle in a weighted network to be a path from a vertex to itself. If the length of a cycle is negative, we call it a negative cycle .   "
},
{
  "id": "sec-weighted-8",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-8",
  "type": "Activity",
  "number": "7.3.6",
  "title": "",
  "body": "  In this activity, we model the shortest path problem as a linear optimization problem. Assume is a weighted network with no negative cycles. Let where if is in a shortest path from to .    What is the objective problem?    Maximize .    Maximize .    Maximize .    Minimize .    Minimize .    Minimize .       What inequality ensures that exactly one edge of the chosen edges is incident to ?     .     .     .     .     .     .        What inequality ensures that the chosen edges form a path?    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .        Why do we not need a constraint for ?      Model the shortest path problem in as a linear optimization problem and solve it:        "
},
{
  "id": "def-DijkstrasAlgorithm",
  "level": "2",
  "url": "sec-weighted.html#def-DijkstrasAlgorithm",
  "type": "Definition",
  "number": "7.3.7",
  "title": "Dijkstra’s Shortest Path Algorithm.",
  "body": " Dijkstra's Shortest Path Algorithm  Dijkstra's shortest path algorithm  algorithm, Dijkstra's shortest path   Let be a weighted network with only nonnegative weights. Then Dijkstra's Shortest Path Algorithm is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let be a vertex where .    Let .    If : STOP.    For each , let .    GOTO 2.    When the algorithm terminates, each takes on the value , the length of the shortest path from to .   "
},
{
  "id": "sec-weighted-11",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-11",
  "type": "Activity",
  "number": "7.3.8",
  "title": "",
  "body": "  We revisit the shortest path problem from .     Apply to the network in this problem and label each vertex by .      What does each represent in terms of travel time?      Consider and . Which vertex could be on a shortest path from to ?      Take your previous choice of vertex and repeat: look at the of its potential predecessors and . Recursively repeat until we reach .      What is the shortest path from to ?    "
},
{
  "id": "sec-weighted-12",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-12",
  "type": "Activity",
  "number": "7.3.9",
  "title": "",
  "body": "  We prove that in , for each via induction on .     Verify that the statement is true when .      Prove that in step 3, if we select then is adjacent to a vertex in .      Let and consider as chosen in step 3. Show that is the shortest distance from to traversing only vertices in .      Suppose (by way of contradiction) that there was a shortest path from to where the length of . Show that there must be an edge in , ) so that .      Show that in this case that . (Invoke the induction hypothesis.)      Show that the last statement produces a contradiction (why wasn't already chosen?)      Conclude that .    "
},
{
  "id": "def-otheralgorithm",
  "level": "2",
  "url": "sec-weighted.html#def-otheralgorithm",
  "type": "Definition",
  "number": "7.3.10",
  "title": "Shortest Path Algorithm.",
  "body": " Shortest Path Algorithm  shortest path algorithm  algorithm, shortest path   Let be a weighted network with no negative cycles. Then an algorithm to find shortest paths is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let be a vertex where .    Let .    If : STOP.    For each , let , if has a value changed by this process, remove from and add it to .    GOTO 2.    When the algorithm terminates, , the length of the shortest path from to .   "
},
{
  "id": "exploration-shipping",
  "level": "2",
  "url": "sec-weighted.html#exploration-shipping",
  "type": "Exploration",
  "number": "7.3.11",
  "title": "",
  "body": "  Suppose a shipping company is moving goods through a series of transportation hubs via rail. The maximum capacity in tons and the cost in thousands of dollars per ton are listed as an ordered pair:  A Network Flow depicting several hubs with rails showing capacity and cost.   The pairs are (capacity, cost) pairs (denoted ), and we are trying to ship 10 tons of goods from to .     Let's find a single path from to along which we could ship goods at the lowest possible cost. What criteria should we use to identify this path?    Maximize along this path.    Minimize along this path.    Maximize along this path.    Minimize along this path.        Find a shortest path from to .      Use this as an -path as in .      Decrease capacities of any used edges by .      Repeat - until we have a flow of 10.      Argue that this is not the lowest cost flow.      Which of the following was an issue with how this problem was approached?    The original path chosen was too expensive.    The original path forced us into poor choices of future paths.    There was no mechanism to backtrack or adjust previous choices.      "
},
{
  "id": "sec-weighted-16",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-16",
  "type": "Activity",
  "number": "7.3.12",
  "title": "",
  "body": "  We model the shipping problem in as a linear optimization problem. Let denote the quantity in tons of goods shipped from to .     What is the objective function of this problem?     .     .     .     .     .     .        For each edge, there is a constraint for the shipping capacity of that edge. What (in)equality represents that capacity?     .     .     .     .     .     .        For each vertex excluding the source and sink, what (in)equality represents the conservation of flow?     .     .     .        Let be the total amount of goods to be shipped, in this case . What equality represents this constraint?     .     .     .     .     .     .        Write out the linear optimization problem modeling and solve it.      "
},
{
  "id": "sec-weighted-17",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-17",
  "type": "Activity",
  "number": "7.3.13",
  "title": "",
  "body": "  We return to with an adjustment to the procedure there to enable adjusting previously chosen paths.     Once again, find the shortest path from to , and use this as an -path as in .      Now in addition to decreasing the capacities of used edges by , add a backwards edge with capacity and negative weight .  Pick any path from to that traverses a backwards negative edge. What does shipping along this path represent in terms of determining a new shipping procedure.  Test your ideas out on a few different paths traversing negative edges.      Find the shortest path along this adjusted graph and treat it as an -path.      What does this second chosen shortest path represent in terms of shipping goods?      Have you now achieved a minimal cost flow shipping 10 tons of goods?    "
},
{
  "id": "def-mincostflowalgorithm",
  "level": "2",
  "url": "sec-weighted.html#def-mincostflowalgorithm",
  "type": "Definition",
  "number": "7.3.14",
  "title": "Minimum Cost Flow Algorithm.",
  "body": " Minimum Cost Flow Algorithm  minimum cost flow algorithm  algorithm, minimum cost flow   The steps for the Minimum Cost Flow Algorithm are as follows:    INITIALIZE: Let be a weighted capacitated network with a unique source and sink , with no edges going into the source and no edges coming out of the sink. We start with the zero flow for each edge . Let be the desired total flow.    If , STOP, we have reached a total flow of .    Form a weighted network as follows:   Let .    Let if and only if . Let .    Let if and only if . Let .       Apply Dijkstra's Shortest Path Algorithm on to find the shortest path from to . If no path exists STOP, there is no flow with total value .    Find the -path corresponding to the shortest path found in (4). Let     Add to each forward in , and subtract from each backwards in .    GOTO 2.     "
},
{
  "id": "sec-summaryflow",
  "level": "1",
  "url": "sec-summaryflow.html",
  "type": "Section",
  "number": "7.4",
  "title": "Summary of Chapter 7",
  "body": " Summary of  We use introduce the notion of networks , a pair where is a set of vertices and is a set of ordered pairs of vertices called edges . We also discuss capacitated networks where each edge has a capacity  . For capacitated networks with designated sources and sinks , we can define a flow , an assignment to each edge so that for any non source\/sink vertex we have that We focus on capacitated networks with a unique source and sink, with no edges going into the source or out of the sink.  Finding a maximum flow on such a network may be solved as a linear optimization problem: Another problem on such a network is the minimum cut , a cut is a pair so the is the disjoint union on , and . The capacity of a cut is the sum Careful analysis of the dual problem to the maximum flow problem shows that the capacity of any cut is an upper bound for the value of any flow.   A linear optimization formulation of maximum flow and minimum cut.    The Ford-Fulkerson Algorithm  identifies a maximum flow. Then, starting with , we recursively add vertices to if there is an edge from to which is not at maximum capacity, or a backwards edge from to . When this is done, we let and this forms a cut who by construction, has the same capacity as the maximum flow. So by the Weak Duality Theorem, both are optimal.   The Ford-Fulkerson algorithm and finding max flows\/min cuts.    Another type of network is a weighted network, where each edge has a potentially negative weight . Dijkstra's Shortest Path Algorithm  describes an algorithm which identifies the distance (sum of weights) from a starting source to any other vertex in the network, by labeling each vertex with the current shortest distance from to and relabeling and readjusting as shorter distances are found.   Dijkstra's Shortest Path algorithm and finding the shortest path between vertices.    The shortest path algorithm has a useful application in the Minimum Cost Flow Algorithm . In this problem, we try to find a flow of value from to on a weighted capacitated network that minimizes the cost to do so. One can identify shortest paths from to and increase flows along this path, and repeat recursively. However, doing so greedily may result in nonoptimal solutions. We construct a second network where backwards edges with negative weight are added for flows on to represent the ability to reduce flow along edges, and the shortest paths are found on . Doing so repeatedly results in the actual minimum cost flow.   Minimum Cost Flow algorithm and finding the minimum cost flow of a given value.    "
},
{
  "id": "sec-summaryflow-2",
  "level": "2",
  "url": "sec-summaryflow.html#sec-summaryflow-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "networks vertices edges capacitated networks capacity sources sinks flow "
},
{
  "id": "sec-summaryflow-3",
  "level": "2",
  "url": "sec-summaryflow.html#sec-summaryflow-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maximum flow minimum cut cut capacity "
},
{
  "id": "figure-videochapter7LOFormulation",
  "level": "2",
  "url": "sec-summaryflow.html#figure-videochapter7LOFormulation",
  "type": "Figure",
  "number": "7.4.1",
  "title": "",
  "body": " A linear optimization formulation of maximum flow and minimum cut.   "
},
{
  "id": "sec-summaryflow-5",
  "level": "2",
  "url": "sec-summaryflow.html#sec-summaryflow-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ford-Fulkerson Algorithm "
},
{
  "id": "figure-videochapter7FordFulkerson",
  "level": "2",
  "url": "sec-summaryflow.html#figure-videochapter7FordFulkerson",
  "type": "Figure",
  "number": "7.4.2",
  "title": "",
  "body": " The Ford-Fulkerson algorithm and finding max flows\/min cuts.   "
},
{
  "id": "sec-summaryflow-7",
  "level": "2",
  "url": "sec-summaryflow.html#sec-summaryflow-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted Dijkstra's Shortest Path Algorithm "
},
{
  "id": "figure-videochapter7shortestpath",
  "level": "2",
  "url": "sec-summaryflow.html#figure-videochapter7shortestpath",
  "type": "Figure",
  "number": "7.4.3",
  "title": "",
  "body": " Dijkstra's Shortest Path algorithm and finding the shortest path between vertices.   "
},
{
  "id": "figure-videochapter7mincostflow",
  "level": "2",
  "url": "sec-summaryflow.html#figure-videochapter7mincostflow",
  "type": "Figure",
  "number": "7.4.4",
  "title": "",
  "body": " Minimum Cost Flow algorithm and finding the minimum cost flow of a given value.   "
},
{
  "id": "sec-exercisesflow",
  "level": "1",
  "url": "sec-exercisesflow.html",
  "type": "Section",
  "number": "7.5",
  "title": "Problems for Chapter 7",
  "body": " Problems for   The simplex pivoter may be found here:          Consider the following capacitated network and given flow:  A Network Flow depicting several islands with bridges and carrying capacity.        Find for each vertex, and compute .      Classify each vertex as a source, sink or intermediate vertex.      Add two vertices and as few edges as possible to extend this flow to a flow with a unique source and unique sink       For each of the following capacitated networks, find the max-flow and min-cut on these networks as shown in .       A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.          Consider the max-flow min-cut problem  .     Write out the noncanonical maximization problem which would compute the max-flow.      Record this problem in a Tucker tableau, then record the dual variable using to denote dual variables associated with vertex equality constraints and to denote the dual variables for edge inequality constraint.     Verify that the max-flow and min-cut you found are feasible solutions to these problems (using the convention that if , if and if and otherwise.)     Argue that any cut corresponds to a feasible solution to this dual problem.      How can we tell both the flow and cut found in  are optimal? (Think duality.)       Over a month at a hospital many patients are in need of blood transfusions. They had available blood from 47 donors with type A blood, 33 donors with type B blood, 46 donors with type AB and 44 donors with type O. There were 38 patients with type A blood, 39 patients with type B blood, 49 patients with type AB and 43 patients with type O. Type A patients can only receive type A or O, type B patients can receive only type B or O, type O patients can receive only type O, and type AB patients can receive any of the four types.     Construct a capacitated network which models the distributions of blood type from donors to patients with a unique source and sink, with no edges into the source or out of the sink.      Find a max-flow for this network.      Find a min-cut for this network.      If not all patients were able to receive blood, explain to the financial backers and hospital administrators, who may not have taken any math in awhile, why this was the case.      There's little a hospital can do about the blood types of incoming patients. If reaching out to potential donors, what blood types should be prioritized?       Let be a capacitated network with a unique source and sink, with no edges going into the source or out of the sink. Let be a flow on this network with value , and be a cut of this network. Then prove that     What is the sum ? How can rewriting this as a double sum help?      Let be a capacitated network with a unique source and sink, with no edges going into the source or out of the sink.     Given an example for such that has nonunique max-flows.      Given an example for such that has nonunique min-cuts.      Let denote any max-flow for with value and denote any min-cut (not necessarily produced by and ). Let be the cut generated via .  Prove that for any .    Use .      Let be two distinct max-flows on , and be the cuts produced by on with these flows respectively. Prove that .    Use previous part.       For each of the following, find the shortest path from to using .       A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.         Consider  . Model this problem as a linear optimization problem and solve.     Let be a weighted network with positive weights. For the following, prove or find a counterexample:     Let . Prove that the value of the shortest path from to is the sum of the value of the shortest path from to plus the value of the shortest path from to .      Suppose there was an edge going into , then fails.       For each of the following, find the minimum cost-flows for and . Interpret each ordered pair as (capacity,cost).       A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.         Model  as a linear optimization problem.    For each problem in , draw a weighted capacitated network where the transportation problem may be solved by solving an appropriate min-cost flow problem. State what the value of the flow should be. Do not solve the problem.    For each problem in , draw a weighted capacitated network where the transportation problem may be solved by solving an appropriate min-cost flow problem. State what the value of the flow should be. Do not solve the problem.    "
},
{
  "id": "exercises-flow-1",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-1",
  "type": "Exercise",
  "number": "7.5.1",
  "title": "",
  "body": "  Consider the following capacitated network and given flow:  A Network Flow depicting several islands with bridges and carrying capacity.        Find for each vertex, and compute .      Classify each vertex as a source, sink or intermediate vertex.      Add two vertices and as few edges as possible to extend this flow to a flow with a unique source and unique sink    "
},
{
  "id": "ex-maxflowmincut",
  "level": "2",
  "url": "sec-exercisesflow.html#ex-maxflowmincut",
  "type": "Exercise",
  "number": "7.5.2",
  "title": "",
  "body": "  For each of the following capacitated networks, find the max-flow and min-cut on these networks as shown in .       A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.       "
},
{
  "id": "exercises-flow-3",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-3",
  "type": "Exercise",
  "number": "7.5.3",
  "title": "",
  "body": "  Consider the max-flow min-cut problem  .     Write out the noncanonical maximization problem which would compute the max-flow.      Record this problem in a Tucker tableau, then record the dual variable using to denote dual variables associated with vertex equality constraints and to denote the dual variables for edge inequality constraint.     Verify that the max-flow and min-cut you found are feasible solutions to these problems (using the convention that if , if and if and otherwise.)     Argue that any cut corresponds to a feasible solution to this dual problem.      How can we tell both the flow and cut found in  are optimal? (Think duality.)    "
},
{
  "id": "exercises-flow-4",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-4",
  "type": "Exercise",
  "number": "7.5.4",
  "title": "",
  "body": "  Over a month at a hospital many patients are in need of blood transfusions. They had available blood from 47 donors with type A blood, 33 donors with type B blood, 46 donors with type AB and 44 donors with type O. There were 38 patients with type A blood, 39 patients with type B blood, 49 patients with type AB and 43 patients with type O. Type A patients can only receive type A or O, type B patients can receive only type B or O, type O patients can receive only type O, and type AB patients can receive any of the four types.     Construct a capacitated network which models the distributions of blood type from donors to patients with a unique source and sink, with no edges into the source or out of the sink.      Find a max-flow for this network.      Find a min-cut for this network.      If not all patients were able to receive blood, explain to the financial backers and hospital administrators, who may not have taken any math in awhile, why this was the case.      There's little a hospital can do about the blood types of incoming patients. If reaching out to potential donors, what blood types should be prioritized?    "
},
{
  "id": "exercise-outflow",
  "level": "2",
  "url": "sec-exercisesflow.html#exercise-outflow",
  "type": "Exercise",
  "number": "7.5.5",
  "title": "",
  "body": "  Let be a capacitated network with a unique source and sink, with no edges going into the source or out of the sink. Let be a flow on this network with value , and be a cut of this network. Then prove that     What is the sum ? How can rewriting this as a double sum help?   "
},
{
  "id": "exercises-flow-6",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-6",
  "type": "Exercise",
  "number": "7.5.6",
  "title": "",
  "body": "  Let be a capacitated network with a unique source and sink, with no edges going into the source or out of the sink.     Given an example for such that has nonunique max-flows.      Given an example for such that has nonunique min-cuts.      Let denote any max-flow for with value and denote any min-cut (not necessarily produced by and ). Let be the cut generated via .  Prove that for any .    Use .      Let be two distinct max-flows on , and be the cuts produced by on with these flows respectively. Prove that .    Use previous part.    "
},
{
  "id": "ex-shortestpath",
  "level": "2",
  "url": "sec-exercisesflow.html#ex-shortestpath",
  "type": "Exercise",
  "number": "7.5.7",
  "title": "",
  "body": "  For each of the following, find the shortest path from to using .       A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.       "
},
{
  "id": "exercises-flow-8",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-8",
  "type": "Exercise",
  "number": "7.5.8",
  "title": "",
  "body": " Consider  . Model this problem as a linear optimization problem and solve.  "
},
{
  "id": "exercises-flow-9",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-9",
  "type": "Exercise",
  "number": "7.5.9",
  "title": "",
  "body": "  Let be a weighted network with positive weights. For the following, prove or find a counterexample:     Let . Prove that the value of the shortest path from to is the sum of the value of the shortest path from to plus the value of the shortest path from to .      Suppose there was an edge going into , then fails.    "
},
{
  "id": "ex-minflow",
  "level": "2",
  "url": "sec-exercisesflow.html#ex-minflow",
  "type": "Exercise",
  "number": "7.5.10",
  "title": "",
  "body": "  For each of the following, find the minimum cost-flows for and . Interpret each ordered pair as (capacity,cost).       A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.           A Network Flow depicting several islands with bridges and carrying capacity.       "
},
{
  "id": "exercises-flow-11",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-11",
  "type": "Exercise",
  "number": "7.5.11",
  "title": "",
  "body": " Model  as a linear optimization problem.  "
},
{
  "id": "exercises-flow-12",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-12",
  "type": "Exercise",
  "number": "7.5.12",
  "title": "",
  "body": " For each problem in , draw a weighted capacitated network where the transportation problem may be solved by solving an appropriate min-cost flow problem. State what the value of the flow should be. Do not solve the problem.  "
},
{
  "id": "exercises-flow-13",
  "level": "2",
  "url": "sec-exercisesflow.html#exercises-flow-13",
  "type": "Exercise",
  "number": "7.5.13",
  "title": "",
  "body": " For each problem in , draw a weighted capacitated network where the transportation problem may be solved by solving an appropriate min-cost flow problem. State what the value of the flow should be. Do not solve the problem.  "
},
{
  "id": "sec-branchbound",
  "level": "1",
  "url": "sec-branchbound.html",
  "type": "Section",
  "number": "8.1",
  "title": "Branch and Bound Method",
  "body": " Branch and Bound Method   We begin motivating integer optimization problem, and explore an algebraically centered method for solving them.     Suppose the witch Agnesi also goes into the business of selling food, meat sandwiches and meat pies. Each day she is able to acquire 50 oz of mystery meat (don't ask) and 30 oz of flour. The sandwiches take 8 oz of meat and 2 oz of flour, the pies take 3oz of meat and 5 oz of flour. She is able to sell the sandwiches for 10 gold pieces and the pies for 7 gold pieces.     Agnesi wishes to be able to produce sandwiches and pies in a way to maximize her income. Set up this problem as a linear optimization problem and solve.          What are some problems with this solution? Without trying to explicitly find the optimal solution, estimate how far off your current solution is from the optimal.      How many sandwiches and pies should she actually sell to maximize her income?       After the local barber has been arrested, demand for Agnesi's pies sees an increase, and she is able to now sell them for 12 gold pieces. Now what production level maximizes her income?        A linear optimization problem where all solutions must be integers is called an integer optimization problem . If the condition that solutions be integers are relaxed, this is called the relaxation of the integer optimization problem.       Come up with three realistic optimization problems which are best modeled by an integer optimization problem. You do not need to work out all the details or solve the problems.      Consider an integer optimization maximization problem whose relaxation achieves an optimal solution. Which of the following are true about the integer optimization problem?    The integer problem achieves an optimal solution that is equal to the optimal solution of the relaxation.    The integer problem achieves an optimal solution that is less than to the optimal solution of the relaxation.    The integer problem achieves an optimal solution that is greater than to the optimal solution of the relaxation.    The integer problem is infeasible.    The integer problem is unbounded above.         The branch and bound method is a way to systematically add bounds to a linear optimization problem to ensure the solution is integral.  We examine the integer optimization problem from , and its relaxation.     Let be the number of sandwiches sold, and consider the current optimal from the relaxation. Which two of the following potential additional constraints would force the value of to be an integer, while remaining as close to the optimal solution of the relaxation as possible.     .     .     .     .     .     .     .     .        Let us consider the additional constraint . Solve the resulting general linear optimization problem:        A Tree Diagram describing additional constraints.         What additional constraints on would ensure that would be integral while changing as little as possible?      Consider the additional constraint . Solve this maximization problem. Why do we no longer need to adjust ? Are we guaranteed that this solution is optimal?    A Tree Diagram describing additional constraints.         We consider the constraint instead. Solve this maximization problem. Even though the solution is not integral, why do we no longer need to pursue the case where ?    A Tree Diagram describing additional constraints.         We return to the other possible initial constraint for , . Solve this maximization problem. What are the possible constraints we could now add for ?    A Tree Diagram describing additional constraints.         We consider now the constraint . Solve this maximization problem. If this solution integral?      Now in addition to the , we have two choices for an additional constraint on , one constraint, and one constraint. Solve the system with each of these additional constraints. If any of the solutions are integral, how do they compare with previous integral solutions that we have found?    A Tree Diagram describing additional constraints.         One of the constraints in the previous task results in an nonintegral solution. Nevertheless, we no longer need to continue to add constraints to this problem to obtain an integral solution. Why not?      Now instead of the constraint we had above, we now consider the constraint . Solve this maximization problem. Why do we no longer need to consider the case where ?      How do we know we now have arrived at the optimal solution?    A Tree Diagram describing additional constraints.          The Branch and Bound Algorithm for solving an integer optimization maximization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer optimization problem.    Solve the relaxation of the linear optimization problem. If the solution is integral: STOP.    For some in the optimal solution found in the previous step, define two sub problems, one with additional constraint and .    Pick one of the subproblems and solve the linear relaxation with the additional constraint.    If the solution is integral, RETURN to 4.    If the solution is less than any integral solution found, RETURN to 4.    If the problem is infeasible, RETURN to 4.    Apply 3-7 to the new problem.    If all subproblems are explored, RETURN to 4 for the parent problem.    Once the search tree has been exhausted, identify the optimal integral solution.        The complete search tree for is as follows:   A Tree Diagram describing additional constraints.    We start at Node 0, and identify the two subproblems. Next, we examine the subproblem where in Node 1, and again identify two subproblems. Examining Node 2 causes us to stop and return because the solution was integral. When examining Node 3, we also stop and return even though the solution is not integral, since the optimal solution for that subproblem was already less than the solution found in Node 1, and any further exploration would lead to a lower value still.  Next, we return to the starting node and to the other initial subproblem in Node 4, were . When we split into the two subproblems, and . gives a nonintegral solution in Node 5, but since it is greater than the integral solution found in Node 2, we continue.  The two additional constraints we may not add to Node 5 are and . In Node 6, results in an integral solution greater than the one found in Node 2, and we may return. In Node 7, yields a nonintegral solution less than the integral solution found in Node 6, there is no point in continuing and we return.  Returning back to Node 4, we proceed to Node 8, with the constraint , rather than the constraint . However this yields an infeasible problem and we may return, as there is no point in adding additional constraints.  Thus, we return, and of the two integral solutions found, has the highest value.      As the demand for meat pies skyrockets, Agnesi is now able to acquire 40 oz of floor a day, but now uses 10 oz of floor per meat pie to thicken the gravy. She is able to sell these for 40 gp each. Use the Branch and Bound Algorithm to find her new optimal production level.    "
},
{
  "id": "exploration-meat",
  "level": "2",
  "url": "sec-branchbound.html#exploration-meat",
  "type": "Exploration",
  "number": "8.1.1",
  "title": "",
  "body": "  Suppose the witch Agnesi also goes into the business of selling food, meat sandwiches and meat pies. Each day she is able to acquire 50 oz of mystery meat (don't ask) and 30 oz of flour. The sandwiches take 8 oz of meat and 2 oz of flour, the pies take 3oz of meat and 5 oz of flour. She is able to sell the sandwiches for 10 gold pieces and the pies for 7 gold pieces.     Agnesi wishes to be able to produce sandwiches and pies in a way to maximize her income. Set up this problem as a linear optimization problem and solve.          What are some problems with this solution? Without trying to explicitly find the optimal solution, estimate how far off your current solution is from the optimal.      How many sandwiches and pies should she actually sell to maximize her income?       After the local barber has been arrested, demand for Agnesi's pies sees an increase, and she is able to now sell them for 12 gold pieces. Now what production level maximizes her income?     "
},
{
  "id": "def-integerprogram",
  "level": "2",
  "url": "sec-branchbound.html#def-integerprogram",
  "type": "Definition",
  "number": "8.1.2",
  "title": "",
  "body": "  A linear optimization problem where all solutions must be integers is called an integer optimization problem . If the condition that solutions be integers are relaxed, this is called the relaxation of the integer optimization problem.   "
},
{
  "id": "sec-branchbound-5",
  "level": "2",
  "url": "sec-branchbound.html#sec-branchbound-5",
  "type": "Activity",
  "number": "8.1.3",
  "title": "",
  "body": "   Come up with three realistic optimization problems which are best modeled by an integer optimization problem. You do not need to work out all the details or solve the problems.      Consider an integer optimization maximization problem whose relaxation achieves an optimal solution. Which of the following are true about the integer optimization problem?    The integer problem achieves an optimal solution that is equal to the optimal solution of the relaxation.    The integer problem achieves an optimal solution that is less than to the optimal solution of the relaxation.    The integer problem achieves an optimal solution that is greater than to the optimal solution of the relaxation.    The integer problem is infeasible.    The integer problem is unbounded above.      "
},
{
  "id": "activity-meat1",
  "level": "2",
  "url": "sec-branchbound.html#activity-meat1",
  "type": "Activity",
  "number": "8.1.4",
  "title": "",
  "body": "  The branch and bound method is a way to systematically add bounds to a linear optimization problem to ensure the solution is integral.  We examine the integer optimization problem from , and its relaxation.     Let be the number of sandwiches sold, and consider the current optimal from the relaxation. Which two of the following potential additional constraints would force the value of to be an integer, while remaining as close to the optimal solution of the relaxation as possible.     .     .     .     .     .     .     .     .        Let us consider the additional constraint . Solve the resulting general linear optimization problem:        A Tree Diagram describing additional constraints.         What additional constraints on would ensure that would be integral while changing as little as possible?      Consider the additional constraint . Solve this maximization problem. Why do we no longer need to adjust ? Are we guaranteed that this solution is optimal?    A Tree Diagram describing additional constraints.         We consider the constraint instead. Solve this maximization problem. Even though the solution is not integral, why do we no longer need to pursue the case where ?    A Tree Diagram describing additional constraints.         We return to the other possible initial constraint for , . Solve this maximization problem. What are the possible constraints we could now add for ?    A Tree Diagram describing additional constraints.         We consider now the constraint . Solve this maximization problem. If this solution integral?      Now in addition to the , we have two choices for an additional constraint on , one constraint, and one constraint. Solve the system with each of these additional constraints. If any of the solutions are integral, how do they compare with previous integral solutions that we have found?    A Tree Diagram describing additional constraints.         One of the constraints in the previous task results in an nonintegral solution. Nevertheless, we no longer need to continue to add constraints to this problem to obtain an integral solution. Why not?      Now instead of the constraint we had above, we now consider the constraint . Solve this maximization problem. Why do we no longer need to consider the case where ?      How do we know we now have arrived at the optimal solution?    A Tree Diagram describing additional constraints.       "
},
{
  "id": "def-branchbound",
  "level": "2",
  "url": "sec-branchbound.html#def-branchbound",
  "type": "Definition",
  "number": "8.1.5",
  "title": "",
  "body": "  The Branch and Bound Algorithm for solving an integer optimization maximization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer optimization problem.    Solve the relaxation of the linear optimization problem. If the solution is integral: STOP.    For some in the optimal solution found in the previous step, define two sub problems, one with additional constraint and .    Pick one of the subproblems and solve the linear relaxation with the additional constraint.    If the solution is integral, RETURN to 4.    If the solution is less than any integral solution found, RETURN to 4.    If the problem is infeasible, RETURN to 4.    Apply 3-7 to the new problem.    If all subproblems are explored, RETURN to 4 for the parent problem.    Once the search tree has been exhausted, identify the optimal integral solution.     "
},
{
  "id": "sec-branchbound-8",
  "level": "2",
  "url": "sec-branchbound.html#sec-branchbound-8",
  "type": "Example",
  "number": "8.1.6",
  "title": "",
  "body": "  The complete search tree for is as follows:   A Tree Diagram describing additional constraints.    We start at Node 0, and identify the two subproblems. Next, we examine the subproblem where in Node 1, and again identify two subproblems. Examining Node 2 causes us to stop and return because the solution was integral. When examining Node 3, we also stop and return even though the solution is not integral, since the optimal solution for that subproblem was already less than the solution found in Node 1, and any further exploration would lead to a lower value still.  Next, we return to the starting node and to the other initial subproblem in Node 4, were . When we split into the two subproblems, and . gives a nonintegral solution in Node 5, but since it is greater than the integral solution found in Node 2, we continue.  The two additional constraints we may not add to Node 5 are and . In Node 6, results in an integral solution greater than the one found in Node 2, and we may return. In Node 7, yields a nonintegral solution less than the integral solution found in Node 6, there is no point in continuing and we return.  Returning back to Node 4, we proceed to Node 8, with the constraint , rather than the constraint . However this yields an infeasible problem and we may return, as there is no point in adding additional constraints.  Thus, we return, and of the two integral solutions found, has the highest value.   "
},
{
  "id": "sec-branchbound-9",
  "level": "2",
  "url": "sec-branchbound.html#sec-branchbound-9",
  "type": "Activity",
  "number": "8.1.7",
  "title": "",
  "body": "  As the demand for meat pies skyrockets, Agnesi is now able to acquire 40 oz of floor a day, but now uses 10 oz of floor per meat pie to thicken the gravy. She is able to sell these for 40 gp each. Use the Branch and Bound Algorithm to find her new optimal production level.   "
},
{
  "id": "sec-cuttingplane",
  "level": "1",
  "url": "sec-cuttingplane.html",
  "type": "Section",
  "number": "8.2",
  "title": "Cutting-Plane Method",
  "body": " Cutting-Plane Method   We continue our journey through integer optimization, and examine a second method to solve these problems which is geometrically oriented.    Recall , and the question of making sandwiches and pies.  Define two additional inequalities such that the following are true:    No inequality eliminates any feasible integer solution of the original problem.    No boundary hyperplane is parallel to the objective function plane.    With the additional inequalities, the optimal solution to the linear relaxation is the optimal integer solution previously found for .     The boundary for these additional inequalities are referred to as cutting hyperplanes . We wish to determine how to find such cutting hyperplanes.    In this activity, we motivate the math behind the cutting-plane method.  Let be a feasible solution of the relaxation of a canonical integer maximization problem, where the are basic (slack) variables and the are nonbasic variables.  We consider the constraint                                                                                                      Explain why the above equality is equivalent to       Show that for any feasible integral solution, that the left hand side of the equality in is an integer.      Show that the right hand side of the equation in is strictly less than 1 for any feasible solution.      For any integral solution, what is a nonnegative integer upper bound for ?      Show that for any feasible integral solution to the relaxation of the integer optimization problem.  We call the hyperplane a cutting-plane .      Show that if is nonintegral, then by adding this constraint, the solution is no longer feasible.        We now apply this idea to an integer problem.  Consider the integer optimization problem:      Solve the relaxation of this integer problem, and verify that this solution is not integral.                                                                       Take the second row and follow the procedure in to generate a new constraint :                                                                                       Using the fact that , describe this cutting-plane in terms of .      Pivot on the entry and verify that the resulting basic solution is optimal and nonintegral.                                                                                       There is only one valid choice of row to generate a new constraint. Follow the procedure in to generate a new constraint .                                                                                                       Using the fact that , express this new cutting-plane in terms of .      Pivot on the entry and verify that the resulting basic solution is optimal and nonintegral.                                                                                                       Use either the or row to generate a new constraint .                                                                                                                       Using the fact that , express this new cutting-plane in terms of .      Pivot on the entry and verify that the resulting basic solution is optimal and integral!                                                                                                                       Enter the coefficients for the objective function and the three cutting-planes in order that you found them, and then drag the point to the optimal solution to the integer problem.       Gomory Cutting-Plane Algorithm   The Gomory Cutting-Plane Algorithm for an integer optimization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer optimization problem.    Solve the relaxation of the integer problem. If all the resulting are integral STOP: you have found an optimal integral solution.    Select a that is nonintegral and for that row, construct the additional bound: .    GOTO 2.      "
},
{
  "id": "sec-cuttingplane-3",
  "level": "2",
  "url": "sec-cuttingplane.html#sec-cuttingplane-3",
  "type": "Exploration",
  "number": "8.2.1",
  "title": "",
  "body": " Recall , and the question of making sandwiches and pies.  Define two additional inequalities such that the following are true:    No inequality eliminates any feasible integer solution of the original problem.    No boundary hyperplane is parallel to the objective function plane.    With the additional inequalities, the optimal solution to the linear relaxation is the optimal integer solution previously found for .    "
},
{
  "id": "sec-cuttingplane-4",
  "level": "2",
  "url": "sec-cuttingplane.html#sec-cuttingplane-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cutting hyperplanes "
},
{
  "id": "activity-cut",
  "level": "2",
  "url": "sec-cuttingplane.html#activity-cut",
  "type": "Activity",
  "number": "8.2.2",
  "title": "",
  "body": "  In this activity, we motivate the math behind the cutting-plane method.  Let be a feasible solution of the relaxation of a canonical integer maximization problem, where the are basic (slack) variables and the are nonbasic variables.  We consider the constraint                                                                                                      Explain why the above equality is equivalent to       Show that for any feasible integral solution, that the left hand side of the equality in is an integer.      Show that the right hand side of the equation in is strictly less than 1 for any feasible solution.      For any integral solution, what is a nonnegative integer upper bound for ?      Show that for any feasible integral solution to the relaxation of the integer optimization problem.  We call the hyperplane a cutting-plane .      Show that if is nonintegral, then by adding this constraint, the solution is no longer feasible.     "
},
{
  "id": "sec-cuttingplane-6",
  "level": "2",
  "url": "sec-cuttingplane.html#sec-cuttingplane-6",
  "type": "Activity",
  "number": "8.2.3",
  "title": "",
  "body": "  We now apply this idea to an integer problem.  Consider the integer optimization problem:      Solve the relaxation of this integer problem, and verify that this solution is not integral.                                                                       Take the second row and follow the procedure in to generate a new constraint :                                                                                       Using the fact that , describe this cutting-plane in terms of .      Pivot on the entry and verify that the resulting basic solution is optimal and nonintegral.                                                                                       There is only one valid choice of row to generate a new constraint. Follow the procedure in to generate a new constraint .                                                                                                       Using the fact that , express this new cutting-plane in terms of .      Pivot on the entry and verify that the resulting basic solution is optimal and nonintegral.                                                                                                       Use either the or row to generate a new constraint .                                                                                                                       Using the fact that , express this new cutting-plane in terms of .      Pivot on the entry and verify that the resulting basic solution is optimal and integral!                                                                                                                       Enter the coefficients for the objective function and the three cutting-planes in order that you found them, and then drag the point to the optimal solution to the integer problem.     "
},
{
  "id": "def-gomoryplane",
  "level": "2",
  "url": "sec-cuttingplane.html#def-gomoryplane",
  "type": "Definition",
  "number": "8.2.4",
  "title": "Gomory Cutting-Plane Algorithm.",
  "body": " Gomory Cutting-Plane Algorithm   The Gomory Cutting-Plane Algorithm for an integer optimization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer optimization problem.    Solve the relaxation of the integer problem. If all the resulting are integral STOP: you have found an optimal integral solution.    Select a that is nonintegral and for that row, construct the additional bound: .    GOTO 2.     "
},
{
  "id": "sec-intsage",
  "level": "1",
  "url": "sec-intsage.html",
  "type": "Section",
  "number": "8.3",
  "title": "Solving Integer Optimization Problems with Sage",
  "body": " Solving Integer Optimization Problems with Sage   In and , we solved canonical and noncanonical linear optimization problems. Solving such problems by hand could be tedious, and the techniques to solve integer optimization problems are even more involved. In this section, we solve integer optimization problems using Sage.  Since integer optimization is more difficult computationally than linear optimization, we use different commands to find solutions. Rather than use InteractiveLPProblem , we use MixedIntegerLinearProgram .     Say we want to solve the integer optimization problem:      Record this noncanonical problem using Sage:         We can then find the optimal solution:       We could also minimize if we chose:        We could also have solved the linear relaxation of the original problem if we chose:         Solve:           "
},
{
  "id": "sec-intsage-3",
  "level": "2",
  "url": "sec-intsage.html#sec-intsage-3",
  "type": "Activity",
  "number": "8.3.1",
  "title": "",
  "body": "  Say we want to solve the integer optimization problem:      Record this noncanonical problem using Sage:         We can then find the optimal solution:       We could also minimize if we chose:        We could also have solved the linear relaxation of the original problem if we chose:      "
},
{
  "id": "sec-intsage-4",
  "level": "2",
  "url": "sec-intsage.html#sec-intsage-4",
  "type": "Activity",
  "number": "8.3.2",
  "title": "",
  "body": "  Solve:          "
},
{
  "id": "sec-summaryinteger",
  "level": "1",
  "url": "sec-summaryinteger.html",
  "type": "Section",
  "number": "8.4",
  "title": "Summary of Chapter 8",
  "body": " Summary of  An integer optimization problem is an optimization problem where all solutions must only have integer values. We generally begin by solving the relaxation of an integer problem, where there is no such restriction. If the optimal solution is integral, then no additional work is needed. Otherwise, there are techniques which allow us to find the integral solutions.  The Branch and Bound method works by recursively adding constraints to the problem. If for some optimal solution is nonintegral, then we may force it to be integral with the additional constraint that or . Each choice results in a new branch of a search tree. If the additional constraint results in an integral optimal solution or an infeasible solution, no additional constraints are needed and we may return to the parent node. We terminate when all branches are explored in this way. Then amongst the integer solutions, we select the optimal choice.   A demonstration of the Branch and Bound method.    The other more tableau centric approach is the Gomory Cutting Plane method . We pivot to the optimal relaxed solution, and if this is nonintegral, we select a nonintegral and for that row, add the additional constraint which excises the nonintegral optimal solution but preserves all integral solutions of the original problem. We repeat until an optimal solution is achieved.   A demonstration of the Gomory Cutting Plane method.    "
},
{
  "id": "sec-summaryinteger-2",
  "level": "2",
  "url": "sec-summaryinteger.html#sec-summaryinteger-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integer optimization problem relaxation "
},
{
  "id": "sec-summaryinteger-3",
  "level": "2",
  "url": "sec-summaryinteger.html#sec-summaryinteger-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Branch and Bound "
},
{
  "id": "figure-videochapter8branchbound",
  "level": "2",
  "url": "sec-summaryinteger.html#figure-videochapter8branchbound",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": " A demonstration of the Branch and Bound method.   "
},
{
  "id": "sec-summaryinteger-5",
  "level": "2",
  "url": "sec-summaryinteger.html#sec-summaryinteger-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gomory Cutting Plane "
},
{
  "id": "figure-videochapter8cuttingplane",
  "level": "2",
  "url": "sec-summaryinteger.html#figure-videochapter8cuttingplane",
  "type": "Figure",
  "number": "8.4.2",
  "title": "",
  "body": " A demonstration of the Gomory Cutting Plane method.   "
},
{
  "id": "sec-exercisesinteger",
  "level": "1",
  "url": "sec-exercisesinteger.html",
  "type": "Section",
  "number": "8.5",
  "title": "Problems for Chapter 8",
  "body": " Problems for   The simplex pivoter may be found here:          For each of the linear optimization problems, solve the linear relaxation problem, then use the graphical method to find a solution if we restrict to integer values.                          Prove or find a counterexample: Let be the solution to the linear relaxation for an integer optimization problem, such that has only integer coordinates. Then is a solution to the original integral problem.    Come up with 2 maximization problems, one two dimensional and one three dimensional, where only integer solutions are sensible, and explain why these problems should be integral problems. Then do the same for two minimization problems.     For each of the following integer optimization problems, find an integral solution using the branch and bound method, and using the cutting plane method.                                                       Solve the following integer optimization problems.     A potter makes sculptures and bowls out of clay. It takes hours and pounds of clay to make a sculpture, hours and pounds of clay for a bowl. She has hours a week and pounds of clay with which to make things. She can sell sculptures for $ and bowl for $ . How much of each should she make to maximize revenue?      A man is preparing food for a party at his house, and is making sure there is enough. A chicken pot pie takes g of flour and g of chicken. He air and land wellington takes g of flour, g of chicken and g of beef. Evidently he knows no other recipes. He has g of flour, g of chicken and g of beef. The pot pies feed 2 people, the wellington feeds 8. How many of each should he make?      A family of 12 gnomes have three mines and from which to dig gems. A gnome digging in mine can dig up gems a week, gems a week in mine and gems a week in mine . They have a budget of 75 gold pieces (gp) a month for operating expenses. A gnome digging in mine has expenses of gp a month, gp a month in mine , and gp a month in mine . Due to size limitations, at most 5 gnomes can dig in mine . How should this family distribute the gnomes amongst the mines to maximize gem production?        What do you think would happen if the Gomory Plane Cutting algorithm was applied to a linear optimization problem where the relaxed problem achieved optimality, but the integral restriction had no solutions?      Test your conjecture on the following problem:          Consider a primal integral linear maximization problem with objective function such that the integral problem has an optimal solution . Then for each of the following find a counterexample.     The linear relaxation of this primal problem also achieves optimality. (Think irrational numbers.)      Suppose that the linear relaxation also achieves optimality at , then the integral dual to the original integral max problem must also achieve an optimal solution.      Suppose that the linear relaxation also achieves optimality at such that . Suppose the dual to the integral maximization problem achieved optimality at , and let denote the dual to the relaxation. Then where is the objective function of the dual.      "
},
{
  "id": "exercises-integer-1",
  "level": "2",
  "url": "sec-exercisesinteger.html#exercises-integer-1",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": "  For each of the linear optimization problems, solve the linear relaxation problem, then use the graphical method to find a solution if we restrict to integer values.                        "
},
{
  "id": "exercises-integer-2",
  "level": "2",
  "url": "sec-exercisesinteger.html#exercises-integer-2",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": " Prove or find a counterexample: Let be the solution to the linear relaxation for an integer optimization problem, such that has only integer coordinates. Then is a solution to the original integral problem.  "
},
{
  "id": "exercises-integer-3",
  "level": "2",
  "url": "sec-exercisesinteger.html#exercises-integer-3",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": " Come up with 2 maximization problems, one two dimensional and one three dimensional, where only integer solutions are sensible, and explain why these problems should be integral problems. Then do the same for two minimization problems.  "
},
{
  "id": "exercises-integer-4",
  "level": "2",
  "url": "sec-exercisesinteger.html#exercises-integer-4",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": "  For each of the following integer optimization problems, find an integral solution using the branch and bound method, and using the cutting plane method.                                                    "
},
{
  "id": "exercises-integer-5",
  "level": "2",
  "url": "sec-exercisesinteger.html#exercises-integer-5",
  "type": "Exercise",
  "number": "8.5.5",
  "title": "",
  "body": "  Solve the following integer optimization problems.     A potter makes sculptures and bowls out of clay. It takes hours and pounds of clay to make a sculpture, hours and pounds of clay for a bowl. She has hours a week and pounds of clay with which to make things. She can sell sculptures for $ and bowl for $ . How much of each should she make to maximize revenue?      A man is preparing food for a party at his house, and is making sure there is enough. A chicken pot pie takes g of flour and g of chicken. He air and land wellington takes g of flour, g of chicken and g of beef. Evidently he knows no other recipes. He has g of flour, g of chicken and g of beef. The pot pies feed 2 people, the wellington feeds 8. How many of each should he make?      A family of 12 gnomes have three mines and from which to dig gems. A gnome digging in mine can dig up gems a week, gems a week in mine and gems a week in mine . They have a budget of 75 gold pieces (gp) a month for operating expenses. A gnome digging in mine has expenses of gp a month, gp a month in mine , and gp a month in mine . Due to size limitations, at most 5 gnomes can dig in mine . How should this family distribute the gnomes amongst the mines to maximize gem production?    "
},
{
  "id": "exercises-integer-6",
  "level": "2",
  "url": "sec-exercisesinteger.html#exercises-integer-6",
  "type": "Exercise",
  "number": "8.5.6",
  "title": "",
  "body": "   What do you think would happen if the Gomory Plane Cutting algorithm was applied to a linear optimization problem where the relaxed problem achieved optimality, but the integral restriction had no solutions?      Test your conjecture on the following problem:       "
},
{
  "id": "exercises-integer-7",
  "level": "2",
  "url": "sec-exercisesinteger.html#exercises-integer-7",
  "type": "Exercise",
  "number": "8.5.7",
  "title": "",
  "body": "  Consider a primal integral linear maximization problem with objective function such that the integral problem has an optimal solution . Then for each of the following find a counterexample.     The linear relaxation of this primal problem also achieves optimality. (Think irrational numbers.)      Suppose that the linear relaxation also achieves optimality at , then the integral dual to the original integral max problem must also achieve an optimal solution.      Suppose that the linear relaxation also achieves optimality at such that . Suppose the dual to the integral maximization problem achieved optimality at , and let denote the dual to the relaxation. Then where is the objective function of the dual.    "
},
{
  "id": "sec-covermatch",
  "level": "1",
  "url": "sec-covermatch.html",
  "type": "Section",
  "number": "9.1",
  "title": "Coverings and Matchings of Graphs",
  "body": " Coverings and Matchings of Graphs   Coverings and matchings on graphs are an integral part of the study of graph theory with numerous applications. A full exploration would be more appropriate for a graph theory or combinatorics course. However, to highlight some of the ways that linear optimization can be applied here, we examine the relationship between primal and dual problems, observe some limitations, and consider a case where we can employ linear optimization to solve problems without concern.     Consider the following undirected graph .  An undirected graph.         matching A matching is a collection of edges such that no two edges in are incident to the same vertex. Let denote the size of the largest possible matching(s) There is, too my knowledge, no standard notation for the size of a maximum matching for . This is the proposed notation from Dr. Mark Kayll of the University of Montana, since the , the capital greek letter Xi, looks like a matching. .  What is ? How can we be sure this is true?      Find for :  An undirected graph.          Let be a graph with vertices , and be any matching on . For each edge let such that if , then , otherwise .  We now construct a canonical maximization problem which can help compute a maximum matching.     For each vertex , write an inequality to ensure that is a matching.      Given the above constraints, do we need another constraint to ensure that ?      Find a linear objective function to compute .      State the maximization linear optimization problem for computing the maximum matching of a graph . We well refer to this problem as the matching primal problem .      Consider from . Label each vertex and write out a Tucker tableau for the linear optimization problem for computing the maximum matching.      Solve the above optimization problem:    What do you notice?      Consider from . Label each vertex and write out a Tucker tableau for the linear optimization problem for computing the maximum matching.      Solve the above optimization problem:    What do you notice?       Consider the general maximization problem constructed in .     Prove that any graph and matching (maximum or not) corresponds to a feasible solution for this problem where if and otherwise.      Let be the maximum value of the objective function for this problem. What can be said about the relationship between and ?     .     .     .    No general relationship exists between and .    Prove your claim.       Consider the general maximization problem constructed in . We now consider its dual problem.     Let denote the dual variable corresponding to the primal constraint for vertex . What is the dual objective function in terms of ?      For each edge , there is a dual constraint, state this dual constraint. (Hint: in the original Tucker tableau, when would an entry in the column be a zero, and when would it be a one?)      State the dual minimization problem to the primal maximum matching problem. We will refer to this problem as the dual covering problem .      Suppose we restrict to only integer values, give an interpretation for the dual min problem (Hint: each corresponds to a vertex . Would take on any values besides 0 or 1)?        vertex cover, vertex covering  cover, covering Given a graph , a vertex cover or is a collection of vertices such that for any edge either or (possibly both) are in .  Let denote the size of the smallest vertex cover.     Find for from, .      Find for from, .      For each vertex , let if and otherwise. Show this is a feasible solution to the dual problem found in for . Is it optimal?      Since we solved the matching problem for in , use Sage to solve the dual problem    What do we notice?      We solved the matching maximization problem for in , use Sage to solve the dual problem    What do we notice?       Consider the general dual minimization problem constructed in .     Prove that any graph and cover (minimum or not) corresponds to a feasible solution for this problem where if and otherwise.      Let be the minimum value of the objective function for this problem. What can be said about the relationship between and ?     .     .     .    No general relationship exists between and .    Prove your claim.      What can be said about the relationship between and ?     .     .     .    No general relationship exists between and .    Prove your claim.      Königs Theorem and Bipartite Graphs   As mentioned above, a full discussion of covers and matchings, while fascinating, would be beyond the scope of this text. We will restrict ourselves to a specific family of graphs.     A graph is said to be bipartite, if its vertices may be partitioned into two disjoint sets, where there are no edges between vertices in the same .       Is from bipartite?      Is from bipartite?      Which of the following are bipartite?      An undirected graph.         An undirected graph.         An undirected graph.         An undirected graph.           Prove that if a graph is bipartite, then it must not contain an odd length cycle The converse is also true, but we will leave that alone here. .   We now consider coverings and matchings on only bipartite graphs.   For the graphs in , find . What do you notice? Is there any difference in the results for bipartite and nonbipartite graphs?     Consider the general linear optimization problems found in and      Show that if the primal matching problem has an optimal solution consisting of only integer values, then it corresponds to a maximum matching.      Show that if the dual covering problem has an optimal solution consisting of only integer values, then it corresponds to a minimum cover.     We now consider a general bipartite graph , and we suppose the primal matching problem has an optimal solution with potentially fractional values. We will explore how we can convert this solution into an integral valued optimal solution.    Let be a bipartite graph, and let be an optimal solution to the primal matching problem from .  Suppose there were a collection of edges for which the corresponding had fractional values, such that these fractional edges formed a cycle . Without loss of generality, we may label the vertices so that for , and have an edge between them, and have fractional values.  To make notation bearable, we'll understand that .     Why must be even?      Suppose we construct a new solution by replacing with when is odd, with when is even, and leaving every edge not part of the same. What value for would guarantee that at least one of the new is an integer?     .     .     .        Show that .      Show that for any vertex  not a part of , the bound corresponding to is still satisfied by .      Show that for any vertex part of , the bound corresponding to is still satisfied by .      Show that .      When comparing and , which solution has fewer integer values?     has fewer integer values.     has fewer integer values.     have the same number of integer values.    This cannot be determined.         Let be a bipartite graph, and let be an optimal solution to the primal matching problem from .  Suppose there were no collection of edges for which the corresponding had fractional values, such that these fractional edges formed a cycle. Let form a maximal path where has fractional value. Note that are the endpoints of .     Since is maximal, any edges not a part of this path incident to must be assigned an integer value. What must this value be?      Suppose we construct a new solution by replacing with when is odd, with when is even, and leaving every edge not part of the same. What value for would guarantee that at least one of the new is an integer?     .     .     .        Show that .      Show that for any vertex  not a part of , the bound corresponding to is still satisfied by .      Show that for any vertex part of , the bound corresponding to is still satisfied by .      Show that . Why does this imply ?      When comparing and , which solution has fewer integer values?     has fewer integer values.     has fewer integer values.     have the same number of integer values.    This cannot be determined.       We now switch our attention to covers. Suppose the dual covering problem has an optimal solution with potentially fractional values. We will explore how we can convert this solution into an integral valued optimal solution.    Let be a bipartite graph, and let be an optimal solution to the dual covering problem from .  Let be the set of vertices where has a fractional value for all . Without loss of generality, suppose .     Let denote the complement of . We may partition into four sets: , Let edges of be partitioned into four sets as follows:    denotes edges incident to vertices in and .     denotes edges incident to vertices in and .     denotes edges incident to vertices in and .     denotes edges incident to vertices in and .      A bipartite graph with partitioned vertices and edges.    Recall that each vertex in is assigned a fractional value less than 1. For any edge in , where , what can we say about ?      Recall that without loss of generality, . Suppose we construct a new solution by replacing with when , with when , and leaving every vertex not in the same. What value for would guarantee that at least one of the new is an integer, and ?     .     .     .     .     .        For each edge in , show that the corresponding constraint is still satisfied.      For each edge in , show that the corresponding constraint is still satisfied.      For each edge in , show that the corresponding constraint is still satisfied.      For each edge in , show that the corresponding constraint is still satisfied.      Show that . Why does this imply ?      When comparing and , which solution has fewer integer values?     has fewer integer values.     has fewer integer values.     have the same number of integer values.    This cannot be determined.       We are finally ready to state our main result, König's Theorem.   König's theorem  theorem, König's  König's Theorem   Let be a bipartite graph. Then .      Use , , , and to prove .     "
},
{
  "id": "exploration-matching",
  "level": "2",
  "url": "sec-covermatch.html#exploration-matching",
  "type": "Exploration",
  "number": "9.1.1",
  "title": "",
  "body": "  Consider the following undirected graph .  An undirected graph.         matching A matching is a collection of edges such that no two edges in are incident to the same vertex. Let denote the size of the largest possible matching(s) There is, too my knowledge, no standard notation for the size of a maximum matching for . This is the proposed notation from Dr. Mark Kayll of the University of Montana, since the , the capital greek letter Xi, looks like a matching. .  What is ? How can we be sure this is true?      Find for :  An undirected graph.       "
},
{
  "id": "activity-maxmatch",
  "level": "2",
  "url": "sec-covermatch.html#activity-maxmatch",
  "type": "Activity",
  "number": "9.1.2",
  "title": "",
  "body": "  Let be a graph with vertices , and be any matching on . For each edge let such that if , then , otherwise .  We now construct a canonical maximization problem which can help compute a maximum matching.     For each vertex , write an inequality to ensure that is a matching.      Given the above constraints, do we need another constraint to ensure that ?      Find a linear objective function to compute .      State the maximization linear optimization problem for computing the maximum matching of a graph . We well refer to this problem as the matching primal problem .      Consider from . Label each vertex and write out a Tucker tableau for the linear optimization problem for computing the maximum matching.      Solve the above optimization problem:    What do you notice?      Consider from . Label each vertex and write out a Tucker tableau for the linear optimization problem for computing the maximum matching.      Solve the above optimization problem:    What do you notice?    "
},
{
  "id": "sec-covermatch-5",
  "level": "2",
  "url": "sec-covermatch.html#sec-covermatch-5",
  "type": "Activity",
  "number": "9.1.3",
  "title": "",
  "body": "  Consider the general maximization problem constructed in .     Prove that any graph and matching (maximum or not) corresponds to a feasible solution for this problem where if and otherwise.      Let be the maximum value of the objective function for this problem. What can be said about the relationship between and ?     .     .     .    No general relationship exists between and .    Prove your claim.    "
},
{
  "id": "activity-mincover",
  "level": "2",
  "url": "sec-covermatch.html#activity-mincover",
  "type": "Activity",
  "number": "9.1.4",
  "title": "",
  "body": "  Consider the general maximization problem constructed in . We now consider its dual problem.     Let denote the dual variable corresponding to the primal constraint for vertex . What is the dual objective function in terms of ?      For each edge , there is a dual constraint, state this dual constraint. (Hint: in the original Tucker tableau, when would an entry in the column be a zero, and when would it be a one?)      State the dual minimization problem to the primal maximum matching problem. We will refer to this problem as the dual covering problem .      Suppose we restrict to only integer values, give an interpretation for the dual min problem (Hint: each corresponds to a vertex . Would take on any values besides 0 or 1)?    "
},
{
  "id": "sec-covermatch-7",
  "level": "2",
  "url": "sec-covermatch.html#sec-covermatch-7",
  "type": "Activity",
  "number": "9.1.5",
  "title": "",
  "body": "   vertex cover, vertex covering  cover, covering Given a graph , a vertex cover or is a collection of vertices such that for any edge either or (possibly both) are in .  Let denote the size of the smallest vertex cover.     Find for from, .      Find for from, .      For each vertex , let if and otherwise. Show this is a feasible solution to the dual problem found in for . Is it optimal?      Since we solved the matching problem for in , use Sage to solve the dual problem    What do we notice?      We solved the matching maximization problem for in , use Sage to solve the dual problem    What do we notice?    "
},
{
  "id": "sec-covermatch-8",
  "level": "2",
  "url": "sec-covermatch.html#sec-covermatch-8",
  "type": "Activity",
  "number": "9.1.6",
  "title": "",
  "body": "  Consider the general dual minimization problem constructed in .     Prove that any graph and cover (minimum or not) corresponds to a feasible solution for this problem where if and otherwise.      Let be the minimum value of the objective function for this problem. What can be said about the relationship between and ?     .     .     .    No general relationship exists between and .    Prove your claim.      What can be said about the relationship between and ?     .     .     .    No general relationship exists between and .    Prove your claim.    "
},
{
  "id": "def-bipartite",
  "level": "2",
  "url": "sec-covermatch.html#def-bipartite",
  "type": "Definition",
  "number": "9.1.7",
  "title": "",
  "body": "  A graph is said to be bipartite, if its vertices may be partitioned into two disjoint sets, where there are no edges between vertices in the same .   "
},
{
  "id": "activity-bp",
  "level": "2",
  "url": "sec-covermatch.html#activity-bp",
  "type": "Activity",
  "number": "9.1.8",
  "title": "",
  "body": "   Is from bipartite?      Is from bipartite?      Which of the following are bipartite?      An undirected graph.         An undirected graph.         An undirected graph.         An undirected graph.         "
},
{
  "id": "subsec-Konigs-5",
  "level": "2",
  "url": "sec-covermatch.html#subsec-Konigs-5",
  "type": "Activity",
  "number": "9.1.9",
  "title": "",
  "body": " Prove that if a graph is bipartite, then it must not contain an odd length cycle The converse is also true, but we will leave that alone here. .  "
},
{
  "id": "subsec-Konigs-7",
  "level": "2",
  "url": "sec-covermatch.html#subsec-Konigs-7",
  "type": "Activity",
  "number": "9.1.10",
  "title": "",
  "body": " For the graphs in , find . What do you notice? Is there any difference in the results for bipartite and nonbipartite graphs?  "
},
{
  "id": "activity-covermatcheq",
  "level": "2",
  "url": "sec-covermatch.html#activity-covermatcheq",
  "type": "Activity",
  "number": "9.1.11",
  "title": "",
  "body": "  Consider the general linear optimization problems found in and      Show that if the primal matching problem has an optimal solution consisting of only integer values, then it corresponds to a maximum matching.      Show that if the dual covering problem has an optimal solution consisting of only integer values, then it corresponds to a minimum cover.    "
},
{
  "id": "activity-cyclefrac",
  "level": "2",
  "url": "sec-covermatch.html#activity-cyclefrac",
  "type": "Activity",
  "number": "9.1.12",
  "title": "",
  "body": "  Let be a bipartite graph, and let be an optimal solution to the primal matching problem from .  Suppose there were a collection of edges for which the corresponding had fractional values, such that these fractional edges formed a cycle . Without loss of generality, we may label the vertices so that for , and have an edge between them, and have fractional values.  To make notation bearable, we'll understand that .     Why must be even?      Suppose we construct a new solution by replacing with when is odd, with when is even, and leaving every edge not part of the same. What value for would guarantee that at least one of the new is an integer?     .     .     .        Show that .      Show that for any vertex  not a part of , the bound corresponding to is still satisfied by .      Show that for any vertex part of , the bound corresponding to is still satisfied by .      Show that .      When comparing and , which solution has fewer integer values?     has fewer integer values.     has fewer integer values.     have the same number of integer values.    This cannot be determined.      "
},
{
  "id": "activity-pathfrac",
  "level": "2",
  "url": "sec-covermatch.html#activity-pathfrac",
  "type": "Activity",
  "number": "9.1.13",
  "title": "",
  "body": "  Let be a bipartite graph, and let be an optimal solution to the primal matching problem from .  Suppose there were no collection of edges for which the corresponding had fractional values, such that these fractional edges formed a cycle. Let form a maximal path where has fractional value. Note that are the endpoints of .     Since is maximal, any edges not a part of this path incident to must be assigned an integer value. What must this value be?      Suppose we construct a new solution by replacing with when is odd, with when is even, and leaving every edge not part of the same. What value for would guarantee that at least one of the new is an integer?     .     .     .        Show that .      Show that for any vertex  not a part of , the bound corresponding to is still satisfied by .      Show that for any vertex part of , the bound corresponding to is still satisfied by .      Show that . Why does this imply ?      When comparing and , which solution has fewer integer values?     has fewer integer values.     has fewer integer values.     have the same number of integer values.    This cannot be determined.      "
},
{
  "id": "activity-coverfrac",
  "level": "2",
  "url": "sec-covermatch.html#activity-coverfrac",
  "type": "Activity",
  "number": "9.1.14",
  "title": "",
  "body": "  Let be a bipartite graph, and let be an optimal solution to the dual covering problem from .  Let be the set of vertices where has a fractional value for all . Without loss of generality, suppose .     Let denote the complement of . We may partition into four sets: , Let edges of be partitioned into four sets as follows:    denotes edges incident to vertices in and .     denotes edges incident to vertices in and .     denotes edges incident to vertices in and .     denotes edges incident to vertices in and .      A bipartite graph with partitioned vertices and edges.    Recall that each vertex in is assigned a fractional value less than 1. For any edge in , where , what can we say about ?      Recall that without loss of generality, . Suppose we construct a new solution by replacing with when , with when , and leaving every vertex not in the same. What value for would guarantee that at least one of the new is an integer, and ?     .     .     .     .     .        For each edge in , show that the corresponding constraint is still satisfied.      For each edge in , show that the corresponding constraint is still satisfied.      For each edge in , show that the corresponding constraint is still satisfied.      For each edge in , show that the corresponding constraint is still satisfied.      Show that . Why does this imply ?      When comparing and , which solution has fewer integer values?     has fewer integer values.     has fewer integer values.     have the same number of integer values.    This cannot be determined.      "
},
{
  "id": "thm-Konigs",
  "level": "2",
  "url": "sec-covermatch.html#thm-Konigs",
  "type": "Theorem",
  "number": "9.1.15",
  "title": "König’s Theorem.",
  "body": " König's theorem  theorem, König's  König's Theorem   Let be a bipartite graph. Then .   "
},
{
  "id": "subsec-Konigs-16",
  "level": "2",
  "url": "sec-covermatch.html#subsec-Konigs-16",
  "type": "Activity",
  "number": "9.1.16",
  "title": "",
  "body": "  Use , , , and to prove .   "
},
{
  "id": "sec-sudoku",
  "level": "1",
  "url": "sec-sudoku.html",
  "type": "Section",
  "number": "9.2",
  "title": "Sudoku",
  "body": " Sudoku  sudoku   In this section, we explore a curious application of linear optimization, solving sudokus!     Consider the following sudoku puzzle:   A sudoku puzzle.    Note that the rules for sudoku are that we fill in each entry with an integer so that:   Each row contains exactly one of each number.    Each column contains exactly one of each number.    Each  block contains exactly one of each number.        Solve the above sudoku if you feel like it.      We consider the standard sudokus like the one above an order sudoku: we have  blocks , each with entries. Potential values range from through . Other orders are also possible.   More sudokus may be found at https:\/\/www.websudoku.com\/     Consider a general order sudoku puzzle. We want to define a linear maximization problem that solves a given puzzle. Let is a solution has value in entry (measured from the bottom left), and otherwise.     For the th entry, write a linear equality constraint which ensures a value is chosen.      For row , write 9 equality conditions so that this row contains one of each entry.      For column , write 9 equality conditions so that this column contains one of each entry.      For an arbitrary block, write 9 equality conditions so that this block contains one of each entry.      Now consider the sudoku puzzle from . How could we write out appropriate equality conditions fixing each entry?      Are there any other constraints we need?      What should the objective function be? (Does it matter?)     Obviously, this would be an absolutely absurdly large problem to even fully write out, much less solve. We consider something simpler.    Consider the following order 2 sudoku puzzle:   An order 2 sudoku puzzle.       Following , write out the linear optimization problem which would compute the solved puzzle.      If you really want to, solve this problem (there are 64 decision variables so...):       This provides an opportunity for an enterprising student to engage in some further exploration.   Write efficient code in Sage where one inputs a matrix representing a sudoku puzzle (with maybe 0's for blank entries), and the code produces the appropriate linear optimization problem and solves it.  For more advanced or experienced coders, generalize this to allow the order of the sudoku puzzle to be a parameter.   "
},
{
  "id": "exploration-sudoku",
  "level": "2",
  "url": "sec-sudoku.html#exploration-sudoku",
  "type": "Exploration",
  "number": "9.2.1",
  "title": "",
  "body": "  Consider the following sudoku puzzle:   A sudoku puzzle.    Note that the rules for sudoku are that we fill in each entry with an integer so that:   Each row contains exactly one of each number.    Each column contains exactly one of each number.    Each  block contains exactly one of each number.        Solve the above sudoku if you feel like it.    "
},
{
  "id": "sec-sudoku-5",
  "level": "2",
  "url": "sec-sudoku.html#sec-sudoku-5",
  "type": "Remark",
  "number": "9.2.2",
  "title": "",
  "body": " We consider the standard sudokus like the one above an order sudoku: we have  blocks , each with entries. Potential values range from through . Other orders are also possible.  "
},
{
  "id": "activity-order3sudoku",
  "level": "2",
  "url": "sec-sudoku.html#activity-order3sudoku",
  "type": "Activity",
  "number": "9.2.3",
  "title": "",
  "body": "  Consider a general order sudoku puzzle. We want to define a linear maximization problem that solves a given puzzle. Let is a solution has value in entry (measured from the bottom left), and otherwise.     For the th entry, write a linear equality constraint which ensures a value is chosen.      For row , write 9 equality conditions so that this row contains one of each entry.      For column , write 9 equality conditions so that this column contains one of each entry.      For an arbitrary block, write 9 equality conditions so that this block contains one of each entry.      Now consider the sudoku puzzle from . How could we write out appropriate equality conditions fixing each entry?      Are there any other constraints we need?      What should the objective function be? (Does it matter?)    "
},
{
  "id": "sec-sudoku-9",
  "level": "2",
  "url": "sec-sudoku.html#sec-sudoku-9",
  "type": "Activity",
  "number": "9.2.4",
  "title": "",
  "body": "  Consider the following order 2 sudoku puzzle:   An order 2 sudoku puzzle.       Following , write out the linear optimization problem which would compute the solved puzzle.      If you really want to, solve this problem (there are 64 decision variables so...):      "
},
{
  "id": "sec-sudoku-11",
  "level": "2",
  "url": "sec-sudoku.html#sec-sudoku-11",
  "type": "Project",
  "number": "9.2.5",
  "title": "",
  "body": " Write efficient code in Sage where one inputs a matrix representing a sudoku puzzle (with maybe 0's for blank entries), and the code produces the appropriate linear optimization problem and solves it.  For more advanced or experienced coders, generalize this to allow the order of the sudoku puzzle to be a parameter.  "
},
{
  "id": "sec-scheduling",
  "level": "1",
  "url": "sec-scheduling.html",
  "type": "Section",
  "number": "9.3",
  "title": "Scheduling",
  "body": " Scheduling  scheduling   In this section, we cover the problem of scheduling under time constraints and limited availability.     Consider the last time you had to pick classes to fit a schedule. What were some things you had to consider in doing so? What sort of constraints did you consider necessary, and which were considered preferences? How does your answers compare to your classmates?      Yafa is an incoming freshman at Fantasi College and she is picking classes for her first semester. Fantasi College has classes either on Monday-Wednesday-Friday from 8:30-9:30, 10:00-11:00, 12:30-1:30 and 2:00-3:00, and on Tuesday-Thursday from 8:30-10:00, 10:30-12:00, and 1:00-2:30.  Yafa has put together a list of potential classes she could take this semester, and assigned to them a score from 1 - 10 depending on her interest in the class, the time of day, and her own research looking up professors on external rating sites. (Yafa has not yet taken her introductory statistics course, and so doesn't yet know how unreliable and biased these sites, and reviews in general, are.)  (Note that this is not altogether realistic, in that this is a massive oversimplification for the purpose of understanding the key ideas.)                 #   Course Name and Time  Score       1  Art MWF 12:30-1:30  8      2  Art MWF 2:00-3:00  5      3  Art TuTh 10:30-12:00  7      4  Art TuTh 1:00-2:30  5      5  CS MWF 10:00-11:00  8      6  CS TuTh 10:30-12:00  8      7  Econ MWF 8:30-9:30  6      8  Econ MWF 12:30-1:30  7      9  Econ TuTh 10:30-12:00  8      10  Econ TuTh 1:00-2:30  7      11  Hist MWF 8:30-9:30  6      12  Hist TuTh 10:30-12:00  8      13  Lit MWF 10:00-11:00  7                  #   Course Name and Time  Score       14  Lit MWF 12:30-1:30  7      15  Lit MWF 2:00-3:00  6      16  Lit TuTh 8:30-10:00  5      17  MathA MWF 8:30-9:30  3      18  MathA MWF 10:00-11:00  5      19  MathA TuTh 8:30-10:00  7      20  MathB MWF 10:00-11:00  9      21  MathB MWF 12:30-1:30  7      22  MathB TuTh 10:30-12:00  8      23  Sem MWF 10:00-11:00  6      24  Sem MWF 10:00-11:00  8      25  Sem TuTh 10:30-12:00  8      26  Sem TuTh 10:30-12:00  7     Additionally, she has the following stipulations to her schedule:    No student is allowed to enroll in different offerings of the same class, MathA and MathB are considered different classes.    No student can enroll in more than 1 course in the same time-slot.    To prevent burnout, no student each student must have at least one time-slot off every day.    No student can enroll in more than 6 or fewer than 4 classes.    Each income student must enroll in a Freshman Seminar (Sem).    Because of her major, Yafa intends to enroll in at least 1 Math class this semester (either A or B, not exclusive).    Yafa wishes to get a head start on her general education, so she wants to take at least one of either Literature (Lit) or Art (Art). Similarly, she wishes to take at least one of Economics (Econ) or History (Hist).    Let be 1 if she takes course and 0 otherwise.    What is a reasonable linear objective function to maximize?     Write out the constraints which restrict students to at most 1 offering of the same class.      Write out the constraints which restrict students to at most 1 course in a given time-slot.      Write out the constraints which ensure each student will have at least one free time-slot a day.      Write out the constraints which ensures each student is enrolled in at least 4 and at most 6 courses.      Write out the constraint which ensures each student enrolls in one seminar.      Write out the constraint which ensure that Yafa enrolls in (at least) one Math class.      Write out the constraints which ensure that Yafa is on track with her general education credits.      Write out the integer maximization problem we have constructed.      (Optional) Solve it:         Let's call Yafa from student . In a gross oversimplification suppose there were in total 5 students including Yafa registering, and that each class could sit at most 2 students.  Each student assigns their own score to each course, being the score that student gives to course . Let be 1 if student enrolls in course and 0 otherwise.                           Course Name and Time                     1  Art MWF 12:30-1:30  8  10  4  6  9      2  Art MWF 2:00-3:00  5  8  5  5  7      3  Art TuTh 10:30-12:00  7  9  7  5  8      4  Art TuTh 1:00-2:30  5  6  3  5  6      5  CS MWF 10:00-11:00  8  2  8  9  5      6  CS TuTh 10:30-12:00  8  5  7  8  6      7  Econ MWF 8:30-9:30  6  6  8  4  7      8  Econ MWF 12:30-1:30  7  7  7  6  4      9  Econ TuTh 10:30-12:00  8  8  3  6  7      10  Econ TuTh 1:00-2:30  7  9  4  5  6      11  Hist MWF 8:30-9:30  6  5  7  7  6      12  Hist TuTh 10:30-12:00  8  6  8  9  7      13  Lit MWF 10:00-11:00  7  8  6  5  5      14  Lit MWF 12:30-1:30  7  8  7  6  7      15  Lit MWF 2:00-3:00  6  9  6  3  7      16  Lit TuTh 8:30-10:00  5  8  6  2  6      17  MathA MWF 8:30-9:30  3  2  5  5  6      18  MathA MWF 10:00-11:00  5  2  5  6  6      19  MathA TuTh 8:30-10:00  7  4  9  7  8      20  MathB MWF 10:00-11:00  9  1  1  1  8      21  MathB MWF 12:30-1:30  7  1  1  1  9      22  MathB TuTh 10:30-12:00  8  1  1  1  7      23  Sem MWF 10:00-11:00  6  10  9  7  4      24  Sem MWF 10:00-11:00  8  4  7  6  5      25  Sem TuTh 10:30-12:00  8  7  9  6  3      26  Sem TuTh 10:30-12:00  7  5  3  8  6    In addition to the constraints that all students have to abide by, we have the following constraint for each student:    Yafa (student 1) still has her constraints from .    Student 2 has to take at least 1 Art class, either Computer Science (CS) or Math, and either Economics or History.    Student 3 has to take at least 1 Economics class, 1 Math and 1 Literature class.    Student 4 has to take a Computer Science class and a History class.    Student 5 has to take both Math classes.       How might the objective function and constraints from be adapted to this situation?      What additional constraints are required?      Depending on how you set up the objective function, a student who rates everything highly will be prioritized over a student who ranks everything more modestly. To prevent gaming the system, what could be done to ameliorate this effect?      The Dean approves one of the classes to be increased in size to a whopping 3 students. How can the dual problem inform how this choice of class should be made?       Discuss how the discussions in and may be modified to apply to other situations.     Now model a scheduling problem that is not oversimplified, perhaps one based on your current or former institution(s).    For the truly ambitious, model a scheduling problem for the offering of courses , factoring in preferred times, preferred courses, preferred classrooms, changes in staffing, fluctuating student demand and flow of courses in the future etc. This is as open a problem as there can be. Someone who solves this problem will gain more recognition than if they solved all the Millennium Problems. .   "
},
{
  "id": "exploration-scheduling",
  "level": "2",
  "url": "sec-scheduling.html#exploration-scheduling",
  "type": "Exploration",
  "number": "9.3.1",
  "title": "",
  "body": "  Consider the last time you had to pick classes to fit a schedule. What were some things you had to consider in doing so? What sort of constraints did you consider necessary, and which were considered preferences? How does your answers compare to your classmates?   "
},
{
  "id": "activity-schedule",
  "level": "2",
  "url": "sec-scheduling.html#activity-schedule",
  "type": "Activity",
  "number": "9.3.2",
  "title": "",
  "body": "  Yafa is an incoming freshman at Fantasi College and she is picking classes for her first semester. Fantasi College has classes either on Monday-Wednesday-Friday from 8:30-9:30, 10:00-11:00, 12:30-1:30 and 2:00-3:00, and on Tuesday-Thursday from 8:30-10:00, 10:30-12:00, and 1:00-2:30.  Yafa has put together a list of potential classes she could take this semester, and assigned to them a score from 1 - 10 depending on her interest in the class, the time of day, and her own research looking up professors on external rating sites. (Yafa has not yet taken her introductory statistics course, and so doesn't yet know how unreliable and biased these sites, and reviews in general, are.)  (Note that this is not altogether realistic, in that this is a massive oversimplification for the purpose of understanding the key ideas.)                 #   Course Name and Time  Score       1  Art MWF 12:30-1:30  8      2  Art MWF 2:00-3:00  5      3  Art TuTh 10:30-12:00  7      4  Art TuTh 1:00-2:30  5      5  CS MWF 10:00-11:00  8      6  CS TuTh 10:30-12:00  8      7  Econ MWF 8:30-9:30  6      8  Econ MWF 12:30-1:30  7      9  Econ TuTh 10:30-12:00  8      10  Econ TuTh 1:00-2:30  7      11  Hist MWF 8:30-9:30  6      12  Hist TuTh 10:30-12:00  8      13  Lit MWF 10:00-11:00  7                  #   Course Name and Time  Score       14  Lit MWF 12:30-1:30  7      15  Lit MWF 2:00-3:00  6      16  Lit TuTh 8:30-10:00  5      17  MathA MWF 8:30-9:30  3      18  MathA MWF 10:00-11:00  5      19  MathA TuTh 8:30-10:00  7      20  MathB MWF 10:00-11:00  9      21  MathB MWF 12:30-1:30  7      22  MathB TuTh 10:30-12:00  8      23  Sem MWF 10:00-11:00  6      24  Sem MWF 10:00-11:00  8      25  Sem TuTh 10:30-12:00  8      26  Sem TuTh 10:30-12:00  7     Additionally, she has the following stipulations to her schedule:    No student is allowed to enroll in different offerings of the same class, MathA and MathB are considered different classes.    No student can enroll in more than 1 course in the same time-slot.    To prevent burnout, no student each student must have at least one time-slot off every day.    No student can enroll in more than 6 or fewer than 4 classes.    Each income student must enroll in a Freshman Seminar (Sem).    Because of her major, Yafa intends to enroll in at least 1 Math class this semester (either A or B, not exclusive).    Yafa wishes to get a head start on her general education, so she wants to take at least one of either Literature (Lit) or Art (Art). Similarly, she wishes to take at least one of Economics (Econ) or History (Hist).    Let be 1 if she takes course and 0 otherwise.    What is a reasonable linear objective function to maximize?     Write out the constraints which restrict students to at most 1 offering of the same class.      Write out the constraints which restrict students to at most 1 course in a given time-slot.      Write out the constraints which ensure each student will have at least one free time-slot a day.      Write out the constraints which ensures each student is enrolled in at least 4 and at most 6 courses.      Write out the constraint which ensures each student enrolls in one seminar.      Write out the constraint which ensure that Yafa enrolls in (at least) one Math class.      Write out the constraints which ensure that Yafa is on track with her general education credits.      Write out the integer maximization problem we have constructed.      (Optional) Solve it:      "
},
{
  "id": "activity-schedule2",
  "level": "2",
  "url": "sec-scheduling.html#activity-schedule2",
  "type": "Activity",
  "number": "9.3.3",
  "title": "",
  "body": "  Let's call Yafa from student . In a gross oversimplification suppose there were in total 5 students including Yafa registering, and that each class could sit at most 2 students.  Each student assigns their own score to each course, being the score that student gives to course . Let be 1 if student enrolls in course and 0 otherwise.                           Course Name and Time                     1  Art MWF 12:30-1:30  8  10  4  6  9      2  Art MWF 2:00-3:00  5  8  5  5  7      3  Art TuTh 10:30-12:00  7  9  7  5  8      4  Art TuTh 1:00-2:30  5  6  3  5  6      5  CS MWF 10:00-11:00  8  2  8  9  5      6  CS TuTh 10:30-12:00  8  5  7  8  6      7  Econ MWF 8:30-9:30  6  6  8  4  7      8  Econ MWF 12:30-1:30  7  7  7  6  4      9  Econ TuTh 10:30-12:00  8  8  3  6  7      10  Econ TuTh 1:00-2:30  7  9  4  5  6      11  Hist MWF 8:30-9:30  6  5  7  7  6      12  Hist TuTh 10:30-12:00  8  6  8  9  7      13  Lit MWF 10:00-11:00  7  8  6  5  5      14  Lit MWF 12:30-1:30  7  8  7  6  7      15  Lit MWF 2:00-3:00  6  9  6  3  7      16  Lit TuTh 8:30-10:00  5  8  6  2  6      17  MathA MWF 8:30-9:30  3  2  5  5  6      18  MathA MWF 10:00-11:00  5  2  5  6  6      19  MathA TuTh 8:30-10:00  7  4  9  7  8      20  MathB MWF 10:00-11:00  9  1  1  1  8      21  MathB MWF 12:30-1:30  7  1  1  1  9      22  MathB TuTh 10:30-12:00  8  1  1  1  7      23  Sem MWF 10:00-11:00  6  10  9  7  4      24  Sem MWF 10:00-11:00  8  4  7  6  5      25  Sem TuTh 10:30-12:00  8  7  9  6  3      26  Sem TuTh 10:30-12:00  7  5  3  8  6    In addition to the constraints that all students have to abide by, we have the following constraint for each student:    Yafa (student 1) still has her constraints from .    Student 2 has to take at least 1 Art class, either Computer Science (CS) or Math, and either Economics or History.    Student 3 has to take at least 1 Economics class, 1 Math and 1 Literature class.    Student 4 has to take a Computer Science class and a History class.    Student 5 has to take both Math classes.       How might the objective function and constraints from be adapted to this situation?      What additional constraints are required?      Depending on how you set up the objective function, a student who rates everything highly will be prioritized over a student who ranks everything more modestly. To prevent gaming the system, what could be done to ameliorate this effect?      The Dean approves one of the classes to be increased in size to a whopping 3 students. How can the dual problem inform how this choice of class should be made?    "
},
{
  "id": "sec-scheduling-7",
  "level": "2",
  "url": "sec-scheduling.html#sec-scheduling-7",
  "type": "Activity",
  "number": "9.3.4",
  "title": "",
  "body": "  Discuss how the discussions in and may be modified to apply to other situations.   "
},
{
  "id": "sec-scheduling-8",
  "level": "2",
  "url": "sec-scheduling.html#sec-scheduling-8",
  "type": "Project",
  "number": "9.3.5",
  "title": "",
  "body": " Now model a scheduling problem that is not oversimplified, perhaps one based on your current or former institution(s).  "
},
{
  "id": "sec-scheduling-9",
  "level": "2",
  "url": "sec-scheduling.html#sec-scheduling-9",
  "type": "Project",
  "number": "9.3.6",
  "title": "",
  "body": " For the truly ambitious, model a scheduling problem for the offering of courses , factoring in preferred times, preferred courses, preferred classrooms, changes in staffing, fluctuating student demand and flow of courses in the future etc. This is as open a problem as there can be. Someone who solves this problem will gain more recognition than if they solved all the Millennium Problems. .  "
},
{
  "id": "sec-altduality",
  "level": "1",
  "url": "sec-altduality.html",
  "type": "Section",
  "number": "9.4",
  "title": "Another Approach to Strong Duality",
  "body": " Another Approach to Strong Duality  strong duality   In this section, we provide an alternative approach to proving the Strong Duality Theorem .    Hyperplane Seperation Theorem  hyperplane seperation theorem  theorem, hyperplane seperation   Given two disjoint convex sets , there is a hyperplane for some , such that .       Sketch two nonempty convex sets , what does look like here?      Sketch two nonconvex sets where fails.       We prove the case of where there are that minimize . We assume this is true.     Without loss of generality, let . Why can we do this?      Let . Sketch and .      We want to show that is the separating hyperplane. Suppose that was not contained in what must be true about ?      Let such that . Sketch .      Let describe geometrically what represents. (Think dot product, projections and for to start at .)      Let , show that .      Let , show that       Show that .      Show that , and explain why .      Why does the last statement result in a contradiction?     We now introduce a key idea which will tie together the primal and dual problems.   cone   Let . We call the cone of , denoted to be the set .       In , describe .      Prove that for any is convex.      Let denote a matrix, and let denote the cone of the columns of .  Suppose . What does tell us?     We can codify the intuition gained from in the following:   Farkas lemma  The Farkas Lemma   Given a matrix and vector , exactly one of the following is true:    There is a such that and     There is a such that and .        We prove and a useful corollary.     Recall  . How do the cases (A) and (B) of relate to the cone ?      Suppose both cases (A) and (B) of held at the same time. use the product to derive a contradiction.      If (A) were true, what could we say about (B)?      Suppose (A) were false. We want to prove that (B) is true. What does  tell us?      Let's denote the normal vector of the separating hyperplane by (interesting choice 👀) so that for any . Why must ?      Suppose had a column such that , show that there is an such that . Why is this a contradiction?      Why is (B) proven? Why is then proven?      Now that is proven, we apply it to and .  Suppose (A) held, and we had that there was a so that . How would compare to ?     .     .     .    No comparison may be made between and .        Suppose (A) failed. Then there is a satisfing (B) for .  What can we say about compared to ?     .     .     .    No comparison may be made between and .    What can we say about compared to ?     .     .     .    No comparison may be made between and .    What can we say about compared to ?     .     .     .    No comparison may be made between and .        The Farkas Lemma v2  Farkas lemma   Given a matrix and vector , exactly one of the following is true:    There is a such that and .    There is a such that and .    Without loss of generality, we may let in case (B).    Recall the Strong Duality Theorem .   The Strong Duality Theorem  strong duality theorem  theorem, strong duality   Given a pair of primal max-dual min problems, the primal max problem as an optimal solution if and only if the dual min problem has an optimal solution . Moreover, .     Proof of the Strong Duality Theorem   We provide an alternate proof of in this activity.     Suppose that optimal dual solution exists. Explain why by it suffices to show that for some feasible .      Without loss of generality, let and let .  Consider the matrix , and vector . Apply to . What does it mean for (A) to hold?      If (A) holds for , then it holds for the pair , as well as the pair for the same . Why does this show that a feasible optimal solution exists and that ?      On the other hand, suppose (B) holds for . What would it mean for (B) to hold?      We would like to derive a contradiction.  Let denote the vector produced by (B). Suppose . How would compare to and compare to ? Why is this a contradiction?      Suppose . Let .  Show that since that .      Show that since that .      Explain why and produce a contradiction.     "
},
{
  "id": "thm-hyperplaneseperation",
  "level": "2",
  "url": "sec-altduality.html#thm-hyperplaneseperation",
  "type": "Theorem",
  "number": "9.4.1",
  "title": "Hyperplane Seperation Theorem.",
  "body": " Hyperplane Seperation Theorem  hyperplane seperation theorem  theorem, hyperplane seperation   Given two disjoint convex sets , there is a hyperplane for some , such that .   "
},
{
  "id": "sec-altduality-5",
  "level": "2",
  "url": "sec-altduality.html#sec-altduality-5",
  "type": "Activity",
  "number": "9.4.2",
  "title": "",
  "body": "   Sketch two nonempty convex sets , what does look like here?      Sketch two nonconvex sets where fails.    "
},
{
  "id": "sec-altduality-6",
  "level": "2",
  "url": "sec-altduality.html#sec-altduality-6",
  "type": "Activity",
  "number": "9.4.3",
  "title": "",
  "body": "  We prove the case of where there are that minimize . We assume this is true.     Without loss of generality, let . Why can we do this?      Let . Sketch and .      We want to show that is the separating hyperplane. Suppose that was not contained in what must be true about ?      Let such that . Sketch .      Let describe geometrically what represents. (Think dot product, projections and for to start at .)      Let , show that .      Let , show that       Show that .      Show that , and explain why .      Why does the last statement result in a contradiction?    "
},
{
  "id": "def-cone",
  "level": "2",
  "url": "sec-altduality.html#def-cone",
  "type": "Definition",
  "number": "9.4.4",
  "title": "",
  "body": " cone   Let . We call the cone of , denoted to be the set .   "
},
{
  "id": "activity-cone",
  "level": "2",
  "url": "sec-altduality.html#activity-cone",
  "type": "Activity",
  "number": "9.4.5",
  "title": "",
  "body": "   In , describe .      Prove that for any is convex.      Let denote a matrix, and let denote the cone of the columns of .  Suppose . What does tell us?    "
},
{
  "id": "thm-farkas",
  "level": "2",
  "url": "sec-altduality.html#thm-farkas",
  "type": "Theorem",
  "number": "9.4.6",
  "title": "The Farkas Lemma.",
  "body": " Farkas lemma  The Farkas Lemma   Given a matrix and vector , exactly one of the following is true:    There is a such that and     There is a such that and .     "
},
{
  "id": "sec-altduality-12",
  "level": "2",
  "url": "sec-altduality.html#sec-altduality-12",
  "type": "Activity",
  "number": "9.4.7",
  "title": "",
  "body": "  We prove and a useful corollary.     Recall  . How do the cases (A) and (B) of relate to the cone ?      Suppose both cases (A) and (B) of held at the same time. use the product to derive a contradiction.      If (A) were true, what could we say about (B)?      Suppose (A) were false. We want to prove that (B) is true. What does  tell us?      Let's denote the normal vector of the separating hyperplane by (interesting choice 👀) so that for any . Why must ?      Suppose had a column such that , show that there is an such that . Why is this a contradiction?      Why is (B) proven? Why is then proven?      Now that is proven, we apply it to and .  Suppose (A) held, and we had that there was a so that . How would compare to ?     .     .     .    No comparison may be made between and .        Suppose (A) failed. Then there is a satisfing (B) for .  What can we say about compared to ?     .     .     .    No comparison may be made between and .    What can we say about compared to ?     .     .     .    No comparison may be made between and .    What can we say about compared to ?     .     .     .    No comparison may be made between and .      "
},
{
  "id": "cor-farkasv2",
  "level": "2",
  "url": "sec-altduality.html#cor-farkasv2",
  "type": "Corollary",
  "number": "9.4.8",
  "title": "The Farkas Lemma v2.",
  "body": " The Farkas Lemma v2  Farkas lemma   Given a matrix and vector , exactly one of the following is true:    There is a such that and .    There is a such that and .    Without loss of generality, we may let in case (B).   "
},
{
  "id": "thm-altstrongduality",
  "level": "2",
  "url": "sec-altduality.html#thm-altstrongduality",
  "type": "Theorem",
  "number": "9.4.9",
  "title": "The Strong Duality Theorem.",
  "body": " The Strong Duality Theorem  strong duality theorem  theorem, strong duality   Given a pair of primal max-dual min problems, the primal max problem as an optimal solution if and only if the dual min problem has an optimal solution . Moreover, .   "
},
{
  "id": "sec-altduality-16",
  "level": "2",
  "url": "sec-altduality.html#sec-altduality-16",
  "type": "Activity",
  "number": "9.4.10",
  "title": "Proof of the Strong Duality Theorem.",
  "body": " Proof of the Strong Duality Theorem   We provide an alternate proof of in this activity.     Suppose that optimal dual solution exists. Explain why by it suffices to show that for some feasible .      Without loss of generality, let and let .  Consider the matrix , and vector . Apply to . What does it mean for (A) to hold?      If (A) holds for , then it holds for the pair , as well as the pair for the same . Why does this show that a feasible optimal solution exists and that ?      On the other hand, suppose (B) holds for . What would it mean for (B) to hold?      We would like to derive a contradiction.  Let denote the vector produced by (B). Suppose . How would compare to and compare to ? Why is this a contradiction?      Suppose . Let .  Show that since that .      Show that since that .      Explain why and produce a contradiction.    "
},
{
  "id": "sec-lareview",
  "level": "1",
  "url": "sec-lareview.html",
  "type": "Section",
  "number": "A.1",
  "title": "Linear Algebra Review",
  "body": " Linear Algebra Review   This is an extremely brief review of linear algebra. It is understood that linear algebra is a pre-requisite for this course. However, everyone needs refreshers or a reference for specifics from time to time.  If a more thorough treatment is needed, then there are numerous linear algebra texts, and many that are OERs like this text.  Understanding Linear Algebra by David Austin is an excellent text with a focus on developing geometric intuition, and less so on formal proofs. For a more theory oriented text,  Linear Algebra by Jim Hefferon is an excellent choice.     A real-valued matrix is a rectangular array of the form Also denoted is a matrix, denoting that has rows and columns. We note that is the entry of in row , column .       matrices are also referred to as vectors : This is the convention we use, with vectors being column matrices. Some texts default to row vectors.      Given a matrix , we define the transpose of denoted as or              Given two matrices of the same dimensions , we define their sum entrywise, that is: .             Given matrices , we define their product to be .              Note that this dry and technical presentation fails to capture even an iota of the beautiful and deep theory this operation is meant to encapsulate. Nor is it meant to. Please see the aforementioned texts for a deeper and richer discussion.    Given a matrix and real number , we define the scalar product to be .             We denote the zero matrix as or if the dimensions are clear from context.      For matrices , and scalars , assuming appropriate dimensions, the following hold.     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .         is a square matrix . The entries where are the diagonal of . If when , then is a diagonal matrix .      The identity matrix  is the diagonal square matrix where the diagonal entries are all .      For a matrix, .      For a matrix, we say is invertible if there exists a matrix such that . We usual call the inverse of and denote it .      If is an invertible square matrix, then is unique.     If then , one can check this.   Note that not every matrix is invertible. For example is not invertible.    Let a set be equipped with operations and a scalar product. Let and be scalars. Then is a vector space if it satisfies the following axioms:     Associativity of vector addition : .     Commutativity of vector addition : .     Identity element of vector addition : there exists a vector called the zero vector such that .     Inverse elements of vector addition : for each vector , there exists a vector called the additive inverse of such that .    Compatibility of scalar multiplication with real multiplication: .     Identity element of scalar multiplication : .     Distributivity of scalar multiplication with respect to vector addition : .     Distributivity of scalar multiplication with respect to field addition : .      There are a wide variety of interesting vector spaces spanning across all subfields of math. However, for our purposes, we will stick to boring ol' .    Let be a vector space, then is a subspace of if it is also a vector space, with the same operations.      Let be a vector space, then is a subspace of , if is nonempty, and if for any and scalars , we have that .     In , the set forms a subspace of .     Let be a vector space and . Then a linear combination of these vectors is a sum:       Let be a vector space and . Then the span of defined   If we say that  spans  .     The set spans .     Let be a vector space and . Then is linearly independent if the equation if and only if each =0. Otherwise, is dependent.     Since so is dependent.   is linearly independent.     Let be a vector space.    Any superset of a spanning set of is also a spanning set.    Any subset of a linearly independent set of vectors in is also linearly independent.        Let be a vector space and . Then is a basis of if for any , always has a unique solution.      Let be a vector space. A spanning, linearly independent subset of is a basis of .      is a basis for .   "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-lareview.html#def-matrix",
  "type": "Definition",
  "number": "A.1.1",
  "title": "",
  "body": "  A real-valued matrix is a rectangular array of the form Also denoted is a matrix, denoting that has rows and columns. We note that is the entry of in row , column .   "
},
{
  "id": "def-vector",
  "level": "2",
  "url": "sec-lareview.html#def-vector",
  "type": "Definition",
  "number": "A.1.2",
  "title": "",
  "body": "   matrices are also referred to as vectors : This is the convention we use, with vectors being column matrices. Some texts default to row vectors.   "
},
{
  "id": "def-transpose",
  "level": "2",
  "url": "sec-lareview.html#def-transpose",
  "type": "Definition",
  "number": "A.1.3",
  "title": "",
  "body": "  Given a matrix , we define the transpose of denoted as or    "
},
{
  "id": "sec-lareview-6",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-6",
  "type": "Example",
  "number": "A.1.4",
  "title": "",
  "body": "      "
},
{
  "id": "def-matrixsum",
  "level": "2",
  "url": "sec-lareview.html#def-matrixsum",
  "type": "Definition",
  "number": "A.1.5",
  "title": "",
  "body": "  Given two matrices of the same dimensions , we define their sum entrywise, that is: .   "
},
{
  "id": "sec-lareview-8",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-8",
  "type": "Example",
  "number": "A.1.6",
  "title": "",
  "body": "      "
},
{
  "id": "def-matrixproduct",
  "level": "2",
  "url": "sec-lareview.html#def-matrixproduct",
  "type": "Definition",
  "number": "A.1.7",
  "title": "",
  "body": "  Given matrices , we define their product to be .   "
},
{
  "id": "sec-lareview-10",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-10",
  "type": "Example",
  "number": "A.1.8",
  "title": "",
  "body": "         "
},
{
  "id": "def-scalarproduct",
  "level": "2",
  "url": "sec-lareview.html#def-scalarproduct",
  "type": "Definition",
  "number": "A.1.9",
  "title": "",
  "body": "  Given a matrix and real number , we define the scalar product to be .   "
},
{
  "id": "sec-lareview-13",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-13",
  "type": "Example",
  "number": "A.1.10",
  "title": "",
  "body": "      "
},
{
  "id": "def-zeromatrix",
  "level": "2",
  "url": "sec-lareview.html#def-zeromatrix",
  "type": "Definition",
  "number": "A.1.11",
  "title": "",
  "body": "  We denote the zero matrix as or if the dimensions are clear from context.   "
},
{
  "id": "thm-matrixoperation",
  "level": "2",
  "url": "sec-lareview.html#thm-matrixoperation",
  "type": "Theorem",
  "number": "A.1.12",
  "title": "",
  "body": "  For matrices , and scalars , assuming appropriate dimensions, the following hold.     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .     .     "
},
{
  "id": "def-squarematrix",
  "level": "2",
  "url": "sec-lareview.html#def-squarematrix",
  "type": "Definition",
  "number": "A.1.13",
  "title": "",
  "body": "   is a square matrix . The entries where are the diagonal of . If when , then is a diagonal matrix .   "
},
{
  "id": "def-identitymatrix",
  "level": "2",
  "url": "sec-lareview.html#def-identitymatrix",
  "type": "Definition",
  "number": "A.1.14",
  "title": "",
  "body": "  The identity matrix  is the diagonal square matrix where the diagonal entries are all .   "
},
{
  "id": "thm-identity",
  "level": "2",
  "url": "sec-lareview.html#thm-identity",
  "type": "Theorem",
  "number": "A.1.15",
  "title": "",
  "body": "  For a matrix, .   "
},
{
  "id": "def-matrixinverse",
  "level": "2",
  "url": "sec-lareview.html#def-matrixinverse",
  "type": "Definition",
  "number": "A.1.16",
  "title": "",
  "body": "  For a matrix, we say is invertible if there exists a matrix such that . We usual call the inverse of and denote it .   "
},
{
  "id": "thm-matrixinv",
  "level": "2",
  "url": "sec-lareview.html#thm-matrixinv",
  "type": "Theorem",
  "number": "A.1.17",
  "title": "",
  "body": "  If is an invertible square matrix, then is unique.   "
},
{
  "id": "sec-lareview-21",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-21",
  "type": "Example",
  "number": "A.1.18",
  "title": "",
  "body": " If then , one can check this.  "
},
{
  "id": "def-vectorspace",
  "level": "2",
  "url": "sec-lareview.html#def-vectorspace",
  "type": "Definition",
  "number": "A.1.19",
  "title": "",
  "body": "  Let a set be equipped with operations and a scalar product. Let and be scalars. Then is a vector space if it satisfies the following axioms:     Associativity of vector addition : .     Commutativity of vector addition : .     Identity element of vector addition : there exists a vector called the zero vector such that .     Inverse elements of vector addition : for each vector , there exists a vector called the additive inverse of such that .    Compatibility of scalar multiplication with real multiplication: .     Identity element of scalar multiplication : .     Distributivity of scalar multiplication with respect to vector addition : .     Distributivity of scalar multiplication with respect to field addition : .     "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "sec-lareview.html#def-subspace",
  "type": "Definition",
  "number": "A.1.20",
  "title": "",
  "body": "  Let be a vector space, then is a subspace of if it is also a vector space, with the same operations.   "
},
{
  "id": "thm-subspace",
  "level": "2",
  "url": "sec-lareview.html#thm-subspace",
  "type": "Theorem",
  "number": "A.1.21",
  "title": "",
  "body": "  Let be a vector space, then is a subspace of , if is nonempty, and if for any and scalars , we have that .   "
},
{
  "id": "sec-lareview-27",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-27",
  "type": "Example",
  "number": "A.1.22",
  "title": "",
  "body": " In , the set forms a subspace of .  "
},
{
  "id": "def-linearcombination",
  "level": "2",
  "url": "sec-lareview.html#def-linearcombination",
  "type": "Definition",
  "number": "A.1.23",
  "title": "",
  "body": "  Let be a vector space and . Then a linear combination of these vectors is a sum:    "
},
{
  "id": "def-span",
  "level": "2",
  "url": "sec-lareview.html#def-span",
  "type": "Definition",
  "number": "A.1.24",
  "title": "",
  "body": "  Let be a vector space and . Then the span of defined   If we say that  spans  .   "
},
{
  "id": "sec-lareview-30",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-30",
  "type": "Example",
  "number": "A.1.25",
  "title": "",
  "body": " The set spans .  "
},
{
  "id": "def-independence",
  "level": "2",
  "url": "sec-lareview.html#def-independence",
  "type": "Definition",
  "number": "A.1.26",
  "title": "",
  "body": "  Let be a vector space and . Then is linearly independent if the equation if and only if each =0. Otherwise, is dependent.   "
},
{
  "id": "sec-lareview-32",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-32",
  "type": "Example",
  "number": "A.1.27",
  "title": "",
  "body": " Since so is dependent.   is linearly independent.  "
},
{
  "id": "thm-indyspan",
  "level": "2",
  "url": "sec-lareview.html#thm-indyspan",
  "type": "Theorem",
  "number": "A.1.28",
  "title": "",
  "body": "  Let be a vector space.    Any superset of a spanning set of is also a spanning set.    Any subset of a linearly independent set of vectors in is also linearly independent.     "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-lareview.html#def-basis",
  "type": "Definition",
  "number": "A.1.29",
  "title": "",
  "body": "  Let be a vector space and . Then is a basis of if for any , always has a unique solution.   "
},
{
  "id": "thm-basisindyspan",
  "level": "2",
  "url": "sec-lareview.html#thm-basisindyspan",
  "type": "Theorem",
  "number": "A.1.30",
  "title": "",
  "body": "  Let be a vector space. A spanning, linearly independent subset of is a basis of .   "
},
{
  "id": "sec-lareview-36",
  "level": "2",
  "url": "sec-lareview.html#sec-lareview-36",
  "type": "Example",
  "number": "A.1.31",
  "title": "",
  "body": "  is a basis for .  "
},
{
  "id": "sec-probreview",
  "level": "1",
  "url": "sec-probreview.html",
  "type": "Section",
  "number": "A.2",
  "title": "Probability Theory Review",
  "body": " Probability Theory Review   This is an extremely brief review of the limited probability theory we utilize in . It's not even particularly fair to call this a review, since probability is not a prerequisite to this course. However, the limited amount we use is fairly straightforward and intuitive.  If a more thorough treatment is needed, then depending on your goals, there are good options available. For someone looking to explore some elementary probability theory, the introductory statistics textbook  OpenIntro Statistics by David Diez, Christopher Barr, and Mine Çetinkaya-Rundel does a good job presenting this material. It also is an excellent introductory statistics text with labs and data available. For a calculus-based, theory heavy treatment of this subject, I recommend  Probability: Lecture and Labs by Mark Huber.     In probability, an experiment is an occurrence with a measurable result. Each instance of an experiment is a trial . The possible results of each trial are called outcomes . The set of all possible outcomes for an experiment is the sample space for that experiment.      Given an experiment with sample space :  An event  is a subset of .  Supposing each outcome in the sample space is equally likely, then the probability of , denoted is        But what does it mean for an event to have probability ? It means that if I repeat the experiment over and over, the proportion of them where is true should be .  So if I roll a die over and over, the proportion of them that give me a 6 over time should be . So if we roll a dice 10000 times, we would expect one sixth of them to come up heads:      A random variable is a function from sample space to an outcome set. For our purposes, this set of outcomes will always be .    A probability distribution is, roughly speaking, a complete description of a random variable and the likelihood of each output. In the case of random variables with a finite number of possible outputs a probability distribution table is a convenient way of presenting this information.    To check if something is a valid probability distribution, for any possible outcome of we must have:  . This ensures all outcomes are valid probabilities.  . The sum of the probabilities of all outcomes should be 100% of the outcomes       Poisoned apples   Snow White has a basket of 10 apples, 3 are poisoned. She is going to pick 4 apples at random to eat for some reason. Let denote the number of poisoned apples she eats.  The probability distribution for would be: equivalently: or:   This can be seen by the following R simulation:      Given a finite random variable , its expected value is the predicted average outcome of experiments, and is computed:    Note that the Expected Value may not be a value we actually expect, that is, may not be one of the outcomes, just an average outcome. We think of this as the outcomes of , weighted by their likelihood, so the more likely outcomes contribute more than the less likely ones.    Recall . The expected value of poisoned apples would be   We can compute the mean of the previously simulated number of poisoned apples and visualize it:   Be sure to run the simulation in first!    "
},
{
  "id": "def-basicprob",
  "level": "2",
  "url": "sec-probreview.html#def-basicprob",
  "type": "Definition",
  "number": "A.2.1",
  "title": "",
  "body": "  In probability, an experiment is an occurrence with a measurable result. Each instance of an experiment is a trial . The possible results of each trial are called outcomes . The set of all possible outcomes for an experiment is the sample space for that experiment.   "
},
{
  "id": "def-prob",
  "level": "2",
  "url": "sec-probreview.html#def-prob",
  "type": "Definition",
  "number": "A.2.2",
  "title": "",
  "body": "  Given an experiment with sample space :  An event  is a subset of .  Supposing each outcome in the sample space is equally likely, then the probability of , denoted is      "
},
{
  "id": "sec-probreview-5",
  "level": "2",
  "url": "sec-probreview.html#sec-probreview-5",
  "type": "Remark",
  "number": "A.2.3",
  "title": "",
  "body": " But what does it mean for an event to have probability ? It means that if I repeat the experiment over and over, the proportion of them where is true should be .  So if I roll a die over and over, the proportion of them that give me a 6 over time should be . So if we roll a dice 10000 times, we would expect one sixth of them to come up heads:   "
},
{
  "id": "def-rv",
  "level": "2",
  "url": "sec-probreview.html#def-rv",
  "type": "Definition",
  "number": "A.2.4",
  "title": "",
  "body": "  A random variable is a function from sample space to an outcome set. For our purposes, this set of outcomes will always be .   "
},
{
  "id": "sec-probreview-7",
  "level": "2",
  "url": "sec-probreview.html#sec-probreview-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability distribution probability distribution table "
},
{
  "id": "sec-probreview-8",
  "level": "2",
  "url": "sec-probreview.html#sec-probreview-8",
  "type": "Remark",
  "number": "A.2.5",
  "title": "",
  "body": "  To check if something is a valid probability distribution, for any possible outcome of we must have:  . This ensures all outcomes are valid probabilities.  . The sum of the probabilities of all outcomes should be 100% of the outcomes     "
},
{
  "id": "ex-apple",
  "level": "2",
  "url": "sec-probreview.html#ex-apple",
  "type": "Example",
  "number": "A.2.6",
  "title": "Poisoned apples.",
  "body": " Poisoned apples   Snow White has a basket of 10 apples, 3 are poisoned. She is going to pick 4 apples at random to eat for some reason. Let denote the number of poisoned apples she eats.  The probability distribution for would be: equivalently: or:   This can be seen by the following R simulation:    "
},
{
  "id": "def-expectation",
  "level": "2",
  "url": "sec-probreview.html#def-expectation",
  "type": "Definition",
  "number": "A.2.7",
  "title": "",
  "body": " Given a finite random variable , its expected value is the predicted average outcome of experiments, and is computed:   "
},
{
  "id": "sec-probreview-12",
  "level": "2",
  "url": "sec-probreview.html#sec-probreview-12",
  "type": "Example",
  "number": "A.2.8",
  "title": "",
  "body": "  Recall . The expected value of poisoned apples would be   We can compute the mean of the previously simulated number of poisoned apples and visualize it:   Be sure to run the simulation in first!   "
},
{
  "id": "simplexpivoter",
  "level": "1",
  "url": "simplexpivoter.html",
  "type": "Appendix",
  "number": "B",
  "title": "Simplex Pivoter",
  "body": " Simplex Pivoter  Instructions for use are as follows:   First, enter in the number of variables and the number of bounds (the sizes of respectively.)    In the cells generated below, fill in the entries.    In the tableau generated below, click on an entry to pivot on that entry.         "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
