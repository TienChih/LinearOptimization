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
  "id": "sec-initial",
  "level": "1",
  "url": "sec-initial.html",
  "type": "Section",
  "number": "1.2",
  "title": "Initial Examples",
  "body": " Initial Examples  Here we begin with some initial examples motivating the sort of problems we will study.    A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor two hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.    Write two inequalities in terms of that represent the constraints on the time of the sculptor.    Write two inequalities in terms of that represent the constraints on the time of the painter.    Treating as and as , sketch the region on the cartesian plane satisfying all the above inequalities.    Pick some points within this feasible region, what do they represent in terms of vases and figurines? How much revenue is generated? What causes the revenue to increase or decrease?       Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?    If there was a surge in demand for vases, and they started selling for $1000, how would that change your approach and the solution?      Suppose Carlos planning a meal is shopping for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti with sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.     Let denote pounds of bell pepper, denote pounds of chicken and denote cups of spaghetti with sauce. Find three inequalities in terms of the for how much of each food Carlos should eat to meet his minimum dietary requirements.    How might we solve this problem? How is it different from ?    This seems like a wildly oversimplistic dietary problem, because it is. How might we complicate it for more realism?     The Canonical Maximazation Linear Programming Problem is the problem: Where   The Canonical Minimization Linear Programming Problem is the problem: Where        above are called objective functions .      Any point satisfying either of the above set of inequalities are called feasible solutions .      Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .     Given the canonical minimization problem: How might we convert this to a canonical maximization problem?   How might we in general convert a minimization problem to a maximization problem?    "
},
{
  "id": "activity-exampleart",
  "level": "2",
  "url": "sec-initial.html#activity-exampleart",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor two hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.    Write two inequalities in terms of that represent the constraints on the time of the sculptor.    Write two inequalities in terms of that represent the constraints on the time of the painter.    Treating as and as , sketch the region on the cartesian plane satisfying all the above inequalities.    Pick some points within this feasible region, what do they represent in terms of vases and figurines? How much revenue is generated? What causes the revenue to increase or decrease?       Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?    If there was a surge in demand for vases, and they started selling for $1000, how would that change your approach and the solution?   "
},
{
  "id": "activity-examplediet",
  "level": "2",
  "url": "sec-initial.html#activity-examplediet",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  Suppose Carlos planning a meal is shopping for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti with sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.   "
},
{
  "id": "def-canonicalproblems",
  "level": "2",
  "url": "sec-initial.html#def-canonicalproblems",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  The Canonical Maximazation Linear Programming Problem is the problem: Where   The Canonical Minimization Linear Programming Problem is the problem: Where    "
},
{
  "id": "def-objectivefunction",
  "level": "2",
  "url": "sec-initial.html#def-objectivefunction",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "   above are called objective functions .   "
},
{
  "id": "def-feasiblesolution",
  "level": "2",
  "url": "sec-initial.html#def-feasiblesolution",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  Any point satisfying either of the above set of inequalities are called feasible solutions .   "
},
{
  "id": "def-optimialsolution",
  "level": "2",
  "url": "sec-initial.html#def-optimialsolution",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .   "
},
{
  "id": "activity-change",
  "level": "2",
  "url": "sec-initial.html#activity-change",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": " Given the canonical minimization problem: How might we convert this to a canonical maximization problem?   How might we in general convert a minimization problem to a maximization problem?   "
},
{
  "id": "sec-polyhedralconvex",
  "level": "1",
  "url": "sec-polyhedralconvex.html",
  "type": "Section",
  "number": "1.3",
  "title": "Polyhedral Convextiy",
  "body": " Polyhedral Convextiy  In this section, we establish the geometric notions which underlie our work.    In , describe geometrically what the following represent.                                 Let . Let for some      What is if ?    What is if ?    What is if ?    What is if ?    Describe the set of points .     Let Describe the set of points .       Given , we call the set the line segment between and .      Let , we say that is convex if given any , also contains the line segment between .      For each of the following subsets of , sketch the region, decide if it is convex or not.     .     .     (in polar coordinates).     (in polar coordinates).     .     .       Let be defined by for some (ie is a half-space of ).     Let . Explain why for any .    Show that for any , that .    Let , that is, there are such that and . Show that .    Show that     Conclude that is convex.       Let be convex sets.     Show that is convex. Hint: Let . Why is the line segment between them contained in ? ?    Sketch an induction argument to show that if is convex, is convex.    Find convex sets so that is not convex.     Prove why the feasible region of a canonical linear programming problem is convex.     A convex set that is equal to a finite intersection of half-spaces (defined by either strict or non-strict inequalities) is polyhedral convex .      The feasible region for is:         The feasible region for is:         Given in we define the norm of to be       Given in we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?      Describe for .      A set is bounded if there is a such that .      Which of the activities , are bounded?      Let be the feasible region of of a canonical maximization linear programming problem, let be the objective function.    Consider the point , which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the the dot product)    Let such that there is a so that . Explain why cannot be a maximizer of .    On the other hand, suppose  IS a maximizer of , what must be true about ?    Consider the canonical maximization linear programming problem:  Maximzie subject to:   How do the statements you've made above apply here? Where IS maximized? Is it consistent with what you said before?       Let be a convex set. We say is an extreme point of if there are no so that .  In other words, does not lie on any non-trivial line segment contained in .      For each of the following convex sets, find it's extreme points (if any).    The feasible region of the problem in .     .     .      If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .      If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .        Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?    Let be optimal solutions of a canonical linear programming problem, giving optimal solution . Show that for any , and that .    Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?      So, we see that the hunt for optimal solutions boils down to a hunt for extreme points.    In How many lines are needed to intersect to obtain a point?    In How many planes are needed to intersect to obtain a point?    In How many dimensional hyperplanes are needed to intersect to obtain a point?                          Suppose a canonical linear programming problem in is bounded by the usual hyperplanes corresponding to as well as additional hyperplanes. How many potential points of intersection could there be?                               So for a canonical linear programming problem in bounded by an additional 15 hyperplanes, how many potential extreme points are there?    "
},
{
  "id": "activity-planes",
  "level": "2",
  "url": "sec-polyhedralconvex.html#activity-planes",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "  In , describe geometrically what the following represent.                             "
},
{
  "id": "activity-segment",
  "level": "2",
  "url": "sec-polyhedralconvex.html#activity-segment",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "   Let . Let for some      What is if ?    What is if ?    What is if ?    What is if ?    Describe the set of points .     Let Describe the set of points .    "
},
{
  "id": "def-segment",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-segment",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Given , we call the set the line segment between and .   "
},
{
  "id": "def-convex",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-convex",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  Let , we say that is convex if given any , also contains the line segment between .   "
},
{
  "id": "sec-polyhedralconvex-7",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-7",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  For each of the following subsets of , sketch the region, decide if it is convex or not.     .     .     (in polar coordinates).     (in polar coordinates).     .     .   "
},
{
  "id": "sec-polyhedralconvex-8",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-8",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "   Let be defined by for some (ie is a half-space of ).     Let . Explain why for any .    Show that for any , that .    Let , that is, there are such that and . Show that .    Show that     Conclude that is convex.   "
},
{
  "id": "sec-polyhedralconvex-9",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-9",
  "type": "Activity",
  "number": "1.3.5",
  "title": "",
  "body": "   Let be convex sets.     Show that is convex. Hint: Let . Why is the line segment between them contained in ? ?    Sketch an induction argument to show that if is convex, is convex.    Find convex sets so that is not convex.   "
},
{
  "id": "sec-polyhedralconvex-10",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-10",
  "type": "Activity",
  "number": "1.3.6",
  "title": "",
  "body": " Prove why the feasible region of a canonical linear programming problem is convex.  "
},
{
  "id": "def-polyhedralconvex",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-polyhedralconvex",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  A convex set that is equal to a finite intersection of half-spaces (defined by either strict or non-strict inequalities) is polyhedral convex .   "
},
{
  "id": "sec-polyhedralconvex-12",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-12",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  The feasible region for is:      "
},
{
  "id": "sec-polyhedralconvex-13",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-13",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  The feasible region for is:      "
},
{
  "id": "def-norm",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-norm",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  Given in we define the norm of to be    "
},
{
  "id": "def-ball",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-ball",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  Given in we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?   "
},
{
  "id": "sec-polyhedralconvex-16",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-16",
  "type": "Activity",
  "number": "1.3.7",
  "title": "",
  "body": "  Describe for .   "
},
{
  "id": "def-bounded",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-bounded",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  A set is bounded if there is a such that .   "
},
{
  "id": "sec-polyhedralconvex-18",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-18",
  "type": "Activity",
  "number": "1.3.8",
  "title": "",
  "body": "  Which of the activities , are bounded?   "
},
{
  "id": "activity-ball",
  "level": "2",
  "url": "sec-polyhedralconvex.html#activity-ball",
  "type": "Activity",
  "number": "1.3.9",
  "title": "",
  "body": "  Let be the feasible region of of a canonical maximization linear programming problem, let be the objective function.    Consider the point , which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the the dot product)    Let such that there is a so that . Explain why cannot be a maximizer of .    On the other hand, suppose  IS a maximizer of , what must be true about ?    Consider the canonical maximization linear programming problem:  Maximzie subject to:   How do the statements you've made above apply here? Where IS maximized? Is it consistent with what you said before?    "
},
{
  "id": "def-extremepoint",
  "level": "2",
  "url": "sec-polyhedralconvex.html#def-extremepoint",
  "type": "Definition",
  "number": "1.3.9",
  "title": "",
  "body": "  Let be a convex set. We say is an extreme point of if there are no so that .  In other words, does not lie on any non-trivial line segment contained in .   "
},
{
  "id": "sec-polyhedralconvex-21",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-21",
  "type": "Activity",
  "number": "1.3.10",
  "title": "",
  "body": "  For each of the following convex sets, find it's extreme points (if any).    The feasible region of the problem in .     .     .   "
},
{
  "id": "thm-boundedextreme",
  "level": "2",
  "url": "sec-polyhedralconvex.html#thm-boundedextreme",
  "type": "Theorem",
  "number": "1.3.10",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .   "
},
{
  "id": "thm-unboundedextreme",
  "level": "2",
  "url": "sec-polyhedralconvex.html#thm-unboundedextreme",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .     "
},
{
  "id": "sec-polyhedralconvex-24",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-24",
  "type": "Activity",
  "number": "1.3.11",
  "title": "",
  "body": "  Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?    Let be optimal solutions of a canonical linear programming problem, giving optimal solution . Show that for any , and that .    Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?   "
},
{
  "id": "sec-polyhedralconvex-25",
  "level": "2",
  "url": "sec-polyhedralconvex.html#sec-polyhedralconvex-25",
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
  "body": " Problems for     Draw and shade appropriate regions in as described below, where .   A bounded polyhedral convex subset.   An unbounded polyhedral convex subset.   A bounded nonconvex subset   An unbounded nonconvex subset.   A convex subset that is not a polyhedral convex subset.   A convex subset having no extreme points.   A polyhedral convex subset having no extreme points.   A bounded polyhedral convex subset having exactly one extreme point.   An unbounded polyhedral convex subset having exactly one extreme point.   An bounded convex subset having infinitely many extreme points.   An unbounded convex subset having infinitely many extreme points.    Convert each of the linear optimization problems below to canonical form as in .                   A drive-in sells homemade hot dogs and hamburgers. The hot dogs take cup of flour and oz of beef to make. A hamburger bun takes cups of flour and oz of beef. Suppose the drive-in has cups of flour and oz of beef on hand. If hot dogs sell for $4 and hamburgers for $6, how much of each should they make to maximize revenue?   A rancher has a herd to feed who requires 54, 48, and 72 units of the nutritional elements A, B, and C, respectively, per day. Feed 1 costs 10 cents a pound and contains 8, 4 and 3 units of elements A, B, C respectively. Feed 2 costs 8 cents a pound and contains 2, 4 and 6 units of elements A, B, C respectively. How much of each feed should the rancher purchase to cover the herds nutritional needs while minimizing cost?   A drug company sells three different formulations of vitamin complex and mineral complex. The first formulation consists entirely of vitamin complex and sells for $1 per unit. The second formulation consists of 3\/4 of a unit of vitamin complex and 1\/4 of a unit of mineral complex and sells for $2 per unit. The third formulation consists of 1\/2 of a unit of each of the complexes and sells for $3 per unit. If the company has 100 units of vitamin complex and 75 units of mineral complex available, how many units of each formulation should the company produce so as to maximize sales revenue?        For each of the following, sketch the feasible region , and find the optimal solution by identifying the extreme points of and evaluating.            (A).    (B).    (D).    (E).    (F).    (G).    (H).   Prove that (H) has infinitely many optimal solutions, two of which lie on extreme points. Identify these points on the plot of the feasible region done in .  Prove that if are distinct optimal solutions of a canonical linear optimization problem, then all points on the line segment between are also optimal solutions of the problem. Conclude that a canonical linear optimization problem can have 0, 1 or infinitely many optimal solutions and no other possibilities.  Consider the canonical linear optimization problem  Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal.  Consider the canonical linear optimization problem  Find the potential intersections of bounding hyperplanes, determine which are feasible, and which of those are optimal. (It is recommended that you use some technological tools to solve for the resulting linear systems.)   Express as a polynomial in terms of . How does this relate to , ?  Show that is unbounded. (Hint: sketch the feasible region and consider feasible points on the line .)  Show that is infeasible.   For each of the following, determine whether or not the statement is TRUE or FALSE. If TRUE, provide a proof, if FALSE, provide a counterexample.   If a canonical feasible linear optimization problem is unbounded, then it's feasible region is unbounded.   If a canonical feasible linear optimization problem has unbounded feasible region, then it is unbounded.    "
},
{
  "id": "exercises-geometric-1",
  "level": "2",
  "url": "sec-exercisesgeometric.html#exercises-geometric-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": " Draw and shade appropriate regions in as described below, where .   A bounded polyhedral convex subset.   An unbounded polyhedral convex subset.   A bounded nonconvex subset   An unbounded nonconvex subset.   A convex subset that is not a polyhedral convex subset.   A convex subset having no extreme points.   A polyhedral convex subset having no extreme points.   A bounded polyhedral convex subset having exactly one extreme point.   An unbounded polyhedral convex subset having exactly one extreme point.   An bounded convex subset having infinitely many extreme points.   An unbounded convex subset having infinitely many extreme points.  "
},
{
  "id": "ex-convertcanon",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-convertcanon",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": " Convert each of the linear optimization problems below to canonical form as in .                   A drive-in sells homemade hot dogs and hamburgers. The hot dogs take cup of flour and oz of beef to make. A hamburger bun takes cups of flour and oz of beef. Suppose the drive-in has cups of flour and oz of beef on hand. If hot dogs sell for $4 and hamburgers for $6, how much of each should they make to maximize revenue?   A rancher has a herd to feed who requires 54, 48, and 72 units of the nutritional elements A, B, and C, respectively, per day. Feed 1 costs 10 cents a pound and contains 8, 4 and 3 units of elements A, B, C respectively. Feed 2 costs 8 cents a pound and contains 2, 4 and 6 units of elements A, B, C respectively. How much of each feed should the rancher purchase to cover the herds nutritional needs while minimizing cost?   A drug company sells three different formulations of vitamin complex and mineral complex. The first formulation consists entirely of vitamin complex and sells for $1 per unit. The second formulation consists of 3\/4 of a unit of vitamin complex and 1\/4 of a unit of mineral complex and sells for $2 per unit. The third formulation consists of 1\/2 of a unit of each of the complexes and sells for $3 per unit. If the company has 100 units of vitamin complex and 75 units of mineral complex available, how many units of each formulation should the company produce so as to maximize sales revenue?      "
},
{
  "id": "ex-geosolve",
  "level": "2",
  "url": "sec-exercisesgeometric.html#ex-geosolve",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": " For each of the following, sketch the feasible region , and find the optimal solution by identifying the extreme points of and evaluating.            (A).    (B).    (D).    (E).    (F).    (G).    (H).  "
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
  "body": " For each of the following, determine whether or not the statement is TRUE or FALSE. If TRUE, provide a proof, if FALSE, provide a counterexample.   If a canonical feasible linear optimization problem is unbounded, then it's feasible region is unbounded.   If a canonical feasible linear optimization problem has unbounded feasible region, then it is unbounded.  "
},
{
  "id": "sec-pivot",
  "level": "1",
  "url": "sec-pivot.html",
  "type": "Section",
  "number": "2.1",
  "title": "Canonical Programs and the Simplex Pivot",
  "body": " Canonical Programs and the Simplex Pivot  We begin the process of establishing an algorithm.    Consider the canonical maximization problem:     Note that we may rewrite this as a system of equalities by introducing the slack variables  .       What must be true about the slack variables ?                     What is the largest value could obtain?                    is unbounded.        Similarly the canonical minimization problem:   Where   May be rewritten as:       As usual, we focus on maximization for now.    We can rewrite as Which may be recorded by the Tucker Tableau :                                                                                                                                        The variables at the top are called the decision variables or independent variables , the variables on the side are the slack variables , basis variables or basic variables .  The basic solution recorded by a Tucker Tableau is the solution where each decision variable has the value zero.      Note that this tableau records a basic solution . We will further explore what this means in a bit. But for now, if , then:       Consider the region in bound by and . Let and     If , what points in satisfy ?    If , what points in satisfy ?    What points in satisfy both ?    What points in satisfy both ?         Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.    Set up the canonical maximization problem for the information given above and record it in the following tableau:                                                                                       Recall that this tableau has a basic solution where . If we slightly increase , do we increase ?    Let's increase . Take the row corresponding to and solve for in terms of .   For each equality corresponding to the rows replace with the value you found ealier and rewrite the left hand sides.    Record this new system in the following tableau:                                                                                       Recall that this new tableau has a basic solution where , what point is this?    If we increase from 0, do we increase ? What about increasing ?    Let's increase . Take the row corrresponding to and repeat Tasks (c) and (d) to obtain a tableau of the form:                                                                                       What point in represents the basic solution for this new tableau?    If I increase from 0, do I increase ? What about ?    Consider the plot of the feasible region for this problem. What exactly, geometrically, did we end up doing here?         Based on , what is a criteria to determine if a feasible tableau has a basic optimal solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .        Consider the tableau:                                                                     along with the corresponding system of equations.    Solve for in terms of .    In each of the other two equalities, replace with the expression we found above and simplify.    Record this new system in the following tableau:                                                                         The following is the algorithm for a pivot transformation :    Pick a non-zero entry in the tableau but not in the objective row or constraint column.    Transpose the decision and slack variables corresponding to the position of .    Replace by .    Replace each entry in the same row as (but not ) with .    Replace each entry in the same column as (but not ) with .    Each entry not in the same row or column as but in the same column as (which is in the same row as ) and in the same row as (which is in the same column as ) is replaced with .         Consider the problem: maximize subject to: which we may encode as:                                                                                                        Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Pivot on the entry with (Keep track of the decision and slack variables.)                                                                                                       Look at your decision variables. Which two lines are we currently sitting on?    How do we know we now have an optimal solution based only on the tableau?    Confirm your solution geometrically:      A Curious Situation    Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, ie: Of course, the values shouldn't be negative, so .  But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:                                                                                                                                                                            Pivot on the entry with the :                                                         -1                             Compare this solution and tableau to the final solution in . What do you notice?           "
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
  "id": "activity-insurance",
  "level": "2",
  "url": "sec-pivot.html#activity-insurance",
  "type": "Activity",
  "number": "2.1.7",
  "title": "",
  "body": "  Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, ie: Of course, the values shouldn't be negative, so .  But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:                                                                                                                                                                            Pivot on the entry with the :                                                         -1                             Compare this solution and tableau to the final solution in . What do you notice?       "
},
{
  "id": "sec-simplexmax",
  "level": "1",
  "url": "sec-simplexmax.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Simplex Algorithm for Canonical Maximization",
  "body": " The Simplex Algorithm for Canonical Maximization   Basic Feasible Maximization   Consider the following tableau:                                                                                                                 Note that each for this tableau. Write out the corresponding system of canonical inequalities (this should be easy, almost everything is zero). Are they all satisfied?   Which of the following is a sufficient condition for a Tucker Tableau to correspond to a feasible solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .        Consider the following tableau:                                                                                                                   Note that this tableau records a basic solution where .    Why is the basic solution feasible?    Which of the following could we increase from zero to increase our objective function value?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    What is the largest value we could increase while satisfying our 3 inequalities? What about ?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .      Consider the following tableau:                                                                     Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .        Consider the canonical maximization problem and basic solution encoded by the following tableau:                                                                                       Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?    Consider a sketch of our feasible region:  The feasible region for a canonical maximization problem.     We could choose to pivot ( in the sketch) with either . Only one of these would result in a feasible solution. Looking graphically, which is it?    What's the connection between the two above tasks?    For a canonical linear program and basic solution encoded by a Tucker tableau:                                                                                                                                        If we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .      Based on the observations above, what should be the pivot entry for the following tableau?                                                                                         For each of the following tableaus, determine what if any of the following are true:   The tableau corresponds to an infeasible solution.    The tableau records a basic optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                With all this, we finally may define our Simplex Algorithm for Maximum Basic Feasible Tableaus .    The Simplex Algorithm for Maximum Basic Feasible Tableaus   Ensure that each , that is that the solution is feasible.  IF every : STOP the current solution is optimal.  PICK a column such that .  IF each : STOP the objective function is unbounded.  PICK a row that minimizes .  PIVOT on .  GOTO 1.       Recall the canonical tableau                                                                                                                                        Suppose that after pivoting on according to we had that . Show that        Apply to the following tableaus.                                                                                                                                                                                                                                                                   Basic Infeasible Maximization    Each of the following tableaus records the origin as a basic solution, which is not feasible. Determine geometrically which of these tableau record a problem which has an optimal solution. Then answer the follow-up questions.                                                                                                                                                                              For the one problem where the origin is not feasible, but the problem has an optimal solution, what pivot would result in a feasible solution?    If , what should be true about so that is positive afterwards?    Consider the inequality . Is there a solution which satisfies this where each ?    Consider the inequality . Is there a solution which satisfies this where each ?      We now want to concoct a scheme to turn all the non-negative, if possible.  Consider the tableau:                                                                                                                       Suppose that . We want to turn positive while making sure stay positive.    Suppose each , what can we say about the associated problem?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Who should we pivot on?    Any .    All of the such that is minimized.    All of the such that if then and is minimized.      Note that we have no idea if is positive or negative before we started, much less after. Why don't we care?    With this, we may define our algorithm for potentiall non-feasible tableau    The Simplex Algorithm for Maximum Tableaus   IF each , GOTO 8.  PICK the largest such that .  IF : STOP the problem in infeasible.  PICK a column such that .  PICK a row so that .  PIVOT on .  GOTO 1.  APPLY .       Apply to the following tableau:                                                                                                                                                                The Simplex Algorithm for Canonical Minimization    Recall that the canonical minimization problem:   Where .  This problem may be recorded in the following tableau:                                                                                                                                           The negative transpose of this tableau is:                                                                                                                                            Show that this negative transpose of a canonical minimization tableau encodes a problem that has the same feasible region and optimal solution as the original minimization problem.    This allows us to define a minimization algorithm.    The Simplex Algorithm for Minimization Tableaus   TAKE the Negative Transpose.  APPLY .       Apply to the following minimization tableau:                                                                                    "
},
{
  "id": "activity-tableaufeasible",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaufeasible",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": " Consider the following tableau:                                                                                                                 Note that each for this tableau. Write out the corresponding system of canonical inequalities (this should be easy, almost everything is zero). Are they all satisfied?   Which of the following is a sufficient condition for a Tucker Tableau to correspond to a feasible solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .     "
},
{
  "id": "activity-tableaubounded",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaubounded",
  "type": "Activity",
  "number": "2.2.2",
  "title": "",
  "body": "  Consider the following tableau:                                                                                                                   Note that this tableau records a basic solution where .    Why is the basic solution feasible?    Which of the following could we increase from zero to increase our objective function value?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    What is the largest value we could increase while satisfying our 3 inequalities? What about ?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .      Consider the following tableau:                                                                     Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?    Find a sufficient condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .     "
},
{
  "id": "subsec-basicfeasible-4",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-4",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": "  Consider the canonical maximization problem and basic solution encoded by the following tableau:                                                                                       Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?    Consider a sketch of our feasible region:  The feasible region for a canonical maximization problem.     We could choose to pivot ( in the sketch) with either . Only one of these would result in a feasible solution. Looking graphically, which is it?    What's the connection between the two above tasks?    For a canonical linear program and basic solution encoded by a Tucker tableau:                                                                                                                                        If we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .      Based on the observations above, what should be the pivot entry for the following tableau?                                                                                      "
},
{
  "id": "subsec-basicfeasible-5",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-5",
  "type": "Activity",
  "number": "2.2.4",
  "title": "",
  "body": "  For each of the following tableaus, determine what if any of the following are true:   The tableau corresponds to an infeasible solution.    The tableau records a basic optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
},
{
  "id": "def-simplexcanonmaxbf",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexcanonmaxbf",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  The Simplex Algorithm for Maximum Basic Feasible Tableaus   Ensure that each , that is that the solution is feasible.  IF every : STOP the current solution is optimal.  PICK a column such that .  IF each : STOP the objective function is unbounded.  PICK a row that minimizes .  PIVOT on .  GOTO 1.    "
},
{
  "id": "subsec-basicfeasible-8",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-8",
  "type": "Activity",
  "number": "2.2.5",
  "title": "",
  "body": "  Recall the canonical tableau                                                                                                                                        Suppose that after pivoting on according to we had that . Show that    "
},
{
  "id": "subsec-basicfeasible-9",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-basicfeasible-9",
  "type": "Activity",
  "number": "2.2.6",
  "title": "",
  "body": "   Apply to the following tableaus.                                                                                                                                                                                                                                                                "
},
{
  "id": "subsec-infeasiblemaximization-2",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-infeasiblemaximization-2",
  "type": "Activity",
  "number": "2.2.7",
  "title": "",
  "body": "  Each of the following tableaus records the origin as a basic solution, which is not feasible. Determine geometrically which of these tableau record a problem which has an optimal solution. Then answer the follow-up questions.                                                                                                                                                                              For the one problem where the origin is not feasible, but the problem has an optimal solution, what pivot would result in a feasible solution?    If , what should be true about so that is positive afterwards?    Consider the inequality . Is there a solution which satisfies this where each ?    Consider the inequality . Is there a solution which satisfies this where each ?   "
},
{
  "id": "subsec-infeasiblemaximization-3",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-infeasiblemaximization-3",
  "type": "Activity",
  "number": "2.2.8",
  "title": "",
  "body": "  We now want to concoct a scheme to turn all the non-negative, if possible.  Consider the tableau:                                                                                                                       Suppose that . We want to turn positive while making sure stay positive.    Suppose each , what can we say about the associated problem?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Let's then say . If we pivot on do increase or decrease? Are any now guaranteed to be positive or negative?    Who should we pivot on?    Any .    All of the such that is minimized.    All of the such that if then and is minimized.      Note that we have no idea if is positive or negative before we started, much less after. Why don't we care?   "
},
{
  "id": "def-simplexmax",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexmax",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  The Simplex Algorithm for Maximum Tableaus   IF each , GOTO 8.  PICK the largest such that .  IF : STOP the problem in infeasible.  PICK a column such that .  PICK a row so that .  PIVOT on .  GOTO 1.  APPLY .    "
},
{
  "id": "subsec-infeasiblemaximization-6",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-infeasiblemaximization-6",
  "type": "Activity",
  "number": "2.2.9",
  "title": "",
  "body": "  Apply to the following tableau:                                                                                                                                                             "
},
{
  "id": "def-negativetranspose",
  "level": "2",
  "url": "sec-simplexmax.html#def-negativetranspose",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "  Recall that the canonical minimization problem:   Where .  This problem may be recorded in the following tableau:                                                                                                                                           The negative transpose of this tableau is:                                                                                                                                         "
},
{
  "id": "subsec-simplexmin-3",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-simplexmin-3",
  "type": "Activity",
  "number": "2.2.10",
  "title": "",
  "body": "  Show that this negative transpose of a canonical minimization tableau encodes a problem that has the same feasible region and optimal solution as the original minimization problem.   "
},
{
  "id": "def-simplexmin",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexmin",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  The Simplex Algorithm for Minimization Tableaus   TAKE the Negative Transpose.  APPLY .    "
},
{
  "id": "subsec-simplexmin-6",
  "level": "2",
  "url": "sec-simplexmax.html#subsec-simplexmin-6",
  "type": "Activity",
  "number": "2.2.11",
  "title": "",
  "body": "  Apply to the following minimization tableau:                                                                                  "
},
{
  "id": "sec-cycling",
  "level": "1",
  "url": "sec-cycling.html",
  "type": "Section",
  "number": "2.3",
  "title": "Cycling",
  "body": " Cycling    Consider the following canonical maximization tableau:                                                                                               Perform the following sequence of pivots, ensure each time that it is a valid pivot according to , and keep track of the variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Compare your final tableau to the initial tableau. Are there any similarities?      Consider canonical linear programming problem: Maximzie , subject to     Consider a sequence of pivots swapping ,  , . In each of these cases, what is the basic solution recorded by the tableau?    The feasible region with multiple lines intersecting the origin.        If a series of pivots in accordance to allows one to return to a set of basic variables achieved earlier in the algorithm, we call this phenomena cycling .      If a pivot on a tableau gives a new tableau corresponding to the same basic solution, we call the pivot a degenerate pivot.    Cycling is bad, since potentially this allows the Simplex Algorithm to not terminate. Fortunately, there is a solution to this issue.   Bland's Anticycling Rules   List all variables, independent and dependent in the initial tableau. Then consider the following rules:    Whenever there is more than one possible choice for a pivot row according to : select the row corresponding to the variable closest to the front of the initial list.    Whenever there is more than one possible choice for a pivot column according to : select the column corresponding to the variable closest to the front of the initial list.    Then the Simplex Algorthm will not cycle.     For the sake of notation, we denote the initial tableau:                                                                                                                                     and order the variables in the associated way. Suppose we follow Bland's rules and still have cycling. That is, there is a sequence of pivots and bases (set of basic variables) . We call a variable  fickle if is in one, but not all of the bases. That is, it leaves a basis, and reenters it later during the cycle.  Note that in order for Cycling to occur, each pivot must be degenerate (ask yourself why?). So if is fickle, for each basic solution during the cycle.  Since the number of variables is finite, the set of fickle variables is also finite, and let denote the fickle variable with largest subscript. Suppose that (why must such a exist?). Denote the entering variable from with .                                                                                                                                                                                              Note that must also be fickle (why?) and so .  We call the dictionary for a basis the system of equations corresponding to that basis. So the dictionary for is which we can write as: Note that since the above pivot was valid, we must have that and since the pivot was degenerate, we have .  Now, because we have cycling, we must have that reenters the basis at some point                                                                                                                                                                                                  Note that for this pivot to be valid, we have that . If we let denote the dictionary before re-enters the basis, we have: So note that the solution space to the system of equations for both these dictionaries are the same. So we have a solution for (not neccessarily feasible ie non-negativity may fail) that must also be a solution to :   So we have where for . So via algebra:   The above equation holds true no matter what is. Thus: Note that , NOT is entering the basis. If is already in the basis, . Otherwise, , otherwise would have entered by Bland's Anticyling rules. We've also shown . Thus which is only possible if there is some such that   From this, we know that . So , but , so is fickle. Since is the largest index of a fickle variable, . Note that is not entering from , so . Thus .  But is fickle, so in . But then, we would have picked , not to leave.                                                                                                                     which is a contradiction.     If we follow then no basis is visited twice during the Simplex Algorithm. Note that is non-decreasing with each pivot. Must the Simplex Algorithm terminate? Why?    "
},
{
  "id": "activity-cyclingexample",
  "level": "2",
  "url": "sec-cycling.html#activity-cyclingexample",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "  Consider the following canonical maximization tableau:                                                                                               Perform the following sequence of pivots, ensure each time that it is a valid pivot according to , and keep track of the variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Compare your final tableau to the initial tableau. Are there any similarities?   "
},
{
  "id": "sec-cycling-3",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-3",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "  Consider canonical linear programming problem: Maximzie , subject to     Consider a sequence of pivots swapping ,  , . In each of these cases, what is the basic solution recorded by the tableau?    The feasible region with multiple lines intersecting the origin.     "
},
{
  "id": "def-Cycling",
  "level": "2",
  "url": "sec-cycling.html#def-Cycling",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  If a series of pivots in accordance to allows one to return to a set of basic variables achieved earlier in the algorithm, we call this phenomena cycling .   "
},
{
  "id": "def-degenerate",
  "level": "2",
  "url": "sec-cycling.html#def-degenerate",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "  If a pivot on a tableau gives a new tableau corresponding to the same basic solution, we call the pivot a degenerate pivot.   "
},
{
  "id": "thm-BlandAnticycling",
  "level": "2",
  "url": "sec-cycling.html#thm-BlandAnticycling",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Bland’s Anticycling Rules.",
  "body": " Bland's Anticycling Rules   List all variables, independent and dependent in the initial tableau. Then consider the following rules:    Whenever there is more than one possible choice for a pivot row according to : select the row corresponding to the variable closest to the front of the initial list.    Whenever there is more than one possible choice for a pivot column according to : select the column corresponding to the variable closest to the front of the initial list.    Then the Simplex Algorthm will not cycle.   "
},
{
  "id": "sec-cycling-8",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-8",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " For the sake of notation, we denote the initial tableau:                                                                                                                                     and order the variables in the associated way. Suppose we follow Bland's rules and still have cycling. That is, there is a sequence of pivots and bases (set of basic variables) . We call a variable  fickle if is in one, but not all of the bases. That is, it leaves a basis, and reenters it later during the cycle.  Note that in order for Cycling to occur, each pivot must be degenerate (ask yourself why?). So if is fickle, for each basic solution during the cycle.  Since the number of variables is finite, the set of fickle variables is also finite, and let denote the fickle variable with largest subscript. Suppose that (why must such a exist?). Denote the entering variable from with .                                                                                                                                                                                              Note that must also be fickle (why?) and so .  We call the dictionary for a basis the system of equations corresponding to that basis. So the dictionary for is which we can write as: Note that since the above pivot was valid, we must have that and since the pivot was degenerate, we have .  Now, because we have cycling, we must have that reenters the basis at some point                                                                                                                                                                                                  Note that for this pivot to be valid, we have that . If we let denote the dictionary before re-enters the basis, we have: So note that the solution space to the system of equations for both these dictionaries are the same. So we have a solution for (not neccessarily feasible ie non-negativity may fail) that must also be a solution to :   So we have where for . So via algebra:   The above equation holds true no matter what is. Thus: Note that , NOT is entering the basis. If is already in the basis, . Otherwise, , otherwise would have entered by Bland's Anticyling rules. We've also shown . Thus which is only possible if there is some such that   From this, we know that . So , but , so is fickle. Since is the largest index of a fickle variable, . Note that is not entering from , so . Thus .  But is fickle, so in . But then, we would have picked , not to leave.                                                                                                                     which is a contradiction.  "
},
{
  "id": "sec-cycling-9",
  "level": "2",
  "url": "sec-cycling.html#sec-cycling-9",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "  If we follow then no basis is visited twice during the Simplex Algorithm. Note that is non-decreasing with each pivot. Must the Simplex Algorithm terminate? Why?   "
},
{
  "id": "sec-simplexsage",
  "level": "1",
  "url": "sec-simplexsage.html",
  "type": "Section",
  "number": "2.4",
  "title": "Using Sage",
  "body": " Using Sage    Suppose we wanted to solve the following maximization problem by hand:                                                                                                                                                                                                                                                                                                                                                                                                                            How annoying would this be?    Very.    Extraordinarily.    Horrifically.    I have nothing to do for the next hour anyway. Hope I don't forget a minus sign!      Given that we have a developed an algorithm, guaranteed to terminate, using only arithmetic in it's steps, it seems reasonable to think this can be done via a computer.    Let's start simple, suppose we want to solve:                                                                                       We can enter the above problem into sage via:     We can plot the feasible region and objective level curves, since this is a 2d problem:     We could also encode this problem into a dictionary. We will understand that .    If we want to pivot from to we can write that as: Then we can update the dictionary: We should read this as:                                                                                       What pivot should we do next? Encode it below:     We can check at any point if we have an optimal solution.       So if we want to solve:                                                                                                                   We can encode this in:     We now encode the above problem in a dictionary.     We can see who can enter: If we say, pick to enter, see who can legitimately leave: Then select one to leave     From here, pick another legitimate pivot and perform it:     This still seems like a it would be annoying. Why don't we revisit the original problem and then just run the simplex algorithm:       Remember that cycling example ?    Encode the problem into sage:     Now let's run the simplex algorithm to see what the deal is:       We can now tackle the problem posed in .    Encode the problem into sage:     We can run the simplex algorithm:     We can also just say what the solution is:     "
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
  "body": "  Let's start simple, suppose we want to solve:                                                                                       We can enter the above problem into sage via:     We can plot the feasible region and objective level curves, since this is a 2d problem:     We could also encode this problem into a dictionary. We will understand that .    If we want to pivot from to we can write that as: Then we can update the dictionary: We should read this as:                                                                                       What pivot should we do next? Encode it below:     We can check at any point if we have an optimal solution.    "
},
{
  "id": "sec-simplexsage-5",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-5",
  "type": "Activity",
  "number": "2.4.3",
  "title": "",
  "body": "  So if we want to solve:                                                                                                                   We can encode this in:     We now encode the above problem in a dictionary.     We can see who can enter: If we say, pick to enter, see who can legitimately leave: Then select one to leave     From here, pick another legitimate pivot and perform it:     This still seems like a it would be annoying. Why don't we revisit the original problem and then just run the simplex algorithm:    "
},
{
  "id": "sec-simplexsage-6",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-6",
  "type": "Activity",
  "number": "2.4.4",
  "title": "",
  "body": "  Remember that cycling example ?    Encode the problem into sage:     Now let's run the simplex algorithm to see what the deal is:    "
},
{
  "id": "sec-simplexsage-7",
  "level": "2",
  "url": "sec-simplexsage.html#sec-simplexsage-7",
  "type": "Activity",
  "number": "2.4.5",
  "title": "",
  "body": "  We can now tackle the problem posed in .    Encode the problem into sage:     We can run the simplex algorithm:     We can also just say what the solution is:    "
},
{
  "id": "sec-exercisessimplex",
  "level": "1",
  "url": "sec-exercisessimplex.html",
  "type": "Section",
  "number": "2.5",
  "title": "Problems for Chapter 2",
  "body": " Problems for     Consider the tableau:                                                                    Write out the canonical maximization problem encoded by the tableau.   State the basic solution for this tableau.   Determine if the basic solution is feasible.   Pivot on the entry .   Write out the new canonical maximization problem in terms of the non-basic variables and the new basic solution in terms of .    Consider the tableau:                                                                              Write out the canonical minimization problem encoded by the tableau.   State the basic solution for this tableau.   Determine if the basic solution is feasible.   Pivot on the entry .   Write out the new canonical minimization problem in terms of the non-basic variables and the new basic solution in terms of .    For each of the following canonical maximization tableaus:    Write out the current basic solution.      Determine if the current basic solution is feasible.      Determine if the tableau detects that the feasible region is unbounded.      Determine if the tableau detects that the problem is infeasible. If so, ignore the rest of the prompts.      Determine if the tableau detects that the problem is unbounded. If so, ignore the rest of the prompts.     Determine if the current basic solution is optimal. If so, ignore the rest of the prompts.     Identify all valid pivot entries.      Pivot on the entry corresponding to Bland's Anti-cycling rules.      Write out the new basic solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            For each problem in solve these problems using the Simplex Algorithm.   Solve the following using the Simplex Algorithm.                                                                                                                                                                                                                                                     For each problem in Sketch the feasible region and label the extreme points traversed by the simplex algorithm in order.   Solve the following using the Simplex Algorithm.   A firm produces a rare blend of scotch whiskey. The blend must contain at least 42% alcohol, at least 25% Highland blend, and no more than 15% malt. Three distillery products can be combined for the blend.  Product A costs $12 a gallon, is 46% alcohol, 30% Highland blend and 10% malt. Product B costs $8 a gallon, is 40% alcohol, 20% Highland blend and 5% malt. Product C costs $14 a gallon, is 45% alcohol, 25% Highland blend and 2% malt.  How much of each product should be used to produce 100 gallons of blend at minimal cost?   A company produces three types of tires for the SUV market. In their manufacture, the tires are processed on two machines, a molder and a capper. Tire type A takes 8 hours in the molder, 4 on the capper and sells for $45. Tire type B takes 10 hours in the molder, 7 on the capper and sells for $50. Tire type C takes 5 hours in the molder, 6 on the capper and sells for $40. At least 75 of each type of tire needs to be made each week to fulfill current contracts. If 3000 hours are available each week for molders and 2700 for cappers, how many of each type of tire should be made each week to maximize revenue?   The canonical programming problem below potentially cycles (due to H.W. Kuhn.). Solve the problem by using the simplex algorithm with Bland anti-cycling rules.                                                                                                                  Consider a tableau whose basic solution is feasible and optimal. Suppose each . Prove that this is the unique optimal solution if and only if each .   The following have multiple optimal solutions, use the Simplex Algorithm and then pivots to classify all the optimal solutions.                                                                                                                                                                              Consider a square tableau:                                                                                                                                    Suppose we perform pivots so we achieve a tableau of the form:                                                                                                                                      Let and . For each of the following matrices perform appropriate pivots to achieve and confirm .               Explain why in that in general.   Find neccesary and sufficient conditions for the minimization tableau                                                                                                               to have a feasible basic solution.   If a minimization tableau as depicted above has a feasible basic solution, must it also have a feasible basic maximum solution? Prove or find a counterexample.   Find neccesary and sufficient conditions for                                                                                                                      to encode feasible basic solutions for both it's maximization and minimization problems.   Prove that each tableau always encodes a unique basic solution by first showing that the default starting basic solution is unique, and then proving that each pivot preserves the uniqueness of the basic solution.  Note that each basic solution is the intersection of hyperplanes. What would it take for this to be empty or contain multiple points? Think in terms of linear (in)dependence and solving linear systems.    "
},
{
  "id": "exercises-simplex-1",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-1",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " Consider the tableau:                                                                    Write out the canonical maximization problem encoded by the tableau.   State the basic solution for this tableau.   Determine if the basic solution is feasible.   Pivot on the entry .   Write out the new canonical maximization problem in terms of the non-basic variables and the new basic solution in terms of .  "
},
{
  "id": "exercises-simplex-2",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-2",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": " Consider the tableau:                                                                              Write out the canonical minimization problem encoded by the tableau.   State the basic solution for this tableau.   Determine if the basic solution is feasible.   Pivot on the entry .   Write out the new canonical minimization problem in terms of the non-basic variables and the new basic solution in terms of .  "
},
{
  "id": "exercises-simplex-3",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-3",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " For each of the following canonical maximization tableaus:    Write out the current basic solution.      Determine if the current basic solution is feasible.      Determine if the tableau detects that the feasible region is unbounded.      Determine if the tableau detects that the problem is infeasible. If so, ignore the rest of the prompts.      Determine if the tableau detects that the problem is unbounded. If so, ignore the rest of the prompts.     Determine if the current basic solution is optimal. If so, ignore the rest of the prompts.     Identify all valid pivot entries.      Pivot on the entry corresponding to Bland's Anti-cycling rules.      Write out the new basic solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           "
},
{
  "id": "exercises-simplex-4",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-4",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "For each problem in solve these problems using the Simplex Algorithm. "
},
{
  "id": "ex-solvesimplex",
  "level": "2",
  "url": "sec-exercisessimplex.html#ex-solvesimplex",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": " Solve the following using the Simplex Algorithm.                                                                                                                                                                                                                                                    "
},
{
  "id": "exercises-simplex-6",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-6",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": "For each problem in Sketch the feasible region and label the extreme points traversed by the simplex algorithm in order. "
},
{
  "id": "exercises-simplex-7",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-7",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": " Solve the following using the Simplex Algorithm.   A firm produces a rare blend of scotch whiskey. The blend must contain at least 42% alcohol, at least 25% Highland blend, and no more than 15% malt. Three distillery products can be combined for the blend.  Product A costs $12 a gallon, is 46% alcohol, 30% Highland blend and 10% malt. Product B costs $8 a gallon, is 40% alcohol, 20% Highland blend and 5% malt. Product C costs $14 a gallon, is 45% alcohol, 25% Highland blend and 2% malt.  How much of each product should be used to produce 100 gallons of blend at minimal cost?   A company produces three types of tires for the SUV market. In their manufacture, the tires are processed on two machines, a molder and a capper. Tire type A takes 8 hours in the molder, 4 on the capper and sells for $45. Tire type B takes 10 hours in the molder, 7 on the capper and sells for $50. Tire type C takes 5 hours in the molder, 6 on the capper and sells for $40. At least 75 of each type of tire needs to be made each week to fulfill current contracts. If 3000 hours are available each week for molders and 2700 for cappers, how many of each type of tire should be made each week to maximize revenue?  "
},
{
  "id": "exercises-simplex-8",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-8",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": "The canonical programming problem below potentially cycles (due to H.W. Kuhn.). Solve the problem by using the simplex algorithm with Bland anti-cycling rules.                                                                                                                 "
},
{
  "id": "exercises-simplex-9",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-9",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": "Consider a tableau whose basic solution is feasible and optimal. Suppose each . Prove that this is the unique optimal solution if and only if each . "
},
{
  "id": "exercises-simplex-10",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-10",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "",
  "body": " The following have multiple optimal solutions, use the Simplex Algorithm and then pivots to classify all the optimal solutions.                                                                                                                                                                            "
},
{
  "id": "ex-invert",
  "level": "2",
  "url": "sec-exercisessimplex.html#ex-invert",
  "type": "Exercise",
  "number": "2.5.11",
  "title": "",
  "body": " Consider a square tableau:                                                                                                                                    Suppose we perform pivots so we achieve a tableau of the form:                                                                                                                                      Let and . For each of the following matrices perform appropriate pivots to achieve and confirm .              "
},
{
  "id": "exercises-simplex-12",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-12",
  "type": "Exercise",
  "number": "2.5.12",
  "title": "",
  "body": "Explain why in that in general. "
},
{
  "id": "exercises-simplex-13",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-13",
  "type": "Exercise",
  "number": "2.5.13",
  "title": "",
  "body": " Find neccesary and sufficient conditions for the minimization tableau                                                                                                               to have a feasible basic solution.   If a minimization tableau as depicted above has a feasible basic solution, must it also have a feasible basic maximum solution? Prove or find a counterexample.   Find neccesary and sufficient conditions for                                                                                                                      to encode feasible basic solutions for both it's maximization and minimization problems.  "
},
{
  "id": "exercises-simplex-14",
  "level": "2",
  "url": "sec-exercisessimplex.html#exercises-simplex-14",
  "type": "Exercise",
  "number": "2.5.14",
  "title": "",
  "body": "Prove that each tableau always encodes a unique basic solution by first showing that the default starting basic solution is unique, and then proving that each pivot preserves the uniqueness of the basic solution.  Note that each basic solution is the intersection of hyperplanes. What would it take for this to be empty or contain multiple points? Think in terms of linear (in)dependence and solving linear systems.  "
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
