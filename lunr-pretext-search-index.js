var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-intro",
  "level": "1",
  "url": "sec-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "A Brief Geometric Review of Linear Algebra",
  "body": " A Brief Geometric Review of Linear Algebra    Let   What is ?      Consider the augemnted matrix     What given a fixed , what should be for the system of equations encoded by to have a unique solution?    What does this mean geometrically?    If the rows of are independent, and , then what is the dimension of the solution space of ?      Consider the matrix     Describe neccesary and sufficient conditions for the columns to be linearly independent.    Describe neccesary and sufficient conditions for the columns to be a spanning set.    Describe neccesary and sufficient conditions for the columns to be a basis for .       Consider the square matrix      Explain why for any constant and  geometrically, i.e. without cofactor expansion.    Explain why for any constant and  geometrically.    Explain why for any constant and  geometrically.      Some resource for linear algebra define the determinant algebraically, then prove that it has these special geometric properties. In many ways this is a natural approach to introduce the subject to student whose background is primarily algebraic. However, in my opinion, this is backwards. It makes far more sense to approach the determinant geometrically first, there is a property of transformations we want to measure, we call this quantity the determinant, it happens to have cool algebraic properties.  Speaking of       Michael Atiyah (1929 - 2019), mathematician and Field's medalist (1966), once said  Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine.    What do you suppose Dr. Atiyah meant by this quote? How might it have impacted your mathematical journey or education?    "
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
  "body": "  Consider the augemnted matrix     What given a fixed , what should be for the system of equations encoded by to have a unique solution?    What does this mean geometrically?    If the rows of are independent, and , then what is the dimension of the solution space of ?   "
},
{
  "id": "activity-basis",
  "level": "2",
  "url": "sec-intro.html#activity-basis",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "  Consider the matrix     Describe neccesary and sufficient conditions for the columns to be linearly independent.    Describe neccesary and sufficient conditions for the columns to be a spanning set.    Describe neccesary and sufficient conditions for the columns to be a basis for .   "
},
{
  "id": "sec-intro-5",
  "level": "2",
  "url": "sec-intro.html#sec-intro-5",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "   Consider the square matrix      Explain why for any constant and  geometrically, i.e. without cofactor expansion.    Explain why for any constant and  geometrically.    Explain why for any constant and  geometrically.   "
},
{
  "id": "sec-intro-6",
  "level": "2",
  "url": "sec-intro.html#sec-intro-6",
  "type": "Observation",
  "number": "1.1.1",
  "title": "",
  "body": "  Some resource for linear algebra define the determinant algebraically, then prove that it has these special geometric properties. In many ways this is a natural approach to introduce the subject to student whose background is primarily algebraic. However, in my opinion, this is backwards. It makes far more sense to approach the determinant geometrically first, there is a property of transformations we want to measure, we call this quantity the determinant, it happens to have cool algebraic properties.  Speaking of    "
},
{
  "id": "sec-intro-7",
  "level": "2",
  "url": "sec-intro.html#sec-intro-7",
  "type": "Activity",
  "number": "1.1.5",
  "title": "",
  "body": "  Michael Atiyah (1929 - 2019), mathematician and Field's medalist (1966), once said  Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine.    What do you suppose Dr. Atiyah meant by this quote? How might it have impacted your mathematical journey or education?   "
},
{
  "id": "sec-section-initial",
  "level": "1",
  "url": "sec-section-initial.html",
  "type": "Section",
  "number": "1.2",
  "title": "Initial Examples",
  "body": " Initial Examples  Here we begin with some initial examples motivating the sort of problems we will study.    A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor two hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.    Write two inequalities in terms of that represent the constraints on the time of the sculptor.    Write two inequalities in terms of that represent the constraints on the time of the painter.    Treating as and as , sketch the region on the cartesian plane satisfying all the above inequalities.    The feasible region for the art shop.       Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?    If there was a surge in demand for vases, and they started selling for $1000, how would that change your approach and the solution?      Suppose Carlos planning a meal is shopping for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti with sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.     Let denote pounds of bell pepper, denote pounds of chicken and denote cups of spaghetti with sauce. Find three inequalities in terms of the for how much of each food Carlos should eat to meet his minimum dietary requirements.    How might we solve this problem? How is it different from ?    This seems like a wildly oversimplistic dietary problem, because it is. How might we complicate it for more realism?     The Canonical Maximazation Linear Programming Problem is the problem: Where   The Canonical Minimization Linear Programming Problem is the problem: Where        above are called objective functions .      Any point satisfying either of the above set of inequalities are called feasible solutions .      Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .     Given the canonical minimization problem: How might we convert this to a canonical maximization problem?   How might we in general convert a minimization problem to a maximization problem?    "
},
{
  "id": "activity-exampleart",
  "level": "2",
  "url": "sec-section-initial.html#activity-exampleart",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor two hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.    Write two inequalities in terms of that represent the constraints on the time of the sculptor.    Write two inequalities in terms of that represent the constraints on the time of the painter.    Treating as and as , sketch the region on the cartesian plane satisfying all the above inequalities.    The feasible region for the art shop.       Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?    If there was a surge in demand for vases, and they started selling for $1000, how would that change your approach and the solution?   "
},
{
  "id": "activity-examplediet",
  "level": "2",
  "url": "sec-section-initial.html#activity-examplediet",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  Suppose Carlos planning a meal is shopping for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti with sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.   "
},
{
  "id": "def-canonicalproblems",
  "level": "2",
  "url": "sec-section-initial.html#def-canonicalproblems",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  The Canonical Maximazation Linear Programming Problem is the problem: Where   The Canonical Minimization Linear Programming Problem is the problem: Where    "
},
{
  "id": "def-objectivefunction",
  "level": "2",
  "url": "sec-section-initial.html#def-objectivefunction",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "   above are called objective functions .   "
},
{
  "id": "def-feasiblesolution",
  "level": "2",
  "url": "sec-section-initial.html#def-feasiblesolution",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  Any point satisfying either of the above set of inequalities are called feasible solutions .   "
},
{
  "id": "def-optimialsolution",
  "level": "2",
  "url": "sec-section-initial.html#def-optimialsolution",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .   "
},
{
  "id": "activity-change",
  "level": "2",
  "url": "sec-section-initial.html#activity-change",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": " Given the canonical minimization problem: How might we convert this to a canonical maximization problem?   How might we in general convert a minimization problem to a maximization problem?   "
},
{
  "id": "sec-section-convexity",
  "level": "1",
  "url": "sec-section-convexity.html",
  "type": "Section",
  "number": "1.3",
  "title": "Polyhedral Convextiy",
  "body": " Polyhedral Convextiy  In this section, we establish the geometric notions which underlie our work.    In , describe geometrically what the following represent.                                     Let . Let for some      What is if ?    What is if ?    What is if ?    What is if ?    Describe the set of points .         Let Describe the set of points .           Given , we call the set the line segment between and .      Let , we say that is convex if given any , also contains the line segment between .      For each of the following subsets of , sketch the region, decide if it is convex or not.     .     .     (in polar coordinates).     (in polar coordinates).     .     .       Let be defined by for some (ie is a half-space of ).     Let . Explain why for any .    Show that for any , that .    Let , that is, there are such that and . Show that .    Show that     Conclude that is convex.       Let be convex sets.     Show that is convex. Hint: Let . Why is the line segment between them contained in ? ?    Sketch an induction argument to show that if is convex, is convex.    Find convex sets so that is not convex.     Prove why the feasible region of a canonical linear programming problem is convex.     A convex set that is equal to a finite intersection of half-spaces (defined by either strict or non-strict inequalities) is polyhedral convex .      The feasible region for is:         The feasible region for is:         Given in we define the norm of to be       Given in we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?      Describe for .      A set is bounded if there is a such that .      Which of the activities , are bounded?      Let be the feasible region of of a canonical maximization linear programming problem, let be the objective function.    Consider the point , which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the the dot product)    Let such that there is a so that . Explain why cannot be a maximizer of .    On the other hand, suppose  IS a maximizer of , what must be true about ?    Consider the canonical maximization linear programming problem:  Maximzie subject to:   How do the statements you've made above apply here? Where IS maximized? Is it consistent with what you said before?       Let be a convex set. We say is an extreme point of if there are no so that .  In other words, does not lie on any non-trivial line segment contained in .      For each of the following convex sets, find it's extreme points (if any).    The feasible region of the problem in .     .     .      If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .      If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .        Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?    Let be optimal solutions of a canonical linear programming problem, giving optimal solution . Show that for any , and that .    Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?      So, we see that the hunt for optimal solutions boils down to a hunt for extreme points.    In How many lines are needed to intersect to obtain a point?    In How many planes are needed to intersect to obtain a point?    In How many dimensional hyperplanes are needed to intersect to obtain a point?                          Suppose a canonical linear programming problem in is bounded by the usual hyperplanes corresponding to as well as additional hyperplanes. How many potential points of intersection could there be?                               So for a canonical linear programming problem in bounded by an additional 15 hyperplanes, how many potential extreme points are there?    "
},
{
  "id": "activity-planes",
  "level": "2",
  "url": "sec-section-convexity.html#activity-planes",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "  In , describe geometrically what the following represent.                                 "
},
{
  "id": "activity-segment",
  "level": "2",
  "url": "sec-section-convexity.html#activity-segment",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "   Let . Let for some      What is if ?    What is if ?    What is if ?    What is if ?    Describe the set of points .         Let Describe the set of points .        "
},
{
  "id": "def-segment",
  "level": "2",
  "url": "sec-section-convexity.html#def-segment",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Given , we call the set the line segment between and .   "
},
{
  "id": "def-convex",
  "level": "2",
  "url": "sec-section-convexity.html#def-convex",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  Let , we say that is convex if given any , also contains the line segment between .   "
},
{
  "id": "sec-section-convexity-7",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-7",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  For each of the following subsets of , sketch the region, decide if it is convex or not.     .     .     (in polar coordinates).     (in polar coordinates).     .     .   "
},
{
  "id": "sec-section-convexity-8",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-8",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "   Let be defined by for some (ie is a half-space of ).     Let . Explain why for any .    Show that for any , that .    Let , that is, there are such that and . Show that .    Show that     Conclude that is convex.   "
},
{
  "id": "sec-section-convexity-9",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-9",
  "type": "Activity",
  "number": "1.3.5",
  "title": "",
  "body": "   Let be convex sets.     Show that is convex. Hint: Let . Why is the line segment between them contained in ? ?    Sketch an induction argument to show that if is convex, is convex.    Find convex sets so that is not convex.   "
},
{
  "id": "sec-section-convexity-10",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-10",
  "type": "Activity",
  "number": "1.3.6",
  "title": "",
  "body": " Prove why the feasible region of a canonical linear programming problem is convex.  "
},
{
  "id": "def-polyhedralconvex",
  "level": "2",
  "url": "sec-section-convexity.html#def-polyhedralconvex",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  A convex set that is equal to a finite intersection of half-spaces (defined by either strict or non-strict inequalities) is polyhedral convex .   "
},
{
  "id": "sec-section-convexity-12",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-12",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  The feasible region for is:      "
},
{
  "id": "sec-section-convexity-13",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-13",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  The feasible region for is:      "
},
{
  "id": "def-norm",
  "level": "2",
  "url": "sec-section-convexity.html#def-norm",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  Given in we define the norm of to be    "
},
{
  "id": "def-ball",
  "level": "2",
  "url": "sec-section-convexity.html#def-ball",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  Given in we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?   "
},
{
  "id": "sec-section-convexity-16",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-16",
  "type": "Activity",
  "number": "1.3.7",
  "title": "",
  "body": "  Describe for .   "
},
{
  "id": "def-bounded",
  "level": "2",
  "url": "sec-section-convexity.html#def-bounded",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  A set is bounded if there is a such that .   "
},
{
  "id": "sec-section-convexity-18",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-18",
  "type": "Activity",
  "number": "1.3.8",
  "title": "",
  "body": "  Which of the activities , are bounded?   "
},
{
  "id": "activity-ball",
  "level": "2",
  "url": "sec-section-convexity.html#activity-ball",
  "type": "Activity",
  "number": "1.3.9",
  "title": "",
  "body": "  Let be the feasible region of of a canonical maximization linear programming problem, let be the objective function.    Consider the point , which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the the dot product)    Let such that there is a so that . Explain why cannot be a maximizer of .    On the other hand, suppose  IS a maximizer of , what must be true about ?    Consider the canonical maximization linear programming problem:  Maximzie subject to:   How do the statements you've made above apply here? Where IS maximized? Is it consistent with what you said before?    "
},
{
  "id": "def-extremepoint",
  "level": "2",
  "url": "sec-section-convexity.html#def-extremepoint",
  "type": "Definition",
  "number": "1.3.9",
  "title": "",
  "body": "  Let be a convex set. We say is an extreme point of if there are no so that .  In other words, does not lie on any non-trivial line segment contained in .   "
},
{
  "id": "sec-section-convexity-21",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-21",
  "type": "Activity",
  "number": "1.3.10",
  "title": "",
  "body": "  For each of the following convex sets, find it's extreme points (if any).    The feasible region of the problem in .     .     .   "
},
{
  "id": "thm-boundedextreme",
  "level": "2",
  "url": "sec-section-convexity.html#thm-boundedextreme",
  "type": "Theorem",
  "number": "1.3.10",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .   "
},
{
  "id": "thm-unboundedextreme",
  "level": "2",
  "url": "sec-section-convexity.html#thm-unboundedextreme",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .     "
},
{
  "id": "sec-section-convexity-24",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-24",
  "type": "Activity",
  "number": "1.3.11",
  "title": "",
  "body": "  Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?    Let be optimal solutions of a canonical linear programming problem, giving optimal solution . Show that for any , and that .    Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?   "
},
{
  "id": "sec-section-convexity-25",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-25",
  "type": "Activity",
  "number": "1.3.12",
  "title": "",
  "body": "  So, we see that the hunt for optimal solutions boils down to a hunt for extreme points.    In How many lines are needed to intersect to obtain a point?    In How many planes are needed to intersect to obtain a point?    In How many dimensional hyperplanes are needed to intersect to obtain a point?                          Suppose a canonical linear programming problem in is bounded by the usual hyperplanes corresponding to as well as additional hyperplanes. How many potential points of intersection could there be?                               So for a canonical linear programming problem in bounded by an additional 15 hyperplanes, how many potential extreme points are there?   "
},
{
  "id": "sec-exercisesgeometric",
  "level": "1",
  "url": "sec-exercisesgeometric.html",
  "type": "Section",
  "number": "1.4",
  "title": "Problems for Chapter 1",
  "body": " Problems for   Draw and shade appropriate regions in as described below, where .   A bounded polyhedral convex subset.    An unbounded polyhedral convex subset.    A bounded nonconvex subset    An unbounded nonconvex subset.    A convex subset that is not a polyhedral convex subset.    A convex subset having no extreme points.    A polyhedral convex subset having no extreme points.    A bounded polyhedral convex subset having exactly one extreme point.    An unbounded polyhedral convex subset having exactly one extreme point.    An bounded convex subset having infinitely many extreme points.    An unbounded convex subset having infinitely many extreme points.    Convert each of the linear optimization problems below to canonical form as in .                       A drive-in sells homemade hot dogs and hamburgers. The hot dogs take cup of flour and oz of beef to make. A hamburger bun takes cups of flour and oz of beef. Suppose the drive-in has cups of flour and oz of beef on hand. If hot dogs sell for $4 and hamburgers for $6, how much of each should they make to maximize revenue?    A rancher has a herd to feed who requires 54, 48, and 72 units of the nutritional elements A, B, and C, respectively, per day. Feed 1 costs 10 cents a pound and contains 8, 4 and 3 units of elements A, B, C respectively. Feed 2 costs 8 cents a pound and contains 2, 4 and 6 units of elements A, B, C respectively. How much of each feed should the rancher purchase to cover the herds nutritional needs while minimizing cost?    A drug company sells three different formulations of vitamin complex and mineral complex. The first formulation consists entirely of vitamin complex and sells for $1 per unit. The second formulation consists of 3\/4 of a unit of vitamin complex and 1\/4 of a unit of mineral complex and sells for $2 per unit. The third formulation consists of 1\/2 of a unit of each of the complexes and sells for $3 per unit. If the company has 100 units of vitamin complex and 75 units of mineral complex available, how many units of each formulation should the company produce so as to maximize sales revenue?         For each of the following, sketch the feasible region , and find the optimal solution by identifying the extreme points of and evaluating.              (A).     (B).     (D).     (E).     (F).     (G).     (H).    Prove that (H) has infinitely many optimal solutions, two of which lie on extreme points. Identify these points on the plot of the feasible region done in .  Prove that if are distinct optimal solutions of a canonical linear optimization problem, then all points on the line segment between are also optimal solutions of the problem. Conclude that a canonical linear optimization problem can have 0, 1 or infinitely many optimal solutions and no other possibilities.  Consider the canonical linear optimization problem  Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal.  Consider the canonical linear optimization problem  Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal. (It is recommended that you use some technological tools to solve for the resulting linear systems.)   Express as a polynomial in terms of . How does this relate to , ?  Show that is unbounded. (Hint: sketch the feasible region and consider feasible points on the line .)  Show that is infeasible.  For each of the following, determine whether or not the statement is TRUE or FALSE. If TRUE, provide a proof, if FALSE, provide a counterexample.   If a canonical feasible linear optimization problem is unbounded, then it's feasible region is unbounded.    If a canonical feasible linear optimization problem has unbounded feasible region, then it is unbounded.     "
},
{
  "id": "exercises-geometric-1",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "Draw and shade appropriate regions in as described below, where .   A bounded polyhedral convex subset.    An unbounded polyhedral convex subset.    A bounded nonconvex subset    An unbounded nonconvex subset.    A convex subset that is not a polyhedral convex subset.    A convex subset having no extreme points.    A polyhedral convex subset having no extreme points.    A bounded polyhedral convex subset having exactly one extreme point.    An unbounded polyhedral convex subset having exactly one extreme point.    An bounded convex subset having infinitely many extreme points.    An unbounded convex subset having infinitely many extreme points.   "
},
{
  "id": "ex-convertcanon",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-convertcanon",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "Convert each of the linear optimization problems below to canonical form as in .                       A drive-in sells homemade hot dogs and hamburgers. The hot dogs take cup of flour and oz of beef to make. A hamburger bun takes cups of flour and oz of beef. Suppose the drive-in has cups of flour and oz of beef on hand. If hot dogs sell for $4 and hamburgers for $6, how much of each should they make to maximize revenue?    A rancher has a herd to feed who requires 54, 48, and 72 units of the nutritional elements A, B, and C, respectively, per day. Feed 1 costs 10 cents a pound and contains 8, 4 and 3 units of elements A, B, C respectively. Feed 2 costs 8 cents a pound and contains 2, 4 and 6 units of elements A, B, C respectively. How much of each feed should the rancher purchase to cover the herds nutritional needs while minimizing cost?    A drug company sells three different formulations of vitamin complex and mineral complex. The first formulation consists entirely of vitamin complex and sells for $1 per unit. The second formulation consists of 3\/4 of a unit of vitamin complex and 1\/4 of a unit of mineral complex and sells for $2 per unit. The third formulation consists of 1\/2 of a unit of each of the complexes and sells for $3 per unit. If the company has 100 units of vitamin complex and 75 units of mineral complex available, how many units of each formulation should the company produce so as to maximize sales revenue?        "
},
{
  "id": "ex-geosolve",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-geosolve",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "For each of the following, sketch the feasible region , and find the optimal solution by identifying the extreme points of and evaluating.              (A).     (B).     (D).     (E).     (F).     (G).     (H).   "
},
{
  "id": "exercises-geometric-4",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-4",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "Prove that (H) has infinitely many optimal solutions, two of which lie on extreme points. Identify these points on the plot of the feasible region done in . "
},
{
  "id": "exercises-geometric-5",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-5",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "Prove that if are distinct optimal solutions of a canonical linear optimization problem, then all points on the line segment between are also optimal solutions of the problem. Conclude that a canonical linear optimization problem can have 0, 1 or infinitely many optimal solutions and no other possibilities. "
},
{
  "id": "ex-5planes",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-5planes",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "Consider the canonical linear optimization problem  Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal. "
},
{
  "id": "ex-6planes",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-6planes",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "Consider the canonical linear optimization problem  Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal. (It is recommended that you use some technological tools to solve for the resulting linear systems.)  "
},
{
  "id": "exercises-geometric-8",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-8",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "Express as a polynomial in terms of . How does this relate to , ? "
},
{
  "id": "exercises-geometric-9",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-9",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": "Show that is unbounded. (Hint: sketch the feasible region and consider feasible points on the line .) "
},
{
  "id": "exercises-geometric-10",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-10",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": "Show that is infeasible. "
},
{
  "id": "exercises-geometric-11",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-11",
  "type": "Exercise",
  "number": "1.4.11",
  "title": "",
  "body": "For each of the following, determine whether or not the statement is TRUE or FALSE. If TRUE, provide a proof, if FALSE, provide a counterexample.   If a canonical feasible linear optimization problem is unbounded, then it's feasible region is unbounded.    If a canonical feasible linear optimization problem has unbounded feasible region, then it is unbounded.   "
},
{
  "id": "sec-pivot",
  "level": "1",
  "url": "sec-pivot.html",
  "type": "Section",
  "number": "2.1",
  "title": "Canonical Programs and the Simplex Pivot",
  "body": " Canonical Programs and the Simplex Pivot  We begin the process of establishing an algorithm.    Consider the canonical maximization problem:     Note that we may rewrite this as a system of equalities by introducing the slack variables  .       What must be true about the slack variables ?                     What is the largest value could obtain?                    is unbounded.        Similarly the canonical minimization problem:   Where   May be rewritten as:       As usual, we focus on maximization for now.    We can rewrite as Which may be recorded by the Tucker Tableau :                                                                                                                                        The variables at the top are called the decision variables or independent variables , the variables on the side are the slack variables , basis variables or basic variables .  The basic solution recorded by a Tucker Tableau is the solution where each decision variable has the value zero.      Note that this tableau records a basic solution . We will further explore what this means in a bit. But for now, if , then:       Consider the region in bound by and . Let and     If , what points in satisfy ?    If , what points in satisfy ?    What points in satisfy both ?    What points in satisfy both ?         Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.    Set up the canonical maximization problem for the information given above and record it in the following tableau:                                                                                       Recall that this tableau has a basic solution where . If we slightly increase , do we increase ?    Let's increase . Take the row corresponding to and solve for in terms of .   For each equality corresponding to the rows replace with the value you found ealier and rewrite the left hand sides.    Record this new system in the following tableau:                                                                                       Recall that this new tableau has a basic solution where , what point is this?    If we increase from 0, do we increase ? What about increasing ?    Let's increase . Take the row corrresponding to and repeat Tasks (c) and (d) to obtain a tableau of the form:                                                                                       What point in represents the basic solution for this new tableau?    If I increase from 0, do I increase ? What about ?    Consider the plot of the feasible region for this problem. What exactly, geometrically, did we end up doing here?         Based on , what is a criteria to determine if a feasible tableau has a basic optimal solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .        Consider the tableau:                                                                     along with the corresponding system of equations.    Solve for in terms of .    In each of the other two equalities, replace with the expression we found above and simplify.    Record this new system in the following tableau:                                                                         The following is the algorithm for a pivot transformation :    Pick a non-zero entry in the tableau but not in the objective row or constraint column.    Transpose the decision and slack variables corresponding to the position of .    Replace by .    Replace each entry in the same row as (but not ) with .    Replace each entry in the same column as (but not ) with .    Each entry not in the same row or column as but in the same column as (which is in the same row as ) and in the same row as (which is in the same column as ) is replaced with .         Consider the problem: maximize subject to: which we may encode as:                                                                                                        Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Look at your decision variables. Which two lines are we currently sitting on?    How do we know we now have an optimal solution based only on the tableau?    Confirm your solution geometrically:     "
},
{
  "id": "activity-maxslack",
  "level": "2",
  "url": "sec-pivot.html#activity-maxslack",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  Consider the canonical maximization problem:     Note that we may rewrite this as a system of equalities by introducing the slack variables  .       What must be true about the slack variables ?                     What is the largest value could obtain?                    is unbounded.     "
},
{
  "id": "sec-pivot-4",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-4",
  "type": "Observation",
  "number": "2.1.1",
  "title": "",
  "body": "  Similarly the canonical minimization problem:   Where   May be rewritten as:      "
},
{
  "id": "def-tuckertableau",
  "level": "2",
  "url": "sec-pivot.html#def-tuckertableau",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  We can rewrite as Which may be recorded by the Tucker Tableau :                                                                                                                                        The variables at the top are called the decision variables or independent variables , the variables on the side are the slack variables , basis variables or basic variables .  The basic solution recorded by a Tucker Tableau is the solution where each decision variable has the value zero.   "
},
{
  "id": "sec-pivot-7",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-7",
  "type": "Observation",
  "number": "2.1.3",
  "title": "",
  "body": "  Note that this tableau records a basic solution . We will further explore what this means in a bit. But for now, if , then:    "
},
{
  "id": "sec-pivot-8",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-8",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Consider the region in bound by and . Let and     If , what points in satisfy ?    If , what points in satisfy ?    What points in satisfy both ?    What points in satisfy both ?      "
},
{
  "id": "activity-widget",
  "level": "2",
  "url": "sec-pivot.html#activity-widget",
  "type": "Activity",
  "number": "2.1.3",
  "title": "",
  "body": "  Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.    Set up the canonical maximization problem for the information given above and record it in the following tableau:                                                                                       Recall that this tableau has a basic solution where . If we slightly increase , do we increase ?    Let's increase . Take the row corresponding to and solve for in terms of .   For each equality corresponding to the rows replace with the value you found ealier and rewrite the left hand sides.    Record this new system in the following tableau:                                                                                       Recall that this new tableau has a basic solution where , what point is this?    If we increase from 0, do we increase ? What about increasing ?    Let's increase . Take the row corrresponding to and repeat Tasks (c) and (d) to obtain a tableau of the form:                                                                                       What point in represents the basic solution for this new tableau?    If I increase from 0, do I increase ? What about ?    Consider the plot of the feasible region for this problem. What exactly, geometrically, did we end up doing here?      "
},
{
  "id": "sec-pivot-10",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-10",
  "type": "Activity",
  "number": "2.1.4",
  "title": "",
  "body": "  Based on , what is a criteria to determine if a feasible tableau has a basic optimal solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .     "
},
{
  "id": "sec-pivot-11",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-11",
  "type": "Activity",
  "number": "2.1.5",
  "title": "",
  "body": "  Consider the tableau:                                                                     along with the corresponding system of equations.    Solve for in terms of .    In each of the other two equalities, replace with the expression we found above and simplify.    Record this new system in the following tableau:                                                                      "
},
{
  "id": "def-pivot",
  "level": "2",
  "url": "sec-pivot.html#def-pivot",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": "  The following is the algorithm for a pivot transformation :    Pick a non-zero entry in the tableau but not in the objective row or constraint column.    Transpose the decision and slack variables corresponding to the position of .    Replace by .    Replace each entry in the same row as (but not ) with .    Replace each entry in the same column as (but not ) with .    Each entry not in the same row or column as but in the same column as (which is in the same row as ) and in the same row as (which is in the same column as ) is replaced with .     "
},
{
  "id": "activity-pivotexample",
  "level": "2",
  "url": "sec-pivot.html#activity-pivotexample",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": "   Consider the problem: maximize subject to: which we may encode as:                                                                                                        Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Look at your decision variables. Which two lines are we currently sitting on?    How do we know we now have an optimal solution based only on the tableau?    Confirm your solution geometrically:    "
},
{
  "id": "sec-curious",
  "level": "1",
  "url": "sec-curious.html",
  "type": "Section",
  "number": "2.2",
  "title": "A Curious Situation",
  "body": " A Curious Situation    Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, ie: Of course, the values shouldn't be negative, so .  But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:                                                                                                                                                                            Pivot on the entry with the :                                                         -1                             Compare this solution and tableau to the final solution in . What do you notice?          "
},
{
  "id": "activity-insurance",
  "level": "2",
  "url": "sec-curious.html#activity-insurance",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, ie: Of course, the values shouldn't be negative, so .  But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:                                                                                                                                                                            Pivot on the entry with the :                                                         -1                             Compare this solution and tableau to the final solution in . What do you notice?       "
},
{
  "id": "sec-simplexmax",
  "level": "1",
  "url": "sec-simplexmax.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Simplex Algorithm for Canonical Maximization",
  "body": " The Simplex Algorithm for Canonical Maximization   Consider the following tableau:                                                                                                                 Note that each for this tableau. Write out the corresponding system of canonical inequalities (this should be easy, almost everything is zero). Are they all satisfied?   Which of the following is sufficient condition for a Tucker Tableau to correspond to a feasible solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .        Consider the following tableau:                                                                                                                   Note that each for this tableau.    Why is this tableau feasible?    Which of the following could we increase from zero to increase our objective function value?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    What is the largest value we could increase while satisfying our 3 inequalities? What about ?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .      Consider the following tableau:                                                                     Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .        Consider the canonical maximization problem and basic solution encoded by the following tableau:                                                                                       Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?    Consider a sketch of our feasible region:  The feasible region for a canonical maximization problem.     We could choose to pivot ( in the sketch) with either . Only one of these would result in a feasible solution. Looking graphically, which is it?    What's the connection between the two above tasks?    For a canonical linear program and basic solution encoded by a Tucker tableau:                                                                                                                                        If we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .      Based on the observations above, what should be the pivot entry for the following tableau?                                                                                         For each of the following tableaus, determine what if any of the following are true:   The tableau corresponds to an infeasible solution.    The tableau records a basic optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                With all this, we finally may define our Simplex Algorithm for Maximum Basic Feasible Tableaus .    The Simplex Algorithm for Maximum Basic Feasible Tableaus   Ensure that each , that is that the solution is feasible.  IF every : STOP the current solution is optimal.  PICK a column such that .  IF each : STOP the objective function is unbounded.  PICK a row that minimizes .  PIVOT on .  GOTO 1.       Recall the canonical tableau                                                                                                                                        Suppose that after pivoting on according to we had that . Show that        Apply to the following tableaus.                                                                                                                                                                                                                                                                   Each of the following tableaus records the origin as a basic solution, which is not feasible. Determine geometrically which of these tableau record a problem which has an optimal solution. Then answer the follow-up questions.                                                                                                                                                                              For the one problem where the origin is not feasible, but the problem has an optimal solution, what pivot would result in a feasible solution?    If , what should be true about so that is positive afterwards?    Consider the inequality . Is there a solution which satisfies this where each ?    Consider the inequality . Is there a solution which satisfies this where each ?      We now want to concoct a scheme to turn all the non-negative, if possible.  Consider the tableau:                                                                                                                       Suppose that . We want to turn positive while making sure stay positive.    Suppose each , what can we say about the associated problem?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Who should we pivot on?    Any .    All of the such that is minimized.    All of the such that if then and is minimized.      Note that we have no idea if is positive or negative before we started, much less after. Why don't we care?    With this, we may define our algorithm for potentiall non-feasible tableau    The Simplex Algorithm for Maximum Tableaus   IF each , GOTO 8.  PICK the largest such that .  IF : STOP the problem in infeasible.  PICK a column such that .  PICK a row so that .  PIVOT on .  GOTO 1.  APPLY .       Apply to the following tableau:                                                                                                                                                              "
},
{
  "id": "activity-tableaufeasible",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaufeasible",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": " Consider the following tableau:                                                                                                                 Note that each for this tableau. Write out the corresponding system of canonical inequalities (this should be easy, almost everything is zero). Are they all satisfied?   Which of the following is sufficient condition for a Tucker Tableau to correspond to a feasible solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .     "
},
{
  "id": "activity-tableaubounded",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaubounded",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "  Consider the following tableau:                                                                                                                   Note that each for this tableau.    Why is this tableau feasible?    Which of the following could we increase from zero to increase our objective function value?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    What is the largest value we could increase while satisfying our 3 inequalities? What about ?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .      Consider the following tableau:                                                                     Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .     "
},
{
  "id": "sec-simplexmax-4",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-4",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "  Consider the canonical maximization problem and basic solution encoded by the following tableau:                                                                                       Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?    Consider a sketch of our feasible region:  The feasible region for a canonical maximization problem.     We could choose to pivot ( in the sketch) with either . Only one of these would result in a feasible solution. Looking graphically, which is it?    What's the connection between the two above tasks?    For a canonical linear program and basic solution encoded by a Tucker tableau:                                                                                                                                        If we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .      Based on the observations above, what should be the pivot entry for the following tableau?                                                                                      "
},
{
  "id": "sec-simplexmax-5",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-5",
  "type": "Activity",
  "number": "2.3.4",
  "title": "",
  "body": "  For each of the following tableaus, determine what if any of the following are true:   The tableau corresponds to an infeasible solution.    The tableau records a basic optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
},
{
  "id": "def-simplexcanonmaxbf",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexcanonmaxbf",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  The Simplex Algorithm for Maximum Basic Feasible Tableaus   Ensure that each , that is that the solution is feasible.  IF every : STOP the current solution is optimal.  PICK a column such that .  IF each : STOP the objective function is unbounded.  PICK a row that minimizes .  PIVOT on .  GOTO 1.    "
},
{
  "id": "sec-simplexmax-8",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-8",
  "type": "Activity",
  "number": "2.3.5",
  "title": "",
  "body": "  Recall the canonical tableau                                                                                                                                        Suppose that after pivoting on according to we had that . Show that    "
},
{
  "id": "sec-simplexmax-9",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-9",
  "type": "Activity",
  "number": "2.3.6",
  "title": "",
  "body": "   Apply to the following tableaus.                                                                                                                                                                                                                                                                "
},
{
  "id": "sec-simplexmax-10",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-10",
  "type": "Activity",
  "number": "2.3.7",
  "title": "",
  "body": "  Each of the following tableaus records the origin as a basic solution, which is not feasible. Determine geometrically which of these tableau record a problem which has an optimal solution. Then answer the follow-up questions.                                                                                                                                                                              For the one problem where the origin is not feasible, but the problem has an optimal solution, what pivot would result in a feasible solution?    If , what should be true about so that is positive afterwards?    Consider the inequality . Is there a solution which satisfies this where each ?    Consider the inequality . Is there a solution which satisfies this where each ?   "
},
{
  "id": "sec-simplexmax-11",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-11",
  "type": "Activity",
  "number": "2.3.8",
  "title": "",
  "body": "  We now want to concoct a scheme to turn all the non-negative, if possible.  Consider the tableau:                                                                                                                       Suppose that . We want to turn positive while making sure stay positive.    Suppose each , what can we say about the associated problem?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Who should we pivot on?    Any .    All of the such that is minimized.    All of the such that if then and is minimized.      Note that we have no idea if is positive or negative before we started, much less after. Why don't we care?   "
},
{
  "id": "def-simplexmax",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexmax",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "  The Simplex Algorithm for Maximum Tableaus   IF each , GOTO 8.  PICK the largest such that .  IF : STOP the problem in infeasible.  PICK a column such that .  PICK a row so that .  PIVOT on .  GOTO 1.  APPLY .    "
},
{
  "id": "sec-simplexmax-14",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-14",
  "type": "Activity",
  "number": "2.3.9",
  "title": "",
  "body": "  Apply to the following tableau:                                                                                                                                                             "
},
{
  "id": "sec-simplexmin",
  "level": "1",
  "url": "sec-simplexmin.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Simplex Algorithm for Canonical Minimization",
  "body": " The Simplex Algorithm for Canonical Minimization    Recall that the canonical minimization problem:   Where .  This problem may be recorded in the following tableau:                                                                                                                                           The negative transpose of this tableau is:                                                                                                                                            Show that this negative transpose of a canonical minimization tableau has the same feasible region and optimal solution as the original minimization problem.    This allows us to define a minimization algorithm.    The Simplex Algorithm for Minimization Tableaus   TAKE the Negative Transpose.  APPLY .       Apply to the following minimization tableau:                                                                                   "
},
{
  "id": "def-negativetranspose",
  "level": "2",
  "url": "sec-simplexmin.html#def-negativetranspose",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  Recall that the canonical minimization problem:   Where .  This problem may be recorded in the following tableau:                                                                                                                                           The negative transpose of this tableau is:                                                                                                                                         "
},
{
  "id": "sec-simplexmin-3",
  "level": "2",
  "url": "sec-simplexmin.html#sec-simplexmin-3",
  "type": "Activity",
  "number": "2.4.1",
  "title": "",
  "body": "  Show that this negative transpose of a canonical minimization tableau has the same feasible region and optimal solution as the original minimization problem.   "
},
{
  "id": "def-simplexmin",
  "level": "2",
  "url": "sec-simplexmin.html#def-simplexmin",
  "type": "Definition",
  "number": "2.4.2",
  "title": "",
  "body": "  The Simplex Algorithm for Minimization Tableaus   TAKE the Negative Transpose.  APPLY .    "
},
{
  "id": "sec-simplexmin-6",
  "level": "2",
  "url": "sec-simplexmin.html#sec-simplexmin-6",
  "type": "Activity",
  "number": "2.4.2",
  "title": "",
  "body": "  Apply to the following minimization tableau:                                                                                  "
},
{
  "id": "sec-cycling",
  "level": "1",
  "url": "sec-cycling.html",
  "type": "Section",
  "number": "2.5",
  "title": "Cycling",
  "body": " Cycling    Consider the following canonical maximization tableau:                                                                                               Perform the following sequence of pivots, ensure each time that it is a valid pivot according to , and keep track of the variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Compare your final tableau to the initial tableau. Are there any similarities?      Consider canonical linear programming problem: Maximzie , subject to     Consider a sequence of pivots swapping ,  , . In each of these cases, what is the point of intersection?          If a series of pivots in accordance to allows one to return to a set of basic variables achieved earlier in the algorithm, we call this phenomena Cycling .      If a pivot on a tableau gives a new tableau corresponding to the same basic solution, we call the pivot a degenerate pivot.    Cycling is bad, since potentially this allows the Simplex Algorithm to not terminate. Fortunately, there is a solution to this issue.   Bland's Anticycling Rules   List all variables, independent and dependent in the initial tableau. Then consider the following rules:    Whenever there is more than one possible choice for a pivot row according to : select the row corresponding to the variable closest to the front of the initial list.    Whenever there is more than one possible choice for a pivot column according to : select the column corresponding to the variable closest to the front of the initial list.    Then the Simplex Algorthm will not cycle.     For the sake of notation, we denote the initial tableau:                                                                                                                                     and order the variables in the associated way. Suppose we follow Bland's rules and still have cycling. That is, there is a sequence of pivots and bases (set of basic variables) . We call a variable  fickle if is in one, but not all of the bases. That is, it leaves a basis, and reenters it later during the cycle.  Note that in order for Cycling to occur, each pivot must be degenerate (ask yourself why?). So if is fickle, for each basic solution during the cycle.  Since the number of variables is finite, the set of fickle variables is also finite, and let denote the fickle variable with largest subscript. Suppose that (why must such a exist?). Denote the entering variable from with .                                                                                                                                                                                              Note that must also be fickle (why?) and so .  We call the dictionary for a basis the system of equations corresponding to that basis. So the dictionary for is which we can write as: Note that since the above pivot was valid, we must have that and since the pivot was degenerate, we have .  Now, because we have cycling, we must have that reenters the basis at some point                                                                                                                                                                                                  Note that for this pivot to be valid, we have that . If we let denote the dictionary before re-enters the basis, we have: So note that the solution space to the system of equations for both these dictionaries are the same. So we have a solution for (not neccessarily feasible ie non-negativity may fail) that must also be a solution to :   So we have where for . So via algebra:   The above equation holds true no matter what is. Thus: Note that , NOT is entering the basis. If is already in the basis, . Otherwise, , otherwise would have entered by Bland's Anticyling rules. We've also shown . Thus which is only possible if there is some such that   From this, we know that . So , but , so is fickle. Since is the largest index of a fickle variable, . Note that is not entering from , so . Thus .  But is fickle, so in . But then, we would have picked , not to leave.                                                                                                                     which is a contradiction.     If we follow then no basis is visited twice during the Simplex Algorithm. Note that is non-decreasing with each pivot. Must the Simplex Algorithm terminate? Why?    "
},
{
  "id": "activity-cyclingexample",
  "level": "2",
  "url": "sec-cycling.html#activity-cyclingexample",
  "type": "Activity",
  "number": "2.5.1",
  "title": "",
  "body": "  Consider the following canonical maximization tableau:                                                                                               Perform the following sequence of pivots, ensure each time that it is a valid pivot according to , and keep track of the variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Compare your final tableau to the initial tableau. Are there any similarities?   "
},
{
  "id": "sec-cycling-3",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-3",
  "type": "Activity",
  "number": "2.5.2",
  "title": "",
  "body": "  Consider canonical linear programming problem: Maximzie , subject to     Consider a sequence of pivots swapping ,  , . In each of these cases, what is the point of intersection?       "
},
{
  "id": "def-Cycling",
  "level": "2",
  "url": "sec-cycling.html#def-Cycling",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  If a series of pivots in accordance to allows one to return to a set of basic variables achieved earlier in the algorithm, we call this phenomena Cycling .   "
},
{
  "id": "def-degenerate",
  "level": "2",
  "url": "sec-cycling.html#def-degenerate",
  "type": "Definition",
  "number": "2.5.2",
  "title": "",
  "body": "  If a pivot on a tableau gives a new tableau corresponding to the same basic solution, we call the pivot a degenerate pivot.   "
},
{
  "id": "thm-BlandAnticycling",
  "level": "2",
  "url": "sec-cycling.html#thm-BlandAnticycling",
  "type": "Theorem",
  "number": "2.5.3",
  "title": "Bland’s Anticycling Rules.",
  "body": " Bland's Anticycling Rules   List all variables, independent and dependent in the initial tableau. Then consider the following rules:    Whenever there is more than one possible choice for a pivot row according to : select the row corresponding to the variable closest to the front of the initial list.    Whenever there is more than one possible choice for a pivot column according to : select the column corresponding to the variable closest to the front of the initial list.    Then the Simplex Algorthm will not cycle.   "
},
{
  "id": "sec-cycling-8",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-8",
  "type": "Proof",
  "number": "2.5.1",
  "title": "",
  "body": " For the sake of notation, we denote the initial tableau:                                                                                                                                     and order the variables in the associated way. Suppose we follow Bland's rules and still have cycling. That is, there is a sequence of pivots and bases (set of basic variables) . We call a variable  fickle if is in one, but not all of the bases. That is, it leaves a basis, and reenters it later during the cycle.  Note that in order for Cycling to occur, each pivot must be degenerate (ask yourself why?). So if is fickle, for each basic solution during the cycle.  Since the number of variables is finite, the set of fickle variables is also finite, and let denote the fickle variable with largest subscript. Suppose that (why must such a exist?). Denote the entering variable from with .                                                                                                                                                                                              Note that must also be fickle (why?) and so .  We call the dictionary for a basis the system of equations corresponding to that basis. So the dictionary for is which we can write as: Note that since the above pivot was valid, we must have that and since the pivot was degenerate, we have .  Now, because we have cycling, we must have that reenters the basis at some point                                                                                                                                                                                                  Note that for this pivot to be valid, we have that . If we let denote the dictionary before re-enters the basis, we have: So note that the solution space to the system of equations for both these dictionaries are the same. So we have a solution for (not neccessarily feasible ie non-negativity may fail) that must also be a solution to :   So we have where for . So via algebra:   The above equation holds true no matter what is. Thus: Note that , NOT is entering the basis. If is already in the basis, . Otherwise, , otherwise would have entered by Bland's Anticyling rules. We've also shown . Thus which is only possible if there is some such that   From this, we know that . So , but , so is fickle. Since is the largest index of a fickle variable, . Note that is not entering from , so . Thus .  But is fickle, so in . But then, we would have picked , not to leave.                                                                                                                     which is a contradiction.  "
},
{
  "id": "sec-cycling-9",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-9",
  "type": "Activity",
  "number": "2.5.3",
  "title": "",
  "body": "  If we follow then no basis is visited twice during the Simplex Algorithm. Note that is non-decreasing with each pivot. Must the Simplex Algorithm terminate? Why?   "
},
{
  "id": "sec-simplexsage",
  "level": "1",
  "url": "sec-simplexsage.html",
  "type": "Section",
  "number": "2.6",
  "title": "Using Sage",
  "body": " Using Sage    Suppose we wanted to solve the following maximization problem by hand:                                                                                                                   How annoying would this be?    Very.    Extraordinarily.    Horrifically.    I have nothing to do for the next hour anyway. Hope I don't forget a minus sign!      Given that we have a developed an algorithm, guaranteed to terminate, using only arithmetic in it's steps, it seems reasonable to think this can be done via a computer.    Let's start simple, suppose we want to solve:                                                                                       We can enter the above problem into sage via:     We can plot the feasible region and objective level curves, since this is a 2d problem:     We could also encode this problem into a dictionary. We will understand that .    If we want to pivot from to we can write that as: Then we can update the dictionary: We should read this as:                                                                                       What pivot should we do next? Encode it below:     We can check at any point if we have an optimal solution.       So if we want to solve:                                                                                                                   We can encode this in:     We now encode the above problem in a dictionary.     We can see who can enter: If we say, pick to enter, see who can legitimately leave: Then select one to leave     From here, pick another legitimate pivot and perform it:     This still seems like a it would be annoying. Why don't we revisit the original problem and then just run the simplex algorithm:       Remember that cycling example ?    Encode the problem into sage:     Now let's run the simplex algorithm to see what the deal is:      "
},
{
  "id": "sec-simplexsage-2",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-2",
  "type": "Exploration",
  "number": "2.6.1",
  "title": "",
  "body": "  Suppose we wanted to solve the following maximization problem by hand:                                                                                                                   How annoying would this be?    Very.    Extraordinarily.    Horrifically.    I have nothing to do for the next hour anyway. Hope I don't forget a minus sign!     "
},
{
  "id": "activity-initialsage",
  "level": "2",
  "url": "sec-simplexsage.html#activity-initialsage",
  "type": "Activity",
  "number": "2.6.2",
  "title": "",
  "body": "  Let's start simple, suppose we want to solve:                                                                                       We can enter the above problem into sage via:     We can plot the feasible region and objective level curves, since this is a 2d problem:     We could also encode this problem into a dictionary. We will understand that .    If we want to pivot from to we can write that as: Then we can update the dictionary: We should read this as:                                                                                       What pivot should we do next? Encode it below:     We can check at any point if we have an optimal solution.    "
},
{
  "id": "sec-simplexsage-5",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-5",
  "type": "Activity",
  "number": "2.6.3",
  "title": "",
  "body": "  So if we want to solve:                                                                                                                   We can encode this in:     We now encode the above problem in a dictionary.     We can see who can enter: If we say, pick to enter, see who can legitimately leave: Then select one to leave     From here, pick another legitimate pivot and perform it:     This still seems like a it would be annoying. Why don't we revisit the original problem and then just run the simplex algorithm:    "
},
{
  "id": "sec-simplexsage-6",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-6",
  "type": "Activity",
  "number": "2.6.4",
  "title": "",
  "body": "  Remember that cycling example ?    Encode the problem into sage:     Now let's run the simplex algorithm to see what the deal is:    "
},
{
  "id": "sec-exercisessimplex",
  "level": "1",
  "url": "sec-exercisessimplex.html",
  "type": "Section",
  "number": "2.7",
  "title": "Problems for Chapter 2",
  "body": " Problems for   Consider the tableau:                                                                    Write out the canonical maximization problem encoded by the tableau.    State the basic solution for this tableau.    Determine if the basic solution is feasible.    Pivot on the entry .    Write out the new canonical maximization problem in terms of the non-basic variables and the new basic solution in terms of .    Consider the tableau:                                                                              Write out the canonical minimization problem encoded by the tableau.    State the basic solution for this tableau.    Determine if the basic solution is feasible.    Pivot on the entry .    Write out the new canonical minimization problem in terms of the non-basic variables and the new basic solution in terms of .    For each of the following canonical maximization tableaus:   Write out the current basic solution.    Determine if the current basic solution is feasible.    Determine if the tableau detects that the feasible region is unbounded.    Determine if the tableau detects that the problem is infeasible. If so, ignore the rest of the prompts.    Determine if the tableau detects that the problem is unbounded. If so, ignore the rest of the prompts.    Determine if the current basic solution is optimal. If so, ignore the rest of the prompts.    Identify all valid pivot entries.    Pivot on the entry corresponding to Bland's Anti-cycling rules.    Write out the new basic solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  For each problem in solve these problems using the Simplex Algorithm.  Solve the following using the Simplex Algorithm.                                                                                                                                                                                                                                                           For each problem in Sketch the feasible region and label the extreme points traversed by the simplex algorithm in order.  Solve the following using the Simplex Algorithm.   A firm produces a rare blend of scotch whiskey. The blend must contain at least 42% alcohol, at least 25% Highland blend, and no more than 15% malt. Three distillery products can be combined for the blend.  Product A costs $12 a gallon, is 46% alcohol, 30% Highland blend and 10% malt. Product B costs $8 a gallon, is 40% alcohol, 20% Highland blend and 5% malt. Product C costs $14 a gallon, is 45% alcohol, 25% Highland blend and 2% malt.  How much of each product should be used to produce 100 gallons of blend at minimal cost?    A company produces three types of tires for the SUV market. In their manufacture, the tires are processed on two machines, a molder and a capper. Tire type A takes 8 hours in the molder, 4 on the capper and sells for $45. Tire type B takes 10 hours in the molder, 7 on the capper and sells for $50. Tire type C takes 5 hours in the molder, 6 on the capper and sells for $40. At least 75 of each type of tire needs to be made each week to fulfill current contracts. If 3000 hours are available each week for molders and 2700 for cappers, how many of each type of tire should be made each week to maximize revenue?    The canonical programming problem below potentially cycles (due to H.W. Kuhn.). Solve the problem by using the simplex algorithm with Bland anti-cycling rules.                                                                                                                  The following have multiple optimal solutions, use the Simplex Algorithm and then pivots to classify all the optimal solutions.                                                                                                                                                                               Consider a tableau which whose basic solution is optimal. Prove that this is the unique optimal solution if and only if each .  Consider a square tableau:                                                                                                                                    Suppose we perform pivots so we achieve a tableau of the form:                                                                                                                                     Let and . For each of the following matrices perform appropriate pivots to achieve and confirm .                  Explain why in that in general.    Find neccesary and sufficient conditions for the minimization tableau                                                                                                 to have a feasible basic solution.    If a minimization tableau as depicted above has a feasible basic solution, must it also have a feasible basic maximum solution? Prove or find a counterexample.    Find neccesary and sufficient conditions for                                                                                                                      to encode feasible basic solutions for both it's maximization and minimization problems.    Prove that each tableau always encodes a unique basic solution by first showing that the default starting basic solution is unique, and then proving that each pivot preserves the uniqueness of the basic solution.  Note that each basic solution is the intersection of hyperplanes. What would it take for this to be empty or contain multiple points? Think in terms of linear (in)dependence and solving linear systems.    "
},
{
  "id": "exercises-simplex-1",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-1",
  "type": "Exercise",
  "number": "2.7.1",
  "title": "",
  "body": "Consider the tableau:                                                                    Write out the canonical maximization problem encoded by the tableau.    State the basic solution for this tableau.    Determine if the basic solution is feasible.    Pivot on the entry .    Write out the new canonical maximization problem in terms of the non-basic variables and the new basic solution in terms of .   "
},
{
  "id": "exercises-simplex-2",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-2",
  "type": "Exercise",
  "number": "2.7.2",
  "title": "",
  "body": "Consider the tableau:                                                                              Write out the canonical minimization problem encoded by the tableau.    State the basic solution for this tableau.    Determine if the basic solution is feasible.    Pivot on the entry .    Write out the new canonical minimization problem in terms of the non-basic variables and the new basic solution in terms of .   "
},
{
  "id": "exercises-simplex-3",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-3",
  "type": "Exercise",
  "number": "2.7.3",
  "title": "",
  "body": "For each of the following canonical maximization tableaus:   Write out the current basic solution.    Determine if the current basic solution is feasible.    Determine if the tableau detects that the feasible region is unbounded.    Determine if the tableau detects that the problem is infeasible. If so, ignore the rest of the prompts.    Determine if the tableau detects that the problem is unbounded. If so, ignore the rest of the prompts.    Determine if the current basic solution is optimal. If so, ignore the rest of the prompts.    Identify all valid pivot entries.    Pivot on the entry corresponding to Bland's Anti-cycling rules.    Write out the new basic solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 "
},
{
  "id": "exercises-simplex-4",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-4",
  "type": "Exercise",
  "number": "2.7.4",
  "title": "",
  "body": "For each problem in solve these problems using the Simplex Algorithm. "
},
{
  "id": "ex-solvesimplex",
  "level": "2",
  "url": "sec-exercisessimplex.html#ex-solvesimplex",
  "type": "Exercise",
  "number": "2.7.5",
  "title": "",
  "body": "Solve the following using the Simplex Algorithm.                                                                                                                                                                                                                                                          "
},
{
  "id": "exercises-simplex-6",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-6",
  "type": "Exercise",
  "number": "2.7.6",
  "title": "",
  "body": "For each problem in Sketch the feasible region and label the extreme points traversed by the simplex algorithm in order. "
},
{
  "id": "exercises-simplex-7",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-7",
  "type": "Exercise",
  "number": "2.7.7",
  "title": "",
  "body": "Solve the following using the Simplex Algorithm.   A firm produces a rare blend of scotch whiskey. The blend must contain at least 42% alcohol, at least 25% Highland blend, and no more than 15% malt. Three distillery products can be combined for the blend.  Product A costs $12 a gallon, is 46% alcohol, 30% Highland blend and 10% malt. Product B costs $8 a gallon, is 40% alcohol, 20% Highland blend and 5% malt. Product C costs $14 a gallon, is 45% alcohol, 25% Highland blend and 2% malt.  How much of each product should be used to produce 100 gallons of blend at minimal cost?    A company produces three types of tires for the SUV market. In their manufacture, the tires are processed on two machines, a molder and a capper. Tire type A takes 8 hours in the molder, 4 on the capper and sells for $45. Tire type B takes 10 hours in the molder, 7 on the capper and sells for $50. Tire type C takes 5 hours in the molder, 6 on the capper and sells for $40. At least 75 of each type of tire needs to be made each week to fulfill current contracts. If 3000 hours are available each week for molders and 2700 for cappers, how many of each type of tire should be made each week to maximize revenue?   "
},
{
  "id": "exercises-simplex-8",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-8",
  "type": "Exercise",
  "number": "2.7.8",
  "title": "",
  "body": "The canonical programming problem below potentially cycles (due to H.W. Kuhn.). Solve the problem by using the simplex algorithm with Bland anti-cycling rules.                                                                                                                 "
},
{
  "id": "exercises-simplex-9",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-9",
  "type": "Exercise",
  "number": "2.7.9",
  "title": "",
  "body": "The following have multiple optimal solutions, use the Simplex Algorithm and then pivots to classify all the optimal solutions.                                                                                                                                                                              "
},
{
  "id": "exercises-simplex-10",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-10",
  "type": "Exercise",
  "number": "2.7.10",
  "title": "",
  "body": "Consider a tableau which whose basic solution is optimal. Prove that this is the unique optimal solution if and only if each . "
},
{
  "id": "ex-invert",
  "level": "2",
  "url": "sec-exercisessimplex.html#ex-invert",
  "type": "Exercise",
  "number": "2.7.11",
  "title": "",
  "body": "Consider a square tableau:                                                                                                                                    Suppose we perform pivots so we achieve a tableau of the form:                                                                                                                                     Let and . For each of the following matrices perform appropriate pivots to achieve and confirm .                 "
},
{
  "id": "exercises-simplex-12",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-12",
  "type": "Exercise",
  "number": "2.7.12",
  "title": "",
  "body": "Explain why in that in general. "
},
{
  "id": "exercises-simplex-13",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-13",
  "type": "Exercise",
  "number": "2.7.13",
  "title": "",
  "body": "  Find neccesary and sufficient conditions for the minimization tableau                                                                                                 to have a feasible basic solution.    If a minimization tableau as depicted above has a feasible basic solution, must it also have a feasible basic maximum solution? Prove or find a counterexample.    Find neccesary and sufficient conditions for                                                                                                                      to encode feasible basic solutions for both it's maximization and minimization problems.   "
},
{
  "id": "exercises-simplex-14",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-14",
  "type": "Exercise",
  "number": "2.7.14",
  "title": "",
  "body": "Prove that each tableau always encodes a unique basic solution by first showing that the default starting basic solution is unique, and then proving that each pivot preserves the uniqueness of the basic solution.  Note that each basic solution is the intersection of hyperplanes. What would it take for this to be empty or contain multiple points? Think in terms of linear (in)dependence and solving linear systems.  "
},
{
  "id": "sec-unconstrained",
  "level": "1",
  "url": "sec-unconstrained.html",
  "type": "Section",
  "number": "3.1",
  "title": "Unconstrained Variables",
  "body": " Unconstrained Variables    Suppose we wanted to solve the linear program:     What are some differences between this linear program and previous examples of linear programs?    We can record the program with the following tableau, we denote the variables which can be negative by circling them:                                                                                     What point are we currently on?    Suppose we pivot on the entry with the What point are we on now? (You do not need to fill in the tableau.)                                                                                       Suppose we pivot on the entry with the . What point are we on now?                                                                                       Consider the plot of the feasible region. What did our two pivots do?        Which of the following do you believe is true?    Following the rules of pivoting through the simplex algorithm, we should be able to return to the origin.    It is possible to perform pivots that don't neccesarily follow the rules of the simplex algorithm, to return to the origin, and this is sensible as we are just traversing corner points.    It is technically possible to perform pivots that don't neccesarily follow the rules of the simplex algorithmand this is not sensible.      List all the hyperplanes that bound the feasible region.      In a linear program, a variable which can be potentially negative is called an unconstrained variable.      Suppose we wanted to solve the linear program:     We can record the program as follows:                                                                     Out of , which are non-negative?    Perform a pivot on the given entry.                                                                       Consider the resulting tableau:                                                                     What point are we on?    Why is this point NOT optimal?    Consider the row with the , and recall that is allowed to be negative. Consider only this row and the non-negativity constraints of . Which of the following is allowed to be?     .     .     .    For each choice of that is valid, with , what would be?    Which of the following bits of information does this row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .    That .      After recording this piece of information, we may as well delete this row, since we have what we need from it:                                                     Pivot on the entry with the     Why is the resulting tableau NOT infeasible?    Which of the following bits of information does the row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .      After recording this piece of information, we may as well delete this row, since we have what we need from it:                                     Why is this tableau optimal?    What are ?    Consider the plot of the feasible region. If we started at the origin, what did we do in each step?           With unconstrained variables, we proceed as follows.    Remove all unconstrained slack variables and delete the corresponding rows.    If there are no unconstrained decision variables: STOP.    Pivot an unconstrained decision variable with a slack variable.    GOTO 1    What is left should be a maximization tableau with no unconstrained variable. One should take a moment to ponder: It may well be that the resulting tableau is infeasible. Why is this either not possible, or possible but ok?      Solve the linear program:     "
},
{
  "id": "unconstrained-geometry",
  "level": "2",
  "url": "sec-unconstrained.html#unconstrained-geometry",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Suppose we wanted to solve the linear program:     What are some differences between this linear program and previous examples of linear programs?    We can record the program with the following tableau, we denote the variables which can be negative by circling them:                                                                                     What point are we currently on?    Suppose we pivot on the entry with the What point are we on now? (You do not need to fill in the tableau.)                                                                                       Suppose we pivot on the entry with the . What point are we on now?                                                                                       Consider the plot of the feasible region. What did our two pivots do?        Which of the following do you believe is true?    Following the rules of pivoting through the simplex algorithm, we should be able to return to the origin.    It is possible to perform pivots that don't neccesarily follow the rules of the simplex algorithm, to return to the origin, and this is sensible as we are just traversing corner points.    It is technically possible to perform pivots that don't neccesarily follow the rules of the simplex algorithmand this is not sensible.      List all the hyperplanes that bound the feasible region.   "
},
{
  "id": "def-unconstrained",
  "level": "2",
  "url": "sec-unconstrained.html#def-unconstrained",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  In a linear program, a variable which can be potentially negative is called an unconstrained variable.   "
},
{
  "id": "unconstrained-example",
  "level": "2",
  "url": "sec-unconstrained.html#unconstrained-example",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  Suppose we wanted to solve the linear program:     We can record the program as follows:                                                                     Out of , which are non-negative?    Perform a pivot on the given entry.                                                                       Consider the resulting tableau:                                                                     What point are we on?    Why is this point NOT optimal?    Consider the row with the , and recall that is allowed to be negative. Consider only this row and the non-negativity constraints of . Which of the following is allowed to be?     .     .     .    For each choice of that is valid, with , what would be?    Which of the following bits of information does this row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .    That .      After recording this piece of information, we may as well delete this row, since we have what we need from it:                                                     Pivot on the entry with the     Why is the resulting tableau NOT infeasible?    Which of the following bits of information does the row communicate to us? (There could be more than one.)    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    There is a lower bound for which is greater than 0.    There is an upper bound for .    That .      After recording this piece of information, we may as well delete this row, since we have what we need from it:                                     Why is this tableau optimal?    What are ?    Consider the plot of the feasible region. If we started at the origin, what did we do in each step?        "
},
{
  "id": "sec-unconstrained-5",
  "level": "2",
  "url": "sec-unconstrained.html#sec-unconstrained-5",
  "type": "Observation",
  "number": "3.1.2",
  "title": "",
  "body": "  With unconstrained variables, we proceed as follows.    Remove all unconstrained slack variables and delete the corresponding rows.    If there are no unconstrained decision variables: STOP.    Pivot an unconstrained decision variable with a slack variable.    GOTO 1    What is left should be a maximization tableau with no unconstrained variable. One should take a moment to ponder: It may well be that the resulting tableau is infeasible. Why is this either not possible, or possible but ok?   "
},
{
  "id": "sec-unconstrained-6",
  "level": "2",
  "url": "sec-unconstrained.html#sec-unconstrained-6",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Solve the linear program:    "
},
{
  "id": "sec-constrained",
  "level": "1",
  "url": "sec-constrained.html",
  "type": "Section",
  "number": "3.2",
  "title": "Super Constrained Variables",
  "body": " Super Constrained Variables    Suppose we wanted to solve the linear program:     Plot the feasible region, what dimension is it?         Suppose we added in the constraint Plot the feasible region, what dimension is it?         Consider the inequality captured by the equality . What value must so that is always an equality? Call this value ?.    Note that this progam may be encoded in the tableau:                                                                                                                     Without computing the tableau, what point are we on if we pivot on the entry with a *? Is it feasible?    As we traverse corner points on the way to an optimal solution, would we ever leave the plane ?    After the last pivot, our tableau has the form:                                                                                                                     Ignoring the specific values of the entries of this tableau, using the value for ? computed earlier, rewrite each of the above equations in terms of . What information did the ? column provide?      An equality constraint can be written as: and thus recorded in a tableau as:                                                                                                                                                                                                                                  If we pivot on the entry, we obtain:                                                                                                                                                                                                                                  Then depending on your perspective, we can either delete the 0 column because it does not contribute information algebraically, or because it is redundant geometrically, and we restrict ourselves to a dimensional solution space. Either way, removing this column gives us:                                                                                                                                                                                         Solve the linear program:        Consider the linear program:     Record this program in a tableau with an equality constraint.                                                                                  Pivot on the entry with .                                                                                  We obtained a tableau of the form:                                                                              Rewrite the 3 rows as linear equalities, and verify that the 0 column contributes nothing.    Delete the 0 column and solve the remaining system.           Solve the linear program:            Solve the linear program:          "
},
{
  "id": "super-constrained-geometry",
  "level": "2",
  "url": "sec-constrained.html#super-constrained-geometry",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "  Suppose we wanted to solve the linear program:     Plot the feasible region, what dimension is it?         Suppose we added in the constraint Plot the feasible region, what dimension is it?         Consider the inequality captured by the equality . What value must so that is always an equality? Call this value ?.    Note that this progam may be encoded in the tableau:                                                                                                                     Without computing the tableau, what point are we on if we pivot on the entry with a *? Is it feasible?    As we traverse corner points on the way to an optimal solution, would we ever leave the plane ?    After the last pivot, our tableau has the form:                                                                                                                     Ignoring the specific values of the entries of this tableau, using the value for ? computed earlier, rewrite each of the above equations in terms of . What information did the ? column provide?   "
},
{
  "id": "sec-constrained-3",
  "level": "2",
  "url": "sec-constrained.html#sec-constrained-3",
  "type": "Observation",
  "number": "3.2.1",
  "title": "",
  "body": "  An equality constraint can be written as: and thus recorded in a tableau as:                                                                                                                                                                                                                                  If we pivot on the entry, we obtain:                                                                                                                                                                                                                                  Then depending on your perspective, we can either delete the 0 column because it does not contribute information algebraically, or because it is redundant geometrically, and we restrict ourselves to a dimensional solution space. Either way, removing this column gives us:                                                                                                                                                                                     "
},
{
  "id": "sec-constrained-4",
  "level": "2",
  "url": "sec-constrained.html#sec-constrained-4",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": "   Solve the linear program:     "
},
{
  "id": "sec-constrained-5",
  "level": "2",
  "url": "sec-constrained.html#sec-constrained-5",
  "type": "Activity",
  "number": "3.2.3",
  "title": "",
  "body": "  Consider the linear program:     Record this program in a tableau with an equality constraint.                                                                                  Pivot on the entry with .                                                                                  We obtained a tableau of the form:                                                                              Rewrite the 3 rows as linear equalities, and verify that the 0 column contributes nothing.    Delete the 0 column and solve the remaining system.        "
},
{
  "id": "sec-constrained-6",
  "level": "2",
  "url": "sec-constrained.html#sec-constrained-6",
  "type": "Activity",
  "number": "3.2.4",
  "title": "",
  "body": "  Solve the linear program:         "
},
{
  "id": "sec-constrained-7",
  "level": "2",
  "url": "sec-constrained.html#sec-constrained-7",
  "type": "Activity",
  "number": "3.2.5",
  "title": "",
  "body": "  Solve the linear program:         "
},
{
  "id": "sec-noncanonsage",
  "level": "1",
  "url": "sec-noncanonsage.html",
  "type": "Section",
  "number": "3.3",
  "title": "Solving NonCanonical Problems with Sage",
  "body": " Solving NonCanonical Problems with Sage    Say we want to solve the non-canonical linear program:       Record this non-canonical program using Sage:   We can then find the optimal solution:       Solve:           "
},
{
  "id": "sec-noncanonsage-2",
  "level": "2",
  "url": "sec-noncanonsage.html#sec-noncanonsage-2",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": "  Say we want to solve the non-canonical linear program:       Record this non-canonical program using Sage:   We can then find the optimal solution:    "
},
{
  "id": "sec-noncanonsage-3",
  "level": "2",
  "url": "sec-noncanonsage.html#sec-noncanonsage-3",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": "  Solve:          "
},
{
  "id": "sec-section-sensitivity",
  "level": "1",
  "url": "sec-section-sensitivity.html",
  "type": "Section",
  "number": "4.1",
  "title": "Sensitivity Analysis",
  "body": " Sensitivity Analysis  In this section, we begin to assign values to our bounds.    A witch named Agnesi is brewing a healing elixer and a poison. A pint of healing elixer takes 3 newt eyes and one frog, whereas a pint of poison takes 1 each of newt eyes and frogs. She currently has 34 newt eyes and 14 frogs.  Supposing that the healing elixer sells for three gold pieces, and the poison sells for two. Agnesi wishes to maximzie her revenue. Let us suppose that since these are liquids, she is happy making fractional amounts of elixers and potions.   The name Agnesi was chosen by popular consensus in my Math 346 Spring 2024 class, due to Maria Agnesi's iconic curve.     Sketch the feasible region for this problem, and use whatever method you feel like to find the optimal solution.        Agnesi is frustrated by her production levels and income. She is going to recruit some local children to gather more materials for her. Without explicitly computing anything, looking at her situation, what would result in greater profits for her, more newt eyes or frogs?    Recompute this linear program with 35 newt eyes and 14 frogs, then with 34 new eyes and 15 frogs. Which provides the greater increase in revenue? Is this consistent with what you thought earlier?    If the need for healing elixer increases and they now sell for 5 gold, would that change our answer?      In both and we esentially explore the idea of assigning values somehow to the bounds of a maximization problem.  If you have a production problem, and wish to assign a value to all your materials, which of the following should be reasonable things to expect from these values?    The value of each material is non-negative.    The total value of the materials should be as big as possible.    The total value of the materials should be as small as possible.    The total value of these materials should be greater than or equal to the value of selling products made with those materials.    All materials must have non-zero value.    If a material is ever used, it has zero value.        From , letting denote the number of healing elixers, and denote the amount of poison created. Then, we get that the feasible region satisfies the inequalities: which is bounded by hyperplanes: with normal vectors which may be depicted:   The feasible region for the witch production problem, and depicted normal vectors.      For any , the objective plane is with normal vector .  For each extreme point in the feasible region, express the normal vector for the objective plane as a linear combination of the normal vectors of the planes whose intersect at said point.     Starting at the basic solution, perform pivots as follows:                                                                                                                                                                                                                                                                              For each tableau, confirm the solution is feasible. Then look at the objective row, is there anything familiar about those values?    For each tableau above, if I decrease each decision variable from to , how does that change the value of the objective function? What does decreasing a decision variable from to mean geometrically? What does it mean in terms of the normal vectors of the associated intersecting hyperplanes?    Consider that is on the intersection of which are hyperplanes with normal vectors and respectively. Note that passes through with normal vector .  Drag sliders for so that      For each extreme point, express as a linear combination of the normal vectors of the corresponding hyperplanes. Then, for each tableau computed above, look at their basic solutions. Which point is it, and how are these coefficients reflected in the tableau?       For which extreme points are the normal vector of the objective plane a linear combination of the normal vectors of intersecting hyperplanes using only positive coefficients? Is there anything special about those extreme points?      Consider the tableau:                                                                                                                                        Suppose that for each plane has corresponding normal vector .    Prove that the normal vector for is .    Is there anything special about a tableau where is a non-negative linear combination of normal vectors?    Suppose that this tableau corresponds to an optimal solution. If we decrease any from to , how does change? What does this decrease correspond to geometrically?     Recall the canonical maximization problem:     The dual minimization program is aritculated as follows:      "
},
{
  "id": "exploration-witch",
  "level": "2",
  "url": "sec-section-sensitivity.html#exploration-witch",
  "type": "Exploration",
  "number": "4.1.1",
  "title": "",
  "body": "  A witch named Agnesi is brewing a healing elixer and a poison. A pint of healing elixer takes 3 newt eyes and one frog, whereas a pint of poison takes 1 each of newt eyes and frogs. She currently has 34 newt eyes and 14 frogs.  Supposing that the healing elixer sells for three gold pieces, and the poison sells for two. Agnesi wishes to maximzie her revenue. Let us suppose that since these are liquids, she is happy making fractional amounts of elixers and potions.   The name Agnesi was chosen by popular consensus in my Math 346 Spring 2024 class, due to Maria Agnesi's iconic curve.     Sketch the feasible region for this problem, and use whatever method you feel like to find the optimal solution.        Agnesi is frustrated by her production levels and income. She is going to recruit some local children to gather more materials for her. Without explicitly computing anything, looking at her situation, what would result in greater profits for her, more newt eyes or frogs?    Recompute this linear program with 35 newt eyes and 14 frogs, then with 34 new eyes and 15 frogs. Which provides the greater increase in revenue? Is this consistent with what you thought earlier?    If the need for healing elixer increases and they now sell for 5 gold, would that change our answer?   "
},
{
  "id": "sec-section-sensitivity-4",
  "level": "2",
  "url": "sec-section-sensitivity.html#sec-section-sensitivity-4",
  "type": "Activity",
  "number": "4.1.2",
  "title": "",
  "body": "  In both and we esentially explore the idea of assigning values somehow to the bounds of a maximization problem.  If you have a production problem, and wish to assign a value to all your materials, which of the following should be reasonable things to expect from these values?    The value of each material is non-negative.    The total value of the materials should be as big as possible.    The total value of the materials should be as small as possible.    The total value of these materials should be greater than or equal to the value of selling products made with those materials.    All materials must have non-zero value.    If a material is ever used, it has zero value.     "
},
{
  "id": "sec-section-sensitivity-5",
  "level": "2",
  "url": "sec-section-sensitivity.html#sec-section-sensitivity-5",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": "  From , letting denote the number of healing elixers, and denote the amount of poison created. Then, we get that the feasible region satisfies the inequalities: which is bounded by hyperplanes: with normal vectors which may be depicted:   The feasible region for the witch production problem, and depicted normal vectors.      For any , the objective plane is with normal vector .  For each extreme point in the feasible region, express the normal vector for the objective plane as a linear combination of the normal vectors of the planes whose intersect at said point.     Starting at the basic solution, perform pivots as follows:                                                                                                                                                                                                                                                                              For each tableau, confirm the solution is feasible. Then look at the objective row, is there anything familiar about those values?    For each tableau above, if I decrease each decision variable from to , how does that change the value of the objective function? What does decreasing a decision variable from to mean geometrically? What does it mean in terms of the normal vectors of the associated intersecting hyperplanes?    Consider that is on the intersection of which are hyperplanes with normal vectors and respectively. Note that passes through with normal vector .  Drag sliders for so that      For each extreme point, express as a linear combination of the normal vectors of the corresponding hyperplanes. Then, for each tableau computed above, look at their basic solutions. Which point is it, and how are these coefficients reflected in the tableau?       For which extreme points are the normal vector of the objective plane a linear combination of the normal vectors of intersecting hyperplanes using only positive coefficients? Is there anything special about those extreme points?   "
},
{
  "id": "sec-section-sensitivity-6",
  "level": "2",
  "url": "sec-section-sensitivity.html#sec-section-sensitivity-6",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": "  Consider the tableau:                                                                                                                                        Suppose that for each plane has corresponding normal vector .    Prove that the normal vector for is .    Is there anything special about a tableau where is a non-negative linear combination of normal vectors?    Suppose that this tableau corresponds to an optimal solution. If we decrease any from to , how does change? What does this decrease correspond to geometrically?   "
},
{
  "id": "definition-dual",
  "level": "2",
  "url": "sec-section-sensitivity.html#definition-dual",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " Recall the canonical maximization problem:     The dual minimization program is aritculated as follows:     "
},
{
  "id": "sec-section-dualitytheory",
  "level": "1",
  "url": "sec-section-dualitytheory.html",
  "type": "Section",
  "number": "4.2",
  "title": "Duality Theory",
  "body": " Duality Theory  In this section, we establish the theoretical underpinnings of duality.    Recall the primal maximization problem , and the corresponding dual minimization problem . By letting   We can rephrase the primal max problem as follows: Maximize for subject to Here, we understand to denote entrywise inequality.  Likewise, we can rephrase the dual min problem as follows: Minimize for subject to        In this activity, we explore a foundational relationship between the primal max problem and it's dual, called weak duality .     Consider the matrix product . Use this product to show that .    Suppose there were feasible for which . What then must be true about these solutions? Can we prove our assertion?    Recall and . Consider the primal max and dual min of the associated problems. How does our assertion fit these problems?    Come up with a primal max problem (and corresponding min dual) where all have integer values, so that the primal max and dual min problems achieve optimal solutions , where .   Simpler is better.    Using the same values for for the problem we just constructed, suppose we relax the condition that all our values must be integers. What can we say about the optimal solutions then?    We have now that if for a pair of feasible solutions, then we have optimality for both programs. It would be good to prove that this is an if or only if statement.   Hyperplane Seperation Theorem   Given two disjoint convex sets , there is a hyperplane for some , such that .      Sketch two non-empty convex sets , what does look like here?    Sketch two non-convex sets where fails.      We prove the case of where there are that minimize . We assume this is true.    Without loss of generality, let . Why can we do this?    Let . Sketch and .    We want to show that is the seperating hyperplane. Suppose that was not contained in what must be true about ?    Let such that . Sketch .    Let decribe geometrically what represents. Think dot product and projections.    Let , show that .    Let , show that     Show that .    Show that , and explain why .    Why is the last statement a contradiction?    We now introduce a key idea which will tie together the primal and dual programs.    Let . We call the cone of , denoted to be the set .      In , describe .    Prove that for any is convex.    Let denote a matrix, and let denote the cone of the columns of .  Suppose . What does tell us?     The Farkas Lemma   Given a matrix and , exactly one of the following is true:    There is a such that and     There is a such that and .        We prove and a useful corollary.    Recall (c). How do the cases (A) and (B) of relate to the cone ?    Suppose both cases (A) and (B) of held at the same time. use the product to derive a contradiction.    If (A) were true, what could we say about (B)?    Suppose (A) were false. We want to prove that (B) is true. What does (c) tell us?    Let's denote the normal vector of the seperating hyperplane by (interesting choice 👀) so that for any . Why must ?    Suppose had a column such that , show that there is an such that . Why is this a contradiction?    Why is (B) proven? Why is then proven?    Now that is proven, we apply it to and .  Suppose (A) held, and we had that there was a so that . How would compare to ?    Suppose (A) failed. Then there is a satisfing (B) for .  What can we say about and compared to ?     The Farkas Lemma v2   Given a matrix and , exactly one of the following is true:    There is a such that and     There is a such that and .    Without loss of generality, we may let in case (B).     The Strong Duality Theorem   Given a pair of primal max-dual min programs, the primal max problem as an optimal solution if and only if the dual min program has an optimal solution . Moreover, .     Proof of the Strong Duality Theorem   We finally prove .    Suppose that optimal dual solution exists. Explain why by it suffices to show that for some feasible .    Without loss of generality, let and let .  Consider the matrices . Apply to . What does it mean for (A) to hold?    If (A) holds for , then it holds for the pair , as well as the pair for the same . Why does this show that a feasible optimal solution exists and that ?    On the other hand, suppose (B) holds for . What would it mean for (B) to hold?    We would like to derive a contradiction.  Let denote the vector produced by (B). Suppose . How would compare to and compare to ? Why is this a contradiction?    Suppose . Let .  Show that since that .    Show that since that .    Explain why (f) and (g) produce a contradiction.     Complementary Slackness   Prove that .    If are feasible, if , what does that say about ?    is the coefficient of the normal vector for the plane . If the feasible solution does not lie on , what can we say about ?   What about ?, ? ?    If are feasible optimal solutions with slack variables , what must be true about ?      Variables are said to exhibit complementary slackness if .      Prove that if the primal program is infeasible, and the dual program is feasible, then the dual program is unbounded below. (Use .)    Prove that if the dual program is infeasible, and the primal program is feasible, then the primal program is unbounded above. (Use (a).)    Prove that if the primal (dual) program is feasible and unbounded above (below), then the dual (primal) program is infeasible.    Find a primal-dual linear program where both the primal and dual problems are infeasible.    "
},
{
  "id": "sec-section-dualitytheory-3",
  "level": "2",
  "url": "sec-section-dualitytheory.html#sec-section-dualitytheory-3",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Recall the primal maximization problem , and the corresponding dual minimization problem . By letting   We can rephrase the primal max problem as follows: Maximize for subject to Here, we understand to denote entrywise inequality.  Likewise, we can rephrase the dual min problem as follows: Minimize for subject to    "
},
{
  "id": "activity-weakduality",
  "level": "2",
  "url": "sec-section-dualitytheory.html#activity-weakduality",
  "type": "Activity",
  "number": "4.2.1",
  "title": "",
  "body": "   In this activity, we explore a foundational relationship between the primal max problem and it's dual, called weak duality .     Consider the matrix product . Use this product to show that .    Suppose there were feasible for which . What then must be true about these solutions? Can we prove our assertion?    Recall and . Consider the primal max and dual min of the associated problems. How does our assertion fit these problems?    Come up with a primal max problem (and corresponding min dual) where all have integer values, so that the primal max and dual min problems achieve optimal solutions , where .   Simpler is better.    Using the same values for for the problem we just constructed, suppose we relax the condition that all our values must be integers. What can we say about the optimal solutions then?   "
},
{
  "id": "thm-hyperplaneseperation",
  "level": "2",
  "url": "sec-section-dualitytheory.html#thm-hyperplaneseperation",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "Hyperplane Seperation Theorem.",
  "body": " Hyperplane Seperation Theorem   Given two disjoint convex sets , there is a hyperplane for some , such that .   "
},
{
  "id": "sec-section-dualitytheory-7",
  "level": "2",
  "url": "sec-section-dualitytheory.html#sec-section-dualitytheory-7",
  "type": "Activity",
  "number": "4.2.2",
  "title": "",
  "body": "  Sketch two non-empty convex sets , what does look like here?    Sketch two non-convex sets where fails.   "
},
{
  "id": "sec-section-dualitytheory-8",
  "level": "2",
  "url": "sec-section-dualitytheory.html#sec-section-dualitytheory-8",
  "type": "Activity",
  "number": "4.2.3",
  "title": "",
  "body": "  We prove the case of where there are that minimize . We assume this is true.    Without loss of generality, let . Why can we do this?    Let . Sketch and .    We want to show that is the seperating hyperplane. Suppose that was not contained in what must be true about ?    Let such that . Sketch .    Let decribe geometrically what represents. Think dot product and projections.    Let , show that .    Let , show that     Show that .    Show that , and explain why .    Why is the last statement a contradiction?   "
},
{
  "id": "def-cone",
  "level": "2",
  "url": "sec-section-dualitytheory.html#def-cone",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": "  Let . We call the cone of , denoted to be the set .   "
},
{
  "id": "activity-cone",
  "level": "2",
  "url": "sec-section-dualitytheory.html#activity-cone",
  "type": "Activity",
  "number": "4.2.4",
  "title": "",
  "body": "  In , describe .    Prove that for any is convex.    Let denote a matrix, and let denote the cone of the columns of .  Suppose . What does tell us?   "
},
{
  "id": "thm-farkas",
  "level": "2",
  "url": "sec-section-dualitytheory.html#thm-farkas",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "The Farkas Lemma.",
  "body": " The Farkas Lemma   Given a matrix and , exactly one of the following is true:    There is a such that and     There is a such that and .     "
},
{
  "id": "sec-section-dualitytheory-13",
  "level": "2",
  "url": "sec-section-dualitytheory.html#sec-section-dualitytheory-13",
  "type": "Activity",
  "number": "4.2.5",
  "title": "",
  "body": "  We prove and a useful corollary.    Recall (c). How do the cases (A) and (B) of relate to the cone ?    Suppose both cases (A) and (B) of held at the same time. use the product to derive a contradiction.    If (A) were true, what could we say about (B)?    Suppose (A) were false. We want to prove that (B) is true. What does (c) tell us?    Let's denote the normal vector of the seperating hyperplane by (interesting choice 👀) so that for any . Why must ?    Suppose had a column such that , show that there is an such that . Why is this a contradiction?    Why is (B) proven? Why is then proven?    Now that is proven, we apply it to and .  Suppose (A) held, and we had that there was a so that . How would compare to ?    Suppose (A) failed. Then there is a satisfing (B) for .  What can we say about and compared to ?   "
},
{
  "id": "cor-farkasv2",
  "level": "2",
  "url": "sec-section-dualitytheory.html#cor-farkasv2",
  "type": "Corollary",
  "number": "4.2.5",
  "title": "The Farkas Lemma v2.",
  "body": " The Farkas Lemma v2   Given a matrix and , exactly one of the following is true:    There is a such that and     There is a such that and .    Without loss of generality, we may let in case (B).   "
},
{
  "id": "thm-strongduality",
  "level": "2",
  "url": "sec-section-dualitytheory.html#thm-strongduality",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "The Strong Duality Theorem.",
  "body": " The Strong Duality Theorem   Given a pair of primal max-dual min programs, the primal max problem as an optimal solution if and only if the dual min program has an optimal solution . Moreover, .   "
},
{
  "id": "sec-section-dualitytheory-16",
  "level": "2",
  "url": "sec-section-dualitytheory.html#sec-section-dualitytheory-16",
  "type": "Activity",
  "number": "4.2.6",
  "title": "Proof of the Strong Duality Theorem.",
  "body": " Proof of the Strong Duality Theorem   We finally prove .    Suppose that optimal dual solution exists. Explain why by it suffices to show that for some feasible .    Without loss of generality, let and let .  Consider the matrices . Apply to . What does it mean for (A) to hold?    If (A) holds for , then it holds for the pair , as well as the pair for the same . Why does this show that a feasible optimal solution exists and that ?    On the other hand, suppose (B) holds for . What would it mean for (B) to hold?    We would like to derive a contradiction.  Let denote the vector produced by (B). Suppose . How would compare to and compare to ? Why is this a contradiction?    Suppose . Let .  Show that since that .    Show that since that .    Explain why (f) and (g) produce a contradiction.   "
},
{
  "id": "sec-section-dualitytheory-17",
  "level": "2",
  "url": "sec-section-dualitytheory.html#sec-section-dualitytheory-17",
  "type": "Activity",
  "number": "4.2.7",
  "title": "Complementary Slackness.",
  "body": " Complementary Slackness   Prove that .    If are feasible, if , what does that say about ?    is the coefficient of the normal vector for the plane . If the feasible solution does not lie on , what can we say about ?   What about ?, ? ?    If are feasible optimal solutions with slack variables , what must be true about ?   "
},
{
  "id": "def-complementaryslackness",
  "level": "2",
  "url": "sec-section-dualitytheory.html#def-complementaryslackness",
  "type": "Definition",
  "number": "4.2.7",
  "title": "",
  "body": "  Variables are said to exhibit complementary slackness if .   "
},
{
  "id": "problem-duality",
  "level": "2",
  "url": "sec-section-dualitytheory.html#problem-duality",
  "type": "Problem",
  "number": "4.2.8",
  "title": "",
  "body": "  Prove that if the primal program is infeasible, and the dual program is feasible, then the dual program is unbounded below. (Use .)    Prove that if the dual program is infeasible, and the primal program is feasible, then the primal program is unbounded above. (Use (a).)    Prove that if the primal (dual) program is feasible and unbounded above (below), then the dual (primal) program is infeasible.    Find a primal-dual linear program where both the primal and dual problems are infeasible.   "
},
{
  "id": "sec-section-dualpivot",
  "level": "1",
  "url": "sec-section-dualpivot.html",
  "type": "Section",
  "number": "4.3",
  "title": "Tucker Tableau’s, Pivots and Duality",
  "body": " Tucker Tableau's, Pivots and Duality  In this section, we examine pivoting with primal-dual tableau's.    Noting that the dual variables are non-negative weights attached to the hyperplanes defined by , and the slack variables for the dual program are the weights associated with the planes , we can encode all this information in the Primal-Dual Tucker Tableau :                                                                                                                            Write out the sufficient conditions for the tableau to determine:    The primal program is feasible.    The dual program is feasible.    A feasible primal program is unbounded above.    A feasible dual program is unbounded below.    A primal program is infeasible.    A dual program is infeasible.    The primal program has a feasible basic solution.    The dual program has a feasible basic solution.      Are any of these identical?      Recall .    Record this information in a primal-dual tucker tableau.    Apply the Simplex Algorithm to this tableau.    Consider the dual solution. What does that mean in the context of the time spent by the painter and the sculptor?     If a primal program is infeasible, what could be true of the dual program?   The dual program has an optimal solution.    The dual program is unbounded below.    The dual program is infeasible.     Verify that the primal program is infeasible.                                                                                         Take the negative transpose, then use the Simplex Algorithm to determine the nature of the dual program.    Verify that the primal program is infeasible.                                                                                         Take the negative transpose, then use the Simplex Algorithm to determine the nature of the dual program.      We now consider unconstrained and equality constrained primal-dual programs.    Suppose for a pair of primal-dual solutions if were allowed to be be any value including negative values, What must be true about ? (If is unconstrained, what can we say about the hyperplane as a bounding hyperplane?)    could be any value as well.     .     .     .     .       Suppose for a pair of primal-dual solutions if . What must be true about ? (If we increase can we predict if that helps or hurts ? Does it matter?)    could be any value as well.     .     .     .     .        Solve the following non-canonical primal-dual problem:                                                                                                                          Enter the primal-program and use Sage to confirm the solution:        Use sage to find the dual and solve it:      "
},
{
  "id": "sec-section-dualpivot-3",
  "level": "2",
  "url": "sec-section-dualpivot.html#sec-section-dualpivot-3",
  "type": "Activity",
  "number": "4.3.1",
  "title": "",
  "body": "  Noting that the dual variables are non-negative weights attached to the hyperplanes defined by , and the slack variables for the dual program are the weights associated with the planes , we can encode all this information in the Primal-Dual Tucker Tableau :                                                                                                                            Write out the sufficient conditions for the tableau to determine:    The primal program is feasible.    The dual program is feasible.    A feasible primal program is unbounded above.    A feasible dual program is unbounded below.    A primal program is infeasible.    A dual program is infeasible.    The primal program has a feasible basic solution.    The dual program has a feasible basic solution.      Are any of these identical?   "
},
{
  "id": "sec-section-dualpivot-4",
  "level": "2",
  "url": "sec-section-dualpivot.html#sec-section-dualpivot-4",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "  Recall .    Record this information in a primal-dual tucker tableau.    Apply the Simplex Algorithm to this tableau.    Consider the dual solution. What does that mean in the context of the time spent by the painter and the sculptor?   "
},
{
  "id": "sec-section-dualpivot-5",
  "level": "2",
  "url": "sec-section-dualpivot.html#sec-section-dualpivot-5",
  "type": "Activity",
  "number": "4.3.3",
  "title": "",
  "body": " If a primal program is infeasible, what could be true of the dual program?   The dual program has an optimal solution.    The dual program is unbounded below.    The dual program is infeasible.     Verify that the primal program is infeasible.                                                                                         Take the negative transpose, then use the Simplex Algorithm to determine the nature of the dual program.    Verify that the primal program is infeasible.                                                                                         Take the negative transpose, then use the Simplex Algorithm to determine the nature of the dual program.   "
},
{
  "id": "sec-section-dualpivot-6",
  "level": "2",
  "url": "sec-section-dualpivot.html#sec-section-dualpivot-6",
  "type": "Activity",
  "number": "4.3.4",
  "title": "",
  "body": "  We now consider unconstrained and equality constrained primal-dual programs.    Suppose for a pair of primal-dual solutions if were allowed to be be any value including negative values, What must be true about ? (If is unconstrained, what can we say about the hyperplane as a bounding hyperplane?)    could be any value as well.     .     .     .     .       Suppose for a pair of primal-dual solutions if . What must be true about ? (If we increase can we predict if that helps or hurts ? Does it matter?)    could be any value as well.     .     .     .     .      "
},
{
  "id": "sec-section-dualpivot-7",
  "level": "2",
  "url": "sec-section-dualpivot.html#sec-section-dualpivot-7",
  "type": "Activity",
  "number": "4.3.5",
  "title": "",
  "body": " Solve the following non-canonical primal-dual problem:                                                                                                                          Enter the primal-program and use Sage to confirm the solution:        Use sage to find the dual and solve it:     "
},
{
  "id": "sec-minmaxgames",
  "level": "1",
  "url": "sec-minmaxgames.html",
  "type": "Section",
  "number": "5.1",
  "title": "Min-Max Games",
  "body": " Min-Max Games    Suppose we have two players, then Even player and the Odd player. Each player picks an integer from 1-3.    If the sum is even:   If the chosen numbers are distinct, then the Odd player pays the Even player the difference between the numbers.    If the chosen numbers are the same, then the Odd player pays the Even player the sum of the numbers.       If the sum is odd: the Even player pays the Odd player $3.      Record the net winnings to the Even player in the following table:            Odd                                             Even                                                      Examinine this table, and comparing the rows, is there any advantage to the Even player in picking the first row over the third row?    Comparing the columns, is there any advantage to the Odd player in picking the third column over the first column?    Delete any row (column) corresponding to a choice that the Even (Odd) player would never make.  If the Even player always picks a 2, what is the optimal strategy for the Odd player? Similarly if the Odd player always picks a 1, what is the optimal strategy for the even player?    Do either player gain any advantage by picking a single choice and sticking to it?    Suppose the Even player flips a coin to make their choice, if the Odd player picks a 1, what is their average expected winnings? What if they choose a 2?    Suppose the Odd player flips a coin to make their choice, if the Even player picks a 2, what is their average expected winnings? What if they choose a 3?    Does this game favor either the Even or Odd player?      In a two-player zero-sum game, where the row player has choices and the column player has choices, the payoff matrix is a matrix which records in each row and column the net payoff to the row player (this choice is purely by convention, but we will stick to it.)  If a row has entries that are strictly greater than or equal to the entries of another row , then we say that row  dominates row . We then may delete row since there is now reason the row player would choose . Similarly, if column is less than or equal to column , column  dominates column and we may delete column .      Consider the payoff matrix for a game between Rowan and Colleen.         Colleen                      Rowan                                                   Suppose that Rowan pursues a mixed strategy a probability distribution of their choices where   If Colleen chooses column as her strategy, what is the expected value of Rowan's earnings?     .     .     .     .     .     .      If Colleen somehow figures out Rowan's strategy , which column should she choose?    Rowan is aware that Colleen is a sharp player can likely figure out . How then should he choose his strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .      At the exact same time, Colleen is pursuing her own mixed strategy :   If Rowan chooses row as his strategy, what is the expected value of Colleen's losses?     .     .     .     .     .     .      If Rowan somehow figures out Colleen's strategy , which row should he choose?    Colleen is also aware that Rowan is a sharp player can likely figure out . How then should she choose her strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .      Consider the primal-dual program encoded by the tableau:                                                                                                                                                                                                                  Write out both the primal and dual problems encoded by this tableau. (Including all equalities, inequalities, and the objective functions)    What primal constraint does the first row represent? How does it relate to Colleen's strategy?    What primal constraint do the next rows represent? How does it relate to Colleen's strategy?    What is the primal objective function? How does it relate to Colleen's strategy?    Repeat (h)-(j) for the columns, and with regards to Rowan's strategy.    Supposing that this system has an optimal primal and dual solution, what would those solutions represent?      Suppose that the reduced payoff matrix had an entry that is the largest value in it's column and the smallest value in it's row.                                                                                                                                                                   Such an entry is called a saddle point .       Suppose a reduced payoff matrix had a saddle point .                                                                                                                                                                      Pivot first on the entry with a then .                                                                                                                                                                                                                                                                                                                                      For each entry determine if:    The entry is zero.    The entry is positive.    The entry is negative.    The entries value cannot be determined.      What is ? What are ?    After we delete the appropriate rows and columns, what could be said about the resulting primal dual program?    Would it make a difference if we pivoted by first then ?     Follow the outline provided by to find the optimal strategies for the Even and Odd players in , and who if anyone the game favors.  To test out this solution edit this code: Where FIXMER1 , FIXMER2 , FIXMER3 represent the entries for the optimal mixed strategy for the row player Even, and FIXMEC1 , FIXMEC2 , FIXMEC3 are for the optimal mixed strategy for the column player Odd. Then run the cell and see the distributions of winnings and the average winnings. How does this value compare to what you found.   Take turns, one student pick a new strategy for Even, and another student then modify the strategy for Odd in light of the new strategy. Can we do better than Odd's current best strategy?    Conversely, take turns, one student pick a new strategy for Odd, and another student then modify the strategy for Even in light of the new strategy. Can we do better than Even's current best strategy?      Find the optimal strategies for two players Rowan and Colleen playing Rock, Paper, Scissors     "
},
{
  "id": "exploration-evenodd",
  "level": "2",
  "url": "sec-minmaxgames.html#exploration-evenodd",
  "type": "Exploration",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose we have two players, then Even player and the Odd player. Each player picks an integer from 1-3.    If the sum is even:   If the chosen numbers are distinct, then the Odd player pays the Even player the difference between the numbers.    If the chosen numbers are the same, then the Odd player pays the Even player the sum of the numbers.       If the sum is odd: the Even player pays the Odd player $3.      Record the net winnings to the Even player in the following table:            Odd                                             Even                                                      Examinine this table, and comparing the rows, is there any advantage to the Even player in picking the first row over the third row?    Comparing the columns, is there any advantage to the Odd player in picking the third column over the first column?    Delete any row (column) corresponding to a choice that the Even (Odd) player would never make.  If the Even player always picks a 2, what is the optimal strategy for the Odd player? Similarly if the Odd player always picks a 1, what is the optimal strategy for the even player?    Do either player gain any advantage by picking a single choice and sticking to it?    Suppose the Even player flips a coin to make their choice, if the Odd player picks a 1, what is their average expected winnings? What if they choose a 2?    Suppose the Odd player flips a coin to make their choice, if the Even player picks a 2, what is their average expected winnings? What if they choose a 3?    Does this game favor either the Even or Odd player?   "
},
{
  "id": "def-payoff",
  "level": "2",
  "url": "sec-minmaxgames.html#def-payoff",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  In a two-player zero-sum game, where the row player has choices and the column player has choices, the payoff matrix is a matrix which records in each row and column the net payoff to the row player (this choice is purely by convention, but we will stick to it.)  If a row has entries that are strictly greater than or equal to the entries of another row , then we say that row  dominates row . We then may delete row since there is now reason the row player would choose . Similarly, if column is less than or equal to column , column  dominates column and we may delete column .   "
},
{
  "id": "activity-rowcol",
  "level": "2",
  "url": "sec-minmaxgames.html#activity-rowcol",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": "  Consider the payoff matrix for a game between Rowan and Colleen.         Colleen                      Rowan                                                   Suppose that Rowan pursues a mixed strategy a probability distribution of their choices where   If Colleen chooses column as her strategy, what is the expected value of Rowan's earnings?     .     .     .     .     .     .      If Colleen somehow figures out Rowan's strategy , which column should she choose?    Rowan is aware that Colleen is a sharp player can likely figure out . How then should he choose his strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .      At the exact same time, Colleen is pursuing her own mixed strategy :   If Rowan chooses row as his strategy, what is the expected value of Colleen's losses?     .     .     .     .     .     .      If Rowan somehow figures out Colleen's strategy , which row should he choose?    Colleen is also aware that Rowan is a sharp player can likely figure out . How then should she choose her strategy? ?    Maximize .    Maximize .    Minimize .    Minimize .      Consider the primal-dual program encoded by the tableau:                                                                                                                                                                                                                  Write out both the primal and dual problems encoded by this tableau. (Including all equalities, inequalities, and the objective functions)    What primal constraint does the first row represent? How does it relate to Colleen's strategy?    What primal constraint do the next rows represent? How does it relate to Colleen's strategy?    What is the primal objective function? How does it relate to Colleen's strategy?    Repeat (h)-(j) for the columns, and with regards to Rowan's strategy.    Supposing that this system has an optimal primal and dual solution, what would those solutions represent?   "
},
{
  "id": "def-saddlepoint",
  "level": "2",
  "url": "sec-minmaxgames.html#def-saddlepoint",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": "  Suppose that the reduced payoff matrix had an entry that is the largest value in it's column and the smallest value in it's row.                                                                                                                                                                   Such an entry is called a saddle point .   "
},
{
  "id": "sec-minmaxgames-6",
  "level": "2",
  "url": "sec-minmaxgames.html#sec-minmaxgames-6",
  "type": "Activity",
  "number": "5.1.3",
  "title": "",
  "body": "   Suppose a reduced payoff matrix had a saddle point .                                                                                                                                                                      Pivot first on the entry with a then .                                                                                                                                                                                                                                                                                                                                      For each entry determine if:    The entry is zero.    The entry is positive.    The entry is negative.    The entries value cannot be determined.      What is ? What are ?    After we delete the appropriate rows and columns, what could be said about the resulting primal dual program?    Would it make a difference if we pivoted by first then ?   "
},
{
  "id": "sec-minmaxgames-7",
  "level": "2",
  "url": "sec-minmaxgames.html#sec-minmaxgames-7",
  "type": "Activity",
  "number": "5.1.4",
  "title": "",
  "body": " Follow the outline provided by to find the optimal strategies for the Even and Odd players in , and who if anyone the game favors.  To test out this solution edit this code: Where FIXMER1 , FIXMER2 , FIXMER3 represent the entries for the optimal mixed strategy for the row player Even, and FIXMEC1 , FIXMEC2 , FIXMEC3 are for the optimal mixed strategy for the column player Odd. Then run the cell and see the distributions of winnings and the average winnings. How does this value compare to what you found.   Take turns, one student pick a new strategy for Even, and another student then modify the strategy for Odd in light of the new strategy. Can we do better than Odd's current best strategy?    Conversely, take turns, one student pick a new strategy for Odd, and another student then modify the strategy for Even in light of the new strategy. Can we do better than Even's current best strategy?   "
},
{
  "id": "sec-minmaxgames-8",
  "level": "2",
  "url": "sec-minmaxgames.html#sec-minmaxgames-8",
  "type": "Activity",
  "number": "5.1.5",
  "title": "",
  "body": "  Find the optimal strategies for two players Rowan and Colleen playing Rock, Paper, Scissors    "
},
{
  "id": "sec-vonneumann",
  "level": "1",
  "url": "sec-vonneumann.html",
  "type": "Section",
  "number": "5.2",
  "title": "VonNeumann Minimax Theorem",
  "body": " VonNeumann Minimax Theorem    Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions .  Let denote the th row of a matrix and let denote the th column of .    Given a fixed column strategy which of these describes the role for the row player?                          Given a fixed row strategy which of these describes the role for the column player?                            We prove an interesting way to think of the optimal strategies.  Let denote a fixed column strategy, and let , and let     Recall that . Prove that .    Why must ?    Show that there is a (very simple) row strategy where .    Why must ?    What have we proven?      We now prove a characterization theorem about the optimal solutions for both the row and column player.  Suppose we have a payoff matrix where every entry is positive. In other words, after each round Rowan is gaurunteed to win money and Colleen is gaurunteed to lose money. Rowan's strategy here is to take Colleen for as much money as he can and Colleen's strategy is to minimize her losses.  (We'll ignore the obvious question of why Colleen would be willing to play this game.)    Argue why optimal row and column outcomes .    Write out the primal maximization problem for the LP formulation of this game:                                                                                                                                                                                                                  Write out the non-canonical primal problem including the objective function and constraint equalities and inequalities involving the and where appropriate. (There should be no slack variables here.)    Consider the inequality constraints in our formulation, divide each of these by . Let . Can we rewrite our inequalities as linear combinations of is less than or equal to some cosntant?    Consider the equality constraint after dividing by , rewrite this equality in terms of without negatives.  Remember, Colleen's strategy is to minimize which must be positive. Can we rephrase this as maximizing or minimizing a linear function involving then ? What is this linear function and is it a maximization or minimization problem? (Note that the solution to this problem likely isn't the solution to the original problem, but both are optimized under the same conditions.)    Rewrite the new canonical linear programming problem with variables that optimizes Colleen's stretegy.    Why is the feasible region for Colleen's new problem non-empty but bounded? What does the Extreme Value Theorem then say about this?    Repeat tasks (b)-(c) for Rowan's strategy, where .    Compare Rowan and Colleen's problems with the . Show that these problems are dual problems to each other. Which is the primal max and which is the dual min?    What does the Strong Duality Theorem say about the optimal solutions to both problems? What in turn, does that say about ?    We're still in this pretty ridiculous situation where Colleen is for some reason willing to throw money away at Rowan. To balance things out, Rowan has to pay Colleen $5 after each round. Would this fact change anything about Rowan and Collen's strategies?  Say it was $ , would that make any difference?    Let denote any strategy for Rowan and Colleen. Let denote a matrix with all 1's. Show that .    Show that for fixed strategies and not fixed strategies that is maximized when is maximized and is minimized when is minimized.     VonNeumann's Minimax Theorem   Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions . Also let denote the th row of a matrix and let denote the th column of .  Then, there are optimal strategies such that:       Consider the payoff matrix     Find the optimal strategy for Colleen in this game, and the game value .    Find a strategy for Rowan so that , but is not the optimal strategy.    What does this say about ?      In a simplified game of battleship played on a two board, Colleen selects two consecutive squares on the board to place her ship. Rowan then picks one of six squares to fire at. If he hits, he gets a point, otherwise Colleen gets a point.    Write out a payoff matrix for this game. (Why is it ?)    Find the optimal solution for Colleen using Sage:      Does the game favor Rowan or Colleen?    Use sage to find the optimal solution for Rowan:      "
},
{
  "id": "sec-vonneumann-2",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-2",
  "type": "Activity",
  "number": "5.2.1",
  "title": "",
  "body": "  Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions .  Let denote the th row of a matrix and let denote the th column of .    Given a fixed column strategy which of these describes the role for the row player?                          Given a fixed row strategy which of these describes the role for the column player?                         "
},
{
  "id": "sec-vonneumann-3",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-3",
  "type": "Activity",
  "number": "5.2.2",
  "title": "",
  "body": "  We prove an interesting way to think of the optimal strategies.  Let denote a fixed column strategy, and let , and let     Recall that . Prove that .    Why must ?    Show that there is a (very simple) row strategy where .    Why must ?    What have we proven?   "
},
{
  "id": "sec-vonneumann-4",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-4",
  "type": "Activity",
  "number": "5.2.3",
  "title": "",
  "body": "  We now prove a characterization theorem about the optimal solutions for both the row and column player.  Suppose we have a payoff matrix where every entry is positive. In other words, after each round Rowan is gaurunteed to win money and Colleen is gaurunteed to lose money. Rowan's strategy here is to take Colleen for as much money as he can and Colleen's strategy is to minimize her losses.  (We'll ignore the obvious question of why Colleen would be willing to play this game.)    Argue why optimal row and column outcomes .    Write out the primal maximization problem for the LP formulation of this game:                                                                                                                                                                                                                  Write out the non-canonical primal problem including the objective function and constraint equalities and inequalities involving the and where appropriate. (There should be no slack variables here.)    Consider the inequality constraints in our formulation, divide each of these by . Let . Can we rewrite our inequalities as linear combinations of is less than or equal to some cosntant?    Consider the equality constraint after dividing by , rewrite this equality in terms of without negatives.  Remember, Colleen's strategy is to minimize which must be positive. Can we rephrase this as maximizing or minimizing a linear function involving then ? What is this linear function and is it a maximization or minimization problem? (Note that the solution to this problem likely isn't the solution to the original problem, but both are optimized under the same conditions.)    Rewrite the new canonical linear programming problem with variables that optimizes Colleen's stretegy.    Why is the feasible region for Colleen's new problem non-empty but bounded? What does the Extreme Value Theorem then say about this?    Repeat tasks (b)-(c) for Rowan's strategy, where .    Compare Rowan and Colleen's problems with the . Show that these problems are dual problems to each other. Which is the primal max and which is the dual min?    What does the Strong Duality Theorem say about the optimal solutions to both problems? What in turn, does that say about ?    We're still in this pretty ridiculous situation where Colleen is for some reason willing to throw money away at Rowan. To balance things out, Rowan has to pay Colleen $5 after each round. Would this fact change anything about Rowan and Collen's strategies?  Say it was $ , would that make any difference?    Let denote any strategy for Rowan and Colleen. Let denote a matrix with all 1's. Show that .    Show that for fixed strategies and not fixed strategies that is maximized when is maximized and is minimized when is minimized.   "
},
{
  "id": "thm-vonneumann",
  "level": "2",
  "url": "sec-vonneumann.html#thm-vonneumann",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "VonNeumann’s Minimax Theorem.",
  "body": " VonNeumann's Minimax Theorem   Let be a payoff matrix and represent the strategies of the row and column players respectively, with feasible regions . Also let denote the th row of a matrix and let denote the th column of .  Then, there are optimal strategies such that:    "
},
{
  "id": "sec-vonneumann-6",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-6",
  "type": "Activity",
  "number": "5.2.4",
  "title": "",
  "body": "  Consider the payoff matrix     Find the optimal strategy for Colleen in this game, and the game value .    Find a strategy for Rowan so that , but is not the optimal strategy.    What does this say about ?   "
},
{
  "id": "sec-vonneumann-7",
  "level": "2",
  "url": "sec-vonneumann.html#sec-vonneumann-7",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "  In a simplified game of battleship played on a two board, Colleen selects two consecutive squares on the board to place her ship. Rowan then picks one of six squares to fire at. If he hits, he gets a point, otherwise Colleen gets a point.    Write out a payoff matrix for this game. (Why is it ?)    Find the optimal solution for Colleen using Sage:      Does the game favor Rowan or Colleen?    Use sage to find the optimal solution for Rowan:     "
},
{
  "id": "sec-chance",
  "level": "1",
  "url": "sec-chance.html",
  "type": "Section",
  "number": "5.3",
  "title": "Games of Chance",
  "body": " Games of Chance    Consider the following game. Rowan and Colleen place $25 into a pot. Then they are dealt either a Jack, Queen or King at random. This deck only has those three cards. Whoever has the highest card takes the pot.  Rowan has the option of raising by $10 or folding. If he folds, he loses $25. Otherwise Colleen then can either fold or call. If they fold, she loses $25, if she calls, she puts $10 into the pot.  Note that if Rowan folds, even if Colleen had planned on folding, she would win the $25.    What would best describe possible choices of strategy for Rowan and Colleen?    The cards Jack, Queen, King.    Whether to Fold\/Raise for Rowan, whether to Fold\/Call for Colleen.    Whether to Fold\/Raise for Rowan depending on the card he is dealt, whether to Fold\/Call for Colleen, depending on the card she is dealt.      List the possible pairs of Rowan\/Colleen hands.    Let's say Rowan raises on a Jack, folds on a Queen, and raises on a King, denoted as RFR. Let's saw Colleen folds on a Jack, and calls on a Queen of King, denoted FCC.  If both players are committed to these strategies, what are Rowans expected net winnings? (Note that all the above hand pairs are equally likely, what are Rowan's net winnings in each case?)    If Rowan's strategy is (for some reason) FFF, what are Rowans net winnings?    If Colleen's strategy is FFF, what are Rowans net winnings? (These may be different for each of Rowan's choice of strategy.)    Without computing the entire payoff matrix, are there any obviously poor strategies for Rowan or Colleen?    Fill out the remainder of this payoff matrix, where the entries are expected values.      FFF  FFC  FCF  CFF  FCC  CFC  CCF  CCC      FFF  ?  ?  ?  ?  ?  ?  ?  ?      FFR  ?                           FRF  ?           -55\/3               RFF  ?                    -85\/3      FRR  ?                           RFR  ?           ?               RRF  ?        ?                  RRR  ?                    ?                              After dominating what does this table reduce to?      ???  ???      ???  ?  ?      ???  ?  ?                  Solve for the optimal strategies using LP methods.    Who does the game favor and by how much?    If Rowan is dealt a Jack, what is his optimal strategy (as a pair of probabilities to Raise or Fold). Queen? King?    If Colleen is dealt a Jack, what is her optimal strategy. Queen? King?      We introduce a second game here. Each player places $ into the pot. Then the each secretly flip a coin. We consider heads greater than tails.  Rowan then has the options of passing or betting. If he passes, then both players reveal their coin and the higher value wins. If they are the same, players split the pot evenly, and both players net wins\/losses are $0. His other option is to bet, in which case he adds $ to the pot.  Then Colleen has a choice as well, to fold or call. If she folds, then Rowan nets the $ . Otherwise, she calls, and also adds $ to the pot and both coins are revealed.    Suppose that Rowan will stick to the strategy of RP (raise on head, pass on tails) and Colleen choses CC (call on both heads or tails). What are Rowan's expected winnings in this case?    Fill out the payoff matrix for this game.      FF  FC  CF  FF      PP  ?        ?      PR  ?        ?      RP     ?     ?      RR     ?  ?                         It's not possible to determine all the domination without knowing what are. However, knowing , dominate as much as possible      ??  ??      ??  ?  ?      ??  ?  ?                  If , use domination to find the optimal pure strategy for both players.    If , used linear optimization methods to find the optimal mixed strategies for both players.    "
},
{
  "id": "sec-chance-2",
  "level": "2",
  "url": "sec-chance.html#sec-chance-2",
  "type": "Activity",
  "number": "5.3.1",
  "title": "",
  "body": "  Consider the following game. Rowan and Colleen place $25 into a pot. Then they are dealt either a Jack, Queen or King at random. This deck only has those three cards. Whoever has the highest card takes the pot.  Rowan has the option of raising by $10 or folding. If he folds, he loses $25. Otherwise Colleen then can either fold or call. If they fold, she loses $25, if she calls, she puts $10 into the pot.  Note that if Rowan folds, even if Colleen had planned on folding, she would win the $25.    What would best describe possible choices of strategy for Rowan and Colleen?    The cards Jack, Queen, King.    Whether to Fold\/Raise for Rowan, whether to Fold\/Call for Colleen.    Whether to Fold\/Raise for Rowan depending on the card he is dealt, whether to Fold\/Call for Colleen, depending on the card she is dealt.      List the possible pairs of Rowan\/Colleen hands.    Let's say Rowan raises on a Jack, folds on a Queen, and raises on a King, denoted as RFR. Let's saw Colleen folds on a Jack, and calls on a Queen of King, denoted FCC.  If both players are committed to these strategies, what are Rowans expected net winnings? (Note that all the above hand pairs are equally likely, what are Rowan's net winnings in each case?)    If Rowan's strategy is (for some reason) FFF, what are Rowans net winnings?    If Colleen's strategy is FFF, what are Rowans net winnings? (These may be different for each of Rowan's choice of strategy.)    Without computing the entire payoff matrix, are there any obviously poor strategies for Rowan or Colleen?    Fill out the remainder of this payoff matrix, where the entries are expected values.      FFF  FFC  FCF  CFF  FCC  CFC  CCF  CCC      FFF  ?  ?  ?  ?  ?  ?  ?  ?      FFR  ?                           FRF  ?           -55\/3               RFF  ?                    -85\/3      FRR  ?                           RFR  ?           ?               RRF  ?        ?                  RRR  ?                    ?                              After dominating what does this table reduce to?      ???  ???      ???  ?  ?      ???  ?  ?                  Solve for the optimal strategies using LP methods.    Who does the game favor and by how much?    If Rowan is dealt a Jack, what is his optimal strategy (as a pair of probabilities to Raise or Fold). Queen? King?    If Colleen is dealt a Jack, what is her optimal strategy. Queen? King?   "
},
{
  "id": "sec-chance-3",
  "level": "2",
  "url": "sec-chance.html#sec-chance-3",
  "type": "Activity",
  "number": "5.3.2",
  "title": "",
  "body": "  We introduce a second game here. Each player places $ into the pot. Then the each secretly flip a coin. We consider heads greater than tails.  Rowan then has the options of passing or betting. If he passes, then both players reveal their coin and the higher value wins. If they are the same, players split the pot evenly, and both players net wins\/losses are $0. His other option is to bet, in which case he adds $ to the pot.  Then Colleen has a choice as well, to fold or call. If she folds, then Rowan nets the $ . Otherwise, she calls, and also adds $ to the pot and both coins are revealed.    Suppose that Rowan will stick to the strategy of RP (raise on head, pass on tails) and Colleen choses CC (call on both heads or tails). What are Rowan's expected winnings in this case?    Fill out the payoff matrix for this game.      FF  FC  CF  FF      PP  ?        ?      PR  ?        ?      RP     ?     ?      RR     ?  ?                         It's not possible to determine all the domination without knowing what are. However, knowing , dominate as much as possible      ??  ??      ??  ?  ?      ??  ?  ?                  If , use domination to find the optimal pure strategy for both players.    If , used linear optimization methods to find the optimal mixed strategies for both players.   "
},
{
  "id": "sec-vam",
  "level": "1",
  "url": "sec-vam.html",
  "type": "Section",
  "number": "6.1",
  "title": "A Transportation problem and VAM",
  "body": " A Transportation problem and VAM    Suppose we have a company moving goods (lets say widgets) from 3 different warehouses to 3 different markets. The cost of shipping from warehouses to markets is listed below, along with the demand from each market and the supply available at each warehouse:       Market 1  Market 2  Market 3      Warehouse 1  $2\/ton  $1\/ton  $2\/ton  40 tons    Warehouse 2  $9\/ton  $4\/ton  $7\/ton  60 tons    Warehouse 3  $1\/ton  $2\/ton  $9\/ton  10 tons      40 tons  50 tons  20 tons  110 tons     We want to ship the goods from the warehouses to the markets in a way that minimizes costs.    Let denote the the tons of goods shipped from warehouse to market .  Write an (in)equality for the quantity of goods shipped from Warehouse 1 in terms of the .    Write an (in)equality for the quantity of goods shipped to Market 2 in terms of the .    Write a (possibly noncanonical) linear minimization program that minimizes the cost to ship these goods.      A transportation problem where the total demand and the total supply are the same is a balanced transportation problem.      While we could solve this transportation by the simplex algorithm, it would be painfully tedious to do. We develop an algorithm to simplify this process.     Suppose we had warehouses and markets with supplies and demands . We have linear equations . Since , what is the maximum number of that can be non-zero for a basic solution?   Imagine an augmented matrix with the coefficients of the on one side and the supplies\/demand of the other. What is an upper bound of the rank of this matrix. Then consider that . What does this say about the (in)dependence of the rows? What then must the rank be?    We first mark the difference between the lowest two values in each row\/column:       1  1  5      1  2  1  2  40    3  9  4  7  60    1  1  2  9  10      40  50  20       A table like this is called a transportation tableau .  Ideally we would always want to move everything with the cheapest available option. It's not hard to see that in most cases, like this one, this isn't actually possible. What do these numbers we computed measure? How can they help us decide how to move goods?    We select the row\/column with the highest entries and use the smallest entry in said row\/column to move as much of the goods as we can:       1  1  5      1  2  1     40    3  9  4  7  60    1  1  2  9  10      40  50  20            1  1  5      1  2  1     20    3  9  4  7  60    1  1  2  9  10      40  50  0       Would it make sense to move any more goods to market 3? How should we decide how to move goods next?    Now that Market 3 has all their demand filled, and shipping there is no longer an option, what are the differences between the lowest costs and second lowest costs in each row\/column?       ?  ?  NA      ?  2  1     20    ?  9  4  7  60    ?  1  2  9  10      40  50  0       Would it make sense to move any more goods to market 3? How should we decide how to move goods next?    The next highest difference is 3 for warehouse 2:       ?  ?  NA      ?  2  1     20    ?  9     7  60    ?  1  2  9  10      40  50  0            ?  ?  NA      ?  2  1     20    ?  9     7  10    ?  1  2  9  10      40  0  0       Does it make sense to continue to move goods from warehouse 2?  What should be the next choice of warehouse\/market?    Finish moving the goods from warehouses to markets.    Consider the final transportation tableau:       1  1  5      1     1     0    3        7  0    1     2  9  0      0  0  0       Verify that this is a feasible solution to the original transportation problem. Is it optimal?    Out of the nine possible warehouse\/market pairs, how many have actual shipments between them? How does that compare to what we found in (a)?      To summarise the Vogel Advanced-Start Method or VAM method of producing a feasible solution to the transportation problem is outlined as follows.    We begin with sources and sinks, each with a supply or demand respectively. We associate each row of the transportation tableau with a source, each column with a sink, and each entry with the cost of shipping from source to sink .    For each row and column, we record the difference between the lowest two values.    We pick the row\/column with the largest difference (so long as the associated supply\/demand is positive), and the smallest entry in the row\/column, . By convention we circle this entry.    We ship quantity from source to sink , recording this quantity as a superscript in the numerator and adjusting the supply for source and demand for sink appropriately.    We ignore any source\/sink with 0 supply\/demand and repeat 2-4.    If all source\/sinks are exhausted and we have not yet circled entries, we circle any entries in the last row\/column we've examined, noting that the quantities shipped for these entries is zero.    Once entries are circled and all supply\/demand is exhausted, we terminate. The circled entries are called the basis of the tableau.      "
},
{
  "id": "exploration-transportation",
  "level": "2",
  "url": "sec-vam.html#exploration-transportation",
  "type": "Exploration",
  "number": "6.1.1",
  "title": "",
  "body": "  Suppose we have a company moving goods (lets say widgets) from 3 different warehouses to 3 different markets. The cost of shipping from warehouses to markets is listed below, along with the demand from each market and the supply available at each warehouse:       Market 1  Market 2  Market 3      Warehouse 1  $2\/ton  $1\/ton  $2\/ton  40 tons    Warehouse 2  $9\/ton  $4\/ton  $7\/ton  60 tons    Warehouse 3  $1\/ton  $2\/ton  $9\/ton  10 tons      40 tons  50 tons  20 tons  110 tons     We want to ship the goods from the warehouses to the markets in a way that minimizes costs.    Let denote the the tons of goods shipped from warehouse to market .  Write an (in)equality for the quantity of goods shipped from Warehouse 1 in terms of the .    Write an (in)equality for the quantity of goods shipped to Market 2 in terms of the .    Write a (possibly noncanonical) linear minimization program that minimizes the cost to ship these goods.   "
},
{
  "id": "def-balanced",
  "level": "2",
  "url": "sec-vam.html#def-balanced",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A transportation problem where the total demand and the total supply are the same is a balanced transportation problem.   "
},
{
  "id": "activity-vamexample",
  "level": "2",
  "url": "sec-vam.html#activity-vamexample",
  "type": "Activity",
  "number": "6.1.2",
  "title": "",
  "body": "  While we could solve this transportation by the simplex algorithm, it would be painfully tedious to do. We develop an algorithm to simplify this process.     Suppose we had warehouses and markets with supplies and demands . We have linear equations . Since , what is the maximum number of that can be non-zero for a basic solution?   Imagine an augmented matrix with the coefficients of the on one side and the supplies\/demand of the other. What is an upper bound of the rank of this matrix. Then consider that . What does this say about the (in)dependence of the rows? What then must the rank be?    We first mark the difference between the lowest two values in each row\/column:       1  1  5      1  2  1  2  40    3  9  4  7  60    1  1  2  9  10      40  50  20       A table like this is called a transportation tableau .  Ideally we would always want to move everything with the cheapest available option. It's not hard to see that in most cases, like this one, this isn't actually possible. What do these numbers we computed measure? How can they help us decide how to move goods?    We select the row\/column with the highest entries and use the smallest entry in said row\/column to move as much of the goods as we can:       1  1  5      1  2  1     40    3  9  4  7  60    1  1  2  9  10      40  50  20            1  1  5      1  2  1     20    3  9  4  7  60    1  1  2  9  10      40  50  0       Would it make sense to move any more goods to market 3? How should we decide how to move goods next?    Now that Market 3 has all their demand filled, and shipping there is no longer an option, what are the differences between the lowest costs and second lowest costs in each row\/column?       ?  ?  NA      ?  2  1     20    ?  9  4  7  60    ?  1  2  9  10      40  50  0       Would it make sense to move any more goods to market 3? How should we decide how to move goods next?    The next highest difference is 3 for warehouse 2:       ?  ?  NA      ?  2  1     20    ?  9     7  60    ?  1  2  9  10      40  50  0            ?  ?  NA      ?  2  1     20    ?  9     7  10    ?  1  2  9  10      40  0  0       Does it make sense to continue to move goods from warehouse 2?  What should be the next choice of warehouse\/market?    Finish moving the goods from warehouses to markets.    Consider the final transportation tableau:       1  1  5      1     1     0    3        7  0    1     2  9  0      0  0  0       Verify that this is a feasible solution to the original transportation problem. Is it optimal?    Out of the nine possible warehouse\/market pairs, how many have actual shipments between them? How does that compare to what we found in (a)?   "
},
{
  "id": "def-vam",
  "level": "2",
  "url": "sec-vam.html#def-vam",
  "type": "Definition",
  "number": "6.1.2",
  "title": "",
  "body": "  To summarise the Vogel Advanced-Start Method or VAM method of producing a feasible solution to the transportation problem is outlined as follows.    We begin with sources and sinks, each with a supply or demand respectively. We associate each row of the transportation tableau with a source, each column with a sink, and each entry with the cost of shipping from source to sink .    For each row and column, we record the difference between the lowest two values.    We pick the row\/column with the largest difference (so long as the associated supply\/demand is positive), and the smallest entry in the row\/column, . By convention we circle this entry.    We ship quantity from source to sink , recording this quantity as a superscript in the numerator and adjusting the supply for source and demand for sink appropriately.    We ignore any source\/sink with 0 supply\/demand and repeat 2-4.    If all source\/sinks are exhausted and we have not yet circled entries, we circle any entries in the last row\/column we've examined, noting that the quantities shipped for these entries is zero.    Once entries are circled and all supply\/demand is exhausted, we terminate. The circled entries are called the basis of the tableau.     "
},
{
  "id": "sec-transportalgorithm",
  "level": "1",
  "url": "sec-transportalgorithm.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Transportation Algorithm",
  "body": " The Transportation Algorithm    Consider a transportation tableau:                       0            0      0  0       The box here denotes that the bottom right 5 isn't currently being used by probably should be.    It is clear that we should shift some of warehouse 2's shipments to market 2 to reduce costs. Why isn't this a valid transportation tableau?                                                    How should we adjust these values to have a valid tableau?                                                    How about this one?                           ?  ?  0         ?     ?  0      ?     ?     0      ?  ?  ?  ?  0      ?  ?        0      0  0  0  0           Recall the transportation tableau obtained in :       1  1  5      1     1     0    3        7  0    1     2  9  0      0  0  0       Note that this tableau corresponds to a basic feasible solution for the original minimization problem.    If this solution is not optimal, what should the next step be?    Pick a variable to exit the basis which increases the objective function and make the smallest change.    Pick a variable to exit the basis which decreases the objective function and make the smallest change.    Pick a variable to exit the basis which increases the objective function and make the biggest change.    Pick a variable to exit the basis which decreases the objective function and make the biggest change.      Select column values and row values so that each circled value is the sum of row and column values .  (We can think of these as analogous to the shadow costs associated with the warehouse\/market bounds)                          1                  7            2  9                     Replace each entry of the tableau with . What does this measure? What does it mean if each entry is non-negative?    Pick a                           ?                               ?  ?                     Pick circled entries so that they with the boxed form a cycle , that is each of these entries shares a row with exactly one another of the entries, and a column with another of the entries.    Based on the discussion in (a), which entry should transfer their shipments to ?              How do the other entries in the cycle adjust?    Remove the basis entry which is no longer being used, and recompute the with the new basis.                          ?                               ?  ?                     Verify that none of the entries are non negative. Why do we now terminate?  We then replace the entries with the original entries                                                                                  Use Sage to confirm the solution:          To summarize, the transportation algorithm is as follows:    We begin with a feasible transportation tableau, probably via VAM .  We then associate with each row an unknown and each column a .    We (by convention) let and select values so that for each basis entry we have that .    Replace every entry with .    If there is a negative entry box this entry and select basis entries so that they, along with the boxed entry, form a cycle.  If each entry is non-negative, GOTO 6.    Shift shipments appropriately along the cycle so that has a positive shipping quantity, and one of the selected basis entries has a zero shipping quantity.  Then GOTO 2.    Replace each cost entry with the costs from step 1 and terminate.       Unbalnced Transportation Problems    We now consider the case of unbalanced transportation problems, where the demand and supply are unequal.    Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  20 tons  40 tons       Suppose we satisfy all the demand in a way that minimizes costs. What would be the remaining result?    Suppose we ship the excess supply to a phatom market:       Market 1  Market 2  Market 3   Market       Warehouse 1  $5\/ton  $3\/ton  $1\/ton  ?  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  ?  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  ?  15 tons      30 tons  20 tons  40 tons  ?       How much is shipped to the Market ? How much does it cost to ship from each warehouse to Market ?    Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  50 tons  40 tons       Suppose we exhaust all the supply in a way that minimizes costs. What would be the remaining result?    Suppose we have a phantom Warehouse that filled the outstanding demand.       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons     Warehouse   ?  ?  ?  ?      30 tons  50 tons  40 tons       How much additional supply is needed? How much would it cost to ship this supply from Warehouse to the markets?    Describe a general procedure for solving unbalanced transportation problems.     "
},
{
  "id": "sec-transportalgorithm-2",
  "level": "2",
  "url": "sec-transportalgorithm.html#sec-transportalgorithm-2",
  "type": "Exploration",
  "number": "6.2.1",
  "title": "",
  "body": "  Consider a transportation tableau:                       0            0      0  0       The box here denotes that the bottom right 5 isn't currently being used by probably should be.    It is clear that we should shift some of warehouse 2's shipments to market 2 to reduce costs. Why isn't this a valid transportation tableau?                                                    How should we adjust these values to have a valid tableau?                                                    How about this one?                           ?  ?  0         ?     ?  0      ?     ?     0      ?  ?  ?  ?  0      ?  ?        0      0  0  0  0        "
},
{
  "id": "activity-transportalgorithm",
  "level": "2",
  "url": "sec-transportalgorithm.html#activity-transportalgorithm",
  "type": "Activity",
  "number": "6.2.2",
  "title": "",
  "body": "  Recall the transportation tableau obtained in :       1  1  5      1     1     0    3        7  0    1     2  9  0      0  0  0       Note that this tableau corresponds to a basic feasible solution for the original minimization problem.    If this solution is not optimal, what should the next step be?    Pick a variable to exit the basis which increases the objective function and make the smallest change.    Pick a variable to exit the basis which decreases the objective function and make the smallest change.    Pick a variable to exit the basis which increases the objective function and make the biggest change.    Pick a variable to exit the basis which decreases the objective function and make the biggest change.      Select column values and row values so that each circled value is the sum of row and column values .  (We can think of these as analogous to the shadow costs associated with the warehouse\/market bounds)                          1                  7            2  9                     Replace each entry of the tableau with . What does this measure? What does it mean if each entry is non-negative?    Pick a                           ?                               ?  ?                     Pick circled entries so that they with the boxed form a cycle , that is each of these entries shares a row with exactly one another of the entries, and a column with another of the entries.    Based on the discussion in (a), which entry should transfer their shipments to ?              How do the other entries in the cycle adjust?    Remove the basis entry which is no longer being used, and recompute the with the new basis.                          ?                               ?  ?                     Verify that none of the entries are non negative. Why do we now terminate?  We then replace the entries with the original entries                                                                                  Use Sage to confirm the solution:       "
},
{
  "id": "def-transportationalg",
  "level": "2",
  "url": "sec-transportalgorithm.html#def-transportationalg",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  To summarize, the transportation algorithm is as follows:    We begin with a feasible transportation tableau, probably via VAM .  We then associate with each row an unknown and each column a .    We (by convention) let and select values so that for each basis entry we have that .    Replace every entry with .    If there is a negative entry box this entry and select basis entries so that they, along with the boxed entry, form a cycle.  If each entry is non-negative, GOTO 6.    Shift shipments appropriately along the cycle so that has a positive shipping quantity, and one of the selected basis entries has a zero shipping quantity.  Then GOTO 2.    Replace each cost entry with the costs from step 1 and terminate.     "
},
{
  "id": "activity-unbalanced",
  "level": "2",
  "url": "sec-transportalgorithm.html#activity-unbalanced",
  "type": "Activity",
  "number": "6.2.3",
  "title": "",
  "body": "  We now consider the case of unbalanced transportation problems, where the demand and supply are unequal.    Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  20 tons  40 tons       Suppose we satisfy all the demand in a way that minimizes costs. What would be the remaining result?    Suppose we ship the excess supply to a phatom market:       Market 1  Market 2  Market 3   Market       Warehouse 1  $5\/ton  $3\/ton  $1\/ton  ?  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  ?  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  ?  15 tons      30 tons  20 tons  40 tons  ?       How much is shipped to the Market ? How much does it cost to ship from each warehouse to Market ?    Suppose we had the following transportation problem:       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons      30 tons  50 tons  40 tons       Suppose we exhaust all the supply in a way that minimizes costs. What would be the remaining result?    Suppose we have a phantom Warehouse that filled the outstanding demand.       Market 1  Market 2  Market 3      Warehouse 1  $5\/ton  $3\/ton  $1\/ton  35 tons    Warehouse 2  $6\/ton  $2\/ton  $5\/ton  45 tons    Warehouse 3  $4\/ton  $2\/ton  $1\/ton  15 tons     Warehouse   ?  ?  ?  ?      30 tons  50 tons  40 tons       How much additional supply is needed? How much would it cost to ship this supply from Warehouse to the markets?    Describe a general procedure for solving unbalanced transportation problems.   "
},
{
  "id": "sec-assignment",
  "level": "1",
  "url": "sec-assignment.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Assignment Problem and Hungarian Algorithm",
  "body": " The Assignment Problem and Hungarian Algorithm    Supose we have 3 jobs and 3 contractors, and we wish to assign jobs to contractors at the minimum price. How can we distribute the jobs amongst the contractors? (Costs are in thousands of dollars)       Job 1  Job 2  Job 3      Contractor 1  10  9  12  ?    Contractor 2  9  9  10  ?    Contractor 3  10  7  9  ?      ?  ?  ?  ?       What are the supply and demand of each job and contractor?    Use VAM and the Transportation Algorithm to solve this problem.    Was this really necessary?      An assignment problem is a transportation problem where the supply and demands are all 1.    Note that in , while we were able to solve this as a transportation problem, the restriction to supplies and demands of 1 ought to yield a simpler way to find a solution.    Let be a tableau for a balanced assignment problem. A permutation set of zeroes is a subset of zero cells for so that each row and column contains exactly one zero cell.      We explore some features of the assignment tableau that can help shed light on what an appropriate algorithm would look like.                                                                 If we multiply each entry by , would that change our optimal solution? What about by ? What values could I multiply the tableau by to preserve the optimal solution?    If we add or subtract from each entry, does it change the optimal solution? What about ?    Suppose we had an optimal solution to the assignment problem. Explain why adding to each entry in a row does not change the optimal solution.   How would this compare to solving the original problem and adding to the cost?    What would change if we did this to a different row? A column?    Suppose I subtracted the smallest value in each row from every entry of that row. If there was a permutation set of zeroes, what would that entail?    Suppose I subtracted the smallest value in each column from every entry of that column. If there was a permutation set of zeroes, what would that entail?    If we had a tableau with all rational values, how could I change this to a tableau of all integer values with the same optimal solution?    If we had a tableau with all integer values, how could I change this to a tableau of all non-negative integer values with the same optimal solution?      We state here the steps of the Hungarian Algorithm . We start with an assignment tableau .    IF the entries of are rational but not all integeral, :  THEN multiply each entry of by the lowest common multiple of the denominators, .    IF the entries of are not all non-negative:  THEN add to every entry of the smallest value of , .    Subtract from each row the smallest entry in that row.    Subtract from each column the smallest entry in that column.    IF has a permutation set of zeroes:  STOP    Draw a minimum number of lines through covering an entire row or column such that all 's are covered.    minimum .     Subtract all uncovered entries by the smallest entry that is not covered, and add that value to the entries corresponding to intersections of the lines.    GOTO 5.        In step 6 of , suppose we draw lines. Could be greater than ?    What would it mean if ?    If , would it be possible for all the lines to be parallel?    What's going on in step 7?      Use the Hungarian Algorithm to solve the problem from .      Suppose 4 students are picking 4 research topics. The four topics are to be distributed one each amongst the four students. They rated the ropics on a scale of 1-10.       Topic 1  Topic 2  Topic 3  Topic 4    Student 1  6  9  10  8    Student 2  2  8  9  7    Student 3  7  7  8  9    Student 4  6  8  9  8     We want to maximize the total enjoyment .    This is a maximization problem, and the assignment problem is a minimization problem, how might we convert it to a minimization problem?    After converting, use the Hungarian Algorithm to solve the problem.    "
},
{
  "id": "exploration-assignment",
  "level": "2",
  "url": "sec-assignment.html#exploration-assignment",
  "type": "Exploration",
  "number": "6.3.1",
  "title": "",
  "body": "  Supose we have 3 jobs and 3 contractors, and we wish to assign jobs to contractors at the minimum price. How can we distribute the jobs amongst the contractors? (Costs are in thousands of dollars)       Job 1  Job 2  Job 3      Contractor 1  10  9  12  ?    Contractor 2  9  9  10  ?    Contractor 3  10  7  9  ?      ?  ?  ?  ?       What are the supply and demand of each job and contractor?    Use VAM and the Transportation Algorithm to solve this problem.    Was this really necessary?   "
},
{
  "id": "def-assignmentproblem",
  "level": "2",
  "url": "sec-assignment.html#def-assignmentproblem",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  An assignment problem is a transportation problem where the supply and demands are all 1.   "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-assignment.html#def-permutation",
  "type": "Definition",
  "number": "6.3.2",
  "title": "",
  "body": "  Let be a tableau for a balanced assignment problem. A permutation set of zeroes is a subset of zero cells for so that each row and column contains exactly one zero cell.   "
},
{
  "id": "sec-assignment-6",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-6",
  "type": "Activity",
  "number": "6.3.2",
  "title": "",
  "body": "  We explore some features of the assignment tableau that can help shed light on what an appropriate algorithm would look like.                                                                 If we multiply each entry by , would that change our optimal solution? What about by ? What values could I multiply the tableau by to preserve the optimal solution?    If we add or subtract from each entry, does it change the optimal solution? What about ?    Suppose we had an optimal solution to the assignment problem. Explain why adding to each entry in a row does not change the optimal solution.   How would this compare to solving the original problem and adding to the cost?    What would change if we did this to a different row? A column?    Suppose I subtracted the smallest value in each row from every entry of that row. If there was a permutation set of zeroes, what would that entail?    Suppose I subtracted the smallest value in each column from every entry of that column. If there was a permutation set of zeroes, what would that entail?    If we had a tableau with all rational values, how could I change this to a tableau of all integer values with the same optimal solution?    If we had a tableau with all integer values, how could I change this to a tableau of all non-negative integer values with the same optimal solution?   "
},
{
  "id": "def-hungarian",
  "level": "2",
  "url": "sec-assignment.html#def-hungarian",
  "type": "Definition",
  "number": "6.3.3",
  "title": "",
  "body": "  We state here the steps of the Hungarian Algorithm . We start with an assignment tableau .    IF the entries of are rational but not all integeral, :  THEN multiply each entry of by the lowest common multiple of the denominators, .    IF the entries of are not all non-negative:  THEN add to every entry of the smallest value of , .    Subtract from each row the smallest entry in that row.    Subtract from each column the smallest entry in that column.    IF has a permutation set of zeroes:  STOP    Draw a minimum number of lines through covering an entire row or column such that all 's are covered.    minimum .     Subtract all uncovered entries by the smallest entry that is not covered, and add that value to the entries corresponding to intersections of the lines.    GOTO 5.     "
},
{
  "id": "sec-assignment-8",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-8",
  "type": "Activity",
  "number": "6.3.3",
  "title": "",
  "body": "  In step 6 of , suppose we draw lines. Could be greater than ?    What would it mean if ?    If , would it be possible for all the lines to be parallel?    What's going on in step 7?   "
},
{
  "id": "sec-assignment-9",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-9",
  "type": "Activity",
  "number": "6.3.4",
  "title": "",
  "body": "  Use the Hungarian Algorithm to solve the problem from .   "
},
{
  "id": "sec-assignment-10",
  "level": "2",
  "url": "sec-assignment.html#sec-assignment-10",
  "type": "Activity",
  "number": "6.3.5",
  "title": "",
  "body": "  Suppose 4 students are picking 4 research topics. The four topics are to be distributed one each amongst the four students. They rated the ropics on a scale of 1-10.       Topic 1  Topic 2  Topic 3  Topic 4    Student 1  6  9  10  8    Student 2  2  8  9  7    Student 3  7  7  8  9    Student 4  6  8  9  8     We want to maximize the total enjoyment .    This is a maximization problem, and the assignment problem is a minimization problem, how might we convert it to a minimization problem?    After converting, use the Hungarian Algorithm to solve the problem.   "
},
{
  "id": "sec-networkflow",
  "level": "1",
  "url": "sec-networkflow.html",
  "type": "Section",
  "number": "7.1",
  "title": "Directed Graphs and Network Flow",
  "body": " Directed Graphs and Network Flow    Consider a series of islands with bridges between them. A group of people are trying to move from island to island . Due to the length\/width of the bridges, only but so many people can move between a pair of islands in a minute, and these are labled. The bridges also only allow movement in one direction.   A Network Flow depicting several islands with bridges and carrying capacity.      Conjecture a solution to the maximum number of people that can arrive at in a minute?    If you could increase the capacity of a single bridge to increase the number of people who can travel to in a minute, which would it be and by how much?      A directed graph or network is a pair where is a set of vertices and is a set of ordered pairs of distinct elements of .  A network is capacitated if for each edge we assign a non negative capacity . (If there is no edge from to , we may equivalently say that .)  A flow assigned to a capacitated network is an assignment to each edge , a value such that . (If there is no edge from to , what must be?)      Graph theory is a rich, complex and deep area of study. Graph Theorists study a variety of graphs or objects called graphs, with a wide range of conventions. For the purposes of this chapter, graphs are directed, there is at most two edges between graphs (one in each direction), and loops are disallowed. Note that in general some or any of these conventions can be modified or removed.      For any vertex , the net input flow at vertex is   If then we say is called a source .  If then we say is called a sink .  If then we say is called an intermediary vertex .      For the network in , find three different flows, including one you believe is an optimal flow.   For each flow you found: identify the sources, sinks, and intermediary vertices.   For each flow you found: compute the sum ?     Conservation of Flow   For a capacited network , .      Prove .      Consider the network:  A network with multiple sources and sinks.       Find a (not necessarily optimal!) flow through this network with exactly two sources and exactly two sinks.    Add two vertices to this network: , and two edges from to two vertices, and two edges to from two different vertices, each with infinite capacity, and extend the above flow to those edges so that this flow has a unique source and sink.      To be able to address the sort of questions we wish to ask, we will restrict ourselves to networks with a unique fixed source or sink, with no edges from the sink or to the source. In light of , this is not really much of a restriction.     Max Flow    Suppose we have a capacitated network with a unique fixed source and sink .  We wish to define a maximization linear program with decision variables .    Define the objective function both in terms of variables and . Explain why these are equivalent (can you prove it?).    For each edge , there is a natural inequality constraint for the decision variables associated with this edge. What is this inequality?    For each vertex not our source or sink, there is an equality constraint for the decision variables associated with this vertex. Which is this equality?                                    There is an additional type of inequality for this problem, what is it?    Write out the primal max problem for as a non-canonical Tucker Tableau.    Solve this problem:        Let denote the dual variable for associated with vertex and let denote the dual variable associated with edge .  Describe the dual min program.     "
},
{
  "id": "exploration-flow",
  "level": "2",
  "url": "sec-networkflow.html#exploration-flow",
  "type": "Exploration",
  "number": "7.1.1",
  "title": "",
  "body": "  Consider a series of islands with bridges between them. A group of people are trying to move from island to island . Due to the length\/width of the bridges, only but so many people can move between a pair of islands in a minute, and these are labled. The bridges also only allow movement in one direction.   A Network Flow depicting several islands with bridges and carrying capacity.      Conjecture a solution to the maximum number of people that can arrive at in a minute?    If you could increase the capacity of a single bridge to increase the number of people who can travel to in a minute, which would it be and by how much?   "
},
{
  "id": "def-directedgraph",
  "level": "2",
  "url": "sec-networkflow.html#def-directedgraph",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  A directed graph or network is a pair where is a set of vertices and is a set of ordered pairs of distinct elements of .  A network is capacitated if for each edge we assign a non negative capacity . (If there is no edge from to , we may equivalently say that .)  A flow assigned to a capacitated network is an assignment to each edge , a value such that . (If there is no edge from to , what must be?)   "
},
{
  "id": "sec-networkflow-4",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-4",
  "type": "Note",
  "number": "7.1.2",
  "title": "",
  "body": "  Graph theory is a rich, complex and deep area of study. Graph Theorists study a variety of graphs or objects called graphs, with a wide range of conventions. For the purposes of this chapter, graphs are directed, there is at most two edges between graphs (one in each direction), and loops are disallowed. Note that in general some or any of these conventions can be modified or removed.   "
},
{
  "id": "def-netinput",
  "level": "2",
  "url": "sec-networkflow.html#def-netinput",
  "type": "Definition",
  "number": "7.1.3",
  "title": "",
  "body": "  For any vertex , the net input flow at vertex is   If then we say is called a source .  If then we say is called a sink .  If then we say is called an intermediary vertex .   "
},
{
  "id": "sec-networkflow-6",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-6",
  "type": "Activity",
  "number": "7.1.2",
  "title": "",
  "body": "  For the network in , find three different flows, including one you believe is an optimal flow.   For each flow you found: identify the sources, sinks, and intermediary vertices.   For each flow you found: compute the sum ?   "
},
{
  "id": "thm-conservation",
  "level": "2",
  "url": "sec-networkflow.html#thm-conservation",
  "type": "Theorem",
  "number": "7.1.4",
  "title": "Conservation of Flow.",
  "body": " Conservation of Flow   For a capacited network , .   "
},
{
  "id": "sec-networkflow-8",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-8",
  "type": "Activity",
  "number": "7.1.3",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "activity-uniquesourcesink",
  "level": "2",
  "url": "sec-networkflow.html#activity-uniquesourcesink",
  "type": "Activity",
  "number": "7.1.4",
  "title": "",
  "body": "  Consider the network:  A network with multiple sources and sinks.       Find a (not necessarily optimal!) flow through this network with exactly two sources and exactly two sinks.    Add two vertices to this network: , and two edges from to two vertices, and two edges to from two different vertices, each with infinite capacity, and extend the above flow to those edges so that this flow has a unique source and sink.   "
},
{
  "id": "sec-networkflow-10",
  "level": "2",
  "url": "sec-networkflow.html#sec-networkflow-10",
  "type": "Observation",
  "number": "7.1.5",
  "title": "",
  "body": "  To be able to address the sort of questions we wish to ask, we will restrict ourselves to networks with a unique fixed source or sink, with no edges from the sink or to the source. In light of , this is not really much of a restriction.   "
},
{
  "id": "subsec-maxflow-2",
  "level": "2",
  "url": "sec-networkflow.html#subsec-maxflow-2",
  "type": "Activity",
  "number": "7.1.5",
  "title": "",
  "body": "  Suppose we have a capacitated network with a unique fixed source and sink .  We wish to define a maximization linear program with decision variables .    Define the objective function both in terms of variables and . Explain why these are equivalent (can you prove it?).    For each edge , there is a natural inequality constraint for the decision variables associated with this edge. What is this inequality?    For each vertex not our source or sink, there is an equality constraint for the decision variables associated with this vertex. Which is this equality?                                    There is an additional type of inequality for this problem, what is it?    Write out the primal max problem for as a non-canonical Tucker Tableau.    Solve this problem:        Let denote the dual variable for associated with vertex and let denote the dual variable associated with edge .  Describe the dual min program.   "
},
{
  "id": "sec-maxflowmincut",
  "level": "1",
  "url": "sec-maxflowmincut.html",
  "type": "Section",
  "number": "7.2",
  "title": "Max Flow - Min Cut",
  "body": " Max Flow - Min Cut    Recall . Suppose that we wish to install a toll booth on these bridges so that each person going to pays a toll at least once. The cost of installing a toll booth on a bridge is proportional to it's capacity.    Find three different ways to install these booths, and find what you believe is the cheapest way to do so.      Given a capacitated network , a cut of is a partition of the vertex set into non-empty subsets , where .  The capacity of a cut is the sum .     From , find three different cuts and their capacities.  What cut do you think minimizes the capacity, how does this compare to your conjectured max flow for this problem?      Consider the primal maximization program for a max flow problem for a capacitated network with unique source and unique sink :       Consider the dual program for this problem where is the unconstrained dual variable for the vertex equality constraint and the is the dual variable for the capacity constraint. Verify that this program may be written as   where .    Verify that we may simplify the dual solution as:       Suppose . What could be? What value for would minimize the dual objective function? What happens if is huge, how would that affect ?  Repeat for .    Suppose each , Note that forms a cut of .  For , what is ?  For , what is ?  For , what is ?  Can any cut of be modeled this way?    What is the capacity of the above cut? How does that relate to the dual program?    Prove that the maximum flow through a network is bounded above by the minimum cut capacity.      We explore a way of generating potential minimum cuts using a maximum flow.  Recall and your proposed maximum flow .    Let , we recursively define by adding to if either:    .     .       Let . What is the cut capacity of ?      We now prove that the minimum cut capacity is equal to the maximum flow.    Why does the primal max problem achieve optimality?  Call the maximum flow , with flow on each edge .    Let , we recursively define by adding to if either:    .     .   and repeating until we stabilize, why must we eventually stabilize?    Show that for any in , there is an -path  : a sequence of vertices starting to , where between either .    An -path.     We would call the edges to be forward edges and  backwards edges of .    Suppose (by way of contradiction) that . There is by (c) an -path from to .  Let   Why is ?    We define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Explain why this is still a valid network flow.    Explain why has a greater value than . Why must ?    Define . Prove that for any , we have that .  (Not neccesary for this proof, but to tie things in, if , what does that say about from the dual program in ? If , what does that say about ? )    Use to show that the value of is equal to the cut capacity of . (Proving the result!)    Going back to if we let for and for , what is the value of the dual min objective?      Let be a capacitated directed network with unique fixed source and unique fixed sink, no edges into the source, and no edges out of the sink. Then the value of the maximalflow from to is equal to the minimal cut capacity in .      Suppose we had a non-optimal flow , how could we adopt the procedure in to obtain a better flow?     Max Flow-Min Cut Algorithms  Algorithms for Max Flow and Min Cut    Consider the following capacitated network with source and sink :    A network with multiple sources and sinks.     Recall the procedure to produce improved flows in .    Begin with the zero-flow.  A network with multiple sources and sinks.     Consider the -path . Apply (d) to this path. What is ?    Adjust the flow on edges by appropriately. Explain why we need not consider the edge for any future -paths.    Pick another -path where and repeat until we achieve a maximum flow.    A network with multiple sources and sinks.       Use the maximum flow and the argument in to find a minimum cut.     Max Flow Algorithm   We describe an algorithm to find the maximum flow for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with any feasible flow (including the zero flow.)    Pick an -path in from to such that:   Each forward edge of satisfies .   Eack backwards edge satisfies .    (If no such -path exists, GOTO 5)    Compute     Define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Let and GOTO 2    STOP. The flow is now optimal.       Prove that the Max Flow Algorithm terminates at a maximum flow.    Min Cut Algorithm   We describe an algorithm to find the minimum for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with a maximum flow and .    We add to if there is a such that either:     .     .    If there is no such , GOTO 4    GOTO 2    Let .  STOP form a minimum cut.       "
},
{
  "id": "sec-maxflowmincut-2",
  "level": "2",
  "url": "sec-maxflowmincut.html#sec-maxflowmincut-2",
  "type": "Exploration",
  "number": "7.2.1",
  "title": "",
  "body": "  Recall . Suppose that we wish to install a toll booth on these bridges so that each person going to pays a toll at least once. The cost of installing a toll booth on a bridge is proportional to it's capacity.    Find three different ways to install these booths, and find what you believe is the cheapest way to do so.   "
},
{
  "id": "def-cut",
  "level": "2",
  "url": "sec-maxflowmincut.html#def-cut",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "  Given a capacitated network , a cut of is a partition of the vertex set into non-empty subsets , where .  The capacity of a cut is the sum .   "
},
{
  "id": "activity-cutflow",
  "level": "2",
  "url": "sec-maxflowmincut.html#activity-cutflow",
  "type": "Activity",
  "number": "7.2.2",
  "title": "",
  "body": " From , find three different cuts and their capacities.  What cut do you think minimizes the capacity, how does this compare to your conjectured max flow for this problem?   "
},
{
  "id": "activity-dualflow",
  "level": "2",
  "url": "sec-maxflowmincut.html#activity-dualflow",
  "type": "Activity",
  "number": "7.2.3",
  "title": "",
  "body": "  Consider the primal maximization program for a max flow problem for a capacitated network with unique source and unique sink :       Consider the dual program for this problem where is the unconstrained dual variable for the vertex equality constraint and the is the dual variable for the capacity constraint. Verify that this program may be written as   where .    Verify that we may simplify the dual solution as:       Suppose . What could be? What value for would minimize the dual objective function? What happens if is huge, how would that affect ?  Repeat for .    Suppose each , Note that forms a cut of .  For , what is ?  For , what is ?  For , what is ?  Can any cut of be modeled this way?    What is the capacity of the above cut? How does that relate to the dual program?    Prove that the maximum flow through a network is bounded above by the minimum cut capacity.   "
},
{
  "id": "sec-maxflowmincut-6",
  "level": "2",
  "url": "sec-maxflowmincut.html#sec-maxflowmincut-6",
  "type": "Activity",
  "number": "7.2.4",
  "title": "",
  "body": "  We explore a way of generating potential minimum cuts using a maximum flow.  Recall and your proposed maximum flow .    Let , we recursively define by adding to if either:    .     .       Let . What is the cut capacity of ?   "
},
{
  "id": "activity-maxflowmincutproof",
  "level": "2",
  "url": "sec-maxflowmincut.html#activity-maxflowmincutproof",
  "type": "Activity",
  "number": "7.2.5",
  "title": "",
  "body": "  We now prove that the minimum cut capacity is equal to the maximum flow.    Why does the primal max problem achieve optimality?  Call the maximum flow , with flow on each edge .    Let , we recursively define by adding to if either:    .     .   and repeating until we stabilize, why must we eventually stabilize?    Show that for any in , there is an -path  : a sequence of vertices starting to , where between either .    An -path.     We would call the edges to be forward edges and  backwards edges of .    Suppose (by way of contradiction) that . There is by (c) an -path from to .  Let   Why is ?    We define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Explain why this is still a valid network flow.    Explain why has a greater value than . Why must ?    Define . Prove that for any , we have that .  (Not neccesary for this proof, but to tie things in, if , what does that say about from the dual program in ? If , what does that say about ? )    Use to show that the value of is equal to the cut capacity of . (Proving the result!)    Going back to if we let for and for , what is the value of the dual min objective?   "
},
{
  "id": "thm-maxflowmincut",
  "level": "2",
  "url": "sec-maxflowmincut.html#thm-maxflowmincut",
  "type": "Theorem",
  "number": "7.2.2",
  "title": "",
  "body": "  Let be a capacitated directed network with unique fixed source and unique fixed sink, no edges into the source, and no edges out of the sink. Then the value of the maximalflow from to is equal to the minimal cut capacity in .   "
},
{
  "id": "sec-maxflowmincut-9",
  "level": "2",
  "url": "sec-maxflowmincut.html#sec-maxflowmincut-9",
  "type": "Activity",
  "number": "7.2.6",
  "title": "",
  "body": "  Suppose we had a non-optimal flow , how could we adopt the procedure in to obtain a better flow?   "
},
{
  "id": "exploration-transportation",
  "level": "2",
  "url": "sec-maxflowmincut.html#exploration-transportation",
  "type": "Exploration",
  "number": "7.2.7",
  "title": "",
  "body": "  Consider the following capacitated network with source and sink :    A network with multiple sources and sinks.     Recall the procedure to produce improved flows in .    Begin with the zero-flow.  A network with multiple sources and sinks.     Consider the -path . Apply (d) to this path. What is ?    Adjust the flow on edges by appropriately. Explain why we need not consider the edge for any future -paths.    Pick another -path where and repeat until we achieve a maximum flow.    A network with multiple sources and sinks.       Use the maximum flow and the argument in to find a minimum cut.   "
},
{
  "id": "def-maxflowalgorithm",
  "level": "2",
  "url": "sec-maxflowmincut.html#def-maxflowalgorithm",
  "type": "Definition",
  "number": "7.2.3",
  "title": "Max Flow Algorithm.",
  "body": " Max Flow Algorithm   We describe an algorithm to find the maximum flow for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with any feasible flow (including the zero flow.)    Pick an -path in from to such that:   Each forward edge of satisfies .   Eack backwards edge satisfies .    (If no such -path exists, GOTO 5)    Compute     Define a new flow as follows: for each forward edge of , , we add . For each backwards edge we subtract .  Let and GOTO 2    STOP. The flow is now optimal.     "
},
{
  "id": "subsec-flowcutalgorithms-5",
  "level": "2",
  "url": "sec-maxflowmincut.html#subsec-flowcutalgorithms-5",
  "type": "Activity",
  "number": "7.2.8",
  "title": "",
  "body": " Prove that the Max Flow Algorithm terminates at a maximum flow.  "
},
{
  "id": "def-mincutalgorithm",
  "level": "2",
  "url": "sec-maxflowmincut.html#def-mincutalgorithm",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Min Cut Algorithm.",
  "body": " Min Cut Algorithm   We describe an algorithm to find the minimum for , a capacitated network with a unique source and sink :    INITIALIZE: We begin with a maximum flow and .    We add to if there is a such that either:     .     .    If there is no such , GOTO 4    GOTO 2    Let .  STOP form a minimum cut.     "
},
{
  "id": "sec-weighted",
  "level": "1",
  "url": "sec-weighted.html",
  "type": "Section",
  "number": "7.3",
  "title": "Weighted Graphs",
  "body": " Weighted Graphs    Dr. Ayad is driving from her home to Fantasi college. The town is connected by a series of one way streets, each labled with the time it would take to traverse the road.   A Network Flow depicting several nodes and edges with weights.      What is the shortest amout of time needed for her to arrive at Fantasi College?    Is there a unique route she could take that minimizes this time?      A network is weighted if for each edge we assign (potentially negative!) weight .      Give a network , a path  from , is a sequence of consecutive edges where . We say that the length of is . We say that the distance from to , , is the length of a shortest path from to .      Consider the weighted network:   A network with negative weights.     What is the shortest path from to ? (You may repeat edges.)  What if we change ?   What is a reasonable condition for the shortest path to be well defined?      We define a cycle in a weighted network to be a path froma vertex to itself. If the length of a cycle is negative, we call it a negative cycle .      In this activity, we model the shortest path algorithm as a linear programming problem. Assume is a weighted network with no negative cycles. Let where if is in a shortest path from to .   What is the objective problem?   Maximize .    Maximize .    Maximize .    Minimize .    Minimize .    Minimize .     What inequality ensures that exactly one edge of the chosen edges is incident to ?     .     .     .     .     .     .      What inequality ensures that the chosen edges form a path?    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .      Why do we not need a constraint for ?    Model the shortest path problem in as a linear programming problem and solve it:        As was the case in previous examples, we introduce a less cumbersome method for finding these shortest paths.   Dijkstra's Algorithm   Let be a weighted network with only non-negative weights. Then Dijkstra's Shortest Path Algorithm is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let .    Let .    If : STOP.    For each , let .    GOTO 2.    When the algorithm terminates, , the length of the shortest path from to .      Apply to the shortest path problem in .      We prove that in , for each via induction on .    Verify that the statement is true when .    Prove that in step 3, if we select then is adjacent to a vertex in .    Let and consider as chosen in step 3. Show that is the shortest distance from to traversing only vertices in .    Suppose (by way of contradiction) that there was a shortest path from to where the length of . Show that there must be an edge in , ) so that .    Show that in this case that . (Invoke the induction hypothesis).    Show that the last statement produces a contradiction (why wasn't already chosen?)    Conclude that .    We present an alternative algorithm for when weights can be negative.    Let be a weighted network with no negative cycles. Then an algorithm to find shortest paths is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let .    Let .    If : STOP.    For each , let , if has a value changed by this process, remove from and add it to .    GOTO 2.    When the algorithm terminates, , the length of the shortest path from to .      Suppose a shipping company is moving goods through a series of transportation hubs via rail. The maximum capcity in tons and the cost in thousands of dollars per ton are listed as an ordered pair:  A Network Flow depicting several hubs with rails showing capacity and cost.   The pairs are (capacity, cost) pairs, and we are trying to ship 10 tons of goods from to .    Find a shortest path from to .    Use this as an -path as in .    Adjust capacities appropriately and remove any fuly capacitated edges.    Repeat (a)-(c) until we have a flow of 10.    Argue that this is not the lowest cost flow.     Minimum Cost Flow Algorithm   The steps for the Minimum Cost Flow Algorithm are as follows:    INITIALIZE: Let be a weighted capacitated network with a unique source and sink , with no edges going into the source and no edges coming out of the sink. We start with the zero flow for each edge . Let be the desired total flow.    If , STOP, we have reached a total flow of .    Form a weighted network as follows:   Let     Let if and only if . Let .    Let if and only if . Let .       Apply the shortest path algorithm on to find the shortest path from to . If no path exists STOP, there is no flow with total value .    Find the -path corresponding to the shortest path found in (4). Let     Add to each forward in , and subtract from each backwards in .    GOTO 2.      "
},
{
  "id": "exploration-path",
  "level": "2",
  "url": "sec-weighted.html#exploration-path",
  "type": "Exploration",
  "number": "7.3.1",
  "title": "",
  "body": "  Dr. Ayad is driving from her home to Fantasi college. The town is connected by a series of one way streets, each labled with the time it would take to traverse the road.   A Network Flow depicting several nodes and edges with weights.      What is the shortest amout of time needed for her to arrive at Fantasi College?    Is there a unique route she could take that minimizes this time?   "
},
{
  "id": "def-weightedgraph",
  "level": "2",
  "url": "sec-weighted.html#def-weightedgraph",
  "type": "Definition",
  "number": "7.3.1",
  "title": "",
  "body": "  A network is weighted if for each edge we assign (potentially negative!) weight .   "
},
{
  "id": "def-path",
  "level": "2",
  "url": "sec-weighted.html#def-path",
  "type": "Definition",
  "number": "7.3.2",
  "title": "",
  "body": "  Give a network , a path  from , is a sequence of consecutive edges where . We say that the length of is . We say that the distance from to , , is the length of a shortest path from to .   "
},
{
  "id": "sec-weighted-5",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-5",
  "type": "Activity",
  "number": "7.3.2",
  "title": "",
  "body": "  Consider the weighted network:   A network with negative weights.     What is the shortest path from to ? (You may repeat edges.)  What if we change ?   What is a reasonable condition for the shortest path to be well defined?   "
},
{
  "id": "def-negativecycle",
  "level": "2",
  "url": "sec-weighted.html#def-negativecycle",
  "type": "Definition",
  "number": "7.3.3",
  "title": "",
  "body": "  We define a cycle in a weighted network to be a path froma vertex to itself. If the length of a cycle is negative, we call it a negative cycle .   "
},
{
  "id": "sec-weighted-7",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-7",
  "type": "Activity",
  "number": "7.3.3",
  "title": "",
  "body": "  In this activity, we model the shortest path algorithm as a linear programming problem. Assume is a weighted network with no negative cycles. Let where if is in a shortest path from to .   What is the objective problem?   Maximize .    Maximize .    Maximize .    Minimize .    Minimize .    Minimize .     What inequality ensures that exactly one edge of the chosen edges is incident to ?     .     .     .     .     .     .      What inequality ensures that the chosen edges form a path?    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .    For each vertex , .      Why do we not need a constraint for ?    Model the shortest path problem in as a linear programming problem and solve it:       "
},
{
  "id": "def-DijkstrasAlgorithm",
  "level": "2",
  "url": "sec-weighted.html#def-DijkstrasAlgorithm",
  "type": "Definition",
  "number": "7.3.4",
  "title": "Dijkstra’s Algorithm.",
  "body": " Dijkstra's Algorithm   Let be a weighted network with only non-negative weights. Then Dijkstra's Shortest Path Algorithm is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let .    Let .    If : STOP.    For each , let .    GOTO 2.    When the algorithm terminates, , the length of the shortest path from to .   "
},
{
  "id": "sec-weighted-10",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-10",
  "type": "Activity",
  "number": "7.3.4",
  "title": "",
  "body": "  Apply to the shortest path problem in .   "
},
{
  "id": "sec-weighted-11",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-11",
  "type": "Activity",
  "number": "7.3.5",
  "title": "",
  "body": "  We prove that in , for each via induction on .    Verify that the statement is true when .    Prove that in step 3, if we select then is adjacent to a vertex in .    Let and consider as chosen in step 3. Show that is the shortest distance from to traversing only vertices in .    Suppose (by way of contradiction) that there was a shortest path from to where the length of . Show that there must be an edge in , ) so that .    Show that in this case that . (Invoke the induction hypothesis).    Show that the last statement produces a contradiction (why wasn't already chosen?)    Conclude that .   "
},
{
  "id": "def-otheralgorithm",
  "level": "2",
  "url": "sec-weighted.html#def-otheralgorithm",
  "type": "Definition",
  "number": "7.3.5",
  "title": "",
  "body": "  Let be a weighted network with no negative cycles. Then an algorithm to find shortest paths is as follows:    INITIALIZE: Let and let . Label , if exists, otherwise.    Let .    Let .    If : STOP.    For each , let , if has a value changed by this process, remove from and add it to .    GOTO 2.    When the algorithm terminates, , the length of the shortest path from to .   "
},
{
  "id": "sec-weighted-14",
  "level": "2",
  "url": "sec-weighted.html#sec-weighted-14",
  "type": "Exploration",
  "number": "7.3.6",
  "title": "",
  "body": "  Suppose a shipping company is moving goods through a series of transportation hubs via rail. The maximum capcity in tons and the cost in thousands of dollars per ton are listed as an ordered pair:  A Network Flow depicting several hubs with rails showing capacity and cost.   The pairs are (capacity, cost) pairs, and we are trying to ship 10 tons of goods from to .    Find a shortest path from to .    Use this as an -path as in .    Adjust capacities appropriately and remove any fuly capacitated edges.    Repeat (a)-(c) until we have a flow of 10.    Argue that this is not the lowest cost flow.   "
},
{
  "id": "def-mincostflowalgorithm",
  "level": "2",
  "url": "sec-weighted.html#def-mincostflowalgorithm",
  "type": "Definition",
  "number": "7.3.6",
  "title": "Minimum Cost Flow Algorithm.",
  "body": " Minimum Cost Flow Algorithm   The steps for the Minimum Cost Flow Algorithm are as follows:    INITIALIZE: Let be a weighted capacitated network with a unique source and sink , with no edges going into the source and no edges coming out of the sink. We start with the zero flow for each edge . Let be the desired total flow.    If , STOP, we have reached a total flow of .    Form a weighted network as follows:   Let     Let if and only if . Let .    Let if and only if . Let .       Apply the shortest path algorithm on to find the shortest path from to . If no path exists STOP, there is no flow with total value .    Find the -path corresponding to the shortest path found in (4). Let     Add to each forward in , and subtract from each backwards in .    GOTO 2.     "
},
{
  "id": "sec-branchbound",
  "level": "1",
  "url": "sec-branchbound.html",
  "type": "Section",
  "number": "8.1",
  "title": "Branch and Bound Method",
  "body": " Branch and Bound Method    Suppose the witch Agnesi also goes into the business of selling food, meat sandwiches and meat pies. Each day she is able to acquire 50 oz of mystery meat (don't ask) and 30 oz of flour. The sandwiches take 8 oz of meat and 2 oz of flour, the pies take 3oz of meat and 5 oz of flour. She is able to sell the sandwiches for 10 gold pieces and the pies for 7 gold pieces.    Agnesi wishes to be able to produce sandwiches and pies in a way to maximize her income. Set up this problem as a linear programming problem and solve.        What are some problems with this solution? Without trying to explictly find the optimal solution, how far off is this solution?    How many sandwiches and pies should she actually sell to maximize her income?     After the local barber has been arrested, demand for Agnesi's pies sees an increase, and she is able to now sell them for 12 gold pieces. Now what production level maximizes her income?       A linear programming problem where all solutions must be integers is called an integer programming problem .  If the condition that solutions be integers are relaxed, this is called the relaxation of the integer programming problem.      Come up with three realistic optimization problems who are best modeled by an integer programming problem. You do not need to work out all the details or solve the problems.    Consider an integer programming maximization problem whose relaxation achieves an optimal solution. Which of the following are true about the integer program?    The integer program achieves an optimal solution that is equal to the optimal solution of the relaxation.    The integer program achieves an optimal solution that is less than to the optimal solution of the relaxation.    The integer program achieves an optimal solution that is greater than to the optimal solution of the relaxation.    The integer program is infeasible.    The integer program is unbounded above.        The branch and bound method is a way to systematically add bounds to a linear programming problem to ensure the solution is integral.  We examine the integer programming problem from , and it's relaxation.    Consider the number of sandwiches sold, the current optimal . Which two of the following potential additional constraints would force the value of to be an integer, while remaining as close to the optimal solution of the relaxation as possible.                                              Let us consider the additional constraint . Solve the resulting general linear programming problem:        A Tree Diagram describing additional constraints.       What additional constraints on would ensure that would be integral while changing as little as possible?    Consider the additional constraint . Solve this maximization problem. Why do we no longer need to adjust ? Are we gaurunteed that this solution is optimal?    A Tree Diagram describing additional constraints.       We consider the constraint instead. Solve this maximization problem. Even though the solution is not integral, why do we no longer need to pursue the case where ?    A Tree Diagram describing additional constraints.       We return to the other possible initial constraint for , . Solve this maximization problem. What are the possible constraints we could now add for ?    A Tree Diagram describing additional constraints.       We consider now the constraint . Solve this maximazation problem. How does this solution compare to the previous integral solution we found?    Instead we now consider the constraint . Solve this maximization problem. Why do we no longer need to consider the case where ?    How do we know we now have arrived at the optimal solution?    A Tree Diagram describing additional constraints.         The branch and bound algorithm for solving an integer programming maximization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer programming problem.    Solve the relaxation of the linear programming problem. If the solution is integral STOP.    For some in the optimal solution found in the previous step, define two sub problems, one with additional constraint and     Pick one of the subproblems and solve the linear relaxation with the additional constraint.    If the solution is integral, RETURN to 4.    If the solution is less than any integral solution found, RETURN to 4.    If the problem is infeasible, RETURN to 4.    Apply 3-7 to the new problem.    If all subproblems are explored, RETURN to 4 for the parent problem.    Once the search tree has been exhausted, identify the optimal integral solution.        The complete search tree for is as follows   A Tree Diagram describing additional constraints.    We start at Node 0, and identify the two subproblems. We exlore the subproblem where in Node 1, and again identify two subproblems. We stop and return at Node 2 because the solution was integral. We stop and return from Node 3, even though the solution is not integral, because the optimal solution for that subproblem was already less than the solution found in Node 1, and any further exploration would lead to a lower value still.  We then return to the starting node and to the other initial subproblem in Node 4, were . When we split into the the two subproblems, gives an integral solution in Node 5, and the constraint gives an infeasible problem.  Thus, we return, and of the two integral solutions found, has the highest value.      As the demand for meat pies skyrockets, Agnesi is now able to acquire 40 oz of floor a day, but now uses 10 oz of floor per meat pie to thicken the gravy. She is able to sell these for 40 gp each. Use the branch and bound algorithm to found her new optimal production level.        "
},
{
  "id": "exploration-meat",
  "level": "2",
  "url": "sec-branchbound.html#exploration-meat",
  "type": "Exploration",
  "number": "8.1.1",
  "title": "",
  "body": "  Suppose the witch Agnesi also goes into the business of selling food, meat sandwiches and meat pies. Each day she is able to acquire 50 oz of mystery meat (don't ask) and 30 oz of flour. The sandwiches take 8 oz of meat and 2 oz of flour, the pies take 3oz of meat and 5 oz of flour. She is able to sell the sandwiches for 10 gold pieces and the pies for 7 gold pieces.    Agnesi wishes to be able to produce sandwiches and pies in a way to maximize her income. Set up this problem as a linear programming problem and solve.        What are some problems with this solution? Without trying to explictly find the optimal solution, how far off is this solution?    How many sandwiches and pies should she actually sell to maximize her income?     After the local barber has been arrested, demand for Agnesi's pies sees an increase, and she is able to now sell them for 12 gold pieces. Now what production level maximizes her income?    "
},
{
  "id": "def-intergerprogra",
  "level": "2",
  "url": "sec-branchbound.html#def-intergerprogra",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": "  A linear programming problem where all solutions must be integers is called an integer programming problem .  If the condition that solutions be integers are relaxed, this is called the relaxation of the integer programming problem.   "
},
{
  "id": "sec-branchbound-4",
  "level": "2",
  "url": "sec-branchbound.html#sec-branchbound-4",
  "type": "Activity",
  "number": "8.1.2",
  "title": "",
  "body": "  Come up with three realistic optimization problems who are best modeled by an integer programming problem. You do not need to work out all the details or solve the problems.    Consider an integer programming maximization problem whose relaxation achieves an optimal solution. Which of the following are true about the integer program?    The integer program achieves an optimal solution that is equal to the optimal solution of the relaxation.    The integer program achieves an optimal solution that is less than to the optimal solution of the relaxation.    The integer program achieves an optimal solution that is greater than to the optimal solution of the relaxation.    The integer program is infeasible.    The integer program is unbounded above.     "
},
{
  "id": "activity-meat1",
  "level": "2",
  "url": "sec-branchbound.html#activity-meat1",
  "type": "Activity",
  "number": "8.1.3",
  "title": "",
  "body": "  The branch and bound method is a way to systematically add bounds to a linear programming problem to ensure the solution is integral.  We examine the integer programming problem from , and it's relaxation.    Consider the number of sandwiches sold, the current optimal . Which two of the following potential additional constraints would force the value of to be an integer, while remaining as close to the optimal solution of the relaxation as possible.                                              Let us consider the additional constraint . Solve the resulting general linear programming problem:        A Tree Diagram describing additional constraints.       What additional constraints on would ensure that would be integral while changing as little as possible?    Consider the additional constraint . Solve this maximization problem. Why do we no longer need to adjust ? Are we gaurunteed that this solution is optimal?    A Tree Diagram describing additional constraints.       We consider the constraint instead. Solve this maximization problem. Even though the solution is not integral, why do we no longer need to pursue the case where ?    A Tree Diagram describing additional constraints.       We return to the other possible initial constraint for , . Solve this maximization problem. What are the possible constraints we could now add for ?    A Tree Diagram describing additional constraints.       We consider now the constraint . Solve this maximazation problem. How does this solution compare to the previous integral solution we found?    Instead we now consider the constraint . Solve this maximization problem. Why do we no longer need to consider the case where ?    How do we know we now have arrived at the optimal solution?    A Tree Diagram describing additional constraints.      "
},
{
  "id": "def-branchbound",
  "level": "2",
  "url": "sec-branchbound.html#def-branchbound",
  "type": "Definition",
  "number": "8.1.2",
  "title": "",
  "body": "  The branch and bound algorithm for solving an integer programming maximization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer programming problem.    Solve the relaxation of the linear programming problem. If the solution is integral STOP.    For some in the optimal solution found in the previous step, define two sub problems, one with additional constraint and     Pick one of the subproblems and solve the linear relaxation with the additional constraint.    If the solution is integral, RETURN to 4.    If the solution is less than any integral solution found, RETURN to 4.    If the problem is infeasible, RETURN to 4.    Apply 3-7 to the new problem.    If all subproblems are explored, RETURN to 4 for the parent problem.    Once the search tree has been exhausted, identify the optimal integral solution.     "
},
{
  "id": "sec-branchbound-7",
  "level": "2",
  "url": "sec-branchbound.html#sec-branchbound-7",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  The complete search tree for is as follows   A Tree Diagram describing additional constraints.    We start at Node 0, and identify the two subproblems. We exlore the subproblem where in Node 1, and again identify two subproblems. We stop and return at Node 2 because the solution was integral. We stop and return from Node 3, even though the solution is not integral, because the optimal solution for that subproblem was already less than the solution found in Node 1, and any further exploration would lead to a lower value still.  We then return to the starting node and to the other initial subproblem in Node 4, were . When we split into the the two subproblems, gives an integral solution in Node 5, and the constraint gives an infeasible problem.  Thus, we return, and of the two integral solutions found, has the highest value.   "
},
{
  "id": "sec-branchbound-8",
  "level": "2",
  "url": "sec-branchbound.html#sec-branchbound-8",
  "type": "Activity",
  "number": "8.1.4",
  "title": "",
  "body": "  As the demand for meat pies skyrockets, Agnesi is now able to acquire 40 oz of floor a day, but now uses 10 oz of floor per meat pie to thicken the gravy. She is able to sell these for 40 gp each. Use the branch and bound algorithm to found her new optimal production level.       "
},
{
  "id": "sec-cuttingplane",
  "level": "1",
  "url": "sec-cuttingplane.html",
  "type": "Section",
  "number": "8.2",
  "title": "CuttingPlane Method",
  "body": " CuttingPlane Method    In this exploration, we motivate the math behind the cutting plane method.  Let be a feasible solution of the relaxation of a canonical integer programming maximization problem, where the are basic (slack) variables and the are non-basic variables.  We consider the constraint                                                                                                     Explain why the above equality is equivalent to     Show that for any feasible integeral solution of the left hand side off the equality in (2) is an integer.    Show that the right hand side of the equation in (2) is strictly less than 1 for any feasible solution.    For any integral solution, what is a non-negative integer upper bound for ?    Show that for any feasible integral solution to the relaxation of the integer programming problem.  We call the hyperplane a cutting-plane .    Show that if is non-integral, then by adding this constraint, the solution is no longer feasible.       We now apply this idea to an integer program.  Consider the integer programming problem:     Solve the relaxation of this integer program, and verify that this solution is not integral.                                                                     Take the second row and follow the procedure in to generate a new constraint :                                                                                     Using the fact that , describe this cutting plane in terms of .    Pivot of the entry and verify that the resulting basic solution is optimal and non-integral.                                                                                     There is only one valid choice of row to generate a new constraint. Follow the procedure in to generate a new constraint                                                                                                      Using the fact that , express this new cutting plane in terms of .    Pivot on the entry and verify that the resulting basic solution is optimal and non-integral.                                                                                                     Use either the or row to generate a new constraint .                                                                                                                     Using the fact that , express this new cutting plane in terms of .    Pivot on the entry and verify that the resulting basic solution is optimal and integral!                                                                                                                     Enter the coefficients for the objective function and the three cutting planes in order that you found them, and drag the objective plane onto the optimal solution to the integer program.      Gomory Cutting-Plane Algorithm   The Gomory cutting-plane algorithm for an optimization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer programming problem.    Solve the relaxation of the integer program. If all the resulting are integral STOP: you have found an optimal integral solution.    Select a that is non integral and for that row, construct the additional bound: .    GOTO 2.      "
},
{
  "id": "exploration-cut",
  "level": "2",
  "url": "sec-cuttingplane.html#exploration-cut",
  "type": "Exploration",
  "number": "8.2.1",
  "title": "",
  "body": "  In this exploration, we motivate the math behind the cutting plane method.  Let be a feasible solution of the relaxation of a canonical integer programming maximization problem, where the are basic (slack) variables and the are non-basic variables.  We consider the constraint                                                                                                     Explain why the above equality is equivalent to     Show that for any feasible integeral solution of the left hand side off the equality in (2) is an integer.    Show that the right hand side of the equation in (2) is strictly less than 1 for any feasible solution.    For any integral solution, what is a non-negative integer upper bound for ?    Show that for any feasible integral solution to the relaxation of the integer programming problem.  We call the hyperplane a cutting-plane .    Show that if is non-integral, then by adding this constraint, the solution is no longer feasible.    "
},
{
  "id": "sec-cuttingplane-3",
  "level": "2",
  "url": "sec-cuttingplane.html#sec-cuttingplane-3",
  "type": "Activity",
  "number": "8.2.2",
  "title": "",
  "body": "  We now apply this idea to an integer program.  Consider the integer programming problem:     Solve the relaxation of this integer program, and verify that this solution is not integral.                                                                     Take the second row and follow the procedure in to generate a new constraint :                                                                                     Using the fact that , describe this cutting plane in terms of .    Pivot of the entry and verify that the resulting basic solution is optimal and non-integral.                                                                                     There is only one valid choice of row to generate a new constraint. Follow the procedure in to generate a new constraint                                                                                                      Using the fact that , express this new cutting plane in terms of .    Pivot on the entry and verify that the resulting basic solution is optimal and non-integral.                                                                                                     Use either the or row to generate a new constraint .                                                                                                                     Using the fact that , express this new cutting plane in terms of .    Pivot on the entry and verify that the resulting basic solution is optimal and integral!                                                                                                                     Enter the coefficients for the objective function and the three cutting planes in order that you found them, and drag the objective plane onto the optimal solution to the integer program.    "
},
{
  "id": "def-gomoryplane",
  "level": "2",
  "url": "sec-cuttingplane.html#def-gomoryplane",
  "type": "Definition",
  "number": "8.2.1",
  "title": "Gomory Cutting-Plane Algorithm.",
  "body": " Gomory Cutting-Plane Algorithm   The Gomory cutting-plane algorithm for an optimization problem is as follows:    INITIALIZE: Begin with a canonical maximization integer programming problem.    Solve the relaxation of the integer program. If all the resulting are integral STOP: you have found an optimal integral solution.    Select a that is non integral and for that row, construct the additional bound: .    GOTO 2.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
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
