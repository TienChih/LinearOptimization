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
  "title": "A review of random things",
  "body": " A review of random things    Let   What is ?      Consider the augemnted matrix     What given a fixed , what should be for the system of equations encoded by to have a unique solution?    What does this mean geometrically?    If the rows of are independent, and , then what is the dimension of the solution space of ?       Consider the square matrix      Explain why for any constant and  geometrically, meaning no cofactor expansion (eww).    Explain why for any constant and  geometrically.    Explain why for any constant and  geometrically.      Some resource for linear algebra define the determinant algebraically, then prove that it has these special geometric properties. In many ways this is a natural approach to introduce the subject to student whose background is primarily algebraic. However, in my opinion, this is backwards. It makes far more sense to approach the determinant geometrically first, there is a property of transformations we want to measure, we call this quantity the determinant, it happens to have cool algebraic properties.  Speaking of       Michael Atiyah (1929 - 2019), mathematician and Field's medalist (1966), once said  Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine.    What do you suppose Dr. Atiyah meant by this quote? How might it have impacted your mathematical journey or education?    "
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
  "id": "sec-intro-4",
  "level": "2",
  "url": "sec-intro.html#sec-intro-4",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "   Consider the square matrix      Explain why for any constant and  geometrically, meaning no cofactor expansion (eww).    Explain why for any constant and  geometrically.    Explain why for any constant and  geometrically.   "
},
{
  "id": "sec-intro-5",
  "level": "2",
  "url": "sec-intro.html#sec-intro-5",
  "type": "Observation",
  "number": "1.1.1",
  "title": "",
  "body": "  Some resource for linear algebra define the determinant algebraically, then prove that it has these special geometric properties. In many ways this is a natural approach to introduce the subject to student whose background is primarily algebraic. However, in my opinion, this is backwards. It makes far more sense to approach the determinant geometrically first, there is a property of transformations we want to measure, we call this quantity the determinant, it happens to have cool algebraic properties.  Speaking of    "
},
{
  "id": "sec-intro-6",
  "level": "2",
  "url": "sec-intro.html#sec-intro-6",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "  Michael Atiyah (1929 - 2019), mathematician and Field's medalist (1966), once said  Algebra is the offer made by the devil to the mathematician. The devil says: I will give you this powerful machine, it will answer any question you like. All you need to do is give me your soul: give up geometry and you will have this marvelous machine.    What do you suppose Dr. Atiyah meant by this quote? How might it have impacted your mathematical journey or education?   "
},
{
  "id": "sec-section-initial",
  "level": "1",
  "url": "sec-section-initial.html",
  "type": "Section",
  "number": "2.1",
  "title": "Initial Examples",
  "body": " Initial Examples  Here we begin with some initial examples motivating the sort of problems we will study.    A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor two hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.    Write two inequalities in terms of that represent the constraints on the time of the sculptor.    Write two inequalities in terms of that represent the constraints on the time of the painter.    Treating as and as , sketch the region on the cartesian plane satisfying all the above inequalities.    Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?    If there was a surge in demand for figurines, and they started selling for $1000, how would that change your approach and the solution.      Suppose Carlos planning a meal is shopping for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti wuth sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.     Let denote pounds of bell pepper, denote pounds of chicken and denote cups of spaghetti with sauce. Find three inequalities in terms of the for how much of each food Carlos should eat to meet his minimum dietary requirements.    How might we solve this problem? How is it different from ?    This seems like a wildly oversimplistic dietary problem, because it is. How might we complicate it for more realism?     The Canonical Maximazation Linear Programming Problem is the problem: Where   The Canonical Minimization Linear Programming Problem is the problem: Where        above are called objective functions .      Any point satisfying either of the above set of inequalities are called feasible solutions .      Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .     Given the canonical minimization problem: How might we convert this to a canonical maximization problem?       How might we in general convert a minimization problem to a maximization problem?    "
},
{
  "id": "activity-exampleart",
  "level": "2",
  "url": "sec-section-initial.html#activity-exampleart",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  A sculptor and a painter work together to produce pieces of art, vases and figurines. The vases takes the sculptor 1 hour to make and the painter 2 hours to paint. The figurine takes the sculptor two hours to make and the painter 1 hour to paint. The sculptor has 35 hours a week to work and the painter has 40 hours a week to work.  Let denote the number of vases produced and denote the number of figurines produced.    Write two inequalities in terms of that represent the constraints on the time of the sculptor.    Write two inequalities in terms of that represent the constraints on the time of the painter.    Treating as and as , sketch the region on the cartesian plane satisfying all the above inequalities.    Suppose the vases sold for $100 and the figurines sold for $120. Without reading ahead, what would or could you do to solve this problem? What kind of things would you need to consider?  For those of you who had Calculus and especially Multivariable Calculus, what ideas from those course might you employ? What are some limitations of these ideas?    If there was a surge in demand for figurines, and they started selling for $1000, how would that change your approach and the solution.   "
},
{
  "id": "activity-examplediet",
  "level": "2",
  "url": "sec-section-initial.html#activity-examplediet",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose Carlos planning a meal is shopping for a meal. Mini bell peppers are $1.00 (simplified) a pound, Chicken is $1.25 a pound and Spaghetti wuth sauce is $0.80 a cup.  A pound of Bell Peppers has 500 units of vitamin A, 30 calories and 10 units of calcium. A pound of Chicken has 75 units of vitamin A, 280 calories and 22 units of calcium. A cup of Spaghetti with sauce has 2000 units of Vitamin A, 240 Calories and 52 units of Calcium.  Carlos needs a minimum of 640 calories, 1650 units of Vitamin A and 500 units of Calcium.   "
},
{
  "id": "def-canonicalproblems",
  "level": "2",
  "url": "sec-section-initial.html#def-canonicalproblems",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  The Canonical Maximazation Linear Programming Problem is the problem: Where   The Canonical Minimization Linear Programming Problem is the problem: Where    "
},
{
  "id": "def-objectivefunction",
  "level": "2",
  "url": "sec-section-initial.html#def-objectivefunction",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "   above are called objective functions .   "
},
{
  "id": "def-feasiblesolution",
  "level": "2",
  "url": "sec-section-initial.html#def-feasiblesolution",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "  Any point satisfying either of the above set of inequalities are called feasible solutions .   "
},
{
  "id": "def-optimialsolution",
  "level": "2",
  "url": "sec-section-initial.html#def-optimialsolution",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": "  Any feasible solution which maximizes (minimizes) the objective function is called an optimal solution .   "
},
{
  "id": "activity-change",
  "level": "2",
  "url": "sec-section-initial.html#activity-change",
  "type": "Activity",
  "number": "2.1.3",
  "title": "",
  "body": " Given the canonical minimization problem: How might we convert this to a canonical maximization problem?       How might we in general convert a minimization problem to a maximization problem?   "
},
{
  "id": "sec-section-convexity",
  "level": "1",
  "url": "sec-section-convexity.html",
  "type": "Section",
  "number": "2.2",
  "title": "Polyhedral Convextiy",
  "body": " Polyhedral Convextiy  In this section, we establish the geometric notions which underlie our work.    In , describe geometrically what the following represent.       https:\/\/www.math3d.org\/F5HLWe9tj                                  Let . Let for some      What is if ?    What is if ?    What is if ?    What is if ?    Describe the set of points .         Let Describe the set of points .       https:\/\/www.math3d.org\/CTPmgI6jF        Given , we call the set the line segment between and .      Let , we say that is convex if given any , also contains the line segment between .      For each of the following subsets of , sketch the region, decide if it is convex or not.     .     .     (in polar coordinates).     (in polar coordinates).     .     .       Let be defined by for some (ie is a half-space of ).     Let . Explain why for any .    Show that for any , that .    Let , that is, there are such that and . Show that .    Show that     Conclude that is convex.       Let be convex sets.     Show that is convex. Hint: Let . Why is the line segment between them contained in ? ?    Sketch an induction argument to show that if is convex, is convex.    Find convex sets so that is not convex.     Prove why the feasible region of a canonical linear programming problem is convex.     Given in we define the norm of to be       Given in we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?      Describe for .      A set is bounded if there is a such that .      Which of the activities , are bounded?      Let be the feasible region of of a canonical maximization linear programming problem, let be the objective function.    Consider the point , which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the the dot product)    Let such that there is a so that . Explain why cannot be a maximizer of .    On the other hand, suppose  IS a maximizer of , what must be true about ?    Consider the canonical maximization linear programming problem:  Maximzie subject to:   How do the statements you've made above apply here? Where IS maximized? Is it consistent with what you said before?           Let be a convex set. We say is an extreme point of if there are no so that .  In other words, does not lie on any non-trivial line segment contained in .      For each of the following convex sets, find it's extreme points (if any).    The feasible region of the problem in .     .     .      If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .      If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .        Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?    Let be optimal solutions of a canonical linear programming problem, giving optimal solution . Show that for any , and that .    Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?      So, we see that the hunt for optimal solutions boils down to a hunt for extreme points.    In How many lines are needed to intersect to obtain a point?    In How many planes are needed to intersect to obtain a point?    In How many dimensional hyperplanes are needed to intersect to obtain a point?                          Suppose a canonical linear programming problem in is bounded by the usual hyperplanes corresponding to as well as additional hyperplanes. How many potential points of intersection could there be?                               So for a canonical linear programming problem in bounded by an additional 15 hyperplanes, how many potential extreme points are there?    "
},
{
  "id": "activity-planes",
  "level": "2",
  "url": "sec-section-convexity.html#activity-planes",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "  In , describe geometrically what the following represent.       https:\/\/www.math3d.org\/F5HLWe9tj                              "
},
{
  "id": "activity-segment",
  "level": "2",
  "url": "sec-section-convexity.html#activity-segment",
  "type": "Activity",
  "number": "2.2.2",
  "title": "",
  "body": "   Let . Let for some      What is if ?    What is if ?    What is if ?    What is if ?    Describe the set of points .         Let Describe the set of points .       https:\/\/www.math3d.org\/CTPmgI6jF     "
},
{
  "id": "def-segment",
  "level": "2",
  "url": "sec-section-convexity.html#def-segment",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Given , we call the set the line segment between and .   "
},
{
  "id": "def-convex",
  "level": "2",
  "url": "sec-section-convexity.html#def-convex",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  Let , we say that is convex if given any , also contains the line segment between .   "
},
{
  "id": "sec-section-convexity-7",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-7",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": "  For each of the following subsets of , sketch the region, decide if it is convex or not.     .     .     (in polar coordinates).     (in polar coordinates).     .     .   "
},
{
  "id": "sec-section-convexity-8",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-8",
  "type": "Activity",
  "number": "2.2.4",
  "title": "",
  "body": "   Let be defined by for some (ie is a half-space of ).     Let . Explain why for any .    Show that for any , that .    Let , that is, there are such that and . Show that .    Show that     Conclude that is convex.   "
},
{
  "id": "sec-section-convexity-9",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-9",
  "type": "Activity",
  "number": "2.2.5",
  "title": "",
  "body": "   Let be convex sets.     Show that is convex. Hint: Let . Why is the line segment between them contained in ? ?    Sketch an induction argument to show that if is convex, is convex.    Find convex sets so that is not convex.   "
},
{
  "id": "sec-section-convexity-10",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-10",
  "type": "Activity",
  "number": "2.2.6",
  "title": "",
  "body": " Prove why the feasible region of a canonical linear programming problem is convex.  "
},
{
  "id": "def-norm",
  "level": "2",
  "url": "sec-section-convexity.html#def-norm",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "  Given in we define the norm of to be    "
},
{
  "id": "def-ball",
  "level": "2",
  "url": "sec-section-convexity.html#def-ball",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  Given in we define the closed ball of radius centered at to be   The open ball centered at with radius is similarly defined. What do you think it is?   "
},
{
  "id": "sec-section-convexity-13",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-13",
  "type": "Activity",
  "number": "2.2.7",
  "title": "",
  "body": "  Describe for .   "
},
{
  "id": "def-bounded",
  "level": "2",
  "url": "sec-section-convexity.html#def-bounded",
  "type": "Definition",
  "number": "2.2.5",
  "title": "",
  "body": "  A set is bounded if there is a such that .   "
},
{
  "id": "sec-section-convexity-15",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-15",
  "type": "Activity",
  "number": "2.2.8",
  "title": "",
  "body": "  Which of the activities , are bounded?   "
},
{
  "id": "activity-ball",
  "level": "2",
  "url": "sec-section-convexity.html#activity-ball",
  "type": "Activity",
  "number": "2.2.9",
  "title": "",
  "body": "  Let be the feasible region of of a canonical maximization linear programming problem, let be the objective function.    Consider the point , which direction would increase the value of the most? The least? Keep the same?  (Recall the properties of the the dot product)    Let such that there is a so that . Explain why cannot be a maximizer of .    On the other hand, suppose  IS a maximizer of , what must be true about ?    Consider the canonical maximization linear programming problem:  Maximzie subject to:   How do the statements you've made above apply here? Where IS maximized? Is it consistent with what you said before?        "
},
{
  "id": "def-extremepoint",
  "level": "2",
  "url": "sec-section-convexity.html#def-extremepoint",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": "  Let be a convex set. We say is an extreme point of if there are no so that .  In other words, does not lie on any non-trivial line segment contained in .   "
},
{
  "id": "sec-section-convexity-18",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-18",
  "type": "Activity",
  "number": "2.2.10",
  "title": "",
  "body": "  For each of the following convex sets, find it's extreme points (if any).    The feasible region of the problem in .     .     .   "
},
{
  "id": "thm-boundedextreme",
  "level": "2",
  "url": "sec-section-convexity.html#thm-boundedextreme",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is bounded, then contains an optimal solution which is an extreme point of .   "
},
{
  "id": "thm-unboundedextreme",
  "level": "2",
  "url": "sec-section-convexity.html#thm-unboundedextreme",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "",
  "body": "  If is the feasible region of a canonical problem and is unbounded:    If the problem is a maximization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .    If the problem is a minimization problem and if there is a so that for all , then contains an optimal solution which is an extreme point of .     "
},
{
  "id": "sec-section-convexity-21",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-21",
  "type": "Activity",
  "number": "2.2.11",
  "title": "",
  "body": "  Let be the objective function for a canonical maximization problem, subject to:  Find a maximal solution that is not a corner point. Why doesn't this contradict ?    Let be optimal solutions of a canonical linear programming problem, giving optimal solution . Show that for any , and that .    Let be the objective function for a canonical maximization problem. Find a set of constraints so that the feasible region is unbounded but there is a maximal solution. Why doesn't this contradict ?   "
},
{
  "id": "sec-section-convexity-22",
  "level": "2",
  "url": "sec-section-convexity.html#sec-section-convexity-22",
  "type": "Activity",
  "number": "2.2.12",
  "title": "",
  "body": "  So, we see that the hunt for optimal solutions boils down to a hunt for extreme points.    In How many lines are needed to intersect to obtain a point?    In How many planes are needed to intersect to obtain a point?    In How many dimensional hyperplanes are needed to intersect to obtain a point?                          Suppose a canonical linear programming problem in is bounded by the usual hyperplanes corresponding to as well as additional hyperplanes. How many potential points of intersection could there be?                               So for a canonical linear programming problem in bounded by an additional 15 hyperplanes, how many potential extreme points are there?   "
},
{
  "id": "sec-pivot",
  "level": "1",
  "url": "sec-pivot.html",
  "type": "Section",
  "number": "3.1",
  "title": "Canonical Programs and the Simplex Pivot",
  "body": " Canonical Programs and the Simplex Pivot  We begin the process of establishing an algorithm.    Consider the canonical maximization problem:     Note that we may rewrite this as a system of equalities by introducing the slack variables  .       What must be true about the slack variables ?                     What is the largest value could obtain?                    is unbounded.        Similarly the canonical minimization problem:   Where   May be rewritten as:       As usual, we focus on maximization for now.    We can rewrite as Which may be recorded by the Tucker Tableau :   The variables at the top are called the decision variables or independent variables , the variables on the side are the slack variables or basic variables .      Note that this tableau corresponds to the point where . We will further explore what this means in a bit. But for now, if , then:       Consider the region in bound by and . Let and     If , what points in satisfy ?    If , what points in satisfy ?    What points in satisfy both ?    What points in satisfy both ?         Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.    Set up the canonical maximization problem corresponding to the above and record it in the following tableau:     Recall that this tableau corresponds to the point . If we slightly increase , do we increase ?    Let's increase . Take the row corresponding to and solve for in terms of .   For each equality corresponding to the rows replace with the value you found ealier and rewrite the left hand sides.    Record this new system in the following tableau:     Recall that this new tableau corresponds to , what point is this?    If we increase from 0, do we increase ? What about increasing ?    Let's increase . Take the row corrresponding to and repeat Tasks (c) and (d) to obtain a tableau of the form:     What point does this new tableau correspond to?    If I increase from 0, do I increase ? What about ?    Consider the plot of the feasible region for this problem. What exactly, geometrically, did we end up doing here?          Based on , what is a criteria to determine if a feasible tableau corresponds to an optimal solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .        Consider the tableau: along with the corresponding system of equations.    Solve for in terms of .    In each of the other two equalities, replace with the expression we found above and simplify.    Record this new system in the following tableau:       The following is the algorithm for a pivot transformation :    Pick a non-zero entry in the tableau but not in the objective row or constraint column.    Transpose the decision and slack variables corresponding to the position of .    Replace by .    Replace each entry in the same row as (but not ) with .    Replace each entry in the same column as (but not ) with .    Each entry not in the same row or column as but in the same column as (which is in the same row as ) and in the same row as (which is in the same column as ) is replaced with .         Consider the problem: maximize subject to: which we may encode as:      Pivot on the entry with : (Keep track of the decision and slack variables.)    Pivot on the entry with : (Keep track of the decision and slack variables.)    Pivot on the entry with : (Keep track of the decision and slack variables.)    Look at your decision variables. Which two lines are we currently sitting on?    How do we know we now have an optimal solution based only on the tableau?            "
},
{
  "id": "activity-maxslack",
  "level": "2",
  "url": "sec-pivot.html#activity-maxslack",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Consider the canonical maximization problem:     Note that we may rewrite this as a system of equalities by introducing the slack variables  .       What must be true about the slack variables ?                     What is the largest value could obtain?                    is unbounded.     "
},
{
  "id": "sec-pivot-4",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-4",
  "type": "Observation",
  "number": "3.1.1",
  "title": "",
  "body": "  Similarly the canonical minimization problem:   Where   May be rewritten as:      "
},
{
  "id": "def-tuckertableau",
  "level": "2",
  "url": "sec-pivot.html#def-tuckertableau",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  We can rewrite as Which may be recorded by the Tucker Tableau :   The variables at the top are called the decision variables or independent variables , the variables on the side are the slack variables or basic variables .   "
},
{
  "id": "sec-pivot-7",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-7",
  "type": "Observation",
  "number": "3.1.3",
  "title": "",
  "body": "  Note that this tableau corresponds to the point where . We will further explore what this means in a bit. But for now, if , then:    "
},
{
  "id": "sec-pivot-8",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-8",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  Consider the region in bound by and . Let and     If , what points in satisfy ?    If , what points in satisfy ?    What points in satisfy both ?    What points in satisfy both ?      "
},
{
  "id": "activity-widget",
  "level": "2",
  "url": "sec-pivot.html#activity-widget",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.    Set up the canonical maximization problem corresponding to the above and record it in the following tableau:     Recall that this tableau corresponds to the point . If we slightly increase , do we increase ?    Let's increase . Take the row corresponding to and solve for in terms of .   For each equality corresponding to the rows replace with the value you found ealier and rewrite the left hand sides.    Record this new system in the following tableau:     Recall that this new tableau corresponds to , what point is this?    If we increase from 0, do we increase ? What about increasing ?    Let's increase . Take the row corrresponding to and repeat Tasks (c) and (d) to obtain a tableau of the form:     What point does this new tableau correspond to?    If I increase from 0, do I increase ? What about ?    Consider the plot of the feasible region for this problem. What exactly, geometrically, did we end up doing here?       "
},
{
  "id": "sec-pivot-10",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-10",
  "type": "Activity",
  "number": "3.1.4",
  "title": "",
  "body": "  Based on , what is a criteria to determine if a feasible tableau corresponds to an optimal solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .     "
},
{
  "id": "sec-pivot-11",
  "level": "2",
  "url": "sec-pivot.html#sec-pivot-11",
  "type": "Activity",
  "number": "3.1.5",
  "title": "",
  "body": "  Consider the tableau: along with the corresponding system of equations.    Solve for in terms of .    In each of the other two equalities, replace with the expression we found above and simplify.    Record this new system in the following tableau:    "
},
{
  "id": "def-pivot",
  "level": "2",
  "url": "sec-pivot.html#def-pivot",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": "  The following is the algorithm for a pivot transformation :    Pick a non-zero entry in the tableau but not in the objective row or constraint column.    Transpose the decision and slack variables corresponding to the position of .    Replace by .    Replace each entry in the same row as (but not ) with .    Replace each entry in the same column as (but not ) with .    Each entry not in the same row or column as but in the same column as (which is in the same row as ) and in the same row as (which is in the same column as ) is replaced with .     "
},
{
  "id": "activity-pivotexample",
  "level": "2",
  "url": "sec-pivot.html#activity-pivotexample",
  "type": "Activity",
  "number": "3.1.6",
  "title": "",
  "body": "   Consider the problem: maximize subject to: which we may encode as:      Pivot on the entry with : (Keep track of the decision and slack variables.)    Pivot on the entry with : (Keep track of the decision and slack variables.)    Pivot on the entry with : (Keep track of the decision and slack variables.)    Look at your decision variables. Which two lines are we currently sitting on?    How do we know we now have an optimal solution based only on the tableau?           "
},
{
  "id": "sec-curious",
  "level": "1",
  "url": "sec-curious.html",
  "type": "Section",
  "number": "3.2",
  "title": "A Curious Situation",
  "body": " A Curious Situation    Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, ie: Of course, the values shouldn't be negative, so .  But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:     Pivot on the entry with the :     Pivot on the entry with the :     Compare this solution and tableau to the final solution in . What do you notice?          "
},
{
  "id": "activity-insurance",
  "level": "2",
  "url": "sec-curious.html#activity-insurance",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "  Suppose a company produces two types of widgets. Widget 1 sells for $200 and Widget 2 sells for $150.  Each widget takes ingredients A, B and C. Widget 1 needs 1 unit of A, 2 units of B and 2 units of C. Widget 2 needs 2 units of A, 2 units of B and 1 unit of C.  The company has 20 units of ingredient A, 30 units of B and 25 units of C.  Now, the company wants to assign values to the three ingredients. The values for each should be enough so that in a disaster, the potential revenue is recovered, ie: Of course, the values shouldn't be negative, so .  But, the higher we value the ingredients, the greater the insurance premiums will be, so we need to minimize .  We can convert this into a max problem to solve, but we can also record it in the following tableau:     Pivot on the entry with the :     Pivot on the entry with the :     Compare this solution and tableau to the final solution in . What do you notice?       "
},
{
  "id": "sec-simplexmax",
  "level": "1",
  "url": "sec-simplexmax.html",
  "type": "Section",
  "number": "3.3",
  "title": "The Simplex Algorithm for Canonical Maximization",
  "body": " The Simplex Algorithm for Canonical Maximization   Consider the following tableau:  Note that each for this tableau. Write out the corresponding system of canonical inequalities (this should be easy, almost everything is zero). Are they all satisfied?   Which of the following is an if and only if condition for a Tucker Tableau to correspond to a feasible solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .        Consider the following tableau:   Note that each for this tableau.    Why is this tableau feasible?    Which of the following could we increase from zero to increase our objective function value?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    What is the largest value we could increase while satisfying our 3 inequalities? What about ?    Find an if and only if condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .      Consider the following tableau: Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?    Find an if and only if condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .        Consider the canonical max problem corresponding to:     Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?    Consider a sketch of our feasible region:   We could choose to pivot ( in the sketch) with either . Only one of these would result in a feasible solution. Looking graphically, which is it?    What's the connection between the two above tasks?    For a canonical linear program encoded by a Tucker tableau: if we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .      Based on the observations above, what should be the pivot entry for the following tableau?       For each of the following tableaus, determine what if any of the following are true:   The tableau corresponds to a feasible solution.    The tableau corresponds to an optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points                                       With all this, we finally may define our simplex algorithm .     Ensure that each , that is that the solution is feasible.  IF every : STOP the current solution is optimal.  PICK a column such that .  IF each : STOP the objective function is unbounded.  Find a row that minimizes .  PIVOT on .  GOTO 1.     "
},
{
  "id": "activity-tableaufeasible",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaufeasible",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": " Consider the following tableau:  Note that each for this tableau. Write out the corresponding system of canonical inequalities (this should be easy, almost everything is zero). Are they all satisfied?   Which of the following is an if and only if condition for a Tucker Tableau to correspond to a feasible solution?    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .    Some of the .    All of the .     "
},
{
  "id": "activity-tableaubounded",
  "level": "2",
  "url": "sec-simplexmax.html#activity-tableaubounded",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": "  Consider the following tableau:   Note that each for this tableau.    Why is this tableau feasible?    Which of the following could we increase from zero to increase our objective function value?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    If we increase to 5, are all our inequalities satisfied? What about 10? 100?    What is the largest value we could increase while satisfying our 3 inequalities? What about ?    Find an if and only if condition for a feasible tableau for a canonical maximization problem to have an unbounded feasible region.    All of the .    There is a row so that all of the in that row.    There is a column so that all of the in that column.    All of the .    All of the .      Consider the following tableau: Our previous discussion leads us to believe that may be increased as much as we please, and our two inequalities will remain satisfied. Yet consider a sketch of the region and function:     It turns out this system still achieves a maximum solution. Why does this not contradict our previous work?    Find an if and only if condition for a feasible tableau for a canonical maximization problem to have an unbounded objective function.    All of the .    There is a row so that all of the in that row and .    There is a row so that all of the in that row and .    There is a column so that all of the in that column and .    There is a column so that all of the in that column and .     "
},
{
  "id": "sec-simplexmax-4",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-4",
  "type": "Activity",
  "number": "3.3.3",
  "title": "",
  "body": "  Consider the canonical max problem corresponding to:     Let's say we wanted to increase from 0. What is the largest we could increase to while satisfying all 3 inequalities?    Consider a sketch of our feasible region:   We could choose to pivot ( in the sketch) with either . Only one of these would result in a feasible solution. Looking graphically, which is it?    What's the connection between the two above tasks?    For a canonical linear program encoded by a Tucker tableau: if we pivot in column , which row should we choose?    Any row .    Any as long as .    The row where is minimized.    The row where is minimized.    The row where is minimized of of the rows where .    The row where is minimized of of the rows where .      Based on the observations above, what should be the pivot entry for the following tableau?    "
},
{
  "id": "sec-simplexmax-5",
  "level": "2",
  "url": "sec-simplexmax.html#sec-simplexmax-5",
  "type": "Activity",
  "number": "3.3.4",
  "title": "",
  "body": "  For each of the following tableaus, determine what if any of the following are true:   The tableau corresponds to a feasible solution.    The tableau corresponds to an optimal solution.    The tableau tells us the feasible region is unbounded.    The tableau tells us the objective function is unbounded.   If a tableau is feasible but not optimal, determine the legit pivot points                                      "
},
{
  "id": "def-simplexcanonmax",
  "level": "2",
  "url": "sec-simplexmax.html#def-simplexcanonmax",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "   Ensure that each , that is that the solution is feasible.  IF every : STOP the current solution is optimal.  PICK a column such that .  IF each : STOP the objective function is unbounded.  Find a row that minimizes .  PIVOT on .  GOTO 1.    "
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
