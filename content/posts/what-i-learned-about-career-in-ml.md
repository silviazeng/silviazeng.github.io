---
title: What I Learned about Career in my 3 months ML Deep-dive
date: 2021-11-19
tags:
  - career
  - AI
  - uncertainty
---
_— To people still struggling to figure out their futures like I am_

*nerd alert: this article contains terms that may bore or confuse some readers

For many of my families and friends, I wasn’t there for them for the past 18 months. First, there was a 0-to-1 rollercoaster intrapreneurial journey that took my day and night; then, a layoff that I saw coming but felt powerless to reverse; and then, the deep depression lasted for I don’t know how long (and unsuccessful recruiting in between).

I felt spent, defeated, and lost; I had been through self-doubt, self-blame, and cynicism. But hey! I found some gems in my deep-dive into Machine Learning because it’s so relevant an analogy to career and life:

For my dear readers that don’t know Gradient Descent([wiki link](https://en.wikipedia.org/wiki/Gradient_descent)), all you need to know is it’s an algorithm used to achieve optimization through iterative steps. And it works like this, ideally:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*-Yc9Ma5b9y4-Ybaq9F1eKw.png)

(source:wiki) You thought your career would be like a smooth path running to the center

You thought you would happily walk downhill (yes, in Gradient Descent, an optimization object is typically to minimize a function), one step across a contour line: got in a great college, then a prestigious investment bank, survived the top MBA program, and secured an exciting job… However, the reality was more like this squiggly path:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*OVsVpidoZXZ3owFafBhC_g.png)

(source: Andrew Ng, Machine Learning) Sometimes you felt you are randomly walking downhill and uphill

To make things worse, you are not even converging, or converging to a suboptimal point that you couldn’t get out:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*JcESS5LasB-yvuS8-eSXPg.png)

(based on [a post by _Nadav Cohen_](http://www.offconvex.org/2018/11/07/optimization-beyond-landscape/)_) you could be trapped in a local minimum way higher than you intended minimum_

So here’s my first takeaway: **1) Effective optimization was almost certain to be bumpy**

Life and career are ultra-high-dimensional problems with endless unquantifiable input and output (in the parlance of ML, features and targets). To carry out this type of complex optimization, it put much burden on computational efficiency. Even after excluding the factors that are not very relevant (low-feature-importance data) to your end goal, it’s still a daunting task for the human brain.

So one solution is Stochastic Gradient Descent. In Muggles’ words, it’s similar to the Gradient Descent presented above except that it calculates using a random subset of the data instead of the entire dataset. One result of this method is the path will no longer go steadily toward your local minimum; instead, if you only look at the several consecutive iterations, it may seem like a random walk.

So rest assured, you may think you are wandering about and not going anywhere, but it’s only because career is too complex a problem and the little machine in your head is optimizing computational efficiency in order to achieve the same goal (though in some other occasions, you are right; see below item 3).

**2) It’s a process that requires persistent iterations**

[](https://medium.com/plans?source=promotion_paragraph---post_body_banner_dot_calm_field--8e4faa253646---------------------------------------)

When you find yourself in a random walk, and you doubt that you are in the middle of a poor local minimum, the only way to find out is to continue the iterations to walk further before you draw the conclusion. Map out the path you’ve walked, and analyze it if needed.

Any type of change requires courage, and could entail pain. Moving from my hometown to Shanghai requires just a tiny drop of courage, but moving across the globe and changing career tracks require more and it did entail pain. I could be on the wrong path going further from my optimization object, I could be just in the middle of a squiggly path to the destination. But if I stop the iterations and sit on my current spot, I would never find out which is true.

**3) Two ways to improve your optimization: more data, tweak the model**

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*jLbXI85U8t9Aj9MbcVyOmg.png)

(source: Applied ML in Python by University of Michigan) A very typical problem-solving process in ML

It’s quite normal if your initial model outcome isn’t as expected. It takes some fine-tuning to make your model work better. First, you explore some data (the people around you that you want to learn from, the knowledge about yourself, and the ever-changing world, …), and you take guess which features and which models might work, and you give them a try, and evaluate, and come back to see whether there’s some data pre-processing you missed, refine the features, narrow down to a short-list of good models or try some other models, and then evaluate again. Typically, you might want to go through this cycle several times.

There are only two options after you’ve done your share of evaluation: expand the sample size (according [a famous paper by Peter Norvig(2009)](https://ieeexplore.ieee.org/abstract/document/4804817?casa_token=8kAtpHfBav0AAAAA%3AsV4quUI80QLpbdnJ0HTTP6B-1KysT-2WByMid3FCn5i94DuCkodX07AJlMVThWSJj4suon5bVA), when the sample size is large enough, the type of the model doesn’t matter that much), or change something in your model (use a higher degree polynomial model for example).

To translate for the real-world setting, we need to obtain more results of our own experiments (so more experiments need to be made happened in the first place) or more information about the successful or failed stories around your goal, or tweak something in the way you look at the issue, the task, the reality.

**4) Remember to set a cost function for career is the first step of your optimization project**

The word confused me for a while, but Cost Function or Loss Function is just another word for optimization objective. None of the above make sense without a cost function first.

There are so many ways and models to help you achieve optimization: linear regression, SVM, decision trees,… One thing they all have in common is that they need a function for them to optimize. That is your goal. It doesn’t have to be “I want to create a company as great as ____”, but there has to be something. “I want to figure what I would love to do for the rest of my life” or “I want to read all day without worrying about anything” could do (at least that’s how I told myself). Or as it shows in the word “COST function”, it could be “I do not want to be a terrible person”. Without an optimization objective, no models will work (even the deep learning neural network in your imagination won’t do it for you).

**5) Don’t overanalyze**

It’s especially dangerous when you don’t have a large enough dataset, and you want to use a complex model to fit. It’s called “overfitting”. The model works perfectly for your training set (your previous experiences), but won’t generalize well for unseen data (it doesn't help with your future events). In this case, you either tune down the complexity of your model; or go gather more data!

Treading between the danger of “underfitting” and “overfitting” is probably a task for a lifetime.

Thanks for bearing with me till this end. While you are reading this article, you might find that the frameworks in ML can go beyond “career” and extend to almost everything. For me, it allows me to reexamine myself and my understanding of the world around me. However, while we are benefiting from and got inspired by ML, don’t forget that the human brain is more superior and complex in a lot of ways, and we are advantageous to leverage it to overcome many drawbacks of today’s ML and guide its future. At the end of the day, life is beyond mathematical optimization.

There’s one last thing I would love to mention. No matter what type of model you are trying to train for whatever purpose, don’t forget that we are all optimizing under different constraints such as computational capacity, data availability. Find your own path, and don’t overstretch yourself.

Now happy fine-tuning your own model!